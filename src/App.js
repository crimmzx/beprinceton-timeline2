import './App.css';
import timelineElements from './timelineElements';
import {FaUserFriends} from 'react-icons/fa';
import { ReactComponent as SchoolIcon } from "./school.svg";


import{VerticalTimeline, 
  VerticalTimelineElement
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css"

function App() {
  let workIconStyles = { background: "#06D6A0" };
  let schoolIconStyles = { background: "#f9c74f" };

  return (
  <div>
    <h1 className = "title">BePrinceton.</h1>
    <h2>BeReal images are images that are taken at a random time whenever the app chooses to go off. <br>
    </br>
      This project represents the BeReals I've taken at Princeton
      and displays them in a timeline order. 
    </h2>
    <link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet"></link>
    <VerticalTimeline>
      {
        timelineElements.map(element => {
          let isWorkIcon = element.icon === "friends"
          return(
            <VerticalTimelineElement
            key = {element.key}
            date = {element.date}
            dateClassName = "date"
            iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
            icon = {isWorkIcon ? <FaUserFriends /> : <SchoolIcon />}
            >
            <h3 className='vertical-timeline-element-title'>
                {element.title}
            </h3>
            <img src = {element.image} alt = "BeReals!" width = "100%" height = "100%"></img>
            <h5 className='vertical-timeline-element-subtitle'>
                Locations: {element.location}
            </h5>
            <h5 className='moods'>
                Moods: {element.mood}
            </h5>
            <p id = "description">{element.description }</p>
            </VerticalTimelineElement>
          );
        })}
    </VerticalTimeline>
    <h1>Summary Statistics:</h1>
  </div>
  );
}

export default App;
