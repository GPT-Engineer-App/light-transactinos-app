import { Box, Button, Container, Flex, FormControl, FormLabel, Heading, IconButton, Input, Stack, Table, Tbody, Td, Text, Th, Thead, Tr, useColorModeValue, VStack } from "@chakra-ui/react";
import { FaPlus, FaEdit, FaTrash, FaSave } from "react-icons/fa";

const Index = () => {
  const bgColor = useColorModeValue("white", "gray.800");
  const colorScheme = "teal";

  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8} align="stretch">
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg" bg={bgColor}>
          <Flex justifyContent="space-between" alignItems="center">
            <Heading fontSize="xl">Manage Transactions</Heading>
            <Button leftIcon={<FaPlus />} colorScheme={colorScheme} variant="solid">
              Add Transaction
            </Button>
          </Flex>
        </Box>

        <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg" bg={bgColor}>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>ID</Th>
                <Th>Date</Th>
                <Th>Amount</Th>
                <Th>Description</Th>
                <Th>Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>1</Td>
                <Td>2023-01-01</Td>
                <Td>$1000</Td>
                <Td>Initial deposit</Td>
                <Td>
                  <IconButton aria-label="Edit" icon={<FaEdit />} />
                  <IconButton aria-label="Delete" icon={<FaTrash />} ml={2} />
                </Td>
              </Tr>
              {/* More rows can be added here */}
            </Tbody>
          </Table>
        </Box>

        <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg" bg={bgColor}>
          <Heading fontSize="lg" mb={4}>
            Add/Edit Transaction
          </Heading>
          <Stack spacing={4}>
            <FormControl id="date">
              <FormLabel>Date</FormLabel>
              <Input type="date" />
            </FormControl>
            <FormControl id="amount">
              <FormLabel>Amount</FormLabel>
              <Input type="number" />
            </FormControl>
            <FormControl id="description">
              <FormLabel>Description</FormLabel>
              <Input type="text" />
            </FormControl>
            <Button leftIcon={<FaSave />} colorScheme={colorScheme} variant="solid">
              Save Transaction
            </Button>
          </Stack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
