import Sobre from "./Sobre"
import GunsRoses from '../img/GunsFoto.jpg'

export default function Guns() {
    return (
        <Sobre 
            title="Guns N' Roses" 
            img={GunsRoses} 
            desc="O Guns N' Roses é uma das bandas de rock mais emblemáticas e influentes da história da música. Formada em Los Angeles, Califórnia, no final da década de 1980, a banda ganhou fama mundial com seu som distintivo que combinava elementos do hard rock, heavy metal e punk rock, criando uma sonoridade única e poderosa. A formação clássica da banda incluía Axl Rose (vocal), Slash (guitarra solo), Izzy Stradlin (guitarra base), Duff McKagan (baixo) e Steven Adler (bateria)."
        /> 
    );
}