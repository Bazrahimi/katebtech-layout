import { z } from "zod";

import type { ActionState } from "@katebtech/core";

import { ENQUIRY_FIELDS as F } from "./constant";

export const enquirySchema = z.object({
  [F.fullName]: z.string().min(3, { message: "Please enter your full name" }),
  [F.email]: z.email({ message: "Please enter a valid email address" }).trim(),
  [F.contactNumber]: z
    .string()
    .optional()
    .refine((v) => !v || v.trim().length > 0, {
      message: "Invalid phone number",
    }),

  [F.qMessage]: z.string().min(2, { message: "please enter your message" }),
});

export type Enquiry = z.output<typeof enquirySchema>;
export type EnquiryForm = z.infer<typeof enquirySchema>;
export type EnquiryState = ActionState<EnquiryForm>;
