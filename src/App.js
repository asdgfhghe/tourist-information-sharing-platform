import { BrowserRouter } from 'react-router-dom'
import routes from './router/routes'

import './App.css'


function App() {
  return (
    <BrowserRouter>
      {routes}
    </BrowserRouter>
  );
}

export default App;
