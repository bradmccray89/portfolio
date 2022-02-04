import Head from 'next/head';
import { blogPosts } from '../lib/data';

export default function Home() {
	return (
		<div className="h-screen flex justify-center items-center">
			<Head>
				<title>Brandon McCray</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<h1>My portfolio</h1>
		</div>
	);
}
