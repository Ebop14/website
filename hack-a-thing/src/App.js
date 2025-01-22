import './App.css';
import rugbyImage from './images/rugbyPic.jpeg';
import batteryPic from './images/battery_selfie.jpg';
import bananna from './images/IMG_9674_Original.jpg';
import headshot from './images/headshot.jpeg';
import resume from './Resume.pdf';
import battery from './images/battery.png'

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
    backgroundColor: '#B1DDF1',
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

      <h1 style={{ fontFamily: 'Space Grotesk', color: 'black'}}>{props.title}</h1>
      <p style={{ fontFamily: 'Space Grotesk', color: 'black', paddingLeft:'10px', paddingRight:'10px'}}>{props.description}</p>
      </span>
  )
}


function App() {
  return (
    <>
    <div id="Navbar">
    
      <div class="nav-links">
        <a id="topLink" href="#TopBox">Home</a>
        <a id="topLink" href="#AboutMeBox">About Me</a>
        <a id="topLink" href="#ProjectTitle">Projects</a>
        <a id="topLink" href="#ContactBox">Contact</a>

      </div>

    </div>

    <div></div>

    <div className="BigParagraph" id="TopBox">
      <div>
      <img src={headshot}
      ></img>
      </div>
      

      <h1 style={{paddingLeft:'10px'}}>
          Hi! My name is Ethan, and I'm a Junior at Dartmouth double majoring in Economics and CS. Starting in my Freshman Summer, I have ~2 years worth of experience in Venture Capital at Battery Ventures.
          I'm looking for any operational roles at startups - reach out if you're building anything! I'm open to roles in Product, Sales, SWE, or Growth!
        </h1>
    </div>
    

    <div className="App">
      <div id='AboutMeBox'>
        <HorizontalItems
        picture={rugbyImage}
        title="Rugby"
        description="On campus, I play as a front rower for the Dartmouth Rugby Football Club for the first team. My contributions helped the team to a Top 10 finish in NCR D1. I actually walked onto the team with no previous experience with the sport - so I'm pretty good at learning new skills!"
        ></HorizontalItems>
        <HorizontalItems
        picture={bananna}
        title="Econ and CS"
        description="Academically, I'm a double major in Economics and Computer Science. In Economics, I focus on Game Theory, but have also taken courses in Domestic / International Finance and Industrial Organization. In CS, I've taken courses in Algorithm Design, Cybersecurity, Software Engineering, and ML.">
        </HorizontalItems>
        <HorizontalItems
        picture={batteryPic}
        title="VC"
        description="Through a combination of remote and in-person internships, I've worked in Venture Capital at Battery Ventures for ~2 years. I started working at Battery my Freshman Summer, sourcing companies. My performance enventually led to a 10 month, full-time, off-cycle internship offer."
        ></HorizontalItems>

      </div>

      <div className="Projects" id="ProjectTitle">
        <div>
          <h1>Projects</h1>
        </div>
      </div>

      <div className="Projects">
        <h1>Deal Pipeline</h1>

        <div>
          <img src={battery}></img>

          <p>At Battery, I cultivated a deal pipeline of ~1000+ companies, sourcing more than 100 companies per week and resulting in ~20 propietary deals.  
            Thanks to my extended internship, I commanded more responsibility than other interns - whilst other interns led calls with Associates and Analysts present, I led them alone. 
            My work at Battery resulted in 10+ companies being presented to senior leadership in the firm. My work was mostly in the Application Layer B2B SaaS area, but I ran projects in 
            the Gaming Payments, Marketing Mix Modeling, Physical Security, and Ticketing Spaces.</p>
        </div>
      </div>

      <div className="Projects">
        <h1>Battery Ventures Externship</h1>

        <div>
          <img src={battery}></img>

          <p>At Battery, in addition to typical analyst responsibilites, I was also tasked with running the Battery Ventures Externship, a fully remote 50-person program dedicated to educating students on the 
            work required to be a Venture Capital Analyst. My work in the Externship included creating / cultivating ~100 hours worth of VC-related training material, teaching 16 live weekly lessons about VC principles
            such as initial outreach, ARR waterfalls, and SaaS metrics. My work running the Externship resulted in an independent ~2,000 companies sourced and 17 diligence projects completed. I was also responsible for 
            interviewing ~600 applicants for the Externship program, assessing students on technicals, VC knowledge, and behavioral questions. </p>
        </div>
      </div>

      <div id='ContactBox'>
        <a>Reach Out</a>
        <a href="mailto:ethanvchild@gmail.com">Email</a>
        <a href="https://www.linkedin.com/in/ethan-child/" target="_blank">LinkedIn</a>
        <a href={resume} download="Resume.pdf">Resume</a>
        <a href="https://github.com/Ebop14" target="_blank">GitHub</a>
      </div>      
    </div>

    </>
  );
}

export default App;