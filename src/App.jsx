import './App.css'
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero'
import Join from './components/Join/Join';
import Plan from './components/Plans/Plan';
import Programs from './components/Programs/Programs';
import Reason from './components/Reason/Reason';
import Testimonials from './components/Testimonials/Testimonials';

function App() {

  return (
    <div className="App">
      <Hero />
      <Programs />
      <Reason />
      <Plan />
      <Testimonials />
      <Join />
      <Footer/>
    </div>
  )
}

export default App;
