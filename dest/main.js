let dialogData = {
	header: {
		title: "Thêm tài xế"
	},
	content: [
		{
			tag: "input",
			type: "hidden",
			name: "merchant_id",
			// disabled: true,
			id: "merchant_id"
		},
		{
			tag: "input",
			type: "text",
			name: "fullname",
			id: "fullname",
			label: "Tên tài xế",
			icon: "fa-user",
			rules: [
				{
					type: "required",
					message: "Trường bắt buộc"
				}
			],
		},
		{
			tag: "input",
			type: "number",
			name: "licence_code",
			id: "licence_code",
			label: "Bằng lái phương tiện",
			icon: "fa-id-card",
			rules: [
				{
					type: "required",
					message: "Trường bắt buộc"
				}
			],
		},
		{
			tag: "input",
			type: "date",
			name: "end_date",
			id: "end_date",
			label: "Ngày hết hạn bằng lái [ tháng/ngày/năm ]",
			icon: "fa-calendar-days",
			rules: [{
				type: "required",
				message: "Trường bắt buộc"
			}]
		},
		{
			tag: "select-multi",
			name: "rank",
			id: "rank",
            idModule: "rank_module",
			label: "Hạng bằng lái [ có thể chọn nhiều ]",
			// rules: [
			// 	{
			// 		type: "required",
			// 		message: "Trường bắt buộc"
			// 	}
			// ],
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
			tag: "input",
			type: "file",
			upload: "image/*",
			name: "licence_code_image",
			id: "licence_code_image",
			label: "Hình chụp bằng lái phương tiện [ Mặt trước ]",
			icon: "fa-image",
			note: "[ Hình chụp bằng lái sẽ được dùng để xác minh	 tài xế ]",
			// rules: [
			// 	{
			// 		type: "required",
			// 		message: "Trường bắt buộc"
			// 	}
			// ],
		},
		{
			tag: "input",
			type: "hidden",
			name: "licence_code_image_url",
			// disabled: true,
			id: "licence_code_image_url"
		},
		{
			tag: "input",
			type: "number",
			name: "verify_code",
			id: "verify_code",
			label: "Số CMND/CCCD [ Nếu có ]",
			icon: "fa-id-card",
			// rules: [
			// 	{
			// 		type: "required",
			// 		message: "Trường bắt buộc"
			// 	}
			// ],
		},
		{
			tag: "input",
			// type: "file",
			type: "hidden",
			upload: "image/*",
			name: "verify_code_image",
			id: "verify_code_image",
			label: "Hình chụp CMND/CCCD [ Mặt trước nếu có ]",
			icon: "fa-image",
			
			// rules: [
			// 	{
			// 		type: "required",
			// 		message: "Trường bắt buộc"
			// 	}
			// ],
		},
		{
			tag: "input",
			type: "hidden",
			name: "verify_code_image_url",
			// disabled: true,
			id: "verify_code_image_url"
		},
		{
			tag: "input",
			type: "number",
			name: "phone",
			id: "phone",
			label: "Số điện thoại",
			icon: "fa-phone",
			rules: [
				{
					type: "required",
					message: "Trường bắt buộc"
				}
			],
		},
		{
			tag: "select",
			name: "vehicle",
			id: "vehicle",
            idModule: "vehicle_module",
			label: "Phương tiện làm việc",
			icon: "fa-paper-plane",
			rules: [
				{
					type: "required",
					message: "Trường bắt buộc"
				}
			],
			note: "Những xe tích truyền hình ảnh về Tổng Cục Đường Bộ yêu cầu tài xế và xe phải được xác minh mới được gán thông tin với nhau",
			options: [
				{"value":"Phương tiện làm việc","text":"Phương tiện làm việc"},
			],
		}
	]
}

let DataTitle = document.getElementById("data__title").innerHTML = dialogData.header.title;


dialogData.content.map((item) => {
	let FormData = document.getElementById('form-data-active');
	let { label, tag, type, id, icon, rules, name, options, note } = item;
	let	NewRules = rules || [];
	let	NewOption = options || [];

	if(label !== undefined) {
		FormData.innerHTML += `
		<div class="form__group ${ tag === 'input' ? 'type--input' : tag === 'select-multi' ? 'type--selectcore' : tag === 'select' ? 'type--select' : '' }">
            ${
                icon !== undefined ? `<div class="form__group--icon">
                    <i class="fa-solid ${icon}"></i>
                </div>` : ''
            }
            ${
                tag === 'input' 
                ? `<input class="form__group--input" type="${type}" placeholder="${label}" name="${name}" id="${id}">`
                : tag === 'select-multi'
                ? `<div class="form__group--select">
                        <div class="form__group--select--title" id="${id}">
                            <span class="form__group--select--title--title">${label}</span>
                            <i class="fa-solid fa-caret-down"></i>
                        </div>
                        <ul class="form__group--select--option" id="${item.idModule}">
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
            }
            ${
                tag === 'select' 
                ? `<div class="form__group--select">
                        <div class="form__group--select--title" id="${id}">
                            <span class="form__group--select--title--title">${label}</span>
                            <i class="fa-solid fa-caret-down"></i>
                        </div>
                        <ul class="form__group--select--option" id="${item.idModule}">
                            ${
                                options.map((item) => {
                                    let { value, text, tcdb } = item;
                                    return `
                                    <li class="form__group--select--option--item">
                                        <span class="form__group--select--option--item--text">${text}</span>
                                        ${
                                            tcdb === '1' ? `<span class="form__group--select--option--item--tcdb">Xe theo nghị định</span>` : ''
                                        }
                                    </li>
                                `
                                })
                            }
                        </ul>
                    </div>` : ''
            }
		</div>
		`;
	}
});

let selectRankMain = document.getElementById('rank');
let selectRankModule = document.getElementById('rank_module');
let selectRankModuleItem = document.querySelectorAll('.type--selectcore .form__group--select #rank_module .form__group--select--option--item')
let selectRankTitle = document.querySelector('.type--selectcore .form__group--select #rank .form__group--select--title--title');

selectRankMain.addEventListener('click', () => {
    selectRankModule.classList.toggle('form__group--select--active');
})
selectRankModuleItem.forEach(item => {
    item.addEventListener('click', () => {
        selectRankTitle.innerHTML = item.innerHTML;
        selectRankModule.classList.remove('form__group--select--active');
    })
})
let selectVehicleMain = document.getElementById('vehicle');
let selectVehicleModule = document.getElementById('vehicle_module');
let selectVehicleModuleItem = document.querySelectorAll('.type--select .form__group--select #vehicle_module .form__group--select--option--item')
let selectVehicleTitle = document.querySelector('.type--select .form__group--select #vehicle .form__group--select--title--title');

selectVehicleMain.addEventListener('click', () => {
    selectVehicleModule.classList.toggle('form__group--select--active');
})
selectVehicleModuleItem.forEach(item => {
    item.addEventListener('click', () => {
        selectVehicleTitle.innerHTML = item.innerHTML;
        selectVehicleModule.classList.remove('form__group--select--active');
    })
})

console.log(dialogData)