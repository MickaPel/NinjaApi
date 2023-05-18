import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { fetchRiddle, RiddleObject, } from '../features/ninja_api/NinjaApiSlice';
import { AppDispatch } from '../app/store';
import { RiddlesState } from '../interfaces/Interfaces';

const RiddleView: React.FC = () => {

    const [riddle, setRiddle] = useState<RiddlesState>()
    const [showAnswer, setShowAnswer] = useState<boolean>(false)
    
    const riddles = useSelector(RiddleObject)
    console.log(riddles)
    // console.log(bucketList?.list)
    
    const dispatch = useDispatch<AppDispatch>();
    const newRiddle = async() => {
        setShowAnswer(false)
        dispatch(fetchRiddle())
    }

    useEffect(() => {
            newRiddle()
    }, [])

    useEffect(() => {
        if(riddles?.list.length !== 0){
            setRiddle(riddles)
        }
    }, [riddles])


    return(
        <>
            <div className='text-center pt-28'>
                <div className='flex flex-col items-center'>
                    <p className='w-2/3 text-2xl text-orange-200 underline underline-offset-2'>
                        {riddle?.list[0]?.title}
                    </p>
                    <p className='mt-4 w-2/3 text-lg text-orange-50'>
                        {riddle?.list[0]?.question}
                    </p>
                    {riddle?.list.length !== 0 ?
                        <p className='mt-4 w-2/3 md:w-auto md:max-w-2/3 text-xl text-orange-200 rounded-lg border border-orange-200 p-2'>
                            {showAnswer === false ?
                                <button onClick={() => setShowAnswer(true)}>Show Answer</button>
                                : riddle?.list[0]?.answer}
                        </p>
                        :<></>
                    }
                </div>
                <button onClick={() => newRiddle()} className='mt-10 text-2xl rounded-xl p-2 bg-gray-500 hover:bg-gray-400 text-amber-400'>New Riddle</button>
            </div>
        </>
    )
}

export default RiddleView