import logo from './logo.svg';
import{ BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Header from './Components/Header/Header';
import Alert from './Components/Main/Alert-section/Alert';
import Footer from './Components/Footer/Footer';
import AppleAPI from './Components/Youtube/AppleAPI';
import News from './Components/News/News';
import Main from './Components/Main/Main';
import Iphone from './Components/Iphone/Iphone';

function App() {
  return (
    <Router>
    <div>
     <Header/>
    
        <Route path="/" exact component={Main}/>
        <Route path="/iphone" exact component={Iphone} />
        <Route path="/videos" exact component={AppleAPI} />
        <Route path="/news" exact component={News}/>
     
      <Footer />
     
      </div>
    </Router>
  );
}

export default App;
