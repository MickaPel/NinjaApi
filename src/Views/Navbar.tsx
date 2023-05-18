import { useState, useEffect } from 'react'
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