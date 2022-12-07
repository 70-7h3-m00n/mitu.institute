interface Fields {
  program?: string
}
export type AddFields = (Partial<Record<string, string>> & Fields) | null
