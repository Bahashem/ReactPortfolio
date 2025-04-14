export function Header({current, setCurrent}){
    return (
        <header className="bg-gradient-to-r from-green-200 via pink-100 to-yellow-100 shadow-md p-4 flex flex -col md:flex-row justify-between items-center">
                <h1 className="text-3xl font-bold text-green-700">Diana Gaston</h1>


            <nav> className="mt-2 md:mt-0"
                <ul className="flex space-x-4">
                    <li onClick={() => setCurrent('home')} className={`cursor-pointer text-lg font-medium hover:text-pink-500 transition-colors duration-300 ${current === 'home' ? 'text-gold-600 underline' : 'text-gray-700'}`}>Home</li>
                    <li onClick={() => setCurrent('aboutMe')} className={`cursor-pointer text-lg font-medium hover:text-pink-500 transition-colors duration-300 ${current === 'aboutMe' ? 'text-gold-600 underline' : 'text-gray-700'}`}>About Me</li>
                    <li onClick={() => setCurrent('portfolio')} className={`cursor-pointer text-lg font-medium hover:text-pink-500 transition-colors duration-300 ${current === 'portfolio' ? 'text-gold-600 underline' : 'text-gray-700'}`}>Portfolio</li>
                    <li onClick={() => setCurrent('resume')} className={`cursor-pointer text-lg font-medium hover:text-pink-500 transition-colors duration-300 ${current === 'resume' ? 'text-gold-600 underline' : 'text-gray-700'}`}>Resume</li>
                    <li onClick={() => setCurrent('contact')} className={`cursor-pointer text-lg font-medium hover:text-pink-500 transition-colors duration-300 ${current === 'contact' ? 'font-bold' : ''}`}>Contact</li>
        
                </ul>
            </nav>
        </header>
    );
}