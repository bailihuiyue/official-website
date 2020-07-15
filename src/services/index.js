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

export const getDataDictionaryAll = (params) => {
  const api = `DataDictionary/GetDataDictionaryAll`;
  return baseService.get(api, { params });
};

export const createCases = (formData, options) => {
  const api = `Cases/CreateCases`;
  return baseService.post(api, { formData, options });
};
export const modifiedCases = (formData, options) => {
  const api = `Cases/ModifiedCases`;
  return baseService.post(api, { formData, options });
};
export const deleteCases = (id, formData, options) => {
  const api = `Cases/DeleteCases?id=${id}`;
  return baseService.post(api, { formData, options });
};

export const createCourse = (formData, options) => {
  const api = `Course/CreateCourse`;
  return baseService.post(api, { formData, options });
};
export const modifiedCourse = (formData, options) => {
  const api = `Course/ModifiedCourse`;
  return baseService.post(api, { formData, options });
};
export const deleteCourse = (id, formData, options) => {
  const api = `Cases/DeleteCases?id=${id}`;
  return baseService.post(api, { formData, options });
};

export const createDataDictionary = (formData, options) => {
  const api = `DataDictionary/CreateDataDictionary`;
  return baseService.post(api, { formData, options });
};
export const modifiedDataDictionary = (formData, options) => {
  const api = `DataDictionary/ModifiedDataDictionary`;
  return baseService.post(api, { formData, options });
};
export const deleteDataDictionary = (id, formData, options) => {
  const api = `DataDictionary/DeleteDataDictionary?id=${id}`;
  return baseService.post(api, { formData, options });
};

export const createDataEnterprise = (formData, options) => {
  const api = `Enterprise/CreateEnterprise`;
  return baseService.post(api, { formData, options });
};
export const modifiedEnterprise = (formData, options) => {
  const api = `Enterprise/ModifiedEnterprise`;
  return baseService.post(api, { formData, options });
};
export const deleteEnterprise = (id, formData, options) => {
  const api = `Enterprise/DeleteEnterprise?id=${id}`;
  return baseService.post(api, { formData, options });
};

export const createHonor = (formData, options) => {
  const api = `Honor/CreateHonor`;
  return baseService.post(api, { formData, options });
};
export const modifiedHonor = (formData, options) => {
  const api = `Honor/ModifiedHonor`;
  return baseService.post(api, { formData, options });
};
export const deleteHonor = (id, formData, options) => {
  const api = `Honor/DeleteHonor?id=${id}`;
  return baseService.post(api, { formData, options });
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
export const createNews = (formData, options) => {
  const api = `News/CreateNews`;
  return baseService.post(api, { formData, options });
};
export const modifiedNews = (formData, options) => {
  const api = `News/ModifiedNews`;
  return baseService.post(api, { formData, options });
};
export const deleteNews = (id, formData, options) => {
  const api = `News/DeleteNews?id=${id}`;
  return baseService.post(api, { formData, options });
};

export const createTeam = (formData, options) => {
  const api = `Team/CreateTeam`;
  return baseService.post(api, { formData, options });
};
export const modifiedTeam = (formData, options) => {
  const api = `Team/ModifiedTeam`;
  return baseService.post(api, { formData, options });
};
export const deleteTeam = (id, formData, options) => {
  const api = `Team/DeleteTeam?id=${id}`;
  return baseService.post(api, { formData, options });
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

// export const getInvoiceImg = (cabinetUuid) => {
//   const api = "/api/v1/getInvoiceImg";
//   return baseService.get(api, { params: { cabinetUuid } });
// };

// export const submitTask = (data) => {
//   const api = "/api/v1/submitTask";
//   return baseService.post(api, { ...data });
// };
