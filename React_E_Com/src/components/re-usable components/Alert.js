function Alert(element, content) {
  const int = setInterval(() => {
    if (!element.classList.contains("alerted")) {
      clearInterval(int);
      element.classList.add("alerted");
      element.innerHTML = content;
      element.style.display = "flex";
      setTimeout(() => {
        element.style.opacity = "1";
      }, 100);
      setTimeout(() => {
        element.style.opacity = "0";
        setTimeout(() => {
          element.style.display = "none";
          element.classList.remove("alerted");
        }, 600);
      }, 1800);
      return;
    }
  }, 100);
}

export default Alert;
