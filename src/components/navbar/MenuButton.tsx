import { FiMenu, FiX } from 'react-icons/fi'

interface MenuButtonProps {
	open: boolean
	closeMenu: () => void
}

const MenuButton = ({ open, closeMenu }: MenuButtonProps) => {
	return (
		<button
			onClick={closeMenu}
			aria-label="button menu"
			type="submit"
			className="order-1 lg:order-none animate-jump animate-duration-[2000ms]"
		>
			{open ? (
				<FiX className="Nav-icons" title="close navbar" />
			) : (
				<FiMenu className="Nav-icons" title="open navbar" />
			)}
		</button>
	)
}

export default MenuButton
