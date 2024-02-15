import {apiService} from "./apiService";

import {urls} from "../const/urls";

const postsService ={
    getAll:()=>apiService.get(urls.posts.base),
    getPostById:(id)=> apiService.get(urls.posts.byId(id))
}

export {
    postsService
}