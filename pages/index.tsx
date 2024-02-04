import Layout from '@/components/templates/layout'
import { BannerHero } from '@/components/molecules/banner'

export default function Home() {
  return (
    <main>
      <Layout>
        <BannerHero />
        <div></div>
      </Layout>
    </main>
  );
}
