import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import BrowseSights from "../pages/BrowseSights"

const routes = (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/browseSights" element={<BrowseSights />} />
    </Routes>
  );
  
  export default routes