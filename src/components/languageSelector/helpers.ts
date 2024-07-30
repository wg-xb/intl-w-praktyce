export function languageName(locale: string, countryCode: string) {
  return new Intl.DisplayNames([locale], {
    type: 'language',
  }).of(countryCode);
}
