import { NavbarLink } from '@utils/navbarLink'
import { Link } from 'react-scroll'

interface NavLinksProps {
	closeMenu: () => void
	open: boolean
}
const NavLink = ({ closeMenu, open }: NavLinksProps) => {
	return (
		<ul
			className={`Nav-content-items ${
				open ? 'opacity-100' : 'top-[-450px] opacity-0 md:opacity-100'
			}`}
		>
			{NavbarLink.map(({ href, name, to, offset }, i) => (
				<li key={i + name} className="m-3 md:m-4 lg:m-0 lg:p-0 p-2 font-nunito">
					<Link
						to={to}
						href={href}
						offset={offset}
						className="Link  dark:Link-Dark Nav-link"
						onClick={closeMenu}
					>
						{name}
					</Link>
				</li>
			))}
		</ul>
	)
}

export default NavLink
