import Vue from 'vue'
const state = {
  orderList: [],
  params: {

  },
  total: 0
}

// getters
const getters = {
  getOrderList: state => state.orderList,
  getTotal: state => state.total
}

// actions
const actions = {
  refreshList ({ commit, state }) {
    // let reqParams = {
    //   query: this.query,
    //   productId: this.productId,
    //   startDate: this.startDate,
    //   endDate: this.endDate,
    //   offset: this.offset,
    //   pageSize: this.pageSize
    // }
    Vue.http.post('/api/getOrderList', state.params)
    .then((res) => {
      state.orderList = res.data.list
      state.total = res.data.total
    }, (err) => {

    })
  }
}

// mutations
const mutations = {
  updateParams (state, payload) {
    state.params[payload.key] = payload.val
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}