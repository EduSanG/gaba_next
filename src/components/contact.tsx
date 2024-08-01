

export default function Contact () {

    return <section id="contacto" className="d-flex justify-content-center my-4">
    <div className="px-5 flex-fill" style={{maxWidth: '1500px'}}>
      <h3>Contacto</h3>
      <div className="border" />
      <div className="d-md-flex gap-3 pt-4">
        <div style={{maxWidth: '800px'}}>
          <p>Necesitas mas información o quieres cotizar alguno de nuestros servicios? No dudes en Contactarnos! Nos puedes encontrar a traves de los siguientes medios:</p>
        </div>
        <div className="d-none d-md-block border border-1 border-primary"></div>
        <div>
          <p><b>Tel. Oficina:</b> (686) 661-1035</p>
          <p><b>Celular/Whatsapp:</b> (686) 239-1343</p>
          <p><b>Correo:</b> <a href="mailto:daniel.garcia@gabaservicios.com">daniel.garcia@gabaservicios.com</a></p>
        </div>
      </div>
    </div>
  </section>
}