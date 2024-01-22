'use client'

import { ReactNode } from 'react'
import Header from '../Header/Header'
import { NextUIProvider } from '@nextui-org/react'

const LayoutWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <NextUIProvider>
      <Header />
      {children}
    </NextUIProvider>
  )
}

export default LayoutWrapper
