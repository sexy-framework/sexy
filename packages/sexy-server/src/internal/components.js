import { registerComponent } from 'sexy-framework/render';

import Route from '../components/route.sexy';

export function register()
{
	registerComponent('Route', Route);
}