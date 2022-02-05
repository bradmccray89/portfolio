import Head from 'next/head';
import AboutContent from '../components/AboutContent';

export default function About() {
	return (
		<div className="h-screen flex justify-center items-center">
			<Head>
				<title>Brandon | About</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<AboutContent />
			</main>
		</div>
	);
}
