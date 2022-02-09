import Typewriter from 'typewriter-effect';
import Image from 'next/image';
import laughImg from '../public/laugh.jpeg';

export default function Intro() {
	const words = ['a Developer', 'a Creator', 'a Problem Solver', 'an Engineer'];
	return (
		<div className="h-[75%] w-[95%] lg:w-[80%] flex flex-col lg:flex-row justify-center items-center lg:overflow-visible">
			<div className="w-auto sm:w-[80%] lg:w-1/2 flex flex-col justify-center lg:mx-10 p-8 lg:p-10 rounded-lg bg-slate-200 dark:bg-slate-800 text-2xl sm:text-3xl md:text-4xl font-fira lg:order-1 order-2">
				<div className="mb-5 transitions-all duration-300">
					{"Hello, I'm Brandon."}
				</div>
				<div className="mb-5 transitions-all duration-300">{'I am'}</div>
				<Typewriter
					options={{
						strings: words,
						autoStart: true,
						loop: true,
						wrapperClassName: 'transitions-all duration-300',
					}}
				/>
			</div>
			<div className="min-h-[16rem] min-w-[16rem] sm:h-[20rem] sm:w-[20rem] lg:h-[32rem] lg:w-[32rem] flex justify-center items-center m-10 lg:order-2 order-1">
				<Image
					src={laughImg}
					alt="Laugh Image"
					objectFit="cover"
					className="rounded-full"
					priority
				/>
			</div>
		</div>
	);
}
