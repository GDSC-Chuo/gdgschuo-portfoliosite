import './AboutUs.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import img from '../images/Aboutus/aboutus_img.png';

const AboutUs = () => {
  return (
  <>
    <Header />
    <div className="about-us">
      <div className="semititle">
        <h1>About us</h1>
      </div>
      <div className="about-us-contents">
          
        <div className="about-us-content">
          <div className="color-block1">
          <h2>Create</h2>
            <p>
              開発<br/>
              設計<br/>
              デザイン<br/>
              実装
            </p>
            <p>...</p>
          </div>
          <div className="img">
            <img src={img} alt="img" />
            <img src={img} alt="img" />
          </div>
        </div>

        <div className="about-us-content">
        <div className="color-block2">
          <h2>Study</h2>
          <p>
            勉強会<br/>
            ワークショップ<br/>
            もくもく会<br/>
            オープンキャンパス運営
          </p>
          <p>...</p>
          </div>
          <div className="img">
            <img src={img} alt="img" />
            <img src={img} alt="img" />
          </div>
        </div>

        <div className="about-us-content">
          <h2>Connect</h2>
          <p>
                イベント<br/>
                交流会・座談会<br/>
                ハッカソン<br/>
                迷プロ
          </p>
          <p>...</p>
          <div className="img">
            <img src={img} alt="img" />
            <img src={img} alt="img" />
          </div>
        </div>

        <div className="about-us-content">
            <h2>Express</h2>
            <p>
                SNS発信<br/>
                SNS運用 (Instagram, X)<br/>
                投稿作成<br/>
                インサイト分析
            </p>
            <p>...</p>
            <div className="img">
            <img src={img} alt="img" />
            <img src={img} alt="img" />
          </div>
        </div>
       
      </div>
      
    </div>
    <Footer />
  </>
  );
};

export default AboutUs;