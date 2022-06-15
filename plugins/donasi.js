let handler = async m => m.reply(`

┌─「 Donasi • Pulsa 」
│ • *Tri:* [089636219593]
| ini Untuk Pulsa Ya:)
❏────

┌─「 Donasi • Non Pulsa 」
│ • *Gopay:* [089636219593]
│ • *Dana:* [0895347198105]
│ • *Ovo:* [0895347198105]
│ Terima Kasih Atas Donasinya :) 
│  Semoga Sehat Selalu Yahh ♡
❏────



`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
