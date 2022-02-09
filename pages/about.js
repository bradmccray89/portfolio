import Head from 'next/head';
import AboutContent from '../components/AboutContent';
import Layout from '../components/Layout';

export default function About() {
	return (
		<div className="h-screen w-auto flex justify-center items-center">
			<Head>
				<title>Brandon | About</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Layout>
				<AboutContent />
			</Layout>
		</div>
	);
}
