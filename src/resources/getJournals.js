const journals = [
	{
		_id: 0,
		filename: 'j0.md',
		title: `A Visit to Oran`,
		date: 'January 23, 1941',
	},
	{
		_id: 1,
		filename: 'j1.md',
		title: `Rats in the City`,
		date: 'February 19, 1941',
	},
	{
		_id: 2,
		filename: 'j2.md',
		title: `Speaking to Dr. Rieux`,
		date: 'February 20, 1941',
	},
	{
		_id: 3,
		filename: 'j3.md',
		title: `The Passing of M. Michel`,
		date: 'March 11, 1941',
	},
	{
		_id: 4,
		filename: 'j4.md',
		title: `Sickness in the City`,
		date: 'March 20, 1941',
	},
	{
		_id: 5,
		filename: 'j5.md',
		title: `The Onset of a Plague`,
		date: 'April 3, 1941',
	},
    {
		_id: 6,
		filename: 'j6.md',
		title: `Leaving Oran`,
		date: 'April 28, 1941',
	},
    {
		_id: 7,
		filename: 'j7.md',
		title: `Speaking to Cottard`,
		date: 'May 25, 1941',
	},
    {
		_id: 8,
		filename: 'j8.md',
		title: `Leaving with Gonzales`,
		date: 'June 17, 1941',
	},
    {
		_id: 9,
		filename: 'j9.md',
		title: `Dr. Rieux's Plight`,
		date: 'June 19, 1941',
	},
    {
		_id: 10,
		filename: 'j10.md',
		title: `Riots in the City`,
		date: 'August 2, 1941',
	},
    {
		_id: 11,
		filename: 'j11.md',
		title: `Staying in Oran to Help Dr. Rieux`,
		date: 'August 12, 1941',
	},
    {
		_id: 12,
		filename: 'j12.md',
		title: `Beginning of Winter`,
		date: 'October 30, 1941',
	},
    {
		_id: 13,
		filename: 'j13.md',
		title: `Tarrou's Death`,
		date: 'December 30, 1941',
	},
    {
		_id: 14,
		filename: 'j14.md',
		title: `The New Year`,
		date: 'January 4, 1942',
	},
];

export const getJournals = () => {
	return journals;
};

export const getJournalById = (id) => {
	console.log(id);
	return journals.find((j) => j._id === parseInt(id));
};
