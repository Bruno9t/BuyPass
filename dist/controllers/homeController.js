let banners = [
    '/img/banner1.svg',
    '/img/banner2.svg',
    '/img/banner3.svg',
    '/img/banner4.svg',
    '/img/banner5.svg',
]


let servicos = [
    {
        image:'/img/serv1.svg',
        desc:`Realizamos a compra e a escolha 
    dos produtos com melhores preços`
    },
    {
        image:'/img/serv2.svg',
        desc:'Pagamento via app'
    },
    {
        image:'/img/serv3.svg',
        desc:'Entrega no conforto da sua casa'
    },  

]


module.exports={
    index(req,res){
        res.render('index',
        {
            listaBanners:banners,
            listaServicos:servicos
        })
    }
}