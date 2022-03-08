import axios from "axios";

export const fetchWords = (word) => {
	return axios.get(`https://api.datamuse.com/sug`, {
		params: {
			s: word,
		},
	});
};
