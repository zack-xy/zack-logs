export interface PackageJSON {
  version: string
  [key: string]: unknown
}

export interface LogsOptions {
  name?: string
  info?: string
}
