export const  state = {
    menus: []
}
export const mutations = {
    ['GET_MENU'](state, res){
        state.menus = res
    }
}