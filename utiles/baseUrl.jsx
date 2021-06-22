import { create } from 'apisauce'
export const api = create({
    baseURL: 'https://production.inspirable.io/api/',
    headers: { Accept: 'application/vnd.github.v3+json' ,'Content-Type':'application/json'},
  })



  // export const urlImg="https://webzards.com/vietq/images";