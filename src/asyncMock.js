import Item from "./Components/Item/Item"

const products = [{id: '0',
                   name: 'Pantalon Engomado',
                   price: 5000,
                   category: 'Pantalones',
                   img:'https://http2.mlstatic.com/D_NQ_NP_904451-MLA50702886062_072022-O.webp',
                   stock: 10,
                   description:'Pantalon engomado entallado'
                },
                {id: '1',
                   name: 'Poleron Mujer Largo',
                   price: 3500,
                   category: 'Sweaters',
                   img:'https://http2.mlstatic.com/D_NQ_NP_827428-MLA50801544068_072022-O.webp',
                   stock: 7,
                   description:'Poleron Mujer'
                },
                {id: '2',
                   name: 'Camisa Oversized',
                   price: 4500,
                   category: 'Camisas',
                   img:'https://http2.mlstatic.com/D_NQ_NP_917517-MLA46820861637_072021-O.webp',
                   stock: 3,
                   description:'Camisa Oversized'
                }
            ]

           export const getProducts =()=> {
                return new Promise ((resolve) =>{
                    setTimeout(() =>{
                        resolve(products)
                    },2000)


                })
            }

            export const getProductByCategory=(CategoryId)=> {
                return new Promise ((resolve) =>{
                    setTimeout(() =>{
                        resolve(products.filter(prod => prod.category == CategoryId))
                    },2000)
                })

            }

            export const getItem=(id)=>{
                return new Promise((resolve)=>{
                    setTimeout(()=>{
                        resolve(products[id])
                    },2000)
                })

            }