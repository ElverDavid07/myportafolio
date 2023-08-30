import { Link, Tooltip } from "@nextui-org/react";
import { Project } from "@utils/projects";
import { RiGithubFill, RiGlobalLine } from "react-icons/ri/index";
const ProjectComponents = () => {
	return (
		<>
			<h2 className="Subtitle mt-36">Projectos personales</h2>
			<div className="Content-all-project" id="projects">
				{Project.map(({ description, name, url, urlGitHub, urlWeb }) => (
					<div key={name} className="Content-one-project">
						<img
							src={url}
							alt={name}
							width={"381"}
							height={"189"}
							className="mx-auto"
						/>
						<h2 className="text-center font-nunito text-slate-950 dark:text-white text-lg py-2">
							<b>{name}</b>
						</h2>
						<p className="text-slate-700 dark:text-gray-400 py-2 font-nunito">
							{description}{" "}
						</p>
						<div className="flex justify-between lg:justify-normal items-center gap-x-2">
							{/* icono de github  */}
							<Tooltip
								content="Ver codigo"
								classNames={{
									base: "hidden lg:block md:block bg-white capitalize font-nunito text-slate-950",
									arrow: "bg-neutral-400 dark:bg-white",
								}}
								showArrow={true}
							>
								<Link
									href={urlGitHub}
									target="_blank"
									aria-label="link github"
									className="Link-response"
									rel="noreferrer"
								>
									<RiGithubFill
										size={30}
										aria-label="link github"
										className={urlGitHub === "/" ? "hidden" : ""}
									/>
								</Link>
							</Tooltip>
							{/* icono de ir a la web */}
							<Tooltip
								content="Ir a la web"
								classNames={{
									base: "hidden lg:block md:block bg-white capitalize font-nunito text-slate-950",
									arrow: "bg-neutral-400 dark:bg-white",
								}}
								showArrow={true}
							>
								<Link
									href={urlWeb}
									target="_blank"
									aria-label="link website"
									className="Link-response"
									rel="noreferrer"
								>
									<RiGlobalLine
										size={30}
										className={` ${urlWeb === "/" ? "hidden" : ""}`}
										aria-label="link website"
									/>
									<span
										className={`font-nunito  lg:hidden ${
											urlWeb === "/" ? "hidden" : ""
										}`}
									>
										ir a la pagina
									</span>
								</Link>
							</Tooltip>
						</div>
					</div>
				))}
			</div>
		</>
	);
};

export default ProjectComponents;
