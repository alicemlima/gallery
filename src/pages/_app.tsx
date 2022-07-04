import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css';

import AppBar from '../components/AppBar';
import FilterBar from '../components/FilterBar';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <AppBar />
    <FilterBar />
    <Component {...pageProps} />
    </>
  )
}

export default MyApp
