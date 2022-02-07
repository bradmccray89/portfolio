import React, { useRef, useState } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';

export default function Navbar() {
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	React.useEffect(() => setMounted(true), []);

	return (
		<>
			<nav className="fixed bg-gray-200 dark:bg-gray-900 flex justify-center items-center flex-wrap py-3 px-10 z-50 h-20 w-full">
				<div className="inline-flex w-1/3">
					<Link href="/">
						<a className="inline-flex items-center p-2">
							<h1 className="text-xl text-gray-600 dark:text-gray-200 font-semibold tracking-widest transistions-all duration-300">
								Brandon McCray
							</h1>
						</a>
					</Link>
				</div>
				<div className="w-1/3 inline-flex justify-center items-center w-full">
					<Link href="/">
						<a className="px-3 py-2 mx-2 rounded text-gray-600 dark:text-gray-200 hover:bg-slate-300 dark:hover:bg-slate-600 transistions-all duration-300">
							Home
						</a>
					</Link>
					<Link href="/about">
						<a className="px-3 py-2 mx-2 rounded text-gray-600 dark:text-gray-200 hover:bg-slate-300 dark:hover:bg-slate-600 transistions-all duration-300">
							About
						</a>
					</Link>
					<Link href="/blog">
						<a className="px-3 py-2 mx-2 rounded text-gray-600 dark:text-gray-200 hover:bg-slate-300 dark:hover:bg-slate-600 transistions-all duration-300">
							Blog
						</a>
					</Link>
					<Link href="/projects">
						<a className="px-3 py-2 mx-2 rounded text-gray-600 dark:text-gray-200 hover:bg-slate-300 dark:hover:bg-slate-600 transistions-all duration-300">
							Projects
						</a>
					</Link>
					<Link href="/contact">
						<a className="px-3 py-2 mx-2 rounded text-gray-600 dark:text-gray-200 hover:bg-slate-300 dark:hover:bg-slate-600 transistions-all duration-300">
							Contact
						</a>
					</Link>
					<Link href="/Brandon_McCray_resume.pdf">
						<a
							className="px-3 py-2 mx-2 rounded text-gray-600 dark:text-gray-200 hover:bg-slate-300 dark:hover:bg-slate-600 transistions-all duration-300"
							target="_blank"
							rel="noopener noreferrer"
						>
							Resume
						</a>
					</Link>
				</div>
				<div className="inline-flex justify-end w-1/3">
					<button
						aria-label="Toggle Dark Mode"
						type="button"
						className="p-3 h-12 w-12 order-2 md:order-3 absolute left-2/4 transform -translate-x-2/4 lg:transform-none md:relative md:left-0"
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
						{/* {isMounted.current && (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								className="h-6 w-6 text-gray-600 dark:text-gray-200 transition-all duration-300 stroke-2"
							>
								{theme === 'dark' ? (
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										fillRule="evenodd"
										d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
										clipRule="evenodd"
									/>
								) : (
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
									/>
								)}
							</svg>
						)} */}
					</button>
				</div>
			</nav>
		</>
	);
}
