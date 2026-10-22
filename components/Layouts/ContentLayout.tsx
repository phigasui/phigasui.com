import { Card } from '../Card/Card'
import { Header } from '../Header/Header'
import { SEO } from '../SEO/SEO'
import React from 'react'

interface Props {
  title?: string
  description?: string
  children: React.ReactNode
}

export const ContentLayout = ({ title, description, children }: Props) => (
  <Card>
    {title && <SEO title={title} description={description} />}
    <Header />
    {children}
  </Card>
)
