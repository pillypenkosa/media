//console.log( '' );









class ComponentHeader {



	static tfMenuPeople = false;
	static tfMenuFilms = false;




	static html() {

		//console.log( window.location );



		return getComponentHtml({ tag: 'header', 
			param: [
				//{ k: 'class' 		, v: 'active' 					, },
				//{ k: 'name' 		, v: 'Имя Розы' 				, },
				//{ k: 'title' 		, v: 'Всплывающая подсказка' 	, },
				//{ k: 'data-id' 		, v: 'any-data' 				, },
				//{ k: 'onclick' 		, v: `${ f }( ${ arg } )` 		, },
				//{ k: 'selected' 	, v: '' 						, },
				//{ k: 'defer' 		, v: '' 						, },
			], 
			innerHTML: `
				<div class="head">
					<div class="title">${ appProjectName }</div>
					<div>
						<div class="btn-menu" onclick="ComponentHeader.clc( 'films' )">#</div>
						<div class="btn-menu" onclick="ComponentHeader.clc( 'users' )">@</div>
					</div>
				</div>
				<div class="version">Version: ${ appVersion }</div>
				<div class="menu"></div>
			`,
		});
	}



	static clc( id ) {

		//alert( id );


		//Router.win = id;


		//Router.urlParams[ 'win_' + id  ] = true;




		let divMenu = document.querySelectorAll( 'cmp-header .menu' )[ 0 ];
		if ( id == 'films' ) {

			this.tfMenuPeople = false;
			this.tfMenuFilms = !this.tfMenuFilms;

			if ( this.tfMenuFilms ) {
				divMenu.innerHTML = ComponentMenu.html( 'films' );

			} else divMenu.innerHTML = '';
		}

		if ( id == 'users' ) {

			this.tfMenuFilms = false;
			this.tfMenuPeople = !this.tfMenuPeople;

			if ( this.tfMenuPeople ) {
				divMenu.innerHTML = ComponentMenu.html( 'users' );;

			} else divMenu.innerHTML = '';
		}

		//console.log( 'this.tfMenuFilms ', this.tfMenuFilms );
		//console.log( 'this.tfMenuPeople ', this.tfMenuPeople );
//

	}








}











