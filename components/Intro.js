import Typewriter from 'typewriter-effect';
import Image from 'next/image';
import laughImg from '../public/laugh.jpeg';

export default function Intro() {
	const words = ['a Developer', 'a Creator', 'a Problem Solver', 'an Engineer'];
	return (
		<div className="h-[28rem] w-full flex justify-center items-center">
			<div className="h-full w-1/2 flex flex-col leading-8 justify-center mx-10 p-10 rounded-lg bg-slate-200 dark:bg-slate-800 text-3xl md:text-4xl lg:text-5xl">
				<div className="text-3xl md:text-4xl lg:text-5xl mb-5 transitions-all duration-300">
					{"Hello, I'm Brandon."}
				</div>
				<div className="text-3xl md:text-4xl lg:text-5xl mb-5 transitions-all duration-300">
					{'I am '}
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
