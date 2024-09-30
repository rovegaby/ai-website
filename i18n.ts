import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';
 
export default getRequestConfig(async ({locale}) => {
  if (['en', 'zh'].includes(locale)) {
    return {
      messages: (await import(`./messages/${locale}.json`)).default
    };
  }
 
  notFound();
});