import { useSession } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import styles from "./signin.module.scss";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";

export default function SignIn() {
  const [signUp, setSignUp] = useState(false);

  return (
    <>
      <div className={styles.form_wrapper}>
        <div className={styles.signin_back}>
          <button className={styles.circle_btn}>
            <BsArrowLeftShort />
          </button>
          <span>
            We&#39;d be happy to join us! <Link href="/">Go Store</Link>
          </span>
        </div>
        {signUp ? <SignUpForm /> : <SignInForm />}
      </div>
    </>
  );
}
