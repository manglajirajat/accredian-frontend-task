import { ChevronDown } from 'lucide-react';

export default function FAQ(){
    return(
        <div className="p-8 pt-12">
            <h1 className="text-center text-3xl font-semibold mt-12">Frequently Asked <span className="text-blue-500">Question</span></h1>

            <div className="flex justify-around mt-12">
                <div className="w-1/3 p-12 flex flex-col gap-4">
                    <button className="block text-blue-500 shadow-2xl px-12 py-4 font-semibold">Eligiblity</button>
                    <button className="block text-slate-600 border-1 border-black px-12 py-4">How To Use?</button>
                    <button className="block text-slate-600 border-1 border-black px-12 py-4">Terms & Conditions</button>
                </div>
                <div className="p-12">
                    <p className="text-blue-500 font-semibold">Do I need to have prior Product Mangement and Project Mangement experience to enroll in the program? <ChevronDown className='inline-block'/></p>
                    <p className="mt-6">No the programm is designed to be inclusive of all the levels of experience. All the topic will be covered from basics, making it suitable for individuals from any feild of work.</p>
                    <p className="mt-6 font-semibold">What is minimum system configuration required?</p>
                </div>
            </div>
        </div>
    )
}