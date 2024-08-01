import Image from "next/image"

export default function Others () {

    const serviceNames = [
      'SUMINISTRO E INSTALACION SHELTERS DE ANDEN',
      'SERVICIOS DE GEO-RADAR',
      'SERVICIOS DE BALANCEO',
      'SERVICIOS DE SAND-BLAST',
      'GUARDAS DE POLICARBONATO',
      'FABRICACION DE FLECHAS Y BARRAS',
      'FABRICACION DE TINAS DE INOXIDABLE Y POLIPROPILENOS'
    ]

    return <section className="d-flex justify-content-center my-4">
    <div className="px-5 flex-fill" style={{maxWidth: "1500px"}}>
      <h3>Otros Servicios</h3>
      <div className="border" />
      <div className="d-flex justify-content-center pt-4">
        <div id="others-carousel" className="carousel slide mb-3" data-bs-ride="carousel" style={{maxWidth: "720px"}}>
          <div className="carousel-indicators">
            {serviceNames.map((service, index) => <button key={`othersControls-${index}`} type="button" data-bs-target="#others-carousel" data-bs-slide-to={index} className={index==0? 'active': ''} aria-current={index==0? 'true': 'false'} aria-label={`Slide-${index+1}`}></button>)}
          </div>
          <div className="carousel-inner">
            
            {serviceNames.map((service, index) => {
              return <div className={`carousel-item ${index==0? 'active': ''}`} key={`others-${index}`}>
                <Image style={{width: '100%', height: 'auto',}} src={`/other-${index+1}.jpg`} width={720} height={960} className="d-block w-100" alt="" loading="lazy" />
                <div className="carousel-caption d-block">
                  <h4>{service}</h4>
                </div>
              </div>
            })}

          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#others-carousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#others-carousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  </section>
}