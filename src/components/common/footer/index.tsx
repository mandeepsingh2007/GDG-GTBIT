import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-[#232323] ">
            <div className="mx-auto max-w-screen-xl w-full p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <Image
                            src="/Logos/gdgLogo.png"
                            alt="GDG Logo"
                            className=' mb-4'
                            width={50}
                            height={50}
                        />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-white my-4">GDG GTBIT</span>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-5 justify-items-center">
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Achievements</h2>          
                            <Link href={'/team'} className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Team</Link>
                            <Link href={'/resources'} className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</Link>
                            <Link href={'/projects'} className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Projects</Link>
                            <Link href={'/events'} className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Events</Link>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                        © 2024 GDG GTBIT All Rights Reserved.
                    </span>
                    <div className="flex mt-4 sm:justify-center sm:mt-0">
                        <a href="https://www.instagram.com/gdggtbit/" target='_blank' className="text-gray-500 hover:text-gray-900 dark:hover:text-white ml-5">
                            <Image src="Icons/Instagram.svg" alt="Facebook" width={30} height={30} />
                            <span className="sr-only">Instagram</span>
                        </a>
                        <a href="https://www.linkedin.com/company/gdscgtbit/mycompany/" target='_blank' className="text-gray-500 hover:text-gray-900 dark:hover:text-white ml-5">
                            <Image src="Icons/linkedin.svg" alt="Facebook" width={30} height={30} />
                            <span className="sr-only">LinkedIn</span>
                        </a>
                        <a href="https://x.com/gdscgtbit" target='_blank'  className="text-gray-500 hover:text-gray-900 dark:hover:text-white ml-5">
                            <Image src="Icons/twitter.svg" alt="Facebook" width={30} height={30} />
                            <span className="sr-only">Twitter</span>
                        </a>
                        <a href="https://github.com/gdg-gtbit/" target='_blank'  className="text-gray-500 hover:text-gray-900 dark:hover:text-white ml-5">
                            <Image src="Icons/github.svg" alt="Facebook" width={32} height={32} />
                            <span className="sr-only">Github</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
