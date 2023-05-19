import './App.scss';
import {Routes,Route,useLocation} from 'react-router-dom';
import Home from './containers/home';
import Skills from './containers/skills';
import Portfolio from './containers/portfolio';
import Resume from './containers/resume';
import Contact from './containers/contact';
import About from './containers/about';
import Navbar from './components/navbar';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import particles from './utils/particles';
function App() {
  const handleInit =async(main)=>{
    await loadFull (main)
  }
  const location=useLocation();
  console.log(location);
  const renderParticleJsInHomePage=location.pathname==="/";
  return (
    <div className="App">
      {
        renderParticleJsInHomePage &&(
          <Particles id='particles' options={particles} init={handleInit} />
        )
      }
        <Particles id="tsparticles"options={particles} init={handleInit} />
      <Navbar/>
      <div className='App_main-page-content'>
      <Routes>
        <Route index path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/portfolio' element={<Portfolio/>}/>
        <Route  path='/resume' element={<Resume/>}/>
        <Route i path='/contact' element={<Contact/>}/>

      </Routes>
      </div>
    </div>
  );
};

export default App;
