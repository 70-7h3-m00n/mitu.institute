type TypeHandleGetStaticPaths = {
  paths: {
    params: {
      category: string
      studyField?: string
      program?: string
    }
  }[]
  fallback: boolean | 'blocking'
}

export default TypeHandleGetStaticPaths
