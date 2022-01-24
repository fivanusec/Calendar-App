import { StlyedSelect } from "./Select.style";

export const Select = ({ children, onChange, ...props }) => {
  return (
    <StlyedSelect onChange={onChange} {...props}>
      {children}
    </StlyedSelect>
  );
};
