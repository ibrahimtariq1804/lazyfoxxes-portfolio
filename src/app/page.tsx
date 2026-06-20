import { Home as HomeSection, Services, Skills, Projects, Contact, About, Reviews, FAQ } from "@/sections";

export default function Home() {
	return (
		<>
			<HomeSection />
			<Services />
			<Skills />
			<About />
			<Projects />
			<Reviews />
			<FAQ />
			<Contact />
		</>
	);
}
