export interface SimplePaginationProps {
    page?: number;
    pages?: number;
    onPageChange?: (page: number) => void | Promise<void>;
}
/** A generic previous/next pagination molecule. It has no application or data dependencies. */
export declare function SimplePagination({ page, pages, onPageChange }: SimplePaginationProps): import("react").JSX.Element;
