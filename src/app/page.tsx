import Banner from "@/Components/Homepage/Banner";
import Friends from "@/Components/Homepage/Friends";
import { Suspense } from "react";

export default async function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      <Banner></Banner>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Friends></Friends>
      </Suspense>
    </div>
  );
}
