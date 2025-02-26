import './AboutUs.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import img from '../images/Aboutus/aboutus_img.png';

const AboutUs = () => {
  return (
  <>
    <Header />
    <div className="overwrap">
      <div className="semititle">
        <h1>About us</h1>
      </div>

      <div className="honbun">
          
        <div className="about-us-content">
          <div className="color-block1">
          <div className="block-title">
            <h2>Create</h2>
            <p>開発</p>
          </div>
          <div className="list">
            <p>設計</p>
            <p>デザイン</p>
            <p>実装</p>
          </div>
          <p className="description">
          設計から実装まで
          チームを組んで行っています
          1人では難しいことも
          チームでなら最後まで取り組める！
          </p>
          <a href="#" className="link">作品一覧 &gt;</a>
        </div>
          <div className="img">
            <img src={img} alt="img" />
            <img src={img} alt="img" />
          </div>
        </div>

        <div className="about-us-content">
          <div className="color-block2">
            <div className="block-title">
              <h2>Study</h2>
              <p>勉強会</p>
            </div>
            <div className="list">
              <p>ワークショップ</p>
              <p>もくもく会</p>
              <p>オープンキャンパス運営 etc...</p>
            </div>
            <p className="description">
            興味のあることや
            必要性に基づいて
            勉強会を開催しています
            </p>
            <a href="#" className="link">勉強会一覧 &gt;</a>
          </div>
          <div className="img">
            <img src={img} alt="img" />
            <img src={img} alt="img" />
          </div>
        </div>

        <div className="about-us-content">
          <div className="color-block3">
            <div className="block-title">
              <h2>Connect</h2>
              <p>イベント</p>
            </div>
            <div className="list">
              <p>交流会・座談会</p>
              <p>ハッカソン</p>
              <p>競プロ etc...</p>
            </div>
            <p className="description">
            学年や学部問わず親睦を深めたり、
            GDGsの活動の理解を深める
            イベントを開催します
            </p>
          </div>
          <div className="img">
            <img src={img} alt="img" />
            <img src={img} alt="img" />
          </div>
        </div>

        <div className="about-us-content">
          <div className="color-block4">
            <div className="block-title">
              <h2>Express</h2>
              <p>SNS発信</p>
            </div>
            <div className="list">
              <p>SNS運用 （Instagram,X）</p>
              <p>投稿作成</p>
              <p>インサイト分析</p>
            </div>
            <p className="description">
            活動の様子や
            勉強会・イベントの告知はSNSにて！
            フォローお待ちしています！
            </p>
          </div>
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