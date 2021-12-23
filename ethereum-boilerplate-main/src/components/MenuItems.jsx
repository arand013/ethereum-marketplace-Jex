import { useLocation } from "react-router";
import { Menu } from "antd";
import { NavLink } from "react-router-dom";

function MenuItems() {
  const { pathname } = useLocation();

  return (
    <Menu
      theme="light"
      mode="horizontal"
      style={{
        display: "flex",
        fontSize: "17px",
        fontWeight: "500",
        width: "100%",
        justifyContent: "center",
      }}
      defaultSelectedKeys={[pathname]}
    >
      <Menu.Item key="/Explore">
        <NavLink to="/Explore">🚀 Explore</NavLink>
      </Menu.Item>
  
      <Menu.Item key="/NFTCollection">
        <NavLink to="/NFTCollection">🖼 NFTs</NavLink>
      </Menu.Item>
      

      <Menu.Item key="/Transactions">
        <NavLink to="/Transactions">💸 Transactions</NavLink>
      </Menu.Item>

      <Menu.Item key="/ERC20Balance">
        <NavLink to="/ERC20Balance">💸 Balance</NavLink>
      </Menu.Item>

     

  
    </Menu>
  );
}

export default MenuItems;
