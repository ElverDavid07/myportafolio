import { RiGithubFill, RiGlobalLine } from "react-icons/ri/index.js";
import { Project } from "@utils/profile";
import { Tooltip } from "flowbite-react";
const ProjectComponents = () => {
 return (
  <>
   <h2 className="Subtitle mt-36">Projectos personales</h2>
   <div className="Content-all-project" id="projects">
    {Project.map(({ description, name, url, urlGitHub, urlWeb, tag, typeTag }, i) => (
     <div key={i} className="Content-one-project">
      <div className={typeTag}>{tag} </div>
      <img src={url} alt={name} />
      <h2 className="text-center font-nunito text-slate-950 text-lg py-2">{name} </h2>
      <p className="text-slate-700 py-2 font-nunito">{description} </p>
      <div className="flex items-center gap-x-2">
        {/* icono de github  */}
       <Tooltip content="Ver codigo">
        <a href={urlGitHub} aria-label="link github">
         <RiGithubFill className="Url-icons" aria-label="link github" />
        </a>
       </Tooltip>
       {/* icono de ir a la web */}
       <Tooltip content="Ir a la web">
        <a href={urlWeb} target="_blank" aria-label="link website">
         <RiGlobalLine
          className={`Url-icons ${urlWeb === "/" ? "hidden" : ""}`}
          aria-label="link website"
         />
        </a>
       </Tooltip>
      </div>
     </div>
    ))}
   </div>
  </>
 );
};

export default ProjectComponents;
