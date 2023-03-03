import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import styles from "./signin.module.scss";
import { MdOutlineMailOutline, MdLock } from "react-icons/md";
import { FiUser } from "react-icons/fi";
import { BsArrowRight, BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { useState } from "react";

const signUpSchema = yup.object({
  full_name: yup
    .string()
    .required("Name is required")
    .min(2, "Name should be at least 2 characters")
    .matches(/^[aA-zZ]/, "Number & special characters are not allowed"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 character"),
  conf_password: yup
    .string()
    .required("Re-type the password")
    .oneOf([yup.ref("password")], "Password didn't match"),
});

const SignUpForm = ({ setSignUp }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfPassword, setShowConfPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signUpSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Name */}
        <div className={styles.input}>
          <FiUser />
          <input {...register("full_name")} placeholder="Full Name" />
        </div>
        {errors.full_name?.message && (
          <p className={styles.input_error}>{errors.full_name?.message}</p>
        )}

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
            <BsEyeFill onClick={() => setShowPassword(!showPassword)} />
          ) : (
            <BsEyeSlashFill onClick={() => setShowPassword(!showPassword)} />
          )}
        </div>
        {errors.password?.message && (
          <p className={styles.input_error}>{errors.password?.message}</p>
        )}

        {/* Password */}
        <div className={styles.input}>
          <MdLock />
          <input
            {...register("conf_password")}
            placeholder="Re-type password"
            type={showConfPassword ? "text" : "password"}
          />

          {showConfPassword ? (
            <BsEyeFill onClick={() => setShowConfPassword(!showConfPassword)} />
          ) : (
            <BsEyeSlashFill
              onClick={() => setShowConfPassword(!showConfPassword)}
            />
          )}
        </div>
        {errors.conf_password?.message && (
          <p className={styles.input_error}>{errors.conf_password?.message}</p>
        )}

        <p className={styles.swap_signin}>
          Already have an account?{" "}
          <button onClick={() => setSignUp(false)}>SignIn</button>
        </p>

        <div className={styles.submit_btn}>
          <button className={styles.btn_primary} id="submit" type="submit">
            <span>Sign Up</span>
            <BsArrowRight />
          </button>
        </div>
      </form>
    </>
  );
};

export default SignUpForm;
