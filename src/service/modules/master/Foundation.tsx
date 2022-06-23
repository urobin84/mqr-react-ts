import service from "../../axios";

export async function getListFoundation() {
  return await service.get(`master/foundation_list`).then(response => {
    return response;
  });
}
