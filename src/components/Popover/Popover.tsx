import { CSSProperties, ReactNode, useEffect } from 'react'
import styles from './Popover.module.css'

type PopoverProps = {
  children: ReactNode
  isOpen: boolean,
  anchorEl: HTMLButtonElement | null,
  position: 'top' | 'right' | 'bottom' | 'left',
}

const calculateTop = (
  anchorEl: HTMLButtonElement | null,
  position: 'top' | 'right' | 'bottom' | 'left'
): number => {
  if (!anchorEl) return 0;
  switch (position) {
    case 'left':
      return anchorEl.offsetTop;
    case 'right':
      return anchorEl.offsetTop;
    case 'top':
      return anchorEl.offsetTop - anchorEl.offsetHeight / 2;
    case 'bottom':
      return anchorEl.offsetTop + anchorEl.offsetHeight + 15;
    default:
      return 0;
  }
};

const calculateLeft = (
  anchorEl: HTMLButtonElement | null,
  position: string
): number => {
  if (!anchorEl) return 0;
  switch (position) {
    case 'left':
      return anchorEl.offsetLeft - anchorEl.offsetWidth;
    case 'right':
      return anchorEl.offsetLeft + anchorEl.offsetWidth + 15;
    default:
      return anchorEl.offsetLeft;
  }
};

export const Popover = ({ children, isOpen, anchorEl, position = 'bottom' }: PopoverProps) => {
  const popoverStyles: CSSProperties = {
    top: calculateTop(anchorEl, position),
    left: calculateLeft(anchorEl, position),
  }

  useEffect(() => {
    console.log('sss', anchorEl?.getBoundingClientRect())
  }, [])
  return (
    <section
      style={popoverStyles}
      className={`${styles.popover} ${isOpen ? styles.open : ''}`}>
      {children}
    </section>
  )
}