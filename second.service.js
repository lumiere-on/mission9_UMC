import { BaseError } from "../../config/error";
import { status } from "../../config/response.status";
import { signinResponseDTO } from "../dtos/user.dto"
import { addUser, getUser, getUserPreferToUserID, setPrefer } from "../models/user.dao";

export const writeReview = async (body) => {
    const writeReviewData =  await addReview({
        'star': body.star,
        'text':body.text
    });

    if(writeReviewData==-1){
        throw new BaseError(status.REVIEW_ALREADY_EXIST);
    }else{
        return enrollReviewResponseDTO(await getReview(writeReview));
    }
}