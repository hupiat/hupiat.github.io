export const redirect = (uri: string): void => {
    window.location.href = "https://www." + uri;
}

export const getStorageKey = (key: string): string => `@HugoPiatLilloPortfolio:${key}`;