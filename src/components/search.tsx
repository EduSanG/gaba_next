'use client'
import { useState, useRef, useEffect } from "react"

export default function Search() {

    const [toggle, setToggle] = useState(false)
    const ref = useRef<HTMLDialogElement>(null)

    const openModal = () => setToggle(true)
    const closeModal = () => setToggle(false)

    useEffect(() => toggle? ref.current?.showModal(): ref.current?.close(), [toggle])

    return <>
        <button className="btn btn-primary rounded-1" onClick={openModal}>Buscar</button>
        <dialog ref={ref} onCancel={openModal}>
            <div className="d-flex flex-row"><input type="text" /><button onClick={closeModal} >X</button></div>
            <hr />
            <div style={{minHeight: '200px'}}></div>
        </dialog>
    </>
}