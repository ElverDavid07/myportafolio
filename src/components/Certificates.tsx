import { Link } from '@nextui-org/react'
import { Certificates } from '@utils/certificates'
import { RiMapPinLine } from 'react-icons/ri/index'
import { TbCertificate } from 'react-icons/tb/index'

const CertificatesComponent = () => {
	return (
		<section>
			<h2 className="Subtitle mt-36 mb-12">Certificados</h2>
			<div
				className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-8 justify-items-center "
				id="certificates"
			>
				{Certificates.map(({ course, name, university, url, urlPdf }) => (
					<div className="Content-certificates" key={name}>
						<img
							src={url}
							alt={name}
							width={'411'}
							height={'315'}
							className="dark:rounded-t-sm w-full"
						/>
						<div className="px-2 space-y-2 mt-3">
							<span className="Text">
								<RiMapPinLine className="text-slate-700 mt-1 dark:text-gray-400 text-lg " />
								<span className="flex-1 dark:text-gray-400 text-slate-700">
									<b className="dark:text-white text-slate-950">
										Otorgado por :
									</b>{' '}
									{university}
								</span>
							</span>
							<span className="Text">
								<TbCertificate className="text-slate-700 dark:text-gray-400 text-lg" />
								<span className="flex-1 dark:text-gray-400 text-slate-700">
									<b className="dark:text-white text-slate-950">Nombre : </b>
									{course}
								</span>
							</span>
						</div>

						<Link
							href={urlPdf}
							target="_blank"
							aria-label={name}
							className="Link-certificate"
							rel="noreferrer"
						>
							ver certificado
						</Link>
					</div>
				))}
			</div>
		</section>
	)
}

export default CertificatesComponent
