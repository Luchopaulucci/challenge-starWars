import {Navbar, NavbarBrand, NavbarContent, NavbarItem, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar} from "@nextui-org/react";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar className="bg-black p-0">
      <NavbarBrand>
        <Link className="font-bold text-inherit text-white text-3xl" to="/">Star Wars</Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex" justify="center">
        <NavbarItem>
          <Link to="films" className='text-white'>
            Films
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link to="characters" aria-current="page" className='text-red-500'>
            Characters
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link to="starships" className='text-white'>
            Starships
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent as="div" justify="end">
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="default"
              size="sm"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="settings">UPCOMING SOON</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  )
}

export default Header