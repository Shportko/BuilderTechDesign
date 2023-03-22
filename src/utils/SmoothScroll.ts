// export const smoothScrolll = (
//   anchorId: string | undefined,
//   scrollOffset: number,
//   smoothBehavior?: boolean,
//   timeout?: number
// ) => {
//   if (anchorId) {
//     setTimeout(
//       () => {
//         const $anchor = document.getElementById(anchorId);
//         const offset = scrollOffset;
//         if ($anchor) {
//           window.scroll({
//             top:
//               $anchor.getBoundingClientRect().top + window.pageYOffset - offset,
//             behavior: smoothBehavior ? "smooth" : "auto",
//           });
//         }
//       },
//       timeout ? timeout : 0
//     );
//   }
// };

export const smoothScroll = (
  scrollOffset: number,
  smoothBehavior?: boolean,
  timeout?: number,
  anchorId?: string | undefined
) => {
  if (anchorId) {
    setTimeout(
      () => {
        const $anchor = document.getElementById(anchorId);
        const offset = scrollOffset;
        if ($anchor) {
          window.scroll({
            top:
              $anchor.getBoundingClientRect().top + window.pageYOffset - offset,
            behavior: smoothBehavior ? "smooth" : "auto",
          });
        }
      },
      timeout ? timeout : 0
    );
  } else {
    setTimeout(
      () => {
        window.scroll({
          top: scrollOffset,
          behavior: smoothBehavior ? "smooth" : "auto",
        });
      },
      timeout ? timeout : 0
    );
  }
};
