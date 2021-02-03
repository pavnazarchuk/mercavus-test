export interface IButton extends React.HTMLProps<HTMLButtonElement> {
  onClick?: () => void;
  type?: 'submit' | 'button';
  mode?: 'primary' | 'secondary';
}
