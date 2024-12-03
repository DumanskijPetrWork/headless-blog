const categoriesColors = [
	['Product Reviews', 'orange'],
	['Opinions', 'green'],
	['Travel Guides', 'purple'],
];

const categoryColorMap = new Map(categoriesColors);

const getCategoryColor = (category) => categoryColorMap.get(category);

export default getCategoryColor;
