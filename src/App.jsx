import { Routes, Route} from "react-router-dom"
import { Login } from "./Pages/Login"
import { Role } from "./Pages/Role"
import { AirConditioner } from "./Pages/AirConditioner"
import { Sound } from "./Pages/Sound" 
import { Charger } from "./Pages/Charger"
import { Kindness } from "./Pages/Kindness"
import { Velocity } from "./Pages/Velocity"
import { Result } from "./Pages/Result"
import { Destiny } from "./Pages/Destiny"
import { DriverDetail } from "./Pages/DriverDetail"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/role" element={<Role/>}/>
        <Route path="/air-conditioner" element={<AirConditioner/>}/>
        <Route path="/sonido" element={<Sound/>}/>
        <Route path="/cargador" element={<Charger/>}/>
        <Route path="/amabilidad" element={<Kindness/>}/>
        <Route path="/velocidad" element={<Velocity/>}/>
        <Route path="/destino" element={<Destiny/>}/>
        <Route path="/resultado" element={<Result/>}/>
        <Route path="/resultado/:name" element={<DriverDetail/>}/>
      </Routes>
    </>
  )
}

export default App
