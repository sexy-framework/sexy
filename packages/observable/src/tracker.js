export class Tracker {

	constructor()
	{
		this.children = new Set();
		this.parent = null;
		this.disposals = new Set();
	}

	setParent(parent)
	{
		this.parent = parent;
	}

	addChild(tracker)
	{
		tracker.setParent(this);
		this.children.add(tracker);
	}

	disposal(cleanup)
	{
		// console.log('add', cleanup.prototype.constructor.name)
		this.disposals.add(cleanup);
	}

	cleanup()
	{
		// console.warn('cleanup start', this);
		this.disposals.forEach(disposal => disposal());
		this.disposals.clear();

		this.children.forEach(child => child.cleanup());
		// this.children.clear();

		if(this.parent) {
			this.parent.children.delete(this);
		}

		delete this;
	}

}