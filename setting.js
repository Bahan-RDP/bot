//Website api (jangan di ganti tomlol)
const api = "https://ronzxapis.my.id" //Apabila link api error segera lapor ke owner

// Free apikey (Apikey expired silahkan login terus ganti APIKEY dgn apikey lu)
const apikey = "RonzzOfc" //login di https://ronzxapis.my.id to get apikey || login di https://ronzxapis.my.id untuk mendapatkan apikey

// Free apikey (Apikey expired silahkan login terus ganti APIKEY dgn apikey lu)
const apikeyAntlatic = "706e4ecd28f11776b4eec25a45ed27040e09aaca36e78f70bdd258eeb63016ef" //Untuk cara mendapatkannya ada di channel https://youtube.com/c/RonzzYT di deskripsi video

//Other
const botName = "VelzzyBotz" //Nama bot
const owner = ["628817839722","6285669029379"] //Ganti agar fitur owner bisa digunakan
const ownerNomer = "628817839722" //Nomor lu
const ownerName = "Ronzz YT" //Nama lu
const email = "ronzzyt8598@gmail.com" //Email lu
const youtube = "https://youtube.com/c/RonzzYT" //Youtube lu kalau ngga punya kasih tanda strip "-"
const region = "Indonesia" //Region lu
const footer = "VelzzyBotz © 2023" //Seterah
const packname = "© VelzzyBotz" //Sticker wm ubah
const author = "Di Buat Oleh Ronzz YT" //Sticker wm ubah nama lu
const sessionName = "session" //Ngga usah di ganti

//Image
const thumbnail = "./options/image/thumbnail.jpg" //Ngga usah di ganti
const qris = "./options/image/qris.jpg" //Ngga usah di ganti
const menfess = "./options/image/menfess.jpg" //Ngga usah di ganti
const source = "./options/image/source.jpg" //Ngga usah di ganti
const bc = "./options/image/bc.jpg" //Ngga usah di ganti
const responP = "./options/image/responP.jpg" //Ngga usah di ganti

//Message
const sp = "⭔"
const mess = {
	sukses: "Done🤗",
	admin: "Command ini hanya bisa digunakan oleh Admin Grup",
	botAdmin: "Bot Harus menjadi admin",
	owner: "Command ini hanya dapat digunakan oleh owner bot",
	prem: "Command ini khusus member premium",
	group: "Command ini hanya bisa digunakan di grup",
	private: "Command ini hanya bisa digunakan di Private Chat",
	wait: "⏳ Mohon tunggu sebentar...",
	errorLv: "Link yang kamu berikan tidak valid",
	errorApi: "Maaf terjadi kesalahan"
}

//Payment
const payment = {
    qris: {
      link_nya: "https://telegra.ph/file/3c485ff201d9337be14ef.jpg",
      atas_nama: "Ronzz YT"
    },
    dana: {
      nomer: "08817839722",
      atas_nama: "Ronzz YT"
    },
    ovo: {
      nomer: "08817839722",
      atas_nama: "Ronzz YT"
    }
}

//Manage panel
const host = "https://panel.ronzxapis.my.id"
const application = {
    api_key: "ptla_gYgyEMOsNipQy9dVe3lYTEidKrKD4u64H96i3x3TWri",
    c_api_key: "ptlc_Pohf274qrfd12XVvLaGPMCxx8R6tGat7MI3Q8sH3wvP"
}
const serverCreate = {
    nestId: "5",
    eggId: " 15",
    limits: {
      db: "1",
      backups: "1",
      allocation: "0"
    },
    eggs: {
      environment: {
        "STARTUP_CMD": "npm install"
        "SECOND_CMD": "npm start"
      }
    }
}

module.exports = { api, apikey, apikeyAntlatic, botName, owner, ownerNomer, ownerName, email, youtube, region, footer, packname, author, sessionName, thumbnail, qris, menfess, source, bc, responP, sp, mess, payment, host, application, serverCreate }