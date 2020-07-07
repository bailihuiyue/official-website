import baseService from "@/services/axios";

export const getCheckingAnswerCandidates = () => {
  const api = "/api/v1/getCheckingAnswerCandidates";
  return baseService.get(api);
};

export const getTask = (contractUuid) => {
  let api = "";
  if (contractUuid) {
    api = `/api/v1/review/${contractUuid}/contract`;
  } else {
    api = "/api/v1/getTask";
  }
  return baseService.get(api);
};

export const getInvoiceImg = (cabinetUuid) => {
  const api = "/api/v1/getInvoiceImg";
  return baseService.get(api, { params: { cabinetUuid } });
};

export const submitTask = (data) => {
  const api = "/api/v1/submitTask";
  return baseService.post(api, { ...data });
};
