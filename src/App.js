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
              <Routes>
                <Route  path='/' element={
                                    <div className={'app-wrapper__content'}>
                                      <Dialogs /> 
                                      <Profile />
                                    </div>                              
                                  } 
                />
                <Route  path='/message' element={<div>Message</div>} />
                <Route path='/news' element={<din>News</din>} />
                <Route path='/music' element={<div>Music</div>} />
                <Route path='/settings' element={<div>Settings</div>} />
              </Routes>

    </div>
  );
}

export default App;
