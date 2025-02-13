import { Facebook, Twitter, Linkedin, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <div>
          <h2 className="text-2xl font-bold text-white">accredian</h2>
          <p className="text-gray-400 text-sm mt-1">credentials that matter</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Programs</h3>
          <ul className="space-y-2 text-gray-400">
            <li>Data Science & AI</li>
            <li>Product Management</li>
            <li>Business Analytics</li>
            <li>Digital Transformation</li>
            <li>Business Management</li>
            <li>Project Management</li>
            <li>Strategy & Leadership</li>
            <li>Senior Management</li>
            <li>Fintech</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="text-gray-400 text-sm space-y-2">
            <li>Email: <span className="text-blue-400">admissions@accredian.com</span></li>
            <li>Phone: +91 9999999999</li>
            <li>Office Address: India</li>
          </ul>
          <div className="flex space-x-4 mt-4">
            <Facebook className="text-gray-400 hover:text-white cursor-pointer" />
            <Twitter className="text-gray-400 hover:text-white cursor-pointer" />
            <Linkedin className="text-gray-400 hover:text-white cursor-pointer" />
            <Instagram className="text-gray-400 hover:text-white cursor-pointer" />
            <Youtube className="text-gray-400 hover:text-white cursor-pointer" />
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Accredian</h3>
          <ul className="text-gray-400 space-y-2">
            <li>About</li>
            <li>Career</li>
            <li>Blog</li>
            <li>Admission Policy</li>
            <li>Referral Policy</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>FAQs</li>
          </ul>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm mt-8">
        © 2024 Accredian. A Brand of Fullstack Education Pvt. Ltd. All Rights Reserved.
      </div>
    </footer>
  );
}
