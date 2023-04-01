const journals = [
	{
		_id: 0,
		filename: 'j0.md',
		title: `A new journal entry`,
		date: 'Some Date',
		featuredBody: `Yeahhhhh featured body Yeahhhhh featured body Yeahhhhh 
        featured body Yeahhhhh featured body Yeahhhhh featured body Yeahhhhh 
        featured body Yeahhhhh featured body Yeahhhhh featured body Yeahhhhh 
        featured body Yeahhhhh featured body Yeahhhhh featured body Yeahhhhh 
        featured body Yeahhhhh featured body Yeahhhhh featured body Yeahhhhh 
        featured body.`,
	},
    {
		_id: 1,
		filename: 'j1.md',
		title: `A 2nd journal entry`,
		date: 'Some Date',
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
];

export const getJournals = () => {
	return journals;
};

export const getJournalById = (id) => {
    console.log(id);
    return journals.find(j => (j._id) == id);
}
