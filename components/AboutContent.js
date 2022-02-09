import Image from 'next/image';
import alaskaImg from '../public/alaska.jpg';

export default function AboutContent() {
	return (
		<div className="h-[25rem] w-auto md:h-auto bg-slate-200 dark:bg-slate-800 rounded-lg flex">
			<div className="h-auto w-0 sm:w-48 md:w-72 relative">
				<Image
					src={alaskaImg}
					alt="Alaska Image"
					layout="fill"
					objectFit="cover"
					className="rounded-l-lg"
					placeholder="blur"
					priority
				/>
			</div>
			<div className="p-5 flex flex-col w-auto sm:w-96 mx-3">
				<div className="text-2xl w-full flex justify-center font-bold items-center h-auto pl-2 pb-2 ">
					<h1>About Me</h1>
				</div>
				<div className="w-full h-auto px-2 overflow-scroll lg:overflow-visible">
					Hi! My name is Brandon McCray. I have been doing full-stack development
					since 2017, and I love what I do. I use my expertise every day to improve
					online user experience and write clean, maintainable code.
					<br />
					<br />
					I love to design sleek and simple user interfaces for all to enjoy. Over
					the years I have worked with a variety of technologies including Angular,
					React, Node.js, and C# among others, and I am always looking to learn more.
					<br />
					<br />
					In my spare time I enjoy playing video games, hiking, and watching movies.
					I love to try new foods and drink a lot of coffee. Especially when I am
					coding.
					<br />
					<br />
					<div className="w-full flex justify-center">
						Thanks for coming to my site!
					</div>
				</div>
			</div>
		</div>
	);
}
