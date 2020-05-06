import React from 'react';
import './App.css';
import NavBarComp from "./NavBarComp";
import PostComp from "./PostComp";
import SideBarComp from "./SideBarComp";



function App() {
    return (
        <div>
            <NavBarComp></NavBarComp>
            <PostComp></PostComp>
            <SideBarComp></SideBarComp>
        </div>
    );
}
export default App;
