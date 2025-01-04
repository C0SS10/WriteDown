export interface ToolButtonProps {
  title: string;
  icon: React.ReactElement;
  onClick?: () => void;
  isActive: boolean;
}
