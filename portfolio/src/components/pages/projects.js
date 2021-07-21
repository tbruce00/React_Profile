import React from 'react';


export default function Projects() {
    return (
        <div className="container">
            <div className="projects">
            <h1 className="projTitle text-center">Featured Projects</h1>
            <div className="card-group proj-cards">
            <div className="card">
                <div className="card-img-body">
                    <img className="card-img" src="portfolio/src/images/moviegrab.png" alt="Movie Grab"></img>
                </div>
                <div className="card-body">
                    <h2 className="card-title">Movie Grab</h2>
                    <p className="card-text">Something Explaining Project Goes HERE</p>
                    <a href="https://ttdunlap33.github.io/movie-project/" className="btn btn-outline-primary">Visit App</a>
                    <a href="https://github.com/ttdunlap33/movie-project" className="btn btn-outline-secondary">Github Repo</a>
                </div>
            </div>
            <div className="card">
                <div className="card-img-body">
                    <img className="card-img" src="portfolio/src/images/sticky.png" alt="Stick It To Me"></img>
                </div>
                <div className="card-body">
                    <h2 className="card-title">Stick It To Me</h2>
                    <p className="card-text">Something Explaining Project Goes HERE</p>
                    <a href="https://boiling-garden-97737.herokuapp.com/" className="btn btn-outline-primary">Visit App</a>
                    <a href="https://github.com/CWhirl/Project-2" className="btn btn-outline-secondary">Github Repo</a>
                </div>
            </div>
            <div className="card">
                <div className="card-img-body">
                    <img className="card-img" src="portfolio/src/images/budgetTracker.png" alt="Budget Tracker"></img>
                </div>
                <div className="card-body">
                    <h2 className="card-title">Budget Tracker</h2>
                    <p className="card-text">Something Explaining Project Goes HERE</p>
                    <a href="https://shielded-inlet-66273.herokuapp.com/" className="btn btn-outline-primary">Visit App</a>
                    <a href="https://github.com/tbruce00/PWA_BudgetTracker" className="btn btn-outline-secondary">Github Repo</a>
                </div>
            </div>
            <div className="card">
                <div className="card-img-body">
                    <img className="card-img" src="portfolio/src/images/addworkout.png" alt="Workout Tracker"></img>
                </div>
                <div className="card-body">
                    <h2 className="card-title">Workout Tracker</h2>
                    <p className="card-text">Something Explaining Project Goes HERE</p>
                    <a href="https://agile-spire-74922.herokuapp.com/" className="btn btn-outline-primary">Visit App</a>
                    <a href="https://github.com/tbruce00/NoSQL_WorkoutTracker" className="btn btn-outline-secondary">Github Repo</a>
                </div>
            </div>
            </div>
            </div>
            </div>
    )
}