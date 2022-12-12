import React from 'react';
import NavBar from './components/NavBar';
import Login from './views/Login';
import Registration from './views/Registration';
import Sessions from './views/Sessions';
import Profile from './views/Profile';

const App = (): React.ReactElement => {

  return (
    <div className="w-screen h-screen">
      <NavBar />
      <Profile />
    </div>
  );
};

export default App;
