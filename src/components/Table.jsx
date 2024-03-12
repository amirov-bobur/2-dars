import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function BasicTable(params) {
  const columns = params.cols;
  const rows = params.rows;
	return (
		<TableContainer   component={Paper}>
			<Table   sx={{ minWidth: 650 }} aria-label='simple table'>
				<TableHead>
					<TableRow  >
						{columns.map(col => {
              return <TableCell key={col.key}>
                {col.label}
              </TableCell>;
						})}
					</TableRow>
				</TableHead>
        <TableBody>
          {
            rows.map(row => {
              const rowEnteries = Object.entries(row);
              return <TableRow hover key={row.key} sx={{ "&:last-child td, &:last-child th": { border: 0 }, cursor:"pointer" }}>
                {
                  rowEnteries.map(([key, value]) => {
                    return (
											<TableCell key={key} scope='row'>
												{value}
											</TableCell>
										);
                  })
                }
            </TableRow>
            })
          }
				
				</TableBody>
			</Table>
		</TableContainer>
	);
}
