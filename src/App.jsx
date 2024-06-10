import NavBar from './components/NavBar.jsx';
import Footer from './components/pageParts/shared/Footer.jsx';
import { Outlet } from 'react-router-dom';
import { CookieConsent, Cookies, getCookieConsentValue} from 'react-cookie-consent';
const App = () => {
  return (
    <div>
      <div>
        <CookieConsent
          enableDeclineButton
          location="top"
          buttonText="yeppers"
          declineButtonText="noppers"
          expires={999}
          overlay
          debug={true}
        >
          Cookies yummy
        </CookieConsent>
      </div>
      <div className="sticky top-0 inset-x-0 z-50 bg-black/50 font-Play">
        <NavBar />
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
