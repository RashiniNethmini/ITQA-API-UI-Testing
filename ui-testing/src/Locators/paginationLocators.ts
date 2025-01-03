export const paginationLocators = {
    pageLink: (pageNumber: string) => `.page-link[aria-label="Page-${pageNumber}"]`,
    activePageLink: '.page-item.active .page-link',
    productName: '[data-test="product-name"]',
  };
  