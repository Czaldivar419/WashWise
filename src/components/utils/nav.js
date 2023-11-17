import Link from 'next/link';

export default function Navbar() {
    return (
        <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600">
            <div className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
                <Link href="/dashboard">
                    <div className="inline-flex flex-col items-center justify-center px-5 mt-1 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                        <svg className="w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 group-hover-text-blue-600 dark-group-hover-text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
                        </svg>
                        <span className="text-sm text-gray-500 dark-text-gray-400 group-hover-text-blue-600 dark-group-hover-text-blue-500">Home</span>
                    </div>
                </Link>
                <Link href="/shops">
                    <div className="inline-flex flex-col items-center justify-center px-5 mt-1 hover-bg-gray-800 group">
                        <svg className="w-5 h-5 mb-2 text-gray-500 dark-text-gray-400 group-hover-text-blue-600 dark-group-hover-text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M11.074 4 8.442 .408A.95.95 0 0 0 7.014 .254L2.926 4h8.148ZM9 13v-1a4 4 0 0 1 4-4h6V6a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h17a1 1 0 0 0 1-1v-2h-6a4 4 0 0 1-4-4Z"/>
                            <path d="M19 10h-6a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1Zm-4.5 3.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM12.62 4h2.78L12.539 .41a1.086 1.086 0 1 0-1.7 1.352L12.62 4Z"/>
                        </svg>
                        <span className="text-sm text-gray-500 dark-text-gray-400 group-hover-text-blue-600 dark-group-hover-text-blue-500">Shops</span>
                    </div>
                </Link>
                <Link href="/chat">
                    <div className="inline-flex flex-col items-center justify-center px-5 mt-1 hover-bg-gray-800 group">
                        <svg className="w-5 h-5 mb-2 text-gray-500 dark-text-gray-400 group-hover-text-blue-600 dark-group-hover-text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 12.25V1m0 11.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M4 19v-2.25m6-13.5V1m0 2.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M10 19V7.75m6 4.5V1m0 11.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM16 19v-2"/>
                        </svg>
                        <span className="text-sm text-gray-500 dark-text-gray-400 group-hover-text-blue-600 dark-group-hover-text-blue-500">Chat</span>
                    </div>
                </Link>
                <Link href="/settings">
                    <div className="inline-flex flex-col items-center justify-center px-5 mt-1 hover-bg-gray-800 group">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" strokeWidth="2" stroke="currentColor" className="w-5 h-5 mb-2 text-gray-500 dark-text-gray-400 group-hover-text-blue-600 dark-group-hover-text-blue-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                        <span className="text-sm text-gray-500 dark-text-gray-400 group-hover-text-blue-600 dark-group-hover-text-blue-500">Settings</span>
                    </div>
                </Link>
            </div>
        </div>
    );
}



