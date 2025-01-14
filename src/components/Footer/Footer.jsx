import './Footer.css'
import facebook from '../../assets/facebook_icon.png'
import instagram from '../../assets/instagram_icon.png'
import twitter from '../../assets/twitter_icon.png'
import youtube from '../../assets/youtube_icon.png'



const Footer = () => {
  return (
    <div className='footer'>
       <div className="footer-media-icons">
          <img src={facebook} alt="" />
          <img src={instagram} alt="" />
          <img src={twitter} alt="" />
          <img src={youtube} alt="" />
       </div>

       <ul>
          <li>About us</li>
          <li>Privacy</li>
          <li>New Movie</li>
          <li>Contact us</li>
          <li>Top movies</li>
          <li>Upcoming movies</li>
          <li>Movies from Asia</li>
          <li>Yoruba movies</li>
          <li>American movies</li>
          <li>Chinese movies</li>
          <li>Blockbuster movies</li>
          <li>Comedies</li>
       </ul>

       <p className='copyright'>Copyright @ Netflix</p>
    </div>
  )
}

export default Footer