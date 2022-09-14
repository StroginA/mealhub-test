export default function (context) {
    context.$axios.defaults.baseURL = context.$config.baseUrl || 'http://axios.plugin.failed'
}