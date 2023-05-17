import axios from 'axios'
import * as env from 'components/env'

export const Instance = axios.create({
    withCredentials: env.axios_withCredentials,
});