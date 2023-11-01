export const page = {
	state: () => ({
		pageType: "normal",
		nowPage: 0,
	}),
	getters: {
		getPageType(state) {
			return state.pageType
		},
		getNowPage(state) {
			return state.nowPage
		}
	},
	mutations: {
		setPageType(state, type) {
			// console.log("setPageType", type)
			state.pageType = type
		},
		setNowPage(state, page) {
			state.nowPage = page
		}
	}
}