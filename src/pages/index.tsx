import { useRouter } from 'next/router';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import { ThemeChanger } from '@/templates/Themes';
import { AppConfig } from '@/utils/AppConfig';

const Index = () => {
  const router = useRouter();

  return (
    <Main
      meta={
        <Meta title={AppConfig.title} description={AppConfig.description} />
      }
    >
      <ThemeChanger />
      <img
        src={`${router.basePath}/assets/images/nextjs-starter-banner.png`}
        alt="Van is displayed as animated 3D typography style"
      />
    </Main>
  );
};

export default Index;
