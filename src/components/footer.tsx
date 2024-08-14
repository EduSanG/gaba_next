import Image from "next/image";

export default function Footer() {

    return <footer className="d-flex flex-column align-items-center py-3">
    <Image src="/gaba_next/IdtsPgpBKldmBL.png" alt="Company Logo" width={255} height={160} style={{width: '128', height: 'auto'}} />
    <button type="button" className="btn btn-link" data-bs-toggle="modal" data-bs-target="#privacy-policy">
      Aviso de Privacidad
    </button>
    <div className="modal fade" id="privacy-policy" tabIndex={-1} aria-labelledby="privacyModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="privacyModalLabel">Aviso de Privacidad</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <p>
            Apreciado Cliente,<br/>

            En Grupo GABA, valoramos profundamente la privacidad y
            confidencialidad de nuestros clientes y sus proyectos. Por esta razón,
            en la presente presentación hemos seleccionado cuidadosamente
            algunas fotografías representativas de nuestro trabajo para
            compartir con usted.<br/><br/>
                          
            Es importante destacar que las imágenes incluidas en esta
            presentación son solo una muestra limitada de nuestros proyectos,
            seleccionadas con el consentimiento expreso de nuestros clientes
            previos. Entendemos y respetamos la sensibilidad en torno a la
            divulgación de detalles específicos y, por lo tanto, no todas las
            fotografías de nuestros proyectos están disponibles para su
            visualización pública.<br/><br/>
                          
            Agradecemos su comprensión y confianza en nosotros. Si desea
            obtener más información sobre nuestros servicios o proyectos
            adicionales, no dude en ponerse en contacto con nosotros enviando
            un correo electrónico a contacto@gabaservicios.com  Estamos aquí
            para atender todas sus consultas y brindarle el mejor servicio
            posible.<br/><br/>
                          
            Atentamente,<br/><br/>
                          
            Ing. Daniel García CEO Grupo GABA
            </p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
          </div>
        </div>
      </div>
    </div>
    <p>Siguenos: <a href="https://www.facebook.com/GABA.grupo.empresarial"><Image height={64} width={64} style={{width: '24px', height:'auto'}} src="/facebook-icon.png" alt="facebook" /></a></p>
  </footer>
}