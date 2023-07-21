type ButtonProps = {
  onButtonClick: (event: React.MouseEvent<HTMLButtonElement>) => void,
  isOpen: boolean
}

export const Button = ({ onButtonClick, isOpen }: ButtonProps) => {
  return (
    <button
      type="button"
      aria-expanded={isOpen}
      aria-haspopup="dialog"
      onClick={onButtonClick}
    >
      Button
    </button>
  )
}