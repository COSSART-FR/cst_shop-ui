fx_version 'adamant'
game 'gta5'

name 'cst_shop-ui'
author 'COSSART'
description 'Épicerie avec ui'

version '1.0'
ui_page "ui/index.html"

shared_script 'config.lua'

client_scripts {
    'client/*.lua',
}

server_scripts {
    'server/*.lua',
}

files {
    "ui/index.html",
    "ui/app.js",
    "ui/style.css",
    "ui/img/*.png",
    "ui/img/*.jpg"
}