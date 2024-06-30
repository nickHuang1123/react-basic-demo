
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import Paper from '@mui/material/Paper';

import { useState, useEffect, useMemo } from 'react';
import axios from 'axios'
const urlAPI = 'https://hn.algolia.com/api/v1/search'

function App() {
  const [ data, setDate ] = useState({hits:[]}) // hit: 轟動一時的人的列表

  const count = useMemo(() => `共 ${data.hits.length} 筆`, [data])

  const fetchData = async () => {
    setDate({hits:[]})
    const result = await axios(`${urlAPI}?query=redux`)
    if (result?.data) {
      setDate(result?.data)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <Button variant="outlined" onClick={fetchData}>查詢</Button>
      <h1>{count}</h1>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>title</TableCell>
            <TableCell align="right">author</TableCell>
            <TableCell align="right">updated_at</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.hits.map((row) => (
            <TableRow
              key={row.objectID}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.title}
              </TableCell>
              <TableCell align="right">{row.author}</TableCell>
              <TableCell align="right">{row.updated_at}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  )
}

export default App
