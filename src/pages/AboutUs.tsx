import './AboutUs.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import img from '../images/Aboutus/aboutus_img.png';
const AboutUs = () => {
  return (
  <>
    <Header />
    <div className="about-us">
      <h1>About us</h1>
      <div>
        <div className='aboutusimg'>
          <img src={img} alt="img" />
          <img src={img} alt="img" />  
        </div>
        <h2>Create</h2>
        <p>開発
        <br/>設計
        <br/>デザイン
        <br/>実装</p>
      </div>
      
    </div>
    <Footer />
  </>
  );
};

export default AboutUs;