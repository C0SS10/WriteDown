export type ToolButtonProps = {
  title: string;
  icon: React.ReactNode;
  onClick: () => void;
  isActive: boolean;
  disabled?: boolean;
};
