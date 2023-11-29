import { Button, Input } from "@material-tailwind/react"
import { Link } from "react-router-dom"

export function Login () {
    return (
        <section className="px-9 flex flex-col gap-10">
            <div className="grid place-items-center">
                <img className="w-44" src="/logoCupis.webp" alt="" />
            </div>

            <form className="flex flex-col gap-4">
                <Input label="Correo electronico"/>
                <Input type="password" label="Contraseña"/>
                <Link to='/role'>
                    <Button fullWidth >iniciar sesion</Button>
                </Link>
            </form>

            <form className="flex flex-col gap-4 mt-16 border-t py-12 border-t-2 border-t-black border-opacity-20">
                <Link to='/role'>
                    <Button fullWidth variant="outlined" color="blue-gray" className="flex justify-center items-center gap-3">
                        <img src="https://docs.material-tailwind.com/icons/google.svg" alt="metamask" className="h-6 w-6" />
                        Continuar Con Google
                    </Button>
                </Link>
            </form>
        </section>
    )
}