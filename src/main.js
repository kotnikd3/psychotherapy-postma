import '@/assets/style.scss'
import { createApplication } from './app'
import { getPageHead } from './seo'

const target = document.querySelector('#app')
const { app, router } = createApplication({ hydrate: target.hasChildNodes() })

function updateHead(route) {
	if (!route.matched.length) return
	const head = getPageHead(route)
	document.documentElement.lang = head.lang
	document.title = head.title
	document.head.querySelectorAll('[data-page-seo]').forEach(element => element.remove())
	for (const element of head.elements) {
		const node = document.createElement(element.type)
		for (const [name, value] of Object.entries(element.props)) node.setAttribute(name, value)
		if (element.children) node.textContent = element.children
		document.head.append(node)
	}
}

router.afterEach(updateHead)
router.isReady().then(() => {
	updateHead(router.currentRoute.value)
	app.mount(target)
})
