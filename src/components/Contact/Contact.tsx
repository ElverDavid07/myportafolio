import useLoader from 'hooks/useLoader'

import Form from './Form'
import Toast from './Toast'

const Contact = () => {
	const { isLoader, handleLoader } = useLoader()

	return (
		<>
			<h2 className="Subtitle text-center mt-32 mb-16" id="contact">
				Contacto
			</h2>
			<p className="font-nunito text-gray-300 text-lg  mb-16 text-center">
				¡Gracias por visitar mi portafolio! Si deseas ponerte en contacto
				conmigo, puedes enviarme un correo electrónico, atravez de este
				formulario.
			</p>

			{/* Form */}
			<Form isLoader={isLoader} handleLoader={handleLoader} />
			<Toast />
		</>
	)
}

export default Contact
