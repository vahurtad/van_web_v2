import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const About = () => (
  <Main
    meta={
      <Meta
        title="Vanessa Hurtado - Portfolio"
        description="Vanessa's portfolio"
      />
    }
  >
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione fuga
      recusandae quidem. Quaerat molestiae blanditiis doloremque possimus labore
      voluptatibus distinctio recusandae autem esse explicabo molestias officia
      placeat, accusamus aut saepe.
    </p>
    <p>
      Check out my GitHub repositories:
      <ul>
        <li>
          <a href="https://github.com/vahurtad/repository1">Repository 1</a>
        </li>
        <li>
          <a href="https://github.com/vahurtad/repository2">Repository 2</a>
        </li>
        <li>
          <a href="https://github.com/vahurtad/repository3">Repository 3</a>
        </li>
      </ul>
    </p>
  </Main>
);

export default About;
