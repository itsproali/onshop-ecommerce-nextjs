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
  account_btn,
  btn_primary,
} from "./header.module.scss";
import { useEffect, useState } from "react";
import UserMenu from "./UserMenu";
import { useDispatch, useSelector } from "react-redux";
import { login } from "@/features/auth/authSlice";
import axios from "axios";
import {useSession, signIn} from "next-auth/react";

const navRight = [
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
];

const Header = () => {
  const {data: session} = useSession();
  const [open, setOpen] = useState(false);
  const [country, setCountry] = useState({
    flag: "/images/bd_flag.png",
    name: "Bangladesh",
    currency: "bdt",
  });

  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  // const key = process.env.IP_REGISTRY_KEY;

  // Get country Details
  // useEffect(() => {
  //   const getCountry = async () => {
  //     try {
  //       const { data } = await axios.get(
  //         `https://api.ipregistry.co/?key=${key}`
  //       );
  //       setCountry({
  //         name: data?.location?.country?.name,
  //         flag: data?.location?.country?.flag?.emojitwo,
  //         currency: data?.currency?.code,
  //       });
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   getCountry();
  // }, [key]);

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
              <div className={nav__link}>
                <Image
                  src={country?.flag}
                  alt="country"
                  width={30}
                  height={30}
                />
                <span>
                  {country?.name} &#47; {country?.currency}
                </span>
              </div>
              {navRight.map((item, index) => (
                <Link key={index} href={item.link} className={nav__link}>
                  {item?.icon}
                  {item.label && <span>{item.label}</span>}
                </Link>
              ))}
              {session?.user ? (
                <button className={account_btn} onClick={() => setOpen(!open)}>
                  {/* <RiAccountPinCircleLine /> */}
                  <Image src={session?.user?.image} alt={session?.user?.name} width={30} height={30} style={{borderRadius: "50%"}} />
                  <span>{session?.user?.name}</span>
                  <RiArrowDropDownFill />
                </button>
              ) : (
                <button
                  className={btn_primary}
                  onClick={() => signIn()}
                >
                  <span>Get Started</span>
                </button>
              )}
            </div>
            {/* Show the user menu */}
            {open && <UserMenu user={session?.user} setOpen={setOpen} />}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
