import Head from 'next/head';
import dynamic from 'next/dynamic';
import axios from 'axios';
import Layout from '../components/Layout';

const ProjectContent = dynamic(() => import('../components/ProjectContent'));

export default function Projects({ repos }) {
	return (
		<div className="h-screen flex justify-center items-center">
			<Head>
				<title>Brandon | Projects</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Layout>
				<ProjectContent repos={repos} />
			</Layout>
		</div>
	);
}

export async function getStaticProps() {
	const res = await axios.get('https://api.github.com/users/bradmccray89/repos');
	const sortedRepos = res.data.sort((a, b) => {
		return new Date(b.updated_at) - new Date(a.updated_at);
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
