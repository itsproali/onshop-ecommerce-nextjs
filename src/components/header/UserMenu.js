import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import {
  list_item, user_info, user_info__details, user_info__img, user_menu, user_menu__list
} from "./header.module.scss";

export default function UserMenu({ user, setOpen }) {
  return (
    <div className={user_menu} onMouseLeave={() => setOpen(false)}>
      <div className={user_info}>
        <div className={user_info__img}>
          <Image
            src={user?.image || "/images/bd_flag.png"}
            alt="user"
            width={55}
            height={55}
          />
        </div>
        <div className={user_info__details}>
          <h3>{user?.name}</h3>
          <p>{user?.email}</p>
        </div>
      </div>
      <div className={user_menu__list}>
        <Link href="/" className={list_item}>
          My Account
        </Link>
        <Link href="/" className={list_item}>
          My Orders
        </Link>
        <Link href="/" className={list_item}>
          My Wishlist
        </Link>
        <button className={list_item} onClick={() => signOut()}>
          Logout
        </button>
      </div>
    </div>
  );
}
