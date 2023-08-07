export default function (target: string) {
  let el = document.getElementById(target);

  let top = el?.offsetTop;
  return window.scrollTo({ behavior: "smooth", top: top, left: 0 });
}
