import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { fetchFacts, FactsObject, HistoricalEvents, fetchHistoricalEventsByName, HistoricalEventsByYear, fetchHistoricalEventsByYear } from '../features/ninja_api/NinjaApiSlice';
import { AppDispatch } from '../app/store';
import { ArrowLeft, ArrowRight } from 'react-feather';
import { HistoricalEventsState } from '../interfaces/Interfaces';

const HistoricalEventsView: React.FC = () => {

    const [buttonName, setButtonName] = useState<boolean>(false)
    const [buttonYear, setButtonYear] = useState<boolean>(false)
    const [text, setText] = useState<string>('')
    const [year, setYear] = useState<number | null>(null)
    const [page, setPage] = useState<number>(1)
    // const [historicalEvent, setHistoricalEvent] = useState<HistoricalEventsState>()
    
    
    const historicalEvents = useSelector(HistoricalEvents)
    const historicalEventsByYear = useSelector(HistoricalEventsByYear)

    console.log(historicalEvents?.list.length)
    // console.log(historicalEvent)
    
    const dispatch = useDispatch<AppDispatch>();
    const newHistoricalEventByName = async(text: string | number, page: number) => {
            setPage(1)
            const payload: {text:string | number, page:number} = {
                text: text,
                page: page
            }
            dispatch(fetchHistoricalEventsByName(payload))
            // setHistoricalEvent(historicalEvents)
    }
    const newHistoricalEventByYear = async(text: number | null, page: number) => {
            setPage(1)
            const payload: {text:number | null, page:number} = {
                text: text,
                page: page
            }
            dispatch(fetchHistoricalEventsByYear(payload))
            // setHistoricalEvent(historicalEventsByYear)
    }

    useEffect(() => {
            const payload: {text:string | number, page:number} = {
                text: text,
                page: page
            }
            if(text !== ''){
                dispatch(fetchHistoricalEventsByName(payload))
            }
            const payload2: {text:number | null, page:number} = {
                text: year,
                page: page
            }
            if(year !== null){
                dispatch(fetchHistoricalEventsByYear(payload2))
            }
        
    }, [page])


    return(
        <>
            <div className='text-center pt-10'>
                <div className='flex flex-col items-center'>
                    <p className='m-auto w-3/4 md:w-1/3 text-lg text-orange-200'>Search for a historical event by keyword</p>
                    <div className='flex flex-row w-64 justify-around my-5'>
                        <button className={`rounded border border-stone-300 p-1 ${buttonName ? 'bg-slate-600' : 'bg-inherit'}`} onClick={() => {setButtonName(true); setButtonYear(false)}}>By Name</button>
                        <button className={`rounded border border-stone-300 p-1 ${buttonYear ? 'bg-slate-600' : 'bg-inherit'}`} onClick={() => {setButtonYear(true); setButtonName(false)}}>By Year</button>
                    </div>
                    {buttonName ?
                        <>
                            <p className='m-auto w-3/4 md:w-1/3 text-lg text-orange-200'>(Example: Roman Empire)</p>
                            <input type="text" placeholder="Search by name" onChange={(e) => {setText(e.target.value)}} className='text-black w-3/4 sm:w-1/3 lg:w-72 rounded p-2 mt-4'/>
                            <button 
                                onClick={() => newHistoricalEventByName(text, page)}
                                className='mt-5 text-xl rounded-xl p-2 bg-gray-500 hover:bg-gray-400 text-amber-400'
                                >Search
                            </button>
                        </> : <></>
                    }
                    {buttonYear ?
                        <>
                            <p className='m-auto w-3/4 md:w-1/3 text-lg text-orange-200'>(Example: 1945, -351)</p>
                            <input type="text" placeholder="Search by year" onChange={(e) => {setYear(+e.target.value)}} className='text-black w-3/4 sm:w-1/3 lg:w-72 rounded p-2 mt-4'/>
                            <button 
                                onClick={() => newHistoricalEventByYear(year, page)}
                                className='mt-5 text-xl rounded-xl p-2 bg-gray-500 hover:bg-gray-400 text-amber-400'
                                >Search
                            </button>
                        </> : <></>
                    }
                    
                    
                </div>
                {historicalEvents?.list.length !== 0 && buttonName ?
                    <>
                        <p className='text-lg text-orange-200 underline underline-offset-2 mt-4'>Search for "{text}" :</p>
                        {historicalEvents?.list?.map((item, id) => {
                            return(
                                    <div key={id} className='flex flex-col items-start mx-4  md:ml-10'>
                                        <p className='underline text-orange-200'>Year: {item.year}</p>
                                        <p className='text-orange-50 text-left'>{item.event}</p>
                                    </div>
                            )
                        })}
                        {historicalEvents?.list.length !== 0 && historicalEvents?.list.length > 9 ?
                            <div className='flex flex-row items-center justify-between m-auto w-20 my-6'>
                                <button onClick={() => {if(page>1)setPage(page - 1)}}><ArrowLeft /></button>
                                <div>{page}</div>
                                <button onClick={() => setPage(page + 1)}><ArrowRight /></button>
                            </div>
                            : <></>
                        }
                    </>
                    : <></>
                }
                {historicalEventsByYear?.list.length !== 0 && buttonYear ?
                    <>
                        <p className='text-lg text-orange-200 underline underline-offset-2 mt-4'>Search for "{year}" :</p>
                        {historicalEventsByYear?.list?.map((item, id) => {
                            return(
                                <>
                                    <div key={id} className='flex flex-col items-start mx-4'>
                                        <p className='underline text-orange-200'>Year: {item.year}</p>
                                        <p className='text-orange-50 text-left'>{item.event}</p>
                                    </div>
                                </>
                            )
                        })}
                        {historicalEventsByYear?.list.length !== 0 && historicalEventsByYear?.list.length > 9 ?
                            <div className='flex flex-row items-center justify-between m-auto w-20 my-6'>
                                <button onClick={() => {if(page>1)setPage(page - 1)}}><ArrowLeft /></button>
                                <div>{page}</div>
                                <button onClick={() => setPage(page + 1)}><ArrowRight /></button>
                            </div>
                            : <></>
                        }
                    </>
                    
                    : <></>
                }
            </div>
        </>
    )
}

export default HistoricalEventsView