export interface IImageUploader {
  name: string;
  setValue?: (name: string) => void;
}

export interface IUploadResponse {
  url: string | null;
  message: string;
}
