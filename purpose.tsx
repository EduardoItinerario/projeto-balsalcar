import { ConteinerPorpuse, PurposeCommetit } from "../layouts/footer";
import { ConteinerTitle, SubTitle, Title } from "../layouts/main";
import preco from "../../public/preço.png"
import cred from "../../public/credibilidade.png"
import quali from "../../public/qualidade.png"

export function Purpose(){

    return(
        <ConteinerPorpuse>
               <ConteinerTitle>
                <Title>
                Nosso propósito
                </Title>
                <SubTitle>
                Esses pilares são a base sobre a qual a empresa constrói um legado de sucesso e satisfação dos clientes e parceiros ao longo da jornada.
                </SubTitle>
               </ConteinerTitle>
               <PurposeCommetit>
                 <div><img src={preco}/>
                 <h1>
                 Preço acessível
                </h1>
                <p>
                Oferecer carros a preços competitivos e acessíveis para atender a uma ampla gama de clientes e orçamentos.
                </p>
                </div>
                  <div><img src={quali}/>
                  <h1>
                  Qualidade
                  </h1>
                  <p>
                  Fornecer carros de alta qualidade, inspecionados e mantidos para garantir a satisfação do cliente e a confiabilidade dos veículos vendidos.
                  </p>
                  </div>
                 <div><img src={cred}/>
                 <h1>
                 Reputação e Credibilidade
                </h1>
                <p>
                Construir e manter uma sólida reputação no mercado, baseada na confiabilidade, integridade e satisfação do cliente, para atrair e reter clientes de forma consistente.
                </p>
                </div>
               </PurposeCommetit>
               
            </ConteinerPorpuse>
    )
}