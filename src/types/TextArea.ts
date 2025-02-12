export type TextareaProps = {
  placeholder: string;
  id?: string;
  value?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
};
