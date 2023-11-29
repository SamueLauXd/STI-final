/* eslint-disable react/jsx-key */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import { useData } from "../hooks/useData"
import { dotWave } from 'ldrs'
import { Link } from "react-router-dom"

dotWave.register()
//https://apimocha.com/my-app/example

export function Result () {

    const {userData} = useData()
    const [isLoading, setIsLoading] = useState(false)
    const [driversResponse, setDriversResponse] = useState([])

    const enviarDatos = async () => {
        try {
            setIsLoading(true)
            const response = await fetch('http://127.0.0.1:5173/post', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData), // Convierte el objeto a formato JSON
            });
    
            if (!response.ok) {
            throw new Error('Error al enviar los datos');
            }
    
          // Manejar la respuesta del servidor si es necesario
            const responseData = await response.json();
            console.log('Respuesta del servidor:', responseData);
            setDriversResponse(responseData)
        } 
        catch (error) {
            console.error('Error:', error.message);
        }
        finally {
            setIsLoading(false)
        }
    };

    useEffect(() => {
        enviarDatos()
    }, [])

    if (isLoading) {
        return (
            <div className="p-9 flex justify-center">
                <l-dot-wave
                size="47"
                speed="1" 
                color="black" 
                ></l-dot-wave>
            </div>
        )
    }

    return (
        <div className="p-9 gap-10 flex flex-col">
            <h1 className="font-bold text-xl">Te recomendamos alguno de estos conductores:</h1>
            <section className="flex flex-col gap-4">
                {
                    driversResponse.map(driver => {
                        const {name, car, plate, zone, trust} = driver
                        return (
                            <Link to={`/resultado/${name}`} state={driver}>
                                <div className="flex justify-between items-center px-4 py-2 shadow-lg rounded-lg w-full">
                                    <div className="flex items-center gap-6 px-4 py-2">
                                        <div>
                                            <img src="/profileIcon.svg" alt="" className="w-12" />
                                        </div>
                                        <div className="flex flex-col">
                                            <h1 className="font-bold text-lg">{name}</h1>
                                            <div className="flex items-center gap-2 font-thin text-sm">
                                                <h1>{car}</h1>
                                                <span>-</span>
                                                <h1>{plate}</h1>
                                                <h1>{zone}</h1>
                                            </div>
                                        </div>
                                    </div>
                                    <h1 className="font-bold text-lg">{trust}</h1>
                                </div>
                            </Link>
                        )
                    })
                }
            </section>
        </div>
    )
}