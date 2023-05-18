import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { fetchBucketList, BucketListObject, } from '../features/ninja_api/NinjaApiSlice';
import { AppDispatch } from '../app/store';
import { BucketListState } from '../interfaces/Interfaces';

const BucketListView: React.FC = () => {

    const [bucketList, setBucketList] = useState<BucketListState>()
    
    const bucketsList = useSelector(BucketListObject)
    // console.log(bucketsList)
    // console.log(bucketList)
    
    const dispatch = useDispatch<AppDispatch>();
    const newBucket = async() => {
        dispatch(fetchBucketList())
        // setBucketList(bucketsList)
    }

    useEffect(() => {
        dispatch(fetchBucketList())
    }, [])

    useEffect(() => {
        if(Object.keys(bucketsList.list).length !== 0){
            console.log("first")
            setBucketList(bucketsList)
        }
    }, [bucketsList])


    return(
        <>
            <div className='text-center pt-28'>
                <div className='m-auto w-2/3 text-xl text-orange-200'>
                    {Object.keys(bucketsList.list).length === 0 ?
                        <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
                        : bucketList?.list?.item
                    }
                    {bucketList?.list?.item}
                </div>
                <button onClick={() => newBucket()} className='mt-10 text-2xl rounded-xl p-2 bg-gray-500 hover:bg-gray-400 text-amber-400'>New Bucket</button>
            </div>
        </>
    )
}

export default BucketListView