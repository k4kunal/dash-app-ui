import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Login from './components/login';
import Register from './components/registration';

function LocalRoutes(props) {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </BrowserRouter>
    )
  
}

export default LocalRoutes;
