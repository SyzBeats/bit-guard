const scrollToElement = (element: string) => {
  const elementToScrollTo = document.querySelector(element);

  if (elementToScrollTo) {
    elementToScrollTo.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};

export default {
  scrollToElement,
};
