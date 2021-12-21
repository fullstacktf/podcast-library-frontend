import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Flex,
  Select,
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
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Textarea,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { getUser } from "services/authService";
import { API_URL } from "services/settings";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Sidebar from "components/App/Sidebar";
import Show from "animations/Show";
import toast from "react-hot-toast";
import { Image, Paperclip, Pencil, Planet } from "phosphor-react";

interface IFormInput {
  title: string;
  url: string;
  episode: string;
  description: string;
  image: string;
  language: string;
  genre: string;
  provider: string;
}

const Upload = () => {
  
  const [title, setTitle] = useState("");
  const [url, setURL] = useState("");
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
      .post(`${API_URL}/podcasts/insert/`, {
        title: title,
        url: url,
        author: user.username,
        episode: episode,
        description: description,
        image: image,
        language: language,
        genre: genre,
        provider: provider,
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
            {/* Title: */}
            <FormControl id="title" isInvalid={!!errors?.title}>
              <FormLabel>{t("uploadPage.title")}:</FormLabel>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  mt="1"
                  children={<Pencil size="20" />}
                />
                <Input
                  {...register("title", {
                    required: `${t("validateRequired.Title")}`,
                  })}
                  borderLeft="0px"
                  borderRight="0px"
                  borderTop="0px"
                  borderRadius="0"
                  type="text"
                  size="lg"
                  placeholder={t("uploadPage.title")}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </InputGroup>
              <FormErrorMessage>
                {errors.title && errors.title.message}
              </FormErrorMessage>
            </FormControl>

            {/* URL: */}
            <FormControl id="url" isInvalid={!!errors?.url} mt="16px">
              <FormLabel>{t("uploadPage.url")}:</FormLabel>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<Paperclip size="20" />}
                />
                <Input
                  {...register("url", {
                    required: `${t("validateRequired.URL")}`,
                    pattern: {
                      value:
                        /(https:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi,
                      message: "Enter a valid URL address",
                    },
                  })}
                  type="text"
                  placeholder={t("uploadPage.url")}
                  onChange={(e) => setURL(e.target.value)}
                />
              </InputGroup>
              <FormErrorMessage>
                {errors.url && errors.url.message}
              </FormErrorMessage>
            </FormControl>

            <Flex justifyContent="space-between">
              {/* Provider: */}
              <FormControl
                id="provider"
                mt="16px"
                mr="3"
                isInvalid={!!errors?.provider}
              >
                <FormLabel>{t("uploadPage.provider")}:</FormLabel>
                <Select
                  placeholder={t("uploadPage.provider")}
                  {...register("provider", {
                    required: `${t("validateRequired.Provider")}`,
                  })}
                  onChange={(e) => setProvider(e.target.value)}
                >
                  <option value="YouTube">YouTube</option>
                </Select>
                <FormErrorMessage>
                  {errors.provider && errors.provider.message}
                </FormErrorMessage>
              </FormControl>

              {/* Episode: */}
              <FormControl
                id="episode"
                mt="16px"
                mr="3"
                isInvalid={!!errors?.episode}
              >
                <FormLabel>{t("uploadPage.episode")}:</FormLabel>
                <NumberInput
                  defaultValue={1}
                  {...register("episode", {
                    required: `${t("validateRequired.Episode")}`,
                  })}
                  min={0}
                  max={1000}
                  onChange={(value) => setEpisode(value)}
                >
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
                <FormErrorMessage>
                  {errors.episode && errors.episode.message}
                </FormErrorMessage>
              </FormControl>

              {/* Genre: */}
              <FormControl
                id="genre"
                mt="16px"
                mr="3"
                isInvalid={!!errors?.genre}
              >
                <FormLabel>{t("uploadPage.genre")}:</FormLabel>
                <Select
                  placeholder={t("uploadPage.genre")}
                  {...register("genre", {
                    required: `${t("validateRequired.Genre")}`,
                  })}
                  onChange={(e) => setGenre(e.target.value)}
                >
                  <option value="Psicología">Psicología</option>
                  <option value="Física">Física</option>
                  <option value="Programación">Programación</option>
                </Select>
                <FormErrorMessage>
                  {errors.genre && errors.genre.message}
                </FormErrorMessage>
              </FormControl>

              {/* Language: */}
              <FormControl
                id="language"
                mt="16px"
                isInvalid={!!errors?.language}
              >
                <FormLabel>{t("uploadPage.language")}:</FormLabel>
                <Select
                  placeholder={t("uploadPage.language")}
                  {...register("language", {
                    required: `${t("validateRequired.Language")}`,
                  })}
                  onChange={(e) => setLanguage(e.target.value)}
                >
                  <option value="Español">Español</option>
                  <option value="English">English</option>
                </Select>
                <FormErrorMessage>
                  {errors.language && errors.language.message}
                </FormErrorMessage>
              </FormControl>
            </Flex>

            {/* Description: */}
            <FormControl
              id="description"
              mt="16px"
              isInvalid={!!errors?.description}
            >
              <FormLabel>{t("uploadPage.description")}:</FormLabel>
              <Textarea
                {...register("description", {
                  required: `${t("validateRequired.Description")}`,
                })}
                placeholder={t("uploadPage.description")}
                onChange={(e) => setDescription(e.target.value)}
              ></Textarea>
              <FormErrorMessage>
                {errors.description && errors.description.message}
              </FormErrorMessage>
            </FormControl>

            {/* Image: */}
            <FormControl id="image" mt="16px" isInvalid={!!errors?.image}>
              <FormLabel>{t("uploadPage.image")}:</FormLabel>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<Image size="20" />}
                />
                <Input
                  type="text"
                  {...register("image", {
                    required: `${t("validateRequired.Image")}`,
                  })}
                  placeholder={t("uploadPage.image")}
                  onChange={(e) => setImage(e.target.value)}
                />
              </InputGroup>
              <FormErrorMessage>
                {errors.image && errors.image.message}
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
                  Uploading...
                </Button>
              ) : (
                <Button
                  border="1px"
                  borderColor={borderColor}
                  fontWeight="light"
                  type="submit"
                >
                  {t("buttons.AddPodcast")}
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
