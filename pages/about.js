import Head from 'next/head';

export default function About() {
	return (
		<div className="h-screen flex justify-center items-center">
			<Head>
				<title>Brandon | About</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<h1>About</h1>
			</main>
		</div>
	);
}
