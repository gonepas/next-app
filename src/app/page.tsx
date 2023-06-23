import Image from 'next/image'
import Link from "next/link";

export default function Home() {
    return (
        <main className="bg-slate-900 text-gray-100">
            <div className="mx-auto max-w-screen-lg px-3 py-6">
                <div className="flex flex-col gap-y-3 sm:flex-row sm:items-center sm:justify-between"><a href="/">
                    <div
                        className="flex items-center bg-gradient-to-br from-sky-500 to-cyan-400 bg-clip-text text-xl font-bold text-transparent">
                        <svg className="mr-1 h-10 w-10 stroke-cyan-600" xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round"
                             strokeLinejoin="round">
                            <path d="M0 0h24v24H0z" stroke="none"></path>
                            <rect x="3" y="12" width="6" height="8" rx="1"></rect>
                            <rect x="9" y="8" width="6" height="12" rx="1"></rect>
                            <rect x="15" y="4" width="6" height="16" rx="1"></rect>
                            <path d="M4 20h14"></path>
                        </svg>
                        Thotrang Playground
                    </div>
                </a>
                    <nav>
                        <ul className="flex gap-x-3 font-medium text-gray-200">
                            <li className="hover:text-white"><a href="/posts/">Blogs</a></li>
                            <li className="hover:text-white"><a href="/">GitHub</a></li>
                            <li className="hover:text-white"><a href="/">Twitter</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className="mx-auto max-w-screen-lg px-3 py-6">
                <div className="flex flex-col items-center md:flex-row md:justify-between md:gap-x-24">
                    <div><h1 className="text-3xl font-bold">Hi there, I'm <span
                        className="bg-gradient-to-br from-sky-500 to-cyan-400 bg-clip-text text-transparent">Ixartz</span> 👋
                    </h1><p className="mt-6 text-xl leading-9">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus <a className="text-cyan-400 hover:underline" href="/">malesuada</a> nisi
                        tellus, non imperdiet nisi tempor at. Lorem ipsum dolor sit amet, <a className="text-cyan-400 hover:underline" href="/">consectetur</a>adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                        <div className="mt-3 flex gap-1"><a href="/"><img className="h-12 w-12 hover:translate-y-1"
                                                                          src="/assets/twitter-icon.png"
                                                                          alt="Twitter icon" loading="lazy"></img></a><a
                            href="/"><img className="h-12 w-12 hover:translate-y-1"
                                          src="/assets/facebook-icon.png" alt="Facebook icon" loading="lazy"></img></a><a
                            href="/"><img className="h-12 w-12 hover:translate-y-1"
                                          src="/assets/linkedin-icon.png" alt="Linkedin icon" loading="lazy"></img></a><a
                            href="/"><img className="h-12 w-12 hover:translate-y-1"
                                          src="/assets/youtube-icon.png" alt="Youtube icon" loading="lazy"></img></a>
                        </div>
                    </div>
                    <div className="shrink-0"><img className="h-80 w-64" src="/assets/avatar.svg"
                                                   alt="Avatar image" loading="lazy"></img></div>
                </div>
            </div>
            <div className="mx-auto max-w-screen-lg px-3 py-6">
                <div className="mb-6 text-2xl font-bold">Recent <span
                    className="bg-gradient-to-br from-sky-500 to-cyan-400 bg-clip-text text-transparent">Projects</span>
                </div>
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col items-center gap-x-8 rounded-md bg-slate-800 p-3 md:flex-row">
                        <div className="shrink-0"><a href="/"><img className="h-36 w-36 hover:translate-y-1"
                                                                   src="/assets/project-web-design.png"
                                                                   alt="Project Web Design" loading="lazy"></img></a></div>
                        <div>
                            <div className="flex flex-col items-center gap-y-2 md:flex-row"><a
                                className="hover:text-cyan-400" href="/">
                                <div className="text-xl font-semibold">Project 1</div>
                            </a>
                                <div className="ml-3 flex gap-2">
                                    <div
                                        className="rounded-md px-2 py-1 text-xs font-semibold bg-fuchsia-400 text-fuchsia-900">Astro.js
                                    </div>
                                    <div
                                        className="rounded-md px-2 py-1 text-xs font-semibold bg-lime-400 text-lime-900">Web
                                        design
                                    </div>
                                    <div
                                        className="rounded-md px-2 py-1 text-xs font-semibold bg-sky-400 text-sky-900">Tailwind.css
                                    </div>
                                    <div
                                        className="rounded-md px-2 py-1 text-xs font-semibold bg-rose-400 text-rose-900">TypeScript
                                    </div>
                                </div>
                            </div>
                            <p className="mt-3 text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Suspendisse
                                bibendum. Nunc non posuere consectetur, justo erat semper enim, non
                                hendrerit dui odio id enim.</p></div>
                    </div>
                    <div className="flex flex-col items-center gap-x-8 rounded-md bg-slate-800 p-3 md:flex-row">
                        <div className="shrink-0"><a href="/"><img className="h-36 w-36 hover:translate-y-1"
                                                                   src="/assets/project-fire.png"
                                                                   alt="Project Fire" loading="lazy"></img></a></div>
                        <div>
                            <div className="flex flex-col items-center gap-y-2 md:flex-row"><a
                                className="hover:text-cyan-400" href="/">
                                <div className="text-xl font-semibold">Project 2</div>
                            </a>
                                <div className="ml-3 flex gap-2">
                                    <div
                                        className="rounded-md px-2 py-1 text-xs font-semibold bg-violet-400 text-violet-900">Next.js
                                    </div>
                                    <div
                                        className="rounded-md px-2 py-1 text-xs font-semibold bg-emerald-400 text-emerald-900">Blog
                                    </div>
                                    <div
                                        className="rounded-md px-2 py-1 text-xs font-semibold bg-yellow-400 text-yellow-900">JavaScript
                                    </div>
                                </div>
                            </div>
                            <p className="mt-3 text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Suspendisse
                                bibendum. Nunc non posuere consectetur, justo erat semper enim, non
                                hendrerit dui odio id enim.</p></div>
                    </div>
                    <div className="flex flex-col items-center gap-x-8 rounded-md bg-slate-800 p-3 md:flex-row">
                        <div className="shrink-0"><a href="/"><img className="h-36 w-36 hover:translate-y-1"
                                                                   src="/assets/project-maps.png"
                                                                   alt="Project Maps" loading="lazy"></img></a></div>
                        <div>
                            <div className="flex flex-col items-center gap-y-2 md:flex-row"><a
                                className="hover:text-cyan-400" href="/">
                                <div className="text-xl font-semibold">Project 3</div>
                            </a>
                                <div className="ml-3 flex gap-2">
                                    <div
                                        className="rounded-md px-2 py-1 text-xs font-semibold bg-fuchsia-400 text-fuchsia-900">Astro.js
                                    </div>
                                    <div
                                        className="rounded-md px-2 py-1 text-xs font-semibold bg-indigo-400 text-indigo-900">Bootstrap
                                    </div>
                                    <div
                                        className="rounded-md px-2 py-1 text-xs font-semibold bg-rose-400 text-rose-900">TypeScript
                                    </div>
                                </div>
                            </div>
                            <p className="mt-3 text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Suspendisse
                                bibendum. Nunc non posuere consectetur, justo erat semper enim, non
                                hendrerit dui odio id enim.</p></div>
                    </div>
                </div>
            </div>
        </main>
    )
}
