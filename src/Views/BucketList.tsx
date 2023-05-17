import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { fetchBucketList, BucketListObject, } from '../features/ninja_api/NinjaApiSlice';
import { AppDispatch } from '../app/store';
import { BucketListState, Facts, FactsState } from '../interfaces/Interfaces';

// interface Facts {
//     fact: string
// }

// type FactsState = {
//     status: "loading" | "idle";
//     error: string | null;
//     list: Facts[];
// };

const BucketListView: React.FC = () => {

    const [bucketList, setBucketList] = useState<BucketListState>()
    
    const bucketsList = useSelector(BucketListObject)
    console.log(bucketsList)
    console.log(bucketList)
    
    const dispatch = useDispatch<AppDispatch>();
    const newFact = async() => {
        dispatch(fetchBucketList())
        // setBucketList(bucketsList)
    }

    useEffect(() => {
        // setTimeout(() => {
            // newFact()
        // }, 1000);
        dispatch(fetchBucketList())
        
    }, [])

    useEffect(() => {
        // setTimeout(() => {
            // newFact()
        // }, 1000);
        if(Object.keys(bucketsList.list).length !== 0){
            console.log("first")
            setBucketList(bucketsList)
        }
    }, [bucketsList])


    return(
        <>
            <div className='text-center pt-28'>
                <p className='m-auto w-2/3 text-xl text-orange-200'>
                    {bucketList?.list?.item}
                </p>
                <button onClick={() => newFact()} className='mt-10 text-2xl rounded-xl p-2 bg-gray-500 hover:bg-gray-400 text-amber-400'>New Bucket</button>
            </div>
        </>
    )
}

export default BucketListView