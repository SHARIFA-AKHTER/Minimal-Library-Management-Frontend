export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 border-t border-gray-700">
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
        
        {/* Left side - Logo or Name */}
        <div className="text-center md:text-left">
          <h2 className="text-lg md:text-xl font-semibold text-white">
            📚 Minimal Library Management System
          </h2>
          <p className="text-sm md:text-base text-gray-400">
            © 2025 All rights reserved.
          </p>
        </div>
        
        {/* Center Divider for larger screens */}
        <div className="hidden md:block border-l border-gray-700 h-12"></div>

        {/* Right side - Navigation Links */}
        <div className="flex flex-wrap justify-center md:justify-end gap-4">
          <a
            href="#"
            className="hover:text-blue-400 transition text-sm md:text-base"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="hover:text-blue-400 transition text-sm md:text-base"
          >
            Terms of Service
          </a>
          <a
            href="#"
            className="hover:text-blue-400 transition text-sm md:text-base"
          >
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
}


