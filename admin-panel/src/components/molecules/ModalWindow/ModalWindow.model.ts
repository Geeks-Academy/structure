export interface IModalWindow {
  isActive: boolean;
  title: string;
  description: string;
  handleConfirm: () => void;
  handleCancel: () => void;
}
