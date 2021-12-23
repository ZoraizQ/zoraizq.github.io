import React, {useState, useEffect} from 'react';
import './App.css';
import data from './data.json';
import profile_img from './img/profile.jpg';


function App() {
  return (
    <main>
    {
      data &&
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
              </div>
            </div>
          </div>

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
            <div class="card-columns">
            {
              data.projects.map(d => 
                ( <div id={d.title} class="card project shadow">
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
        // :
        // <div>Loading</div>
    }
    </main>
  );
}

export default App;