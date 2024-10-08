import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';

export const locales = ['en', 'zh'];
export const defaultLocale = 'en';

export default getRequestConfig(async ({locale}) => {
  if (['en', 'zh'].includes(locale)) {
    return {
      messages: (await import(`./messages/${locale}.json`)).default
    };
  }
 
  notFound();
});