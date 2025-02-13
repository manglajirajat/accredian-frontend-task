import { UserRoundPlus, NotepadText, Wallet } from 'lucide-react';

export default function ReferProcess() {
  return (
    <div className="mt-20 bg-blue-50 p-8">
      <h1 className="font-semibold text-3xl text-center">How Do I<span className="text-blue-500"> Refer ?</span></h1>

      <div className="mt-24 flex flex-col justify-center items-center flex-wrap gap-8 md:flex-row lg:flex-row lg:gap-24">
        <div className="h-70 w-70 rounded-full shadow-2xl flex flex-col justify-center items-center">
          <UserRoundPlus size={60} className='text-blue-500 text-bold'/>
          <p className="text-center p-8">Submit referrals easily via our website's referral section.</p>
        </div>
        <div className="h-70 w-70 rounded-full shadow-2xl flex flex-col justify-center items-center">
          <NotepadText size={60} className='text-blue-500 text-bold'/>
          <p className='text-center p-8'>Earn rewards once your referral joins as Accredian program.</p>
        </div>
        <div className="h-70 w-70 rounded-full shadow-2xl flex flex-col justify-center items-center">
          <Wallet size={60} className='text-blue-500 text-bold'/>
          <p className='text-center p-8'>Referrer receives a bonus 30 days after program enrollment.</p>
        </div>
      </div>

      <button className="bg-blue-500 text-white px-8 py-2 mt-24 rounded-lg block mx-auto">Refer Now</button>
    </div>
  );
}
