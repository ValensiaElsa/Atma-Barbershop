import AcmeLogo from '@/app/ui/acme-logo';
import Image from 'next/image';
import { kanit } from '@/app/ui/fonts';
import LoginForm from '@/app/ui/login-form';
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Login',
};

export default function LoginPage() {
    return (
        <main className="flex items-center justify-center md:h-screen">
            <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
                <div className="flex h-20 w-full items-end rounded-lg bg-gradient-to-r from-black to-amber-950 p-3 md:h-36 relative">
                    <div className={`${kanit.className} flex flex-row items-center leading-none text-white`}>
                        <p className="text-[40px]">Atma<br/>Barbershop </p>
                    </div>
                    <div className="absolute bottom-0 right-0 mr-4 mb-4">
                        <div className="relative">
                            <Image
                                src="/logo_hero.png"
                                width={65}
                                height={65}
                                className="hidden md:block"
                                alt="Screenshots of the dashboard project showing desktop version"
                            />
                            <Image
                                src="/logo_hero.png"
                                width={30}
                                height={30}
                                className="block md:hidden"
                                alt="Screenshot of the dashboard project showing mobile version"
                            />
                        </div>
                    </div>
                </div>
                <LoginForm />
            </div>
        </main>
    );
}