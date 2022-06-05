import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import { AppConfig } from '@/utils/AppConfig';

const Index = () => {
  const router = useRouter();

  return (
    <Main
      meta={
        <Meta title={AppConfig.title} description={AppConfig.description} />
      }
    >
      <div>
        <Image
          src={`${router.basePath}/assets/images/van-typographytest.gif`}
          alt="Van is displayed as animated 3D typography style"
          width="500"
          height="500"
          layout="fill"
          objectFit="contain"
        />

        <img
          src={`${router.basePath}/assets/images/van-typographytest.gif`}
          alt="Van is displayed as animated 3D typography style"
        />
      </div>
    </Main>
  );
};

export default Index;
