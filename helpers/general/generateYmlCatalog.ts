// // // import fs from 'fs'
// import xml2js from 'xml2js'
// import axios, { AxiosResponse} from 'axios'
// import { gql } from '@apollo/client'
// import apolloClient from 'apolloClient'

// const graphqlEndpoint = 'http://localhost:1337/graphql'

// const getProgramsData = async (): Promise<Product[]> => {
//     const query = gql`
//     query GetStaticPropsPagePrograms($locale: String) {
//         categories(locale: $locale) {
//           type
//           slug
//           label
//           description
//         }
//         studyFields(locale: $locale) {
//           type
//           slug
//           title
//         }
//         programs(locale: $locale) {
//           title
//           shortDescription
//           slug
//           study_field {
//             slug
//             type
//             label
//             title
//           }
//           category {
//             slug
//             type
//             label
//           }
//           timenprice {
//             studyMonthsDuration
//           }
//         }
//       }
//     `
//     try {
//       const { data } = await apolloClient.query({ query })
//       return data.programs
//     } catch (error) {
//       console.error('Failed to fetch programs data:', error)
//       return []
//     }
//   }

// interface Product {
//     name: string
//     category: string
//     url: string
//     price: string
//     categoryId: string
//     picture: string
//     description: string
// }

// // const products: Promise<Product[]> =  getProgramsData()

// // async function getProducts(): Promise<Product[]> {
// //     try {
        
// //         const response: AxiosResponse = await axios.post(graphqlEndpoint, {
// //             method: 'POST',
// //             headers: {
// //                 'Content-Type': 'application/json',
// //                 'Accept': 'application/json',
// //             },
// //             body: JSON.stringify({ query })
// //         })
// //         console.log('response', response)
// //         const products: Product[] = response.data
// //         console.log('products', products)
// //         return products
// //     } catch (e) {
// //         console.error(e)
// //         return []
// //     }
// // }

// async function generateYmlCatalog() {

// const products: Product[] = await getProgramsData()

// const builder = new xml2js.Builder();

// const ymlCatalog = {
//     yml_catalog: {
//         $: {
//             date: new Date().toISOString()
//         },
//         shop: [
//             {
//                 name: ["Your Shop Name"],
//                 company: ["Your Company Name"],
//                 url: [process.env.NEXT_PUBLIC_ROUTE_FRONT_ROOT],
//                 currencies: [
//                     {
//                         currency: [
//                             {
//                                 $: {
//                                     id: 'RUR',
//                                     rate: '1'
//                                 }
//                             }
//                         ]
//                     }
//                 ],
//                 categories: [
//                     {
//                         category: products.map((product, index) => {
//                             return {
//                                 $: {
//                                     id: index + 1
//                                 },
//                                 _: product.category
//                             }
//                         })
//                     }
//                 ],
//                 offers: [
//                     {
//                         offer: products.map((product, index) => {
//                             return {
//                                 $: {
//                                     id: index + 1
//                                 },
//                                 url: [`${process.env.NEXT_PUBLIC_ROUTE_FRONT_ROOT}/${product.url}`],
//                                 price: [product.price],
//                                 currencyId: ['RUR'],
//                                 categoryId: [product.categoryId],
//                                 picture: [product.picture],
//                                 name: [product.name],
//                                 description: [product.description]
//                             }
//                         })
//                     }
//                 ]
//             }
//         ]
//     }
// }

// const xml = builder.buildObject(ymlCatalog)

// // fs.writeFile('yandex_feed.xml', xml, function (err: any) {
// //     if (err) {
// //         console.error('Something went wrong', err);
// //     } else {
// //         console.log('File created successfully');
// //     }
// // })
// }


// export default generateYmlCatalog

export default {}