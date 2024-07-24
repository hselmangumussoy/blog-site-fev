import {BaseService} from "@/services/BaseService";

const baseUrl = "http://localhost:9090/categories"

export async function create(categori) {
    return await BaseService({
        method: 'POST',
        url: `${baseUrl}`,
        data: categori
    });
}

export async function deleteCategori(id) {
    return await BaseService({
        method: 'DELETE',
        url: `${baseUrl}/${id}`,
    });
}

export async function  update(categori) {
    return await BaseService({
        method: 'PUT',
        url: `${baseUrl}/${categori.id}`,
        data: categori
    });
}