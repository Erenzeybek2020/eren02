module.exports = {
name: "$alwaysExecute",
$if: "old",
code:`
$channelSendMessage[1157049142464491540;{newEmbed:{color:Blue}{author:Quarex | Komut Log:$userAvatar[$clientID]}{description:
**Komutu Kullanan**
<@$authorID> | $username
**Kullanılan Komut**
<@$clientID> ($message)
**Kullanılan Tarih**
$sum[$hour;3]:$minute - $year}};false]

$replaceText[$get[rep];";]
$disableMentionType[everyone]
$let[rep;$jsonRequest[https://tilki.dev/api/hercai?soru=$noMentionMessage+mesajına+kısa+ve+emoji+ve+komik+dalgacı+ve+gerekirse+laf+sokucu+bir+cevap+yaz+sadece+cevabı+başka+birşey+yazma+kesinlikle+tabi+işte+cevabım+gibi+birşey+yazma+sadece+cevap+ve+tırnak+içi+kullanma+başka+birşey+yazma;cevap;**__Bilinmeyen Bir Hata!!__**]]

$setVar[topkullanımai;$sum[$getVar[topkullanımai;main];1];main]
$reply
$clientTyping
$onlyIf[$mentioned[1]==$clientID;]
`

}