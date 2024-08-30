import React from 'react';
import Sidebar from '../src/pages/Sidebar';
import Admin_Dashboard from '../src/pages/admin/Admin_Dashboard';
import './App.css';

function App() {
  return (
    <div className="app">
      <Sidebar/>
      <div className="main">
        <Admin_Dashboard/>
      </div>
    </div>
  );
}

export default App;
