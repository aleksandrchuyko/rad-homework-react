import React from 'react';
import Layout from './Layout/Layout';
import NoteView from '../pages/NoteView';

const App: React.FC = () => {
  return (
    <div className='App'>
      <Layout><NoteView/></Layout>
    </div>
  );
};

export default App;
