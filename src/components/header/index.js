import Link from "next/link";
import Image from "next/image";
import { MdSecurity } from "react-icons/md";
import { BsSuitHeart } from "react-icons/bs";
import {
  RiAccountPinCircleLine,
  RiArrowDropDownFill,
  RiInformationFill,
} from "react-icons/ri";
import {
  header,
  ad,
  nav,
  nav__container,
  nav__left,
  nav__right,
  nav__link,
} from "./header.module.scss";

const Header = () => {
  const navRight = [
    {
      label: "Bangladesh / bdt",
      link: "/",
      icon: <Image src="/images/bd_flag.png" alt="bd" width={30} height={30}  />,
    },
    {
      label: "Buyer Protection",
      link: "/",
      icon: <MdSecurity />,
    },
    {
      label: "Customer Service",
      link: "/",
    },
    {
      label: "Help",
      link: "/",
      icon: <RiInformationFill />,
    },
    {
      label: "Wishlist",
      link: "/",
      icon: <BsSuitHeart />,
    },
    {
      label: "Account",
      link: "/",
      icon: <RiAccountPinCircleLine />,
      icon2: <RiArrowDropDownFill />,
    },
  ];
  return (
    <>
      <header className={header}>
        {/* Ad */}
        <div className={ad}>
          <Link href="/" />
        </div>

        {/* Nav Menu */}
        <div className={nav}>
          <div className={nav__container}>
            <div className={nav__left}>
              <Link href="/">
                <h2>OnShop</h2>
              </Link>
            </div>

            <div className={nav__right}>
              {navRight.map((item, index) => (
                <Link key={index} href={item.link} className={nav__link}>
                  {item?.icon}
                  {item.label && <span>{item.label}</span>}
                  {item?.icon2}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
