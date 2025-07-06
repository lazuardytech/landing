import { clsx } from "clsx";
import Parser from "rss-parser";
import { twMerge } from "tailwind-merge";
import { CompanyData } from "./config";
import { put } from "@vercel/blob";

export function cn(...inputs) {
	return twMerge(clsx(inputs));
}

export function isProductionMode() {
	return process.env.NODE_ENV === "production";
}

export function shuffleArray(array) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}

	return array;
}

export function getDateFromTimestamp(
	timestamp,
	format = {
		day: "2-digit",
		month: "short",
		year: "numeric",
	},
) {
	return new Date(timestamp * 1000)
		.toLocaleDateString("en-US", format)
		.replace(/ /g, " ");
}

export async function getHtmlContent(path, legalUpdateDate = "") {
	try {
		const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}${path}`);

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		let content = await response.text();

		const placeholders = {
			COMPANY_NAME: CompanyData.tradeName,
			COMPANY_LEGAL_NAME: CompanyData.legalName,
			COMPANY_NUMBER: CompanyData.number,
			COMPANY_VAT: CompanyData.vat,
			COMPANY_SIZE: CompanyData.size,
			COMPANY_TYPE: CompanyData.type,
			COMPANY_SECTOR: CompanyData.sector,
			COMPANY_YEAR_FOUNDED: CompanyData.yearFounded,
			COMPANY_DESCRIPTION: CompanyData.description,
			COMPANY_COPYRIGHT: CompanyData.copyright.label,

			COMPANY_ADDRESS: CompanyData.address.label,
			COMPANY_ADDRESS_LINK: CompanyData.address.link,

			COMPANY_EMAIL_ADDRESS: CompanyData.email.label,
			COMPANY_EMAIL_ADDRESS_LINK: CompanyData.email.link,

			COMPANY_PHONE_NUMBER: CompanyData.phone.label,
			COMPANY_PHONE_NUMBER_LINK: CompanyData.phone.link,

			LEGAL_UPDATE_DATE: legalUpdateDate,
		};

		for (const [placeholder, value] of Object.entries(placeholders)) {
			const regex = new RegExp(`{{${placeholder}}}`, "g");
			content = content.replace(regex, value);
		}

		return content;
	} catch (error) {
		console.error(`Error fetching file ${path}:`, error);
		return "";
	}
}

export function getTypingAnimationSequence(words, delay = 4000) {
	const sequence = [];
	for (const word of words) {
		sequence.push(word, delay);
	}
	return sequence;
}

export async function fetchRss(url) {
	const parser = new Parser();

	// set file name by stripping ": . / @" from url and format to lowercase
	const fileName = url.replace(/[:.\/@]/g, "").toLowerCase();

	// Create a deterministic blob filename based on the RSS url
	const blobName = `articles/rss_${fileName}.xml`;

	// Try to fetch from Vercel Blob first
	let rssXml;
	let blobUrl = `https://${process.env.VERCEL_BLOB_URL || "blob.vercel-storage.com"}/${blobName}`;
	let blobExists = false;

	try {
		console.log("\nFetching RSS from cache...");
		const blobResp = await fetch(blobUrl);
		if (blobResp.ok) {
			console.log("\nRSS cache exists!");
			rssXml = await blobResp.text();
			blobExists = true;
		}
	} catch (e) {
		// Blob does not exist or fetch failed, will fetch from source
	}

	if (!blobExists) {
		// Download RSS from source
		console.log("\nRSS cache does not exist!");
		console.log("\nFetching RSS from source...");
		const resp = await fetch(url);
		if (!resp.ok) {
			throw new Error(`Failed to fetch RSS feed: ${resp.status}`);
		}
		rssXml = await resp.text();

		// Save to Vercel Blob
		try {
			const { url: savedUrl } = await put(blobName, rssXml, {
				access: "public",
				allowOverwrite: true,
			});
			blobUrl = savedUrl;
		} catch (e) {
			console.error("Failed to save RSS to Vercel Blob:", e);
		}
	}

	// Parse the RSS XML
	return await parser.parseString(rssXml);
}

export function generateRandomKey() {
	// convert number to base-36 (letters + numbers) and extract 6 chars.
	return Math.random().toString(36).substring(2, 8);
}
