import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface BusinessInfo {
    hours: string;
    name: string;
    description: string;
    website: string;
    address: string;
    phone: string;
}
export interface Service {
    id: bigint;
    name: string;
    description: string;
    price?: string;
}
export interface backendInterface {
    addMultipleServices(newServices: Array<Service>): Promise<void>;
    addService(name: string, description: string, price: string | null): Promise<void>;
    deleteService(id: bigint): Promise<void>;
    getAllServices(): Promise<Array<Service>>;
    getBusinessInfo(): Promise<BusinessInfo>;
    getService(id: bigint): Promise<Service | null>;
    updateService(id: bigint, name: string, description: string, price: string | null): Promise<void>;
}
