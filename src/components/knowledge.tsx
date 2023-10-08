import { Tooltip } from '@nextui-org/react'
import { knowledge } from '@utils/knowledge'
const knowledgeComponent = () => {
	return (
		<>
			<div className="mt-36" id="knowledge">
				<h2 className="Subtitle text-center  pb-16">Conocimientos</h2>
				<div className="Content-icons">
					{knowledge.map(({ link, name }, i) => (
						<div key={i + name}>
							<Tooltip
								content={name}
								classNames={{
									base: 'hidden lg:block md:block bg-white capitalize font-nunito text-slate-950',
									arrow: 'bg-neutral-400 dark:bg-white',
								}}
								showArrow={true}
							>
								<img
									src={link}
									alt={name}
									width={60}
									height={70}
									aria-label={name}
									className="mx-auto hover:scale-110 transition-all"
								/>
							</Tooltip>

							<h3 className="text-center font-nunito text-slate-700 dark:text-gray-400 lg:hidden md:hidden">
								{name}
							</h3>
						</div>
					))}
				</div>
			</div>
		</>
	)
}

export default knowledgeComponent
