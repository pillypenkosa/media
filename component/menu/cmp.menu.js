//console.log( '' );









class ComponentMenu {





/*
	static menu = [

		{ id: 'sex1', title: 'Чоловіки', },
		{ id: 'sex0', title: 'Жінки', },

	];

*/


	static html() {


		//Router.win = id;


		//alert( win );
		//alert( Router.url.win );
/*
		if ( win != Router.url.win ) {
			Router.resetUrl( win );
		}
*/



		const arrMenu1 = [
			{ id: 'men' 	, title: 'Чоловіки' 	, },
			{ id: 'women' 	, title: 'Жінки' 		, },
			{ id: 'child' 	, title: 'Діти' 		, },
		];


		let htmlBtns = '';
		arrMenu1.forEach( k => {
			htmlBtns += this.getHtmlBtn( k.id, k.title );
		});

		arrPeopleHash.forEach( k => {
			htmlBtns += this.getHtmlBtn( k.id, k.title );
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
			innerHTML: `<section>${ htmlBtns }</section>`,
		});
	}



	static clc( elem ) {
		//alert( 'ComponentMenu.clc( ' + txt + ', ' + id + ' )' );

		//alert( txt );
		//Router.urlParams.win = txt;
		//Router.win = txt;
		//Router.urlParams[ id ] = !Router.urlParams[ id ];
		
		Router.link( elem.dataset.id );
	}



	static getHtmlBtn( id, title ) {
		return `<div class="btn" data-id="${ id }" onclick="ComponentMenu.clc( this )">${ title }</div>`;
	}



	static getActive222( txt ) {

			//return 'active';


		//console.log( txt );
		//console.log( Router.url.keys );


/*
		if ( Router.url.keys[ txt ] )
			return 'active';

		return '';
*/



	}








}











