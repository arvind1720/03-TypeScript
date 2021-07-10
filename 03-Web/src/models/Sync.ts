import axios, {AxiosResponse, AxiosPromise} from 'axios';
import { UserProps} from './User';


export class Sync{
    constructor(public rootUrl:string){}
    
    fetch(id:number):AxiosPromise {

        return axios.get(`${this.rootUrl}/${id}`);  
    }

    save(data:UserProps): void {

        const { id } = this.get('id');

        if (id) {
            
            axios.put(`${this.rootUrl}/${id}`,data);
        } else {
           
            axios.post(this.rootUrl,this.data);
        }

    }
}