import React from "react";
import MenuBar from "../components/MenuBar.js";
import { Profile, Photos, Cocktails, Pokemon } from "../components/Pages.js";

class MainBox extends React.Component {
  constructor() {
    super();

    this.state = {
      activeMenu: "beeboop",
    };
  }

  changeMenuHandler = (event) => {
    this.setState({
      activeMenu: event.target.id,
    });
  };

  render() {
    /*

    Replace the code below! Depending on what menu item is selected in the menu, I should render either a Profile, Photos, Cocktails, or Pokemon component.Think of a way to track which menu item was selected. Which component should have state? Which component should have methods to control state? Where should these methods be called?
    */

    let display = {
      beeboop: <Profile />,
      photo: <Photos />,
      cocktail: <Cocktails />,
      pokemon: <Pokemon />,
    };

    const detailsToDisplay = display[this.state.activeMenu];

    return (
      <div>
        <MenuBar changeMenuHandler={this.changeMenuHandler} activeMenu={this.state.activeMenu} />
        {detailsToDisplay}
      </div>
    );
  }
}

export default MainBox;
