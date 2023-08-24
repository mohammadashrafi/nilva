
import './App.css';
import MainPage from './components/Main/MainPage';
import 'antd/dist/antd.min.css'
import {Routes,Route} from "react-router-dom"
import Exploration from './page/Exploration';
import Football from './page/Football';
import Legs from './page/Legs';
import Profile from './page/Profile';

function App() {



  return (
    <div className="App">
      
<Routes >
<Route path="/"  element={<MainPage/>}/>
<Route path='explo' element={<Exploration/>}/>
<Route path='football' element={<Football/>}/>
<Route path='legs' element={<Legs/>}/>
<Route path='profile' element={<Profile/>}/>

</Routes>
<h1>test</h1>
    </div>
  );
}

export default App;
