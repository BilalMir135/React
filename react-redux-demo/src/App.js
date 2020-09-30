import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import CakeContainer from './components/CakeContainer';
import HookCakeContainer from './components/HookCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import HookIceCreamContainer from './components/HookIceCreamContainer';
import NewCakeContainer from './components/NewCakeContainer';
import ItemContainer from './components/ItemContainer';
import UserContainer from './components/UserContainer';
import HookUserContainer from './components/HookUserContainer';

const App = () => {
  return (
    <Provider store={store}>
      {/* <ItemContainer cake />
      <ItemContainer />
      <CakeContainer />
      <HookCakeContainer />
      <IceCreamContainer />
      <HookIceCreamContainer />
      <NewCakeContainer /> */}
      {/* <UserContainer /> */}
      <HookUserContainer />
    </Provider>
  );
};

export default App;
