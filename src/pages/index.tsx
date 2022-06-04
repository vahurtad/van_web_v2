import { useRouter } from 'next/router';

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
      <img
        src={`${router.basePath}/assets/images/van-typographytest.gif`}
        alt="Van is displayed as animated 3D typography style"
      />
    </Main>
  );
};

export default Index;
