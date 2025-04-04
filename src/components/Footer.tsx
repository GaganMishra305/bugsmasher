export default function Footer() {
    return (
      <footer className="bg-gradient-to-r from-blue-900 to-black text-white py-6 border-t border-cyan-500/30">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
          
          {/* Left Section - Branding */}
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h2 className="text-xl font-bold">
              Bug<span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">Smasher</span>
            </h2>
            <p className="text-gray-300 text-sm">Hunt. Report. Win.</p>
          </div>
  
          {/* Center Section - Status */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-2">
              <span className="h-2 w-2 rounded-full bg-cyan-500 animate-pulse"></span>
              <p className="text-gray-300 text-sm">
                Event Status: <span className="text-cyan-400">Active</span>
              </p>
            </div>
          </div>
  
          {/* Right Section */}
          <div className="flex flex-col items-center md:items-end">
            <p className="text-gray-300 text-sm mb-2">© {new Date().getFullYear()} BugSmasher</p>
            <div className="flex space-x-4">
              <a href="https://github.com/axios-iiitl" className="text-gray-300 hover:text-cyan-400 transition">
                Github
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
}