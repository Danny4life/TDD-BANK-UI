import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';


function App() {
  return (
    <>
      <di>
       <BrowserRouter>
       <Routes>
        <Route index element={<Navbar />} />
        <Route path="/" element={<Navbar />} />
       </Routes>

       </BrowserRouter>
      </di>
    </>
  );
}

export default App;
