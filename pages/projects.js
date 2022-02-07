import Head from 'next/head';
import ProjectContent from '../components/ProjectContent';
import axios from 'axios';

export default function Projects({ repos }) {
	return (
		<div className="h-screen flex justify-center items-center">
			<Head>
				<title>Brandon | Projects</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<ProjectContent repos={repos} />
			</main>
		</div>
	);
}

export async function getStaticProps() {
	const res = await axios.get('https://api.github.com/users/bradmccray89/repos');
	const sortedRepos = res.data.sort((a, b) => {
		b.updated_at - a.updated_at;
	});
	const repos = sortedRepos.filter((repo) => {
		return repo.fork === false && repo.private === false;
	});
	repos.length = 6;

	return {
		props: {
			repos,
		},
	};
}
