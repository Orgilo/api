import React from 'react';
import './App.css';
import QuestionForm from './components/Poll';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-3xl font-bold mb-4">Question Form</h1>
        <QuestionForm />
      </header>
    </div>
  );
}

export default App;
