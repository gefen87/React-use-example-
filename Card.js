import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack
      spacing={4}
      align="flex-start"
      borderWidth="1px"
      borderRadius="md"
      p={4}
      width="100%"
      maxW="300px"
      boxShadow="md"
    >
      <Image src={imageSrc} alt={title} />
      <VStack spacing={2} align="flex-start">
        <Heading as="h3" size="md">
          {title}
        </Heading>
        <Text>{description}</Text>
      </VStack>
      <HStack spacing={2} justify="flex-end" alignSelf="flex-end">
        <Text fontSize="sm">View Project</Text>
        <FontAwesomeIcon icon={faArrowRight} size="1x" />
      </HStack>
    </VStack>
  );
};

export default Card;
