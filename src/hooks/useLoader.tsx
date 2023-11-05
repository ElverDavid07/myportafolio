import { useState } from 'react'
const useLoader = () => {
	const [isLoader, setIsLoader] = useState(true)
	const handleLoader = () => {
		setIsLoader(!isLoader)
	}
	return { isLoader, handleLoader }
}

export default useLoader
