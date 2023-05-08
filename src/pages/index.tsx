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
              ? 'grayscale-0 blur-md scale-125'
              : 'grayscale-0 blur-none scale-100'
          }`}
          onLoadingComplete={() => setLoading(false)}
          src={`/typography-image-optimized.jpg`}
          alt="Van is displayed as animated 3D typography style"
          layout="responsive"
          quality="100"
          priority
          width="1200"
          height="700"
          // https://uploadcare.com/blog/next-js-image-optimization/
          unoptimized={true}
          loading="eager"
        />
      </div>
    </Main>
  );
};

export default Index;
