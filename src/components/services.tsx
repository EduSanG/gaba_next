import Image from 'next/image'
import services from '@/app/services.json'
import misc from '@/app/misc.json'

export default function Services () {
    return <section id="servicios" className="d-flex justify-content-center my-4">
        <div className="px-5 flex-fill" style={{maxWidth: "1500px"}}>
            <h3>Nuestros Servicios</h3>
            <div className="border" />
            <div className="d-flex flex-row flex-wrap justify-content-center pt-4" role="listbox">
                {Object.entries(services).map((service, index) => {
                  return <button
                  id={`btn-${service[1].id}`}
                  type="button" 
                  key={`servButton-${index}`}
                  role="option" 
                  aria-selected={false}
                  className="btn-img my-1 mx-1 fs-5 position-relative"
                  style={{width: '400px', height: '300px'}}
                  data-bs-toggle="offcanvas" 
                  data-bs-target={`#${service[1].id}`}>
                    <div className="position-absolute z-n1 top-0 bottom-0 start-0 end-0">
                        <Image
                            src={`/gaba_next/btn-${service[1].tag}.jpg`}
                            layout="fill"
                            objectFit="cover"
                            quality={100}
                            alt=''
                        />
                    </div>
                    <div>{service[0]}</div>
                  </button>})}
            </div>
        </div>

        {Object.entries(services).map(service => {
            
            const [serviceName, {text, tag, id}] = service

            return <div className="offcanvas offcanvas-start" tabIndex={-1} id={id} key={id} aria-labelledby={`#${tag}-label`}>
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id={`${tag}-label`}>{serviceName}</h5>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <div id={`${tag}-carousel`} className="carousel slide mb-3" data-bs-ride="carousel">
                <div className="carousel-indicators">
                  <button type="button" data-bs-target={`#${tag}-carousel`} data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target={`#${tag}-carousel`} data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target={`#${tag}-carousel`} data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                  {Array.from({ length: 3}, (val, index) => <div key={`carImg-${index}`} className={`carousel-item ${index==0? 'active': ''}`}><Image src={`/gaba_next/${tag}-${index+1}.jpg`} className="d-block w-100" width="240" height="480" style={{width: '100%',height: 'auto',}} alt="" loading='lazy' /></div>)}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target={`#${tag}-carousel`} data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target={`#${tag}-carousel`} data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
              <p className="h5">{text}</p>
            </div>
          </div>
        })}
    </section>
}