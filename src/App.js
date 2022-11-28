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
    <link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet"></link>
    <VerticalTimeline>
      {
        timelineElements.map(element => {
          let isWorkIcon = element.icon === "work"
          let showButton = element.buttonText !== undefined && 
          element.buttonText !== null && 
          element.buttonText !== "";

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
            <img src = {element.image} alt = "big boss" width = "200" height = "300"></img>
            <h5 className='vertical-timeline-element-subtitle'>
                {element.location}
            </h5>
            <p id = "description">{element.description}</p>
            {showButton && (<a className = {`button ${
              isWorkIcon ? "workButton" : "schoolBUtton"}`}
              href ="/"
              >
              {element.buttonText}
              </a>
              )}
            </VerticalTimelineElement>
          );
        })}
    </VerticalTimeline>
  </div>
  );
}

export default App;
