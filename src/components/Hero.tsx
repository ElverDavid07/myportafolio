import urlImage from '@assets/icon-hero.svg'
import { Button, Link } from '@nextui-org/react'
const Hero = () => {
	return (
		<section className="grid lg:grid-cols-2">
			<div className="mt-20">
				<h1 className="Name">Elver David Peñate</h1>
				<h2 className="font-nunito text-slate-700 text-lg dark:text-white mb-4">
					Desarrollador web
				</h2>
				<Button
					type="submit"
					href="./archives/CurriculumElverDavid.pdf"
					target="_blank"
					as={Link}
					variant="ghost"
					color="primary"
					className="font-nunito"
					radius="full"
				>
					Hoja de vida
				</Button>
			</div>
			<img
				src={urlImage.src}
				alt="icon hero"
				className="mt-20 lg:mt-0 w-full"
				width="603"
				height="500"
			/>
		</section>
	)
}

export default Hero
