/**
 * Provides unique class selectors for Swiper navigation.
 * Swiper needs CSS selectors or elements for prevEl/nextEl.
 */
export declare function useCarouselNav(prefix?: string): {
    prevClass: string;
    nextClass: string;
    navigation: {
        readonly prevEl: `.${string}`;
        readonly nextEl: `.${string}`;
    };
};
//# sourceMappingURL=useCarouselNav.d.ts.map