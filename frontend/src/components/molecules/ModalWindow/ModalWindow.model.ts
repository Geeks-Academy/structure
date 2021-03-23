export type TButton = "Update" | "Delete"
export interface IModalWindow {
  isActive: boolean;
  title: TButton;
  description: string;
  handleConfirm: () => void;
  handleCancel: () => void;
}
