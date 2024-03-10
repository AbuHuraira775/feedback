import './App.css';
import MainRouting from './config/routers/Routers';
import Navbar from './components/Navbar'
import { Provider } from 'react-redux';
// import store from './config/store';
import store from './UserFeedback/config/store';
import AllRouting from './UserFeedback/config/routing/AllRouting';
function App() {

  return <Provider store={store}>

    {/* <MainRouting /> */}
    <AllRouting />
  </Provider>

}

export default App;
