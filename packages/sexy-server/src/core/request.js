import { parseUrl } from './http';

export class Request
{

	constructor(req)
	{
		let { url, params, pathname } = parseUrl(req.url);

		this.url = url;
		this.params = params;
		this.pathname = pathname;
	}

}