import {useAxiosGet} from "./useAxiosGet";
import {SocialEvent} from "../interfaces/SocialEvent";

export function useSocialEvents() {
    return useAxiosGet<SocialEvent[]>('event')
}