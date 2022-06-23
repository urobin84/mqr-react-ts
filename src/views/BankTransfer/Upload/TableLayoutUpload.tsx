// ** MUI Imports
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TablePagination from '@mui/material/TablePagination'
import {ChangeEvent, useEffect, useState} from "react";
import {columnsTableBankTransferUpload} from "../../../store/const/bank-transfer";

import {
  postdataTableUploadFileBankTransfer,
} from "../../../service/modules/BankTransfer/Upload";
import {
  DataTableBankTransferUpload,
  DataTableUploadFileBankTransferRecordPayload
} from "../../../interfaces/bank-transfer";
import Link from '@mui/material/Link';
import {LinearProgress, Tooltip} from "@mui/material";
import NProgress from "nprogress";
import {useRecoilState, useRecoilValue} from "recoil";
import {statusBtnSearchState} from "../../../store/recoil/atoms/uploadFileBankTransfer";
import {bankSearchState} from "../../../store/recoil/atoms/bank";

function funRowStart(page: number, rowsPerPage: number) {
  return (page * rowsPerPage);
}

const TableLayoutUpload = () => {
  // ** States
  const [dataTable, setDataTable] = useState<DataTableBankTransferUpload[]>([]);
  const [page, setPage] = useState<number>(0)
  const [rowsPerPage, setRowsPerPage] = useState<number>(10)
  const [rowsTotal, setRowsTotal] = useState<number>(0)
  const [rowStart, setRowStart] = useState<number>(0)
  const [loadDataTable, setLoadDataTable] = useState<boolean>(true)
  const [statusBtnSearch, setStatusBtnSearch] = useRecoilState(statusBtnSearchState);

  const bankSearch = useRecoilValue(bankSearchState);
  const dataPost:DataTableUploadFileBankTransferRecordPayload = {
    start: rowStart,
    length: rowsPerPage,
    foundationId: 1,
    bankId: bankSearch,
    branchId: '',
    accountBankId: '',
    dateRange: '01/01/2022 - 05/15/2022'
  };

  function createData(number: string, bank: string, account: string, link_file: string, file_name: string, status: string, notes: string, upload_date: string): DataTableBankTransferUpload {
    return {number, bank, account, link_file, file_name, status, notes, upload_date};
  }

  // get data table
  const dataTableUploadFileBankTrasfer = async (dataPost: DataTableUploadFileBankTransferRecordPayload) => {
    setLoadDataTable(true);

    const response = await postdataTableUploadFileBankTransfer(dataPost);
    if (response.status == 200) {
      setDataTable([]);
      const dataSetTable = response.data;

      // @ts-ignore
      setRowsTotal(dataSetTable.recordsTotal ? dataSetTable.recordsTotal : 0);

      // @ts-ignore
      dataSetTable.data.map((item: DataTableBankTransferUpload) => {

        // @ts-ignore
        setDataTable(dataTable => [...dataTable, createData(item[0], item[1], item[2], item[3], item[4], item[5], item[6], item[7])]);
      });
    }else{
    }
    await setLoadDataTable(false);
    NProgress.done();
    setStatusBtnSearch(false);
  };

  useEffect(() => {
    dataTableUploadFileBankTrasfer(dataPost)
  }, [page, statusBtnSearch]);

  const handleChangePage = (event: unknown, newPage: number) => {
    NProgress.start();
    setPage(newPage)
    setRowStart(funRowStart(newPage , rowsPerPage))
  }

  const handleChangeRowsPerPage = async (event: ChangeEvent<HTMLInputElement>) => {
    NProgress.start();
    setRowsPerPage(+event.target.value)
    setPage(0)
    setRowStart(0)
  }

  return (
    <Paper sx={{width: '100%', overflow: 'hidden'}}>
      {loadDataTable ? <LinearProgress /> : null}
      <TableContainer sx={{maxHeight: 580}}>
        <Table stickyHeader aria-label='sticky table'>
          <TableHead>
            <TableRow>
              {columnsTableBankTransferUpload.map(column => (
                <TableCell key={column.id} align={column.align} sx={{minWidth: column.minWidth}}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {dataTable.map(row => {
              return (
                <TableRow hover role='checkbox' tabIndex={-1} key={row.number}>
                  {columnsTableBankTransferUpload.map(column => {
                    // @ts-ignore
                    const value = row[column.id];
                    const notes = row['notes'];

                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.id === 'file_name' ? <Link href={row.link_file}>{value}</Link> :
                          column.id === 'status' ? notes != "" ?
                            <Tooltip title={notes} placement="top"><span style={{color: value === 'success' ? 'green' : 'red'}}>{value}</span></Tooltip>
                             : <span style={{color: value === 'success' ? 'green' : 'red'}}>{value}</span>
                            : value
                        }
                      </TableCell>
                    )
                  })}
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component='div'
        count={rowsTotal}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default TableLayoutUpload;
