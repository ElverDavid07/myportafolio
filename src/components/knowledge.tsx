import { Tooltip } from '@nextui-org/react'
import { knowledge } from '@utils/knowledge'
const knowledgeComponent = () => {
	return (
		<>
			<section className="mt-36" id="knowledge">
				<h2 className="Subtitle text-center  pb-16">Conocimientos</h2>
				<div className="Content-icons">
					{knowledge.map(({ link, name }, i) => (
						<div key={i + name}>
							<Tooltip content={name} showArrow={true} className="font-nunito">
								<img
									src={link}
									alt={name}
									width={60}
									height={70}
									aria-label={name}
									className="mx-auto hover:scale-110 transition-all"
								/>
							</Tooltip>

							<h3 className="text-center font-nunito text-slate-700 dark:text-gray-300 lg:hidden md:hidden">
								{name}
							</h3>
						</div>
					))}
				</div>
			</section>
		</>
	)
}

export default knowledgeComponent
