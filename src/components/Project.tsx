import { Link, Tooltip } from '@nextui-org/react'
import { Project } from '@utils/projects'
import { RiGithubFill, RiGlobalLine } from 'react-icons/ri/index'
const ProjectComponents = () => {
	return (
		<>
			<h2 className="Subtitle mt-36">Projectos personales</h2>
			<section className="Content-all-project" id="projects">
				{Project.map(({ description, name, url, urlGitHub, urlWeb }) => (
					<article key={name} className="Content-one-project">
						<img
							src={url}
							alt={name}
							width={'381'}
							height={'189'}
							className="mx-auto"
						/>
						<h2 className="text-center font-nunito  text-white text-lg py-2">
							<b>{name}</b>
						</h2>
						<p className=" text-gray-300 py-2 font-nunito">{description} </p>
						<div className="flex justify-between lg:justify-normal items-center gap-x-2">
							{/* icono de github  */}
							{/* <Tooltip content="Ver codigo" showArrow={true} className="font-nunito"> */}
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
									className={urlGitHub === '/' ? 'hidden' : ''}
								/>
							</Link>
							{/* </Tooltip> */}
							{/* icono de ir a la web */}
							<Tooltip
								content="Ir a la web"
								showArrow={true}
								className="font-nunito"
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
										className={` ${urlWeb === '/' ? 'hidden' : ''}`}
										aria-label="link website"
									/>
									<span
										className={`font-nunito  lg:hidden ${
											urlWeb === '/' ? 'hidden' : ''
										}`}
									>
										ir a la pagina
									</span>
								</Link>
							</Tooltip>
						</div>
					</article>
				))}
			</section>
		</>
	)
}

export default ProjectComponents
