// import logo from './logo.svg';
import ProductDownload from './components/ProductDownload';
import Layout from './Components/Layout';
import './App.css';
import Testimonials from './components/Testimonial';
import Welcome from './components/Welcome';

function App() {
  return(
    <div>
      <Layout>
      <Welcome/>
      <ProductDownload/>
      <Testimonials/>
      </Layout>
      
    </div>
  );
}

export default App;