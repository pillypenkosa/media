//console.log( '' );









class ComponentMenu {





/*
	static menu = [

		{ id: 'sex1', title: 'Чоловіки', },
		{ id: 'sex0', title: 'Жінки', },

	];

*/


	static html( win ) {


		//Router.win = id;


		//alert( win );
		//alert( Router.url.win );

		if ( win != Router.url.win ) {
			Router.resetUrl( win );
		}



		let htmlMenu = '';

		if ( win == 'users' ) {

			htmlMenu += `<section>
				<div class="btn" onclick="ComponentMenu.clc( 'users', 'men' )">Чоловіки</div>
				<div class="btn" onclick="ComponentMenu.clc( 'users', 'women' )">Жінки</div>
				<div class="btn" onclick="ComponentMenu.clc( 'users', 'child' )">Діти</div>
			</section>
			`;



			arrPeopleHash.forEach( k => {
				htmlMenu += `<div class="btn" onclick="ComponentMenu.clc( '${ win }', '${ k.id }' )">${ k.title }</div>`;
			});
		}

		if ( win == 'films' ) {
			//alert( 'Ага, кіно, кіно...' );

			htmlMenu += `<section>
				<div class="btn" onclick="ComponentMenu.clc( 'films', 'boevik' )">Бойовик</div>
				<div class="btn" onclick="ComponentMenu.clc( 'films', 'triller' )">Трилер</div>
				<div class="btn" onclick="ComponentMenu.clc( 'films', 'comedy' )">Комедія</div>
			</section>
			`;




		}


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




	static clc( win, key ) {
		//alert( 'ComponentMenu.clc( ' + txt + ', ' + id + ' )' );



		//alert( txt );

		//Router.urlParams.win = txt;
		//Router.win = txt;
		//Router.urlParams[ id ] = !Router.urlParams[ id ];
		

		Router.link( win, key );





		return;







		//history - встроенный объект, не трогать!!!
		if ( history.pushState ) {

			let url = '';

			for ( let k in Router.urlParams ) {

				url += k + '/';

			}


			


			history.pushState( null, null, '#' + url );
		
			//this.loadContent();
		}


		console.log( Router.urlParams );







	}





}











