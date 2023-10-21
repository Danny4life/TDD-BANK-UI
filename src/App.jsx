import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';


function App() {
  return (
    <>
      <di>
       <BrowserRouter>
       <Routes>
        <Route index element={<HomePage/>} />
        <Route path="/" element={<HomePage />} />
       </Routes>

       </BrowserRouter>
      </di>
    </>
  );
}

export default App;
