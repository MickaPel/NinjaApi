import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { fetchFacts, FactsObject, } from '../features/ninja_api/NinjaApiSlice';
import { AppDispatch } from '../app/store';
import { FactsState } from '../interfaces/Interfaces';

const FactsView: React.FC = () => {
    
    const [fact, setFact] = useState<FactsState>()
    
    const facts = useSelector(FactsObject)
    console.log(facts?.list.length)
    console.log(fact)
    
    const dispatch = useDispatch<AppDispatch>();

    const newFact = async() => {
        dispatch(fetchFacts())
    }

    useEffect(() => {
        dispatch(fetchFacts())
    }, [])

    useEffect(() => {
        if(facts?.list.length !== 0){
            setFact(facts)
        }
    }, [facts])

    return(
        <>
            <div className='text-center pt-28'>
                <div className='m-auto w-2/3 text-xl text-orange-200'>
                    {fact?.list?.length === 0 ?
                        <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
                        : fact?.list[0]?.fact
                    }
                </div>
                <button onClick={() => newFact()} className='mt-10 text-2xl rounded-xl p-2 bg-gray-500 hover:bg-gray-400 text-amber-400'>New Fact</button>
            </div>
        </>
    )
}

export default FactsView