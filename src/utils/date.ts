export function formatDate(date: string | Date, locale: string = 'en'): string {
    const d = typeof date === 'string' ? new Date(date) : date;

    const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'long',
    };

    return new Intl.DateTimeFormat(locale, options).format(d);
}

export function formatDateRange(
    startDate: string | Date,
    endDate: string | Date | 'present',
    locale: string = 'en'
): string {
    const start = formatDate(startDate, locale);

    if (endDate === 'present') {
        return locale === 'ru'
            ? `${start} — Настоящее время`
            : `${start} — Present`;
    }

    const end = formatDate(endDate, locale);
    return `${start} — ${end}`;
}
