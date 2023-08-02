import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button, Link } from "@nextui-org/react";
import { FaUserCircle, FaShoppingCart } from "react-icons/fa"

export const Menu = () => {
  return (
    <Navbar>
      <NavbarBrand>
        <img src="https://klassy.com.bd/public/uploads/settings/general/lrChtKFxC6of10DxZNezmW2eFIejECHWnZglkIHG.png" alt="" />
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-5" justify="center">
        <NavbarItem>
          <a href="/">
            Coupons
          </a>
        </NavbarItem>
        <NavbarItem>
          <a href="/users">
            Users
          </a>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Button className="bg-white" endContent={<FaUserCircle size={20} />}><b>SIGN IN</b></Button>
        </NavbarItem>
        <NavbarItem>
          <Button className="bg-white" endContent={<FaShoppingCart size={20} />}><b>MY CART</b></Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}
