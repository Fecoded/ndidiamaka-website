/* eslint-disable no-useless-escape */
import * as yup from "yup";

const phoneRegExp =
	/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const ContactUsSchema = yup.object({
	email: yup.string().email("Enter a valid email").required("Email is required"),
	socialMedia: yup.string().required("This field is required"),
	phone: yup
		.string()
		.required("Phone is required")
		.matches(phoneRegExp, "Phone number is not valid")
		.min(11)
		.max(11),
});
