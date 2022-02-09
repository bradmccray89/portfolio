import { motion } from 'framer-motion';

const variants = {
	hidden: { opacity: 0, x: -200, y: 0 },
	enter: { opacity: 1, x: 0, y: 0 },
};

export default function Layout({ children }) {
	return (
		<motion.main
			initial="hidden"
			animate="enter"
			variants={variants}
			transition={{ type: 'linear' }}
			className="h-full w-[95%] flex justify-center items-center justify-self-center self-center"
		>
			{children}
		</motion.main>
	);
}
