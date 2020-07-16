import base from "@/services/axios";

export const baseService = base;

export const getCasesById = (pid) => {
  const api = `Cases/GetCasesById/${pid}`;
  return baseService.get(api);
};

export const getCasesAll = () => {
  const api = "Cases/GetCasesAll";
  return baseService.get(api);
};

export const getHonorAll = () => {
  const api = `Honor/GetHonorAll`;
  return baseService.get(api);
};

export const getEnterpriseAll = () => {
  const api = `Enterprise/GetEnterpriseAll`;
  return baseService.get(api);
};

export const getTeamAll = () => {
  const api = `Team/GetTeamAll`;
  return baseService.get(api);
};

export const getCourseAll = () => {
  const api = `Course/GetCourseAll`;
  return baseService.get(api);
};

export const getDictionaryAll = (params) => {
  const api = `Dictionary/GetDictionaryAll`;
  return baseService.get(api, { params });
};

export const createCases = (formData) => {
  const api = `Cases/CreateCases`;
  return baseService.post(api, { ...formData });
};
export const modifiedCases = (formData) => {
  const api = `Cases/ModifiedCases`;
  return baseService.post(api, { ...formData });
};
export const deleteCases = (id) => {
  const api = `Cases/DeleteCases?id=${id}`;
  return baseService.get(api);
};

export const createCourse = (formData) => {
  const api = `Course/CreateCourse`;
  return baseService.post(api, { ...formData });
};
export const modifiedCourse = (formData) => {
  const api = `Course/ModifiedCourse`;
  return baseService.post(api, { ...formData });
};
export const deleteCourse = (id, formData) => {
  const api = `Course/DeleteCourse?id=${id}`;
  return baseService.get(api, { ...formData });
};

export const createDictionary = (formData) => {
  const api = `Dictionary/CreateDictionary`;
  return baseService.post(api, { ...formData });
};
export const modifiedDictionary = (formData) => {
  const api = `Dictionary/ModifiedDictionary`;
  return baseService.post(api, { ...formData });
};
export const deleteDictionary = (id) => {
  const api = `Dictionary/DeleteDictionary?id=${id}`;
  return baseService.get(api);
};

export const createDataEnterprise = (formData) => {
  const api = `Enterprise/CreateEnterprise`;
  return baseService.post(api, { ...formData });
};
export const modifiedEnterprise = (formData) => {
  const api = `Enterprise/ModifiedEnterprise`;
  return baseService.post(api, { ...formData });
};
export const deleteEnterprise = (id) => {
  const api = `Enterprise/DeleteEnterprise?id=${id}`;
  return baseService.get(api);
};

export const createHonor = (formData) => {
  const api = `Honor/CreateHonor`;
  return baseService.post(api, { ...formData });
};
export const modifiedHonor = (formData) => {
  const api = `Honor/ModifiedHonor`;
  return baseService.post(api, { ...formData });
};
export const deleteHonor = (id) => {
  const api = `Honor/DeleteHonor?id=${id}`;
  return baseService.get(api);
};

// export const getNews = (params) => {
//   const api = `News`;
//   return baseService.get(api, { params });
// };
export const getNewsAll = (params) => {
  const api = `News/GetNewsAll`;
  return baseService.get(api, { params });
};
export const getNewsById = (pid) => {
  const api = `News/GetNewsById/${pid}`;
  return baseService.get(api);
};
export const createNews = (formData) => {
  const api = `News/CreateNews`;
  return baseService.post(api, { ...formData });
};
export const modifiedNews = (formData) => {
  const api = `News/ModifiedNews`;
  return baseService.post(api, { ...formData });
};
export const deleteNews = (id) => {
  const api = `News/DeleteNews?id=${id}`;
  return baseService.get(api);
};

export const createTeam = (formData) => {
  const api = `Team/CreateTeam`;
  return baseService.post(api, { ...formData });
};
export const modifiedTeam = (formData) => {
  const api = `Team/ModifiedTeam`;
  return baseService.post(api, { ...formData });
};
export const deleteTeam = (id) => {
  const api = `Team/DeleteTeam?id=${id}`;
  return baseService.get(api);
};

export const getUserAll = () => {
  const api = `User/GetUserAll`;
  return baseService.get(api);
};
export const createUser = (formData) => {
  const api = `User/CreateUser`;
  return baseService.post(api, { ...formData });
};
export const modifiedUser = (formData) => {
  const api = `User/ModifiedUser`;
  return baseService.post(api, { ...formData });
};
export const deleteUser = (id) => {
  const api = `User/DeleteUser?id=${id}`;
  return baseService.get(api);
};

export const userLogin = ({ loginName, password }) => {
  const api = `User/Login`;
  return baseService.post(api, { loginName, password });
};

export const getGoInData = () => {
  return baseService.all([
    getHonorAll(),
    getEnterpriseAll(),
    getTeamAll(),
    getCourseAll(),
  ]);
};