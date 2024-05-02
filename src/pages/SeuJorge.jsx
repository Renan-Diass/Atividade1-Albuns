import Sobre from "./Sobre"
import seuJorgeAlbum from '../img/seujorge.jpeg'

export default function SeuJorge() {
    return (
        <Sobre 
            title="Seu Jorge" 
            img={seuJorgeAlbum} 
            desc="Seu Jorge é um cantor, compositor e ator brasileiro cuja música é marcada por uma fusão única
             de samba, MPB (Música Popular Brasileira) e influências do soul e do funk.Jorge Mário da Silva, nascido em 1970 no Rio de Janeiro, 
             começou sua carreira musical tocando em bailes funk e festas na favela onde cresceu."
        /> 
    );
}