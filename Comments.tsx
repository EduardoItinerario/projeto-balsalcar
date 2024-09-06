import { CommentsMensagem, ConteinerComments, InformationComments } from "../layouts/footer";
import { ConteinerTitle, Title } from "../layouts/main";
import doubleVirgula from "../../public/,,.png"
import fulano from "../../public/fulano.png"
import ciclano from "../../public/ciclano.png"

export function Comments(){
    return(
        <ConteinerComments>
            <ConteinerTitle>
                <Title>
                O que os nossos clientes dizem sobre nós
                </Title>
                <div></div>
            </ConteinerTitle>
            <InformationComments>
                <CommentsMensagem>
                   <img src={doubleVirgula}/>
                   <img src={fulano}/>
                    <div><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur corrupti nulla dolore velit praesentium iure obcaecati eum sit suscipit tempora quia odit ullam iusto quibusdam ipsam animi, quo asperiores laudantium?</p></div>
                    <h3><span>-</span>Fulano</h3>
                </CommentsMensagem>
                <CommentsMensagem>
                   <img src={doubleVirgula}/>
                    <img src={ciclano}/>
                    <div><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis, voluptates qui minima cum obcaecati ab architecto odio quis nam! Neque vel eveniet a quibusdam amet libero, consequuntur itaque aspernatur quae?</p></div>
                     <h3><span>-</span>Ciclano</h3>
                </CommentsMensagem>
            </InformationComments>
        </ConteinerComments>
        

    )

}