import Head from 'next/head';
import Intro from '../components/Intro.js';

export default function Home() {
	return (
		<div className="h-screen flex justify-center items-center">
			<Head>
				<title>Brandon McCray</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Intro />
		</div>
	);
}
