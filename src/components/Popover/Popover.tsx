import { CSSProperties, ReactNode, useState, useRef } from 'react'
import styles from './Popover.module.css'
import { useClickOutside } from '../../hooks/useClickOutside';

type PopoverProps = {
  children: ReactNode,
  position: 'top' | 'right' | 'bottom' | 'left',
  trigger: (handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void, isOpen: boolean) => ReactNode;
}

const calculateTop = (
  popoverRef: HTMLDivElement,
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
      console.log(popoverRef?.offsetHeight)
      return anchorEl.offsetTop - (anchorEl.offsetHeight / 2 + popoverRef?.offsetHeight);
    case 'bottom':
      return anchorEl.offsetTop + anchorEl.offsetHeight + 15;
    default:
      return 0;
  }
};

const calculateLeft = (
  popoverRef: HTMLDivElement,
  anchorEl: HTMLButtonElement | null,
  position: string
): number => {
  if (!anchorEl) return 0;
  switch (position) {
    case 'left':
      return anchorEl.offsetLeft - popoverRef.offsetWidth - 15;
    case 'right':
      return anchorEl.offsetLeft + anchorEl.offsetWidth + 15;
    default:
      return anchorEl.offsetLeft;
  }
};

export const Popover = ({ children, position = 'bottom', trigger }: PopoverProps) => {
  const popoverRef = useRef<HTMLDivElement | null>(null)
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)
  const [isOpen, setIsOpen] = useState(false)

  popoverRef && useClickOutside(popoverRef, () => { setIsOpen(false) })

  const popoverStyles: CSSProperties = {
    top: popoverRef.current ? calculateTop(popoverRef.current, anchorEl, position) : 0,
    left: popoverRef.current ? calculateLeft(popoverRef.current, anchorEl, position) : 0,
  }

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget)
    setIsOpen(isOpen => !isOpen)
  }

  return (
    <>
      <section
        ref={popoverRef}
        style={popoverStyles}
        className={`${styles.popover} ${isOpen ? styles.open : ''}`}
      >
        {children}
      </section>
      {trigger(handleButtonClick, isOpen)}
    </>

  )
}