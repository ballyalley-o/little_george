import '@globals'
import 'react-toastify/dist/ReactToastify.css'
import { Inter, Manrope } from 'next/font/google'
// @components
import { Navbar } from '@components'
import { ToastContainer } from 'react-toastify'
// @config
import { SETTING, TOAST_POSITION } from '@config'

const inter = Inter({ subsets: ['latin'] })
const manrope = Manrope({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <html lang='en'>
        <body className={inter.className}>
          <main className='max-w-10xl mx-auto'>
            <Navbar />
            {children}
          </main>
          <ToastContainer position={TOAST_POSITION} {...SETTING.toast} />
        </body>
      </html>
    </>
  )
}
