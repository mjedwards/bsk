import React from "react"
import BreakfastMenu from "./breakfast"
import LunchMenu from "./lunch"
import KidsMenu from "./kids"


function MainMenu() {
    return (
        <div className="menu-container">
            <BreakfastMenu />
            <LunchMenu />
            <KidsMenu />
        </div>
    )
}

export default MainMenu;