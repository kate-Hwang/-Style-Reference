 
import './App.css';
import { Route, Routes, Router} from 'react-router-dom';

import Main from './pages/Main';

function App() {
  return (
    //라우터 모음
    <Router>
      <Routes>
        <Route path="/*" element={<Main/>}/>
      </Routes>
    </Router>
  );
}

export default App;
