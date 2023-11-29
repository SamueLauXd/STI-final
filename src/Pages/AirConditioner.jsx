/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate } from "react-router-dom"
import { Button } from "@material-tailwind/react"
import { useState } from "react"
import { useData } from "../hooks/useData"

export function AirConditioner () {

    const navigate = useNavigate()

    const [slider, setSlider] = useState('1')
    
    const handleChange = (e) => {
        setSlider(e.target.value)
    }

    const {userData, setUserData} = useData()

    const handleSubmit = (e) => {
        e.preventDefault()
        const nuevoValor = {...userData}
        nuevoValor.aireAcondicionado = slider
        setUserData(nuevoValor)
        navigate('/sonido')
    }

    return (
        <section className="p-9 flex flex-col gap-20">
            <div className="flex flex-col gap-2">
                <div className="flex gap-2 items-center">
                    <button onClick={() => navigate(-1)}>
                        <img src="/return.svg" alt="" />
                    </button>
                    <h1 className="font-bold text-4xl">Tus Intereses</h1>
                </div>
                <p>¿Que tanto te gusta que el auto tenga aire acondicionado</p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-12">
                <div>                  
                    <label className="block" htmlFor="air">Selecciona en una escala de 1 a 5</label>
                    <div className="flex items-center gap-4">
                        <input className="w-full" type="range" min='1' max='5' onChange={handleChange} value={slider}/>
                        <span>{slider}</span>
                    </div>
                </div>
                    <Button type="submit" fullWidth>siguiente</Button>
            </form>
        </section>
    )
}