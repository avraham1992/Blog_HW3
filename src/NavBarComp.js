import React from "react";
import navBarItems from "./navBarItems";

export default function NavBarComp (){
        return(
            <header>
            <div className="navBar">
                {navBarItems.map((Attribute) =>(
                    <span>
                    <a style={{display: 'inLine'}} href={Attribute.link} id = {Attribute.id}>{Attribute.page}</a>
                    </span>
                    )
                )}
            </div>
            </header>
        );
}