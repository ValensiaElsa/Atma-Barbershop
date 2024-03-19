

import Image from 'next/image';
import { kanit, anton} from '@/app/ui/fonts';
import { UserIcon } from '@heroicons/react/24/outline';

export default function Page() {
    return (
        <main className="relative min-h-screen flex-col p-6 ">
            <Image
                src="/home/bg_hero.png"
                layout="fill"
                objectFit="cover"
                className="absolute z-0"
                alt="Screenshots of the dashboard project showing desktop version"
            />
            <nav
                className="fixed inset-x-0 top-0 z-10 w-full px-4 py-1 bg-transparent"
            >
              <span>Login</span>
            </Link>
          </header>
          <Link
            href= "/dashboard"
            >
          <h1
            className={`${kanit.className} antialiased flex text-white 
 text-[20px] hover:text-teal-500`}
          >
            Go to Dashboard
            <ArrowRightCircleIcon className='w-6 mx-2' />
          </h1>
        </Link>
      </div>
      <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
        {/* Add Hero Images Here */}
        
      </div>
    </div>
    </main >
  );
}
