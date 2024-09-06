import {  Btn, ConteinerInput, FormMenu, Input } from "../layouts/menu";
import icon from '../../public/Icon.png';
export function Menu(){

     return(
      <FormMenu>
      <form action="#" id="enviar">
         
          <ConteinerInput>
         <label id="caategory">tipo de carro</label><br />
         <Input list="lista-1" id="category"  placeholder="Buscar..."/>
         <datalist id="lista-1">
            <option value="pequeno"/>
            <option value="medio"/>
            <option value="grande"/>
         </datalist>
        </ConteinerInput>
         <ConteinerInput>
         <label id="local">Localização</label><br />
         <Input type="text" placeholder="Digite aqui..." id="local" />
         </ConteinerInput>
         <ConteinerInput>
         <label id="search">Buscar</label><br />
         <Input type="text" placeholder="Ex: Onix turbo" id="search"/>
         </ConteinerInput>
         <ConteinerInput>
         <label id="date-start">De</label><br />
         <Input type="number" placeholder="2010" id="date-start"/>
         </ConteinerInput>
         <ConteinerInput>
         <label id="date-end">Até</label><br />
         <Input type="number" placeholder="2022" id="date-end"/>
         </ConteinerInput>      
         
          <Btn type="submit" id="category">Buscar  <img src={icon} /></Btn>   
        
   
       
     
        </form>
        </FormMenu>
     )
        
     
}