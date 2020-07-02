import {
	loadComponent,
	slotReplaceTemplate,
	firstChild
} from 'sexy-framework/render';

export const Layout = serverLayout;


export function renderPage(page, $props, $node, $render)
{
	let tmp = $node;

	if ($render) {
		tmp = document.createElement("template");
		tmp.innerHTML = "<!---->";
	}

	let tmp2 = $render ? firstChild(tmp.content) : tmp;

	let _el$6 = loadComponent(page.default, "__Page", tmp2, $render, {
		$props,
	});

	return slotReplaceTemplate($node, tmp, $render);
}

export function serverLayout(action, page, root, $props = {})
{
	action(page.Layout, root, {
		$props,
		$slots: {
			sexy: ($node, $render) => {
				renderPage(page, $props, $node, $render);
			}
		}
	});
}

export function clientLayout(action, page, root, $props = {})
{
	page.then(module => {
		serverLayout(action, module, root, $props);
	})
}