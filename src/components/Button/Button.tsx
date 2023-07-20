type ButtonProps = {
  onButtonClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export const Button = ({ onButtonClick }: ButtonProps) => {
  return (
    <button onClick={onButtonClick}>Button</button>
  )
}