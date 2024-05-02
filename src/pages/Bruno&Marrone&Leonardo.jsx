import Sobre from "./Sobre"
import BrunoMarroneLeo from '../img/Bruno&Marrone&Leonardo.jpg'

export default function BML() {
    return (
        <Sobre
            title="Bruno & Marrone e Leonardo"
            img={BrunoMarroneLeo}
            desc="Bruno & Marrone e Leonardo são dois dos artistas mais renomados e influentes da música sertaneja brasileira. Bruno & Marrone formam uma dupla musical originária de Goiás, composta por Vinícius Félix de Miranda (Bruno) e José Roberto Ferreira (Marrone). Sua música é conhecida pela harmonia vocal única e pelas letras que falam de amor, saudade e vida no campo, tocando os corações de milhões de fãs em todo o Brasil. Eles são considerados pioneiros no gênero sertanejo universitário, que trouxe uma abordagem mais moderna e pop para o estilo tradicional."
        />
    );
}