import { useEffect, useState } from 'react'
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs/index'

const ThemeButtons = () => {
	const [theme, setTheme] = useState(
		localStorage.theme === 'dark' ||
			(!('theme' in localStorage) &&
				window.matchMedia('(prefers-color-scheme: dark)').matches),
	)

	useEffect(() => {
		if (theme) {
			document.documentElement.classList.add('dark')
			localStorage.theme = 'dark'
		} else {
			document.documentElement.classList.remove('dark')
			localStorage.theme = 'light'
		}
	}, [theme])

	const changeDarkMode = () => {
		setTheme((prevState) => !prevState)
	}

	return (
		<>
			<div
				onClick={changeDarkMode}
				onKeyUp={changeDarkMode}
				className="Content-menu-icons"
			>
				{theme ? (
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
		</>
	)
}

export default ThemeButtons
