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
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: 0,
          paddingTop: '56.25%',
        }}
      >
        <Image
          className={`w-16 duration-700 ease-in-out md:w-32 lg:w-48 ${
            isLoading
              ? 'scale-125 blur-md grayscale-0'
              : 'scale-100 blur-none grayscale-0'
          }`}
          onLoadingComplete={() => setLoading(false)}
          src={`/typography-image.png`}
          alt="Van is displayed as animated 3D typography style"
          priority
          layout="fill"
          objectFit="cover"
          loading="eager"
        />
      </div>
    </Main>
  );
};

export default Index;
