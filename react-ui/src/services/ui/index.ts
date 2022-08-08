const scrollToElement = (element: string) => {
  const elementToScrollTo = document.querySelector(element);

  if (elementToScrollTo) {
    elementToScrollTo.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};

// copy a text to the users clipboard
const copyLinkToClipboard = (link: string) => {
  if (navigator?.clipboard) {
    navigator.clipboard.writeText(link);
  }
};

export default {
  scrollToElement,
  copyLinkToClipboard,
};
