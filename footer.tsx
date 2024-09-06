import { ConteinerData, Data } from "../layouts/footer";
import { Comments } from "./Comments";
import { Purpose } from "./purpose";
import dados from "../../public/dados.png"
import insta from "../../public/instagramIcon.png"
import you from "../../public/youtubeIcon.png"

 export function Footer(){
    return(
        <footer>
            <Purpose/>
            <Comments/>
            <ConteinerData>
               <Data>
                <img src={dados} />
                <div>
                  <section>
                    <a href="#"><img src={insta}/></a>  
                    </section>  
                  <section>
                    <a href="#"> <img src={you}/></a>
                  </section>
                </div>
               </Data>
                

            </ConteinerData>

           
        </footer>
    )
 }