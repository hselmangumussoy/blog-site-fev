import {BaseService} from "@/services/BaseService";

const baseUrl = "http://localhost:9090/collections"

export async function create(collection) {
    return await BaseService({
        method: 'POST',
        url: `${baseUrl}`,
        data: collection
    });
}

export async function deleteCollection(id) {
    return await BaseService({
        method: 'DELETE',
        url: `${baseUrl}/${id}`,
    });
}

export async function  update(collection) {
    return await BaseService({
        method: 'PUT',
        url: `${baseUrl}/${collection.id}`,
        data: collection
    });
}