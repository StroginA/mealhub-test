<template>
    <p v-if="$fetchState.pending">Loading...</p>
    <p v-else-if="$fetchState.error">Error</p>
    <table v-else>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="comment in comments">
                <td>{{comment.id}}</td>
                <td>{{comment.name}}</td>
                <td>{{comment.email}}</td>
            </tr>
        </tbody>
    </table>
</template>
    
<script>
export default {
    name: 'CommentsTable',
    data() {
        return {
            comments: []
        }
    },
    async fetch() {
        this.comments = await fetch('http://localhost:3000/api/comments').then(res => res.json());
    }
}
</script>