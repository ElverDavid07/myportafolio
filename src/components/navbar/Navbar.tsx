import { useState } from 'react'

import Logo from './Logo'
import MenuButton from './MenuButton'
import NavLink from './NavLink'
import ThemeButtons from './ThemeButtons'

const Navbar = () => {
	const [open, setOpen] = useState(false)
	const close = () => setOpen(!open)

	return (
		<header className="Content-navbar animate-fade-down animate-once animate-duration-150">
			<nav className="Navbar">
				<section className="flex justify-between items-center mx-2 lg:-order-1">
					<Logo />
					<MenuButton open={open} setOpen={setOpen} />
				</section>

				<ThemeButtons />
				<NavLink close={close} open={open} />
			</nav>
		</header>
	)
}

export default Navbar
