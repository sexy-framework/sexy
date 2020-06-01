import source from '@hawa/loader';

source.call({
	resourceQuery: '',
	posix: {

	},
	query: {
		path: '../components',
        delimeter: '-',
	}
}, `
<div>
	@each(item, key in items)
	<div :key="item">
		<static check="true" :get="true" ref="test">
			{{ \`button \${ item }\`  }}
			<template slot="name">
			test
			</template>
			adsa
		</static>
	</div>
	@endeach
</div>

<script2>
let size = p('medium');
let c = () => {
	return $props.d;
}
</script2>

<style lang="scss" type="d">
.text { 
font-size: 1px;
}
</style>
`)