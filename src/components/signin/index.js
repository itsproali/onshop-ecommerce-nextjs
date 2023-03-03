import { useSession } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import styles from "./signin.module.scss";
import SignInForm from "./SignInForm";
import SignInSocial from "./SignInSocial";
import SignUpForm from "./SignUpForm";

export default function SignIn({ providers }) {
  const [signUp, setSignUp] = useState(false);

  return (
    <>
      <div className={styles.signin}>
        <div className={styles.signin_back}>
          <button className={styles.circle_btn}>
            <BsArrowLeftShort />
          </button>
          <span>
            We&#39;d be happy to join us! <Link href="/">Go Store</Link>
          </span>
        </div>
        <div className={styles.signin__container}>
          <div className={styles.signin__with_cred}>
            {signUp ? (
              <SignUpForm setSignUp={setSignUp} />
            ) : (
              <SignInForm setSignUp={setSignUp} />
            )}
          </div>
          <div className={styles.signin__social}>
            <SignInSocial providers={providers} />
          </div>
        </div>
      </div>
    </>
  );
}
