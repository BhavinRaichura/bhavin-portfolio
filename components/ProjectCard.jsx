
const ProjectCard = ({title, description, url, active, index, skills}) => {
  console.log(skills)
  return (
    <div
      className={` py-3 transition-all ${
        active === index ? " opacity-0  " : " "
      }`}
    >
      <div className="title-text flex justify-between">
        <a href="mailto:bhavin@gmail.com?subject=helloSubject&amp;body=hellobody">{title}</a>
        <span className=" descriptive-text">
          
          <a href={url}>Live</a>
        </span>
      </div>
      <p className=" desc  ">
        {description}
        <span className='  flex flex-wrap gap-2 '>
          {
            skills.map((skill, key)=>
              <span key={key} className=' py-0.5 px-2 text-sm bg-slate-800 rounded-full '>{skill} { " "}</span>
            )
          } 
        </span>
      </p>
    </div>
  );
};

export default ProjectCard;
