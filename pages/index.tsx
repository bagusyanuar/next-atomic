import Layout from '@/components/templates/layout'
import { BannerHero } from '@/components/molecules/banner'
import Categories from '@/components/organisms/categories'
import Technologies from '@/components/organisms/technologies'
import BestSeller from '@/components/organisms/best.seller'

export default function Home() {
  return (
    <main>
      <Layout>
        <BannerHero className='mb-10'/>
        <Categories />
        <Technologies />
        <BestSeller />
      </Layout>
    </main>
  );
}
