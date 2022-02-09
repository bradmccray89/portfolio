import Image from 'next/image';

export default function RepoItem({ repo, background }) {
	const name = repo.name.replace(/[-_]/g, ' ');

	return (
		<a
			href={repo.html_url}
			className="h-[12rem] w-[16rem] relative flex justify-start rounded-lg hover:z-50 hover:scale-125 transition-transform duration-300"
			target="_blank"
			rel="noopener noreferrer"
		>
			<Image
				src={background}
				alt="background"
				className="z-0 w-full h-full rounded-lg"
				layout="fill"
			/>
			<div
				title={repo.description}
				className="h-full w-full flex justify-center items-center flex-col rounded-lg z-10 hover:z-20 lg:backdrop-grayscale hover:backdrop-grayscale-0 transition-colors duration-300"
			>
				<h1 className="p-3 capitalize bg-gray-300 dark:bg-slate-800 rounded-full subpixel-antialiased">
					{name}
				</h1>
			</div>
		</a>
	);
}
