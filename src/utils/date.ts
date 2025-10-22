export function formatDate(date: string | Date, locale: string = 'en'): string {
    const d = typeof date === 'string' ? new Date(date) : date;

    const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'long',
    };

    return new Intl.DateTimeFormat(locale, options).format(d);
}
