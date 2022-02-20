import './App.css';
import Home from './components/Home';
import Header from './shared/Header';
import {
  Routes,
  Route
} from "react-router-dom";
import User from './components/User';
import Post from './components/Post';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='container'>
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/users" element={<User/>} />
          <Route path="/posts" element={<Post/>} />
          <Route path="/posts/:id" element={<Post/>} />
          <Route path="/*" element={<Home/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
