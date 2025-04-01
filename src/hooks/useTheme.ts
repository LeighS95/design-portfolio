export function useTheme() {
    let theme = "";

    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
    ).matches;

    if (savedTheme) {
        setTheme(savedTheme);
    } else {
        setTheme(prefersDark ? "dark" : "light");
    }

    function setTheme(value: string) {
        theme = value;
        localStorage.setItem("theme", value);

        if (value == "dark") {
            document.documentElement.classList.add(value);
        }
    }

    function toggleTheme() {
        document.documentElement.classList.toggle("dark");
        theme = theme == "dark" ? "light" : "dark";
        localStorage.setItem("theme", theme);
    }

    window.addEventListener("storage", (e) => {
        if (e.key == "theme") {
            return theme || localStorage.getItem("theme");
        }
    });

    return {
        theme,
        toggleTheme,
    }
}