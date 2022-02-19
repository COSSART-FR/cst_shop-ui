local ESX = nil

TriggerEvent(Config.GetESX, function(obj)
    ESX = obj
end)

RegisterNetEvent('cst_shop-ui:buy')
AddEventHandler('cst_shop-ui:buy', function(item, price, count)
    local xPlayer = ESX.GetPlayerFromId(source)
    local getMoney = xPlayer.getMoney()

    if getMoney >= price then
        if xPlayer.canCarryItem(item, count) then
            xPlayer.addInventoryItem(item, count)
            xPlayer.removeMoney(price)
        else
            xPlayer.showNotification('~r~Vous ne pouvez pas prendre plus d\'objets')
        end
    else
        xPlayer.showNotification("~r~Vous n'avez pas assez d'argent !")
    end
    
end)

-- Copyright (c) 2022 COSSART - LazyDev --