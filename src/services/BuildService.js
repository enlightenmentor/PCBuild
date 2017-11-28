import Api from '@/services/Api'

export default {
  addComponent(data, token) {
    return Api(token).post('/components', {rId:data});
  },
  fetchComponents(token) {
    return Api(token).get('/components');
  },
  fetchComponent(_id, token) {
    return Api(token).get(`/components/${_id}`);
  },
  editComponent(data, token) {
    return Api(token).put(`/components/${_id}`, data);
  },
  deleteComponent(_id, token) {
    return Api(token).delete(`/components/${_id}`);
  },
  addBuild(data, token) {
    return Api(token).post('/builds', data);
  },
  fetchBuilds(token) {
    return Api(token).get('/builds');
  },
  fetchBuild(_id, token) {
    return Api(token).get(`/builds/${_id}`);
  },
  editBuild(data, token) {
    return Api(token).put(`/builds/${_id}`, data);
  },
  deleteBuild(_id, token) {
    return Api(token).delete(`/builds/${_id}`);
  }
}