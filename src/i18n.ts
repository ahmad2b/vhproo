import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";
import { Locale } from "./types";

export const locales: Locale[] = ["en", "fr"];

export default getRequestConfig(async ({ locale }) => {
	if (!locales.includes(locale as any)) notFound();

	// return {
	// 	messages: (await import(`../messages/${locale}.json`)).default,
	// };

	return {
		locale,
	};
});
