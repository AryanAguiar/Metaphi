import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './components/Layouts';
import ScrollToTop from './components/ScrollToTop';
import Test from './pages/Test';
import About from './pages/About';
import Contact from './pages/Contact';
import PageNotFount from './pages/PageNotFount';
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

          
          <Route path='*' element = {<PageNotFount/>} />
        </Route>

       
      </Routes>
    </>
  )
}

export default App
