import Link from "next/link";
import {
  user_menu,
  user_info,
  user_info__img,
  user_info__details,
  user_menu__list,
  list_item
} from "./header.module.scss";
import Image from "next/image";
import {useDispatch } from "react-redux";
import { logout } from "@/features/auth/authSlice";

export default function UserMenu({user, setOpen}) {
  const dispatch = useDispatch();
  return (
    <div className={user_menu} onMouseLeave={() => setOpen(false)}>
      <div className={user_info}>
        <div className={user_info__img}>
          <Image src="/images/bd_flag.png" alt="user" width={55} height={55} />
        </div>
        <div className={user_info__details}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
      </div>
      <div className={user_menu__list}>
        <Link href="/" className={list_item}>My Account</Link>
        <Link href="/" className={list_item}>My Orders</Link>
        <Link href="/" className={list_item}>My Wishlist</Link>
        <button className={list_item} onClick={() => dispatch(logout())}>Logout</button>
      </div>
    </div>
  );
}
