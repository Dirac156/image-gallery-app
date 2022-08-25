import { Request, Response, NextFunction } from "express";
import { validateImageType } from "../service/validateImageType";
import { globalConfig } from "../utils/config";


export async function middlewareValidateImageType(req: Request, res: Response, next: NextFunction){
    try {
        const allowedTypes = globalConfig.allowedImageTypes;
        const name = req.body.imageType;
        if (await validateImageType(name, allowedTypes))
            return next();
        return res.status(400).json({ message: "Image Type Non Supported" });
    }catch(err) {
        console.error(err);
        return res.status(500).json({});
    } 
}
