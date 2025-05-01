// Removed unused import
"../..public/images/project1.jpg";

export function Portfolio() {
  const projects = [
    {
      title: "Project 1- README Generator",
      image: "../images/project1.jpg",
      Deploy: "https://app.screencastify.com/v3/watch/zkXpFDBTukB75sSn9kid",
      Repo: "https://github.com/Bahashem/ReadMeGenerator",
    },
    {
      title: "Project 2 - Weather Dashboard",
      image: "../images/weather.jpg",
      Deploy: "https://.google.com/file/d/1btUlp7IonUhFgjnTHDUXdYIvsJVhCIjp",
      Repo: "https://github.com/Bahashem/WeatherDashboard",
    },
    {
      title: "Project 3- bento-the-lunch-box",
      image: "../images/bentoBox.jpg",
      Deploy: "https://deetsb.github.io/bento-the-lunch-box/",
      Repo: "https://github.com/deetsb/bento-the-lunch-box",
    },
    {
      title: "Project 4-ReelReveal",
      image: "../images/reel1.jpg",
      Deploy: "https://reelreveal.onrender.com",
      Repo: "https://github.com/hazyplebian/ReelReveal",
    },
    {
      title: "Project 5- VehicleBuilder",
      image: "../images/vehicleB.jpg",
      Deploy:
        "https://drive.google.com/file/d/1ABpBiUZgB9F-m8-NX1PCS243W0cEBAZe/view",
      Repo: "https://github.com/Bahashem/VehicleBuilder",
    },
  ];
  return (
    <section className="portfolioGrid">
      {projects.map((project, index) => (
        <div key={index} className="projectBox">
          <img src={project.image} alt={project.title} className="projectPic" />
          <div className="projectDetails">
            <h3 className="projectTitle">{project.title}</h3>
            <a href={project.Deploy} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
            <br />
            <a href={project.Repo} target="_blank" rel="noopener noreferrer">
              View Repo
            </a>
          </div>
        </div>
      ))}
    </section>
  );
}
export default Portfolio;
