import source from '@hawa/loader';

source.call({
	query: {
		path: '../components',
        delimeter: '-',
	}
}, `
<div>
	@each(item, key in items)
	<div :key="item">
		<static check="true" :get="true">
			{{ \`button \${ item }\`  }}
			<template slot="name">
			test
			</template>
			adsa
		</static>
	</div>
	@endeach
</div>

<script>
let size = p('medium');
let c = () => {
	return $props.d;
}
</script>
`)