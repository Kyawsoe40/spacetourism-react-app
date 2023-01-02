
import { Route, Routes, useLocation} from 'react-router';
import Crew from './components/Crew/Crew';
import Destination from './components/Destination/Destination';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Technology from './components/Technology/Technology';

function App() {
  const location=useLocation().pathname;
  let bg='home-bg';
  if(location.includes('destination')){
    bg='destination-bg'
  }else if(location.includes('crew')){
    bg='crew-bg'
  }else if(location.includes('technology')){
    bg='technology-bg'
  }else{
    bg='home-bg'
  }
  return (

      <div  className={`${bg} def-bg`} style={{height:'100%',width:'100%'}}>
        <Header />
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='destination/*' element={<Destination />} />
        <Route path='crew/*' element={<Crew />} />
        <Route path='technology/*' element={<Technology />} />
        </Routes>
        <Footer />
      </div>
      
  );
}

export default App;
