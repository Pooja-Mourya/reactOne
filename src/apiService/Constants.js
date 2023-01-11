let domain = 'http://192.168.1.27:8000'
export default {
  localStorageKey: 'forLogin',

  baseUrl: `http://${domain}/api/`,
  apiEndPoint: {
    userLogin: 'user-login',
    userLogout: '',
  },
}
