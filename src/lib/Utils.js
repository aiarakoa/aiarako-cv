function formatDateTextualMonth(year, month, localeCode)
{
    const date = new Date(Date.UTC(parseInt(year, 10), parseInt(month, 10) - 1, 1));
    return new Intl.DateTimeFormat(localeCode,
        {
            year: "numeric",
            month: "long"
        }).format(date);
}

function formatDateNumericMonth(year, month)
{
    return month + "/" + year;
}

export function formatYearMonth(yearAndMonthString, yearMonthSeparator, textualMonth, localeCode)
{
    const [year, month] = yearAndMonthString.split(yearMonthSeparator);
    return textualMonth ? formatDateTextualMonth(year, month, localeCode) : formatDateNumericMonth(year, month);
}