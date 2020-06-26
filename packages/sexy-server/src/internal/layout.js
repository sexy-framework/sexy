import {
	loadComponent,
	slotReplaceTemplate,
	firstChild
} from 'sexy-framework/render';

export const Layout = serverLayout;

export function serverLayout(action, page, root, $props = {})
{
	action(page.Layout, root, {
		$slots: {
			sexy: ($node, $render) => {
				let tmp = $node;

				if ($render) {
					tmp = document.createElement("template");
					tmp.innerHTML = "<!---->";
				}

				let tmp2 = $render ? firstChild(tmp.content) : tmp;

				let _el$6 = loadComponent(page.default, "__Page", tmp2, $render, {
					$customInit: [null, null],
					$props,
				});

				slotReplaceTemplate($node, tmp, $render);
			}
		}
	});
}

export function clientLayout(action, page, root)
{
	page.then(module => {
		serverLayout(action, module, root);
	})
}