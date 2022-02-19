////////////////////////////////////////////////////////////////////////////////
///////////////////////////////   AFFICHAGE    /////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

$(function () {
    // FERMETURE DU MENU
    $(document).keyup(function (e) {
        if (e.keyCode == 27) {
            $.post('http://cst_shop-ui/close', JSON.stringify({}));
        }
    });
    // AFFICHAGE DU MENU
    $(document).ready(function () {
        window.addEventListener('message', function (event) {
            var item = event.data;
            if (item.display == true) {
                $('.container').css('display', 'block');
            } else if (item.display == false) {
                $('.container').css('display', 'none');
            }
        });
    });
});


////////////////////////////////////////////////////////////////////////////////
////////////////////////////   CONFIGURATION    ////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// LISTE DES ARMES
var items_list = {
    water: {
        item: 'water',
        label: 'Eau',
        price: 2,
        count: 1,
        picture: 'img/eau.png',
    },

    bread: {
        item: 'bread',
        label: 'Pain',
        price: 2,
        count: 1,
        picture: 'img/bread.png',
    },

    cocacola: {
        item: 'cocacola',
        label: 'Coca-Cola',
        price: 2,
        count: 1,
        picture: 'img/coca.png',
    },

    pizza: {
        item: 'pizza',
        label: 'Pizza',
        price: 2,
        count: 1,
        picture: 'img/pizza.png',
    },

    beer: {
        item: 'beer',
        label: 'Bière',
        price: 2,
        count: 1,
        picture: 'img/biere.png',
    },

    cupcake: {
        item: 'cupcake',
        label: 'Cupcake',
        price: 2,
        count: 1,
        picture: 'img/cupcake.png',
    },
    
    energetic: {
        item: 'energetic',
        label: 'Energetic',
        price: 2,
        count: 1,
        picture: 'img/energetic.png',
    },

    hamburger: {
        item: 'hamburger',
        label: 'Hamburger',
        price: 2,
        count: 1,
        picture: 'img/hamburger.png',
    },
    
    hotdog: {
        item: 'hotdog',
        label: 'Hotdog',
        price: 2,
        count: 1,
        picture: 'img/hotdog.png',
    },

    pate: {
        item: 'pate',
        label: 'Pâte',
        price: 2,
        count: 1,
        picture: 'img/pates.png',
    },

    pepsi: {
        item: 'pepsi',
        label: 'Pepsi',
        price: 2,
        count: 1,
        picture: 'img/pepsi.png',
    },

    poulet: {
        item: 'poulet',
        label: 'Poulet',
        price: 2,
        count: 1,
        picture: 'img/poulet.png',
    },

    sushi: {
        item: 'sushi',
        label: 'Sushi',
        price: 2,
        count: 1,
        picture: 'img/sushi.png',
    },

    chocolate: {
        item: 'chocolate',
        label: 'Chocolat',
        price: 2,
        count: 1,
        picture: 'img/chocolate.png',
    },

    sandwich: {
        item: 'sandwich',
        label: 'Sandwich',
        price: 2,
        count: 1,
        picture: 'img/sandwich.png',
    },

    cheese: {
        item: 'cheese',
        label: 'Fromage',
        price: 2,
        count: 1,
        picture: 'img/cheese.png',
    },

    steak: {
        item: 'steak',
        label: 'Steak',
        price: 2,
        count: 1,
        picture: 'img/steak.png',
    },

    frites: {
        item: 'frites',
        label: 'Frites',
        price: 2,
        count: 1,
        picture: 'img/frites.png',
    },

    chips: {
        item: 'chips',
        label: 'Chips',
        price: 2,
        count: 1,
        picture: 'img/chips.png',
    },

    cacahuete: {
        item: 'cacahuete',
        label: 'Cacahuète',
        price: 2,
        count: 1,
        picture: 'img/cacahuete.png',
    },
}


////////////////////////////////////////////////////////////////////////////////
///////////////////////   AFFICHER TOUT LES ITEMS    ///////////////////////////
////////////////////////////////////////////////////////////////////////////////

function show_items_list() {
    $('#items_list').empty();
    $.each(items_list, function (key, value) {
        $('#items_list').append(
            '<div class="item" id="' + value.item + '">' +
            '<img src="' + value.picture + '" class="item_picture">' +
            '<div class="item_label">' + value.label + '</div>' +
            '<div class="item_price">' + value.price + '$</div>' +
            '</div>'
        );
    });
}

show_items_list();


////////////////////////////////////////////////////////////////////////////////
/////////////////////////////   BUY ITEM    //////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
function buy_item(item) {
    $.post('http://cst_shop-ui/buy', JSON.stringify(item));
}

// ACHAT D'UN IEM PAR LE CLIQUE SUR LE BOUTON
$(document).on('click', '.item', function () {
    buy_item(items_list[$(this).attr('id')]);
});


// Copyright (c) 2022 COSSART - LazyDev //
