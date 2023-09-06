// import logo from './logo.svg';
import ProductDownload from './components/ProductDownload';
import Layout from './components/Layout';
import './App.css';
import Mission from './components/Mission';
import Testimonials from './components/Testimonial';
import Welcome from './components/Welcome';
import WhyUs from './components/WhyUs';


function App() {
  return(
    <div>
      <Layout>
      <Welcome/>
      <Mission/>
      <WhyUs/>
      <ProductDownload/>
      <Testimonials/>
      </Layout>
      
    </div>
  );
}

export default App;