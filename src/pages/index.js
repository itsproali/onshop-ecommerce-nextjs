import Header from "@/components/header";
import axios from "axios";

export default function Home() {
  return (
    <>
      <Header  />
    </>
  );
}

// export async function getServerSideProps() {
//   const { data } = await axios
//     .get(`https://api.ipregistry.co/?key=${process.env.IP_REGISTRY_KEY}`)
//     .catch((err) => {
//       console.log(err);
//     });

//   return {
//     props: {
//       country: {
//         name: data?.location?.country?.name,
//         flag: data?.location?.country?.flag?.emojitwo ,
//         currency: data?.currency?.code,
//       },
//     },
//   };
// }
