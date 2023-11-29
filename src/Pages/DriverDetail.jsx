import { Button } from "@material-tailwind/react"
import { useLocation, useNavigate } from "react-router-dom"

export function DriverDetail () {
    const {state} = useLocation()
    const {name, car, plate, zone, trust} = state
    const navigate = useNavigate()
    return (
        <>
            <section className="p-10">
                <div>
                    <button onClick={() => navigate(-1)}>
                        <img src="/return.svg" alt="" />
                    </button>
                </div>
            </section>
            <section className="flex flex-col items-center gap-10">
                <div className="rounded-full border border-4 p-10">
                    <img src="/profileIcon.svg" alt="" className="w-44" />
                </div>
                <h1 className="font-bold text-3xl">{name}</h1>
                <p>{car} - {plate}</p>
                <p>hace cupos en: {zone}</p>
                <p>Tienes un {trust} de afinidad con este conductor</p>
                <Button>Contactar</Button>
            </section>
        </>
    )
}