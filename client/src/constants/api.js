const host = process.env.VUE_APP_API_URL

export default {
  login: `${host}/AppUsers/login`,
  logout: `${host}/AppUsers/logout`,
  users: `${host}/AppUsers`,
  password: `${host}/AppUsers/change-password`,
  roles: `${host}/Roles`,
  me: (id) => `${host}/AppUsers/${id}`,
  roleMappings: `${host}/RoleMappings`,
  roleMapping: (id) => `${host}/RoleMappings/${id}`,
  usersPaginated: `${host}/AppUsers/paginated`,
  userCount: `${host}/AppUsers/count`,
  uploadFile: `${host}/Containers/things/upload`,
  user: (id) => `${host}/AppUsers/${id}`
}
