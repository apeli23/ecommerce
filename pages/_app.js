import {useEffect} from 'react';
import '../styles/globals.css';
import { StoreProvider } from '../utils/Store';

function MyApp({ Component, pageProps }) {
//  stop material-ui from rendering on server side
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if(jssStyles){
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return (
    <StoreProvider>
      <Component {...pageProps} />
    </StoreProvider>
  ) 
}

export default MyApp
