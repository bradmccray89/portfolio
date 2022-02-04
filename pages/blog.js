import Head from 'next/head';

export default function Blog() {
	return (
		<div className="h-screen flex justify-center items-center">
			<Head>
				<title>Brandon | Blog</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<h1>Blog</h1>
			</main>
		</div>
	);
}
