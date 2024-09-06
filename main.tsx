import {  ConteinerTitle, Title, ConteinerOffers, ButtonOffers, MainOffers, Link, ContinerPageOfOffers, SubTitle} from "../layouts/main"
import { Menu } from "./menu"
import IconSed from '../../public/Iconffers.png'
import settinsReight from "../../public/settins-R.png"
import settinsLeft from "../../public/settins-L.png"
import { Ofertas } from "./offers"
import { Promotion } from "./promotionDay"
export function Main() {
   return (
      <main>
         <Menu />
         <ConteinerTitle>
               <Title>Destaque do dia</Title>
               <SubTitle>É relíquia que você quer? <br />3 motivos para adquirir esse lindo fusca</SubTitle>
            </ConteinerTitle>
              <Promotion/>
             <Link>Veja mais motivos no artigo https://www.oeldoradensems.com.br/2015/06/antigos-saiba-os-10-motivos-para-ter-um.html</Link> 
         <MainOffers>
            <ConteinerOffers>
               <ConteinerTitle>
                  <Title>Melhores ofertas</Title>
                  <SubTitle>Aqui você encontrará o seu carro com a melhor oferta</SubTitle>
               </ConteinerTitle>
               <ButtonOffers>Ver tudo <img src={IconSed}/></ButtonOffers>
                  <Ofertas/>
               <ContinerPageOfOffers>
                  <button><img src={settinsLeft}/></button>
                  <button className="NamerOffers">1</button>
                  <button className="NamerOffers">2</button>
                  <button className="NamerOffers">3</button>
                  <button><img src={settinsReight}/></button>
               </ContinerPageOfOffers>
            </ConteinerOffers>
            
         </MainOffers>



      </main>

   )
}