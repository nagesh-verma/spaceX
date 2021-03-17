import React from 'react'


function Rocket({item}) {
    return (
        <div className="col-sm-12 col-md-3 my-1">
            <div className="card text-truncate" style={{width:"20rem"}}>
                <img src={item.links.mission_patch_small} className="card-img-top" alt="item.mission_name" />
                <div className="card-body">
                    <h5 className="card-title">{item.mission_name} #{item.flight_number}</h5>
                    <hr/>
                    <div className="card-text font-weight-bold">
                        <p>Mission ID: {item.mission_id}</p>
                        <p>Launch Year: {item.launch_year}</p>
                        <p>Successful Launch: {item.launch_success?("True"):("False")}</p>
                        <p>Successful Landing: {item.rocket.first_stage.cores[0].land_success?("True"):("False")}</p>
                    </div>
                   
                </div>
            </div>
        </div>
    )
}

export default Rocket
