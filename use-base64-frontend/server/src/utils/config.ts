export const network_config: {
    PORT: number | string,
} = {
    PORT: process.env.PORT as string,
};

export const config = {};


export const aws_config: {
    IMAGES_BUCKET: string
} = {
    IMAGES_BUCKET: process.env.IMAGES_BUCKET as string
};