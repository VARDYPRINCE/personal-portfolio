import React, { useEffect, useState } from "react";
import "odometer/themes/odometer-theme-default.css";
import "./facts.css";
import Odometer from "react-odometerjs";

const Fact = () => {
  const [experince, setExperince] = useState(0);
  const [project, setProject] = useState(0);
  const [clients, setClients] = useState(0);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setExperince(2);
      setProject(10);
      setClients(3);
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="flex__center fact__container">
      <div className="fact__item">
        <div className="flex__center">
          <Odometer value={experince} className="title" />
          <h3 className="title">+</h3>
        </div>
        <p className="label">Years of Experience</p>
      </div>

      <div className="fact__item">
        <div className="flex__center">
          <Odometer value={project} className="title" />
          <h3 className="title">+</h3>
        </div>
        <p className="label">Completed Projects</p>
      </div>

      <div className="fact__item">
        <div className="flex__center">
          <Odometer value={clients} className="title" />
          <h3 className="title">+</h3>
        </div>
        <p className="label">Satisfied Clients</p>
      </div>
    </div>
  );
};

export default Fact;
