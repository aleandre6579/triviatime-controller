import Particles from "@tsparticles/react"
import { 
  type Container,
} from "@tsparticles/engine"
import homeParticles from "../config/homeParticles.config"

 const HomeBackground = () => {
   const particlesLoaded = async (container?: Container): Promise<void> => {
     console.log(container)
   }

   return (
     <Particles 
        id="backgroundParticles"
        particlesLoaded={particlesLoaded} 
        options={homeParticles} 
      />
   )
 }

 export default HomeBackground
