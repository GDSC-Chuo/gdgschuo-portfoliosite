import './TopPage.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import useEmblaCarousel from 'embla-carousel-react'
import Box from '@mui/material/Box';
import  Grid  from "@mui/material/Grid2";
import gdgslogo from '../images/TopPage/gdgslogo.svg';
import div2img from '../images/TopPage/div2img.svg';
import instagramlogo from '../images/Footer/instagram_logo.svg';
import Xlogo from '../images/Footer/X_logo.svg';
import Create from '../images/TopPage/aboutus_create.svg';
import Study from '../images/TopPage/aboutus_study.svg';
import Connect from '../images/TopPage/aboutus_connect.svg';
import Express from '../images/TopPage/aboutus_express.svg';
const TopPage = () => {

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

  const handleNext = () => {
    if (!emblaApi || !emblaApi.canScrollNext()) return;

    console.log('next');
    emblaApi.scrollNext();
  }

  const handlePrev = () => {
    if (!emblaApi || !emblaApi.canScrollPrev()) return;

    console.log('next');
    emblaApi.scrollPrev();
  }


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
      <div className='aboutus-section'>
        <h2>About Us</h2>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid size={{xs:6, md:3}}>
              <div className="aboutus-create">
                <h1>Create</h1>
                <h2>開発</h2>
                <img src={Create} alt="Create" />
                <p>設計から実装まで<br />チームを組んで行っています<br />1人では難しいことも<br />チームでなら最後まで取り組める！</p>

              </div>
            </Grid>
            <Grid size={{xs:6, md:3}}>
              <div className="aboutus-study">
                <h1>Study</h1>
                <h2>勉強会</h2>
                <img src={Study} alt="Study" />
                <p>興味のあることや<br/> 必要性に基づいて<br/> 勉強会を開催しています</p>
              </div>
            </Grid>
            <Grid size={{xs:6, md:3}}>
              <div className="aboutus-connect">
                <h1>Connect</h1>
                <h2>イベント</h2>
                <img src={Connect} alt="Connect" />
                <p>学年や学部問わず親睦を深めたり、<br/> GDGsの活動の理解を深める<br/> イベントを開催します</p>
              </div>
            </Grid>
            <Grid size={{xs:6, md:3}}>
              <div className="aboutus-express">
                <h1>Express</h1>
                <h2>SNS運用</h2>
                <img src={Express} alt="Express" />
                <p>活動の様子や<br/> 勉強会・イベントの告知はSNSにて！<br/> フォローお待ちしています！</p>
              </div>
            </Grid>
          </Grid>
        </Box>
      </div>
      <div className='production-section'>
        <h2>Portfolio（制作物）</h2>
          <h2>Slider</h2>
            <div className='slider' ref={emblaRef}>
              <div className='sliderList'>
                <div className='sliderItem'>Slide 1</div>
                <div className='sliderItem'>Slide 2</div>
                <div className='sliderItem'>Slide 3</div>
              </div>
            </div>

              <div className='sliderControls'>
                <button type="button" onClick={handlePrev}>Prev</button>
                <button type="button" onClick={handleNext}>Next</button>
              </div>
        
      </div>
      <div className='info-section'>
        <h2>Information</h2>
        <table className="info-table">
          <tbody>
            <tr>
              <th>公式名称</th>
              <td>GDGs Chuo</td>
            </tr>
            <tr>
              <th>創設</th>
              <td>2022</td>
            </tr>
            <tr>
              <th>主な活動拠点</th>
              <td>中央大学市谷田町キャンパス</td>
            </tr>
            <tr>
              <th>SNS</th>
              <td>
                <span className="sns-account">
                  <img src={Xlogo} alt="XLogo" />
                  gdgs_chuo
                </span>
                <span className="sns-account">
                  <img src={instagramlogo} alt="InstagramLogo" />
                  @GDGs_chuo
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      
        
      
     
        
      
      <h1>トップページです</h1>
    </div>
    <Footer />
  </>
  );
};

export default TopPage;