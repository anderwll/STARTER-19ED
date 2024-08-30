import { Banner } from "../components/Banner";
import { Gallery } from "../components/Gallery";
import { SectionCards } from "../components/SectionCards";
import { Divider } from "../components/styleds/Divider";

export function Home() {
  return (
    <>
      <Banner />

      <SectionCards />
      <Divider />

      <Gallery />
      <Divider />
    </>
  );
}
