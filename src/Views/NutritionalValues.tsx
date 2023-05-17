import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { fetchNutritionalValue, fetchRiddle, NutritionalValuesObject, RiddleObject, } from '../features/ninja_api/NinjaApiSlice';
import { AppDispatch } from '../app/store';
import { Facts, FactsState, NutritionalValuesState, RiddlesState } from '../interfaces/Interfaces';

// interface Facts {
//     fact: string
// }

// type FactsState = {
//     status: "loading" | "idle";
//     error: string | null;
//     list: Facts[];
// };

const NutritionalValuesView: React.FC = () => {

    const [nutriValues, setNutriValues] = useState<NutritionalValuesState>()
    const [nutriment, setNutriment] = useState<string>('')
    // const [showAnswer, setShowAnswer] = useState<boolean>(false) 
    
    const nutritionalValues = useSelector(NutritionalValuesObject)
    console.log(nutritionalValues)
    // console.log(nutritionalValues?.list)
    // console.log(bucketList?.list)
    
    const dispatch = useDispatch<AppDispatch>();
    const newFact = async() => {
        // setShowAnswer(false)
        // console.log('first')
        dispatch(fetchNutritionalValue(nutriment))
        setNutriValues(nutritionalValues)
    }

    // useEffect(() => {
    //     // setTimeout(() => {
    //         newFact()
    //     // }, 1000);
        
    // }, [])


    return(
        <>
            <div className='text-center pt-28'>
                <div className='flex flex-col items-center'>
                    <p className='m-auto w-3/4 md:w-1/3 text-lg text-orange-200'>Search nutritional values for an ingredient</p>
                    <p className='m-auto w-3/4 md:w-1/3 text-lg text-orange-200'>(Example: banana, 1kg banana, 100g banana, 1lb banana)</p>
                    <input type="text" name="" id="" placeholder="Search by name" onChange={(e) => setNutriment(e.target.value)} className='text-black w-3/4 sm:w-1/3 lg:w-72 rounded p-2 mt-4'/>
                </div>
                <button onClick={() => newFact()} className='mt-10 text-2xl rounded-xl p-2 bg-gray-500 hover:bg-gray-400 text-amber-400'>Search</button>
                <div className='flex flex-col items-center mt-5'>
                    {nutritionalValues?.list?.length !== 0 ?
                    <>
                        <p className='w-2/3 text-2xl text-orange-200 underline underline-offset-2'>
                            For {nutritionalValues?.list[0]?.serving_size_g}g of {nutritionalValues?.list[0]?.name}
                        </p>
                        <p className='w-2/3 text-xl text-orange-200 mt-2'>
                            You have :
                        </p>
                        <div className='flex flex-col items-start mt-5 text-xl text-amber-400'>
                            <p><span className='text-orange-50'>Kcal : </span>{nutritionalValues?.list[0]?.calories}</p>
                            <p><span className='text-orange-50'>Protein : </span>{nutritionalValues?.list[0]?.protein_g}g</p>
                            <p><span className='text-orange-50'>Carbohydrates : </span>{nutritionalValues?.list[0]?.carbohydrates_total_g}g</p>
                            <p><span className='text-orange-50'>of which sugars : </span>{nutritionalValues?.list[0]?.sugar_g}g</p>
                            <p><span className='text-orange-50'>Lipids : </span>{nutritionalValues?.list[0]?.fat_total_g}g</p>
                            <p><span className='text-orange-50'>of which saturated fatty acids : </span>{nutritionalValues?.list[0]?.fat_saturated_g}g</p>
                            <p><span className='text-orange-50'>Fibers : </span>{nutritionalValues?.list[0]?.fiber_g}g</p>
                            <p><span className='text-orange-50'>Sodium : </span>{nutritionalValues?.list[0]?.sodium_mg}mg</p>
                            <p><span className='text-orange-50'>Potassium : </span>{nutritionalValues?.list[0]?.potassium_mg}mg</p>
                            <p><span className='text-orange-50'>Cholesterol : </span>{nutritionalValues?.list[0]?.cholesterol_mg}mg</p>

                        </div>
                    </> : <></>
                    }
                    

                    {/* <p className='mt-4 w-2/3 text-lg text-orange-50'>
                        {riddles?.list[0]?.question}
                    </p> */}
                    {/* <p className='mt-4 w-2/3 text-xl text-orange-200 rounded-lg border border-orange-200 p-2'>
                        {showAnswer === false ?
                            <button onClick={() => setShowAnswer(true)}>Show Answer</button>
                            : riddles?.list[0]?.answer}
                    </p> */}
                </div>
            </div>
        </>
    )
}

export default NutritionalValuesView