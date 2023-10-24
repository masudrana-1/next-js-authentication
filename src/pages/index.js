import Head from "next/head";
import { useSession } from "next-auth/react"


const HomePage = () => {

  // next auth 
  const {data:session} = useSession();


  return (
    <div>
      <Head>
        <title>Next Auth</title>
      </Head>
      <h1 style={{ textAlign: "center", marginTop:"10%" }}>Welcome To Next Auth Home Page</h1>
      <div style={{ textAlign: "center", marginTop:"10%" }}>
        <h1>LogIn User</h1>
        <h2>Your Name: {session?.user?.name}</h2>
        <p>Your Name: {session?.user?.email}</p>
      </div>
    </div>
  );
};

export default HomePage;
