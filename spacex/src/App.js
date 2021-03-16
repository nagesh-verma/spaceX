import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      data: [],
    };
  }
  componentDidMount() {
    fetch("https://api.spaceXdata.com/v3/launches?limit=100")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            data: result,
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      )
    .then((res)=>console.log(this.state.data))
  }

  render() {
    return (
      <>
      <div className="container-fluid" style={{background:"rgb(172,178,181)"}}>
        <h1 className="my-3 text-center alert alert-dark font-weight-bold">

          SpaceX Launch Programs
        </h1>
        <div className="row">
          <div className="col-sm-12 col-md-2 "style={{background:"white"}}>
            <h3 className="font-weight-bold">Filters</h3>
            <div>
              <p className="text-center font-weight-bold">Launch Year</p>
              <hr />
            </div>
            <div className="row">
              <div className="col p-2">
                <button className="btn btn-dark">2006</button>
              </div>
              <div className="col p-2">
                <button className="btn btn-dark">2007</button>
              </div>
            </div>
            <div className="row">
              <div className="col p-2">
                <button className="btn btn-dark">2008</button>
              </div>
              <div className="col p-2">
                <button className="btn btn-dark">2009</button>
              </div>
            </div>
            <div className="row">
              <div className="col p-2">
                <button className="btn btn-dark">2010</button>
              </div>
              <div className="col p-2">
                <button className="btn btn-dark">2011</button>
              </div>
            </div>
            <div className="row">
              <div className="col p-2">
                <button className="btn btn-dark">2012</button>
              </div>
              <div className="col p-2">
                <button className="btn btn-dark">2013</button>
              </div>
            </div>
            <div className="row">
              <div className="col p-2">
                <button className="btn btn-dark">2014</button>
              </div>
              <div className="col p-2">
                <button className="btn btn-dark">2015</button>
              </div>
            </div>
            <div className="row">
              <div className="col p-2">
                <button className="btn btn-dark">2016</button>
              </div>
              <div className="col p-2">
                <button className="btn btn-dark">2017</button>
              </div>
            </div>
            <div className="row">
              <div className="col p-2">
                <button className="btn btn-dark">2018</button>
              </div>
              <div className="col p-2">
                <button className="btn btn-dark">2019</button>
              </div>
            </div>
            <div className="row">
              <div className="col p-2">
                <button className="btn btn-dark">2020</button>
              </div>
            </div>

            <div>
              <p className="text-center font-weight-bold">Successfull launch</p>
              <hr />
            </div>
            <div className="row">
              <div className="col p-2">
                <button className="btn btn-success">True</button>
              </div>
              <div className="col p-2">
                <button className="btn btn-danger">False</button>
              </div>
            </div>
            <div>
              <p className="text-center font-weight-bold">Successfull landing</p>
              <hr />
            </div>
            <div className="row">
              <div className="col p-2">
                <button className="btn btn-success">True</button>
              </div>
              <div className="col p-2">
                <button className="btn btn-danger">False</button>
              </div>
            </div>

          </div>
          <div className="col-sm-12 col-md-10">
            <div className="row">
              {/* <div className="col-sm-12 col-md-3">
                <div class="card" >
                  <img src="..." class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      Some quick example text to build on the card title and make
                      up the bulk of the card's content.
                  </p>
                    <a href="#" class="btn btn-primary">
                      Go somewhere
                  </a>
                  </div>
                </div>
              </div> */}
              {this.state.data.map((item) => (
                <div className="col-sm-12 col-md-3 my-1">
                <div class="card text-truncate" style={{width:"20rem"}}>
                  <img src={item.links.mission_patch_small} class="card-img-top" alt="item.mission_name" />
                  <div class="card-body">
                    <h5 class="card-title">{item.mission_name} #{item.flight_number}</h5>
                    <hr/>
                    <div class="card-text font-weight-bold">
                      <p>
                        Mission ID: {item.mission_id}

                      </p>
                      <p>
                        Launch Year: {item.launch_year}
                      </p>
                      <p>
                        Successfull Launch: {item.launch_success===true?(<span>True</span>):(<span>False</span>)}
                        

                      </p>
                      <p>
                        Successfull Landing: {item.rocket.first_stage.cores.land_success===true?(<span>True</span>):(<span>False</span>)}

                      </p>

                      
                  </div>
                   
                  </div>
                </div>
              </div>
                  
                ))}
                  
              </div>
            </div>
          </div>
          <footer className="text-center font-weight-bold">
          
          <p>Developed by: Nagesh Verma</p>

        </footer>
        </div>

        
    </>

      
    );
  }
}

export default App;
