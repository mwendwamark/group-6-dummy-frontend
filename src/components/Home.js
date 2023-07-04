import React from "react";
import { useRef, useEffect } from "react";
import "./App.css";
import Typed from "typed.js";
import "./blob-haikei.png";

function Home() {
  const typingRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "Create New Projects",
        "Manages Teams Tasks Effectively",
        "Shows Due Dates of Projects",
      ],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    };

    typingRef.current = new Typed(".typing", options);

    return () => {
      typingRef.current.destroy();
    };
  }, []);

  return (
    <div className="home-container">
      <h1 className="title">
        <span>P</span>roject Wiz.
      </h1>
      <h2 className="typing"></h2>
      <p className="description">
        Welcome to the Project Manager application. This application is designed
        to help you efficiently manage and track your projects. With Project
        Manager, you can organize tasks, set deadlines, assign team members, and
        monitor the progress of your projects all in one place.
      </p>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReGYDP_5RjfsmSSZsV2PsmPbnO4I1uzksiWA&usqp=CAU"
        alt="task image"
        className="task-image"
      />
      <h2 className="h2-features"> Features</h2>
      <div className="features">
        <div className="box-features">
          <h3>Create and manage multiple projects.</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            iure ad deleniti.
          </p>
        </div>
        <div className="box-features">
          <h3>Add tasks and subtasks with due dates and descriptions.</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis,
            blanditiis eos. Inventore?
          </p>
        </div>
        <div className="box-features">
          <h3>Assign team members to specific tasks.</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quo
            architecto quis!
          </p>
        </div>
        <div className="box-features">
          <h3>
            Track the progress of tasks and projects through visual indicators.
          </h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet rem
            accusantium aperiam!
          </p>
        </div>
      </div>
      <p className="info">
        Whether you are a project manager, team lead, or an individual working
        on personal projects, Project Manager provides you with the tools you
        need to stay organized, collaborate effectively, and achieve your
        project goals.
      </p>
      <button className="get-started">Get Started</button>
    </div>
  );
}

export default Home;
