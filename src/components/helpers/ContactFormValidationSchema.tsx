import * as Yup from "yup";

const requiredMessage = " is required";
const requiredEmailMessage = "Email is invalid";

export const contactSchema = Yup.object().shape({
  firstname: Yup.string().trim().required("Firstname"+requiredMessage),
  lastname: Yup.string().trim().required("Lastname"+requiredMessage),
  email: Yup.string().trim().email(requiredEmailMessage).required("Email"+requiredMessage),
  subject: Yup.string().trim().required("Subject"+requiredMessage),
  message: Yup.string().trim().required("Message"+requiredMessage),
});
