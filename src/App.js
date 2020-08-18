import React ,{useEffect}from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Header from "./Header"
import Home from "./Home"
import Return from "./Return";
import Checkout from "./Checkout"
import Login from './Login';
import {useStateValue} from "./StateProvider";
import { auth } from "./firebase";
import YourPrime from './YourPrime';

function App() {
   const [{basket}, dispatch] = useStateValue();

   //Piece of code which run based on a given condition
   
   useEffect(() =>{
   const unsubscribe =  auth.onAuthStateChanged((authUser) => {
      if(authUser){

        dispatch({
          //the user is logged in...
          
          type:"SET_USER",
          user:authUser
        })
      }else{

        //the user logged out
          dispatch({
            type: "SET_USER",
            user:null
          })
      }
    })
    return () => {
      unsubscribe();
    }
   },[])

  return (
    <Router>
      <div className="app">
       <Switch>
         <Route path="/checkout">
            <Header />
            <Checkout/>
         </Route>
          <Route path="/login">
            <Header />
            <Login/>
            </Route>
          <Route path="/return">
            <Header />
            <Return/>
          </Route>
          <Route path="/prime">
            <Header />
            <YourPrime/>
          </Route>
          <Route path="/">
            <Header />
            <Home/>
          </Route>
          
       </Switch>
      </div>
    </Router>
  );
}

export default App;
