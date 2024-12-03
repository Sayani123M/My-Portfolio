import React, { useState } from "react";
import "./App.css";
import ProjectDetails from "./projectdetails";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [query, setQuery] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { name, email, query };

    try {
      const response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (response.ok) {
        alert(result.message);
      } else {
        alert("Failed to submit query. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting query:", error);
    }
  };

  const projects = [
    {id: 1, name: "Shortest Path Finder", image: `${process.env.PUBLIC_URL}/shortest-path-finder.png`, intro: "Tic-Tac-Toe is a classic two-player game where players take turns marking spaces in a 3x3 grid with their respective symbols (usually 'X' and 'O'). The objective is to align three symbols horizontally, vertically, or diagonally before your opponent. Single-player mode with AI opponent (difficulty adjustable). Intermediate level project. Tech stack applied was React.js, python(flask), css" },
    {id: 2, name: "URL Shortener", image: `${process.env.PUBLIC_URL}/url-shortener.jpg`, intro: "Generates shortened links from long URLs, making them easier to share. Tech stack used: html, css, react.js, express.js(for storing the database), python(flask)" },
    {id: 3, name: "Flash Cards", image: `${process.env.PUBLIC_URL}/flashcard.jpg`, intro: "helps users create, manage, and review cards containing questions on one side and answers on the other." },
    { id: 4, name: "Pinnacle Interiors", image: `${process.env.PUBLIC_URL}/pinnacle-logo.png`, intro: "It's an e-commerce website..." },
    { id: 7, name: "Weather App", image: `${process.env.PUBLIC_URL}/snow.png`, intro: "Use of API, beginner-level project" },
    { id: 8, name: "My-form", image: `${process.env.PUBLIC_URL}/form.jpg`, intro: "Simple HTML, CSS-based project" },
    { id: 6, name: "Soduko Solver", image: `${process.env.PUBLIC_URL}/soduko-solver.png`, intro: "A little advanced" },
    { id: 5, name: "Relax&Chill", image: `${process.env.PUBLIC_URL}/relax.jpg`, intro: "Unique project for helping users relax" },
  ];

  return (
    <div className="App">
        <nav className="navbar">
          <a href="#home" className="nav-link">Home</a>
          <a href="#about" className="nav-link">About Me</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>

        <Routes>
          <Route path="/" element={<Home projects={projects} handleSubmit={handleSubmit} setName={setName} setEmail={setEmail} setQuery={setQuery} />} />
          <Route path="/project/:id" element={<ProjectDetails projects={projects} />} />
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
    </div>
  );
}

function Home({ projects, handleSubmit, setName, setEmail, setQuery }) {
  console.log("Home rendered");
  return (
    <>
      <section id="home" className="section home-section">
        <p>Welcome</p>
      </section>
      <section id="about" className="section about-section">
        <p>Call me Lily, please.</p>
        <p>I am a second-year college sophomore in India. I love to create these small projects; they feel very therapeutic. Feel free to check them out, and it would be lovely to connect with you.</p>
        <img src="/rabbit.webp" alt="Lily" className="about-image" />
      </section>
      <section id="projects" className="section projects-section">
        <h1>Projects</h1>
        <div className="projects-container">
          {projects.map((project) => (
            <Link to={`/project/${project.id}`} key={project.id} className="project">
              <img src={project.image} alt={project.name} className="project-image" />
              <div className="project-label">{project.name}</div>
            </Link>
          ))}
        </div>
      </section>
      <section id="contact" className="section contact-section">
        <p>Feel free to share any queries!</p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" placeholder="Your Name" onChange={(e) => setName(e.target.value)} required />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Your Email" onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div>
            <label htmlFor="query">Query:</label>
            <textarea id="query" name="query" placeholder="Your Query" rows="5" onChange={(e) => setQuery(e.target.value)} required></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </section>
    </>
  );
}

export default App;
