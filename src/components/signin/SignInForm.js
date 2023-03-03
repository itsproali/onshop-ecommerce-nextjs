import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import styles from "./signin.module.scss";
import { MdOutlineMailOutline, MdLock } from "react-icons/md";
import { BsArrowRight, BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { useState } from "react";

const signInSchema = yup.object({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 character"),
});

const SignInForm = ({ setSignUp }) => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signInSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <>
      <h2>Sign in</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Email */}
        <div className={styles.input}>
          <MdOutlineMailOutline />
          <input {...register("email")} placeholder="Enter your email" />
        </div>
        {errors.email?.message && (
          <p className={styles.input_error}>{errors.email?.message}</p>
        )}

        {/* Password */}
        <div className={styles.input}>
          <MdLock />
          <input
            {...register("password")}
            placeholder="Enter your password"
            type={showPassword ? "text" : "password"}
          />

          {showPassword ? (
            <BsEyeFill onClick={() => setShowPassword((prev) => !prev)} />
          ) : (
            <BsEyeSlashFill onClick={() => setShowPassword((prev) => !prev)} />
          )}
        </div>
        {errors.password?.message && (
          <p className={styles.input_error}>{errors.password?.message}</p>
        )}

        <p className={styles.swap_signin}>
          Don&#39;t have an account?{" "}
          <button onClick={() => setSignUp(true)}>Create Account</button>
        </p>

        <div className={styles.submit_btn}>
          <button className={styles.btn_primary} type="submit">
            <span>Sign In</span>
            <BsArrowRight />
          </button>
        </div>
      </form>
    </>
  );
};

export default SignInForm;
