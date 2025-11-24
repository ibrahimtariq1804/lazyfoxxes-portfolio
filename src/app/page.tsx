import { Home as HomeSection, Services, Skills, Projects, Contact, About, Reviews } from "@/sections";

export default function Home() {
	return (
		<>
			<HomeSection />
			<Services />
			<Skills />
			<About />
			<Projects />
			<Reviews />
			<Contact />
		</>
	);
}
