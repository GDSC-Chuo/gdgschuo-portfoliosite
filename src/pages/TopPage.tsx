import './TopPage.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import gdgslogo from '../images/TopPage/gdgslogo.png';
const TopPage = () => {
  return (
  <>
    <Header />
    <div className="top-page">
      <img src={gdgslogo} alt="TopPageImage" />
      <h1>トップページ</h1>
    </div>
    <Footer />
  </>
  );
};

export default TopPage;