import './styles/main.css';
import Logo from './assets/Logo.svg';
import Search from './assets/Search.svg';

function App() {
  return (
    <div className="max-w-[1334px] flex flex-col items-center my-20 mx-auto">
      <img src={Logo} />

      <h1 className='text-5xl text-white font-black mt-20'>
        Seu <span className='text-transparent bg-nlw-gradient bg-clip-text'>duo</span> esta aqui.
      </h1>

      <div className='grid grid-cols-6 gap-6 mt-16'>
        <a href='' className='relative rounded-lg overflow-hidden'>
          <img src="/image01.png" />

          <div className='w-full mt-20 pb-6 px-4 bg-game-gradinet absolute bottom-0 left-0 right-0 '>
            <strong className='font-bold text-white block'>League of Legends</strong>
            <span className='text-zinc-300 text-sm block'>4 Anuncios</span>
          </div>

        </a>

        <a href='' className='relative rounded-lg overflow-hidden'>
          <img src="/image02.png" />

          <div className='w-full mt-20 pb-6 px-4 bg-game-gradinet absolute bottom-0 left-0 right-0 '>
            <strong className='font-bold text-white block'>League of Legends</strong>
            <span className='text-zinc-300 text-sm block'>4 Anuncios</span>
          </div>

        </a>
        <a href='' className='relative rounded-lg overflow-hidden'>
          <img src="/image03.png" />

          <div className='w-full mt-20 pb-6 px-4 bg-game-gradinet absolute bottom-0 left-0 right-0 '>
            <strong className='font-bold text-white block'>League of Legends</strong>
            <span className='text-zinc-300 text-sm block'>4 Anuncios</span>
          </div>

        </a>
        <a href='' className='relative rounded-lg overflow-hidden'>
          <img src="/image05.png" />

          <div className='w-full mt-20 pb-6 px-4 bg-game-gradinet absolute bottom-0 left-0 right-0 '>
            <strong className='font-bold text-white block'>League of Legends</strong>
            <span className='text-zinc-300 text-sm block'>4 Anuncios</span>
          </div>

        </a>
        <a href='' className='relative rounded-lg overflow-hidden'>
          <img src="/image06.png" />

          <div className='w-full mt-20 pb-6 px-4 bg-game-gradinet absolute bottom-0 left-0 right-0 '>
            <strong className='font-bold text-white block'>League of Legends</strong>
            <span className='text-zinc-300 text-sm block'>4 Anuncios</span>
          </div>

        </a>
        <a href='' className='relative rounded-lg overflow-hidden'>
          <img src="/image07.png" />

          <div className='w-full mt-20 pb-6 px-4 bg-game-gradinet absolute bottom-0 left-0 right-0 '>
            <strong className='font-bold text-white block'>League of Legends</strong>
            <span className='text-zinc-300 text-sm block'>4 Anuncios</span>
          </div>

        </a>
      </div>

      <div className='pt-1 bg-nlw-gradient self-stretch overflow-hidden mt-8 rounded-lg mx-6'>
      <div className='bg-[#2A2637] px-8 py-6 flex justify-between items-center'>
        <div>
          <strong className='text-2xl text-white font-black block'>Nao encontrou seu duo?</strong>
          <span className='text-zinc-500 block'>Publique um anuncio para encontar novos players!</span>
        </div>

        <button className='py-3 px-4 bg-violet-600 hover:bg-violet-800 text-white rounded flex justify-between items-center'>
          <img src={Search} className='mx-2'/>
          Publicar Anuncio</button>
      </div>
      </div>
    </div>
  )
}

export default App
