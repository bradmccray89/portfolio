export default function Projects({ repos }) {
	console.log(repos);
	return (
		<div className="h-[28rem] w-full flex justify-center items-center">
			<h1>Projects</h1>
			<p>This is the projects page.</p>
		</div>
	);
}

export async function getStaticProps() {
	const res = await fetch('https://api.github.com/users/bradmccray89/repos');
	const json = await res.json();

	const repos = json.filter(
		(repo) => repo.fork === false && repo.private === false
	);

	console.log(repos);

	return {
		props: {
			repos,
		},
	};
}
