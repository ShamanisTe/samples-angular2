export class ConfigApp {
  apikey: string;
  baseurl: string;
}

// set some config to test ConfigApp
export let prodConfig = {
  apikey:  'api-prod',
  baseurl: "http://www.website.com"
};
export let devConfig = {
  apikey:  'api-dev',
  baseurl: "http://123.456.789.12"
};