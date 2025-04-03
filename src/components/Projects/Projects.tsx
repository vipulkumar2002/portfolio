import { projectData } from '../../data/project';
import Title from '../layouts/Title'
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="projectsComponent w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        {projectData.map((project, index) => (
          <ProjectsCard key={index} title={project.title} des={project.des} src={project.src} />
        ))}
      </div>
    </section>
  );
}

export default Projects