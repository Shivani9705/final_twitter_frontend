// import logo from './logo.svg';
// import './App.css';
// import Home from './components/Home';
import Body from './components/Body';
// import Login from "./components/Login";
import {Toaster} from "react-hot-toast"
function App() {
  return (
    <div className="App">
       <Body/>
       {/* <Login/> */}
       <Toaster/>
    </div>
  );
}

export default App;
