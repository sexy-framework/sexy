import {
	loadComponent,
} from 'sexy-framework/render';

export const Layout = serverLayout;

export function serverLayout(action, page, root)
{
	action(page.Layout, root, {
		$slots: {
			sexy: (node, render) => {
				loadComponent(page.default, '__Page', node, render);
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