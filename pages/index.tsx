import { NavbarLink } from '@/components/atoms/link'
import { NavbarButton } from '@/components/atoms/button'

export default function Home() {
  return (
    <main>
      <NavbarLink text='Link' to='#' />
      <NavbarButton icon='bx-user' />
    </main>
  );
}
