import React,{useState} from 'react'

const Inventory = () => {

    const [items, setItems] = useState([
        {
            name: "M416",
            Cartridge : "5.56 mm",
            type: "Assault rifle",
            firing_mode: "Single / full-auto",
            mag_size: "30",
            attachment: "5",
            bullet_spread: "4 units",
            recoil_gain: "1.30 units",
            in_inventory: "23",
            sold:"42",
            price: "20K",
        },
        {
            name: "AKM",
            Cartridge : "7.62 mm",
            type: "Assault rifle",
            firing_mode: "Single / full-auto",
            mag_size: "30",
            attachment: "5",
            bullet_spread: "4 units",
            recoil_gain: "1.50 units",
            in_inventory: "14",
            sold:"37",
            price: "22K",
        },
        {
            name: "Scar-L",
            Cartridge : "5.56 mm",
            type: "Assault rifle",
            firing_mode: "Single / full-auto",
            mag_size: "30",
            attachment: "5",
            bullet_spread: "4 units",
            recoil_gain: "1.33 units",
            in_inventory: "20",
            sold:"28",
            price: "19K",
        },
        {
            name: "M16-A4",
            Cartridge : "5.56 mm",
            type: "Assault rifle",
            firing_mode: "Single / Burst",
            mag_size: "30",
            attachment: "5",
            bullet_spread: "3 units",
            recoil_gain: "1.20 units",
            in_inventory: "9",
            sold:"2",
            price: "16K",
        },


        {
            name: "Micro-UZI",
            Cartridge : "9 mm",
            type: "SMG",
            firing_mode: "Full-auto",
            mag_size: "25",
            attachment: "5",
            bullet_spread: "3 units",
            recoil_gain: "0.70 units",
            in_inventory: "20",
            sold:"28",
            price: "14K",
        },
        {
            name: "UMP-45",
            Cartridge : "0.45 mm",
            type: "SMG",
            firing_mode: "Burst / Single / Auto",
            mag_size: "25",
            attachment: "5",
            bullet_spread: "3 units",
            recoil_gain: "0.76 units",
            in_inventory: "10",
            sold:"30",
            price: "16K",
        },
        {
            name: "Thompson",
            Cartridge : "9 mm",
            type: "SMG",
            firing_mode: "Single / Auto",
            mag_size: "30",
            attachment: "5",
            bullet_spread: "1 units",
            recoil_gain: "0.70 units",
            in_inventory: "21",
            sold:"15",
            price: "17K",
        },
        {
            name: "Vector",
            Cartridge : "9 mm",
            type: "SMG",
            firing_mode: "Full-auto",
            mag_size: "25",
            attachment: "5",
            bullet_spread: "2 units",
            recoil_gain: "0.71 units",
            in_inventory: "12",
            sold:"5",
            price: "14K",
        },


        {
            name: "Kar-98K",
            Cartridge : "7.62 mm",
            type: "Sniper Rifle",
            firing_mode: "Single",
            mag_size: "5",
            attachment: "3",
            bullet_spread: "0.7 units",
            recoil_gain: "1.3 units",
            in_inventory: "10",
            sold:"5",
            price: "30K",
        },
        {
            name: "M24",
            Cartridge : "7.62 mm",
            type: "Sniper Rifle",
            firing_mode: "Single",
            mag_size: "5",
            attachment: "3",
            bullet_spread: "0.7 units",
            recoil_gain: "1.3 units",
            in_inventory: "15",
            sold:"10",
            price: "34K",
        },
        {
            name: "AWM",
            Cartridge : "0.300 magnum",
            type: "Sniper Rifle",
            firing_mode: "Single",
            mag_size: "5",
            attachment: "5",
            bullet_spread: "0.7 units",
            recoil_gain: "1.3 units",
            in_inventory: "5",
            sold:"3",
            price: "50K",
        },
        {
            name: "Win-94",
            Cartridge : "0.45 mm",
            type: "Sniper Rifle",
            firing_mode: "Single",
            mag_size: "10",
            attachment: "3",
            bullet_spread: "0.7 units",
            recoil_gain: "1.3 units",
            in_inventory: "10",
            sold:"1",
            price: "25K",
        },


        {
            name: "Pan",
            // Cartridge : "0.45 mm",
            type: "Melee",
            // firing_mode: "Single",
            // mag_size: "10",
            // attachment: "3",
            // bullet_spread: "0.7 units",
            // recoil_gain: "1.3 units",
            in_inventory: "6",
            sold:"14",
            price: "2K",
        },
        {
            name: "Sickle",
            // Cartridge : "0.45 mm",
            type: "Melee",
            // firing_mode: "Single",
            // mag_size: "10",
            // attachment: "3",
            // bullet_spread: "0.7 units",
            // recoil_gain: "1.3 units",
            in_inventory: "10",
            sold:"1",
            price: "1K",
        },
        {
            name: "Mechete",
            // Cartridge : "0.45 mm",
            type: "Melee",
            // firing_mode: "Single",
            // mag_size: "10",
            // attachment: "3",
            // bullet_spread: "0.7 units",
            // recoil_gain: "1.3 units",
            in_inventory: "8",
            sold:"5",
            price: "4K",
        },
        {
            name: "Crowbar",
            // Cartridge : "0.45 mm",
            type: "Melee",
            // firing_mode: "Single",
            // mag_size: "10",
            // attachment: "3",
            // bullet_spread: "0.7 units",
            // recoil_gain: "1.3 units",
            in_inventory: "10",
            sold:"0",
            price: "900",
        },


        {
            name: "Molotov Cocktail",
            // Cartridge : "0.45 mm",
            type: "Throwable",
            // firing_mode: "Single",
            // mag_size: "10",
            // attachment: "3",
            // bullet_spread: "0.7 units",
            // recoil_gain: "1.3 units",
            in_inventory: "10",
            sold:"1",
            price: "K",
        },
        {
            name: "Frag Grenade",
            // Cartridge : "0.45 mm",
            type: "Throwable",
            // firing_mode: "Single",
            // mag_size: "10",
            // attachment: "3",
            // bullet_spread: "0.7 units",
            // recoil_gain: "1.3 units",
            in_inventory: "10",
            sold:"1",
            price: "K",
        },
        {
            name: "Smoke Grenade",
            // Cartridge : "0.45 mm",
            type: "Throwable",
            // firing_mode: "Single",
            // mag_size: "10",
            // attachment: "3",
            // bullet_spread: "0.7 units",
            // recoil_gain: "1.3 units",
            in_inventory: "10",
            sold:"1",
            price: "K",
        },
        {
            name: "Stun Grenade",
            // Cartridge : "0.45 mm",
            type: "Throwable",
            // firing_mode: "Single",
            // mag_size: "10",
            // attachment: "3",
            // bullet_spread: "0.7 units",
            // recoil_gain: "1.3 units",
            in_inventory: "10",
            sold:"1",
            price: "K",
        },
    ])

  return (
    <div className='p-4'>
      {items.map((item) => (
        <>
            <div>{item.name}</div>
            <div>{item.type}</div>
        </>
      ))}
    </div>
  )
}

export default Inventory