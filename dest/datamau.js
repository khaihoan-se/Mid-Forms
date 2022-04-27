var loaiphuongtien = [
      {"value":"1","text":"Xe h\u01a1i","tcdb":"0"},
      {"value":"2","text":"Xe t\u1ea3i","tcdb":"0"},
      {"value":"4","text":"T\u00e0u \/ X\u00e0 lan","tcdb":"0"},
      {"value":"6","text":"Xe bu\u00fdt","tcdb":"1"},
      {"value":"10","text":"Validemo","tcdb":"0"},
      {"value":"12","text":"Xe kh\u00e1ch 7 ch\u1ed7","tcdb":"0"},
      {"value":"13","text":"Xe kh\u00e1ch 16 ch\u1ed7","tcdb":"1"},
      {"value":"14","text":"Xe kh\u00e1ch 25 ch\u1ed7","tcdb":"1"},
      {"value":"15","text":"Xe kh\u00e1ch 29 ch\u1ed7","tcdb":"1"},
      {"value":"16","text":"Xe kh\u00e1ch 35 ch\u1ed7","tcdb":"1"},
      {"value":"17","text":"Xe container","tcdb":"1"},
      {"value":"18","text":"Xe kh\u00e1ch 39 ch\u1ed7","tcdb":"1"},
      {"value":"21","text":"Xe kh\u00e1ch 44 ch\u1ed7","tcdb":"1"},
      {"value":"22","text":"Xe kh\u00e1ch 45 ch\u1ed7","tcdb":"1"},
      {"value":"23","text":"Xe kh\u00e1ch 47 ch\u1ed7","tcdb":"1"},
      {"value":"24","text":"Xe kh\u00e1ch 50 ch\u1ed7","tcdb":"1"}
];
var goidichvu = [
      {
            "value":"22",
            "text":"validemo",
            "content":"g\u00f3i ch\u1ec9 s\u1eed d\u1ee5ng cho vali demo",
            "cost":"0",
            "voucherUse":"0",
            "maxNum":"4",
            "feeCircle":"2",
            "pid":"1,6",
            "pack":"0",
            "numSave":"0",
            "saveServer":"0"
      },
      {
            "value":"34",
            "text":"G\u00f3i kh\u00f4ng t\u00edch truy\u1ec1n",
            "content":" 960.000 \u0111 \/ N\u0103m \/ Thi\u1ebft b\u1ecb\r\n\r\n- Mi\u1ec5n ph\u00ed n\u0103m \u0111\u1ea7u\r\n- Ph\u00ed d\u1ecbch v\u1ee5 m\u00e1y ch\u1ee7: App, Web\r\n- Kh\u00f4ng l\u01b0u tr\u1eef tr\u00ean m\u00e1y ch\u1ee7",
            "cost":"960000",
            "voucherUse":"1",
            "maxNum":"4",
            "feeCircle":"2",
            "pid":"0",
            "pack":"0,6,7,8",
            "numSave":"0",
            "saveServer":"0"
      },
      {
            "value":"35",
            "text":"G\u00f3i t\u00edch truy\u1ec1n h\u00ecnh \u1ea3nh",
            "content":"1.200.000 \u0111 \/ N\u0103m \/ Thi\u1ebft b\u1ecb\r\n\r\n- Mi\u1ec5n ph\u00ed n\u0103m \u0111\u1ea7u\r\n- Ph\u00ed d\u1ecbch v\u1ee5 m\u00e1y ch\u1ee7: App, Web\r\n- Ph\u00ed truy\u1ec1n h\u00ecnh \u1ea3nh: 2 k\u00eanh theo ngh\u1ecb \u0111\u1ecbnh\r\n- Ph\u00ed l\u01b0u tr\u1eef h\u00ecnh \u1ea3nh tr\u00ean m\u00e1y ch\u1ee7 30 ng\u00e0y cho 2 cam\r\n- Kh\u00f4ng bao g\u1ed3m sim data ( 295.000 \u0111 )",
            "cost":"1200000",
            "voucherUse":"1",
            "maxNum":"8",
            "feeCircle":"2",
            "pid":"0",
            "pack":"0,7,8",
            "numSave":"2",
            "saveServer":"2"
      },
      {
            "value":"36",
            "text":"G\u00f3i server CP",
            "content":"G\u00f3i c\u01b0\u1edbc d\u00e0nh cho b\u00ean CP",
            "cost":"0",
            "voucherUse":"0",
            "maxNum":"4",
            "feeCircle":"2",
            "pid":"1,6",
            "pack":"0",
            "numSave":"4",
            "saveServer":"1"
      },
      {
            "value":"37",
            "text":"G\u00f3i l\u01b0u 1 k\u00eanh",
            "content":"G\u00f3i l\u01b0u video ti\u00eau chu\u1ea9n: \r\nPh\u00ed h\u00e0ng n\u0103m: 500.000\u0111\/1cam\r\n- Video \u0111\u01b0\u1ee3c l\u01b0u gi\u1eef \u0111\u1ebfn 7 ng\u00e0y\r\n- Ch\u1ea5t l\u01b0\u1ee3ng h\u00ecnh \u1ea3nh Online: \r\n(D1: 720x480pixel-FPS:10) ",
            "cost":"500000",
            "voucherUse":"1",
            "maxNum":"4",
            "feeCircle":"2",
            "pid":"1,6,16",
            "pack":"0",
            "numSave":"1",
            "saveServer":"1"
      },
      {"value":"38","text":"IP50","content":"ch\u01b0a c\u1eadp nh\u1eadt lu\u00f4n","cost":"0","voucherUse":"0","maxNum":"2","feeCircle":"1","pid":"1","pack":"7","numSave":"0","saveServer":"0"}
];   
var goisim = [
      {"value":"0","text":"Kh\u00f4ng thu\u1ed9c MOBICAM","content":"G\u00f3i Sim kh\u00f4ng thu\u1ed9c MOBICAM","cost":"0","tichtruyen":"0","maxNum":"0"},
      {"value":"1","text":"MDT150A","content":"G\u00f3i 150GB A - 150 GB","cost":"150000","tichtruyen":"0","maxNum":"0"},{"value":"2","text":"MC200A","content":"G\u00f3i 200.000 \u20ab - 300 GB","cost":"200000","tichtruyen":"0","maxNum":"0"},
      {"value":"4","text":"MDT250A","content":"G\u00f3i 250.000 \u20ab - 4Gb","cost":"250000","tichtruyen":"0","maxNum":"0"},{"value":"5","text":"MC150","content":"G\u00f3i 150.000 \u20ab - 150gb","cost":"150000","tichtruyen":"0","maxNum":"0"},
      {"value":"6","text":"SMC03","content":"Sim chuy\u00ean d\u1ee5ng cho Mobicam \r\nKh\u00f4ng gi\u1edbi h\u1ea1n data khi truy\u1ec1n v\u1ec1 m\u00e1y ch\u1ee7 MobiCAM\r\nGi\u00e1m s\u00e1t online 24\/24 cho 4CH \r\nH\u1ed7 tr\u1ee3 d\u1ecbch v\u1ee5 l\u01b0u tr\u1eef tr\u00ean m\u00e1y ch\u1ee7. \r\n-------------------------------\r\nC\u01b0\u1edbc ph\u00ed: 200.000 vnd\/th\u00e1ng (ch\u01b0a bao g\u1ed3m VAT) \r\nThanh to\u00e1n theo k\u1ef3 (12 th\u00e1ng)\r\nH\u1ea1n thanh to\u00e1n: tr\u01b0\u1edbc ng\u00e0y 28 c\u1ee7a th\u00e1ng cu\u1ed1i trong k\u1ef3. ","cost":"200000","tichtruyen":"1","maxNum":"4"},
      {"value":"7","text":"SMC02","content":"Sim chuy\u00ean d\u1ee5ng cho Mobicam \r\nGi\u00e1m s\u00e1t online 24\/24 cho t\u1ed1i \u0111a 4CH \r\nKh\u00f4ng gi\u1edbi h\u1ea1n data khi truy\u1ec1n v\u1ec1 m\u00e1y ch\u1ee7 MobiCAM\r\nKh\u00f4ng s\u1eed d\u1ee5ng d\u1ecbch v\u1ee5 l\u01b0u video l\u00ean m\u00e1y ch\u1ee7 \r\n-------------------------------\r\nC\u01b0\u1edbc ph\u00ed: 90.000 vnd\/th\u00e1ng (ch\u01b0a bao g\u1ed3m VAT) \r\nThanh to\u00e1n theo k\u1ef3 (12 th\u00e1ng), \r\nH\u1ea1n thanh to\u00e1n: tr\u01b0\u1edbc ng\u00e0y 28 c\u1ee7a th\u00e1ng cu\u1ed1i trong k\u1ef3. ","cost":"90000","tichtruyen":"1","maxNum":"4"},{"value":"8","text":"SMC01","content":"Sim chuy\u00ean d\u1ee5ng cho Mobicam \r\nGi\u00e1m s\u00e1t online 24\/24 cho t\u1ed1i \u0111a 2 k\u00eanh  \r\nKh\u00f4ng gi\u1edbi h\u1ea1n data khi truy\u1ec1n v\u1ec1 m\u00e1y ch\u1ee7 MobiCAM\r\nKh\u00f4ng s\u1eed d\u1ee5ng d\u1ecbch v\u1ee5 l\u01b0u video l\u00ean m\u00e1y ch\u1ee7 \r\n-------------------------------\r\nC\u01b0\u1edbc ph\u00ed: 50.000 vnd\/th\u00e1ng (ch\u01b0a bao g\u1ed3m VAT) \r\nThanh to\u00e1n theo k\u1ef3 (12 th\u00e1ng)\r\nH\u1ea1n thanh to\u00e1n: tr\u01b0\u1edbc ng\u00e0y 28 c\u1ee7a th\u00e1ng cu\u1ed1i trong k\u1ef3. ","cost":"50000","tichtruyen":"1","maxNum":"2"},{"value":"9","text":"SMC04","content":"Sim chuy\u00ean d\u1ee5ng cho Mobicam Gi\u00e1m s\u00e1t online 24\/24 cho t\u1ed1i \u0111a 4 k\u00eanh Kh\u00f4ng gi\u1edbi h\u1ea1n data khi truy\u1ec1n v\u1ec1 m\u00e1y ch\u1ee7 MobiCAM Kh\u00f4ng s\u1eed d\u1ee5ng d\u1ecbch v\u1ee5 l\u01b0u video l\u00ean m\u00e1y ch\u1ee7 ------------------------------- C\u01b0\u1edbc ph\u00ed: 70.000 vnd\/th\u00e1ng (ch\u01b0a bao g\u1ed3m VAT) Thanh to\u00e1n theo k\u1ef3 (12 th\u00e1ng) H\u1ea1n thanh to\u00e1n: tr\u01b0\u1edbc ng\u00e0y 28 c\u1ee7a th\u00e1ng cu\u1ed1i trong k\u1ef3.","cost":"70000","tichtruyen":"1","maxNum":"4"}
];   
var ngayluu = [
      {"value":"0","text":"Không lưu"},
      {"value":"1","text":"1 Ngày"},
      {"value":"2","text":"2 Ngày"},
      {"value":"3","text":"3 Ngày"},
      {"value":"7","text":"7 Ngày"},
      {"value":"30","text":"30 Ngày"},
      {"value":"365","text":"365 Ngày"}
]; 
var danhsachthietbi = [
      {"id":"93","serial":"2006000082","chn":"4"},
      {"id":"495","serial":"2101000100","chn":"4"},
      {"id":"644","serial":"2110000291","chn":"4"},
      {"id":"651","serial":"2110000296","chn":"4"},
      {"id":"778","serial":"2111000346","chn":"4"}
];

let dialog = {
	header: {
	title: "Thiết lập thông tin phương tiện"
},
      content: [
            {
                  tag: "input",
                  type: "text",
                  name: "fullname",
                  id: "fullname",
                  label: "Biển số phương tiện",
                  icon: "fa-paper-plane",
                  iconbg: 0,
                  rules: [
                        {
                              type: "required",
                              message: "Trường bắt buộc"
                        }
                  ],
            },
            {
                  tag: "select-muti",	
                  name: "licence_code",
                  id: "licence_code",
                  idModule: "licence_code_module",
                  label: "Loại phương tiện",
                  icon: "fa-paper-plane", //<i class="fa-solid fa-alarm-clock"></i>
                  iconbg: 1,
                  rules: [
                        {
                              type: "required",
                              message: "Trường bắt buộc"
                        }
                  ],
                  options:  [
                        {"value":"1","text":"Xe h\u01a1i","tcdb":"0"},
                        {"value":"2","text":"Xe t\u1ea3i","tcdb":"0"},
                        {"value":"4","text":"T\u00e0u \/ X\u00e0 lan","tcdb":"0"},
                        {"value":"6","text":"Xe bu\u00fdt","tcdb":"1"},
                        {"value":"10","text":"Validemo","tcdb":"0"},
                        {"value":"12","text":"Xe kh\u00e1ch 7 ch\u1ed7","tcdb":"0"},
                        {"value":"13","text":"Xe kh\u00e1ch 16 ch\u1ed7","tcdb":"1"},
                        {"value":"14","text":"Xe kh\u00e1ch 25 ch\u1ed7","tcdb":"1"},
                        {"value":"15","text":"Xe kh\u00e1ch 29 ch\u1ed7","tcdb":"1"},
                        {"value":"16","text":"Xe kh\u00e1ch 35 ch\u1ed7","tcdb":"1"},
                        {"value":"17","text":"Xe container","tcdb":"1"},
                        {"value":"18","text":"Xe kh\u00e1ch 39 ch\u1ed7","tcdb":"1"},
                        {"value":"21","text":"Xe kh\u00e1ch 44 ch\u1ed7","tcdb":"1"},
                        {"value":"22","text":"Xe kh\u00e1ch 45 ch\u1ed7","tcdb":"1"},
                        {"value":"23","text":"Xe kh\u00e1ch 47 ch\u1ed7","tcdb":"1"},
                        {"value":"24","text":"Xe kh\u00e1ch 50 ch\u1ed7","tcdb":"1"}
                  ]
            },
            {
                  tag: "input-check",
                  type: "checkbox",
                  id: "checkbox",
                  label: "Tích truyền dữ liệu hình ảnh về tổng cục đường bộ",
                  note: "Theo nghị định yêu cầu thông tin chính xác do đó cần chụp hình giấy đăng kiểm để xác minh sau khi tạo phương tiện",
                  rules: [{
                        type: "required",
                        message: "Trường bắt buộc"
                  }]
            },
            {
                  tag: "select",
                  name: "change_vehicle",
                  id: "change_vehicle",
                  idModule: "change_vehicle_module",
                  label: "Đội Phương tiện",
                  icon: "fa-fire", //<i class="fa-solid fa-fire"></i>
                  iconbg: 1,
                  rules: [
                        {
                              type: "required",
                              message: "Trường bắt buộc"
                        }
                  ],
                  options: [
                        {"value":"C","text":"Hạng C"},
                        {"value":"D","text":"Hạng D"},
                        {"value":"E","text":"Hạng E"},
                        {"value":"FB2","text":"Hạng FB2"},
                        {"value":"FC","text":"Hạng FC"},
                        {"value":"FD","text":"Hạng FD"},
                        {"value":"FE","text":"Hạng FE"},
                        {"value":"A","text":"Hạng A"},
                        {"value":"B","text":"Hạng B"}
                  ],
            },
            {
                  tag: "select",
                  name: "device_code",
                  id: "device_code",
                  idModule: "device_code_module",
                  icon: "fa-user-astronaut", //<i class="fa-solid fa-user-astronaut"></i>
                  iconbg: 1,
                  label: "Mã thiết bị",
                  rules: [
                        {
                              type: "required",
                              message: "Trường bắt buộc"
                        }
                  ],
                  options:[
                        {"value":"93","text":"2006000082","chn":"4"},
                        {"value":"495","text":"2101000100","chn":"4"},
                        {"value":"644","text":"2110000291","chn":"4"},
                        {"value":"651","text":"2110000296","chn":"4"},
                        {"value":"778","text":"2111000346","chn":"4"}
                  ]
            },
            {
                  tag: "input",
                  type: "date",
                  name: "registration_Date",
                  id: "registration_Date",
                  label: "Ngày đăng ký phương tiện",
                  icon: "fa-calendar-days", //<i class="fa-solid fa-calendar-days"></i>
                  rules: [
                        {
                              type: "required",
                              message: "Trường bắt buộc"
                        }
                  ],
            },
            {
                  tag: "select",
                  type: "select",
                  name: "server",
                  id: "server",
                  idModule: "server_module",
                  icon: "fa-bitcoin-sign", //<i class="fa-solid fa-bitcoin-sign"></i>
                  iconbg: 1,
                  label: "Gói máy chủ",
                  rules: [
                        {
                              type: "required",
                              message: "Trường bắt buộc"
                        }
                  ],
                  options: [
                        {"value":"22","content":"g\u00f3i ch\u1ec9 s\u1eed d\u1ee5ng cho vali demo", "text":"validemo"},
                        {"value":"34","content":" 960.000 \u0111 \/ N\u0103m \/ Thi\u1ebft b\u1ecb\r\n\r\n- Mi\u1ec5n ph\u00ed n\u0103m \u0111\u1ea7u\r\n- Ph\u00ed d\u1ecbch v\u1ee5 m\u00e1y ch\u1ee7: App, Web\r\n- Kh\u00f4ng l\u01b0u tr\u1eef tr\u00ean m\u00e1y ch\u1ee7", "text": "G\u00f3i kh\u00f4ng t\u00edch truy\u1ec1n"},
                        {"value":"35","content":"1.200.000 \u0111 \/ N\u0103m \/ Thi\u1ebft b\u1ecb\r\n\r\n- Mi\u1ec5n ph\u00ed n\u0103m \u0111\u1ea7u\r\n- Ph\u00ed d\u1ecbch v\u1ee5 m\u00e1y ch\u1ee7: App, Web\r\n- Ph\u00ed truy\u1ec1n h\u00ecnh \u1ea3nh: 2 k\u00eanh theo ngh\u1ecb \u0111\u1ecbnh\r\n- Ph\u00ed l\u01b0u tr\u1eef h\u00ecnh \u1ea3nh tr\u00ean m\u00e1y ch\u1ee7 30 ng\u00e0y cho 2 cam\r\n- Kh\u00f4ng bao g\u1ed3m sim data ( 295.000 \u0111 )", "text":"G\u00f3i t\u00edch truy\u1ec1n h\u00ecnh \u1ea3nh"},
                        {"value":"36","content":"G\u00f3i c\u01b0\u1edbc d\u00e0nh cho b\u00ean CP", "text":"G\u00f3i server CP"},
                        {
                              "value":"37",
                              "text":"G\u00f3i l\u01b0u 1 k\u00eanh",
                              "content":"G\u00f3i l\u01b0u video ti\u00eau chu\u1ea9n: \r\nPh\u00ed h\u00e0ng n\u0103m: 500.000\u0111\/1cam\r\n- Video \u0111\u01b0\u1ee3c l\u01b0u gi\u1eef \u0111\u1ebfn 7 ng\u00e0y\r\n- Ch\u1ea5t l\u01b0\u1ee3ng h\u00ecnh \u1ea3nh Online: \r\n(D1: 720x480pixel-FPS:10) "
                        },
                        {"value":"38","content":"ch\u01b0a c\u1eadp nh\u1eadt lu\u00f4n", "text":"G\u00f3i l\u01b0u 1 k\u00eanh"}
                  ],
            },
            {
                  tag: "textarea",
                  name: "textarea_none",
                  id: "textarea_none",		
            },
            {
                  tag: "select",
                  name: "subscription_package",
                  id: "subscription_package",
                  idModule: "subscription_package_module",
                  icon: "fa-bitcoin-sign", //<i class="fa-solid fa-bitcoin-sign"></i>
                  iconbg: 1,
                  label: "Gói thuê bao",
                  rules: [
                        {
                              type: "required",
                              message: "Trường bắt buộc"
                        }
                  ],
                  options: [
                        {"value":"0","text":"Kh\u00f4ng thu\u1ed9c MOBICAM",},
                        {"value":"1","text":"MDT150A"},
                        {"value":"2","text":"MC200A"},
                        {"value":"4","text":"MDT250A"},
                        {"value":"5","text":"MC150"},
                        {"value":"6","text":"SMC03"},
                        {"value":"7","text":"SMC02"},
                        {"value":"8","text":"SMC01"},
                        {"value":"9","text":"SMC04"}
                  ]        
            },
            {
                  tag: "select",
                  name: "serial_sim",
                  id: "serial_sim",
                  idModule: "serial_sim_module",
                  icon: "fa-camera-retro",
                  label: "Serial sim",
                  rules: [
                        {
                              type: "required",
                              message: "Trường bắt buộc"
                        }
                  ],
                  options: [
                        {"value":"0","text":"G\u00f3i Sim kh\u00f4ng thu\u1ed9c MOBICAM"},
                        {"value":"1","text":"G\u00f3i 150GB A - 150 GB"},
                        {"value":"2","text":"G\u00f3i 200.000 \u20ab - 300 GB"},
                        {"value":"4","text":"G\u00f3i 250.000 \u20ab - 4Gb"},
                        {"value":"5","text":"G\u00f3i 150.000 \u20ab - 150gb"},
                        {"value":"6","text":"Sim chuy\u00ean d\u1ee5ng cho Mobicam \r\nKh\u00f4ng gi\u1edbi h\u1ea1n data khi truy\u1ec1n v\u1ec1 m\u00e1y ch\u1ee7 MobiCAM\r\nGi\u00e1m s\u00e1t online 24\/24 cho 4CH \r\nH\u1ed7 tr\u1ee3 d\u1ecbch v\u1ee5 l\u01b0u tr\u1eef tr\u00ean m\u00e1y ch\u1ee7. \r\n-------------------------------\r\nC\u01b0\u1edbc ph\u00ed: 200.000 vnd\/th\u00e1ng (ch\u01b0a bao g\u1ed3m VAT) \r\nThanh to\u00e1n theo k\u1ef3 (12 th\u00e1ng)\r\nH\u1ea1n thanh to\u00e1n: tr\u01b0\u1edbc ng\u00e0y 28 c\u1ee7a th\u00e1ng cu\u1ed1i trong k\u1ef3. "},
                        {"value":"7","text":"Sim chuy\u00ean d\u1ee5ng cho Mobicam \r\nGi\u00e1m s\u00e1t online 24\/24 cho t\u1ed1i \u0111a 4CH \r\nKh\u00f4ng gi\u1edbi h\u1ea1n data khi truy\u1ec1n v\u1ec1 m\u00e1y ch\u1ee7 MobiCAM\r\nKh\u00f4ng s\u1eed d\u1ee5ng d\u1ecbch v\u1ee5 l\u01b0u video l\u00ean m\u00e1y ch\u1ee7 \r\n-------------------------------\r\nC\u01b0\u1edbc ph\u00ed: 90.000 vnd\/th\u00e1ng (ch\u01b0a bao g\u1ed3m VAT) \r\nThanh to\u00e1n theo k\u1ef3 (12 th\u00e1ng), \r\nH\u1ea1n thanh to\u00e1n: tr\u01b0\u1edbc ng\u00e0y 28 c\u1ee7a th\u00e1ng cu\u1ed1i trong k\u1ef3. "},
                        {"value":"8","text":"Sim chuy\u00ean d\u1ee5ng cho Mobicam \r\nGi\u00e1m s\u00e1t online 24\/24 cho t\u1ed1i \u0111a 2 k\u00eanh  \r\nKh\u00f4ng gi\u1edbi h\u1ea1n data khi truy\u1ec1n v\u1ec1 m\u00e1y ch\u1ee7 MobiCAM\r\nKh\u00f4ng s\u1eed d\u1ee5ng d\u1ecbch v\u1ee5 l\u01b0u video l\u00ean m\u00e1y ch\u1ee7 \r\n-------------------------------\r\nC\u01b0\u1edbc ph\u00ed: 50.000 vnd\/th\u00e1ng (ch\u01b0a bao g\u1ed3m VAT) \r\nThanh to\u00e1n theo k\u1ef3 (12 th\u00e1ng)\r\nH\u1ea1n thanh to\u00e1n: tr\u01b0\u1edbc ng\u00e0y 28 c\u1ee7a th\u00e1ng cu\u1ed1i trong k\u1ef3. "},
                        {"value":"9","text":"Sim chuy\u00ean d\u1ee5ng cho Mobicam Gi\u00e1m s\u00e1t online 24\/24 cho t\u1ed1i \u0111a 4 k\u00eanh Kh\u00f4ng gi\u1edbi h\u1ea1n data khi truy\u1ec1n v\u1ec1 m\u00e1y ch\u1ee7 MobiCAM Kh\u00f4ng s\u1eed d\u1ee5ng d\u1ecbch v\u1ee5 l\u01b0u video l\u00ean m\u00e1y ch\u1ee7 ------------------------------- C\u01b0\u1edbc ph\u00ed: 70.000 vnd\/th\u00e1ng (ch\u01b0a bao g\u1ed3m VAT) Thanh to\u00e1n theo k\u1ef3 (12 th\u00e1ng) H\u1ea1n thanh to\u00e1n: tr\u01b0\u1edbc ng\u00e0y 28 c\u1ee7a th\u00e1ng cu\u1ed1i trong k\u1ef3."}
                  ],
            },
            {
                  tag: "textarea",
                  name: "fullname",
                  id: "input_form",
                  label: "Gói sim không thuộc MOBICAM",
            },
            {
                  tag: "input",
                  type: "number",
                  name: "rank",
                  id: "number",
                  icon: "fa-video", //<i class="fa-solid fa-camera-security"></i>
                  iconbg: 1,
                  label: "Số lượng kênh",
                  rules: [
                        {
                              type: "required",
                              message: "Trường bắt buộc"
                        }
                  ],
            },
]}     

let moduleTile = document.getElementById('module-title').innerHTML = dialog.header.title;

dialog.content.map((item) => {
      const formDta = document.getElementById('form-data')
      const { tag, type, name, id, idModule, label, icon, rules, options, note } = item;
      let	NewRules = rules || [];
      formDta.innerHTML += `
            <div class="form__group ${ tag === 'input' ? 'type--input' : `${ tag === 'select-muti' ? 'type--select' : `${ tag === 'input-check' ? 'type--checkbox' : `${tag === 'select' ? 'type--selectcore' : `${ tag === 'textarea' ? 'type--textarea' : ''}` }` }`}` }">
                  ${
                        icon !== undefined ? `<div class="form__group--icon ${item.iconbg === 1 ? 'remove--bg': ''}">
                        <i class="fa-solid ${icon}"></i>
                    </div>` : ''
                  }
                  ${
                        tag === 'input' 
                        ? `<input class="form__group--input" type="${type}" placeholder="${label}" name="${name}" id="${id}">`
                        : `${ 
                              tag === 'select-muti' 
                              ? `<div class="form__group--select">
                              <div class="form__group--select--title" id="${id}">
                                  <span class="form__group--select--title--title">${label}</span>
                                  <i class="fa-solid fa-caret-down"></i>
                              </div>
                              <ul class="form__group--select--option" id="${idModule}">
                                  ${
                                        options.map((item) => `
                                        <li class="form__group--select--option--item">
                                          <span class="form__group--select--option--item--text">${item.text}</span>
                                          ${
                                                item.tcdb === '1' ? `<span class="form__group--select--option--item--tcdb">Xe theo nghị định</span>` : ''
                                          }
                                          </li>
                                        `).join('')
                                  }
                              </ul>
                          </div>` 
                          : ''
                        }`
                  }
                  ${
                        type === 'checkbox' 
                        ? `
                              <div class="form__group--checkbox">
                                    <input id="checkbox_id" class="form__group--checkbox--checkbox" type="${type}" placeholder="${label}" name="${name}">
                                    <span class="form__group--checkbox--title">${label}</span>
                              </div>
                              <div class="form__group--note">
                                    ${note}
                              </div>
                        ` 
                        : ``
                  }
                  ${
                        tag === 'select'
                        ? `<div class="form__group--select">
                              <div class="form__group--select--title" id="${id}">
                                  <span class="form__group--select--title--title">${label}</span>
                                  <i class="fa-solid fa-caret-down"></i>
                              </div>
                              <ul class="form__group--select--option" id="${idModule}">
                                  ${
                                        options.map((item) => `
                                        <li class="form__group--select--option--item">
                                          <span class="form__group--select--option--item--text select--text--span">${item.text}</span>
                                          <span class="form__group--select--option--item--content" style="display: none">${item.content}</span>   
                                          </li>
                                        `).join('')
                                  }
                              </ul>
                          </div>` 
                          : ''
                  }
                  ${
                        tag === 'textarea'
                        ? label === "Gói sim không thuộc MOBICAM" 
                        ? `
                              <div class="form__group--textarea">
                                    <textarea class="form__group--textarea--textarea" id="textarea_srs" placeholder="${label !== undefined ? label : ''}"></textarea>
                              </div>
                        ` : `
                              <div class="form__group--textarea">
                                    <textarea class="form__group--textarea--textarea" id="textarea_gmc" placeholder="${label !== undefined ? label : ''}"></textarea>
                              </div>
                        ` 
                        : ''
                  }
                  ${
                        NewRules.map(item => item.type === 'required' ? `<span class="form__group--error" style="color: red">*</span>` : '').join('')
                  }
            </div>
      `;
})

// function toggle
function handleClickToggle(core, module) {
      core.addEventListener('click', () => {
            module.classList.toggle('form__group--select--active');
      })
}
function handleClickActiveTitle(head, title, module){
      head.forEach(item => {
            item.addEventListener('click', () => {
                  title.innerHTML = item.innerHTML;
                  module.classList.remove('form__group--select--active');
            })
      })
}

function handleClickActiveTitleTelex(head, telex, module, title){
      head.forEach(item => {
            item.addEventListener('click', () => {
                  let textTexxt = item.children[0].innerHTML;
                  let contentText = item.children[1].innerHTML;
                  title.innerHTML = textTexxt
                  telex.innerHTML = contentText;
                  module.classList.remove('form__group--select--active');
            })
      })
}
// select
let selectOneMain = document.getElementById('licence_code');
let selectOneModule = document.getElementById('licence_code_module');
let selectOneModuleItem = document.querySelectorAll('.type--select .form__group--select .form__group--select--option .form__group--select--option--item');
let selectOneTitle = document.querySelector('.type--select .form__group--select--title .form__group--select--title--title');
let checknot = document.querySelector('#checkbox_id');

handleClickToggle(selectOneMain, selectOneModule);
selectOneModuleItem.forEach(item => {
      let itemText = item.querySelector('.form__group--select--option--item--tcdb');
      item.addEventListener('click', () => {
            selectOneTitle.innerHTML = item.innerHTML;
            selectOneModule.classList.remove('form__group--select--active');
            if(itemText === null) {
                  checknot.style.pointerEvents = "none";
                  checknot.checked = false;
                  checknot.removeAttribute('checked');
            } else {
                  checknot.style.pointerEvents = "initial";
            }
      })
})

let selectTwoMain = document.getElementById('change_vehicle');
let selectTwoModule = document.getElementById('change_vehicle_module');
let selectTwoModuleItem = document.querySelectorAll('.type--selectcore .form__group--select #change_vehicle_module .form__group--select--option--item')
let selectTwoTitle = document.querySelector('.type--selectcore .form__group--select #change_vehicle .form__group--select--title--title');
handleClickToggle(selectTwoMain, selectTwoModule);
handleClickActiveTitle(selectTwoModuleItem, selectTwoTitle, selectTwoModule);


let selectThreeMain = document.getElementById('device_code');
let selectThreeModule = document.getElementById('device_code_module');
let selectThreeModuleItem = document.querySelectorAll('.type--selectcore .form__group--select #device_code_module .form__group--select--option--item')
let selectThreeTitle = document.querySelector('.type--selectcore .form__group--select #device_code .form__group--select--title--title');

handleClickToggle(selectThreeMain, selectThreeModule);
handleClickActiveTitle(selectThreeModuleItem, selectThreeTitle, selectThreeModule);

let selectFourMain = document.getElementById('server');
let selectFourModule = document.getElementById('server_module');
let selectFourModuleItem = document.querySelectorAll('.type--selectcore .form__group--select #server_module .form__group--select--option--item');
let selectFourText = document.querySelector('#textarea_gmc');
let selectFourTitle = document.querySelector('.type--selectcore .form__group--select #server .form__group--select--title--title')

handleClickToggle(selectFourMain, selectFourModule);
handleClickActiveTitleTelex(selectFourModuleItem, selectFourText, selectFourModule, selectFourTitle);

// subscription_package_module
let selectFiveMain = document.getElementById('subscription_package');
let selectFiveModule = document.getElementById('subscription_package_module');
let selectFiveModuleItem = document.querySelectorAll('.type--selectcore .form__group--select #subscription_package_module .form__group--select--option--item')
let selectFiveTitle = document.querySelector('.type--selectcore .form__group--select #subscription_package .form__group--select--title--title');

handleClickToggle(selectFiveMain, selectFiveModule);
handleClickActiveTitle(selectFiveModuleItem, selectFiveTitle, selectFiveModule);

// serial_sim_module
let selectSixMain = document.getElementById('serial_sim');
let selectSixModule = document.getElementById('serial_sim_module');
let selectSixModuleItem = document.querySelectorAll('.type--selectcore .form__group--select #serial_sim_module .form__group--select--option--item .form__group--select--option--item--text')
let selectSixTitle = document.querySelector('#textarea_srs');

handleClickToggle(selectSixMain, selectSixModule);
handleClickActiveTitleTelexOne(selectSixModuleItem, selectSixTitle, selectSixModule);
function handleClickActiveTitleTelexOne(head, telex, module){
      head.forEach(item => {
            item.addEventListener('click', () => {
                  telex.innerHTML = item.innerHTML;
                  module.classList.remove('form__group--select--active');
            })
      })
}

// Open module
let OpenModule = document.getElementById('open__module');
let ModuleActive = document.getElementById('active__module')
let CloseModule = document.getElementById('close__module');

let OpenModuleData = document.getElementById('addtx');
let ModuleActiveData = document.getElementById('active__formdata')
let CloseModuleData = document.getElementById('close__moduledata');

OpenModuleData.addEventListener('click', () => {
      ModuleActiveData.classList.add('active');
})
CloseModuleData.addEventListener('click', () => {
      ModuleActiveData.classList.remove('active');
})
OpenModule.addEventListener('click', () => {
      ModuleActive.classList.add('active');
})
CloseModule.addEventListener('click', () => {
      ModuleActive.classList.remove('active');
})


// validation

function handleSubmitValidate() {
      return alert("Nhập tất cả trường có dấu *");
}
let Submit = document.getElementById('submit');
Submit.addEventListener('click', () => {
      let checkFullName = document.getElementById('fullname');
      let checkLpt = document.querySelector('#licence_code .form__group--select--title--title');
      let checkDpt = document.querySelector('#change_vehicle .form__group--select--title--title');
      let checkMtb = document.querySelector('#device_code .form__group--select--title--title');
      let checkDate = document.getElementById('registration_Date');
      let checkGmc = document.querySelector('#server .form__group--select--title--title');
      let checkGtb = document.querySelector('#subscription_package .form__group--select--title--title');
      let checkSs = document.querySelector('#textarea_srs');
      let checkNumber = document.getElementById('number');
      checkFullName.value === '' 
      || checkLpt.innerHTML === 'Loại phương tiện' 
      || checkDpt.innerHTML === 'Đội Phương tiện' 
      || checkMtb.innerHTML === 'Mã thiết bị' 
      || checkDate.value === '' 
      || checkGmc.innerHTML === 'Gói máy chủ'
      || checkGtb.innerHTML === 'Gói thuê bao'
      || checkSs.value === ''
      || checkNumber.value === ''
      ? handleSubmitValidate() : alert('Đã nhập thành công');
})