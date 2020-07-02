import React, { useState, useContext } from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

//Context
import { AuthContext } from "../context/auth";

function MenuBar() {
  const { user, logout } = useContext(AuthContext);
  const pathname = window.location.pathname;
  const path = pathname === "/" ? "home" : pathname.substr(1);

  const [activeItem, setActiveItem] = useState(path);
  //console.log(user)

  const handleItemClick = (e, { name }) => setActiveItem(name);

  const MenuBar =
    user && user ? (
      <Menu pointing secondary size="massive" color="teal">
        <Menu.Item name={user.username} active as={Link} to="/" id="fonts" />

        <Menu.Menu position="right">
          <Menu.Item name="logout" onClick={logout} id="fonts" as={Link}
            to="/login" />
        </Menu.Menu>
      </Menu>
    ) : (
      <Menu pointing secondary size="massive" color="teal">
        <Menu.Item
          name="home"
          active={activeItem === "home"}
          onClick={handleItemClick}
          as={Link}
          to="/"
          id="fonts"
        />

        <Menu.Menu position="right">
          <Menu.Item
            name="login"
            active={activeItem === "login"}
            onClick={handleItemClick}
            as={Link}
            to="/login"
            id="fonts"
          />
          <Menu.Item
            name="register"
            active={activeItem === "register"}
            onClick={handleItemClick}
            as={Link}
            to="/register"
            id="fonts"
          />
        </Menu.Menu>
      </Menu>
    );

  return MenuBar;
}

export default MenuBar;
