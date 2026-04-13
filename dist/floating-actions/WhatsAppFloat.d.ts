type Props = {
    /**
     * Prefilled message text sent to WhatsApp.
     *
     * Example:
     * "Hi, I would like to ask about your services."
     */
    textHeading: string;
    /**
     * WhatsApp number in international format, without "+" or spaces.
     *
     * Example:
     * "61412345678"
     */
    whatsAppNumber: string;
};
/**
 * Floating WhatsApp action button fixed to the bottom-right corner.
 *
 * Opens a new WhatsApp chat in a new tab with a prefilled message.
 *
 * Usage:
 * `<WhatsAppFloat textHeading="Hi, I need help" whatsAppNumber="61412345678" />`
 */
export declare const WhatsAppFloat: ({ textHeading, whatsAppNumber }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=WhatsAppFloat.d.ts.map