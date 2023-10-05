import { Navbar, NavbarBrand, NavbarContent, NavbarItem, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar } from "@nextui-org/react";
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
          <Link to="characters" className='text-red-500'>
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
            <DropdownItem key="upcoming" className="hidden sm:block">Upcoming Soon 😢</DropdownItem>
            <DropdownItem key="films" className="w-full block sm:hidden">
              <Link to="films" className="w-full block">
                Films
              </Link>
            </DropdownItem>
            <DropdownItem key="characters" className="w-full block sm:hidden">
              <Link to="characters" className="w-full block">
                Characters
              </Link>
            </DropdownItem>
            <DropdownItem key="starships" className="w-full block sm:hidden">
              <Link to="starships" className="w-full block">
                Starships
              </Link>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>

    </Navbar>
  )
}

export default Header