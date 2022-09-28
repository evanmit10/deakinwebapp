import { Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './routes/HomePage';
import Login from './routes/Login';
import SignUp from './routes/SignUp';
import Post from './routes/Post';
import Profile from './Profile';





function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/' element= {<HomePage />} />
          <Route path='/login' element= {<Login />} />
          <Route path='/signup' element= {<SignUp />} />
          <Route path='/post' element= {<Post />} />
          <Route path='/profile' element= {<Profile />} />


        </Routes>
    </div>
  );
}



export default App;
