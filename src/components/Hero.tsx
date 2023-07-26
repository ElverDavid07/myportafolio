const Hero = () => {
  const openCurriculum = () => window.open("./archives/CurriculumElverDavid.pdf", "_blank")
  return (
    <div className="grid lg:grid-cols-2">
      <div className="mt-20">
        <span className="font-nunito text-slate-700 dark:text-slate-300 pl-2">Hola,soy</span>
        <h1 className="Name">Elver David Peñate</h1>
        <h2 className="font-nunito text-slate-700 dark:text-slate-300 mb-4">Desarrollador web</h2>
        <button type="submit" onClick={openCurriculum} className="Button">Hoja de vida</button>
      </div>
      <img src="icons/icon-hero.svg" alt="icon hero" className="mt-20 lg:mt-10 w-full" />
    </div>
  )
}

export default Hero
