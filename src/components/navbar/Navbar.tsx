import useMenu from 'hooks/useMenu'
import Logo from './Logo'

import MenuButton from './MenuButton'
import NavLink from './NavLink'

const Navbar = () => {
	const { isOpen, closeMenu } = useMenu()
	return (
		<header className="Content-navbar">
			<nav className="Navbar">
				<section className="flex justify-between items-center mx-2 lg:-order-1">
					<Logo />
					<MenuButton open={isOpen} closeMenu={closeMenu} />
				</section>

				<NavLink closeMenu={closeMenu} open={isOpen} />
			</nav>
		</header>
	)
}

export default Navbar
