import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { firstValueFrom } from "rxjs";
import { environment } from "src/environments/environment";
import { IKcHttpInterface } from "../../interfaces/i-kc-http.interface";

@Injectable()
export class KcHttpService<T> implements IKcHttpInterface<T> {
    protected _host: string = '';
    constructor(
        private readonly httpService: HttpClient,
    ) { }

    set host(host: string) {
        this._host = host;
    }
    get host(): string {
        return this._host;
    }

    findAll(): Promise<T[]> {
        return firstValueFrom<T[]>(
            this.httpService.get<T[]>(`${environment.apiUrl}${this.host}`)
        );
    }
    findOne(id: string): Promise<T> {
        return firstValueFrom<T>(
            this.httpService.get<T>(`${environment.apiUrl}${this.host}/${id}`)
        );
    }
    create(body: Partial<T>): Promise<T> {
        return firstValueFrom<T>(
            this.httpService.post<T>(`${environment.apiUrl}${this.host}`, body)
        );
    }
    delete(id: string): Promise<Boolean> {
        return firstValueFrom<Boolean>(
            this.httpService.delete<Boolean>(`${environment.apiUrl}${this.host}/${id}`)
        );
    }
    update(id: string, body: Partial<T>): Promise<T> {
        return firstValueFrom<T>(
            this.httpService.put<T>(`${environment.apiUrl}${this.host}/${id}`, body)
        );
    }
}