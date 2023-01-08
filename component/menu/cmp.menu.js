//console.log( '' );









class ComponentMenu {


	static menu = [

		{ id: 'sex1', title: 'Чоловіки', },
		{ id: 'sex0', title: 'Жінки', },

	];




	static html() {


		let htmlMenu = '';
		this.menu.forEach( k => {

			htmlMenu += `<div class="btn">${ k.title }</div>`;

		});



		//console.log( window.location );






		return getComponentHtml({ tag: 'menu', 
			param: [
				//{ k: 'class' 		, v: 'active' 					, },
				//{ k: 'name' 		, v: 'Имя Розы' 				, },
				//{ k: 'title' 		, v: 'Всплывающая подсказка' 	, },
				//{ k: 'data-id' 		, v: 'any-data' 				, },
				//{ k: 'onclick' 		, v: `${ f }( ${ arg } )` 		, },
				//{ k: 'selected' 	, v: '' 						, },
				//{ k: 'defer' 		, v: '' 						, },
			], 
			innerHTML: htmlMenu,



		});
	}










}











