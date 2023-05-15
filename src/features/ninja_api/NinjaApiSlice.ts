import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { RootState } from '../../app/store';
import { FactsState, Facts, HistoricalEventsState, BucketList, BucketListState, Riddles, RiddlesState, NutritionalValues, NutritionalValuesState } from '../../interfaces/Interfaces';

const limit = 1;
const headers = { 'X-Api-Key': '5E9zpzcq8OkGLYRiYqtJqQ==Eu9DG65zVddHSDvh'}

export const fetchFacts = createAsyncThunk<Facts[]>(
    "ninjaApi/fetchFacts",
    async () => {
        const response = await axios.get('https://api.api-ninjas.com/v1/facts?limit=' + limit, { headers })
                                    .then(response => {
                                        return response.data}
                                    );
        return response;
    }
);
export const fetchBucketList = createAsyncThunk<BucketList[]>(
    "ninjaApi/fetchBucketList",
    async () => {
        const response = await axios.get('https://api.api-ninjas.com/v1/bucketlist', { headers })
                                    .then(response => {
                                        return response.data}
                                    );
        return response;
    }
);

export const fetchRiddle = createAsyncThunk<Riddles[]>(
    "ninjaApi/fetchRiddle",
    async () => {
        const response = await axios.get('https://api.api-ninjas.com/v1/riddles', { headers })
                                    .then(response => {
                                        return response.data}
                                    );
        return response;
    }
);

export const fetchNutritionalValue = createAsyncThunk(
    "ninjaApi/fetchNutritionalValue",
    async (text: string) => {
        // const {text} = payload;
        // console.log('first')
        const response = await axios.get('https://api.api-ninjas.com/v1/nutrition?query=' + text, { headers })
                                    .then(response => {
                                        return response.data}
                                    );
        return response;
    }
);

export const fetchHistoricalEventsByName = createAsyncThunk(
    "ninjaApi/fetchHistoricalEventsByName",
    async (payload: {text: string | number, page: number},) => {
        const {text, page } = payload;
        const response = await axios.get('https://api.api-ninjas.com/v1/historicalevents?text=' + text + "&offset=" + page, { headers })
                                    .then(response => {
                                        return response.data}
                                    );
        return response;
    }
);
export const fetchHistoricalEventsByYear = createAsyncThunk(
    "ninjaApi/fetchHistoricalEvents",
    async (payload: {text: number | null, page: number},) => {
        const {text, page } = payload;
        const response = await axios.get('https://api.api-ninjas.com/v1/historicalevents?year=' + text + "&offset=" + page, { headers })
                                    .then(response => {
                                        return response.data}
                                    );
        return response;
    }
);



// const initialState = { value: 0 } as CounterState

const NinjaApiSlice = createSlice({
    name: 'ninjaApi',
    initialState: {
        FactsState : {
            list: [],
            error: null,
            status: "idle",
        } as FactsState,
        BucketListState : {
            list: {},
            error: null,
            status: "idle",
        } as BucketListState,
        RiddleState : {
            list: [],
            error: null,
            status: "idle",
        } as RiddlesState,
        NutritionalValuesState : {
            list: [],
            error: null,
            status: "idle",
        } as NutritionalValuesState,
        HistoricalEventsByNameState : {
            list: [],
            error: null,
            status: "idle",
        } as HistoricalEventsState,
        HistoricalEventsByYearState : {
            list: [],
            error: null,
            status: "idle",
        } as HistoricalEventsState,
    },
    reducers: {
        // increment(state) {
        //     state.value++
        // },
        // decrement(state) {
        //     state.value--
        // },
        // incrementByAmount(state, action: PayloadAction<number>) {
        //     state.value += action.payload
        // },
    },
    extraReducers: (builder) => {

        // When we send a request,
        // `fetchTodos.pending` is being fired:
        builder.addCase(fetchFacts.pending, (state) => {
            // At that moment,
            // we change status to `loading` 
            // and clear all the previous errors:
            state.FactsState.status = "loading";
            state.FactsState.error = null;
        });

        // When a server responses with the data,
        // `fetchTodos.fulfilled` is fired:
        builder.addCase(fetchFacts.fulfilled,
            (state, { payload }) => {
                // We add all the new todos into the state
                // and change `status` back to `idle`:
                state.FactsState.list = payload;
                state.FactsState.status = "idle";
            });

        // When a server responses with an error:
        builder.addCase(fetchFacts.rejected,
            (state, { payload }) => {
                // We show the error message
                // and change `status` back to `idle` again.
                // if (payload) state.FactsState.error = payload.message;
                state.FactsState.status = "idle";
            });


        builder.addCase(fetchBucketList.pending, (state) => {
            state.BucketListState.status = "loading";
            state.BucketListState.error = null;
        });
        builder.addCase(fetchBucketList.fulfilled,
            (state, { payload }) => {
                state.BucketListState.list = payload;
                state.BucketListState.status = "idle";
            });
        builder.addCase(fetchBucketList.rejected,
            (state, { payload }) => {
                state.BucketListState.status = "idle";
            });


        builder.addCase(fetchRiddle.pending, (state) => {
            state.RiddleState.status = "loading";
            state.RiddleState.error = null;
        });
        builder.addCase(fetchRiddle.fulfilled,
            (state, { payload }) => {
                state.RiddleState.list = payload;
                state.RiddleState.status = "idle";
            });
        builder.addCase(fetchRiddle.rejected,
            (state, { payload }) => {
                state.RiddleState.status = "idle";
            });


        builder.addCase(fetchNutritionalValue.pending, (state) => {
            state.NutritionalValuesState.status = "loading";
            state.NutritionalValuesState.error = null;
        });
        builder.addCase(fetchNutritionalValue.fulfilled,
            (state, { payload }) => {
                state.NutritionalValuesState.list = payload;
                state.NutritionalValuesState.status = "idle";
            });
        builder.addCase(fetchNutritionalValue.rejected,
            (state, { payload }) => {
                state.NutritionalValuesState.status = "idle";
            });


        builder.addCase(fetchHistoricalEventsByName.pending, (state) => {
            state.HistoricalEventsByNameState.status = "loading";
            state.HistoricalEventsByNameState.error = null;
        });
        builder.addCase(fetchHistoricalEventsByName.fulfilled,
            (state, { payload }) => {
                state.HistoricalEventsByNameState.list = payload;
                state.HistoricalEventsByNameState.status = "idle";
            });
        builder.addCase(fetchHistoricalEventsByName.rejected,
            (state, { payload }) => {
                state.HistoricalEventsByNameState.status = "idle";
            });


        builder.addCase(fetchHistoricalEventsByYear.pending, (state) => {
            state.HistoricalEventsByYearState.status = "loading";
            state.HistoricalEventsByYearState.error = null;
        });
        builder.addCase(fetchHistoricalEventsByYear.fulfilled,
            (state, { payload }) => {
                state.HistoricalEventsByYearState.list = payload;
                state.HistoricalEventsByYearState.status = "idle";
            });
        builder.addCase(fetchHistoricalEventsByYear.rejected,
            (state, { payload }) => {
                state.HistoricalEventsByYearState.status = "idle";
            });
    },
})

// export const { increment, decrement, incrementByAmount } = NinjaApiSlice.actions
export const FactsObject = (state: RootState) => state.ninjaApi.FactsState;
export const BucketListObject = (state: RootState) => state.ninjaApi.BucketListState;
export const RiddleObject = (state: RootState) => state.ninjaApi.RiddleState;
export const NutritionalValuesObject = (state: RootState) => state.ninjaApi.NutritionalValuesState;
export const HistoricalEvents = (state: RootState) => state.ninjaApi.HistoricalEventsByNameState;
export const HistoricalEventsByYear = (state: RootState) => state.ninjaApi.HistoricalEventsByYearState;
export default NinjaApiSlice.reducer