import QRCode from 'qrcode';

export const generateQR = async (url: string): Promise<string> => await QRCode.toDataURL(url);
