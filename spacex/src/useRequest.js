import useSwr from 'swr'

const baseUrl = 'https://api.spaceXdata.com/v3/launches?limit=100'

export const useRequest = (year,launch,landing) => {
    const yearString = year? "&launch_year="+year:'';
    const launchString = launch? "&launch_sucess="+launch:'';
    const landString = landing? "&land_success="+landing:'';
    console.log(yearString+launchString+landString);

    const url = baseUrl+yearString+launchString+landString
    const { data, error } = useSwr(url);
    
    return { data, error };
  };