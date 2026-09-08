"use server"

import { imageSizeFromFile } from 'image-size/fromFile'

export const getImgSize = async(path) => {
    const dimensions = await imageSizeFromFile(path);
    console.log(dimensions)
    return dimensions
}

