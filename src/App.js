import './App.css';
import {Switch, Route} from 'react-router-dom';
import SignUp from './Components/SignUp';
import SignIn from './Components/SignIn';
import styled from "styled-components";
import Wrapper from './Components/StyledComponent/Wrapper'
import {ImageContainer, Image} from './Components/StyledComponent/ImageContainer'
import Logo from './assets/padlock.svg';


function App() {
  return (
    <>
    <div className="App">
      <Wrapper>
          <ImageContainer>
            <Image src={Logo}/>
          </ImageContainer>
          <Switch>
            <Route exact path ='/' component={SignUp}/>
            <Route path ='/SignIn' component={SignIn}/>
          </Switch>
        </Wrapper>
    </div>
    </>
  );
}

export default App;
