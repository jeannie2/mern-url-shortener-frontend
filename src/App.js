import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import CreateLink from './components/CreateLink';
import ShowLinkDetails from './components/ShowLinkDetails';
import UpdateLinkInfo from './components/UpdateLinkInfo';
import Footer from './components/Footer';

import RedirectPage from './components/RedirectPage';

const App = () => {
  return (
    <Router>
      <div>

        <Routes>
          {/* <Route exact path='/' element={<CreateLink />} /> */}
          {/* <Route index path='/create-link' element={<CreateLink />} /> ----> create-link is part of url (/) */}
          <Route index element={<CreateLink />} />
          <Route path='/edit-link/:id' element={<UpdateLinkInfo />} />
          <Route path='/show-link/:id' element={<ShowLinkDetails />} />
          <Route path='/:urlId' element={<RedirectPage/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
