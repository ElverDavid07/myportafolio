import { Tooltip } from '@nextui-org/react'

interface Props {
	children: React.ReactNode
	content: string
}
const TooltipComponent = ({ children, content }: Props) => {
	return (
		<Tooltip content={content} showArrow={true} className="font-nunito">
			{children}
		</Tooltip>
	)
}

export default TooltipComponent
