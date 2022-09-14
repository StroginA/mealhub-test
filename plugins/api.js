export default function ({ $axios }, inject) {
    const api = $axios.create();
  
    api.setBaseURL('https://jsonplaceholder.typicode.com');
  
    inject('api', api);
}
  