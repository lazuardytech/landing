import { getDateFromTimestamp, getHtmlContent } from "@/lib/utils";

const legals = [
	{
		id: 1,
		uuid: "privacy-policy",
		type: "appendix 1",
		headline: "Privacy Policy",
		created_at: 1737738000,
		updated_at: 1737738000,
	},
	{
		id: 2,
		uuid: "terms-of-service",
		type: "appendix 2",
		headline: "Terms of Service",
		created_at: 1737738000,
		updated_at: 1737738000,
	},
].sort((a, b) => a.id - b.id);

export async function getLegals() {
	return legals.map((item) => ({
		...item,
		date: getDateFromTimestamp(item.updated_at),
	}));
}

export async function getLegalByUuid(uuid) {
	const legal = (await getLegals()).find((item) => item.uuid === uuid) ?? null;
	if (legal) {
		legal.content = await getHtmlContent(
			`/templates/legal/${uuid}.html`,
			legal.date,
		);
	}

	return legal;
}

export async function getLegalLatestUpdateDate() {
	return getDateFromTimestamp(
		Math.max(...legals.map((item) => item.updated_at)),
	);
}
