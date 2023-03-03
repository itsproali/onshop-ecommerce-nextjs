import Header from "@/components/header";
import SignIn from "@/components/signin";
import { getProviders, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function SignInPage({ providers }) {
  const router = useRouter();
  const {data: session} = useSession();
  useEffect(() => {
    if(session?.user) {
      router.push("/");
    }
  }, [router, session?.user]);

  return (
    <>
      <Header />
      <SignIn providers={providers} />
    </>
  );
}

// Get Sign-in providers
export async function getServerSideProps(context) {
  const providers = await getProviders();
  return {
    props: { providers: Object.values(providers) },
  };
}
