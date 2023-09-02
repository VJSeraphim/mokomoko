import NavbarItem from "./NavbarItem"
// import Logo from "./Logo"
// import Search from "./Search"
// import Categories from "./Categories"

import { BsBell, BsSearch } from 'react-icons/bs'

const Navbar = () => {
    return (
        <nav className="w-full fixed z-40">
            <div
                className="
                    px-4
                    md:px-16
                    py-6
                    flex
                    flex-row
                    items-center
                    transition
                    duration-500
                "
            >
                <img
                    className="h-4 lg:h-7"
                    src="/images/logo.png"
                    alt="logo"
                />
                <div
                    className="
                        flex-row
                        ml-8
                        gap-7
                        hidden
                        lg:flex
                    "
                >
                    <NavbarItem label="Home"/>
                    <NavbarItem label="Series"/>
                    <NavbarItem label="Files"/>
                    <NavbarItem label="New & Popular"/>
                    <NavbarItem label="My List"/>
                    <NavbarItem label="Browse by Languages"/>
                </div>
                <div className="flex flex-row ml-auto gap-7 items-center">
                    <div className="text-gray-300 hover:text-gray-500 cursor-pointer transition">
                        <BsSearch />
                    </div>
                    <div className="text-gray-300 hover:text-gray-500 cursor-pointer transition">
                        <BsBell />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar