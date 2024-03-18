module.exports = {
name: "sor",
aliases: ["sir"],
$if: "old",
code:`

$channelSendMessage[1157049142464491540;{newEmbed:{color:Blue}{author:Quarex | Komut Log:$userAvatar[$clientID]}{description:
**Komutu Kullanan**
<@$authorID> | $username
**Kullanılan Komut**
?sor ($message)
**Kullanılan Tarih**
$sum[$hour;3]:$minute - $year}};false]

$reply
$author[$username[$clientID] | ChatGPT-4 (FREE);$userAvatar[$clientID]]

$description[$get[rep]]

$footer[$username tarafından istendi.;$authorAvatar]

$cooldown[5s;⏰ | **5** Saniye Sonra Tekrar Dene!!]
$let[rep;$jsonRequest[https://tilki.dev/api/hercai?soru=$message;cevap;Beklenmeyen Bir Hata Tekrar Deneyiniz..]]
$setVar[topkullanımai;$sum[$getVar[topkullanımai;main];1];main]
$clientTyping
`
}