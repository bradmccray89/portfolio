import Image from 'next/image';
import alaskaImg from '../public/alaska.jpg';

export default function AboutContent() {
	return (
		<div className="flex bg-slate-200 dark:bg-slate-800 h-full w-auto rounded-lg columns-2 scroll-auto">
			<div className="h-auto w-0 md:w-72 sm:w-48 relative">
				<Image
					src={alaskaImg}
					alt="Alaska Image"
					layout="fill"
					objectFit="cover"
					className="rounded-l-lg"
					priority
				/>
			</div>
			<div className="p-5 h-[40rem] flex flex-col w-auto sm:w-96 md:w-[30rem] mx-3">
				<div className="text-2xl w-full flex justify-center items-center h-auto pl-2 pb-2 ">
					<h1>About Me</h1>
				</div>
				<div className="w-full h-auto">Content</div>
			</div>
		</div>
	);
}
