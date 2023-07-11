import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import CreateLink from './components/CreateLink';
import ShowLinkDetails from './components/ShowLinkDetails';
import UpdateLinkInfo from './components/UpdateLinkInfo';
import Footer from './components/Footer';

import NavbarComp from './components/NavbarComp';
import Test from './components/Test'; // delete...

// delete when finish
import ShowBookList from './components/ShowBookList';

// import {BrowserRouter} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div>
       {/* <BrowserRouter> */}
       <NavbarComp />
       {/* </BrowserRouter> */}

        <Routes>
          {/* <Route exact path='/' element={<CreateLink />} /> */}

          {/* delete below? change so create-link is part of url (/)? */}
          {/* <Route index path='/create-link' element={<CreateLink />} /> */}
          <Route index element={<CreateLink />} />
          <Route path='/edit-link/:id' element={<UpdateLinkInfo />} />
          <Route path='/show-link/:id' element={<ShowLinkDetails />} />

          <Route path='/:urlId' element={<Test/>} />
          {/* remove when finish */}
          <Route path='/all' element={<ShowBookList />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
