import { COMMENTS_CREATE } from "./types";
import { errorOn } from "./action";

const badWords = ['dick', 'pussy'];

export function spamFilter({ dispatch }){
    return function(next){
        return function(action){
            if(action.type === COMMENTS_CREATE){
                const hasBadWords = badWords.some(res => action.data.text.includes(res));
                if(hasBadWords){
                    return dispatch(errorOn('Please respect other users'))
                }
            }
            return next(action);
        }
    }
}