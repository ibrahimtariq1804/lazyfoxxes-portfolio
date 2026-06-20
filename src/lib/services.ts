export type ServiceIconName = "Globe" | "Smartphone" | "Palette" | "Settings" | "Bot";

export type ServiceFAQ = {
	question: string;
	answer: string;
};

export type ServiceProcessStep = {
	title: string;
	description: string;
};

export type Service = {
	slug: string;
	title: string;
	tagline: string;
	description: string;
	longDescription: string;
	icon: ServiceIconName;
	details: string[];
	benefits: string[];
	process: ServiceProcessStep[];
	faqs: ServiceFAQ[];
};

export const SERVICES: Service[] = [
	{
		slug: "web-development",
		title: "Web Development",
		tagline: "Fast, scalable websites and web apps built for growth",
		description:
			"We create high-performance, scalable web applications using cutting-edge technologies. From simple landing pages to complex enterprise solutions, we deliver responsive, SEO-optimized websites that provide exceptional user experiences and drive business growth.",
		longDescription:
			"Your website is often the first impression customers have of your business. We build modern web experiences that load quickly, rank well in search engines, and convert visitors into customers. Whether you need a marketing site, a SaaS dashboard, or a full e-commerce platform, we architect every project for performance, maintainability, and long-term scale.",
		icon: "Globe",
		details: [
			"Frontend: React, Next.js, TypeScript, Tailwind CSS, Framer Motion",
			"Backend: Node.js, Express, RESTful APIs, GraphQL",
			"Database: PostgreSQL, MongoDB, MySQL, Redis",
			"Cloud & Hosting: AWS, Vercel, Netlify, Azure",
			"DevOps: Docker, CI/CD, GitHub Actions, Testing (Jest, Cypress)",
		],
		benefits: [
			"Lightning-fast page loads and Core Web Vitals optimization",
			"SEO-ready structure from day one",
			"Fully responsive across all devices and screen sizes",
			"Clean, maintainable codebase your team can grow with",
			"Secure authentication, payments, and data handling",
		],
		process: [
			{
				title: "Discovery & Planning",
				description: "We define your goals, target audience, features, and technical requirements before writing a single line of code.",
			},
			{
				title: "Design & Prototyping",
				description: "Wireframes and interactive prototypes ensure the user experience aligns with your brand and business objectives.",
			},
			{
				title: "Development & Testing",
				description: "We build in agile sprints with regular demos, thorough testing, and performance checks at every stage.",
			},
			{
				title: "Launch & Optimization",
				description: "We deploy to production, monitor performance, and fine-tune SEO and analytics for ongoing growth.",
			},
		],
		faqs: [
			{
				question: "What types of websites can you build?",
				answer:
					"We build landing pages, corporate websites, e-commerce stores, SaaS platforms, dashboards, portfolios, and custom web applications. If it runs in a browser, we can build it.",
			},
			{
				question: "Do you use WordPress or custom code?",
				answer:
					"We specialize in custom development with modern frameworks like Next.js and React for maximum performance and flexibility. Custom code gives you full control, better speed, and a unique experience tailored to your brand.",
			},
			{
				question: "Will my website be mobile-friendly?",
				answer:
					"Absolutely. Every site we build is fully responsive and tested on phones, tablets, and desktops. Mobile-first design is a standard part of our process.",
			},
			{
				question: "How do you handle website SEO?",
				answer:
					"We implement semantic HTML, optimized meta tags, structured data, fast load times, and clean URL structures. For deeper SEO strategy, we also offer dedicated search optimization services.",
			},
			{
				question: "Can you redesign my existing website?",
				answer:
					"Yes. We can modernize outdated sites, improve performance, refresh the design, and migrate content to a new platform while preserving your SEO rankings where possible.",
			},
			{
				question: "Who owns the website after it's built?",
				answer:
					"You do. Upon project completion and payment, you receive full ownership of the codebase, design assets, and deployment credentials.",
			},
		],
	},
	{
		slug: "mobile-development",
		title: "Mobile Development",
		tagline: "Native-quality apps for iOS and Android",
		description:
			"We build native and cross-platform mobile applications that deliver seamless experiences across iOS and Android. Our mobile solutions combine beautiful design with robust functionality, ensuring your app performs flawlessly on any device.",
		longDescription:
			"Mobile apps put your business directly in your customers' pockets. We design and develop apps that feel native, perform smoothly, and solve real user problems. From MVPs that validate your idea to full-scale apps with millions of users, we handle everything from UI design to App Store deployment.",
		icon: "Smartphone",
		details: [
			"Frameworks: React Native, Flutter, Kotlin",
			"State Management: Redux, Zustand, Context API",
			"Backend Integration: REST APIs, GraphQL, Firebase",
			"Publishing: App Store & Google Play Store deployment",
			"Features: Push notifications, offline mode, real-time sync",
		],
		benefits: [
			"Single codebase for iOS and Android with React Native or Flutter",
			"Smooth animations and native-feeling interactions",
			"Offline support and real-time data synchronization",
			"Push notifications to keep users engaged",
			"Full App Store and Google Play submission support",
		],
		process: [
			{
				title: "Concept & Requirements",
				description: "We map user flows, define core features, and choose the right cross-platform or native approach for your goals.",
			},
			{
				title: "UI/UX for Mobile",
				description: "Mobile-specific designs that follow platform guidelines while maintaining your unique brand identity.",
			},
			{
				title: "Build & Integrate",
				description: "We develop the app, integrate APIs and third-party services, and test across real devices.",
			},
			{
				title: "Deploy & Maintain",
				description: "We handle store submissions, review feedback, and provide ongoing updates and bug fixes.",
			},
		],
		faqs: [
			{
				question: "Do you build for both iOS and Android?",
				answer:
					"Yes. We primarily use React Native and Flutter to deliver both platforms from a shared codebase, reducing cost and development time while maintaining high quality.",
			},
			{
				question: "How long does it take to build a mobile app?",
				answer:
					"A simple MVP typically takes 6–10 weeks. More complex apps with custom backends, payments, or real-time features can take 3–6 months. We provide a detailed timeline after scoping your project.",
			},
			{
				question: "Can you help publish the app to app stores?",
				answer:
					"Yes. We manage the full submission process for both the Apple App Store and Google Play Store, including store listings, screenshots, and compliance requirements.",
			},
			{
				question: "Will my app work offline?",
				answer:
					"We can implement offline functionality depending on your needs—local data caching, queued actions, and sync when connectivity returns are all options we build regularly.",
			},
			{
				question: "Can you add features to an existing app?",
				answer:
					"Yes. We can take over existing codebases, add new features, fix bugs, and improve performance. We'll review your current code during an initial audit.",
			},
			{
				question: "How do you handle app security?",
				answer:
					"We follow best practices including secure API communication (HTTPS/TLS), encrypted local storage, secure authentication flows, and regular dependency updates.",
			},
		],
	},
	{
		slug: "ui-ux-design",
		title: "UI/UX Design",
		tagline: "Interfaces people love to use",
		description:
			"We craft beautiful, intuitive interfaces that users love. Our design process focuses on understanding your users' needs and creating experiences that are not only visually stunning but also highly functional and accessible to everyone.",
		longDescription:
			"Great design is more than aesthetics—it's about solving problems and guiding users effortlessly toward their goals. We combine user research, thoughtful information architecture, and polished visual design to create experiences that build trust and drive conversions across web and mobile products.",
		icon: "Palette",
		details: [
			"Design Tools: Figma, Adobe XD, Sketch",
			"Design Systems & Component Libraries",
			"User Research, Personas & User Flows",
			"Wireframing & Interactive Prototyping",
			"Accessibility Standards (WCAG 2.1 AA)",
		],
		benefits: [
			"User-centered design backed by research and testing",
			"Consistent design systems for scalable products",
			"Interactive prototypes you can test before development",
			"Accessible designs that work for all users",
			"Developer-ready handoff with specs and assets",
		],
		process: [
			{
				title: "Research & Strategy",
				description: "We study your users, competitors, and business goals to inform every design decision.",
			},
			{
				title: "Wireframes & Flows",
				description: "Low-fidelity layouts map out structure and navigation before visual design begins.",
			},
			{
				title: "Visual Design",
				description: "High-fidelity screens, design systems, and micro-interactions bring your brand to life.",
			},
			{
				title: "Prototype & Handoff",
				description: "Interactive prototypes for user testing, then detailed specs for seamless development.",
			},
		],
		faqs: [
			{
				question: "What's the difference between UI and UX design?",
				answer:
					"UX (User Experience) focuses on how a product works—flows, usability, and solving user problems. UI (User Interface) focuses on how it looks—colors, typography, spacing, and visual polish. We handle both as an integrated process.",
			},
			{
				question: "Do you only design, or also develop?",
				answer:
					"We offer design-only services as well as full design-to-development packages. Many clients choose us for both to ensure the final product matches the vision perfectly.",
			},
			{
				question: "What tools do you use for design?",
				answer:
					"Our primary tool is Figma for design, prototyping, and developer handoff. We also use Adobe XD and Sketch when project requirements call for them.",
			},
			{
				question: "Can you redesign an existing product?",
				answer:
					"Yes. We audit your current experience, identify pain points through user feedback and analytics, and create an improved design that addresses usability issues while refreshing your visual identity.",
			},
			{
				question: "Do you create design systems?",
				answer:
					"Yes. For products that need to scale, we build comprehensive design systems with reusable components, typography scales, color tokens, and documentation for your team.",
			},
			{
				question: "How do you ensure designs are accessible?",
				answer:
					"We follow WCAG 2.1 AA guidelines—proper color contrast, keyboard navigation, screen reader compatibility, and clear focus states are built into every design.",
			},
		],
	},
	{
		slug: "backend-development",
		title: "Backend Development",
		tagline: "Robust systems that power your applications",
		description:
			"We architect and build robust, scalable backend systems that power your applications. From API development to database design and cloud infrastructure, we ensure your backend is secure, performant, and ready to scale with your business.",
		longDescription:
			"A great frontend means nothing without a reliable backend behind it. We design server architectures, APIs, and databases that handle growth gracefully—whether you're serving hundreds of users or millions. Security, performance, and maintainability are at the core of everything we build.",
		icon: "Settings",
		details: [
			"Languages: Node.js, Python, Java",
			"Databases: PostgreSQL, MongoDB, MySQL, Firebase",
			"API Development: REST, GraphQL, WebSocket",
			"Cloud Services: AWS, Google Cloud, Azure",
			"DevOps: Docker, Kubernetes, CI/CD pipelines",
		],
		benefits: [
			"Scalable architecture that grows with your user base",
			"Secure authentication, authorization, and data encryption",
			"Well-documented APIs for easy frontend integration",
			"Automated testing and CI/CD for reliable deployments",
			"Cloud infrastructure optimized for cost and performance",
		],
		process: [
			{
				title: "Architecture Design",
				description: "We plan database schemas, API structures, and infrastructure based on your scale and security needs.",
			},
			{
				title: "API Development",
				description: "RESTful or GraphQL APIs built with clear documentation, versioning, and error handling.",
			},
			{
				title: "Database & Integration",
				description: "Optimized database design, third-party integrations, and background job processing.",
			},
			{
				title: "Deploy & Monitor",
				description: "Cloud deployment with monitoring, logging, and alerting to keep your systems healthy 24/7.",
			},
		],
		faqs: [
			{
				question: "What backend technologies do you use?",
				answer:
					"We primarily work with Node.js and Python, paired with PostgreSQL or MongoDB. We choose the stack based on your project's performance, scaling, and team requirements.",
			},
			{
				question: "Can you build APIs for an existing frontend?",
				answer:
					"Yes. We regularly build backends for existing mobile apps and web frontends, designing APIs that match your current architecture and data needs.",
			},
			{
				question: "How do you handle database scaling?",
				answer:
					"We design normalized schemas with proper indexing, implement caching layers (Redis), and plan for horizontal scaling, read replicas, and sharding when your data grows.",
			},
			{
				question: "Is my data secure?",
				answer:
					"Security is built in from the start—encrypted connections, hashed passwords, input validation, rate limiting, and regular security audits are standard in every project.",
			},
			{
				question: "Do you offer cloud hosting setup?",
				answer:
					"Yes. We deploy to AWS, Google Cloud, or Azure, configure auto-scaling, set up CI/CD pipelines, and optimize infrastructure costs for your usage patterns.",
			},
			{
				question: "Can you migrate my backend to a new platform?",
				answer:
					"Yes. We handle database migrations, API transitions, and zero-downtime deployment strategies to move your backend to modern infrastructure safely.",
			},
		],
	},
	{
		slug: "ai-search-optimization",
		title: "AI Search Optimization",
		tagline: "Get discovered in the age of AI-powered search",
		description:
			"We optimize your digital presence for AI-powered search engines and answer engines like ChatGPT, Perplexity, and Google AI Overviews. Our strategies ensure your brand is discoverable, accurately represented, and recommended when users ask AI assistants for solutions in your industry.",
		longDescription:
			"Search is evolving. More users are asking ChatGPT, Perplexity, and Google AI Overviews instead of typing keywords into traditional search bars. AI Search Optimization ensures your brand appears accurately and prominently when AI assistants answer questions in your industry—giving you visibility in this new discovery channel before your competitors catch up.",
		icon: "Bot",
		details: [
			"AI Visibility Audits & Brand Entity Optimization",
			"Structured Data & Schema Markup for AI Crawlers",
			"Content Strategy for LLM-Friendly Discovery",
			"Monitoring AI Search Mentions & Citations",
			"Optimization for ChatGPT, Perplexity & Google AI Overviews",
		],
		benefits: [
			"Increased visibility in AI-powered search and answer engines",
			"Accurate brand representation when AI describes your business",
			"Structured content that LLMs can easily parse and cite",
			"Competitive edge in an emerging discovery channel",
			"Combined strategy with traditional SEO for maximum reach",
		],
		process: [
			{
				title: "AI Visibility Audit",
				description: "We analyze how AI platforms currently represent your brand and identify gaps and opportunities.",
			},
			{
				title: "Entity & Content Optimization",
				description: "We optimize your brand entity, website structure, and content for LLM-friendly discovery.",
			},
			{
				title: "Structured Data Implementation",
				description: "Schema markup and structured data help AI crawlers understand and accurately cite your business.",
			},
			{
				title: "Monitor & Iterate",
				description: "We track AI mentions, citations, and rankings, refining strategy as platforms evolve.",
			},
		],
		faqs: [
			{
				question: "What is AI Search Optimization?",
				answer:
					"AI Search Optimization (also called GEO or LLMO) is the practice of optimizing your digital presence so AI assistants like ChatGPT, Perplexity, and Google AI Overviews can find, understand, and recommend your brand when users ask relevant questions.",
			},
			{
				question: "How is this different from regular SEO?",
				answer:
					"Traditional SEO targets search engine result pages. AI Search Optimization targets how large language models retrieve, summarize, and cite information. Both are important, and we recommend combining them for full discoverability.",
			},
			{
				question: "Which AI platforms do you optimize for?",
				answer:
					"We optimize for ChatGPT, Perplexity, Google AI Overviews, Bing Copilot, and other emerging AI search tools. Our strategies focus on principles that work across platforms as the landscape evolves.",
			},
			{
				question: "How long before we see results?",
				answer:
					"AI platforms update their knowledge at varying intervals. Initial improvements in structured data and content can show results within weeks, while broader AI visibility typically builds over 2–4 months of consistent optimization.",
			},
			{
				question: "Do we need a website for AI Search Optimization?",
				answer:
					"A website is the foundation—it gives AI platforms authoritative content to reference. We can also optimize your presence across directories, social profiles, and published content to strengthen your brand entity.",
			},
			{
				question: "Can you fix incorrect information AI shows about our brand?",
				answer:
					"Yes. We identify inaccurate AI representations and implement entity optimization, authoritative content, and structured data strategies to improve how AI platforms describe and recommend your business.",
			},
		],
	},
];

export function getServiceBySlug(slug: string): Service | undefined {
	return SERVICES.find((service) => service.slug === slug);
}

export function getAllServiceSlugs(): string[] {
	return SERVICES.map((service) => service.slug);
}
