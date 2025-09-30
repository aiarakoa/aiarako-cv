function formatDateTextualMonth(year, month, localeCode) {
  const date = new Date(Date.UTC(parseInt(year, 10), parseInt(month, 10) - 1, 1));
  return new Intl.DateTimeFormat(localeCode, {
    year: 'numeric',
    month: 'long',
  }).format(date);
}

function formatDateNumericMonth(year, month) {
  return month + '/' + year;
}
/*
function toggleNavLayout(topNav, reCenterSlider)
{
  console.log(`toggleNavLayout -- top nav ${topNav.className}, re-center slider ${reCenterSlider}`);
  if(topNav.classList.contains("nav-sliding-layout"))
  {
    topNav.classList.replace("nav-sliding-layout", "nav-dropdown-layout");
  }
  else
  {
    topNav.classList.replace("nav-dropdown-layout", "nav-sliding-layout");
    let ariaCurrent = topNav.querySelector('a[aria-current="page"]');
    ariaCurrent.parentElement.scrollIntoView({ behavior: 'instant', inline: 'center', block: 'nearest' });
    if(reCenterSlider)
    {
      ariaCurrent.parentElement.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
  }
}
*/
export function formatYearMonth(yearAndMonthString, yearMonthSeparator, textualMonth, localeCode) {
  const [year, month] = yearAndMonthString.split(yearMonthSeparator);
  return textualMonth
    ? formatDateTextualMonth(year, month, localeCode)
    : formatDateNumericMonth(year, month);
}
