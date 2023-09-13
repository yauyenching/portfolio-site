import { PropsWithChildren } from "react";
import { Box } from "@chakra-ui/react";

export default function SkillTag({ children }: PropsWithChildren) {
  return (<Box
    display="inline-block" w="fit-content"
    color="brand.accent"
    fontFamily="heading" fontSize="xs" 
    whiteSpace="break-spaces"
    letterSpacing="0.025em"
    bg="hsla(14, 100%, 75%, 8%)"
    borderRadius="25px"
    p="5px 10px" mr="5px" my="2.5px"
    opacity={0.85}>
    {children}
  </Box>)
}