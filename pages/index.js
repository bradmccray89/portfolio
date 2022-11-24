import Head from 'next/head';
import dynamic from 'next/dynamic';
import Layout from '../components/Layout.js';
const Intro = dynamic(() => import('../components/Intro.js'));

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
