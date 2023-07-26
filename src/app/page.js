import Image from 'next/image'
import Card from './component/Card';
import PokemonPage from './pages/PokemonPage';

export default function Home() {
  return (
    <main className="min-h-screen items-center justify-between p-24">
      
      {/* <Card/> */}
      <PokemonPage/>
    </main>
  )
}
