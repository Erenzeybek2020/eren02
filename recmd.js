module.exports = [{

  name: "reset",

  $if: "old",

  aliases: ["bot","kapa"],

  code: `

$if[$message[1]==komut]

$updateCommands
<@$authorID>, Komutlar Başarıyla Yenilendi!
$endif

$if[$message[1]==bot]

$reboot
<@$authorID>, Bot Başarıyla Yeniden Başlatıldı!
$endif

$onlyForIDs[888768708875538462;$clientOwnerIDs;965209557221670922; ]

`

}]