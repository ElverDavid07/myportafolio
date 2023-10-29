import useNavigate from 'hooks/useNavigate'
import Logo from './Logo'
import MenuButton from './MenuButton'
import NavLink from './NavLink'
import ThemeButtons from './ThemeButtons'

const Navbar = () => {
	const { isOpen, closeMenu } = useNavigate()
	return (
		<header className="Content-navbar">
			<nav className="Navbar">
				<section className="flex justify-between items-center mx-2 lg:-order-1">
					<Logo />
					<MenuButton open={isOpen} closeMenu={closeMenu} />
				</section>

				<ThemeButtons />
				<NavLink closeMenu={closeMenu} open={isOpen} />
			</nav>
		</header>
	)
}

export default Navbar
