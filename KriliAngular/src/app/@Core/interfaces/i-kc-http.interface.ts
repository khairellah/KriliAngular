export interface IKcHttpInterface<T> {
    findAll(): Promise<T[]>;
    findOne(id: string): Promise<T>;
    create(body: Partial<T>): Promise<T>;
    delete(id: string): Promise<Boolean>;
    update(id: string, body: Partial<T>): Promise<T>;
}