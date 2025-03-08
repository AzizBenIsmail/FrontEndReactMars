import React , {lazy } from 'react'
import { Routes, Route } from "react-router-dom";

//import App from './App'; //composant 
import ComposantFc from "./ComposantFc"; //composant
import NavBar from "./NavBar"; //composant

const App = lazy(()=> import("./App") )

export default function RoutesComponent() {
  return (
    <div>
      <Routes>
      <Route path="/App" element={<App/>}></Route>
      <Route path="/ComposantFc" element={<ComposantFc/>}></Route>
      <Route path="/NavBar" element={<NavBar/>}></Route>
      <Route path="/*" element={<App/>}></Route>
      </Routes>
    </div>
  )
}
