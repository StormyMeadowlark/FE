import NavBar from './components/NavBar.jsx';
import Footer from './components/pageParts/shared/Footer.jsx';
import { Outlet } from 'react-router-dom';
import Consent from './components/pageParts/shared/Consent.jsx';
const App = () => {
  return (
    <div>
      <div>
        <div className="sticky top-0 inset-x-0 z-50 bg-black/50 font-Play">
          <NavBar />
        </div>
        <Consent />
      </div>
      <div>
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
  }

  export default App;
