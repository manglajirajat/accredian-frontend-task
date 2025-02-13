import SmoothScrollAnchor from "./SmoothScrollAnchor";

export default function NavigationMenu() {
    return (
        <div className="flex justify-center mt-4">
            <div className="bg-blue-50 inline-block px-18 rounded-full"> 
                <ul className="flex items-center gap-18 h-12 text-slate-700">
                    <SmoothScrollAnchor id="#refer">Refer</SmoothScrollAnchor>
                    <SmoothScrollAnchor id="#benefits">Benefits</SmoothScrollAnchor>
                    <SmoothScrollAnchor id="#faq">FAQ</SmoothScrollAnchor>
                    <li className="hover:underline">Support</li>
                </ul>
            </div>
        </div>
    );
}
