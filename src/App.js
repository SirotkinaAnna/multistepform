
import 'bootstrap/dist/css/bootstrap.min.css';
import StartPage from './components/pages/StartPage';

import SideBar from './components/SideBar';
import SelectPage from './components/pages/SelectPage';
import AddonsPage from './components/pages/AddonsPage';
import './style.css'
import FinishPage from './components/pages/FinishPage';
import ThankYouPage from './components/pages/ThankYouPage';
import './checkbox.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div className="container justify-content-center h-100 mx-0 px-0 mx-md-auto px-md-auto">
      <div className="container  myBorder justify-content-center">
        <div className="row my-md-4">
          <div className="col-md-3 relat ps-md-4 py-md-3 mx-0 px-0" role="navigation">
            <SideBar />
          </div>
          <div className="col-md-9 rounded-4 d-flex justify-content-center  myBody py-md-3 " role="main">
            <BrowserRouter>

              <Routes>
                <Route element={<StartPage />} path="/" exact={true} />
                <Route element={<SelectPage />} exact path="/select" />
                <Route exact path="/options" element={<AddonsPage />} />
                <Route element={<FinishPage />} exact path="/finish" />
                <Route element={<ThankYouPage />} exact path="/thankYou" />
              </Routes>

            </BrowserRouter>

          </div>

        </div>
      </div>
    </div>



  );
}

export default App;
