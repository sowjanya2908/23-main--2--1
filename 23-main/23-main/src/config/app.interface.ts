export interface AppConfigInterface {
  app: {
    port: number,
    base_url: string,
    api_version: string,
  },
  db: {
    mongo_connection_string: string,
  },
  
}