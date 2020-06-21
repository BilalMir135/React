import React from 'react';
import logo from './logo.svg';
import './App.css';
//import FragmentDemo from './components/01_Fragments/FragmentDemo';
//import ParentComp from './components/02_PureComponents/ParentComp';
//import RefDemo from './components/03_Ref/RefDemo';
//import FocusInput from './components/04_RefCC/FocusInput';
//import FRParent from './components/05_RefForwarding/FRParent';
//import PortalDemo from './components/06_Portals/PortalDemo';
//import Hero from './components/07_ErrorBoundary/Hero';
//import ErrorBoundary from './components/07_ErrorBoundary/ErrorBoundary';
//import ClickCounter from './components/08_HOC/ClickCount';
//import HoverCount from './components/08_HOC/HoverCount';
/* import User from './components/09_RenderProp/User';
import Counter from './components/09_RenderProp/Counter';
import ClickCountTwo from './components/09_RenderProp/ClickCountTwo';
import HoverCountTwo from './components/09_RenderProp/HoverCountTwo'; */
//import ComponentC from './components/10_Context/ComponentC';
//import { UserProvider } from './components/10_Context/userContext';
//import PostRequest from './components/11_HTTP/PostRequest';
import PostForm from './components/11_HTTP/PostForm';

function App() {
  return (
    <div className='App'>
      {/* <FragmentDemo /> */}
      {/* <ParentComp /> */}
      {/* <RefDemo /> */}
      {/* <FocusInput /> */}
      {/* <FRParent /> */}
      {/* <PortalDemo /> */}
      {/* This we hide all the Hero tags b/c EB hide all the child elements
      <ErrorBoundary>
        <Hero heroname='Spiderman' />
        <Hero heroname='Batrman' />
        <Hero heroname='Joker' />
      </ErrorBoundary> */}
      {/* <ErrorBoundary>
        <Hero heroname='Spiderman' />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroname='Batrman' />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroname='Joker' />
      </ErrorBoundary> */}
      {/* <ClickCounter name='Bila' />
      <HoverCount /> */}

      {/*  Render Props # 01 */}
      {/* <User render={(isLoggedIn) => (isLoggedIn ? 'Bilal' : 'Guest')} /> */}

      {/*  Render Props # 02 */}
      {/* <User>{(isLoggedIn) => (isLoggedIn ? 'Bilal' : 'Guest')}</User> */}

      {/* <Counter
        render={(count, incrementCount) => (
          <ClickCountTwo
            name='Bilal'
            count={count}
            incrementCount={incrementCount}
          />
        )}
      />

      <Counter
        render={(count, incrementCount) => (
          <HoverCountTwo count={count} incrementCount={incrementCount} />
        )}
      /> */}

      {/* All the child elements of userProvider can access context data */}
      {/* <UserProvider value='Bilal'> */}
      {/* <ComponentC /> */}
      {/* </UserProvider> */}
      {/* <PostRequest /> */}
      <PostForm />
    </div>
  );
}

export default App;
