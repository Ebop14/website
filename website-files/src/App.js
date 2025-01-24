import './App.css';
import rugbyImage from './images/rugbyPic.jpeg';
import batteryPic from './images/battery_selfie.jpg';
import bananna from './images/IMG_9674_Original.jpg';
import headshot from './images/headshot.jpeg';
import resume from './Resume.pdf';
import battery from './images/battery.png'
import workHard from "./images/work_hard_play_hard.mov"
import hackLab from "./images/hacklab-pic.png"

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
    width: '30%', 
    borderRadius: '5%', 
    alignItems: 'center',
    boxShadow: '2vh 2vw rgba(0, 0, 0, 0.5)',
    color: 'grey',
    backgroundColor: '#C89933',
    transition:'transform 0.2s'}}
    onMouseOver={(e) => e.currentTarget.style.transform = 'translateX(2.5%)'}
    onMouseOut={(e) =>  e.currentTarget.style.transform = 'translateX(-2.5%)'}

    >
      <img src={props.picture}  
      style={{borderStyle: 'solid', 
        borderRadius: '5%', 
        width: '100%', 
        height: '100%',
        borderColor: 'white'}}></img>

      <h1 style={{ fontFamily: 'Space Grotesk', color: 'black'}}>{props.title}</h1>
      <p style={{ fontFamily: 'Space Grotesk', color: 'black', paddingLeft:'5%', paddingRight:'5%', fontSize: '90%'}}>{props.description}</p>
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
      

      <h1 style={{paddingLeft:'1%'}}>
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

      <div className="Projects" id="Pipeline">
        <h1>Deal Pipeline</h1>

        <div>
          <img src={battery}></img>

          <p>At Battery, I cultivated a deal pipeline of ~1000+ companies, sourcing more than 100 companies per week and resulting in ~20 proprietary deals.  
            Thanks to my extended internship, I commanded more responsibility than other interns - whilst other interns led calls with Associates and Analysts present, I led them alone. 
            My work at Battery resulted in 10+ companies being presented to senior leadership in the firm. I operated in the Application Layer B2B SaaS area, but I ran projects in 
            the Gaming Payments, Marketing Mix Modeling, Physical Security, and Ticketing Spaces.</p>
        </div>
      </div>

      <div className="Projects" id="Externship">
        <h1>Battery Ventures Externship</h1>

        <div>
          <img src={battery}></img>

          <p>In addition to typical analyst responsibilities, I was also tasked with running the Battery Ventures Externship, a remote 50-person program dedicated to educating students in 
            Venture Capital. I created / cultivated ~100 hours worth of VC-related training material and taught 16 live weekly lessons about VC principles
            such as initial outreach, ARR waterfalls, and SaaS metrics. My work running the Externship resulted in ~2,000 companies sourced and 17 diligence projects completed. 
            I was also interviewed ~600 applicants for the Externship, assessing students on technicals, VC knowledge, and behavioral questions.</p>
        </div>
      </div>

      <div className="Projects" id="Hacklab">
        <h1>Hacklab: Binary Analysis CTFs</h1>

        <div>
          <img src={hackLab}></img>

          <p>In my Junior Fall, I took a hacking / cybersecurity course that required me to
            to exploit binaries, pop shells and find flags. Most of the course was an
            application of system design and assembly work. Towards the end of finding
            flags, I used brute force, integer / buffer overflow, ROP chains, and format
            specifier attacks to execute shells. In the final exam, an official CTF, I was 
            1 of 4 students to find a difficult flag (of a class of ~20). I was also the
            only student to find (and exploit) an unintended oversight in the server.
          </p>
        </div>
      </div>

      <div className="Projects" id="WHPH">
        <h1>Work Hard Play Hard</h1>

        <div>
          <video autoplay muted controls playsinline src={workHard}></video>

          <p>For my final project in COSC 25, I designed a Figma prototype for college students
            to improve time management, mental health, and social adaptivity. My design process
            began with conducting 10+ user interviews to discover a college student's needs. 
            From there, I began iterating over grayscale prototypes, before then moving on
            to full-color frames. The final product consisted of 100+ frames and 20+ original
            assets. For my work, I received a citation (the highest grade possible) from
            my professor. She awarded the citation for my "unwavering dedication to the 
            field of UI/UX through the culmination of my final class project."
          </p>
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