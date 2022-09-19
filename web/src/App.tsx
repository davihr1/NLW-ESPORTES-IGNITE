import { useState, useEffect } from 'react';
import * as Dialog from '@radix-ui/react-dialog';

import './styles/main.css';
import Logo from './assets/Logo.svg';
import { CreatAtBanner } from './components/CreateAtBanner';
import { CreateAtModal } from './components/CreateAtMofdal';
import axios from 'axios';

import GameBannerTest from './components/GameBannerSlide/App.test';
import GameBannerSlide from './components/GameBannerSlide';

export interface Game {
  id: string;
  title: string;
  bannerURL: string;
  _count: {
    ads: number;
  }
}

function App() {
  return (
    <div className="max-w-[1334px] flex flex-col items-center my-20 mx-auto">
      <img src={Logo} />

      <h1 className='text-5xl text-white font-black mt-20'>
        Seu <span className='text-transparent bg-nlw-gradient bg-clip-text'>duo</span> esta aqui.
      </h1>

        <GameBannerTest />

      <Dialog.Root>
        <CreatAtBanner />

        <CreateAtModal />
      </Dialog.Root>

    </div>
  )
}

export default App
