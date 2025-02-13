import { Headset,ChevronRight } from "lucide-react";

export default function GetInTouch(){
    return(
        <div className="flex justify-around my-15 mb-24">
            <div className="bg-blue-500 text-white p-12 py-14 rounded-lg flex gap-20 items-center">
                <div className="flex gap-4 items-center">
                    <div className="bg-white p-2 rounded-md text-blue-500 border-4 border-blue-400">
                        <Headset size={55}/>
                    </div>
                    <div>
                        <p className="font-bold text-xl">Want to delve deeper into the programm?</p>
                        <p>Share your details to recieve expert insights from our program team!</p>
                    </div>
                </div>

                <div>
                    <button className="bg-white px-8 py-2 text-blue-500 font-semibold rounded-md">Get in touch <ChevronRight className="inline-block"/></button>
                </div>
            </div>
        </div>
    )
}