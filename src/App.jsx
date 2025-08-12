import './App.css';
import RootLayout from './components/layouts/RootLayout';
import Home from './components/pages/Home';
import {Routes ,Route} from "react-router-dom";
import Shop from './components/pages/Shop';
import Blog from './components/pages/Blog';
import Pages from './components/pages/Pages';

function App() {
  

  return (
    <>
     <Routes>
      <Route path="/" element={<RootLayout/>}>
        <Route index element={<Home/>}/>
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/pages" element={<Pages/>}/>
      </Route>
     </Routes>
    </>
  )
}

export default App;
