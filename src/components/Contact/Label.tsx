const Label = ({ name }: { name: string }) => {
	return (
		<label htmlFor={name} className="text-white font-nunito">
			{name}
		</label>
	)
}

export default Label
