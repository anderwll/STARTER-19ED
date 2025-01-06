import { Banner } from '../components/Banner';
import { Gallery } from '../components/Gallery';
import { SectionCards } from '../components/SectionCards';
import { Divider } from '../components/styleds/Divider';
import { DefaultLayout } from '../config/layouts/DefaultLayout';

export function Home() {
  return (
    <DefaultLayout>
      <Banner />
      <SectionCards />
      <Divider />
      <Gallery />
    </DefaultLayout>
  );
}
