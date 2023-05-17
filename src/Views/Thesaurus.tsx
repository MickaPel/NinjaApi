import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { fetchBucketList, BucketListObject, fetchThesaurus, ThesaurusObject, } from '../features/ninja_api/NinjaApiSlice';
import { AppDispatch } from '../app/store';
import { BucketListState, Facts, FactsState, Thesaurus } from '../interfaces/Interfaces';

// interface Facts {
//     fact: string
// }

// type FactsState = {
//     status: "loading" | "idle";
//     error: string | null;
//     list: Facts[];
// };

const ThesaurusView: React.FC = () => {

    const [bucketList, setBucketList] = useState<Thesaurus>()
    const [word, setWord] = useState<string>('')
    const api = {
        "word": "bright",
        "synonyms": [
            "hopeful",
            "shiny",
            "brightly",
            "lustrous",
            "bright",
            "burnished",
            "smart",
            "shining",
            "promising",
            "vivid",
            "undimmed",
            "brilliant",
            "brilliantly"
        ],
        "antonyms": [
            "dimmed",
            "dull"
        ]
    }
    
    const thesaurusList = useSelector(ThesaurusObject)
    console.log(thesaurusList)
    // console.log(thesaurusList?.list.length)
    
    const dispatch = useDispatch<AppDispatch>();
    const newFact = async() => {
        dispatch(fetchThesaurus(word))
        // setBucketList(bucketsList)
    }

    useEffect(() => {
        // setTimeout(() => {
            // newFact()
        // }, 1000);
        
    }, [])


    return(
        <>
            <div className='text-center pt-28'>
                <div className='flex flex-col items-center'>
                    <p className='m-auto w-3/4 md:w-1/3 text-lg text-orange-200'>Search for a word</p>
                    {/* <p className='m-auto w-3/4 md:w-1/3 text-lg text-orange-200'>(Example: banana, 1kg banana, 100g banana, 1lb banana)</p> */}
                    <input type="text" name="" id="" placeholder="Search by name" onChange={(e) => setWord(e.target.value)} className='text-black w-3/4 sm:w-1/3 lg:w-72 rounded p-2 mt-4'/>
                </div>
                <button onClick={() => newFact()} className='mt-10 text-2xl rounded-xl p-2 bg-gray-500 hover:bg-gray-400 text-amber-400'>Search</button>
                {thesaurusList?.list.word !== '' ?
                    <>
                        <p className='m-auto w-2/3 text-xl text-orange-200'>
                            {thesaurusList?.list.word}
                        </p>
                        <div className='flex flex-col items-center'>
                            <div>
                                {thesaurusList?.list?.synonyms?.map((syn) => {
                                    return(
                                        <p>{syn}</p>
                                    )
                                })}
                            </div>
                        </div>
                    </>
                    : <></>
                }
                
                {/* <button onClick={() => newFact()} className='mt-10 text-2xl rounded-xl p-2 bg-gray-500 hover:bg-gray-400 text-amber-400'>New Bucket</button> */}
            </div>
        </>
    )
}

export default ThesaurusView