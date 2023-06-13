import { Certificates } from "@utils/profile";
import { RiMapPinLine } from "react-icons/ri/index";
import { TbCertificate } from "react-icons/tb/index";

const CertificatesComponent = () => {
 return (
  <>
   <h2 className="Subtitle mt-36 mb-12">Certificados</h2>
   <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8" id="certificates">
    {Certificates.map(({ course, name, university, url, urlPdf },i) => (
     <div className="Content-certificates" key={i}>
      <img src={url} alt={name} />
      <div className="px-2 space-y-2 mt-3">
       <span className="Text">
        <RiMapPinLine className="text-emerald-600 mt-1 text-lg " />
        <span className="flex-1">Otorgado por : {university}</span>
       </span>
       <span className="Text">
        <TbCertificate className="text-emerald-600 text-lg" />
        <span className="flex-1">Nombre : {course}</span>
       </span>
      </div>

      <a href={urlPdf} target="_blank" title={name} className="Link-certificate">
       ver certificado
      </a>
     </div>
    ))}
   </div>
  </>
 );
};

export default CertificatesComponent;
