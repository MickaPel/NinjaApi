export interface Facts {
    fact: string
}
export interface FactsState {
    status: "loading" | "idle";
    error: string | null;
    list: Facts[];
}

export interface BucketList {
    item: string
}
export interface BucketListState {
    status: "loading" | "idle";
    error: string | null;
    list: BucketList;
}

export interface Riddles {
    title: string,
    question: string,
    answer: string,
}
export interface RiddlesState {
    status: "loading" | "idle";
    error: string | null;
    list: Riddles[];
}

export interface NutritionalValues {
    name: string,
    calories: number,
    serving_size_g: number,
    fat_total_g: number,
    fat_saturated_g: number,
    protein_g: number,
    sodium_mg: number,
    potassium_mg: number,
    cholesterol_mg: number,
    carbohydrates_total_g: number,
    fiber_g: number,
    sugar_g: number
}
export interface NutritionalValuesState {
    status: "loading" | "idle";
    error: string | null;
    list: NutritionalValues[];
}
export interface Thesaurus {
    word: string
    synonyms: string[]
    antonyms: string[]
}
export interface ThesaurusState {
    status: "loading" | "idle";
    error: string | null;
    list: Thesaurus;
}

export interface HistoricalEvents {
    year: string,
    month: string,
    date: string,
    event: string
}
export interface HistoricalEventsState {
    status: "loading" | "idle";
    error: string | null;
    list: HistoricalEvents[];
}

export type CountryInformations = CountryInformations2[]

export interface CountryInformations2 {
    gdp: string
    sex_ratio: string
    surface_area: string
    life_expectancy_male: string
    unemployment: string
    imports: string
    homicide_rate: string
    currency: Currency
    iso2: string
    gdp_growth: string
    employment_services: string
    urban_population_growth: string
    secondary_school_enrollment_female: string
    employment_agriculture: string
    capital: string
    co2_emissions: string
    forested_area: string
    tourists: string
    exports: string
    life_expectancy_female: string
    post_secondary_enrollment_female: string
    post_secondary_enrollment_male: string
    primary_school_enrollment_female: string
    infant_mortality: string
    secondary_school_enrollment_male: string
    threatened_species: string
    population: string
    urban_population: string
    employment_industry: string
    name: string
    pop_growth: string
    region: string
    pop_density: string
    internet_users: string
    gdp_per_capita: string
    fertility: string
    refugees: string
    primary_school_enrollment_male: string
}

export interface Currency {
    code: string
    name: string
}

export interface CountryInformationsState {
    status: "loading" | "idle";
    error: string | null;
    list: CountryInformations;
}