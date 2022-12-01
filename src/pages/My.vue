<<template>
    <div>
        <lj-header></lj-header>
        It's a My page
        <div class="container">
            <el-row :gutter="30">
                <el-col :sm="24" :md="16" style="transition:all .5s ease-out;margin-bottom:30px;">
                   
                </el-col>
                <el-col :sm="24" :md="8">
                    <lj-rightlist></lj-rightlist>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
import header from '../components/header.vue'
import rightlist from '../components/rightlist.vue'
export default {
    name: 'My',

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
        'lj-rightlist':rightlist,
    }
};
</script>

<style>

</style>