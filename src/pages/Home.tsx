import { Suspense } from "react";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Technologies from "../components/Technologies";
import type { technologiesDataType } from "../types/technologiesType";

const technologies_fetch = async (): Promise<technologiesDataType[]> => {
  const res = await fetch("./stackData.json");
  const data = await res.json();
  return data;
};

function Home() {
  const technologies_info = technologies_fetch();
  return (
    <>
      <Header />
      <Banner />
      <Suspense fallback={<h1>loading...</h1>}>
        <Technologies technologies_info={technologies_info} />
      </Suspense>
      <Footer />
    </>
  );
}

export default Home;
