import { Checkbox, Button } from "@material-tailwind/react"
import { useNavigate } from "react-router-dom"


export function Role () {

    const navigate = useNavigate();

    return (
        <section className="p-9 flex flex-col gap-20">
            <div className="flex flex-col gap-2">
                <h1 className="font-bold text-4xl">Bienvenido Juan</h1>
                <p>¿Qué planeas ser?</p>
            </div>

            <form className="flex flex-col gap-6">
                <div className="flex justify-between p-3 border border-slate-500 shadow-lg rounded-xl">
                    <div className="flex items-center gap-3">
                        <img className="w-20 px-3 border-r border-r-black border-opacity-10" src="/carIcon.webp" alt="" />
                        <p className="font-bold">Soy Conductor</p>
                    </div>
                    <Checkbox disabled={true}/>
                </div>

                <div className="flex justify-between p-3 border border-slate-500 shadow-lg rounded-xl">
                    <div className="flex items-center gap-3">
                        <img className="w-20 px-3 border-r border-r-black border-opacity-10" src="/passenger.webp" alt="" />
                        <p className="font-bold">Soy Pasajero</p>
                    </div>
                    <Checkbox required/>
                </div>

                    <Button fullWidth type="submit" onClick={() => {navigate('/air-conditioner')}}>siguiente</Button>
            </form>
        </section>
    )
}