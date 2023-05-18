import Image from 'next/image';
import React, { useState } from 'react';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import { AppConfig } from '@/utils/AppConfig';

const Index = () => {
  const [isLoading, setLoading] = useState(true);

  return (
    <Main
      meta={
        <Meta title={AppConfig.title} description={AppConfig.description} />
      }
    >
      <div>
        {/* https://github.com/vercel/next.js/issues/34310 */}
        <Image
          className={`w-16 duration-700 ease-in-out md:w-32 lg:w-48 ${
            isLoading
              ? 'scale-125 blur-md grayscale-0'
              : 'scale-100 blur-none grayscale-0'
          }`}
          onLoadingComplete={() => setLoading(false)}
          src={`/typography-image-optimized.jpg`}
          alt="Van is displayed as animated 3D typography style"
          quality={75}
          priority
          width={1200}
          height={700}
          loading="eager"
        />
      </div>
    </Main>
  );
};

export default Index;
