
import { API } from './../constants/API';

class APIService  {

async traerPerso(){
const response = await fetch(API.DATOS())
return response.json();
}

}

export default new APIService();