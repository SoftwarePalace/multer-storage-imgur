declare module "multer-storage-imgur" {
  export default function setupImgurStorage(opts: {
    clientId: string;
  }): {
    _handleFile: (req: any, file: any, cb: any) => any;
    _removeFile: (req: any, file: any, cb: any) => void;
  };
}
