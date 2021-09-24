import styles from './card.module.css'
import React from 'react'

interface Props {
  children: React.ReactNode;
  className?: string;
}

export const Card = ({ children, className }: Props) => (
  <div className={`${styles.card} ${className}`}>
    {children}
  </div>
)
