import service from "../../axios";

export const getListAccountBank = async (payload: string) => {
  return await service.post(`master/account_bank_list`, payload).then(response => {
    return response;
  });
}
