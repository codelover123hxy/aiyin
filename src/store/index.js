
import {createStore} from "vuex"
import {page} from "@/store/modules/page"

// 创建仓库
const store = createStore({
	modules: {
		page: page
	}
})

export default store