import Image from 'next/image';;
import { kanit } from '@/app/ui/fonts';

export default function AcmeLogo() {
  return (
    <div
      className={`${kanit.className} flex flex-row items-center leading-none text-white`}
    >
       <Image
        src="/logo_hero.png"
        width = {30}
        height = {30}
        className="hidden md:block mr-2"
        alt="Screenshots of the dashboard project showing desktop version"
      />
       <Image
        src="/logo_hero.png"
        width = {30}
        height = {30}
        className="block md:hidden mr-2"
        alt="Screenshot of the dashboard project showing mobile version"
      />
      <p className="text-[30px]">Atma Barbershop</p>
    </div>
  );
}
