import React from 'react';
import Layout from './Layout/Layout';
import NoteView from '../pages/NoteView';

const App: React.FC = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Hello Notes</h1>
      </header>
      <Layout><NoteView/></Layout>
    </div>
  );
};

export default App;
