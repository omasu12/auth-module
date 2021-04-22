import axiosClient from "./axiosClient";

const userApi = {
    // getAll(param){
    //     const url = '/auth/local/register';
    //     return axiosClient.get(url,{param})
    // },
    // get(id){
    //     const url = `/categories/${id}`;
    //     return axiosClient.get(url)
    // },
    register(data){
        const url = '/auth/local/register';
        return axiosClient.post(url,data)
    },
    login(data){
        const url = '/auth/local';
        return axiosClient.post(url,data)
    }
};


export default userApi;