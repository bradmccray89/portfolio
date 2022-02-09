import Head from 'next/head';
import ContactForm from '../components/ContactForm';
import Layout from '../components/Layout';

export default function Contact() {
	return (
		<div className="flex h-screen justify-center items-center">
			<Head>
				<title>Brandon | Contact</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Layout>
				<ContactForm />
			</Layout>
		</div>
	);
}
