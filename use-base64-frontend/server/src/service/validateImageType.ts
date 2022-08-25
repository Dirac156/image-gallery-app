// import { validateMIMEType } from "validate-image-type";

// export async function validateImageType(name: string, allowMimeTypes: string[]) {
//     const result = await validateMIMEType(name, { allowMimeTypes });
//     if (!result.ok) {
//         console.error(result.error);
//         return false;
//     }
//     return true;
// }


export async function validateImageType(name: string, allowedImageTypes: string[]){
    try {
        return allowedImageTypes.includes(name);
    }catch(err) {
        console.error(err);
        throw new Error("validate image type error");
    }
}
