import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PostListing from './component/PostListing';
import PostForm from './component/PostForm';
import PostDetail from './component/PostDetail';
import PostEdit from './component/PostEdit';

function App() {
  return (
    <div className="App">
      <h1>Blog</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<PostListing />}></Route>
          <Route path='/PostForm' element={<PostForm />}></Route>

          <Route path='/PostDetail/:empid' element={<PostDetail />}></Route>
          <Route path='/PostEdit/:empid' element={<PostEdit />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );

}

export default App;
