import type { NextPage } from "next";
import Image from "next/image";

import desktopDivider from "../public/pattern-divider-desktop.svg";
import diceIcon from "../public/icon-dice.svg";
import { useState } from "react";
import { server } from "../config";

const Home: NextPage = ({ initSlip }: any) => {
    const [slip, setSlip] = useState({
        id: initSlip.id,
        advice: initSlip.advice,
    });

    const adviceFetcher = async () => {
        const result = await fetch(`${server}/api/slip`);
        const data = await result.json();
        setSlip(data);
    };

    const handleClick = () => {
        adviceFetcher();
    };

    return (
        <div className='flex justify-center items-center h-screen bg-dark-blue'>
            <main className='flex flex-col justify-center items-center ml-4 mr-4 bg-dark-grayish-blue rounded-xl min-h-fit max-w-1/2 p-8 relative'>
                <p className='uppercase text-neon-green font-bold tracking-widest text-xs'>Advice #{slip.id}</p>
                <h3 className='text-light-cyan mt-6 mb-6 font-bold text-3xl text-center tracking-tight'>
                    {slip.advice}
                </h3>
                <div className='mb-6'>
                    <Image src={desktopDivider} alt='divider' />
                </div>
                <button
                    className='absolute -bottom-9 overflow-y-visible bg-neon-green p-6 rounded-full flex items-center justify-center hover:shadow-3xl'
                    onClick={handleClick}
                >
                    <Image src={diceIcon} alt='dice icon' />
                </button>
            </main>
        </div>
    );
};

export default Home;

export const getStaticProps = async () => {
    const res = await fetch("https://api.adviceslip.com/advice");
    const initSlip = await res.json();

    return {
        props: {
            initSlip,
        },
    };
};
