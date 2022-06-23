import service from "../../axios";

export async function getListBank() {
  return await service.get(`master/bank_list`).then(response => {
    return response;
  });
}
