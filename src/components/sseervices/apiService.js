import axios from "axios";
import {baseURL} from "../const/urlss";

const apiService = axios.create({baseURL})


export {
    apiService
}