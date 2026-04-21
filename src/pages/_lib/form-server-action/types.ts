// src/lib/server-action/types.ts

/**
 * Maps a form data shape into a partial object of field-level validation errors.
 *
 * Each key in `T` may contain an array of error messages when validation fails.
 *
 * @template T - The original form or input data shape.
 *
 * @example
 * ```ts
 * type ContactForm = {
 *   name: string;
 *   email: string;
 * };
 *
 * type ContactErrors = FieldErrors<ContactForm>;
 * // { name?: string[]; email?: string[] }
 * ```
 */
export type FieldErrors<T> = Partial<Record<keyof T, string[]>>;

/**
 * Extracts only the keys from `T` whose values are boolean.
 *
 * Useful when working with checkbox fields, toggle inputs,
 * or form helpers that need to know which fields are boolean-based.
 *
 * `undefined` and `null` are excluded before checking whether the field is boolean.
 *
 * @template T - The original object shape.
 *
 * @example
 * ```ts
 * type FormValues = {
 *   fullName: string;
 *   subscribe: boolean;
 *   acceptedTerms?: boolean;
 * };
 *
 * type BoolKeys = BooleanKeys<FormValues>;
 * // "subscribe" | "acceptedTerms"
 * ```
 */
export type BooleanKeys<T> = {
  [K in keyof T]-?: Exclude<T[K], undefined | null> extends boolean ? K : never;
}[keyof T];

/**
 * Standard shared result shape for form-based server actions.
 *
 * This type is intended to support a predictable action response pattern:
 * - `data` for preserving submitted values
 * - `errors` for field-level validation messages
 * - `message` for general feedback
 * - `ok` for success or failure state
 *
 * @template T - The original input or form value shape.
 *
 * @example
 * ```ts
 * type ContactForm = {
 *   name: string;
 *   email: string;
 * };
 *
 * const initialState: ActionState<ContactForm> = {
 *   data: {},
 *   errors: {},
 *   message: "",
 *   ok: false,
 * };
 * ```
 */
export type ActionState<T> = {
  /**
   * Optional submitted values returned back to the client.
   * Useful for re-filling form fields after validation failure.
   */
  data?: Partial<T>;

  /**
   * Per-field validation errors keyed by the original form fields.
   */
  errors?: FieldErrors<T>;

  /**
   * General user-facing message for success, failure, or guidance.
   */
  message?: string;

  /**
   * Indicates whether the server action completed successfully.
   */
  ok?: boolean;
};
