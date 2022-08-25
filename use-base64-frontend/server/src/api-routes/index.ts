import { Request, Response, Router, NextFunction } from "express";
import { middlewareValidateImageType } from "../middlewares/validateImageType";
import { upload } from "../service/s3";

const api: Router = Router();
// add routes in the api

api.post("/upload", middlewareValidateImageType, 
    async (req: Request, res: Response, next: NextFunction) => 
    {
        const base64Image = req.body.image;
        const imageName = req.body.imageName;
        const type = req.body.imageType;
        let response: string;

        try {
            response = await upload(imageName, base64Image, type);
        } catch (err) {
            console.error(`Error uploading image: ${err.message}`);
            return next(new Error(`Error uploading image: ${imageName}`));
        }

        res.send({link: response});
    });

export default api;