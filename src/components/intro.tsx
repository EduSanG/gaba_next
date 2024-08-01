import Image from "next/image"
import coverImg from 'public/Portada.jpg'
import misc from '@/app/misc.json'
import { PlaceholderValue } from "next/dist/shared/lib/get-img-props"

export default function Intro () {
    return <section id='Presentacion'>
        <div className="card mb-3">
            <Image className="card-img" src={coverImg} alt="Cover Photo" style={{filter: "brightness(0.6)", width: '100%', height: 'auto'}} />
            <div className="card-img-overlay d-flex flex-column justify-content-center ps-5">
                <h1 className="card-title text-white display-1">Grupo GABA</h1>
                <h2 className="card-text text-white display-2">Servicios Industriales</h2>
            </div>
        </div>
        <div className="d-flex justify-content-center my-4">
            <div id="aboutUs" className="px-5" style={{maxWidth: "1500px"}}>
                <div className="mb-3">
                    <h3 className="h2">Quienes Somos</h3>
                </div>
                <div className="border" />
                <p className="h5 px-5 py-4">
                    GABA Servicios Industriales es una empresa líder en el sector,
                    comprometida con la excelencia y la innovación. Nuestro enfoque
                    proactivo y nuestra búsqueda constante de la calidad nos permiten
                    ofrecer soluciones integrales en instalaciones electromecánicas,
                    tuberías hidráulicas y neumáticas, obra civil, servicios de soldadura
                    especializada, entre otros. Nos esforzamos por superar las
                    expectativas de nuestros clientes, impulsando el cambio y
                    maximizando el aprovechamiento de recursos en cada proyecto.
                    ¡Únete a nosotros y descubre cómo estamos redefiniendo el
                    estándar en la industria!
                </p>
            </div>
        </div>
    </section>
}