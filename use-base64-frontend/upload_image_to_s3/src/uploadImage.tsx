import React, { ChangeEvent, ChangeEventHandler } from 'react';
import axios, { AxiosResponse } from 'axios';

const UploadImages: Function = (): JSX.Element => {
    const onSelectFile: ChangeEventHandler<HTMLInputElement> = async (event: ChangeEvent): Promise<any> => {
        const target = event.target as HTMLInputElement;
        const files = target.files as FileList;

        const convertedFile = await convertToBase64(files[0]);
        const s3URL = await axios.post('http://localhost:3001/upload',
                { 
                    image: convertedFile,
                    imageName: files[0].name
                }
        );

        return s3URL;
    }
    
    const convertToBase64: Function = (file: any): Promise<string | ArrayBuffer | null> => {
        return new Promise(resolve => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                resolve(reader.result);
            }
        })
    }

    return (
        <input type="file" accept="image/*" onChange={onSelectFile}/>
    )
}
export default UploadImages;