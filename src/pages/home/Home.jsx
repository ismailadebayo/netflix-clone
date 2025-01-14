import './Home.css'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_img from '../../assets/play_icon.png'
import info_img from '../../assets/info_icon.png'
import Navbar from '../../components/Navbar/Navbar'
import TitleCards from '../../components/TitleCards/TitleCards'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <div className="hero">
          <img src={hero_banner} alt="hero banner" className='banner-image'/>
          <div className="hero-caption">
            <img src={hero_title} alt="hero title" className='title-image'/>
            <p>This is the latest movies from the Draconian Melin which
               is very importatnt. Let us discover how we are able to arrive at that its mistery </p>
            <div className="hero-btns">
              <button className='btn'><img src={play_img} alt="play image" />Play</button>
              <button className='btn dark-btn'><img src={info_img} alt="info  image" />More info</button>
            </div>
            <div className='lone-card'>
              <TitleCards />
            </div>
          </div>
      </div>
      <div className='move'>
          <div className="more-cards">
            <TitleCards title='Popular'  category='popular'/>
            <TitleCards title='Top rated'  category='top_rated'/>
            <TitleCards title='Upcoming'  category='upcoming'/>
          </div>
          <div className='footer-div'>
            <Footer/>
          </div>
      
      </div>
      
    </div>
  )
}

export default Home