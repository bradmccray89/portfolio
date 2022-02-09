import Head from 'next/head';
import Intro from '../components/Intro.js';
import Layout from '../components/Layout.js';

export default function Home() {
	return (
		<div className="h-screen flex justify-center items-center">
			<Head>
				<title>Brandon McCray</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Layout>
				<Intro />
			</Layout>
		</div>
	);
}
