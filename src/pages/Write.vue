<<template>
    <div>
        <lj-header></lj-header>
        <lj-write></lj-write>
        Write Page
    </div>
</template>

<script>
import header from '../components/header.vue';
import write from '../components/write.vue';
export default {
    name: 'Write',

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
        'lj-write': write,
    }
};
</script>

<style>

</style>