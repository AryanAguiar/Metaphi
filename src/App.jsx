import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './components/Layouts';
import ScrollToTop from './components/ScrollToTop';
import Test from './pages/Test';
import About from './pages/About';
import Contact from './pages/Contact';
import PageNotFount from './pages/PageNotFount';
import Industries from './pages/Industries';
import Services from './pages/Services';
import Careers from './pages/Careers';
import CareersInner from './pages/CareersInner';
function App() {

  return (
    <>
      <ScrollToTop/>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/test' element = {<Test />} />
          <Route path='/about' element = {<About/>} />
          <Route path='/contact' element = {<Contact/>} />
          <Route>
            <Route path='/services/:service' element={<Services />} />
          </Route>
          <Route>
            <Route path='/industries/:industry' element={<Industries />} />
          </Route>
          <Route path='/careers' element = {<Careers />} />
          <Route path='/careers/:slug' element = {<CareersInner />} />
          
          <Route path='*' element = {<PageNotFount/>} />
        </Route>

       
      </Routes>
    </>
  )
}

export default App
