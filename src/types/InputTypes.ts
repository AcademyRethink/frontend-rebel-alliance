export type TextInputProps = {
  className: string;
  placeHolder: string;
  value?: string | number | readonly string[] | undefined;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};
