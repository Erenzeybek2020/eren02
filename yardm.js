module.exports = {

name: "yardım",

aliases: ["yardim", "help", "komutlar"],

code:`
$reply
$color[Blue]

$author[$username[$clientID] | Komutlar;$userAvatar[$clientID]]

$description[
> **Yapay Zeka Soru Sorma**
> \`\`\`?sor (metin)\`\`\`
> **Yapay Zeka Görsel Oluştur**
> \`\`\`?çiz (metin)\`\`\`
> **Yapay Zeka Ses Oluştur**
> \`\`\`?konuştur (metin)\`\`\`
> **Quarex Bot İstatik**
> \`\`\`?istatistik\`\`\`
]

$footer[$getVar[topkullanımai;main] kadar kullanıldım.]

`

}