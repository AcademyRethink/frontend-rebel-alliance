export type TextInputProps = {
  className: string;
  label: string;
  placeHolder: string;
  value?: string | number | readonly string[] | undefined;
  errorMessage?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
};
