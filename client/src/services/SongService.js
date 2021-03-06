import Api from "@/services/Api";

export default {
  getSongs(headers, query = null) {
    if (query) {
      return Api().get(`songs/?s=${query}`, { headers });
    }
    return Api().get("songs", { headers });
  },
  setSong(credentials) {
    return Api().post("song/add", credentials);
  },
  updateSong(id, credentials) {
    return Api().put(`song/${id}`, credentials);
  },
  getSong(id) {
    return Api().get(`song/${id}`);
  }
};
