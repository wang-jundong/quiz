fudge = 1;
let chocolate;
if (recipe === "SPANISH") {
	fudge = SPANISH_FUDGE;
} else if (recipe === "FRENCH") {
	fudge = FRENCH_FUDGE;
	chocolate = 7;
} else if (recipe === "ENGLISH") {
	fudge = ENGLISH_FUDGE;
}

amt = base * fudge;
sugar = 2 * bottom(amt) + top(amt) * 1.17;
