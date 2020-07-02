import { ConnectionInfoPropsWithSetters, SetLogo } from '../models/modals.model';

export const getCreatedFileInput = () => {
    const fileInput = document.createElement('input') as HTMLInputElement;

    fileInput.style.display = 'none';
    fileInput.type = 'file';
    fileInput.accept = '.png, .jpg, .jpeg, .svg';

    return fileInput;
};
export type SetImageFile = (imageFile: File, setLogo: SetLogo) => void;

export const setImageFile = (imageFile: File, setLogo: SetLogo) => {
    const fr = new FileReader();

    fr.onload = () => setLogo(fr.result as string);
    fr.readAsDataURL(imageFile);
};

export const fileInputUploadHandler = (
    fileInput: HTMLInputElement,
    parent: HTMLElement,
    setImageFile: SetImageFile,
    setLogo: SetLogo
) => {
    const imageFile = fileInput.files?.item(0);

    if (imageFile && imageFile.type.includes('image/')) {
        setImageFile(imageFile, setLogo);
    }

    parent.removeChild(fileInput);
};
export const addLogoActionHandler = async ({ setLogo }: ConnectionInfoPropsWithSetters) => {
    const fileInput = getCreatedFileInput();

    const parent = document.getElementById('root') as HTMLElement;
    parent.append(fileInput);

    fileInput.addEventListener('change', () =>
        fileInputUploadHandler(fileInput, parent, setImageFile, setLogo)
    );
    fileInput.click();
};
