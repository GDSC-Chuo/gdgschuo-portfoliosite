import './TopPage.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import gdgslogo from '../images/TopPage/gdgslogo.svg';
import div2img from '../images/TopPage/div2img.svg';
const TopPage = () => {
  return (
  <>
    <Header />
    <div className="top-page">
      <div className="div-1">
        <div className='div-1-img'>
          <img src={gdgslogo} alt="TopPageImage" /> 
        </div>
        <div className='div-1-text'>
          <h1>We are GDGs Chuo</h1>
        </div>

      </div>
      <div className='div-2'>
        <div className='div-2-img'>
          <img src={div2img} alt="TopPageImage" /> 
        </div>
        <div className='div-2-text'>
          <h2>GDSC_Chuoは</h2>
          <h2>Google Developer Student Clubsの中央大学支部として</h2>
          <h2>2022年に設立されました</h2>
          <h2>テクノロジーに興味のある人が集まり</h2>
          <h2>日々活動をしています</h2>
        </div>
      </div>
      <div className='info-section'>
        <h2>Information</h2>
      </div>
      
        
      
     
        
      
      <h1>トップページです</h1>
    </div>
    <Footer />
  </>
  );
};

export default TopPage;