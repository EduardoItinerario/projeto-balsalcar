import { BtnAnnouncement, ConteienrMain, ConteinerIconInf, ConteinerImage, ConteinerInformation, Icon, ImageInf, Information, Reason, Image } from "../layouts/main";
import ImageCarr from "../../public/fusca.png"
import First from "../../public/PromeiroMotivo.png"
import Second from "../../public/SegundoMotivo.png"
import third from "../../public/TerceiroMotivo.png"

 export function Promotion(){
    return(

        <ConteienrMain>
        <ConteinerInformation>
           <ImageInf>
              <ConteinerIconInf>
                 <Icon src={First} />
              </ConteinerIconInf>
              <div>
                 <Reason>1º motivo: Custo benefício</Reason>
                 <Information>
                    Começo pelo motivo mais óbvio, custo benefício, é mais barato ter um carro antigo ou um carro novo, no caso um Fusca.
                 </Information>
              </div>
           </ImageInf>
           <ImageInf>
              <ConteinerIconInf>
                 <Icon src={Second} />
              </ConteinerIconInf>
              <div>
                 <Reason>2º motivo: ser reconhecido</Reason>
                 <Information>
                    Às vezes não é um beneficio, mas ter um Fusca bem inteiro, reluzente e que chama atenção facilita ser reconhecido, eu mesmo toda semana encontro alguém que me viu em um determinado lugar, graças ao carro.
                 </Information>
              </div>
           </ImageInf>
           <ImageInf>
              <ConteinerIconInf>
                 <Icon src={third} />
              </ConteinerIconInf>
              <div>
                 <Reason>3º motivo: Teste de namorada e amigos</Reason>
                 <Information>
                    Esse benefício é um tanto incomum, mas veja bem. Se você for um fusqueiro solteiro provavelmente quando começar um relacionamento será colocado à prova, piadinhas e insinuações viram a respeito do Fusca.
                 </Information>
              </div>
           </ImageInf>
        </ConteinerInformation>
        <ConteinerImage>
           <Image src={ImageCarr} />
           <BtnAnnouncement>
              ver anúncio
           </BtnAnnouncement>
        </ConteinerImage>
         </ConteienrMain>

    )
 }