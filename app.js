import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header>
        <h1>John Doe</h1>
        <p>Web Developer</p>
      </header>
      <main>
        <section id="about">
          <h2>About Me</h2>
          <p>
            Hello! I am John Doe, a passionate web developer with a keen interest in creating
            user-friendly and visually appealing websites. I love to code and learn new technologies.
          </p>
        </section>

        <section id="projects">
          <h2>Projects</h2>
          <div className="project">
            <h3>Project 1</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean condimentum
              vestibulum orci, nec tincidunt tellus venenatis id.
            </p>
          </div>
          <div className="project">
            <h3>Project 2</h3>
            <p>
              Nulla facilisi. Curabitur nec elit diam. Pellentesque habitant morbi tristique
              senectus et netus et malesuada fames ac turpis egestas.
            </p>
          </div>
        </section>

        <section id="skills">
          <h2>Skills</h2>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Node.js</li>
          </ul>
        </section>
      </main>
      <footer>
        <p>&copy; {new Date().getFullYear()} John Doe</p>
      </footer>
    </div>
  );
};

export default App;
