import { User } from "../../Domain/entities/User";
import { AuthRepository } from "../../Domain/repositories/AuthRepositoy";
import { ApiDelivery } from "../sources/remote/api/ApiDelivery";
import { ResponseApiDelivery } from "../sources/remote/models/ResponseApiDelivery";
import { AxiosError } from "axios";


export class AuthRepositoryImpl implements AuthRepository {
    async register(user: User) : Promise<ResponseApiDelivery> {
        try {
            const response = await
ApiDelivery.post<ResponseApiDelivery>('/users/create', user);
         return Promise.resolve(response.data);

    } catch (error) {
        let e = (error as AxiosError);
        console.log('error' + JSON.stringify(e.response?.data));
        const apiError: ResponseApiDelivery =
    JSON.parse(JSON.stringify(e.response?.data));
        return Promise.resolve(apiError);
    }
    }
} 