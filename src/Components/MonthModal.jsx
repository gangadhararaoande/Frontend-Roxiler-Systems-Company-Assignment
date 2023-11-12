import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  HStack,
  Box,
  Center,
} from "@chakra-ui/react";
import { STATE, Totalsold, Totalunsold } from "../Redux/action";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import SelectTag from "./SelectTag";
const MonthModal = () => {
  const dispatch = useDispatch();
  const stats = useSelector((items) => {
    return items.TransactionData;
  }, shallowEqual);
  const { isOpen, onOpen, onClose } = useDisclosure();
  function handleChange(e) {
    onOpen();
    dispatch(STATE(e.target.value));
    dispatch(Totalsold(e.target.value));
    dispatch(Totalunsold(e.target.value));
  }
  console.log("i am stats", stats);
  return (
    <>
      <SelectTag name="Statistic" fun={handleChange} />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent style={{backgroundColor:"lightyellow"}}>
          <ModalHeader>Statistics </ModalHeader>
          <ModalCloseButton />
          <ModalBody style={{
            borderRadius: "15px",
            borderWidth: "bold",
            backgroundColor: "lightpink",
            marginLeft: "20px",
            marginRight: "100px",
          }}>
            <Center>
              <HStack spacing="24px">
                <Box h="40px" fontWeight="700">
                  Total sale :{" "}
                </Box>
                <Box h="40px">
                  {stats.stats.length > 0 && stats.stats[0].total}
                </Box>
              </HStack>
            </Center>
            <Center>
              <HStack spacing="24px">
                <Box h="40px" fontWeight="700">
                  Total sold items :
                </Box>
                <Box h="40px">{stats.stats.length > 0 && stats.solditems}</Box>
              </HStack>
            </Center>
            <Center>
              <HStack spacing="24px">
                <Box h="40px" fontWeight="700">
                  Total unsold items :
                </Box>
                <Box h="40px">
                  {stats.stats.length > 0 && stats.unsolditems}
                </Box>
              </HStack>
            </Center>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default MonthModal;
