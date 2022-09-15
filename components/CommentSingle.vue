<template>
    <p v-if="$fetchState.pending">Loading...</p>
    <p v-else-if="$fetchState.error">Error</p>
    <div v-else>
        <label>Comment ID: </label>
        <p>
            {{comment.id}}
        </p>
        <label>Post ID: </label>
        <p>
            {{comment.postId}}
        </p>
        <label>Comment title: </label>
        <p>
            {{comment.name}}
        </p>
        <label>Comment body: </label>
        <p>
            {{comment.email}}
        </p>
        <p class="comment__body">{{comment.body}}</p>
    </div>
</template>


<script>
export default {
    name: 'CommentSingle',
    data() {
        return {
            comment: {
                id: null,
                postId: null,
                name: null,
                email: null,
                body: null
            }
        }
    },
    async fetch() {
        this.comment = await this.$api.get('/comments/' + this.$route.params.id)
            .then(res => res.data);
    },
}
</script>

<style scoped>
    .comment__body {
        white-space: pre;
    }
</style>