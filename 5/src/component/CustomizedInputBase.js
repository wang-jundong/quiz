import SearchIcon from "@mui/icons-material/Search";
import { Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Paper from "@mui/material/Paper";
import * as React from "react";
import { fetchWords } from "../api/call";

export default function CustomizedInputBase() {
	const [selectedIndex, setSelectedIndex] = React.useState(1);
	const [isVisibleDropdown, setIsVisibleDropdown] = React.useState(false);
	const [word, setWord] = React.useState("");
	const [options, setOptions] = React.useState([]);

	const handleListItemClick = (value) => {
		setWord(value);
		setIsVisibleDropdown(false);
	};

	const handleInputChange = (value) => {
		console.log("---handleInputChange---", value);
		if (!value) {
			setWord("");
			setIsVisibleDropdown(false);
			return;
		}

		setWord(value);
		fetchWords(value)
			.then((response) => {
				setOptions(response.data);
				if (response.data) {
					setIsVisibleDropdown(true);
				} else {
					setIsVisibleDropdown(false);
				}
			})
			.catch((error) => console.log(error));
	};

	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				marginTop: "24px",
			}}
		>
			<Typography
				variant="h2"
				component="h2"
				sx={{ marginBottom: "8px" }}
			>
				Search Word..
			</Typography>
			<Paper
				sx={{
					p: "2px 4px",
					display: "flex",
					alignItems: "center",
					width: 400,
				}}
			>
				<InputBase
					sx={{ ml: 1, flex: 1 }}
					placeholder="Please input word.."
					inputProps={{ "aria-label": "search google maps" }}
					value={word}
					onChange={(event) => handleInputChange(event.target.value)}
				/>
				<IconButton
					type="submit"
					sx={{ p: "10px" }}
					aria-label="search"
				>
					<SearchIcon />
				</IconButton>
			</Paper>
			{isVisibleDropdown && (
				<Paper
					elevation={12}
					sx={{
						marginTop: 1,
						width: 400,
					}}
				>
					<List
						component="nav"
						aria-label="secondary mailbox folder"
						sx={{ maxHeight: 380, overflow: "auto" }}
					>
						{options.map((one) => (
							<ListItemButton
								onClick={() => handleListItemClick(one.word)}
							>
								<ListItemText primary={one.word} />
							</ListItemButton>
						))}
					</List>
				</Paper>
			)}
		</div>
	);
}
