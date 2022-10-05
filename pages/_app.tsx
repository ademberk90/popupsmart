import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { setupStore } from '../store'

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <Provider store={setupStore()}>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
