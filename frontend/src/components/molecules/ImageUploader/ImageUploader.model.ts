export interface IImageUploader {
  name: string;
  setValue?: any;
  control: any;
}

export interface IUploadResponse {
  url: string | null;
  message: string;
}
