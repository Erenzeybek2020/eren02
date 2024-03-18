module.exports = {

name: "konuştur",

aliases: ["talk"],

$if: "old",

code:`
$channelSendMessage[1157049142464491540;{newEmbed:{color:Blue}{author:Quarex | Komut Log:$userAvatar[$clientID]}{description:
**Komutu Kullanan**
<@$authorID> | $username
**Kullanılan Komut**
?konuştur ($message)
**Kullanılan Tarih**
$sum[$hour;3]:$minute - $year}};false]

$reply
$color[Blue]

$author[$username[$clientID] | Sound Creator (FREE);$userAvatar[$clientID]]

$attachment[https://tilki.dev/api/yaziyi-ses-yapma?text=$replaceText[$message; ;+];quarexbot.mp3;URL]

$description[
**Metin:**
\`$message\`]

$footer[$username tarafından istendi.;$authorAvatar]

$setVar[topkullanımai;$sum[$getVar[topkullanımai;main];1];main]

$clientTyping

`

}