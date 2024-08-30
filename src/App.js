import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminApp from './admin/AdminApp';
import HomeApp from './home/HomeApp';
import UserApp from './user/UserApp';
import NotFoundPage from './home/pages/NonFound';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomeApp />} />
                <Route path="/admin/*" element={<AdminApp />} />
                <Route path="/user/*" element={<UserApp />} />
                <Route path="*" element={<NotFoundPage/>} />
            </Routes>
        </Router>
    );
};

export default App;
