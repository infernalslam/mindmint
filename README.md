## Run
```
 รัน http-server
```
แก้ไข css  ตรงบริเวณ  cctv
```javascript
var cameraStyle = {
  id: Date.now(),
  css: {
    top: 100,
    left: 100,
    position: 'absolute',
    background: 'rgb(53, 255, 195)',
    width: '1em',
    height: '1em',
    animation: 'ripple 0.7s linear infinite'
  }
}
```
ถ้าในกรณีจะเซฟลบขึ้น cloud (ส่ง path ไป) เเต่ยังไม่ชัวร์ต้องลองก่อน
```javascript
$scope.data.b64.replace(/^data:image\/(png|jpg);base64,/, '')
```
# ยังไม่มี backend รองรับ
