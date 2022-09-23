import { useState, useEffect } from 'react';
import { motion } from "framer-motion";

import * as Dialog from '@radix-ui/react-dialog';

import './styles/main.css';
import Logo from './assets/Logo.svg';
import { CreatAtBanner } from './components/CreateAtBanner';
import { CreateAtModal } from './components/CreateAtMofdal';
import axios from 'axios';

import GameBannerTest from './components/Slide/App.test';
import GameBannerSlide from './components/Slide';

export interface Game {
  id: string;
  title: string;
  bannerURL: string;
  _count: {
    ads: number;
  }
}

const item = {
  hidden: { y: 900, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  },
  transition: {
    delayChildren: 0.9,
    staggerChildren: 0.9
  }
};

function App() {
  return (
    <div className="max-w-[1334px] flex flex-col items-center my-20 mx-auto">
      <motion.img src={Logo} variants={item}
        initial="hidden"
        animate="visible" />

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
