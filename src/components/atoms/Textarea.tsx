import { TextareaProps } from "@/types/TextArea";

export const Textarea = ({
  placeholder,
  value,
  onChange,
  disabled,
}: TextareaProps) => {
  return (
    <textarea
      name="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
      className="bg-slate-400/10 border border-slate-200/20 shadow-md resize-none rounded-md p-4 w-[46rem] h-[36rem] text-xl text-slate-200 outline-none mx-4"
    ></textarea>
  );
};
