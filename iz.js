module.exports = {

name: "çiz",

aliases: ["image"],

$if: "old",

code:`
$channelSendMessage[1157049142464491540;{newEmbed:{color:Blue}{author:Quarex | Komut Log:$userAvatar[$clientID]}{description:
**Komutu Kullanan**
<@$authorID> | $username
**Kullanılan Komut**
?çiz ($message)
**Kullanılan Tarih**
$sum[$hour;3]:$minute - $year}};false]

$reply
$color[Blue]

$author[$username[$clientID] | Image Creator (FREE);$userAvatar[$clientID]]

$image[$get[rep]]

$footer[$username tarafından istendi.;$authorAvatar]

$let[rep;$jsonRequest[https://tilki.dev/api/imagine?q=$get[ceviri];url;AIERROR]]

$wait[2s]

$let[ceviri;$jsonRequest[https://tilki.dev/api/cevir?yazi=$message&dil=en;ceviri;error]]

$cooldown[5s;📺 | Sadece **5 Saniyede** bir kere çizim yapabilirsin.]

$setVar[topkullanımai;$sum[$getVar[topkullanımai;main];1];main]

$clientTyping

`

}