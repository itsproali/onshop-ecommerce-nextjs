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

const navRight = [
  // {
  //   label: "Bangladesh / bdt",
  //   link: "/",
  //   icon: <Image src="/images/bd_flag.png" alt="bd" width={30} height={30} />,
  // },
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
  const [open, setOpen] = useState(false);
  const [country, setCountry] = useState({});

  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const key = process.env.IP_REGISTRY_KEY;


  // Get country Details
  useEffect(() => {
    const getCountry = async () => {
      try {
        const { data } = await axios.get(
          `https://api.ipregistry.co/?key=${key}`
        );
        setCountry({
          name: data?.location?.country?.name,
          flag: data?.location?.country?.flag?.emojitwo,
          currency: data?.currency?.code,
        });
      } catch (err) {
        console.log(err);
      }
    };
    getCountry();
  }, [key]);

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
              {user?.email ? (
                <button className={account_btn} onClick={() => setOpen(!open)}>
                  <RiAccountPinCircleLine />
                  <span>Account</span>
                  <RiArrowDropDownFill />
                </button>
              ) : (
                <button
                  className={btn_primary}
                  onClick={() =>
                    dispatch(
                      login({
                        name: "Mohammad Ali",
                        email: "itsproali@gmail.com",
                      })
                    )
                  }
                >
                  <span>Get Started</span>
                </button>
              )}
            </div>
            {/* Show the user menu */}
            {open && <UserMenu user={user} setOpen={setOpen} />}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
