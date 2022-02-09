import { ThemeProvider } from 'next-themes';
import '../styles/globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { AnimatePresence } from 'framer-motion';

function MyApp({ Component, pageProps }) {
	return (
		<ThemeProvider attribute="class">
			<Navbar />
			<AnimatePresence>
				<Component {...pageProps} />
			</AnimatePresence>
			<Footer />
		</ThemeProvider>
	);
}

export default MyApp;
