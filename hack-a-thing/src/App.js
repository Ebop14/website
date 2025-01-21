import logo from './logo.svg';
import './App.css';
import { Navbar } from 'react-bootstrap';
import rugbyImage from './images/rugbyPic.jpeg';
import batteryPic from './images/battery_selfie.jpeg'
import bananna from './images/IMG_9674_Original.jpg'


function Header(){
  return(
      <header className="App-header">
      </header>     
  ) 
}


function HorizontalItems(props){
  return(
    <span style={{display: 'flex', 
    flexDirection: 'column', 
    borderStyle: 'solid',
    borderColor: 'white', 
    width: '23.5%', 
    borderRadius: '10px', 
    alignItems: 'center',
    boxShadow: '20px 20px rgba(0, 0, 0, 0.5)',
    color: 'grey',
    transition:'transform 0.2s'}}
    onMouseOver={(e) => e.currentTarget.style.transform = 'translateX(10px)'}
    onMouseOut={(e) =>  e.currentTarget.style.transform = 'translateX(-10px)'}

    >
      <img src={props.picture}  
      style={{borderStyle: 'solid', 
        borderRadius: '10px', 
        width: '100%', 
        height: '100%',
        borderColor: 'white'}}></img>

      <h1 style={{ fontFamily: 'Space Grotesk', color: 'white'}}>{props.title}</h1>
      <p style={{ fontFamily: 'Space Grotesk', color: 'white', paddingLeft:'10px', paddingRight:'10px'}}>{props.description}</p>
      </span>
  )
}


function App() {
  return (
    <>

    <div id="Navbar">
      
      <div class="nav-name">
        <a href="#">Ethan Child</a>
      </div>
      
      <div class="nav-links">
        <a id="topLink" href="#">Home</a>
        <a id="topLink" href="#AboutMeBox">About Me</a>
        <a id="topLink" href="#">Projects</a>
        <a id="topLink" href="#">Contact</a>
      </div>

    </div>

    <div></div>

    <div className="BigParagraph">
      <img src='https://media.licdn.com/dms/image/v2/C4D03AQGj3D50zP4hUQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1609527769822?e=1743033600&v=beta&t=kSKPnVTEOTrdsIqd-ec_9XqCvh1_JQEg3hzY1cdPuAk'
      ></img>

      <h1 style={{fontFamily:'Dimitri', paddingLeft:'10px'}}>
          Hi! My name is Ethan, and I'm a Junior at Dartmouth double majoring in Economics and CS. Starting in my Freshman Summer, I have ~2 years worth of experience in Venture Capital at Battery Ventures. 
        </h1>
    </div>
    

    <div className="App">
      <div id='AboutMeBox'>
        <HorizontalItems
        picture={rugbyImage}
        title="Rugby"
        description="On campus, I play as a front rower for the Dartmouth Rugby Football Club for the first team, where I helped the team finish Top 10 in NCR D1."
        ></HorizontalItems>
        <HorizontalItems
        picture={bananna}
        title="Econ and CS"
        description="Academically, I'm a double major in Economics and Computer Science. I'm proficient in Game Theory, Algorithm Design, Cybersecurity CTFs.">
        </HorizontalItems>
        <HorizontalItems
        picture={batteryPic}
        title="Venture Capital"
        description="Through a combination of remote and in-person internships, I've "
        ></HorizontalItems>
      </div>
      
    </div>
    </>
  );
}

export default App;