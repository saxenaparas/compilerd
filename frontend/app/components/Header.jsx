import React from 'react'

const Header = () => {
    return (
        <header className="text-white body-font bg-slate-700 mb-3 h-14">
            <div className="container mx-auto flex flex-wrap px-3 p-2 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-10 h-10 text-white p-2 bg-blue-500 rounded-full"
                        viewBox="0 0 24 24"
                    >
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                    <span className="ml-3 text-xl text-teal-500">CompilerD</span>
                </a>
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
                    <a className="mr-5 hover:text-gray-900">Kelvium</a>
                </nav>

                <a href="https://github.com/saxenaparas/compilerd" target='_blank'> 
                <button className="inline-flex items-center bg-blue-950 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 hover:text-gray-900 rounded text-base text-white mt-4 md:mt-0">
                    GitHub/Repo
                    <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-4 h-4 ml-1"
                        viewBox="0 0 24 24"
                    >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                </button>
                </a>
                
            </div>
        </header>
    )
}

export default Header