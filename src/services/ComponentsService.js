import Api from '@/services/Api'

export default {
  addComponent(data) {
    return Api().post('/components', data);
  },
  fetchComponents() {
    return Api().get('/components');
  },
  fetchComponent(_id) {
    return Api().get(`/components/${_id}`);
  },
  deleteComponent(_id) {
    return Api().delete(`/components/${_id}`);
  },
  addBuild(data) {
    return Api().post('/builds', data);
  },
  fetchBuilds() {
    return Api().get('/builds');
  },
  fetchBuild(_id) {
    return Api().get(`/builds/${_id}`);
  },
  editBuild(data) {
    return Api().put(`/builds/${_id}`, data);
  },
  deleteBuild(_id) {
    return Api().delete(`/builds/${_id}`);
  }
}