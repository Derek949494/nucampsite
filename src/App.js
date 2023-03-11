import { Routes, Route } from 'react-router-dom';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import Header from './components/Header';
import CampsitesDirectoryPage from './pages/CampsitesDirectoryPage';
import Footer from './components/Footer';
import CampsiteDetail from './features/campsites/CampsiteDetail';
import './App.css';
import CampsiteDetailPage from './pages/CampsiteDetailPage';
import AboutPage from './pages/AboutPage';
import { fetchCampsites } from './features/campsites/campsitesSlice';
import { fetchPartners } from './features/partners/partnersSlice';
import { fetchPromotions } from './features/promotions/promotionsSlice';


function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchCampsites());
        dispatch(fetchPartners());
        dispatch(fetchPromotions());
    }, [dispatch]);
    
    return (
        <div className='App'>
            <Header />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='contact' element={<ContactPage />} />
                <Route path='directory' element={<CampsitesDirectoryPage />} />
                <Route path='about' element={<AboutPage />} />
                <Route
                    path='directory/:campsiteId'
                    element={<CampsiteDetailPage />}
                />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;