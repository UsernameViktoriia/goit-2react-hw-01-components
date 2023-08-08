import { StyledButton } from './Button.styled';

export const Button = ({
  onClick,
  icon: Icon = null,
  type = 'button',
  disabled = false,
  children,
}) => {
  return (
    <StyledButton disabled={disabled} type={type} onClick={onClick}>
      {Icon && <Icon size="24" />}
      {children}
    </StyledButton>
  );
};
