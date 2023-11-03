import { useState } from 'react'

const useMenu = () => {
	const [isOpen, setIsOpen] = useState(false)

	const closeMenu = () => setIsOpen(!isOpen)

	return { isOpen, closeMenu }
}

export default useMenu
