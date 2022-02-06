import Typewriter from 'typewriter-effect';
import Image from 'next/image';
import laughImg from '../public/laugh.jpeg';

export default function Intro() {
	const words = ['Developer', 'Designer', 'Creator', 'Problem Solver'];
	return (
		<div className="h-[32rem] w-5/6 flex justify-center items-center">
			<div className="h-full w-1/2 flex flex-col leading-8 justify-center mx-10 p-10 rounded-lg bg-slate-200 dark:bg-slate-800 text-3xl md:text-5xl lg:text-7xl">
				<div className="text-3xl md:text-5xl lg:text-7xl mb-5 transitions-all duration-300">
					{"Hello, I'm Brandon."}
				</div>
				<div className="text-3xl md:text-5xl lg:text-7xl mb-5 transitions-all duration-300">
					{'I am a '}
				</div>
				<Typewriter
					options={{
						strings: words,
						autoStart: true,
						loop: true,
						wrapperClassName: 'font-fira transitions-all duration-300',
					}}
				/>
			</div>
			<div className="h-[32rem] w-[32rem] flex flex-col justify-center items-center mx-10">
				<Image
					src={laughImg}
					alt="Laugh Image"
					objectFit="cover"
					className="rounded-full h-[32rem] w-[32rem]"
					priority
				/>
			</div>
		</div>
	);
}
