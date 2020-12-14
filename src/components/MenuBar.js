import React from "react";

const MenuBar = (props) => {
  /*

  The 'a' tags below are the menu items. Think about the way a menu 
  should work. When you click a menu item, the button typically becomes
  'active' to indicate that it is currently selected. How could we achieve
  this programatically? What other behavior do we expect when we click
  on a menu item? Do we need state in this component, and if not, how can
  this component be made aware of what is currently the active menu item?

  */
  const activeCss = (id) => {
    console.log(id)
    return props.activeMenu === id ? "active" : null;
  };

  return (
    <div className="ui four item menu">
      <a className={`item ${props.activeMenu === "beeboop" ? "active" : null}`} id="beeboop" onClick={props.changeMenuHandler}>
        <i className="user large icon" id="beeboop" />
      </a>

      <a className={`item ${activeCss("photo")}`} id="photo" onClick={props.changeMenuHandler}>
        <i className="photo large icon" id="photo" />
      </a>

      <a className={`item ${activeCss("cocktail")}`} id="cocktail">
        <i
          className="cocktail large icon"
          id="cocktail"
          onClick={props.changeMenuHandler}
        />
      </a>

      <a className={`item ${activeCss("pokemon")}`} id="pokemon">
        <i
          className=" themeisle large icon"
          id="pokemon"
          onClick={props.changeMenuHandler}
        />
      </a>
    </div>
  );
};

export default MenuBar;
