import { AppProps } from 'next/app';
import { SidebarDrawerProvider } from '../context/SidebarDrawerProps';
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SidebarDrawerProvider>
      <Component {...pageProps} />
    </SidebarDrawerProvider>
  )
}

export default MyApp
