import { NavbarLink } from "@utils/navbarLink";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi/index";
import { Link } from "react-scroll";
import ThemeButtons from "./ThemeButtons";
const Navbar = () => {
	const [open, setOpen] = useState(false);
	const close = () => setOpen(!open);

	return (
		<nav className="Navbar">
			<div className="flex justify-between items-center mx-2 lg:-order-1">
				<Link to="home" href="#home">
					<img src="./logo.svg" alt="logo" width={80} height={80} />
				</Link>
				{/* Resposive Button */}
				<button
					onClick={() => setOpen(!open)}
					aria-label="button menu"
					type="submit"
					className="order-1 lg:order-none"
				>
					{open ? (
						<FiX className="Nav-icons" title="close navbar" />
					) : (
						<FiMenu className="Nav-icons" title="open navbar" />
					)}
				</button>
			</div>
			<ThemeButtons />

			<div className={`Nav-content-items ${open ? "top-16" : "top-[-850px] "}`}>
				<section
					className={`Nav-list  ${
						open
							? "top-20 opacity-100 "
							: "top-[-850px] lg:opacity-100 opacity-0"
					}`}
				>
					{NavbarLink.map(({ href, name, to, offset }, i) => (
						<Link
							key={i + name}
							to={to}
							href={href}
							offset={offset}
							className="Link  dark:Link-Dark Nav-link"
							onClick={close}
						>
							{name}
						</Link>
					))}
				</section>
			</div>
		</nav>
	);
};

export default Navbar;
