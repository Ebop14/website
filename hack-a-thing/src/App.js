import logo from './logo.svg';
import './App.css';
import { Navbar } from 'react-bootstrap';


function Header(){
  return(
      <header className="App-header">
      </header>     
  ) 
}


function HorizontalItems(props){
  return(
    <span style={{display: 'flex', flexDirection: 'column', borderStyle: 'solid', width: '23.5%', borderRadius: '10px', alignItems: 'center'}}>
      <img src={props.picture}  style={{borderStyle: 'solid', borderRadius: '10px', width: '100%', height: '100%'}}></img>

      <p style={{ fontFamily: 'Lato', color: 'white' }}>{props.description}</p>
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
        <a href="#">Home</a>
        <a href="#AboutMeBox">About Me</a>
        <a href="#">Projects</a>
        <a href="#">Contact</a>
      </div>

    </div>

    <div className="BigParagraph">
      <img src='https://media.licdn.com/dms/image/v2/C4D03AQGj3D50zP4hUQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1609527769822?e=1743033600&v=beta&t=kSKPnVTEOTrdsIqd-ec_9XqCvh1_JQEg3hzY1cdPuAk'
      ></img>
      <h1>
          Hi! My name is Ethan, and I'm a Junior at Dartmouth double majoring in Economics and CS.
        </h1>
    </div>
    

    <div className="App">
      <span id='AboutMeBox'>
        <HorizontalItems
        picture="https://media.licdn.com/dms/image/v2/C4D03AQGj3D50zP4hUQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1609527769822?e=1743033600&v=beta&t=kSKPnVTEOTrdsIqd-ec_9XqCvh1_JQEg3hzY1cdPuAk"
        description="This is not working?"
        ></HorizontalItems>
        <HorizontalItems
        picture="https://media.licdn.com/dms/image/v2/C4D03AQGj3D50zP4hUQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1609527769822?e=1743033600&v=beta&t=kSKPnVTEOTrdsIqd-ec_9XqCvh1_JQEg3hzY1cdPuAk"
        description="This is not working?">
        </HorizontalItems>
        <HorizontalItems
        picture="https://media.licdn.com/dms/image/v2/C4D03AQGj3D50zP4hUQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1609527769822?e=1743033600&v=beta&t=kSKPnVTEOTrdsIqd-ec_9XqCvh1_JQEg3hzY1cdPuAk"
        description="This is not working?"
        ></HorizontalItems>
        <HorizontalItems
        picture="https://media.licdn.com/dms/image/v2/C4D03AQGj3D50zP4hUQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1609527769822?e=1743033600&v=beta&t=kSKPnVTEOTrdsIqd-ec_9XqCvh1_JQEg3hzY1cdPuAk"
        description="This is not working?">
        </HorizontalItems>
      </span>

        

    </div>
    </>
  );
}

export default App;