import logo from './logo.svg';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './css/App.css';
import React from 'react';
import { render } from 'react-dom';
// Import Other components
import Homepage from './components/Homepage';
import HeroImage from './components/HeroImage';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

import GoogleClone from './components/Portfolio-items/GoogleClone';
import LeBlancSoftwareSolutions from './components/Portfolio-items/LeBlancSoftwareSolutions';
import CCPS109 from './components/Portfolio-items/CCPS109';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" >
          <Route index element={<Homepage />} />
          <Route path='GoogleClone' element={<GoogleClone />} />
          <Route path='LeBlancSoftwareSolutions' element={<LeBlancSoftwareSolutions />} />
          <Route path='CCPS109' element={<CCPS109 />} />
         
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

          
          
   
render(<App />, document.getElementById("root"));










// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route exact path='/'>
//           <HeroImage />
//         </Route>

//       </Routes>
//     </Router>
//   );
// }

// export default App;
