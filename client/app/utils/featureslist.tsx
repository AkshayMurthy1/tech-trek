export interface featureslisttype {
  name: string | React.ReactNode;
  description: string | React.ReactNode; // Allow for ReactNode if using JSX
  id: number;
  image: string;
}

export const List: featureslisttype[] = [
  {
    name: (<div className=" ">Marketplace</div>),
    description: (
      <div className=" leading-normal">
        <span className=" underline text-yellow-300">Trading Hub:</span> Students can trade tech ideas, code snippets, and project blueprints.<br />
        <span className=" underline text-yellow-300">Skill Exchange:</span> Students can offer tutoring or project collaboration in exchange for money or other skills.<br />
        <span className=" underline text-yellow-300">Resource Library:</span> A repository of free and paid resources, including tutorials, templates, and tools.
      </div>
    ),
    id: 1,
    image: '/assets/tech-trek-logo.jpg',
  },
  {
    name: (<div className=" ">Ventures</div>),
    description: (
      <div className=" leading-normal">
        <span className=" underline text-yellow-300">Project Submissions</span> Students can submit their projects and ideas for review.<br />
        <span className=" underline text-yellow-300">Evaluation Process</span> A team of experts evaluates the submissions based on feasibility, innovation, and potential.<br />
        <span className=" underline text-yellow-300">Development Support</span> Selected projects receive funding, mentorship, and resources to bring them to fruition
      </div>
    ),
    id: 2,
    image: '/assets/scientist-lander.png',

  },
  {
    name: (<div className=" ">Forum</div>),
    description: (
      <div className=" leading-normal">
        <span className=" underline text-yellow-300">Project Submissions</span> Students can submit their projects and ideas for review.<br />
        <span className=" underline text-yellow-300">Evaluation Process</span> A team of experts evaluates the submissions based on feasibility, innovation, and potential.<br />
        <span className=" underline text-yellow-300">Development Support</span> Selected projects receive funding, mentorship, and resources to bring them to fruition
      </div>
    ),
    id: 3,
    image: '/assets/tech-trek-logo.jpg',

  },
];