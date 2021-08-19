import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import SignUp from './Components/SignUp';
import SignIn from './Components/SignIn';
import styled from "styled-components";
import Wrapper from './Components/StyledComponent/Wrapper'
import { ImageContainer, Image } from './Components/StyledComponent/ImageContainer'
import Logo from './assets/padlock.svg';


function App() {
  return (
    <>
      <div className="App">

          <Switch>
            <Route exact path='/'>
              <Redirect to='/signin' />
            </Route>/
            <Route exact path='/signup' component={SignUp} />
            <Route path='/signin' component={SignIn} />
          </Switch>

      </div>
    </>
  );
}

export default App;
