import Head from "next/head";
import { useSession } from "next-auth/react"
import auth from "@/firebase/firebase.auth";
import { useAuthState } from 'react-firebase-hooks/auth';


const HomePage = () => {

  // next auth 
  const {data:session} = useSession();


  // firebase hooks 
  const [user, loading, error] = useAuthState(auth);

  // console.log("from home", user)


  return (
    <div>
      <Head>
        <title>Next Auth</title>
      </Head>
      <h1 style={{ textAlign: "center", marginTop:"10%" }}>Welcome To Next Auth Home Page</h1>
      <div style={{ textAlign: "center", marginTop:"10%" }}>
        <h1>LogIn User Information</h1>
        <h2>{session?.user?.name}</h2>
        <p>{session?.user?.email}</p>
        {
          user?.name &&
          <h2>{user?.name}</h2>
        }
        {
          user?.email &&
          <p>{user?.email}</p>
        }
      </div>
    </div>
  );
};

export default HomePage;
