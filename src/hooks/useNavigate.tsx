import { useState } from 'react'

const useNavigate = () => {
	const [isOpen, setIsOpen] = useState(false)

	const closeMenu = () => setIsOpen(!isOpen)

	return { isOpen, closeMenu }
}

export default useNavigate
