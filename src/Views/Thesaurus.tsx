import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { fetchThesaurus, ThesaurusObject, } from '../features/ninja_api/NinjaApiSlice';
import { AppDispatch } from '../app/store';
import { ThesaurusState } from '../interfaces/Interfaces';

// interface Facts {
//     fact: string
// }

// type FactsState = {
//     status: "loading" | "idle";
//     error: string | null;
//     list: Facts[];
// };

const ThesaurusView: React.FC = () => {

    const [thesaurus_List, setThesaurus_List] = useState<ThesaurusState>()
    const [word, setWord] = useState<string>('')
    
    const thesaurusList = useSelector(ThesaurusObject)
    console.log(thesaurusList)
    console.log(thesaurus_List)
    // console.log(thesaurusList?.list.length)
    
    const dispatch = useDispatch<AppDispatch>();
    const newThesaurus = async() => {
        dispatch(fetchThesaurus(word))
        // setBucketList(bucketsList)
    }

    useEffect(() => {
        if(Object.keys(thesaurusList?.list).length !== 0){
            console.log("first")
            setThesaurus_List(thesaurusList)
        }
    }, [thesaurusList])

    console.log(thesaurusList?.list?.synonyms?.length === 0)

    return(
        <>
            <div className='text-center pt-28'>
                <div className='flex flex-col items-center'>
                    <p className='m-auto w-3/4 md:w-1/3 text-lg text-orange-200'>Search for a word</p>
                    <p className='m-auto w-3/4 md:w-1/3 text-lg text-orange-200'>(Example: bright)</p>
                    <input type="text" name="" id="" placeholder="Search a word" onChange={(e) => setWord(e.target.value)} className='text-black w-3/4 sm:w-1/3 lg:w-72 rounded p-2 mt-4'/>
                </div>
                <button onClick={() => newThesaurus()} className='mt-10 text-2xl rounded-xl p-2 bg-gray-500 hover:bg-gray-400 text-amber-400'>Search</button>
                {Object.keys(thesaurusList?.list).length !== 0 ?
                    <>
                        <p className='m-auto w-2/3 text-2xl mt-8 text-orange-200'>
                            {thesaurusList?.list.word}
                        </p>
                        <div className='flex flex-col items-center md:grid md:grid-cols-2 md:items-start mt-6'>
                            <div>
                                <p className='text-orange-200 underline underline-offset-2 mb-4'>Synonyms :</p>
                                {thesaurusList?.list?.synonyms?.map((syn) => {
                                    return(
                                        <p>{syn}</p>
                                    )
                                })}
                            </div>
                            <div className='flex flex-col mt-4 md:mt-0'>
                                <p className='text-orange-200 underline underline-offset-2 mb-4'>Antonyms :</p>
                                {thesaurusList?.list?.antonyms?.map((ant) => {
                                    return(
                                        <p>{ant}</p>
                                    )
                                })}
                            </div>
                        </div>
                    </>
                    : <></>
                }
            </div>
        </>
    )
}

export default ThesaurusView