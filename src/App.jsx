
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Calendar from './Screens/Calendar';
import Events from './Screens/Events';
import { AppContainer } from './Styles/appStyles';
import GlobalStyles from './Styles/globalStyles';
import SplashScreen from './Screens/Splash';
function App() {
  return (
    <>
    <GlobalStyles/>
    <AppContainer >
    <SplashScreen/>
    {/* <Tabs className="tabs">
      <Tab title="Calendar" className="tab">
        <Calendar/>
      </Tab>
      <Tab title="Events" className="tab">
        <Events/>
      </Tab>
    </Tabs> */}
    </AppContainer>
    </>
  );
}

export default App;
