const QRCode = require('qrcode')
const generatePayload = require('promptpay-qr')
const mobileNumber = '080–908–5652' // เปลี่ยนเบอร์โทรศัพท์ตรงนี้
const amount = 4.22 // จำนวนเงิน
const payload = generatePayload(mobileNumber, { amount })
const option = { color: {
dark: '#000', // สีตัว QRcode ตรงนี้กำหนดไว้เป็นสีน้ำ
light: '#FFFFFF' // สีพื้นหลัง
}
}
QRCode.toFile('./images_qrcode/filename.png', payload , option , function (err) { if (err) throw err
console.log('done')
})