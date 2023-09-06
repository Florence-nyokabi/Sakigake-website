// import logo from './logo.svg';
import ProductDownload from './components/ProductDownload';
import Layout from './components/Layout';
import './App.css';
import Testimonials from './components/Testimonial';
import Welcome from './components/Welcome';
import WhyUs from './components/WhyUs';

function App() {
  return(
    <div>
      <Layout>
      <Welcome/>
      <WhyUs/>
      <ProductDownload/>
      <Testimonials/>
      </Layout>
      
    </div>
  );
}

export default App;