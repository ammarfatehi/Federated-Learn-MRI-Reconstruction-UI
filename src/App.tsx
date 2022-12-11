import React from 'react';
import NavBar from './components/NavBar';
import Login from './views/Login';
import Registration from './views/Registration';

const App = (): React.ReactElement => {

  return (
    <div className="w-screen h-screen">
      <NavBar />
      <Registration />
    </div>
  );
};

export default App;
