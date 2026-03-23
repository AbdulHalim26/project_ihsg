import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react'; 
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 dark:bg-[#2B3139]/95 backdrop-blur-md border-b border-gray-200 dark:border-slate-700 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          <div className="flex-shrink-0 flex items-center">
            <Image 
              src="/logo-aksara.png" 
              alt="Aksara Logo" 
              width={200} 
              height={80} 
              className="w-auto h-20 object-contain"
              priority
            />
          </div>

          <div className="hidden md:flex items-center space-x-8">
            
            <div className="group relative cursor-pointer">
              <button className="flex items-center text-slate-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-white font-semibold transition-colors">
                Trading <ChevronDown className="ml-1 w-4 h-4 transition-transform group-hover:rotate-180" />
              </button>
            </div>

            <div className="group relative cursor-pointer">
              <button className="flex items-center text-slate-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-white font-semibold transition-colors">
                Produk <ChevronDown className="ml-1 w-4 h-4 transition-transform group-hover:rotate-180" />
              </button>
            </div>

            <div className="group relative cursor-pointer">
              <button className="flex items-center text-slate-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-white font-semibold transition-colors">
                Edukasi <ChevronDown className="ml-1 w-4 h-4 transition-transform group-hover:rotate-180" />
              </button>
            </div>

            <Link href="#" className="text-slate-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-white font-semibold transition-colors">
              Promosi
            </Link>

            <Link href="#" className="text-slate-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-white font-semibold transition-colors">
              Tentang Kami
            </Link>

            <div className="pl-6 border-l-2 border-gray-300 dark:border-slate-600 flex items-center">
              <ThemeToggle />
            </div>

          </div>
        </div>
      </div>
    </nav>
  );
}