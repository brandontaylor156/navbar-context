import React from 'react'
import './App.css';
import {NavbarContext} from './Contexts/NavbarContext';

import Navbar from './Components/Navbar';
import FormWrapper from './Components/FormWrapper'

function App() {
    const [name, setName] = React.useState("Brandon")

    return (
      <div className="App">
        <NavbarContext.Provider value={{name, setName}}>
          <Navbar/>
          <FormWrapper/>
        </NavbarContext.Provider>
      </div>
    );
}
  

export default App;
