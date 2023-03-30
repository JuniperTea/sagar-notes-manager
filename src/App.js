import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
import Signup from './pages/Singup/Signup';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Header from './shared/components/Header';
import Gallery from './pages/Gallery/Gallery';
import Privacy from './pages/Privacy/Privacy';
import ProtectedRoute from './shared/components/ProtectedRoute';
import RandomUser from './pages/RandomUser/RandomUser';
import SongAdd from './pages/SongAdd/SongAdd';
import SongList from './pages/SongList/SongList';
import Jokes from './pages/Jokes/Jokes';
import MyPortalForHeader from './MyPortalForHeader';
import ClassBasedDemo from './pages/ClassBasedDemo/ClassBasedDemo';
import ClassAndLifeCycle from './pages/ClassandLifeCycle/ClassAndLifeCycle';


function App() {

  return (
    <div>

      <Header />
      <MyPortalForHeader value={'Apps'} />
      <hr />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/sign-up' element={<Signup />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/privacy' element={<ProtectedRoute><Privacy /></ProtectedRoute>} />
        <Route path='/randomuser' element={<RandomUser />} />
        <Route path='/songAdd' element={<SongAdd />} />
        <Route path='/songList' element={<SongList />} />
        <Route path='/jokes' element={<Jokes />} />
        <Route path='/classdemo' element={<ClassBasedDemo />} />
        <Route path='/lifecycle' element={<ClassAndLifeCycle />} />
        <Route path='/' element={<button>No path so this</button>} />
        <Route path='*' element={<button>Page Not Found</button>} />
      </Routes>
      <hr />

    </div>
  )


}

export default App;
