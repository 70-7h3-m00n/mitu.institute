type TypeLeadProps = {}

const lead = () => {
  window.dataLayer.push({
    event: 'lead',
    ecommerce: {
      add: {
        actionField: {
          id: 'actionFieldIdTest'
        },
        products: [
          {
            id: 'productsIdTest',
            name: 'productsNameTest'
          }
        ]
      }
    }
  })
}

export default lead
