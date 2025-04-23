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
      image: "../images/project2.png",
      Deploy: "https://.google.com/file/d/1btUlp7IonUhFgjnTHDUXdYIvsJVhCIjp",
      Repo: "https://github.com/Bahashem/WeatherDashboard",
    },
    {
      title: "Project 3- bento-the-lunch-box",
      image: "../images/project3.png",
      Deploy: "https://deetsb.github.io/bento-the-lunch-box/",
      Repo: "https://github.com/deetsb/bento-the-lunch-box",
    },
    {
      title: "Project 4-ReelReveal",
      image: "../images/project4.png",
      Deploy: "https://reelreveal.onrender.com",
      Repo: "https://github.com/hazyplebian/ReelReveal",
    },
    {
      title: "Project 5- VehicleBuilder",
      image: "../images/project5.jpg",
      Deploy:"https://drive.google.com/file/d/1ABpBiUZgB9F-m8-NX1PCS243W0cEBAZe/view",
      Repo: "https://github.com/Bahashem/VehicleBuilder",
    },
  ];
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-">
      {projects.map((project, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl shadow-md overflow-hidden"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-bold text-green-700">
              {project.title}
            </h3>
            <a
              href={project.Deploy}
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 font-medium hover:underline"
            >
              View Project
            </a>
            <a
              href={project.Repo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-600 font-medium hover:underline"
            >
              View Repo
            </a>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Portfolio;