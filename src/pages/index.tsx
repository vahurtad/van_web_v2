import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import { AppConfig } from '@/utils/AppConfig';

const Index = () => {
  const router = useRouter();
  const [isLoading, setLoading] = useState(true);

  return (
    <Main
      meta={
        <Meta title={AppConfig.title} description={AppConfig.description} />
      }
    >
      <div>
        <Image
          className={`w-16 duration-700 ease-in-out md:w-32 lg:w-48 ${
            isLoading
              ? 'grayscale-0 blur-md scale-125'
              : 'grayscale-0 blur-none scale-100'
          }`}
          onLoadingComplete={() => setLoading(false)}
          src={`${router.basePath}/assets/images/van-typographytest.gif`}
          alt="Van is displayed as animated 3D typography style"
          layout="responsive"
          quality="100"
          priority
          width="1200"
          height="700"
        />
        <img
          className={`duration-700 ease-in-out ${
            isLoading
              ? 'grayscale-0 blur-md scale-125'
              : 'grayscale-0 blur-none scale-100'
          }`}
          onLoad={() => setLoading(false)}
          src={`${router.basePath}/assets/images/van-typographytest.gif`}
          alt="Van is displayed as animated 3D typography style"
        />
      </div>
    </Main>
  );
};

export default Index;
