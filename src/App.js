import React, {useState, useEffect} from 'react';
import './App.css';
import data from './data.json';
import profile_img from './img/profile.jpg';


function App() {
  return (
    <main>
      <div id="left-banner" alt="left"></div>
      <div id="right-banner" alt="right"></div>
      {
        data ?
          <div>
            <div class="container title-bar">
              <div class="row justify-content-start">
                <div class="col-sm-2 align-self-center" id="profile-img">
                <img src={profile_img} class="rounded-circle" alt="ZQ" width="150"></img>
                </div>

                <div class="col-sm-10 align-self-center">
                  <h1 class="name">
                    {data.name}
                  </h1>
                  <div class="subheading">
                    <span class="title"> {data.title} </span> · <a class="email" href={"mailto:"+data.email}> {data.email} </a>
                  </div>
                  <a class="social" type="button" href={data.github}><i class="fa fa-github"></i>GitHub</a>
                  <a class="social" type="button" href={data.linkedin}><i class="fa fa-linkedin"></i>LinkedIn</a>
                  <a class="social" type="button" href={data.resume}><i class="fa fa-user-circle"></i>Resume</a>
                </div>
              </div>
            </div>
            
            <section class="container">
              <small>
              I'm very interested in the applications of machine learning, specifically deep learning, for computer vision tasks like image or volume segmentation, registration and object detection. I also have prior experience with full-stack development of dynamic web applications as well as AR-based mobile applications for interactive learning.
              </small>
            </section>

            <br/>

            <section class="container">
              <h2>
                Education:
              </h2>
              <div class="list-group">
              {
                data.education.map(d =>
                ( <div id={d.role} class="list-group-item list-group-item-action flex-column align-items-start">
                  <h5 class="mb-1">{d.role}</h5>
                  <p class="place"><small>{d.place}</small></p>
                  {
                    d.description &&
                    <small>{d.description}</small>
                  }
                  <p class="time-footer"><small>{d.time}</small></p>
                </div> )
                )
              }
              </div>
            </section>

            <br/>

            <section class="container">
              <h2>
                Experience:
              </h2>
              <div class="list-group">
              {
                data.experience.map(d =>
                ( <div id={d.role} class="list-group-item list-group-item-action flex-column align-items-start">
                  <h5 class="mb-1">{d.role}</h5>
                  <p class="place"><small>{d.place}</small></p>
                  {
                    d.description &&
                    <small>{d.description}</small>
                  }
                  <p class="time-footer"><small>{d.time}</small></p>
                </div> )
                )
              }
              </div>
            </section>

            <br/>

            <section class="container">
              <h2>
                Projects:
              </h2>
              <div class="card-columns projects">
              {
                data.projects.map(d => 
                  ( <div id={d.title} class="card shadow">
                      <img class="card-img-top" src={d.img} alt={d.title}></img>
                      <div class="card-body">
                        <h5 class="card-title">{d.title}</h5>
                        {
                          d.description &&
                          <p class="card-text"><small>{d.description}</small></p>
                        }
                        {
                          d.link &&
                          <a href={d.link} class="btn btn-primary">View</a>
                        }
                      </div>
                      <div class="card-footer">
                        <small class="text-muted">{d.time}</small>
                      </div>
                    </div> )
                )
              }
              </div>
            </section>

          </div>
          :
          <div>Loading...</div>
      }
    </main>
  );
}

export default App;

// {
//   "title": "Are Campus IoT Systems Secure? Investigating Security Vulnerabilities in CBORD",
//   "time": "Sep 2021 - Dec 2021",
//   "description": "Campus IoT systems, access and network security are crucial to the daily lives of students and faculty alike so they are usually provided by 3rd party vendors. One such example is CBORD which runs the majority of higher-education smart campuses such as the University of Virginia (UVA) managing everything from door locks and laundry machines to dining and vending. We propose to perform a component-based security analysis of common CBORD cloud web interfaces and mobile applications, for the investigation of vulnerabilities that may adversely impact data privacy and daily activity of students and faculty on campus.",
//   "long_description": "To support rapid technological advancements in smart environments, provided utilities often compromise security for the cost of convenience, as new features are integrated in - especially in the case of management systems solely designed for academic settings. Campus IoT systems, access and network security are crucial to the daily lives of students and faculty alike so they are usually provided by 3rd party vendors. One such example is CBORD which runs the majority of higher-education smart campuses such as the University of Virginia (UVA) managing everything from door locks and laundry machines to dining and vending. However, neither research nor any audit is published on CBORD and the security of its campus IoT systems. Therefore, we propose to perform a component-based security analysis of common CBORD cloud web interfaces and mobile applications, using UVA as the case study,  for the investigation of vulnerabilities that may adversely impact data privacy and daily activity of students and faculty on campus.",
//   "img": "https://www.studyinternational.com/wp-content/uploads/2019/11/shutterstock_309525356.jpg"
// }