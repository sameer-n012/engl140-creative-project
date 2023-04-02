const journals = [
	{
		_id: 0,
		filename: 'j0.md',
		title: `My Visit to Oran`,
		date: 'February 23, 1941',
		featuredBody: `I arrived in the small city of Oran, in Algeria several 
            weeks ago, only to despair at the drastic difference from my home 
            in Paris. Here, the air felt constantly hot and dry, making the 
            town stale and lifeless. There are few gardens or greenery, and 
            nothing much ever happens of interest. Moreover, the air of this 
            town feels constantly suffocating and there is none of the 
            liveliness that accompanies`,
	},
	{
		_id: 1,
		filename: 'j1.md',
		title: `The Onset of the Plague`,
		date: 'March 19, 1941',
		featuredBody: `Yeahhhhh featured body Yeahhhhh featured body Yeahhhhh 
        featured body Yeahhhhh featured body Yeahhhhh featured body Yeahhhhh 
        featured body Yeahhhhh featured body Yeahhhhh featured body Yeahhhhh 
        featured body Yeahhhhh featured body Yeahhhhh featured body Yeahhhhh 
        featured body Yeahhhhh featured body Yeahhhhh featured body Yeahhhhh 
        featured body.`,
	},
	{
		_id: 2,
		filename: 'j2.md',
		title: `A 3rd journal entry`,
		date: 'Some Date',
		featuredBody: `Yeahhhhh featured body Yeahhhhh featured body Yeahhhhh 
        featured body Yeahhhhh featured body Yeahhhhh featured body Yeahhhhh 
        featured body Yeahhhhh featured body Yeahhhhh featured body Yeahhhhh 
        featured body Yeahhhhh featured body Yeahhhhh featured body Yeahhhhh 
        featured body Yeahhhhh featured body Yeahhhhh featured body Yeahhhhh 
        featured body.`,
	},
	{
		_id: 3,
		filename: 'j2.md',
		title: `A 3rd journal entry`,
		date: 'Some Date',
		featuredBody: `Yeahhhhh featured body Yeahhhhh featured body Yeahhhhh 
        featured body Yeahhhhh featured body Yeahhhhh featured body Yeahhhhh 
        featured body Yeahhhhh featured body Yeahhhhh featured body Yeahhhhh 
        featured body Yeahhhhh featured body Yeahhhhh featured body Yeahhhhh 
        featured body Yeahhhhh featured body Yeahhhhh featured body Yeahhhhh 
        featured body.`,
	},
	{
		_id: 4,
		filename: 'j2.md',
		title: `A 3rd journal entry`,
		date: 'Some Date',
		featuredBody: `Yeahhhhh featured body Yeahhhhh featured body Yeahhhhh 
        featured body Yeahhhhh featured body Yeahhhhh featured body Yeahhhhh 
        featured body Yeahhhhh featured body Yeahhhhh featured body Yeahhhhh 
        featured body Yeahhhhh featured body Yeahhhhh featured body Yeahhhhh 
        featured body Yeahhhhh featured body Yeahhhhh featured body Yeahhhhh 
        featured body.`,
	},
	{
		_id: 5,
		filename: 'j2.md',
		title: `A 3rd journal entry`,
		date: 'Some Date',
		featuredBody: `Yeahhhhh featured body Yeahhhhh featured body Yeahhhhh 
        featured body Yeahhhhh featured body Yeahhhhh featured body Yeahhhhh 
        featured body Yeahhhhh featured body Yeahhhhh featured body Yeahhhhh 
        featured body Yeahhhhh featured body Yeahhhhh featured body Yeahhhhh 
        featured body Yeahhhhh featured body Yeahhhhh featured body Yeahhhhh 
        featured body.`,
	},
];

export const getJournals = () => {
	return journals;
};

export const getJournalById = (id) => {
	console.log(id);
	return journals.find((j) => j._id === parseInt(id));
};
