import React from 'react';
import Fakestore from './components/Fakestore/Fakestore';
import Fakestorebill from './components/Fakestore/Fakestorebill';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App(){
return(
 <>
<BrowserRouter>
<Routes>
<Route path="/" element={<Fakestore />} />
<Route path="/bill" element={<Fakestorebill />} />
</Routes>
</BrowserRouter>
 </>

);
  
}

export default App;