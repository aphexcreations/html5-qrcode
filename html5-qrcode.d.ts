
declare module "html5-qrcode" {

  export interface Device {
    id: string;
    label: string;
  }

  export class Html5Qrcode {
    static getCameras(): Promise<Device[]>;

    constructor(elementId: string, verbose?: boolean);

    start(
      cameraId: Device["id"],
      configuration: {},
      qrCodeSuccessCallback: (qrCodeMessage: any) => void,
      qrCodeErrorCallback: (errorMessage: any) => void
    ): Promise<undefined>;

    stop(): Promise<boolean>;
  }

}
