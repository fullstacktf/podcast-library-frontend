import React, { useState, useEffect } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { API_URL } from "services/settings";
import useFetch from "hooks/fetchSomeData";
import Loader from "animations/Loader";
import { motion } from "framer-motion";
import Card from "components/Card";
import {
  Flex,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";

type PlayerResponse = {
  _id: number;
  title: string;
  image: string;
  provider: string;
  author: string;
};

const ShowCategories = () => {
  const apiURL = `${API_URL}/podcasts/genre/all`;
  const { data: data, loading, error } = useFetch<PlayerResponse>(apiURL);

  if (loading) return <Loader />;
  if (error) return <Navigate to={`/404`} />;

  return (
    <>
      <Flex
        alignItems="center"
        justifyContent="space-between"
        maxW="100%"
        overflowX="auto"
      >
        <Tabs borderBottom="transparent">
          <TabList>
            {data.map((element) => (
              <Link to={`/genre/${element}`}>
                <Tab
                  fontSize="16px"
                  _hover={{ backgroundColor: "#2C7043", color: "white" }}
                  _selected={{ bg: 'transparent' }}
                  bg="transparent"
                  margin-left="2px"
                  isTruncated
                >
                  #{element}
                </Tab>
              </Link>
            ))}
          </TabList>
        </Tabs>
      </Flex>
      {/* {data.map((element) => (
          <Link to={`/genre/${element}`}>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 1 }}>
              <Badge
                w={{ base: "100%", md: "100%", lg: "row" }}
                _hover={{ backgroundColor: "#2C7043", color: "white" }}
                border="1px"
                bg="transparent"
                p="2"
                textTransform="lowercase"
                fontWeight="light"
                fontSize="18px"
              >
                #{element}
              </Badge>
            </motion.div>
          </Link>
        ))} */}
    </>
  );
};

export default ShowCategories;
