import React,{useEffect} from 'react';
import Header from './Header';
import Home from './Home';
import './App.css';
import CheckOut from './CheckOut';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Login from './Login';
import {auth} from "./firebase";
import {useStateValue} from "./StateProvider";
import Payment from "./Payment";

function App() {

  const [{},dispatch] =useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {

      if(authUser){
          dispatch({
            type:'SET_USER',
            user:authUser
          })
      }
      else {
          dispatch({
            type:'SET_USER',
            user:null
          })
      }

    })
  }, [])

  return (
    <Router>
      <div className="App">        
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout"> 
            <Header />            
            <CheckOut />                       
          </Route>
          <Route path="/payment"> 
            <Header />            
            <Payment />                       
          </Route>
          <Route path="/">            
            <Header />
            <Home />              
          </Route>
        </Switch>     
      </div>
    </Router>
    
  );
}

export default App;
