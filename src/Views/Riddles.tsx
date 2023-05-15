import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { fetchRiddle, RiddleObject, } from '../features/ninja_api/NinjaApiSlice';
import { AppDispatch } from '../app/store';
import { Facts, FactsState, RiddlesState } from '../interfaces/Interfaces';

// interface Facts {
//     fact: string
// }

// type FactsState = {
//     status: "loading" | "idle";
//     error: string | null;
//     list: Facts[];
// };

const RiddleView: React.FC = () => {

    const [riddle, setRiddle] = useState<RiddlesState>()
    const [showAnswer, setShowAnswer] = useState<boolean>(false)
    
    const riddles = useSelector(RiddleObject)
    console.log(riddles?.list[0]?.question)
    // console.log(bucketList?.list)
    
    const dispatch = useDispatch<AppDispatch>();
    const newFact = async() => {
        setShowAnswer(false)
        dispatch(fetchRiddle())
        setRiddle(riddles)
    }

    useEffect(() => {
        // setTimeout(() => {
            newFact()
        // }, 1000);
        
    }, [])


    return(
        <>
            <div className='text-center pt-28'>
                <div className='flex flex-col items-center'>
                    <p className='w-2/3 text-2xl text-orange-200 underline underline-offset-2'>
                        {riddles?.list[0]?.title}
                    </p>
                    <p className='mt-4 w-2/3 text-lg text-orange-50'>
                        {riddles?.list[0]?.question}
                    </p>
                    {riddles?.list.length !== 0 ?
                        <p className='mt-4 w-2/3 md:w-auto md:max-w-2/3 text-xl text-orange-200 rounded-lg border border-orange-200 p-2'>
                            {showAnswer === false ?
                                <button onClick={() => setShowAnswer(true)}>Show Answer</button>
                                : riddles?.list[0]?.answer}
                        </p>
                        :<></>
                    }
                </div>
                <button onClick={() => newFact()} className='mt-10 text-2xl rounded-xl p-2 bg-gray-500 hover:bg-gray-400 text-amber-400'>New Riddle</button>
            </div>
        </>
    )
}

export default RiddleView