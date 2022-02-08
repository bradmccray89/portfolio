import RepoItem from './RepoItem';
import code1 from '../public/backgrounds/code1.jpg';
import code2 from '../public/backgrounds/code2.jpg';
import code3 from '../public/backgrounds/code3.jpg';
import code4 from '../public/backgrounds/code4.jpg';
import code5 from '../public/backgrounds/code5.jpg';
import code6 from '../public/backgrounds/code6.jpg';

export default function ProjectContent({ repos }) {
	const backgrounds = [code1, code2, code3, code4, code5, code6];

	return (
		<div className="flex flex-col justify-center items-center">
			<h1 className="text-4xl font-bold text-center mb-8 text-gray-800 dark:text-gray-200">
				Current Github Projects
			</h1>
			<div className="grid grid-cols-3 gap-4 mb-8">
				{repos.map((repo, index) => (
					<RepoItem repo={repo} background={backgrounds[index % 6]} key={index} />
				))}
			</div>
		</div>
	);
}
