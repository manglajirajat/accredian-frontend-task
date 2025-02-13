export default function NavigationMenu() {
    return (
        <div className="flex justify-center mt-4">
            <div className="bg-blue-50 inline-block px-18 rounded-full"> 
                <ul className="flex items-center gap-18 h-12 text-slate-700">
                    <li className="hover:underline">Refer</li>
                    <li className="hover:underline">Benefits</li>
                    <li className="hover:underline">FAQs</li>
                    <li className="hover:underline">Support</li>
                </ul>
            </div>
        </div>
    );
}
