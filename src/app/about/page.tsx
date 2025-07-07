import Head from 'next/head';
import Link from 'next/link';

export default function About() {
    return (
        <div className="min-h-screen bg-gray-100">
            <Head>
                <title>About Me - Ali Raza Portfolio</title>
                <meta name="description" content="Learn about Ali Raza, a skilled Frontend Developer and Sales Representative with expertise in web development and federal procurement." />
            </Head>
            <main className="container mx-auto px-4 py-12 md:py-16">
                <section className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">About Me</h1>
                    <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                        Hi, I&apos;m Ali Raza, a passionate Frontend Developer and Sales Representative with a knack for creating stunning websites and securing government contracts.
                    </p>
                </section>
                <section className="mb-12">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-6">My Journey</h2>
                    <div className="space-y-8">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold text-gray-800">Frontend Developer</h3>
                            <p className="text-gray-600 italic">SecureHops, Lakshmi Chowk, Lahore | Jan 2023 - Jan 2025</p>
                            <p className="text-gray-700 mt-2">
                                I worked as a Frontend Developer at SecureHops, where I honed my skills in modern web development technologies, including:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 mt-2">
                                <li>HTML, CSS, JavaScript, React, Next.js</li>
                                <li>Material UI, Bootstrap, Tailwind CSS, Sass, Shadcn</li>
                                <li>Docker, Git, VS Code, GitHub</li>
                                <li>Google Analytics, Google AdSense</li>
                            </ul>
                            <p className="text-gray-700 mt-2">
                                Over two years, I built responsive, user-friendly websites and contributed to innovative digital solutions.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold text-gray-800">Self-Employed Frontend Developer</h3>
                            <p className="text-gray-600 italic">Feb 2025 - Present</p>
                            <p className="text-gray-700 mt-2">
                                Since February 2025, I&apos;ve been working independently, taking on freelance projects to create stunning, SEO-optimized websites using Next.js, React, and Tailwind CSS, delivering pixel-perfect results for clients.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold text-gray-800">Sales Representative</h3>
                            <p className="text-gray-600 italic">Stateline Solution LLC, Mini Market, Okara Cantt | Jun 2025 - Present</p>
                            <p className="text-gray-700 mt-2">
                                As a Sales Representative, I actively engage with federal procurement opportunities listed on SAM.gov, the official contracting platform of the U.S. government. My role involves:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 mt-2">
                                <li>Searching for new business opportunities and reviewing detailed requirements, including product names, quantities, units of measure (UOM), and product descriptions.</li>
                                <li>Reaching out to potential suppliers via emails and professional communication channels, sharing complete product specifications, and requesting formal quotations.</li>
                                <li>Reviewing supplier quotes and preparing them for submission on SAM.gov before the opportunity&apos;s closing date to meet compliance standards.</li>
                                <li>Contributing to the company&apos;s sales goals by targeting government contracts and building relationships with reliable suppliers.</li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section className="mb-12">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-6">My Skills</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {[
                            'HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Material UI', 'Bootstrap',
                            'Tailwind CSS', 'Sass', 'Shadcn', 'Docker', 'Git', 'VS Code', 'GitHub',
                            'Google Analytics', 'Google AdSense'
                        ].map((skill) => (
                            <div key={skill} className="bg-blue-100 text-blue-800 font-semibold text-center py-2 rounded-lg">
                                {skill}
                            </div>
                        ))}
                    </div>
                </section>
                <section className="text-center">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-4">Let&apos;s Work Together!</h2>
                    <p className="text-lg text-gray-600 mb-6">
                        Whether you need a stunning website or assistance with federal procurement, I&apos;m here to help. Check out my projects or reach out to discuss your next big idea!
                    </p>
                    <Link href={'/#contact'}>
                        <button
                            className="inline-block cursor-pointer bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition"
                        >
                            Get in Touch
                        </button>
                    </Link>
                </section>
            </main>
        </div>
    );
}