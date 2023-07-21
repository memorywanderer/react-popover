import { useEffect } from 'react'


export const useClickOutside = (ref: React.MutableRefObject<HTMLDivElement | null>, callback: () => void) => {
  useEffect(() => {
    const onOutsideClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        callback();
      }
    }

    setTimeout(() => document.addEventListener('click', onOutsideClick), 0)

    return () => {
      setTimeout(() => document.removeEventListener('click', onOutsideClick), 0)
    }
  }, [ref, callback])
}