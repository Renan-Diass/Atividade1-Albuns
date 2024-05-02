import CardAlbum from "../components/CardAlbum";
import './Inicial.css'

import RacionaisAlbum from '../img/RacionaisAlbum.jpg'
import VeighAlbum from '../img/VeighAlbum.jpg'
import BMLAlbum from '../img/CabareAlbum.jpg'
import GunsAlbum from '../img/GunsAlbum.jpg'
import SeuJorgeAlbum from '../img/seuJorgeAlbum.jpg'
import { Container } from "react-bootstrap";


export default function Inicial() {
  return (
    <Container>
      <div className="album">
        <CardAlbum
          title="Sobrevivendo no Inferno"
          text="Racionais MC's"
          img={RacionaisAlbum}
          linkYtMusic="https://music.youtube.com/playlist?list=OLAK5uy_nCuXekVx1ic-SlzebMW_QYyhbKe-W5KqI"
          linkSobre="/Racionais"
        />
        <CardAlbum
          title="Dos Prédios Deluxe"
          text="Veigh"
          img={VeighAlbum}
          linkYtMusic="https://music.youtube.com/playlist?list=OLAK5uy_k3-Q7EWeNwMoL5O7zvIa2K40pMXW8CPGw"
          linkSobre="/Veigh"
          artista={true}
        />
        <CardAlbum
          title="Cabaré Rouge Vol.2"
          text="Bruno & Marrone e Leonardo"
          img={BMLAlbum}
          linkYtMusic="https://music.youtube.com/playlist?list=OLAK5uy_myMMJbPTo2O2c_xcuFdlQwCXv_At0txY8"
          linkSobre="/Bruno&Marrone&Leonardo"
        />
        <CardAlbum
          title="Appetiite for Destruction"
          text="Guns N' Roses"
          img={GunsAlbum}
          linkYtMusic="https://music.youtube.com/playlist?list=OLAK5uy_nnCYsn6_-pTPImZ_UqWiA3DxaaNczxEMA"
          linkSobre="/GunsNRoses"
        />
        <CardAlbum
          title="Músicas para churrasco Vol.1"
          text="Seu Jorge"
          img={SeuJorgeAlbum}
          linkYtMusic="https://music.youtube.com/playlist?list=OLAK5uy_nvOmp-djkfu_jn-lGCc_IUECtj-fs8cJc"
          linkSobre="/SeuJorge"
          artista={true}
        />
      </div>
    </Container>
  );
}
