import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Text,
  Alert,
  AlertIcon,
  AlertTitle,
  FormErrorMessage,
  useColorModeValue,
} from "@chakra-ui/react";
import { getUser } from "services/authService";
import { API_URL } from "services/settings";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Sidebar from "components/App/Sidebar";
import Show from "animations/Show";
import toast from "react-hot-toast";

interface IFormInput {
  title: string;
  episode: string;
  description: string;
  image: string;
  language: string;
  genre: string;
  provider: string;
}

const Upload = () => {

  const [title, setTitle] = useState("");
  const [episode, setEpisode] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [language, setLanguage] = useState("");
  const [genre, setGenre] = useState("");
  const [provider, setProvider] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [t, i18n] = useTranslation("global");
  const borderColor = useColorModeValue("#E2E8F0", "#3B3B3D");
  const user = getUser();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const handleUpload = () => {
    setError(null);
    setLoading(true);
    axios
      .post(`${API_URL}/insert/`, {
        title: title,
        author: user.username,
        episode: episode,
        description: description,
        image: image,
        language: language,
        genre: genre,
        provider: provider
      })
      .then((response) => {
        setLoading(false);
        toast("Uploaded", {
          icon: "✅",
          style: {
            background: "#333",
            color: "#fff",
          },
        });
      })
      .catch((error) => {
        setLoading(false);
        if (error.response.status === 401 || error.response.status === 400) {
          setError(error.response.data.message);
        } else {
          console.log("Error.");
        }
      });
  };

  const onSubmit = () => {
    handleUpload();
  };

  return (
    <>
      <Sidebar>
        <Show delay={0}>
          <Text fontSize="4xl" mb="4" mt="0">
            {t("uploadPage.titlePage")}
          </Text>
        </Show>
        <Stack spacing={4}>
          <form onSubmit={handleSubmit(onSubmit)}>

            <FormControl id="title" isInvalid={!!errors?.title}>
              <FormLabel>{t("uploadPage.title")}:</FormLabel>
              <Input
                {...register("title", {
                  required: `${t("validateRequired.Title")}`,
                })}
                type="text"
                placeholder={t("uploadPage.title")}
                onChange={(e) => setTitle(e.target.value)}
              />
              <FormErrorMessage>
                {errors.title && errors.title.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl id="episode" mt="16px" isInvalid={!!errors?.episode}>
              <FormLabel>{t("uploadPage.episode")}:</FormLabel>
              <Input
                type="text"
                {...register("episode", {
                  required: `${t("validateRequired.Episode")}`,
                })}
                placeholder={t("uploadPage.episode")}
                onChange={(e) => setEpisode(e.target.value)}
              />
              <FormErrorMessage>
                {errors.episode && errors.episode.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl id="description" mt="16px" isInvalid={!!errors?.description}>
              <FormLabel>{t("uploadPage.description")}:</FormLabel>
              <Input
                type="text"
                {...register("description", {
                  required: `${t("validateRequired.Description")}`,
                })}
                placeholder={t("uploadPage.description")}
                onChange={(e) => setDescription(e.target.value)}
              />
              <FormErrorMessage>
                {errors.description && errors.description.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl id="image" mt="16px" isInvalid={!!errors?.image}>
              <FormLabel>{t("uploadPage.image")}:</FormLabel>
              <Input
                type="text"
                {...register("image", {
                  required: `${t("validateRequired.Image")}`,
                })}
                placeholder={t("uploadPage.image")}
                onChange={(e) => setImage(e.target.value)}
              />
              <FormErrorMessage>
                {errors.image && errors.image.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl id="language" mt="16px" isInvalid={!!errors?.language}>
              <FormLabel>{t("uploadPage.language")}:</FormLabel>
              <Input
                type="text"
                {...register("language", {
                  required: `${t("validateRequired.Language")}`,
                })}
                placeholder={t("uploadPage.language")}
                onChange={(e) => setLanguage(e.target.value)}
              />
              <FormErrorMessage>
                {errors.language && errors.language.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl id="genre" mt="16px" isInvalid={!!errors?.genre}>
              <FormLabel>{t("uploadPage.genre")}:</FormLabel>
              <Input
                type="text"
                {...register("genre", {
                  required: `${t("validateRequired.Genre")}`,
                })}
                placeholder={t("uploadPage.genre")}
                onChange={(e) => setGenre(e.target.value)}
              />
              <FormErrorMessage>
                {errors.genre && errors.genre.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl id="provider" mt="16px" isInvalid={!!errors?.provider}>
              <FormLabel>{t("uploadPage.provider")}:</FormLabel>
              <Input
                type="text"
                {...register("provider", {
                  required: `${t("validateRequired.Provider")}`,
                })}
                placeholder={t("uploadPage.provider")}
                onChange={(e) => setProvider(e.target.value)}
              />
              <FormErrorMessage>
                {errors.provider && errors.provider.message}
              </FormErrorMessage>
            </FormControl>

            <Stack spacing={5} mt="16px">
              {loading ? (
                <Button
                  isLoading
                  loadingText="Loading"
                  spinnerPlacement="start"
                  border="1px"
                  borderColor={borderColor}
                  fontWeight="light"
                >
                  Loading...
                </Button>
              ) : (
                <Button
                  border="1px"
                  borderColor={borderColor}
                  fontWeight="light"
                  type="submit"
                >
                  {t("buttons.LogIn")}
                </Button>
              )}
              {error && (
                <Alert status="error" borderRadius={5}>
                  <AlertIcon />
                  <AlertTitle mr={2} fontWeight="light">
                    {error}
                  </AlertTitle>
                </Alert>
              )}
            </Stack>
          </form>
        </Stack>
      </Sidebar>
    </>
  );
};

export default Upload;
