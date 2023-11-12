import React, { useEffect, useState } from "react";
import { Flex } from "@chakra-ui/react";

const Pagination = ({ page, setPage }) => {
  const [disabled, setDisabled] = useState(false);
  const [incdisabled, setIncdisabled] = useState(false);
  useEffect(() => {
    if (page <= 1) {
      setDisabled(true);
    } else if (page >= 4) {
      setIncdisabled(true);
    } else {
      setDisabled(false);
    }
  }, [page]);

  
  return (
    <div>
      <Flex className="w-[70%] m-[auto] justify-between		items-center gap-[10px] p-[10px]">
      <h1 style={{ color: "black" }}> Page No: {page}</h1>

        <button
          style={{
            background: "#8b2b3a",
            padding: "6px 30px 6px 30px",
            borderRadius: "3px",
            color: "white",
            cursor: "pointer",
          }}
          onClick={() => setPage(page - 1)}
          disabled={disabled}
        >
          PREV
        </button>
        
        <button
          style={{
            background: "#8b2b3a",
            padding: "6px 30px 6px 30px",
            borderRadius: "3px",
            color: "white",
            cursor: "pointer",
          }}
          onClick={() => setPage(page + 1)}
          disabled={incdisabled}
        >
          NEXT
        </button>
      </Flex>
    </div>
  );
};

export default Pagination;
