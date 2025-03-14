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

import Itlcircle from '../images/TopPage/production-slider/iTL-circle.png';
import Itlfreeclassroom from '../images/TopPage/production-slider/iTLFreeClassroom.png';
import Jearn from '../images/TopPage/production-slider/JEARN.png';




import Portfolio1 from '../images/TopPage/portfolio-slider/image214.png';
import Portfolio2 from '../images/TopPage/portfolio-slider/image213.png';
import Portfolio3 from '../images/TopPage/portfolio-slider/image(3).png';
import Portfolio4 from '../images/TopPage/portfolio-slider/image(4).png';
import Portfolio5 from '../images/TopPage/portfolio-slider/websitestudy.png';



const TopPage = () => {
  const [emblaRef1, emblaApi1] = useEmblaCarousel({ loop: true })
  const [emblaRef2, emblaApi2] = useEmblaCarousel({ loop: true })

  const handleNext1 = () => {
    if (!emblaApi1 || !emblaApi1.canScrollNext()) return;
    emblaApi1.scrollNext();
  }

  const handlePrev1 = () => {
    if (!emblaApi1 || !emblaApi1.canScrollPrev()) return;
    emblaApi1.scrollPrev();
  }

  const handleNext2 = () => {
    if (!emblaApi2 || !emblaApi2.canScrollNext()) return;
    emblaApi2.scrollNext();
  }

  const handlePrev2 = () => {
    if (!emblaApi2 || !emblaApi2.canScrollPrev()) return;
    emblaApi2.scrollPrev();
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
          <p className='div-1-text-h1'>We are</p>
          <p className='div-1-text-h2'>GDGs Chuo</p>
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
        <Box sx={{ paddingBottom: '8px' }}>
          <Grid container spacing={0.5}>
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
        <h2>Portofolio(制作物)</h2>
          <h2>Slider</h2>
            <div className='slider' ref={emblaRef1}>
              <div className='sliderList'>
                <div className='sliderItem'><img src = {Itlcircle} alt='iTLサークル紹介'></img>iTLサークル紹介</div>
                <div className='sliderItem'><img src = {Itlfreeclassroom} alt='iTL空き教室可視化アプリ'></img>iTL Free Classroom</div>
                <div className='sliderItem'><img src = {Jearn} alt='Jearn'></img>JEARNサイト</div>
                <div className='sliderItem'><img src = {Portfolio4} alt='Portfolio1'></img>Slide 4</div>
                <div className='sliderItem'><img src = {Portfolio5} alt='Portfolio1'></img>Slide 5</div>
                <div className='sliderItem'>Slide 6</div>
              </div>
            </div>

              <div className='sliderControls'>
                <button type="button" onClick={handlePrev1}>Prev</button>
                <button type="button" onClick={handleNext1}>Next</button>
              </div>
        
      </div>
      <div className='event-study-section'>
        <h2>Portofolio(イベント・勉強会)</h2>
          <h2>Slider</h2>
            <div className='slider' ref={emblaRef2}>
              <div className='sliderList'>
                <div className='sliderItem'><img src = {Portfolio1} alt='Portfolio1'></img>オープンキャンパス</div>
                <div className='sliderItem'><img src = {Portfolio2} alt='Portfolio1'></img>2024年度 新歓BBQ</div>
                <div className='sliderItem'><img src = {Portfolio3} alt='Portfolio1'></img>アクセンチュア社員講演会</div>
                <div className='sliderItem'><img src = {Portfolio4} alt='Portfolio1'></img>GDSC Japan Networking Party</div>
                <div className='sliderItem'><img src = {Portfolio5} alt='Portfolio1'></img>Webサイト勉強会</div>
                <div className='sliderItem'>Slide 6</div>
              </div>
            </div>

              <div className='sliderControls'>
                <button type="button" onClick={handlePrev2}>Prev</button>
                <button type="button" onClick={handleNext2}>Next</button>
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