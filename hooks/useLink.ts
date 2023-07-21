export default function (target: string) {
  let el = document.getElementById(target);

  let top = el?.offsetTop;
  window.scrollTo({ behavior: "smooth", top: top, left: 0 });
}
