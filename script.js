var btn_stock   =document.getElementById('btn_stock'),
    btn_factur  =document.getElementById('btn_factur'),
    btn_user    =document.getElementById('btn_user'),
    btn_static  =document.getElementById('btn_static'),
    stock       =document.getElementById('stock'),
    factur      =document.getElementById('factur'),
    user        =document.getElementById('user'),
    static      =document.getElementById('static');
// *************upbutton confic*********************************************
// change bg of button on click and z-index budy
btn_stock.addEventListener('click',()=>{
btn_stock.classList.add('active');
btn_factur.classList.remove('active');
btn_user.classList.remove('active');
btn_static.classList.remove('active');
stock.classList.remove('display');
factur.classList.add('display');
user.classList.add('display');
static.classList.add('display');
});
btn_factur.addEventListener('click',()=>{
btn_factur.classList.add('active');
btn_user.classList.remove('active');
btn_static.classList.remove('active');
btn_stock.classList.remove('active');
factur.classList.remove('display');
user.classList.add('display');
static.classList.add('display');
stock.classList.add('display');
});
btn_user.addEventListener('click',()=>{
btn_user.classList.add('active');
btn_factur.classList.remove('active');
btn_static.classList.remove('active');
btn_stock.classList.remove('active');
user.classList.remove('display');
factur.classList.add('display');
stock.classList.add('display');
static.classList.add('display');
});
btn_static.addEventListener('click',()=>{
btn_static.classList.add('active');
btn_user.classList.remove('active');
btn_factur.classList.remove('active');
btn_stock.classList.remove('active');
static.classList.remove('display');
factur.classList.add('display');
user.classList.add('display');
stock.classList.add('display');
});
//**********************stock page confic*********************************
var categorie  =document.getElementById('categorie'),
    title      =document.getElementById('title'),
    count      =document.getElementById('count'),
    prix       =document.getElementById('prix'),
    add_instock=document.getElementById('add_instock');
    let data;
    if(localStorage.product !=null){
        data=JSON.parse(localStorage.product)
    }else{
        data = [];
    };
    
add_instock.addEventListener('click',()=>{
    let newPrudact={
        categorie:categorie.value,
        title: title.value,
        count: count.value,
        prix:  prix.value
    }
    data.push(newPrudact)
    localStorage.setItem('product', JSON.stringify(data))
    console.log(data)
});

    //**********************facture page confic*********************************
//**********************user page confic*********************************
//**********************static page confic*********************************