<template>
  <div class="order-wrap">
    <h3>您的产品</h3>
    <div class="order-list-choose">
      <div class="order-list-option">
        选择产品：
        <v-selection :selections="products" @on-change="productChange"></v-selection>
      </div>
      <div class="order-list-option">
        选择产品2：
        <v-selection :selections="products" @on-change="productChange"></v-selection>
      </div>

      <div class="order-list-option">
        开始日期：
        <v-date-picker @on-change="getStartDate"></v-date-picker>
      </div>

      <div class="order-list-option">
        结束日期：
        <v-date-picker @on-change="getEndDate"></v-date-picker>
      </div>

      <div class="order-list-option">
        关键词：
        <input type="text" v-model.lazy="query" class="order-query">
      </div>
    </div>
    <div class="order-list-table">
      <table>
        <tr>
          <th v-for="head in tableHeads" @click="changeOrderType(head)" :class="{active:head.active}">{{ head.label }}</th>
        </tr>
        <tr v-for="item in tableData" :key="item.period">
          <td v-for="head in tableHeads">{{ item[head.key] }}</td>
        </tr>
      </table>
      <div class="table-pagenation">
        <v-pagenation :total="total" :pageSize="pageSize" @on-change="pageChange"></v-pagenation>  
      </div>
    </div>
  </div>
</template>
<!-- 1. 添加数据和数据分页 offset，pagesize, total-->
<!-- 2. 分页组件 计算页码-->
<!-- 3. 分页组件 自定义事件刷新列表-->

<!-- 4. 较复杂的列表页，较多条件交互，使用vuex-->
<!-- 5. 安装vuex -->
<!-- 6. 搭建vuex store目录结构 -->
<!-- 7. vuex里面的数据 state -->
<!-- vuex getlist action 发送ajax请求 -->
<!-- 8. vuex mutation update params-->
<!-- 8. vuex getter -->
<!-- 与页面的关联，action mutation getter -->
<!-- 新增 computed total -->
<script>
import VSelection from '../components/base/selection'
import VDatePicker from '../components/base/datepicker'
import VPagenation from '../components/base/pagenation'
import _ from 'lodash'
export default {
  components: {
    VSelection,
    VDatePicker,
    VPagenation
  },
  data () {
    return {
      query: '',
      productId: 0,
      startDate: '',
      endDate: '',
      products: [
        {
          label: '数据统计',
          value: 0
        },
        {
          label: '数据预测',
          value: 1
        },
        {
          label: '流量分析',
          value: 2
        },
        {
          label: '广告发布',
          value: 3
        }
      ],
      tableHeads: [
        {
          label: '订单号',
          key: 'orderId'
        },
        {
          label: '购买产品',
          key: 'product'
        },
        {
          label: '版本类型',
          key: 'version'
        },
        {
          label: '有效时间',
          key: 'period'
        },
        {
          label: '购买日期',
          key: 'date'
        },
        {
          label: '数量',
          key: 'buyNum'
        },
        {
          label: '总价',
          key: 'amount'
        }
      ],
      tableData: [],
      pageSize: 10,
      offset: 0,
      
    }
  },
  computed: {
    tableData () {
      return this.$store.getters.getOrderList
    },
    total () {
      return this.$store.getters.getTotal
    }
  },
  watch: {
    query () {
      this.$store.dispatch('refreshList')
    }
  },
  methods: {
    productChange (obj) {
      // this.productId = obj.value
      this.$store.commit('updateParams', {
        key: 'productId',
        val: obj.value
      })
      this.$store.dispatch('refreshList')
      // this.getList()
    },
    getStartDate (date) {
      this.$store.commit('updateParams', {
        key: 'startDate',
        val: date
      })
      this.$store.dispatch('refreshList')
    },
    getEndDate (date) {
      this.endDate = date
      this.getList()
    },
    pageChange (offset) {
      this.$store.commit('updateParams', {
        key: 'offset',
        val: offset * this.pageSize
      })
      this.$store.dispatch('refreshList')
      // this.offset = offset * this.pageSize
      // this.getList()
    },
    // getList () {
    //   let reqParams = {
    //     query: this.query,
    //     productId: this.productId,
    //     startDate: this.startDate,
    //     endDate: this.endDate,
    //     offset: this.offset,
    //     pageSize: this.pageSize
    //   }
    //   this.$http.post('/api/getOrderList', reqParams)
    //   .then((res) => {
    //     this.tableData = res.data.list
    //     this.total = res.data.total
    //   }, (err) => {

    //   })
    // },
    // changeOrderType (headItem) {
    //   this.tableHeads.map((item) => {
    //     item.active = false
    //     return item
    //   })
    //   headItem.active = true
    //   if (this.currentOrder === 'asc') {
    //     this.currentOrder = 'desc'
    //   }
    //   else if (this.currentOrder === 'desc') {
    //     this.currentOrder = 'asc'
    //   }
    //   this.tableData = _.orderBy(this.tableData, headItem.key, this.currentOrder)
    // }
  },
  mounted () {
    this.$store.dispatch('refreshList')
    // this.getList()
    // console.log(this.$store.state)
  }
}
</script>

<style scoped>
.order-wrap {
  width: 1200px;
  min-height: 800px;
  margin: 20px auto;
  overflow: hidden;
}
.order-wrap h3 {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
}
.order-query {
  height: 25px;
  line-height: 25px;
  border: 1px solid #e3e3e3;
  outline: none;
  text-indent: 10px;
}
.order-list-option {
  display: inline-block;
  padding-left: 15px;
}
.order-list-option:first-child {
  padding-left: 0;
}
.order-list-table {
  margin-top: 20px;
}
.order-list-table table {
  width: 100%;
  background: #fff;
}
.order-list-table td,
.order-list-table th {
  border: 1px solid #e3e3e3;
  text-align: center;
  padding: 10px 0;
}
.order-list-table th {
  background: #4fc08d;
  color: #fff;
  border: 1px solid #4fc08d;
  cursor: pointer;
}
.order-list-table th.active {
  background: #35495e;
}
.table-pagenation {
  padding: 15px;
  text-align: right;
}
</style>
