export function Portfolio(){
    const projects =[
        {
            title: "Project 1",
            image: "./assets/images/project8.jpg",
            Deploy: "https://example.com/project1",
            Repo: "https://github.com/Bahashem/project1",
        },
        {
            title: "Project 2,
            image: "./assets/images/project2.jpg",
            Deploy: "https://example.com/project2",
            Repo: "https://github.com/Bahashem/project2",
        },
        {
            title: "Project 4",
            image: "./assets/images/project4.jpg",
            Deploy: "https://example.com/project4",
            Repo: "https://github.com/Bahashem/project4",
        }
        {
            title: "Project 5",
            image: "./assets/images/project5.jpg",
            Deploy: "https://example.com/project5",
            Repo: "https://github.com/Bahashem/project5",
        },
        {
            title: "Project 6",
            image: "./assets/images/project6.jpg",
            Deploy: "https://example.com/project6",
            Repo: "https://github.com/Bahashem/project6",
        },
                ]};
        return(
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                {projects.map((title, image, deploy, repo, index) => (
                    <div key={title} className="bg-white rounded-2xl shadow-md overflow-hidden">
                        <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h3 className="text-xl font-bold text-green-700">{project.title}</h3>
                            <p className="text-gray-700">{project.description}</p>
                            <a href={project.link} target="_blank" rel="noopener noreferrer" 
                            className="text-pink-500 font-medium hover:underline">View Project</a>
                       
                       <a
                       href={repo}
                       target="blank"
                       rel="nonpener noreferrer"
                       className="text-yellow-600 font-medium hover:underline"
                       ></a>
                       
                        </div>
                    </div>
                )</div>
                </section>
            );
        }

    {

    }


        