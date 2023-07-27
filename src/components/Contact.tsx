import emailJs from "@emailjs/browser";
import type { Data } from "@interfaces/SubmitData";
import { Label, Spinner, TextInput, Textarea } from "flowbite-react";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FiAlertCircle } from "react-icons/fi/index";
import { ToastContainer, Zoom, toast } from "react-toastify";

const Contact = () => {
  const [loaderBtn, setLoaderBtn] = useState(true);
  //* Hook validate form
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<Data>();
  //* Submit email
  const submitData: SubmitHandler<Data> = async () => {
    try {
      await emailJs.sendForm("service_aqcg77r", "template_9v5xeya", "#formId", "HmJktww9rFB4Doery");
      reset();
      toast.info("correo enviado correctamente");
    } catch (error) {
      console.log(error);
    }
    setLoaderBtn(true);
  };

  return (
    <>
      <h2 className="Subtitle text-center mt-32 mb-16" id="contact">
        Contacto
      </h2>
      <p className="font-nunito text-slate-700 dark:text-slate-200 text-lg  mb-16 text-center">
        ¡Gracias por visitar mi portafolio! Si deseas ponerte en contacto conmigo, puedes enviarme un
        correo electrónico, atravez de este formulario.
      </p>

      {/* Form */}
      <form className="Form" onSubmit={handleSubmit(submitData)} id="formId">
        {/*Input Name  */}
        <Label htmlFor="nombre" value="nombre" className="Label" />
        <TextInput
          type="text"
          placeholder="Ingresa tu nombre"
          {...register("nombre", { required: true, minLength: 3, maxLength: 50 })}
          color={errors.nombre ? "failure" : ""}
        />
        {errors.nombre && (
          <small className="Error-Message top-[130px] ">
            <FiAlertCircle className="text-base" />
            {errors.nombre.type === "required" && "Este campo es requerido!"}
            {errors.nombre.type === "minLength" && "El nombre debe tener al menos 3 caracteres!"}
            {errors.nombre.type === "maxLength" && "El nombre debe tener máximo 50 caracteres!"}
          </small>
        )}
        {/* Input Email */}
        <Label htmlFor="correo" value="correo" className="Label" />
        <TextInput
          type="email"
          placeholder="Ingresa tu correo electronico"
          {...register("correo", {
            required: true,
            pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
          })}
          color={errors.correo ? "failure" : ""}
        />
        {errors.correo && (
          <small className="Error-Message top-[242px] ">
            <FiAlertCircle className="text-base" />
            {errors.correo.type === "required" && "Este campo es requerido!"}
            {errors.correo.type === "pattern" && "Escribe un correo valido!"}
          </small>
        )}
        {/* Input Message */}
        <Label htmlFor="mensaje" value="mensaje" className="Label" />
        <Textarea
          placeholder="Escribe tu mensaje aqui"
          rows={4}
          {...register("mensaje", { required: true })}
          color={errors.mensaje ? "failure" : ""}
          className="resize-none"
        />
        {errors.mensaje && (
          <small className="Error-Message top-[427px] ">
            <FiAlertCircle className="text-base" />
            {errors.mensaje.type === "required" && "Este campo es requerido!"}
          </small>
        )}
        <button
          className="Button"
          type="submit"
          onClick={() => {
            isValid === true ? setLoaderBtn(false) : "";
          }}
        >
          {loaderBtn === false ? <Spinner aria-label="spinner" /> : "Enviar"}
        </button>
      </form>
      <ToastContainer
        autoClose={1000}
        closeOnClick={false}
        closeButton={false}
        pauseOnHover={false}
        transition={Zoom}
      />
    </>
  );
};

export default Contact;
