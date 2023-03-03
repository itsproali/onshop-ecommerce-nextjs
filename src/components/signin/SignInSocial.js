import { signIn } from "next-auth/react";
import React from "react";
import styles from "./signin.module.scss";
import Image from "next/image";

export default function SignInSocial({ providers }) {
  console.log(providers);
  return (
    <div>
      <div className={styles.social_buttons}>
        {providers?.map((provider) => (
          <button key={provider.id} className={styles.social_btn} onClick={() => signIn(provider.id)}>
            <Image
              src={`/icons/${provider.name}.png`}
              alt={provider.name}
              width={25}
              height={25}
            />
            <span>Continue with {provider.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
