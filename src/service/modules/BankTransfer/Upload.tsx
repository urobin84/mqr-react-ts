import service from "../../axios";
import {DataTableUploadFileBankTransferRecordPayload} from "../../../interfaces/bank-transfer";

export const postdataTableUploadFileBankTransfer = async (payload: DataTableUploadFileBankTransferRecordPayload) => {
  return await service.post<DataTableUploadFileBankTransferRecordPayload>(`bank_transfer/upload/datatable`, payload).then(response => {
    return response;
  })
}
