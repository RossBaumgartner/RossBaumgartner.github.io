// All site content lives here. Edit this file to update the site.

export const profile = {
  name: "Ross Baumgartner",
  role: "Software Engineer",
  headline: "Software engineer working on AI agents and enterprise backend systems.",
  summary:
    "I'm at CGI in Toronto, building AI agents and Java backend systems for enterprise financial software. Lately I've been focused on LLM agents and the privacy and guardrails that regulated clients expect.",
  location: "Toronto, ON",
  email: "rossbaumgartner@gmail.com",
  linkedin: "https://www.linkedin.com/in/ross-baumgartner",
  github: "https://github.com/RossBaumgartner",
  photo: "/images/profile.png",
};

export const featured = {
  eyebrow: "Featured work · CGI",
  title: "AI Triage Agent for application support",
  intro:
    "An AI agent that helps investigate issues across microservices and servers, then surfaces the likely root cause.",
  points: [
    {
      title: "Agent",
      body: "Built in Python with Google's Agent Development Kit (ADK).",
    },
    {
      title: "Custom MCP tools",
      body: "Tools that search server logs, query a MongoDB knowledge base of error codes and resolutions, and analyze HAR files, cross-referencing failures against logs and documentation.",
    },
    {
      title: "Privacy-first pipeline",
      body: "Logs from many servers are centralized and PII-redacted in Ruby, so the agent only ever sees redacted data. Uploaded HAR files are PII-masked and user prompts are protected with Google Model Armor.",
    },
  ],
  stack: ["Python", "Google ADK", "MCP", "MongoDB", "Ruby", "Model Armor", "GCP"],
};

export const highlights = [
  {
    title: "Grounded support chatbot",
    body: "Architected a Dialogflow CX chatbot grounded in enterprise documentation indexed in Vertex AI Data Stores, built for release as a client-facing feature in the application frontend.",
    stack: ["Dialogflow CX", "Vertex AI", "RAG"],
  },
  {
    title: "Fund order system migration",
    body: "Owned the move of a legacy MQ-based fund order system from XML messaging to JSON REST APIs. Rewrote the connector from scratch and passed orders over Solace queues with validation, supporting high order volumes within short processing windows.",
    stack: ["Java", "OpenAPI", "Solace", "REST"],
  },
  {
    title: "Microservice modernization",
    body: "Modernized 5 legacy microservices from Java 8 on Spring/Tomcat to Java 21 and Spring Boot, and introduced unit testing and CI/CD pipelines to the legacy repositories.",
    stack: ["Java 21", "Spring Boot", "CI/CD"],
  },
];

export type Job = {
  company: string;
  role: string;
  team?: string;
  type: string;
  dates: string;
  location: string;
  logo: string;
  url?: string;
  points: string[];
};

export const experience: Job[] = [
  {
    company: "CGI",
    role: "Software Engineer",
    team: "Funds360",
    type: "Full time",
    dates: "Jan 2023 – Present",
    location: "Toronto, ON · Hybrid",
    logo: "/images/logos/cgi.png",
    url: "https://www.cgi.com",
    points: [
      "Built an AI Triage Agent (Python, Google ADK, custom MCP tools) that helps find the root cause of issues.",
      "Architected a Dialogflow CX support chatbot grounded in Vertex AI Data Stores.",
      "Lead backend developer on Java projects for an enterprise financial product deployed on-prem and in the cloud. Defined requirements with business analysts, estimated, delegated, and drove delivery from design through UAT and production.",
      "Owned the MQ/XML to REST migration of a fund order system and worked directly with the third-party vendor on integration and testing.",
      "Modernized 5 microservices from Java 8 to Java 21 and Spring Boot, adding unit tests and CI/CD.",
    ],
  },
  {
    company: "CAE",
    role: "Unreal Engine Developer",
    type: "Co-op",
    dates: "May 2021 – Aug 2021",
    location: "Montreal, QC · Remote",
    logo: "/images/logos/cae.png",
    url: "https://www.cae.com",
    points: [
      "Developed simulation features and tools in C++ (Unreal Engine) and C# (in-house engine), including visual effects scripting and automated QA tests.",
    ],
  },
  {
    company: "Cision Newswire",
    role: "Software Developer",
    type: "Co-op · 2 terms",
    dates: "Sep 2019 – Dec 2019 · Jun 2020 – Aug 2020",
    location: "Ottawa, ON",
    logo: "/images/logos/cision.png",
    url: "https://www.newswire.ca",
    points: [
      "Built features for data feeds and client-facing systems in Java, JavaScript, React and Groovy on AWS Kinesis and Apache Kafka.",
    ],
  },
  {
    company: "BBM (BlackBerry Messenger)",
    role: "Android Software Engineer",
    type: "Co-op",
    dates: "Jan 2019 – Apr 2019",
    location: "Ottawa, ON",
    logo: "/images/logos/bbm.png",
    points: [
      "Contributed to the BBM Android app in Kotlin and Java, integrating Jenkins CI, Crashlytics and Zeplin.",
    ],
  },
  {
    company: "Communications Research Centre Canada",
    role: "Software Developer",
    type: "Co-op",
    dates: "May 2018 – Aug 2018",
    location: "Ottawa, ON",
    logo: "/images/logos/crc.png",
    url: "https://ised-isde.canada.ca/site/communications-research-centre-canada/en",
    points: [
      "Co-developed an Android AR app on AWS (Lambda, API Gateway, RDS, S3), explored TensorFlow-based ML features, and documented the solution for handoff.",
    ],
  },
];

export const skills = [
  {
    group: "Cloud & AI",
    items: [
      "GCP Vertex AI",
      "Google ADK",
      "Dialogflow CX",
      "Model Armor",
      "MCP",
      "LangChain",
      "AWS Kinesis",
      "AWS Lambda",
      "API Gateway",
      "S3",
    ],
  },
  {
    group: "Languages",
    items: ["Java", "Python", "C++", "C#", "Kotlin", "JavaScript", "Ruby"],
  },
  {
    group: "Frameworks & Tools",
    items: [
      "Spring Boot",
      "React",
      "REST / OpenAPI",
      "Solace",
      "Kafka",
      "MongoDB",
      "Jenkins",
      "CI/CD",
      "Linux",
    ],
  },
  {
    group: "AI Dev Tools",
    items: ["Claude Code", "GitHub Copilot", "Gemini"],
  },
];

export const exploring = [
  {
    title: "Evaluating AI agents",
    body: "Building small test sets to measure whether an agent's root-cause answers are actually correct, and catching regressions when prompts or tools change.",
  },
  {
    title: "MCP server design",
    body: "Writing standalone MCP servers in Python, and experimenting with tool descriptions, input schemas, and error handling to see what makes agents pick the right tool.",
  },
  {
    title: "Multi-agent workflows",
    body: "Comparing a single agent with many tools against a coordinator that hands work to specialized sub-agents (for example, logs vs. docs vs. HAR analysis).",
  },
  {
    title: "Retrieval over technical docs",
    body: "Testing chunking, hybrid keyword and vector search, and re-ranking on messy enterprise documentation, beyond managed data stores.",
  },
  {
    title: "LLM security",
    body: "Prompt injection through tool outputs and logs, PII handling, and guardrails. This follows on from the Model Armor and redaction work.",
  },
  {
    title: "AI-assisted development",
    body: "Using AI on real refactors, code changes and everyday development, noting where they save time and where they need review.",
  },
  {
    title: "On-prem vs. cloud AI hosting",
    body: "Comparing self-hosted with managed cloud AI services for enterprise use, and weighing data privacy, security, and regulatory requirements against cost, ease of use, and model quality.",
  },
];

export const education = {
  school: "University of Ottawa",
  degree: "B.A.Sc. Software Engineering",
  honours: "Cum Laude",
  date: "May 2022",
};

export const project = {
  title: "Dungeoneer",
  subtitle: "uOttawa Software Engineering capstone",
  body: "A game built from the ground up in Unity and C# by a team of four over two semesters, with automated tests running in GitHub Actions in a Unity Docker container.",
  image: "/images/dungeoneersq.png",
  links: [
    { label: "Play on itch.io", href: "https://dungeoneerproject.itch.io/dungeoneer-project" },
    { label: "GitHub", href: "https://github.com/AndreiBaetica/Dungeoneer" },
  ],
};
