import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { fetchFacts, FactsObject, } from '../features/ninja_api/NinjaApiSlice';
import { AppDispatch } from '../app/store';

interface Facts {
    fact: string
}

type FactsState = {
    status: "loading" | "idle";
    error: string | null;
    list: Facts[];
};

const FactsView: React.FC = () => {


    

    

    
    const [fact, setFact] = useState<FactsState>()
    
    const facts = useSelector(FactsObject)
    console.log(facts)
    console.log(fact)
    
    const dispatch = useDispatch<AppDispatch>();
    const newFact = async() => {
        dispatch(fetchFacts())
        .then(() => {
            if(facts?.list.length !== 0){
                setFact(facts)
            }
        })
        
        
    }

    useEffect(() => {
        dispatch(fetchFacts())
        .then(() => {
            if(facts?.list.length !== 0){
                setFact(facts)
            }
        })
        
    }, [])


    return(
        <>
            <div className='text-center pt-28'>
                <p className='m-auto w-2/3 text-xl text-orange-200'>
                    {facts?.list?.length === 0 ?
                        <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
                        : facts?.list[0]?.fact
                    }
                </p>
                <button onClick={() => newFact()} className='mt-10 text-2xl rounded-xl p-2 bg-gray-500 hover:bg-gray-400 text-amber-400'>New Fact</button>
            </div>
        </>
    )
}

export default FactsView