module.exports = {
name: "istatistik",
$if: "old",
code:`
$reply

$clientTyping
$color[Blue]
$author[$username[$clientID] | İstatistik;$userAvatar[$clientID]]

$description[
> ***<:aktif:1207068422790316072> Bot Ve Bot Sahibi Bilgileri:***
> **🧠 Benim İsmim:**
> Quarex Bot
> **⏰ Piyasaya Sürülüş Tarihim:**
> 4 Temmuz 2023
> **👨‍🔧 Beni Geliştiren Sahibim:**
> Yiğit

> ***<:aktif:1207068422790316072> Quarex Genel İstatistikleri***
> **🤯 Toplam Yapay Zeka Kullanımı:**
> $getVar[topkullanımai;main]
> **👨‍🚀 Toplam Kullanıcılarım (Sizi Seviyorum <3)**
> $allMembersCount
> **🏡 Toplam Bulunduğum Sunucular (Sende Eklermisin Beni?)**
> $guildCount

> ***<:aktif:1207068422790316072> Quarex'in Gecikme Süreleri:***
> **🕞 Genel Bot Gecikmesi:** $pingms
> **💭 Mesaj Gecikmesi:** $messagePing
> **🏏 Veri Tabanı Gecimesi:** $databasePing
]

$footer[$username, tarafından çağırıldım!;$authorAvatar]

$addButton[1;Beni Sunucuna Ekle!;link;https://discord.com/invite/8uuwCNEVyR;false;🤯]
`
}