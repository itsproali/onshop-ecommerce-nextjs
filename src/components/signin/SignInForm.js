import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import styles from "./signin.module.scss";
import { MdOutlineMailOutline, MdLock } from "react-icons/md";
import { BsArrowRight } from "react-icons/bs";

const signInSchema = yup
  .object({
    email: yup
      .string()
      .email("Enter a valid email")
      .required("Email is required"),
    password: yup.string().required("Password is required").min(6, "Password must be at least 6 character"),
  })
  .required();

const SignInForm = () => {
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
        <div className={styles.input}>
          <MdOutlineMailOutline />
          <input {...register("email")} placeholder="Enter your email" />
        </div>
        {errors.email?.message && (
          <p className={styles.input_error}>{errors.email?.message}</p>
        )}

        <div className={styles.input}>
          <MdLock />
          <input {...register("password")} placeholder="Enter your password" />
        </div>
        {errors.password?.message && (
          <p className={styles.input_error}>{errors.password?.message}</p>
        )}
        <div className={styles.submit_btn}>
          <button className={styles.btn_primary} type="submit">
            <span>Sign In</span>
            <BsArrowRight/>
          </button>
        </div>
      </form>
    </>
  );
};

export default SignInForm;
