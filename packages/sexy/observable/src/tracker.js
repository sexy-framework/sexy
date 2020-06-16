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

	cleanup(callback)
	{
		let maxDuration = 0;
		// console.warn('cleanup start', this);
		this.disposals.forEach(disposal => {
			let result = disposal();

			if(result && result.duration) {
				if(result.duration > maxDuration) {
					maxDuration = result.duration;
				}
			}
		});
		this.disposals.clear();

		this.children.forEach(child => {
			let duration = child.cleanup();
			if(duration > maxDuration) {
				maxDuration = duration;
			}
		});
		// this.children.clear();

		if(this.parent) {
			this.parent.children.delete(this);
		}

		delete this;

		if(callback) {
			setTimeout(callback, maxDuration);
		}

		return maxDuration;
	}

}
