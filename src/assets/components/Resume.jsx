import React from "react";

const Resume = () => {
  return (
    <section className="Resume">
      <section className="boxBack">
        <section className="boxContent">
          <h1>My Resume</h1>
          <section>
            <h2>Education</h2>
            <ul>
              <li>
                <strong>University of Richmond Web Development Bootcamp</strong>{" "}
                - Certificate (2025)
              </li>
              <li>
                <strong>Regent University Law School</strong> - Juris Docterate
                (2000)
              </li>
              <li>
                <strong>Virginia Commonwealth University</strong> - B.S. (1989)
              </li>
            </ul>
          </section>

          <section>
            <h3>Coding Experience</h3>
            <ul>
              <ul>
                <h4>
                  <strong>Front-end</strong>
                </h4>
                <li> HTML</li>
                <li> CSS</li>
                <li> JavaScript</li>
                <li> React</li>
              </ul>

              <ul>
                <h4>
                  <strong>Back-end</strong>
                </h4>
                <li> Node.js</li>
                <li> Express.js</li>
                <li> MongoDB</li>
                <li> MySQL</li>
                <li> Sequelize</li>
                <li> Mongoose</li>
                <li> GraphQL</li>
                <li> REST APIs</li>
                <li> Handlebars.js</li>
                <li> Insomnia</li>
                <li> JSON</li>
                <li> dotenv</li>
              </ul>
              <ul>
                <h4>
                  <strong>Other</strong>
                </h4>
                <li> Git</li>
                <li> GitHub</li>
                <li> VS Code</li>
                <li> Bootstrap</li>
              </ul>
            </ul>
          </section>
        </section>
      </section>
    </section>
  );
};

export default Resume;
