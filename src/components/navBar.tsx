'use client'

import Image from "next/image"
import logo from 'public/IdtsPgpBKldmBL.png'
import whatsappIcon from 'public/icons8-whatsapp-144.png'
import services from '@/app/services.json'

export default function NavBar () {

    const openService = (serviceId: string) => {
        document.getElementById(`btn-${serviceId}`)?.click()
    }

    return <>
        <header>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <Image src={logo} alt="Company Logo" width="120" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#aboutUs">Quienes Somos</a>
                        </li>
                        <div className="border d-none d-md-block" style={{borderWidth: '1px'}}></div>
                        <li className="nac-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">Nuestros Servicios</a>
                            <ul className="dropdown-menu">
                                {Object.entries(services).map(service => {
                                    return <li><a className="dropdown-item" href="#" onClick={() => openService(service[1].id)}>{service[0]}</a></li>
                                })}
                            </ul>
                        </li>
                        <div className="border d-none d-md-block" style={{borderWidth: '1px'}}></div>
                        <li className="nav-item">
                            <a className="nav-link" href="#contacto">Contacto</a>
                        </li>
                    </ul>
                    <div>
                        <a className="btn btn-primary rounded-pill fw-bold text-white px-0" href="https://wa.me/+526862391343" style={{minWidth: '220px'}}>Chat en Whatsapp  <Image height="48" src={whatsappIcon} alt="" /></a>
                    </div>
                </div>
                </div>
            </nav>
        </header>
    </>
}