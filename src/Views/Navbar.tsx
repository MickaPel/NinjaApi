import axios from 'axios'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
// import { fetchFacts, Facts, HistoricalEvents, fetchHistoricalEvents } from '../features/ninja_api/NinjaApiSlice';
import { AppDispatch } from '../app/store';
import { useNavigate } from 'react-router';

const Navbar: React.FC = () => {

    const navigate = useNavigate()

    const sections = [
        { id:1, name: "Facts", path: "/facts"},
        { id:2, name: "Historical Events", path: "/historical-events"},
        { id:3, name: "Bucket List", path: "/bucket-list"},
        { id:4, name: "Riddles", path: "/riddles"},
        { id:5, name: "Thesaurus", path: "/thesaurus"},
        { id:6, name: "Country Informations", path: "/country-informations"},
        { id:7, name: "Nutritional value", path: "/nutritional-values"},
    ]

    const [selectValue, setSelectValue] = useState<string>(sections[0].name)

    const SelectValue = (e: React.MouseEvent<HTMLElement>, value:string) => {
        e.preventDefault();
        setSelectValue(value)
    }

    // console.log(selectValue)
    
    // const limit = 3;
    // $.ajax({
    //     method: 'GET',
    //     url: 'https://api.api-ninjas.com/v1/facts?limit=' + limit,
    //     headers: { 'X-Api-Key': 'YOUR_API_KEY'},
    //     contentType: 'application/json',
    //     success: function(result) {
    //         console.log(result);
    //     },
    //     error: function ajaxError(jqXHR) {
    //         console.error('Error: ', jqXHR.responseText);
    //     }
    // });

    // const headers = { 'X-Api-Key': '5E9zpzcq8OkGLYRiYqtJqQ==Eu9DG65zVddHSDvh'}
    // axios.get('https://api.api-ninjas.com/v1/facts?limit=' + limit, { headers })
    //     .then(response => console.log({ facts: response.data }));

    // const facts = useSelector(Facts)
    // const historicalEvents = useSelector(HistoricalEvents)

    // console.log(facts)

    // const dispatch = useDispatch<AppDispatch>();

    // useEffect(() => {
    //     dispatch(fetchFacts())
    //     const payload: {text:string, page:number} = {
    //         text: 'roman empire',
    //         page: 1
    //     }
    //     dispatch(fetchHistoricalEvents(payload))
    // }, [])
    

    return (
        <>
            <div className="navbar flex flex-row justify-around py-4 text-orange-500">
                <p className='text-2xl font-bold'>Ninja API</p>
                <div className="cursor-pointer">
                    <div className="dropdown inline-block relative">
                        <button className="dark:bg-slate-300 rounded inline-flex items-center">
                            <span className="mr-1 text-xl">{selectValue}</span>
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /> </svg>
                        </button>
                        <ul className="dropdown-menu absolute hidden pt-1 w-32 text-lg">
                            {sections.map((i) => (
                                <li key={i.id} value={i.name} className="cursor-pointer border-none" onClick={(e) => {SelectValue(e, i.name); navigate(`${i.path}`)}}>{i.name}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar