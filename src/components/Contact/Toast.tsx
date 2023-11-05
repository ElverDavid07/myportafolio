import { ToastContainer, Zoom } from 'react-toastify'

const Toast = () => {
	return (
		<ToastContainer
			autoClose={1000}
			closeOnClick={false}
			closeButton={false}
			pauseOnHover={false}
			transition={Zoom}
		/>
	)
}

export default Toast
