import { ChevronDown } from 'lucide-react';

export default function PrimaryHeader() {
    return (
        <nav className="flex justify-between items-center h-14 text-sm px-4 md:px-8 lg:px-20">
            <div className="flex items-center gap-4">
                <div className="text-center">
                    <p className="text-blue-500 font-bold text-2xl">accredian</p>
                    <p className="text-slate-400 text-xs">credentials that matter</p>
                </div>

                <div className="relative">
                    <select className="bg-blue-600 text-white px-4 pr-6 py-2 rounded-md appearance-none cursor-pointer relative">
                        <option value="">Courses</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-3 text-white" size={16} />
                </div>
            </div>

            <div>
                <ul className="hidden md:flex items-center gap-4">
                    <li>Refer & Earn</li>
                    <li>Resources</li>
                    <li>About Us</li>
                    <li className="bg-slate-200 px-4 py-2 rounded-md cursor-pointer">Login</li>
                    <li className="bg-blue-600 text-white px-4 py-2 rounded-md cursor-pointer">Try for free</li>
                </ul>

                <div className="md:hidden">
                    <button className="text-blue-600 font-semibold">☰ Menu</button>
                </div>
            </div>
        </nav>
    );
}
