const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
const userTheme = localStorage.getItem("theme");
const themeSet = () =>{
  console.log(userTheme ==="dark" || (!userTheme && systemTheme));
  if(userTheme ==="dark" || (!userTheme && systemTheme)){
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
    return;
  }
}
themeSet();

const colorSchemeQueryList = window.matchMedia('(prefers-color-scheme: dark)');

const setColorScheme = e => {
  if (e.matches) {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
}
  
setColorScheme(colorSchemeQueryList);
colorSchemeQueryList.addEventListener('change', setColorScheme);