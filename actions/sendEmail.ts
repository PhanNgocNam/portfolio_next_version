"use server";

export const sendEmail = (formData: FormData) => {
  console.log(formData.get("senderEmail"));
};
