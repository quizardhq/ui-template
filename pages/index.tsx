import HomePage from '@/components/ui/organisms/Home';
import HomeLayout from '@/layouts/HomeLayout';
import MetaTag from '@/components/ui/atoms/MetaTag';

export default function Home() {
  return (
    <HomeLayout>
      <MetaTag title="Home" description="" url="/" />
      <HomePage />
    </HomeLayout>
  );
}
