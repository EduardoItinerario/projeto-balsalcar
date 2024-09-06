import { ConteinerInfOffers, ImageOffers, InfOffers, LocationOffers, NameOffers, Offers } from "../layouts/main";
import km from "../../public/quilometragem.png"
import direct from "../../public/Direcao.png"
import lugar from "../../public/lugares.png"
import gas from "../../public/Combutivel.png"
import vector from "../../public/Vectorvector.png"

export function Ofertas(){
    return(

      <section>
      <Oferta/> 
      <Oferta/> 
      <Oferta/> 
      <Oferta/> 
      <Oferta/> 
      <Oferta/> 
    </section>

    )

}


export function Oferta(){
return(
<Offers>
                     <ImageOffers/>
                     <ConteinerInfOffers>
                        <NameOffers>
                          <h1>BMW X5 2022</h1>
                           <h3>R$ 112.840</h3>
                        </NameOffers>
                        <InfOffers>
                           <div><img src={km}/><p>4000</p>
                           </div>
                           <div><img src={direct}/><p>manual</p>
                           </div>
                           <div><img src={lugar}/><p>4-lugares</p>
                           </div>
                           <div><img src={gas}/><p>gasolina</p>
                           </div>
                          
                        </InfOffers>
                     </ConteinerInfOffers>
                     <LocationOffers>
                        <img src={vector}/>
                        <p>Minas Gerais</p>
                     </LocationOffers>
 </Offers>
 )}