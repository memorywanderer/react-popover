import { useEffect } from 'react'


export const useClickOutside = (ref: React.MutableRefObject<HTMLDivElement | null>, callback: () => void) => {
  useEffect(() => {
    const onOutsideClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        callback();
      }
    }
    document.addEventListener('click', onOutsideClick)

    return () => {
      document.removeEventListener('click', onOutsideClick);
    }
  }, [ref, callback])
}