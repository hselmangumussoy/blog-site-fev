export const BaseService = async ({ method, url, params, data, baseUrl}) => {
    try {
        const response = await window.axios({
            method,
            url,
            params,
            data,
            Base_URL: baseUrl || /'api'/
        });

        return { data: response.data, status: response.status };
    } catch (error) {
        if (error.response) {
            return { error: error.response.data, status: error.response.status };
        } else {
            return { error: 'Network Error', status: 500 };
        }
    }
}