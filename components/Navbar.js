import React, { useRef, useState } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';

export default function Navbar() {
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);
	const navigationMobileRef = useRef(null);
	const [mobileNavOpen, setMobileNavOpen] = useState(false);

	const toggleMobileNavigation = () => {
		navigationMobileRef.current.classList.add('touched');
		navigationMobileRef.current.classList.toggle('translate-x-full');
		setMobileNavOpen(!mobileNavOpen);
	};

	React.useEffect(() => setMounted(true), []);

	const renderNavigationItems = () => {
		return (
			<>
				<Link href="/">
					<a className="w-full flex justify-center px-3 py-2 mx-2 rounded text-gray-600 dark:text-gray-200 hover:bg-slate-300 dark:hover:bg-slate-600 transistions-all duration-300">
						Home
					</a>
				</Link>
				<Link href="/about">
					<a className="w-full flex justify-center px-3 py-2 mx-2 rounded text-gray-600 dark:text-gray-200 hover:bg-slate-300 dark:hover:bg-slate-600 transistions-all duration-300">
						About
					</a>
				</Link>
				<Link href="/projects">
					<a className="w-full flex justify-center px-3 py-2 mx-2 rounded text-gray-600 dark:text-gray-200 hover:bg-slate-300 dark:hover:bg-slate-600 transistions-all duration-300">
						Projects
					</a>
				</Link>
				<Link href="/contact">
					<a className="w-full flex justify-center px-3 py-2 mx-2 rounded text-gray-600 dark:text-gray-200 hover:bg-slate-300 dark:hover:bg-slate-600 transistions-all duration-300">
						Contact
					</a>
				</Link>
				<Link href="/Brandon_McCray_resume.pdf">
					<a
						className="w-full flex justify-center px-3 py-2 mx-2 rounded text-gray-600 dark:text-gray-200 hover:bg-slate-300 dark:hover:bg-slate-600 transistions-all duration-300"
						target="_blank"
						rel="noopener noreferrer"
					>
						Resume
					</a>
				</Link>
			</>
		);
	};

	return (
		<nav className="fixed bg-gray-200 dark:bg-gray-900 flex justify-center items-center flex-wrap py-3 px-5 sm:px-10 z-50 h-20 w-full">
			<div className="inline-flex w-1/3 order-1">
				<Link href="/">
					<a className="inline-flex justify-center items-center">
						<h1 className="text-xl text-gray-600 dark:text-gray-200 font-semibold tracking-widest transistions-all duration-300">
							Brandon McCray
						</h1>
					</a>
				</Link>
			</div>
			<div className="w-1/3 inline-flex justify-center items-center w-full order-3 lg:order-2 z-10">
				<ul className="hidden lg:flex lg:gap-6">{renderNavigationItems()}</ul>
				<ul
					ref={navigationMobileRef}
					className={`lg:hidden absolute flex flex-col w-full top-20 right-0 py-3 items-center text-white bg-gray-200 dark:bg-gray-900 transform translate-x-full gap-2 ${
						mounted ? 'transition-transform' : ''
					}`}
					onClick={toggleMobileNavigation}
				>
					{renderNavigationItems()}
				</ul>
				<button
					className="inline-flex p-3 text-gray-600 dark:text-gray-200 rounded-lg lg:hidden ml-auto outline-none transition-all duration-300"
					aria-label="Toggle mobile menu"
					type="button"
					onClick={toggleMobileNavigation}
				>
					{mobileNavOpen ? (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					) : (
						<svg
							className="w-6 h-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M4 6h16M4 12h16M4 18h16"
							/>
						</svg>
					)}
				</button>
			</div>
			<div className="inline-flex justify-center lg:justify-end w-1/3 order-2 lg:order-3">
				<button
					aria-label="Toggle Dark Mode"
					type="button"
					className="p-3 h-12 w-12 relative lg:transform-none md:relative md:left-0"
					onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
				>
					{mounted && (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							stroke="currentColor"
							className="h-6 w-6 text-gray-800 dark:text-gray-200"
						>
							{theme === 'dark' ? (
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
								/>
							) : (
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
								/>
							)}
						</svg>
					)}
				</button>
			</div>
		</nav>
	);
}
