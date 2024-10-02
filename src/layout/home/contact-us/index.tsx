// Core
import { Box, Container, Flex, FormControl, FormErrorMessage, VStack } from "@chakra-ui/react";
import { Form, Formik } from "formik";

// Component
import { StyledButton, StyledInput, StyledSpacer, StyledText } from "@src/components";

// Utils
import { ContactUsSchema } from "./utils";

// Components

export const ContactUs = () => {
	return (
		<Container maxW="container.xl" py="2rem" id="contact">
			<Flex
				flexDirection={{ base: "column", md: "row", lg: "row" }}
				justifyContent="space-between"
				alignItems={{ md: "center", lg: "center" }}
				gap="80px"
				mt={{ base: "4rem", lg: "10rem" }}
			>
				<Box w="100%" maxW="572px" mb={{ lg: "8rem" }}>
					<Box w="100%" maxW="566px">
						<StyledSpacer />
						<StyledText variant="body1-regular" color="$biegePrimaryDark">
							Contact Us
						</StyledText>
						<StyledSpacer />
						<StyledText variant="h2-bold" lineHeight="70px">
							Stay Connected
						</StyledText>
						<StyledSpacer />

						<StyledText
							variant="body2-regular"
							lineHeight="25px"
							color="$biegePrimaryDark"
						>
							We’d love to hear from you! Whether you have a question about our
							courses, want to volunteer, or simply want to learn more about
							our work, feel free to get in touch.
						</StyledText>
						<StyledSpacer variant="space32" />
					</Box>
				</Box>
				<VStack
					w={{ base: "100%", lg: "35%" }}
					justifyContent="center"
					alignItems="center"
				>
					<Formik
						initialValues={{
							phone: "",
							socialMedia: "",
							email: "",
						}}
						validationSchema={ContactUsSchema}
						onSubmit={() => {}}
					>
						{({ handleSubmit, errors, touched, values, handleChange }) => (
							<Form onSubmit={handleSubmit} style={{ width: "100%" }}>
								<VStack spacing={4} align="flex-end">
									<FormControl
										isInvalid={!!errors.email && touched.email}
									>
										<StyledInput
											label="Email"
											name="email"
											type="email"
											value={values.email}
											placeholder="Email"
											onChange={handleChange}
										/>
										<FormErrorMessage>
											{errors.email}
										</FormErrorMessage>
									</FormControl>
									<FormControl
										isInvalid={!!errors.phone && touched.phone}
									>
										<StyledInput
											label="Phone"
											name="phone"
											type="number"
											value={values.phone}
											placeholder="Phone"
											onChange={handleChange}
										/>
										<FormErrorMessage>
											{errors.phone}
										</FormErrorMessage>
									</FormControl>

									<FormControl
										isInvalid={
											!!errors.socialMedia && touched.socialMedia
										}
									>
										<StyledInput
											label="Social Media"
											name="socialMedia"
											type="text"
											value={values.socialMedia}
											placeholder="Social media handle"
											onChange={handleChange}
										/>
										<FormErrorMessage>
											{errors.socialMedia}
										</FormErrorMessage>
									</FormControl>
									<StyledSpacer variant="space4" />
									<StyledButton
										bgColor="$biegePrimaryDark"
										w="100%"
										onClick={() => []}
										type="submit"
										isLoading={false}
										isDisabled={false}
									>
										<StyledText
											variant="body2-regular"
											color="$white"
										>
											Submit
										</StyledText>
									</StyledButton>
								</VStack>
							</Form>
						)}
					</Formik>
				</VStack>
			</Flex>
		</Container>
	);
};
