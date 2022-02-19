local ESX = nil

TriggerEvent(Config.GetESX, function(obj)
    ESX = obj
end)

-- FERMER LE NUI
RegisterNUICallback('close', function(data, cb)
	SetNuiFocus( false )
	SendNUIMessage({display = false})
  	cb('ok')
end)

-- INTERACTION
CreateThread(function()
	for _,v in pairs(Config.Shop.Positions) do
		local blip = AddBlipForCoord(v.pos)
		SetBlipSprite(blip, Config.Shop.Blip.Sprite)
		SetBlipDisplay(blip, Config.Shop.Blip.Display)
		SetBlipScale(blip, Config.Shop.Blip.Scale)
		SetBlipColour(blip, Config.Shop.Blip.Color)
		SetBlipAsShortRange(blip, true)
		BeginTextCommandSetBlipName("STRING")
		AddTextComponentString(Config.Shop.Blip.Name)
		EndTextCommandSetBlipName(blip)
	end
    while true do
        Citizen.Wait(1)
        local pCoords = GetEntityCoords(PlayerPedId())
        local SleepWait = true
        for _,v in pairs(Config.Shop.Positions) do
            if #(pCoords - v.pos) < 1.2 then
                SleepWait = false
                ESX.ShowHelpNotification("Appuyer sur ~INPUT_PICKUP~ pour accéder à ~b~l'épicerie.")
                DrawMarker(20, v.pos, 0.0, 0.0, 0.0, 0.0,0.0,0.0, 0.3, 0.3, 0.3, 0, 180, 0, 255, true, true, p19, true)                    
                if IsControlJustReleased(0, 38) then
                    SetNuiFocus( true, true )
                    SendNUIMessage({display = true})
                end
			end
        end
        if SleepWait then
           Citizen.Wait(500)
        end
    end
end)

RegisterNUICallback('buy', function(data, cb)

    TriggerServerEvent('cst_shop-ui:buy', data.item, data.price, data.count)

    cb('ok')
end)

-- Copyright (c) 2022 COSSART - LazyDev --