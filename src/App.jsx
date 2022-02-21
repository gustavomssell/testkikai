import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import GlobalStyle from './styles/global';
import light from "./styles/themes/light";
import dark from "./styles/themes/dark";

import usePersistedState from "./Components/utils/usePersistedState";
import { SupporterStorage } from "./Context/SupporterContext";
 
import Header from "./Components/Header";
import { Planets } from "./Pages/Planets";
import { Starships } from "./Pages/Starships";
import { Home } from "./Pages/Home";

function App() {
  const [theme, setTheme] = usePersistedState('theme', light);
  const toggleTheme = () => setTheme(theme.title === 'light' ? dark : light);
  
 return (
 <ThemeProvider theme={theme}>
  <GlobalStyle/>
   <SupporterStorage>
    <BrowserRouter>
     <Header toggleTheme={toggleTheme} />  
     <Routes>
      <Route exact path="/"          element={<Home/>} />
      <Route exact path="/planets"   element={<Planets/>} />
      <Route exact path="/starships" element={<Starships/>} />
     </Routes>
    </BrowserRouter>
   </SupporterStorage>  
 </ThemeProvider>
 )
}

export default App
