import React, { useState, useEffect } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { API_URL } from "services/settings";
import useFetch from "hooks/fetchSomeData";
import Loader from "animations/Loader";
import { motion } from "framer-motion";
import Card from "components/Card";
import { Badge, Stack } from "@chakra-ui/react";

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
      <Stack direction={{ base: "column", md: "row" }}>
        {data.map((element) => (
          <Link to={`/genre/${element}`}>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 1 }}>
              <Badge
                w={{ base: "100%", md: "row" }}
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
        ))}
      </Stack>
    </>
  );
};

export default ShowCategories;
