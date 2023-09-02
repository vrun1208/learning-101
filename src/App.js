//import logo from './logo.svg';
import Counter from './components/counter';
import ImProp from './components/using_props';
import RandNum from './components/rand_num';
import SwitchTheme from './components/toggle';
import './App.css';
import { createContext } from 'react';
import IamContext from './components/iamcontext';
import Func from './components/thoda_sa_css';
import Home from './components/home';
import { Route, Router, Link } from 'react-router-dom';


export const firstName = createContext();
//const lastName = createContext();

//const Hm = () => <h1>PAGE-01</h1>

function App() {
  return (
    <div >

        <Counter />
        <ImProp 
          name="echo dot"
          des = "AI stuff"
          price= {500}
        />
        <RandNum />
        <SwitchTheme />
        <firstName.Provider value={"ryan Gosling is literally me!"}>
          <IamContext />
        </firstName.Provider>
        <Func />
    </div>
  );
}

export default App;
//export {firstName};