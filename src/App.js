import React, {Fragment, useEffect} from "react";
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min';
import Home from "./components/Home";
import Add_Action from "./components/Add_Action";
import Add from "./layout/Add";
import {Provider} from "react-redux";
import store from "./store";
import './App.css';

const App = () => {

    useEffect(()=>{
        M.AutoInit();
    },[])

  return (
      <Provider store={store}>
          <Fragment>
              <nav>
                  <div className="nav-wrapper blue" style={{padding:'.3rem .5rem'}}>
                      <a href="#" className="brand-logo">Workflow Builder</a>
                  </div>
              </nav>
              <div className="container">
                  <Add/>
                  <Home/>
                  <Add_Action/>
              </div>
          </Fragment>
      </Provider>
  );
}

export default App;
