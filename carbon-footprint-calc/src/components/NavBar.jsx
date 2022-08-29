import { Layout, Menu } from "antd";
import { Link, useLocation } from "react-router-dom";
import CarbonCalcLogo from "../assets/carbon-calc-logo.png";
import { ROUTES } from "../constants/routes";

const { Header } = Layout;

export const NavBar = () => {
  const keyRoute = {
    "/house": "House Impact",
    "/food": "Food Impact",
  };
  const { pathname } = useLocation();
  const currentPage = keyRoute[pathname];

  return (
    <Header>
      <div className="logo">
        <img className="logo-img" src={CarbonCalcLogo} alt="logo" />
      </div>
      <Menu theme="dark" mode="horizontal" selectedKeys={[currentPage]}>
        <Menu.Item key="House Impact">
          <Link to={ROUTES.houseImpact}>House Impact</Link>
        </Menu.Item>
        <Menu.Item key="Food Impact">
          <Link to={ROUTES.foodImpact}>Food Impact</Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
};
