import { BaseError } from "../../config/error";
import { status } from "../../config/response.status";
import { signinResponseDTO } from "../dtos/user.dto"
import { addUser, getUser, getUserPreferToUserID, setPrefer } from "../models/user.dao";

export const infoOfRestaurant = async (body) => {
   //가게 이름 위치 번호 
    const ResData = await addRestaurant({
        'name': body.email,
        'addr': body.addr,
        'phone': body.gender
    });

    if(ResData == -1){
        throw new BaseError(status.EMAIL_ALREADY_EXIST);
    }else{
        for (let i = 0; i < prefer.length; i++) {
            await setPrefer(ResData, prefer[i]);
        }
        return signinResponseDTO(await getRes(ResData), await getUserPreferToUserID(ResData));
    }
}