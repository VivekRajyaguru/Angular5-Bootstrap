import { environment } from '../../environments/environment';


export class CommonUtils {

    static getApiEndPoints(): string {
        return environment.apiEndpoint;
    }

    static getImageEndPoints(): string {
        return environment.imageEndpoint;
    }

}
