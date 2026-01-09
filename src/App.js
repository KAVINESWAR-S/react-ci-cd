import React from "react";

function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>Kavineswar</h1>
        <p>Computer Science Engineer | DevOps Enthusiast</p>
      </header>

      <section className="section">
        <h2>About Me</h2>
        <p>
          I am a Computer Science Engineering student interested in DevOps,
          CI/CD pipelines, and cloud technologies.
        </p>
      </section>

      <section className="section">
        <h2>Project</h2>
        <h3>React Portfolio with CI/CD</h3>
        <p>
          This project demonstrates automated build and test execution using
          Jenkins whenever code is pushed to GitHub.
        </p>
      </section>

      <section className="section">
        <h2>Skills</h2>
        <ul>
          <li>Linux</li>
          <li>Git & GitHub</li>
          <li>Jenkins</li>
          <li>Node.js & npm</li>
          <li>React</li>
          <li>AWS EC2</li>
        </ul>
      </section>

      <footer className="footer">
        <p>© 2026 Kavineswar</p>
      </footer>
    </div>
  );
}

export default App;