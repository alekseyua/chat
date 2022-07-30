import './App.scss';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { Routes, Route } from 'react-router-dom';
const App = () => {
  return (
    <div className="app-wrapper">
            <Header />
                    <Navbar />
                <div className={'app-wrapper__content'}>
                  <Routes>
                    <Route  path='/' element={<Profile />} />
                    <Route  path='/message' element={<Dialogs />} />
                    <Route path='/news' element={<div>News</div>} />
                    <Route path='/music' element={<div>Music</div>} />
                    <Route path='/settings' element={<div>Settings</div>} />
                  </Routes>
                </div>                              

    </div>
  );
}

export default App;
