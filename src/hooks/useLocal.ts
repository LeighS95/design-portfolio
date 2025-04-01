export const useLocal = (key: string) => {
    if (!window) return;

    const value = localStorage.getItem(key);

    const setLocal = (value: string) => {
        localStorage.setItem(key, value);
    }

    const removeLocal = () => {
        localStorage.removeItem(key);
    }

    return {
        value,
        setLocal,
        removeLocal,
    }
}