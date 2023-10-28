import { Link } from 'react-scroll'

const Logo = () => {
	return (
		<Link to="home" href="#home">
			<img src="./logo.svg" alt="logo" width={80} height={80} />
		</Link>
	)
}

export default Logo
