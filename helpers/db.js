import localforage from "localforage";

const Storage = localforage;
Storage.config({
	driver: localforage.LOCALSTORAGE,
	storeName: "Spread Pro",
	description: "Spread Properties",
});

export default Storage;
