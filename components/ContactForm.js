import Image from 'next/image';
import laptopImg from '../public/laptop.jpg';

export default function ContactForm() {
	return (
		<div className="flex bg-slate-200 dark:bg-slate-800 h-[20rem] w-auto rounded-lg columns-2">
			<div className="h-auto w-0 md:w-64 sm:w-48 relative">
				<Image
					src={laptopImg}
					alt="Laptop Image"
					layout="fill"
					objectFit="cover"
					className="rounded-l-lg"
					priority
				/>
			</div>
			<div className="p-5 flex flex-col justify-evenly w-auto sm:w-96 md:w-[30rem] mx-3">
				<div className="flex justify-center text-2xl w-auto h-auto px-2 pb-2 ">
					<h1>Contact</h1>
				</div>
				<div className="w-auto h-auto m-2 flex flex-1 self-start">
					<p>
						{
							'I am not currently looking for work, but I am always open to discussing new opportunities. Feel free to reach out and I will try my best to get back to you.'
						}
					</p>
				</div>
				<div className="my-3 flex flex-1 justify-center items-center">
					<a
						href="mailto:bradmccray89@gmail.com"
						target="_blank"
						rel="noopener noreferrer"
						className="py-2 px-12 justify-center items-center shadow-sm text-sm font-medium rounded-md bg-pink-500 hover:bg-pink-600 dark:bg-sky-500 dark:hover:bg-sky-700"
					>
						Email me!
					</a>
				</div>
				{/* <form action="/api/form" method="POST">
					<div className="grid grid-cols-6 md:grid-cols-12 gap-6">
						<div className="col-span-6 md:col-span-12 mt-2">
							<label htmlFor="name" className="block text-sm font-medium">
								Name
							</label>
							<input
								type="text"
								name="name"
								id="name"
								autoComplete="name"
								className="mt-1 p-1 block w-full rounded-sm"
							/>
						</div>

						<div className="col-span-6 md:col-span-12">
							<label htmlFor="email-address" className="block text-sm font-medium">
								Email address
							</label>
							<input
								type="text"
								name="email-address"
								id="email-address"
								autoComplete="email"
								className="mt-1 p-1 block w-full rounded-sm"
							/>
						</div>
						<div className="col-span-6 md:col-span-12">
							<label htmlFor="last-name" className="block text-sm font-medium">
								Message
							</label>
							<textarea
								type="textarea"
								name="last-name"
								id="last-name"
								autoComplete="family-name"
								className="mt-1 p-1 block w-full min-h-[8rem] h-auto rounded-sm"
							/>
						</div>
					</div>
					<div className="mt-5 text-right">
						<button
							type="submit"
							className="inline-flex justify-center py-2 px-12 border border-transparent shadow-sm text-sm font-medium rounded-md bg-pink-500 hover:bg-pink-600 dark:bg-sky-500 dark:hover:bg-sky-700 focus:outline-none"
						>
							Send
						</button>
					</div>
				</form> */}
			</div>
		</div>
	);
}
