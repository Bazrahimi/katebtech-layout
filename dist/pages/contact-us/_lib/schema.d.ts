import { z } from "zod";
import type { ActionState } from "@katebtech/layout/pages";
export declare const enquirySchema: z.ZodObject<{
    fullName: z.ZodString;
    email: z.ZodEmail;
    contactNumber: z.ZodOptional<z.ZodString>;
    qMessage: z.ZodString;
}, z.core.$strip>;
export type Enquiry = z.output<typeof enquirySchema>;
export type EnquiryForm = z.infer<typeof enquirySchema>;
export type EnquiryState = ActionState<EnquiryForm>;
//# sourceMappingURL=schema.d.ts.map