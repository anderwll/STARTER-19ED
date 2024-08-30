import { Banner } from '../components/Banner';
import { Gallery } from '../components/Gallery';
import { NavBar } from '../components/NavBar';
import { SectionCards } from '../components/SectionCards';
import { Divider } from '../components/styleds/Divider';
import { navigations } from '../config/navigations/navigation';

export function Home() {
  return (
    <>
      <NavBar navigations={navigations} />

      <Banner />
      <SectionCards />
      <Divider />
      <Gallery />
      <Divider />
    </>
  );
}
