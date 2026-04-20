import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Header, P } from "@katebtech/core";
import Image from "next/image";
/**
 * Renders a circular team member avatar.
 *
 * When an image is available, it displays:
 * - a blurred background version of the image
 * - a sharp foreground profile image on top
 *
 * When no image is provided, it falls back to a local placeholder image.
 */
const Avatar = ({ member }) => {
    const hasImage = !!member.image;
    return (_jsx("div", { className: "relative mx-auto mb-4 h-24 w-24 overflow-hidden rounded-full bg-gray-100 ring-2 ring-gray-200 ring-offset-2", children: hasImage ? (_jsxs(_Fragment, { children: [_jsx(Image, { src: member.image, alt: "", fill: true, "aria-hidden": true, className: "scale-110 object-cover blur-md", sizes: "96px" }), _jsx("div", { className: "absolute inset-0 bg-black/10" }), _jsx("div", { className: "absolute inset-0 z-10", children: _jsx(Image, { src: member.image, alt: `${member.name} profile`, fill: true, className: "object-cover", sizes: "96px" }) })] })) : (_jsx("div", { className: "flex h-full w-full items-center justify-center", children: _jsx(Image, { src: "/images/avatar-placeholder.jpg", alt: "Profile placeholder", width: 64, height: 64, className: "opacity-60" }) })) }));
};
/**
 * Renders a team section with:
 * - a heading
 * - introductory text
 * - optional expertise summary
 * - a responsive grid of team member cards
 *
 * Returns `null` when the team has no members.
 */
export const TeamGrid = ({ team }) => {
    if (!team.members.length)
        return null;
    return (_jsxs("section", { "aria-labelledby": `${team.id}-heading`, children: [_jsx(Header, { as: "h2", size: "sm", id: `${team.id}-heading`, children: team.title }), _jsxs(P, { className: "mt-2 max-w-2xl text-sm text-slate-700", children: [team.intro, " ", team.professionalTitles?.length ? (_jsxs(_Fragment, { children: [_jsx("span", { className: "font-medium", children: "Expertise: " }), team.professionalTitles.join(", "), "."] })) : null] }), _jsx("div", { className: "mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3", children: team.members.map((member) => (_jsxs("article", { className: "mx-auto w-full max-w-sm rounded-2xl border border-gray-100 bg-white p-5 text-center shadow-sm", children: [_jsx(Avatar, { member: member }), _jsx(Header, { className: "text-gray-900", as: "h3", size: "xs", children: member.name }), _jsx(P, { className: "mt-1 text-sm text-gray-600", children: member.role }), member.bio ? (_jsx(P, { className: "mt-3 text-sm text-gray-700", children: member.bio })) : null] }, `${member.name}-${member.role}`))) })] }));
};
