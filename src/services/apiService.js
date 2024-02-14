import axios from "axios";

import {baseURL} from "../const/urls";

const apiService = axios.create({baseURL});

export {
    apiService
}