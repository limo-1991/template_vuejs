import api from '../../util/api'

export default {
    getMenu({commit}){
        api.get('/menu/list', {})
            .then((res) => {
                commit('GET_MENU', res)
            });
    }
}