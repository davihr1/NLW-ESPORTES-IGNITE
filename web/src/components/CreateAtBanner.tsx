import Search from './../assets/Search.svg';
import * as Dialog from '@radix-ui/react-dialog';


export function CreatAtBanner() {
    return (
        <div className='pt-1 bg-nlw-gradient self-stretch overflow-hidden mt-8 rounded-lg mx-6'>
            <div className='bg-[#2A2637] px-8 py-6 flex justify-between items-center'>
                <div>
                    <strong className='text-2xl text-white font-black block'>Nao encontrou seu duo?</strong>
                    <span className='text-zinc-500 block'>Publique um anuncio para encontar novos players!</span>
                </div>

                <Dialog.Trigger className='py-3 px-4 bg-violet-600 hover:bg-violet-800 text-white rounded flex justify-between items-center'>
                    <img src={Search} className='mx-2' />
                    Publicar Anuncio
                </Dialog.Trigger>
            </div>
        </div>
    );
}