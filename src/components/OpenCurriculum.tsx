import { Button, Link } from '@nextui-org/react'

const openCurriculum = () => {
	return (
		<Button
			type="submit"
			href="./archives/CurriculumElverDavid.pdf"
			target="_blank"
			variant="shadow"
			color="primary"
			className="font-nunito"
			radius="full"
			as={Link}
		>
			Hoja de vida
		</Button>
	)
}

export default openCurriculum
