"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faBars } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import logo from "@images/logo.svg";
import MunuList from "../menu/menu-list";
import MenuSearch from "../menu/menu-search";
import MenuMobile from "../menu/menu-mobile";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Header() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const pathname = usePathname();
  const toggleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  const [isOpenSearch, setIsSearch] = useState(false);
  const toggleSearch = () => {
    setIsSearch(!isOpenSearch);
  };

  useEffect(() => {
    setIsSearch(false);
    setIsOpenMenu(false);
  }, [pathname]);

  return (
    <>
      <header className="sticky top-0 z-10 bg-white py-4 shadow-md">
        <nav className="container mx-auto flex w-full items-center lg:px-3 xl:px-0">
          <button
            className="mx-5 flex items-center lg:hidden"
            onClick={toggleMenu}
            id="hamburger-button"
          >
            <FontAwesomeIcon icon={faBars} className="size-4" />
          </button>
          <Link href="/">
            <Image src={logo} alt="logo" />
          </Link>
          <ul className="hidden w-full justify-evenly underline-offset-4 *:text-primary lg:flex hover:[&_a]:underline">
            <MunuList />
          </ul>
          <button
            className="mx-4 flex h-[2rem] w-full items-center rounded-lg border-2 border-gray-200 bg-gray-50 px-2 py-1 text-start text-gray-400 hover:cursor-pointer hover:border-primary lg:mx-0 lg:w-1/4"
            onClick={toggleSearch}
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} className="ms-1 size-4" />
            <span className="ms-3 text-sm">ค้นหาสินค้า...</span>
          </button>
        </nav>

        <MenuMobile toggleMenu={toggleMenu} isOpenMenu={isOpenMenu} />
        <MenuSearch toggleSearch={toggleSearch} isOpenSearch={isOpenSearch} />
      </header>
    </>
  );
}
