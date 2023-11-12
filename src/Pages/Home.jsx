import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import TransactionTable from "../Components/TransactionTable";
import { Table, Thead, Tbody, Tr, Th, TableContainer } from "@chakra-ui/react";
import Pagination from "../Components/Pagination";
import { Accoding_Month, AllData, Searching_Data } from "../Redux/action";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import MonthModal from "../Components/MonthModal";
import SelectTag from "../Components/SelectTag";
import Styles from "../AllCss/AllCss.module.css";
const Home = () => {
  const [search, setSearch] = useState("");
  const { Transactions } = useSelector(
    (details) => ({
      Transactions: details.TransactionData.data,
    }),
    shallowEqual
  );
  const [page, setPage] = useState(1);
  const limit = useRef(10);
  const dispatch = useDispatch();
  useEffect(() => {
    if (search === "") {
dispatch(AllData(page, limit.current));
    } else {
      dispatch(Searching_Data(search));
    }
  }, [search,page]);

  const handleChange = (e) => {
    const { value } = e.target;
    setTimeout(() => {
      setSearch({ ...search, value });
    }, 2000);
  };
  const handleMonth = (e) => {
    dispatch(Accoding_Month(e.target.value));
  };

  return (
    <div style={{paddingTop: "35px" , backgroundColor:"lightskyblue"}} className="min-h-[70vh] w-12/12 shadow-2xl m-auto bg-white mt-2">
      <Flex className="d-flex justify-content-center	items-center pb-5" style={{alignItems:"center",borderRadius: "50%",backgroundColor: "lightcyan", width: "200px", height: "150px",textAlign: "center", marginRight: "70px", marginLeft: "460px"}} gap="10px">
            <Text className="text-lg text-slate-600" style={{fontWeight:"bold", fontSize: "30px"}}>Transaction Dashboard</Text>
          </Flex>
      <Box className="m-auto w-[95%]">
        <Flex className="justify-between items-center p-4">
          
          <input
            type="text"
            className="rounded-md py-2 px-6"
            placeholder="Search transaction"
            style={{ backgroundColor: "lightgoldenrodyellow",borderRadius:"15px", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
            onChange={handleChange}
          />

          <SelectTag name="Select Month" fun={handleMonth} />
          <MonthModal />
          <Link to="/chart" className="w-20">
            <Button colorScheme="whatsapp" w="100%">
              Stats
            </Button>
          </Link>
        </Flex>
        <TableContainer style={{borderRadius : "30px",borderColor: "black",backgroundColor:"lightgoldenrodyellow"}} mt="20px">
          <Table>
            <Thead>
              <Tr>
                <Th className={Styles.tr1}>ID</Th>
                <Th className={Styles.tr1}>Title</Th>
                <Th className={Styles.tr1}>Description</Th>
                <Th className={Styles.tr1}>Price</Th>
                <Th className={Styles.tr1}>Category</Th>
                <Th className={Styles.tr1}>Sold</Th>
                <Th  className={Styles.imge}>Image</Th>
              </Tr>
            </Thead>
            <Tbody>
              {Transactions.length > 0 &&
                Transactions.map((ele, i) => (
                  <TransactionTable key={i} {...ele} />
                ))}
            </Tbody>
          </Table>
        </TableContainer>
        <Pagination page={page} setPage={setPage} />
      </Box>
    </div>
  );
};

export default Home;
