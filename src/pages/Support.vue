<template>
    <div>
        <lj-header></lj-header>
        It's a supprot page
        <div class="container">
		<el-row :gutter="30">
			<el-col :sm="24" :md="16" style="transition:all .5s ease-out;margin-bottom:30px;">
				<lj-support></lj-support>
			</el-col>
			<el-col :sm="24" :md="8">
			</el-col>
		</el-row>
	</div>
    </div>
</template>

<script>
import header from '../components/header.vue';
import support from '../components/support.vue';
export default {
    name: 'Support',

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
    components: {
        'lj-header': header,
        'lj-support': support,
    }
};
</script>

<style >

</style>