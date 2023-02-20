enum LocalStorageItem {
	IsLoggedIn = 'IsLoggedIn',
}

export const logInLocalstorage = () => localStorage.setItem(LocalStorageItem.IsLoggedIn, 'true');

export const logOutLocalStorage = () => localStorage.removeItem(LocalStorageItem.IsLoggedIn);

export const checkIsLoggedIn = () => !!localStorage.getItem(LocalStorageItem.IsLoggedIn);
