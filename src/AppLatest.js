import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import CreateBook from './components/CreateBook';
import ShowBookList from './components/ShowBookList';
import ShowBookDetails from './components/ShowBookDetails';
import UpdateBookInfo from './components/UpdateBookInfo';
import Waterfall from './components/Waterfall';
import Test from './components/Test';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>

          {/* changed */}
          {/* <Route exact path='/' element={<ShowBookList />} /> */}
          {/* <Route exact path='/' element={<CreateBook />} /> */}

          {/* delete below? change so create-book is part of url (/)? */}
          {/* <Route index path='/create-book' element={<CreateBook />} /> */}
          <Route index element={<CreateBook />} />
          <Route path='/edit-book/:id' element={<UpdateBookInfo />} />
          <Route path='/show-link/:id' element={<ShowBookDetails />} />
          {/* <Route path='/show-book/:id' element={<ShowBookDetails />} /> */}

          {/* added. remove when finish */}
          <Route path='/all' element={<ShowBookList />} />
          {/* <Route path='/:urlId' /> */}

          <Route path='/test' element={<Test/>} />

        <Route path='/:urlId' element={<Test/>} />

          <Route path='/test/:urlId' element={<Test/>} />
          {/* <Route path='/short' element={<Waterfall />} /> */}
          {/* <Route path='/:urlId' element={<Waterfall />} /> */}
          <Route path='/short/:urlId' element={<Waterfall />} />
          {/* <Route path='/shortie/:urlId' element={<Waterfall />} /> */}
          {/* could be :shortUrl  or /:shortUrl ? */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
