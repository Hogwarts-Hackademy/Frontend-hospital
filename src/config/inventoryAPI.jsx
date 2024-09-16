const BaseURL = "http://localhost:5000/api/inventory";

const inventoryAPI = {
	// Pharmaceutical Routes
	ADD_PHARMACEUTICAL_ITEM: `${BaseURL}/pharmaceuticals/add`,
	UPDATE_PHARMACEUTICAL_ITEM: (id) =>
		`${BaseURL}/pharmaceuticals/update/${id}`,
	DELETE_PHARMACEUTICAL_ITEM: (id) =>
		`${BaseURL}/pharmaceuticals/delete/${id}`,
	GET_ALL_PHARMACEUTICAL_ITEMS: `${BaseURL}/pharmaceuticals/all`,
	SEARCH_PHARMACEUTICAL_ITEMS: `${BaseURL}/pharmaceuticals/search`,

	// Consumable Routes
	ADD_CONSUMABLE_ITEM: `${BaseURL}/consumables/add`,
	UPDATE_CONSUMABLE_ITEM: (id) => `${BaseURL}/consumables/update/${id}`,
	DELETE_CONSUMABLE_ITEM: (id) => `${BaseURL}/consumables/delete/${id}`,
	GET_ALL_CONSUMABLE_ITEMS: `${BaseURL}/consumables/all`,
	SEARCH_CONSUMABLE_ITEMS: `${BaseURL}/consumables/search`,
};

export default inventoryAPI;
