import { useEffect, useState } from "react";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs/index";
import { FiMenu, FiX } from "react-icons/fi/index";
import { Link } from "react-scroll";
const Navbar = () => {
	const [open, setOpen] = useState(false);
	const close = () => setOpen(!open);

	const [toggleDarkMode, setToggleDarkMode] = useState(
		localStorage.theme === "dark" ||
			(!("theme" in localStorage) &&
				window.matchMedia("(prefers-color-scheme: dark)").matches),
	);

	useEffect(() => {
		if (toggleDarkMode) {
			document.documentElement.classList.add("dark");
			localStorage.theme = "dark";
		} else {
			document.documentElement.classList.remove("dark");
			localStorage.theme = "light";
		}
	}, [toggleDarkMode]);

	const changeDarkMode = () => {
		setToggleDarkMode((prevState) => !prevState);
	};
	return (
		<header className="Content-navbar">
			<nav className="Navbar">
				<div className="flex justify-between items-center mx-2 lg:-order-1">
					<Link to="home" href="#home">
						<img src="./logo.svg" alt="logo" width={80} height={80} />
					</Link>
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
				<div
					onClick={changeDarkMode}
					onKeyUp={changeDarkMode}
					className="Content-menu-icons"
				>
					{toggleDarkMode ? (
						<BsFillSunFill
							size={25}
							className="dark:text-yellow-300  cursor-pointer"
						/>
					) : (
						<BsFillMoonStarsFill
							size={25}
							className="text-sky-700 cursor-pointer"
						/>
					)}
				</div>

				<div
					className={`Nav-content-items ${open ? "top-16" : "top-[-850px] "}`}
				>
					<div
						className={`Nav-list  ${
							open
								? "top-20 opacity-100 "
								: "top-[-850px] lg:opacity-100 opacity-0"
						}`}
					>
						<Link
							to="home"
							href="#home"
							className="Link  dark:Link-Dark Nav-link"
							onClick={close}
						>
							inicio
						</Link>
						<Link
							to="about"
							href="#about"
							offset={-140}
							className="Link dark:Link-Dark Nav-link"
							onClick={close}
						>
							sobre mi
						</Link>
						<Link
							to="knowledge"
							href="#knowledge"
							offset={-90}
							className="Link dark:Link-Dark Nav-link"
							onClick={close}
						>
							conocimientos
						</Link>
						<Link
							to="certificates"
							href="certificates"
							offset={-200}
							className="Link dark:Link-Dark Nav-link"
							onClick={close}
						>
							certificados
						</Link>
						<Link
							to="projects"
							href="projects"
							offset={-190}
							className="Link dark:Link-Dark Nav-link"
							onClick={close}
						>
							proyectos
						</Link>
						<Link
							to="contact"
							href="contact"
							offset={-130}
							className="Link dark:Link-Dark Nav-link"
							onClick={close}
						>
							contacto
						</Link>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
