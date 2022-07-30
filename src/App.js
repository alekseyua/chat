import './App.scss';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className={'app-wrapper__content'}>
        <Dialogs />
        <Profile />
      </div>
    </div>
  );
}

export default App;
