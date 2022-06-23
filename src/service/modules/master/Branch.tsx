import service from "../../axios";

export async function getListBranch() {
  return await service.get(`master/branch_list`).then(response => {
    return response;
  });
}
