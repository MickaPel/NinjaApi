export interface Facts {
    fact: string
}
export interface FactsState {
    status: "loading" | "idle";
    error: string | null;
    list: Facts[];
}

export interface BucketList {
    list: {
        item: string
    }
}
export interface BucketListState {
    status: "loading" | "idle";
    error: string | null;
    list: BucketList[];
}

export interface Riddles {
    title: string,
    question: string,
    answer: string,
}
export interface RiddlesState {
    status: "loading" | "idle";
    error: string | null;
    list: Riddles[];
}

export interface NutritionalValues {
    name: string,
    calories: number,
    serving_size_g: number,
    fat_total_g: number,
    fat_saturated_g: number,
    protein_g: number,
    sodium_mg: number,
    potassium_mg: number,
    cholesterol_mg: number,
    carbohydrates_total_g: number,
    fiber_g: number,
    sugar_g: number
}
export interface NutritionalValuesState {
    status: "loading" | "idle";
    error: string | null;
    list: NutritionalValues[];
}

export interface HistoricalEvents {
    year: string,
    month: string,
    date: string,
    event: string
}
export interface HistoricalEventsState {
    status: "loading" | "idle";
    error: string | null;
    list: HistoricalEvents[];
}