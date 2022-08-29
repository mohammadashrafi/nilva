import http from './ConfigApi'


export const getFixture=()=>{
    return http.get('/fixtures')
}