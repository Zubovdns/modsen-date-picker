import axios from 'axios';

export interface Holiday {
	id: string;
	startDate: string;
	endDate: string;
	type: string;
	name: {
		language: string;
		text: string;
	}[];
	nationwide: boolean;
}

export const fetchHolidays = async (date: Date): Promise<Holiday[]> => {
	const response = await axios.get<Holiday[]>(
		'https://openholidaysapi.org/PublicHolidays',
		{
			params: {
				countryIsoCode: 'BY',
				languageIsoCode: 'RU',
				validFrom: `${date.getFullYear()}-01-01`,
				validTo: `${date.getFullYear()}-12-31`,
			},
			headers: {
				accept: 'text/json',
			},
		}
	);

	return response.data;
};
