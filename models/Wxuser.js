import Http from '../utils/Http.js';
import config from '../config/config.js';

class Wxuser extends Http {

     editUser(data){
        return this.httpReq({
            url:config.users,
            data,
            method:"PUT"
        })
    }

}


export default new Wxuser;