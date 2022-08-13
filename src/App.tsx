import React from 'react';
import { Header } from './components/Header//Header';
import { OurTeam } from './components/OurTeam/OurTeam';
import { Places } from './components/Places/Places';
import { GetStarted } from './components/Get_Started/GetStarted';
import { SaveTheWorld } from './components/SaveTheWorld/SaveTheWorld';
import './styles/main.scss';
import { Contacts } from './components/Contacts/Contacts';

function App() {
  return (
    <>
      <div className="main">
        <Header />
        <Places />
        <OurTeam />
        <GetStarted />
        <SaveTheWorld />
        <Contacts />
    </div>
    </>
    
  );
}

export default App;
