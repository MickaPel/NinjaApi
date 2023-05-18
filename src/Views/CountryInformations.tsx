import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { fetchCountryInformations, CountryInformations, } from '../features/ninja_api/NinjaApiSlice';
import { AppDispatch } from '../app/store';
import { CountryInformationsState } from '../interfaces/Interfaces';

const CountryInformationsView: React.FC = () => {

    const [countryInformation, setCountryInformation] = useState<CountryInformationsState>()
    const [search, setSearch] = useState<string>('')
    
    const countryInformations = useSelector(CountryInformations)
    // console.log(countryInformations)
    // console.log(countryInformation?.list[0])
    
    const dispatch = useDispatch<AppDispatch>();
    const searchCountry = async() => {
        dispatch(fetchCountryInformations(search))
        // setBucketList(bucketsList)
    }

    useEffect(() => {
        if(Object.keys(countryInformations.list).length !== 0){
            console.log("first")
            setCountryInformation(countryInformations)
        }
    }, [countryInformations])

console.log(countryInformation)
    return(
        <>
            <div className='text-center pt-12'>
                <div className='flex flex-col items-center'>
                    <p className='m-auto w-3/4 md:w-1/3 text-lg text-orange-200'>Search informations for a country</p>
                    <p className='m-auto w-3/4 md:w-1/3 text-lg text-orange-200'>(Example: France, Brazil...)</p>
                    <input type="text" name="" id="" placeholder="Search a country" onChange={(e) => setSearch(e.target.value)} className='text-black w-3/4 sm:w-1/3 lg:w-72 rounded p-2 mt-4'/>
                </div>
                
                <button onClick={() => searchCountry()} className='mt-10 text-2xl rounded-xl p-2 bg-gray-500 hover:bg-gray-400 text-amber-400'>Search</button>
                { countryInformation ?
                    <>
                    <p className='text-amber-400 font-bold text-2xl mt-5'>{countryInformation?.list[0].name}</p>
                    <div className='flex flex-col items-start justify-start md:grid md:grid-cols-2 md:gap-4  md:content-start ml-4 my-5 text-base'>
                        
                        {/* <div className='flex md:flex-row flex-wrap justify-between m-auto'> */}
                            <div className='flex flex-col items-start md:items-center justify-start mt-5 text-amber-400'>
                            <div className='flex flex-col items-start'>
                                <p className='font-bold text-orange-200 underline underline-offset-4'>Principal informations :</p>
                                
                                    <p><span className='text-orange-50'>Capital : </span>{countryInformation?.list[0].capital}</p>
                                    <p><span className='text-orange-50'>Region : </span>{countryInformation?.list[0].region}</p>
                                    <p><span className='text-orange-50'>Surface Area : </span>{countryInformation?.list[0].surface_area.toString().replace(/.{3}/g, '$& ')} m²</p>
                                    <p><span className='text-orange-50'>Currency : </span>{countryInformation?.list[0].currency.name} ({countryInformation?.list[0].currency.code})</p>
                                </div>
                            {/* </div>
                            <div className='flex flex-col items-start mt-5 text-amber-400'> */}
                            <div className='flex flex-col items-start'>
                                <p className='font-bold text-orange-200 underline underline-offset-4'>Economic informations</p>
                                
                                    <p><span className='text-orange-50'>GDP (Gross domestic product) : </span>{countryInformation?.list[0].gdp} (add K or M)</p>
                                    <p><span className='text-orange-50'>GDP growth : </span>{countryInformation?.list[0].gdp_growth} %</p>
                                    <p><span className='text-orange-50'>GDP per capita : </span>{countryInformation?.list[0].gdp_per_capita} (add K or M)</p>
                                    <p><span className='text-orange-50'>Employment Industry : </span>{countryInformation?.list[0].employment_industry} %</p>
                                    <p><span className='text-orange-50'>Employment Agriculture : </span>{countryInformation?.list[0].employment_agriculture} %</p>
                                    <p><span className='text-orange-50'>Employment Services : </span>{countryInformation?.list[0].employment_services} %</p>
                                    <p><span className='text-orange-50'>Imports : </span>{countryInformation?.list[0].imports}</p>
                                    <p><span className='text-orange-50'>Exports : </span>{countryInformation?.list[0].exports}</p>
                                </div>
                            </div>
                            <div className='flex flex-col items-start md:items-center justify-start mt-5 text-amber-400'>
                                <p className='font-bold text-orange-200 underline underline-offset-4'>Population informations</p>
                                <div className='flex flex-col items-start'>
                                    <p><span className='text-orange-50'>Population : </span>{countryInformation?.list[0].population} (add K or M)</p>
                                    <p><span className='text-orange-50'>Urban Population : </span>{countryInformation?.list[0].urban_population} %</p>
                                    <p><span className='text-orange-50'>Urban Population Growth : </span>{countryInformation?.list[0].urban_population_growth} (add icon)</p>
                                    <p><span className='text-orange-50'>Population Density : </span>{countryInformation?.list[0].pop_density}/km²</p>
                                    <p><span className='text-orange-50'>Internet Users : </span>{countryInformation?.list[0].internet_users} %</p>
                                    <p><span className='text-orange-50'>Tourists : </span>{countryInformation?.list[0].tourists} (fr 89 Million)</p>
                                    <p><span className='text-orange-50'>Refugees : </span>{countryInformation?.list[0].refugees} (add K or M)</p>
                                    <p><span className='text-orange-50'>Sex Ratio : </span>{countryInformation?.list[0].sex_ratio} males / 100 females</p>
                                    <p><span className='text-orange-50'>Life Expectancy Male : </span>{countryInformation?.list[0].life_expectancy_male} years</p>
                                    <p><span className='text-orange-50'>Life Expectancy Female : </span>{countryInformation?.list[0].life_expectancy_female} years</p>
                                    <p><span className='text-orange-50'>Fertility : </span>{countryInformation?.list[0].fertility} children per woman</p>
                                    <p><span className='text-orange-50'>Infant Mortality : </span>{countryInformation?.list[0].infant_mortality} / 1000 live births</p>
                                    <p><span className='text-orange-50'>Homicide : </span>{countryInformation?.list[0].homicide_rate} / 100 000</p>
                                </div>
                            {/* </div>
                            <div className='flex flex-col items-start mt-5 text-amber-400'> */}
                                <p className='font-bold text-orange-200 underline underline-offset-4'>Environment informations</p>
                                <div className='flex flex-col items-start'>
                                    <p><span className='text-orange-50'>CO2 emissions : </span>{countryInformation?.list[0].co2_emissions} Million Tonnes</p>
                                    <p><span className='text-orange-50'>Forested Area : </span>{countryInformation?.list[0].forested_area} %</p>
                                    <p><span className='text-orange-50'>Threatened Species : </span>{countryInformation?.list[0].threatened_species} %</p>
                                </div>
                            </div>
                        </div>
                    {/* </div> */}
                    </> : <></>
                }
            </div>
        </>
    )
}

export default CountryInformationsView