import Image from "next/image"

export default function Clients() {

    return <section className="d-flex justify-content-center my-4">
    <div className="px-5 flex-fill" style={{maxWidth: '1500px'}}>
      <h3>Algunos de Nuestros Clientes</h3>
      <div className="border" />
      <div className="d-flex flex-row flex-wrap justify-content-center gap-5 py-4">
        <Image height={300} width={300} style={{width: '200px', height: 'auto'}} src="/gaba_next/clients-1.png" alt="" />
        <Image height={300} width={300} style={{width: '200px', height: 'auto'}} src="/gaba_next/clients-2.png" alt="" />
        <Image height={300} width={300} style={{width: '200px', height: 'auto'}} src="/gaba_next/clients-3.jpg" alt="" />
        <Image height={300} width={300} style={{width: '200px', height: 'auto'}} src="/gaba_next/clients-4.png" alt="" />
        <Image height={300} width={300} style={{width: '200px', height: 'auto'}} src="/gaba_next/clients-5.jpg" alt="" />
        <Image height={300} width={300} style={{width: '200px', height: 'auto'}} src="/gaba_next/clients-6.jpg" alt="" />
        <Image height={300} width={300} style={{width: '200px', height: 'auto'}} src="/gaba_next/clients-7.jpg" alt="" />
        <Image height={300} width={300} style={{width: '200px', height: 'auto'}} src="/gaba_next/clients-8.jpg" alt="" />
        <Image height={300} width={300} style={{width: '200px', height: 'auto'}} src="/gaba_next/clients-9.png" alt="" />
        <Image height={300} width={300} style={{width: '200px', height: 'auto'}} src="/gaba_next/clients-10.png" alt="" />
      </div>
    </div>
  </section>
}