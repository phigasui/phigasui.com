import { Card } from '../Card/Card'
import { Header } from '../Header/Header'
import React from 'react'

interface Props {
  children: React.ReactNode;
}

export const ContentLayout = ({ children }: Props) => (
  <Card>
    <Header />
    {children}
  </Card>
)
