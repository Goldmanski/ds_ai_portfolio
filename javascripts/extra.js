function setupLanguageSwitcher() {
    const languageOption = document.querySelector(".md-header__option .md-select");

    if (!languageOption) {
        return;
    }

    const menu = languageOption.querySelector(".md-select__inner");

    if (!menu) {
        return;
    }

    if (languageOption.querySelector(".custom-language-switcher")) {
        return;
    }

    const switcher = document.createElement("div");
    switcher.className = "custom-language-switcher";

    const flags = {
        English: `
            <svg viewBox="0 0 60 40" aria-hidden="true">
                <rect width="60" height="40" fill="#012169"/>
                <path d="M0 0 L60 40 M60 0 L0 40" stroke="#fff" stroke-width="10"/>
                <path d="M0 0 L60 40 M60 0 L0 40" stroke="#C8102E" stroke-width="4"/>
                <path d="M30 0 V40 M0 20 H60" stroke="#fff" stroke-width="16"/>
                <path d="M30 0 V40 M0 20 H60" stroke="#C8102E" stroke-width="9"/>
            </svg>
        `,
        Polski: `
            <svg viewBox="0 0 60 40" aria-hidden="true">
                <rect width="60" height="20" fill="#fff"/>
                <rect y="20" width="60" height="20" fill="#dc143c"/>
            </svg>
        `,
        Español: `
            <svg viewBox="0 0 60 40" aria-hidden="true">
                <rect width="60" height="40" fill="#aa151b"/>
                <rect y="10" width="60" height="20" fill="#f1bf00"/>
            </svg>
        `
    };

    const links = menu.querySelectorAll("a");

    links.forEach(link => {
        const text = link.textContent.trim();

        if (!flags[text]) {
            return;
        }

        const languageLink = document.createElement("a");

        languageLink.className = "language-link";
        languageLink.href = link.href;
        languageLink.setAttribute("aria-label", text);
        languageLink.title = text;

        languageLink.innerHTML = flags[text];

        switcher.appendChild(languageLink);
    });

    languageOption.innerHTML = "";
    languageOption.appendChild(switcher);
}

document.addEventListener("DOMContentLoaded", () => {
    setupLanguageSwitcher();
    updateSearchLanguage();
});

window.addEventListener("load", () => {
    updateSearchLanguage();
});

if (typeof document$ !== "undefined") {
    document$.subscribe(() => {
        setupLanguageSwitcher();

        setTimeout(() => {
            updateSearchLanguage();
        }, 100);
    });
}

function updateSearchLanguage() {
    const searchInput = document.querySelector(
        ".md-search__input"
    );

    if (!searchInput) {
        return;
    }

    const path = window.location.pathname;

    if (path.includes("/pl/")) {
        searchInput.placeholder = "Szukaj";
        searchInput.setAttribute("aria-label", "Szukaj");
    } else if (path.includes("/es/")) {
        searchInput.placeholder = "Búsqueda";
        searchInput.setAttribute("aria-label", "Búsqueda");
    } else {
        searchInput.placeholder = "Search";
        searchInput.setAttribute("aria-label", "Search");
    }
}