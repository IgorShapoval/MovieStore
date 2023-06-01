import { Button } from "./Button.styled";

export const Btn = ({ children, className, onClick }) => {
  return (
    <Button onClick={onClick} className={className}>
      {children}
    </Button>
  );
};
