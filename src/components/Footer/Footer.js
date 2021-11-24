import './Footer.css';
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaYoutubeSquare} from 'react-icons/fa';

export default function Footer() {
  return (
    <div className='footer'>
      <div className='footercontato'>
        <FaYoutubeSquare />
        <FaFacebookSquare />
        <FaTwitterSquare />
        <FaInstagramSquare />
      </div>
      <span className='footertext'>© 2021 GAME STORE. Os jogos são propriedade de seus respectivos donos e a GAME STORE não se responsabiliza pelas imagens utilizadas nessa, quase, página.</span>
      <span className='footertext'>GAME STORE CORPORATION LTDA | A nossa base está localizada em algum lugar do planeta Terra| Assistência -> não peça!</span>
    </div>
  )
}