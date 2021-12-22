import React, {useState, useEffect} from 'react';
import './App.css';
import data from './data.json';


function App() {
  return (
    <main style={{margin: '2%'}}>
    {
      data &&
        <div>
          <div class="h1 name">
            {data.name}
          </div>
          <div class="subheading">
            <span class="title"> {data.title} </span> · <a class="email" href={"mailto:"+data.email}> {data.email} </a>
          </div>

          <br/>

          
          <div class="h2">
            Education:
          </div>
          <div class="list-group">
          {
            data.education.map(d =>
            ( <a href={"#"+d.role} id={d.role} class="list-group-item list-group-item-action flex-column align-items-start">
              <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">{d.role}</h5>
                <small>{d.place}</small>
              </div>
              {
                d.description &&
                <small>{d.description}</small>
              }
              <p style={{marginBottom: 0}}><small class="bold">{d.time}</small></p>
            </a> )
            )
          }
          </div>

          <br/>

          <div class="h2">
            Experience:
          </div>
          <div class="list-group">
          {
            data.experience.map(d =>
            ( <a href={"#"+d.role} id={d.role} class="list-group-item list-group-item-action flex-column align-items-start">
              <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">{d.role}</h5>
                <small>{d.place}</small>
              </div>
              {
                d.description &&
                <small>{d.description}</small>
              }
              <p class="time-footer"><small class="bold">{d.time}</small></p>
            </a> )
            )
          }
          </div>
          
          <br/>

          <div class="h2">
            Projects:
          </div>
          <div class="card-columns">
          {
            data.projects.map(d => 
              ( <div class="card project">
                  <img class="card-img-top" src={d.img} alt="Card image cap"></img>
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

        </div>
        // :
        // <div>Loading</div>
    }
    </main>
  );
}

export default App;