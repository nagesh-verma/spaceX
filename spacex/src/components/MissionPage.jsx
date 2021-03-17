import { useRequest } from '../useRequest'
import React from 'react'
import Rocket from './Rocket'

function MissionPage({year,launch,landing}) {
    const { data: result, error } = useRequest(year,launch,landing)
    if (error) return <h1>Something went wrong!</h1>
    if (!result) return <h1>Loading...</h1>
    if(result.length === 0){
        return <h1>NO RESULTS</h1>
    }
    return (
        <div>
            <h2 className="text-center">Fetched {result.length} results</h2>
            
            <div className = "row">
            
            {result.map((rocket) => (
                <Rocket item={rocket} />
            ))}
        </div>
        </div>
        
    )
}

export default MissionPage

