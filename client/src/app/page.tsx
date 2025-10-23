import ProdcuctList from "@/components/ProdcuctList";
import Image from "next/image";

const Homepage = async ({
  searchParams,
}: {
  searchParams: Promise<{ category: string }>;
}) => {
  const category = (await searchParams).category;
  return (
    <div className="">
      <div className="relative aspect-[3/1] mb-12">
        <Image src="/featured.png" alt="featured" fill />
      </div>
      <ProdcuctList category={category} params="homepage" />
    </div>
  );
};

export default Homepage;
