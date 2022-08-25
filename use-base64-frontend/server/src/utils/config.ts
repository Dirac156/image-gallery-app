import { config } from "dotenv";
config();

export const network_config: {
    PORT: number | string,
} = {
    PORT: process.env.PORT as string,
};

export const globalConfig = {
    allowedImageTypes: ["image/jpeg", "image/jpg", "image/gif", "image/png", "image/svg+xml"]
};


export const aws_config: {
    IMAGES_BUCKET: string,
    REGION: string,
    AWS_ACCESS_KEY_ID: string,
    AWS_SECRET_ACCESS_KEY: string
} = {
    IMAGES_BUCKET: process.env.IMAGES_BUCKET as string,
    REGION: process.env.AWS_REGION as string,
    AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID as string,
    AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY as string
};