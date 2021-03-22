export interface IModalWindow {
  isActive: boolean;
  description: string;
  handleConfirm: () => void;
  handleCancel: () => void;
}
