<template>
    <p v-if="$fetchState.pending">Loading...</p>
    <p v-else-if="$fetchState.error">Error</p>
    <div v-else>
        <table v-if="comments.length > 0">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="comment in comments" :key="comment.id"
                @click="handleRowNavigate(comment.id)">
                    <td>{{comment.id}}</td>
                    <td>
                        <NuxtLink :to="'/comments/' + comment.id">
                            {{comment.name}}
                        </NuxtLink>
                    </td>
                    <td>{{comment.email}}</td>
                </tr>

            </tbody>
        </table>
        <p v-if="comments.length < limit">That's all!</p>
        <div>
            <button @click="setPage(0)">Start</button>
            <button @click="setPage(page-1)">Prev</button>
            <button @click="setPage(page+1)" v-if="comments.length >= limit">Next</button>
        </div>
    </div>
</template>
    
<script>
export default {
    name: 'CommentsTable',
    data() {
        return {
            comments: [],
            page: 0,
            limit: 10
        }
    },
    async fetch() {
        this.comments = await this.$api.get('/comments', {
            params: {
                _limit: this.limit,
                _start: this.page * 10
            }
        })
            .then(res => res.data);
    },
    methods: {
        setPage(page) {
            page < 0 ?
                this.page = 0 :
                this.page = page;
            this.$fetch();
        },
        handleRowNavigate(id) {
            this.$router.push({path: '/comments/' + id});
        }
    }
}
</script>

<style scoped>

</style>