var btnBasket = document.getElementById('basket-btn');
var goodsListSection = document.getElementById('goods-list-section');

const API_URL = '/catalogData.json';
const goods = [{
        title: 'Shirt',
        desc: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
        price: 150,
    },
    {
        title: 'Socks',
        desc: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
        price: 50
    },
    {
        title: 'Jacket',
        desc: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
        price: 350
    },
    {
        title: 'Shoes',
        desc: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
        price: 250
    },
    {
        title: 'Shirt',
        desc: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
        price: 150,
    },
    {
        title: 'Socks',
        desc: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
        price: 50
    },
    {
        title: 'Jacket',
        desc: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
        price: 350
    },
    {
        title: 'Shoes',
        desc: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
        price: 250
    },
    {
        title: 'Shoes',
        desc: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
        price: 250
    },
];

const renderGoodsItem = ({ title = 'Товар', desc = 'Описание', price = 'Цена' }) => {
    return `
    <div class="goods-item">
      <h3>${title}</h3>
      <h1>${desc}</h1>
      <p>$${price}</p>
      <button class="button" type="button" onclick='cartLS.add(<?php echo json_encode($item, JSON_UNESCAPED_UNICODE); ?>)'>Добавить в корзину</button>
    </div>
  `;
};

const renderGoodsList = (list) => {
    let goodsList = list.map(item => renderGoodsItem(item));
    document.querySelector('.goods-list').innerHTML = goodsList.join('');
}

//Creating class for the product
class GoodsItem {
    constructor(title, desc, price) {
        this.title = title;
        this.desc = desc;
        this.price = price;
    }
    render() {
        return ` 
      <div class="goods-item">
        <h3>${this.title}</h3>
        <p>${this.desc}</p>
        <p>${this.price}</p>
      </div>
      `;
    }
}

//Creating the class for the GoodsList
class GoodsList {
    constructor() {
            this.goods = [];
        }
        //Method to fill the goods
    fetchGoods() {
            this.goods = [{
                    title: 'Shirt',
                    desc: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
                    price: 150,
                },
                {
                    title: 'Socks',
                    desc: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
                    price: 50
                },
                {
                    title: 'Jacket',
                    desc: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
                    price: 350
                },
                {
                    title: 'Shoes',
                    desc: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
                    price: 250
                },
                {
                    title: 'Shirt',
                    desc: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
                    price: 150,
                },
                {
                    title: 'Socks',
                    desc: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
                    price: 50
                },
                {
                    title: 'Jacket',
                    desc: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
                    price: 350
                },
                {
                    title: 'Shoes',
                    desc: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
                    price: 250
                },
                {
                    title: 'Shoes',
                    desc: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
                    price: 250
                },
            ];
        }
        // Метод вывод списка товаров. Для каждого элемента массива goods будем создавать экземпляр
        // класса GoodsItem и запрашивать его разметку
    render() {
        let listHtml = '';
        this.goods.forEach(good => {
            const goodItem = new GoodsItem(good.title, good.price);
            listHtml += goodItem.render();
        });
        document.querySelector('.goods-list').innerHTML = listHtml;
    }
}

//Создаем класс корзина Cart
class Cart {
    constructor() {
            this.goods = [];
        }
        //метод добавления товара в корзину
    addCartItem(cartItem) {
        this.goods.push(cartItem);
    }

    //Метод для вывода итоговой суммы корзины
    totalCartPrice() {
        let totalPrice = document.getElementById('goods-list__total');
        let sum = 0;
        this.goods.forEach(good => {
            sum += good.price
        });
        totalPrice.innerText = `Итого ${sum} рублей`;
    }

    render() {
        let listHtml = '';
        let goodsList = document.getElementById('goods-list__product-box');

        this.goods.forEach(good => {
            const goodItem = new GoodItem(good.title, good.desc, good.price);
            listHtml = +goodItem.render();
        });
        goodsList.innerHtml = listHtml;
    }
}

var renderCart = () => {
    const list = new GoodsList();
    const cart = new Cart();

    list.fetchGoods();
    cart.addCartItem(list.goods[0]);
    cart.addCartItem(list.goods[1]);
    cart.addCartItem(list.goods[2]);
    cart.render();

    cart.totalCartPrice();
    goodsListSection.style.display = 'block';
};

function makeGetRequest(url) {

    return new Promise((resolve, reject) => {
        let xhr;
        let fakeError = Math.round(Math.random() * 100);
        console.log(fakeError);


        if (20 < fakeError && fakeError <= 40) {
            url += 'n/a_file_at_server';
        }
        if (fakeError <= 20) {
            setTimeout(() => {
                reject('превышено время ожидания')
            }, 3000);
        }
        if (window.XMLHttpRequest) {
            xhr = new XMLHttpRequest();
        }
        // } else (window.ActiveXObject) {
        //     xhr = new ActiveXObject("Microsoft.XMLHTTP");
        // }

        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                xhr.status === 404 ? reject(`404 - файл по адресу  ${url} не найден `) : resolve(xhr.responseText);
            }
        }
        xhr.open('GET', url, true);
        if (fakeError > 20) {
            xhr.send();
        }
    })
}

const div = document.getElementById('body');

const url = '/catalogData.json';
makeGetRequest(url)
    .then((response) => {
        div.innerText += response;
    })
    .catch((error) => {
        div.innerText = error;
    });

console.log(makeGetRequest)

btnBasket.addEventListener('click', renderCart);
window.addEventListener('click', function(evt) { console.log(evt) });

const list = new GoodsList();
list.fetchGoods();
list.render();

renderGoodsList(goods);