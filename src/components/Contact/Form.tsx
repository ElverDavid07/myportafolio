import type { Data } from '@interfaces/SubmitData'
import { Button, Input, Spinner, Textarea } from '@nextui-org/react'
import { sendEmail } from 'functions/sendEmail'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { toast } from 'react-toastify'
import Label from './Label'

interface Props {
	handleLoader: () => void
	isLoader: boolean
}

const Form = ({ handleLoader, isLoader }: Props) => {
	const {
		register,
		reset,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm<Data>()

	const submitData: SubmitHandler<Data> = async () => {
		await sendEmail()
		reset()
		toast.info('correo enviado correctamente')
		handleLoader()
	}

	//Validar email
	const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

	return (
		<form className="Form" onSubmit={handleSubmit(submitData)} id="formId">
			{/*Input Name  */}
			<Label name="nombre" />
			<Input
				id="nombre"
				type="text"
				isClearable={true}
				placeholder="Ingresa tu nombre"
				className="font-nunito"
				isInvalid={errors.nombre ? true : false}
				{...register('nombre', {
					required: true,
					minLength: 3,
					maxLength: 50,
				})}
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
			<Label name="correo" />
			<Input
				id="correo"
				isClearable={true}
				type="email"
				placeholder="Ingresa tu correo electronico"
				className="font-nunito"
				isInvalid={errors.correo ? true : false}
				{...register('correo', {
					required: true,
					pattern,
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
			<Label name="mensaje" />
			<Textarea
				id="mensaje"
				size="lg"
				placeholder="Escribe tu mensaje aqui"
				className="font-nunito"
				isInvalid={errors.mensaje ? true : false}
				{...register('mensaje', {
					required: true,
				})}
				errorMessage={
					errors.mensaje &&
					errors.mensaje.type === 'required' &&
					'Este campo es requerido'
				}
			/>

			<Button
				radius="full"
				variant="ghost"
				color="primary"
				type="submit"
				onClick={() => {
					isValid === true ? handleLoader() : ''
				}}
			>
				{isLoader === false ? (
					<Spinner aria-label="spinner" color="white" />
				) : (
					'Enviar'
				)}
			</Button>
		</form>
	)
}

export default Form
