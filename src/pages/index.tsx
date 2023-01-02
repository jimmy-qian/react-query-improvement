import * as i from 'types';

const Home: i.NextPageComponent = () => {
  return <>hello world </>;
};

Home.layout = (page, pageProps) => {
  return <>{page}</>;
};

export default Home;
