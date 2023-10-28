import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SignupPage from './pages/SignupPage';


function App() {
  return (
    <>
      <di>
       <BrowserRouter>
       <Routes>
        <Route index element={<HomePage/>} />
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignupPage />} />
       </Routes>

       </BrowserRouter>
      </di>
    </>
  );
}

export default App;
