import { Button } from "@material-tailwind/react"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useData } from "../hooks/useData"

export function Destiny () {

    const {userData, setUserData} = useData()
    const navigate = useNavigate()
    const [zone, setZone] = useState('norte')

    const handleChange = (e) => {
        setZone(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const nuevoValor = {...userData}
        nuevoValor.zona = zone
        setUserData(nuevoValor)
        navigate('/resultado')
    }

    useEffect(() => {console.log(userData);}, [userData])


    return (
        <section className="flex flex-col gap-20 p-9">
            <div className="flex flex-col gap-2">
                <div className="flex gap-2 items-center">
                    <button onClick={() => navigate(-1)}>
                        <img src="/return.svg" alt="" />
                    </button>
                    <h1 className="font-bold text-4xl">Tu destino</h1>
                </div>
                <p>¿A dónde te diriges?</p>
            </div>

            <form className="flex flex-col gap-10" onSubmit={handleSubmit}>
                <div>
                    <label className="block" htmlFor="zone">Selecciona una zona:</label>
                    <select value={zone} onChange={handleChange} className="appearance-none w-full p-3 border border-slate-500 shadow-lg rounded-xl" id="zone">
                        <option value="norte">Norte</option>
                        <option value="sur">Sur</option>
                        <option value="oriente">Oriente</option>
                        <option value="occidente">Occidente</option>
                    </select>
                </div>
                <Button fullWidth type="submit">Dame un conductor</Button>
            </form>
        </section>
    )
}