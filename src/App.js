import Header from "./components/Header";
import Template from "./components/Template";
import MainBody from "./components/MainBody";
import './App.css';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
//react-router-dom is the part of the react eco-system, which allows us to render different content from 
//different url's we are visiting.
import NewForm from './components/newform/NewForm';
import FormTabs from "./components/newform/FormTabs";


function App() {
  return (
    <div className="App">
      
        <Routes>
        <Route path='/' element={(
          <>
          <Header />
          <Template />
           <MainBody />
          </>
        )} />           
        
        <Route path="/form/:id" element={(
          <>
            <NewForm />
            <FormTabs />
          </>
        )} />
        </Routes>        
      
    </div>
  );
}

export default App;
