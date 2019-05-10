import axios from "axios";


const config = { headers: { 'Content-Type': 'multipart/form-data' } };
export default {
  newUser: function(user) {
    return axios.post("/auth/signup", user);
  },
  login: function(user) {
    return axios.post("/auth/login/", user);
  },
  logout: function(company) {
    return axios.post("/auth/logout/", company);
  },
  uploadPic: function(picture) {
    return axios.post("/auth/upload", picture, config);
  },
  updateAd: function(id, update) {
    return axios.post("/adspaceupdate/" + id, update);
  },
  saveUser: function(user) {
    return axios.post("/auth/user", user);
  },
  saveReview: function (review) {
    return axios.post("/auth/savereview/", review);
  },
  userInfo: function() {
    return axios.get("/auth/userinfo/");
  },
  signedIn: function() {
    return axios.get("/auth/user/");
  },
  userAdSpaces: function() {
    return axios.get("/auth/user/adspaces/");
  },
  getCompanies: function() {
    return axios.get("/auth/companies/");
  }
  
};
