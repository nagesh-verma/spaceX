import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import MissionPage from './components/MissionPage';
import YearFilter from './components/YearFilter';
import BooleanButton from './components/BooleanButton';

function App() {
  const [year, setYear] = useState(null);
  const [launch,setLaunch] = useState(null);
  const [landing,setLanding] = useState(null);

  function yearChange(newYear){
    setYear(newYear);
  }
  function launchChange(newLaunch){
    setLaunch(newLaunch);
  }
  function landingChange(newLanding){
    setLanding(newLanding);
  }
   
    
    const years = [2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020]

    return (
        <main className='App'>
          <div className = "row">
            {years.map((year)=>(
              <YearFilter year={year} changeHandler = {yearChange}/>
            ))}
          </div>        
          <div>
            <p className="text-center font-weight-bold">Successful launch</p>
            <hr />
          </div>
          <div className="row">
            <BooleanButton value={true} changeHandler = {launchChange} text="TRUE"/>
            <BooleanButton value={false} changeHandler = {launchChange} text="FALSE"/>
          </div>      
          <div>
            <p className="text-center font-weight-bold">Successful landing</p>
            <hr />
          </div>      
                
          <div className="row">
            <BooleanButton value={true} changeHandler = {landingChange} text="TRUE"/>
            <BooleanButton value={false} changeHandler = {landingChange} text="FALSE"/>
          </div>

              
          <MissionPage year = {year} launch = {launch} landing = {landing}/>
              
              
        </main>
    )
}
export default App