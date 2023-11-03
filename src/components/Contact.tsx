import emailJs from '@emailjs/browser'
import type { Data } from '@interfaces/SubmitData'
import { Button, Input, Spinner, Textarea } from '@nextui-org/react'
import { useState } from 'react'
import type { SubmitHandler } from 'react-hook-form'
import { useForm } from 'react-hook-form'
import { ToastContainer, Zoom, toast } from 'react-toastify'

const Contact = () => {
	const [loaderBtn, setLoaderBtn] = useState(true)
	//* Hook validate form
	const {
		register,
		reset,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm<Data>()
	//* Submit email
	const submitData: SubmitHandler<Data> = async () => {
		try {
			await emailJs.sendForm(
				'service_aqcg77r',
				'template_9v5xeya',
				'#formId',
				'HmJktww9rFB4Doery',
			)
			reset()
			toast.info('correo enviado correctamente')
		} catch (error) {
			console.error(error)
		}
		setLoaderBtn(true)
	}

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
			<form className="Form" onSubmit={handleSubmit(submitData)} id="formId">
				{/*Input Name  */}
				<label htmlFor="nombre">Nombre</label>
				<Input
					isClearable={true}
					size="lg"
					type="text"
					placeholder="Ingresa tu nombre"
					{...register('nombre', {
						required: true,
						minLength: 3,
						maxLength: 50,
					})}
					variant="bordered"
					isInvalid={errors.nombre ? true : false}
					errorMessage={
						errors.nombre
							? errors.nombre.type === 'required'
								? 'Este campo es requerido!'
								: errors.nombre.type === 'minLength'
								? 'El nombre debe tener al menos 3 caracteres!'
								: errors.nombre.type === 'maxLength'
								? 'El nombre debe tener máximo 50 caracteres!'
								: undefined
							: undefined
					}
				/>

				{/* Input Email */}
				<label htmlFor="correo">Correo</label>
				<Input
					isClearable={true}
					size="lg"
					isInvalid={errors.correo ? true : false}
					variant="bordered"
					type="email"
					placeholder="Ingresa tu correo electronico"
					{...register('correo', {
						required: true,
						pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
					})}
					errorMessage={
						errors.correo
							? errors.correo.type === 'required'
								? 'Este campo es requerido!'
								: errors.correo.type === 'pattern'
								? 'Escribe un correo valido!'
								: undefined
							: undefined
					}
				/>

				{/* Input Message */}
				<label htmlFor="message">Mensaje</label>
				<Textarea
					isInvalid={errors.mensaje ? true : false}
					variant="bordered"
					size="lg"
					placeholder="Escribe tu mensaje aqui"
					{...register('mensaje', {
						required: true,
					})}
					className="resize-none"
					errorMessage={
						errors.mensaje
							? errors.mensaje.type === 'required'
								? 'Este campo es requerido!'
								: undefined
							: undefined
					}
				/>

				<Button
					radius="full"
					variant="ghost"
					color="primary"
					type="submit"
					onClick={() => {
						isValid === true ? setLoaderBtn(false) : ''
					}}
				>
					{loaderBtn === false ? (
						<Spinner aria-label="spinner" color="white" />
					) : (
						'Enviar'
					)}
				</Button>
			</form>
			<ToastContainer
				autoClose={1000}
				closeOnClick={false}
				closeButton={false}
				pauseOnHover={false}
				transition={Zoom}
			/>
		</>
	)
}

export default Contact
