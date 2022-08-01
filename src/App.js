import './App.scss';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { Routes, Route } from 'react-router-dom';
const App = (props) => {

  return (
    <div className="app-wrapper">
            <Header />
                    <Navbar menuSideBar={props.state.sideBarPage.menuSideBar} />
                <div className={'app-wrapper__content'}> 
                  <Routes>
                    <Route exact path='/' element={<Profile 
                                                      posts={props.state.profilePage.posts} 
                                                      newPostText={props.state.profilePage.newPostText}
                                                      dispatch={props.dispatch}
                                                    />} 
                    />
                    <Route exact path='/dialogs' element={<Dialogs 
                                                              dialogs={props.state.messagesPage.dialogs} 
                                                              messages={props.state.messagesPage.messages}
                                                              newMessageText={props.state.messagesPage.newMessageText} 
                                                              dispatch={props.dispatch}
                                                          />} 
                    />
                    <Route exaxt path='/news' element={<div>News</div>} />
                    <Route exaxt path='/music' element={<div>Music</div>} />
                    <Route exact path='/settings' element={<div>Settings</div>} />
                  </Routes>
                </div>                              

    </div>
  );
}

export default App;
