import {apiService} from "./apiService";
import {urls} from "../const/urls";

const todosService ={
    getAll:()=>apiService.get(urls.todos.base),
    getById:(id) => apiService.get(urls.todos.byId(id))
}

export {
    todosService
}