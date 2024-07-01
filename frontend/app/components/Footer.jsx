import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer className="text-white body-font bg-slate-700">
                <div className="container px-3 py-3 mx-auto flex items-center sm:flex-row flex-col">
                    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
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

                    <p className="text-sm text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
                        © Kelvium —
                        <a
                            href="https://twitter.com/knyttneve"
                            className="text-white ml-1"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            @saxenaparas
                        </a>
                    </p>

                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                        <a
                            href="https://github.com/saxenaparas"
                            aria-label="Homepage"
                            className="footer-octicon"
                            title="GitHub"
                            target='_blank'
                        >
                            <svg
                                aria-hidden="true"
                                className="octicon octicon-mark-github"
                                height={30}
                                version="1.1"
                                viewBox="0 0 16 16"
                                fill='white'
                                style={{ backgroundColor: 'black', borderRadius: '50%' }}
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                                />
                            </svg>
                        </a>

                    </span>
                </div>
            </footer>
        </div>
    )
}

export default Footer