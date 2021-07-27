import Project from './Project';

function ScrollSide() {
  const projects = [
    {
      order: 1,
      name: 'first',
      img: '',
      description: 'some description',
      bgColor: 'blue',
      liveLink: '',
      githubLink: '',
      classType: 'project-mac',
    },
    {
      order: 2,
      name: 'second',
      img: '',
      description: 'some description 2',
      bgColor: 'green',
      liveLink: '',
      githubLink: '',
      classType: '',
    },
  ];

  return (
    <aside>
      {projects.map((project) => (
        <Project key={project.order} project={project} />
      ))}
    </aside>
  );
}

export default ScrollSide;
