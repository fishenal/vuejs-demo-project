import Vue from 'vue'
import Router from 'vue-router'

import IndexPage from '@/pages/index'
import DetailPage from '@/pages/detail'
import OrderListPage from '@/pages/orderList'
import DetailAnaPage from '@/pages/detail/analysis'
import DetailCouPage from '@/pages/detail/count'
import DetailForPage from '@/pages/detail/forecast'
import DetailPubPage from '@/pages/detail/publish'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'index',
			component: IndexPage
		},
		{
			path: '/orderList',
			name: 'orderList',
			component: OrderListPage
		},
		{
			path: '/detail',
			component: DetailPage,
			redirect: '/detail/analysis',
			children: [
				{
					path: 'analysis',
					name: 'analysis',
					component: DetailAnaPage
				},
				{
					path: 'count',
					name: 'count',
					component: DetailCouPage
				},
				{
					path: 'forecast',
					name: 'forecast',
					component: DetailForPage
				},
				{
					path: 'publish',
					name: 'publish',
					component: DetailPubPage
				}
			]
		}
	]
})
