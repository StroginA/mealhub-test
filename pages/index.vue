<template>
  <Tutorial/>
</template>

<script>
export default {
  name: 'IndexPage',
  middleware({redirect}) {
    // Immediately go to the comments page
    return redirect('/comments');
  }
}
</script>
