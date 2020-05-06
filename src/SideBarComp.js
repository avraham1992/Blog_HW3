import sideMenu from "./sideMenu";
import React from "react";


export default function sideBarComp(){
        return (
            <div className="sideMenuSection">
                {sideMenu.map((Menu) =>(
                    <div>
                    <label className="title">{Menu.title}</label>
                    <ul className="side-bar-list">
                    {Menu.links.map((ele)=>(
                        <li>{ele.title}<a href={ele.link}>go to page</a></li>
                    ))}
                            <hr style={{width: '100%', textAlign: 'left'}}/>
                    </ul>
                    </div>
                    )
                )}
            </div>
        );
}