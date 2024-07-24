import {BaseService} from "@/services/BaseService";

const baseUrl = "http://localhost:9090/articles"

export async function create(article) {
    return await BaseService({
        method: 'POST',
        url: `${baseUrl}`,
        data: article
    });
}

export async function deleteArticle(id) {
    return await BaseService({
        method: 'DELETE',
        url: `${baseUrl}/${id}`,
    });
}

export async function  update(articles) {
    return await BaseService({
        method: 'PUT',
        url: `${baseUrl}/${articles.id}`,
        data: articles
    });
}