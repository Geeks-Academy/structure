import Raphael from 'raphael';
import { useAsyncEffect } from 'hooks';
import { transformUsers } from './members';
import './style.css';
import Treant from './Treant';

const Structure = (): JSX.Element => {
  useAsyncEffect(async () => {
    window.Raphael = Raphael;
    new Treant(await transformUsers());
  });

  return <div id="basic-example" style={{ height: '100vh', width: '100vw' }} />;
};

export default Structure;
