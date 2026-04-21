import { z } from "zod";
/**
 * Converts a Zod validation error into a standard server action error payload.
 *
 * This helper is designed for form-based server actions where validation fails
 * and the UI needs:
 * - a general message for the form
 * - field-level error arrays keyed by field name
 * - a stable `ok: false` result shape
 *
 * The returned object is intended to be sent back to the client action state.
 *
 * @template TErrors - The expected shape of the field error object.
 * @param error - The Zod validation error produced by `safeParse`.
 * @param message - Optional user-facing message shown above or near the form.
 * @returns A normalized failed action result containing `ok`, `message`, and `errors`.
 *
 * @example
 * ```ts
 * const parsed = schema.safeParse(data);
 *
 * if (!parsed.success) {
 *   return toActionErrors<ContactFormErrors>(parsed.error);
 * }
 * ```
 */
export declare const toActionErrors: <TErrors>(error: z.ZodError<any>, message?: string) => {
    ok: false;
    message: string;
    errors: TErrors;
};
//# sourceMappingURL=toActionErrors.d.ts.map