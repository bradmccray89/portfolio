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
		<div className="flex justify-center items-center">
			<div className="grid grid-cols-3 gap-4">
				{repos.map((repo, index) => (
					<RepoItem repo={repo} background={backgrounds[index % 6]} key={index} />
				))}
			</div>
		</div>
	);
}
