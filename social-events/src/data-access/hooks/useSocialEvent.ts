import {useAxiosGet} from "./useAxiosGet";
import {SocialEvent} from "../interfaces/SocialEvent";

export function useSocialEvent(id: string){
    return useAxiosGet<SocialEvent>(`event/${id}`)
}