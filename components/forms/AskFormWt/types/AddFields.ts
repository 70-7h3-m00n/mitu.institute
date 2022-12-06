interface Fields {
  programTitle?: string
}
export type AddFields = (Partial<Record<string, string>> & Fields) | null
