import Head from 'next/head';

export default function Blog() {
	return (
		<div className="h-screen flex justify-center items-center">
			<Head>
				<title>Brandon | Blog</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="flex flex-col items-center justify-center">
				<h1>This page is still in progress.</h1>
				<br />
				<h1>Come back later to see what it has to offer.</h1>
			</main>
		</div>
	);
}
