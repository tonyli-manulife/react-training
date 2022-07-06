import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";

//Here is page
import HomePage from "./pages/homepage";
import Create from "./pages/create";

export default function MyRoutes(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="create" element={<Create/>}/>
            </Routes>
        </BrowserRouter>
    )
}