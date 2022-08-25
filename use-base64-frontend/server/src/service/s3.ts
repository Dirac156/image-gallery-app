import S3 from "aws-sdk/clients/s3";
import { Buffer } from "buffer";
import { aws_config } from "../utils/config";

const options = {
    region: aws_config.REGION,
    accessKeyId: aws_config.AWS_ACCESS_KEY_ID,
    secretAccessKey: aws_config.AWS_SECRET_ACCESS_KEY,
};

const BUCKET_NAME = aws_config.IMAGES_BUCKET;

const s3 = new S3(options);

/**
 * @description Uploads an image to S3
 * @param imageName Image name
 * @param base64Image Image body converted to base 64
 * @param type Image type
 * @return string S3 image URL or error accordingly
 */

export async function upload(imageName: string, base64Image: string | null, type: string): Promise<string | null> {
    const buff = Buffer.from(base64Image.replace(/^data:image\/\w+;base64,/, ""), "base64");
    const params = {
        Bucket: `${BUCKET_NAME}`,
        Key: `tests/${imageName}`,
        Body: buff,
        ContentType: type
    };

    let data;

    try {
        data = await promiseUpload(params);
    } catch (err) {
        console.error(err);
        return "";
    }

    return data.Location;
}
/**
 * @description Promise an upload to S3
 * @param params S3 bucket params
 * @return data/err S3 response object
 */
function promiseUpload(params): Promise<unknown> {
    return new Promise(function (resolve, reject) {
        s3.upload(params, function (err, data) {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}
