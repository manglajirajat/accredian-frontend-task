import { ChevronRight,GraduationCap } from 'lucide-react';

export default function Benefits() {
    return(
        <div className="mt-20">
            <h1 className="text-center text-3xl font-semibold mt-12">What Are The <span className="text-blue-500">Referral Benifits</span></h1>
        
            <div className="flex flex-wrap justify-center gap-8 mt-12">
                <div>
                    <ul className="space-y-4 shadow-2xl rounded-lg">
                        <li className='flex justify-between bg-blue-500 text-white p-2 px-4 rounded-t-lg'><p>ALL PROGRAM</p> <ChevronRight /></li>
                        <li className='flex justify-between p-2 border-b-1 mx-2 border-slate-400'><p>PRODUCT MANAGEMENT</p> <ChevronRight /></li>
                        <li className='flex justify-between p-2 border-b-1 mx-2 border-slate-400'><p>STRAERGY & LEADERSHIP</p> <ChevronRight /></li>
                        <li className='flex justify-between p-2 border-b-1 mx-2 border-slate-400'><p>FINTECH</p> <ChevronRight /></li>
                        <li className='flex justify-between p-2 border-b-1 mx-2 border-slate-400'><p>SENIOR MANAGEMENT</p> <ChevronRight /></li>
                        <li className='flex justify-between p-2 border-b-1 mx-2 border-slate-400'><p>DATA SCIENCE</p> <ChevronRight /></li>
                        <li className='flex justify-between p-2 border-b-1 mx-2 border-slate-400'><p>DIGITAL TRANSFORMATION</p> <ChevronRight /></li>
                        <li className='flex justify-between p-2 mx-2 rounded-b-lg'><p>BUSINESS ANALYTICS</p> <ChevronRight /></li>
                    </ul>
                </div>

                <div className='grid grid-cols-4 bg-blue-50 rounded-lg shadow-2xl w-250'>
                    <div className='col-span-2 border-r-1 border-slate-400'>
                        <ul className='space-y-4 text-sm'>
                            <li className='text-blue-600 font-semibold p-2 bg-blue-200 rounded-tl-lg text-base'>Programs</li>
                            <li className='p-2'><GraduationCap className='inline-block mr-2 text-indigo-500'/>Professional Certificate Program in Product Mangement</li>
                            <li className='p-2'><GraduationCap className='inline-block mr-2 text-indigo-500'/>ProfessionalPG Certificate Program in Strategic Product Management</li>
                            <li className='p-2'><GraduationCap className='inline-block mr-2 text-indigo-500'/>ProfessionalExecutive Program in Data Driven Product Management</li>
                            <li className='w-5/6 px-2'><GraduationCap className='inline-block mr-2 text-indigo-500'/>ProfessionalExecutive Program in Product Management and Digital Transformation</li>
                            <li className='w-5/6 px-2'><GraduationCap className='inline-block mr-2 text-indigo-500'/>ProfessionalExecutive Program in Product Management and Digital Transformation</li>
                            <li className='p-2'><GraduationCap className='inline-block mr-2 text-indigo-500'/>ProfessionalAdvanced Certification in Product Management</li>
                            <li className='w-5/6 px-2 pb-2'><GraduationCap className='inline-block mr-2 text-indigo-500'/>ProfessionalExecutive Program in Product Management and Project Management</li>
                        </ul>
                    </div>
                    
                    <div className='border-r-1 border-slate-400'>
                        <ul className='space-y-4'>
                            <li className='text-blue-600 font-semibold p-2 text-center bg-blue-200'>Referrer Bonus</li>
                            <li className='py-2 text-center'>₹ 7,000</li>
                            <li className='py-2 text-center'>₹ 9,000</li>
                            <li className='py-2 text-center'>₹ 10,000</li>
                            <li className='py-2 text-center'>₹ 10,000</li>
                            <li className='py-2 text-center'>₹ 10,000</li>
                            <li className='py-2 text-center'>₹ 10,000</li>
                            <li className='py-2 text-center'>₹ 10,000</li>
                        </ul>
                    </div>

                    <div>
                        <ul className='space-y-4'>
                            <li className='text-blue-600 font-semibold p-2 text-center bg-blue-200 rounded-tr-lg'>Referee Bonus</li>
                            <li className='py-2 text-center'>₹ 11,000</li>
                            <li className='py-2 text-center'>₹ 9,000</li>
                            <li className='py-2 text-center'>₹ 10,000</li>
                            <li className='py-2 text-center'>₹ 10,000</li>
                            <li className='py-2 text-center'>₹ 10,000</li>
                            <li className='py-2 text-center'>₹ 10,000</li>
                            <li className='py-2 text-center'>₹ 10,000</li>
                        </ul>
                    </div>
                </div>
            </div>

            <button className="bg-blue-500 text-white px-8 py-2 mt-24 rounded-lg block mx-auto">Refer Now</button>
        </div>
    )
}