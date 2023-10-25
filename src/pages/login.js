import { Button } from "antd";
import { GoogleOutlined, GithubOutlined } from "@ant-design/icons";
import Head from "next/head";
import styles from "@/styles/Login.module.css";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";



const LoginPage = () => {


  // react hook form 
  const {
    register,
    handleSubmit
  } = useForm()

  const onSubmit = (data) => console.log(data)

  return (
    <div>
      <Head>
        <title>Next Login</title>
      </Head>
      <div className={styles.form}>
        <h3>LOGIN</h3>
        <div className={styles.social_icons}>
          <GoogleOutlined onClick={()=>signIn("google", {
            callbackUrl: "http://localhost:3000/"
          })}/>


          <GithubOutlined onClick={()=>signIn("github", {
            callbackUrl: "http://localhost:3000/"
          })}/>
        </div>
        <hr />

        {/* react hook form  */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="">Your Email</label>
          <input type="email" {...register("email", { required: true })}/>
          <label htmlFor="">Your Password</label>
          <input type="password" {...register("password", { required: true })}/>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
