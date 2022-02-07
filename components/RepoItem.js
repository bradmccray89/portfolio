import Image from 'next/image';

export default function RepoItem({ repo, background }) {
	return (
		<div className="h-[12rem] w-[16rem] relative flex justify-start pt-12 bg-slate-400 rounded-lg">
			<Image
				src={background}
				alt="background"
				className="z-0 w-full h-full rounded-lg blur-[2px]"
				layout="fill"
			/>
			<div className="flex justify-center flex-col z-10">
				<h1>{repo.name}</h1>
				<p>{repo.description}</p>
			</div>
		</div>
	);
}
