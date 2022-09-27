import http from "../http-common";

export const getAll = () => {
  return http.get("/kadrlar/all");
};

export const getById = (id) => {
  return http.get(`/kadrlar/${id}`);
};

export const create = (data) => {
  return http.post("/kadrlar/create", data);
};

export const update = (id, data) => {
  return http.put(`/kadrlar/${id}`, data);
};

export const removeById = (id) => {
  return http.delete(`/kadrlar/${id}`);
};

export const removeAll = () => {
  return http.delete(`/kadrlar/all`);
};

