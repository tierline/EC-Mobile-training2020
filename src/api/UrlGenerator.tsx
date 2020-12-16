import { ip } from '../settings/properties'

export const UrlGenerator = (mappingUrl: string, requestUrl: string) => {
  return `http://${ip}:8085` + mappingUrl + requestUrl
}
