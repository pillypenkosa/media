class Router {




	//static win = '';
	//static urlParams = {};



	static url = { 
		win: 'index', 
		keys: {}, 
	};





	static resetUrl( win ) {
		this.url = { win: '', keys: {}, };
	}



	static loadApp() {


		if ( !window.location.hash ) {

			if ( history.pushState )
				history.pushState( null, null, '#' + this.url.win );
		} 

		//console.log( window.location.hash );
		//console.log( 'Router.loadApp()' );
		document.querySelectorAll( 'cmp-app' )[ 0 ].innerHTML = ComponentHeader.html() + ComponentMiddle.html(); 
		this.loadContent();
	}









	static loadContent() {


		//console.log( 'window.location.hash: ', window.location.hash );

















		let hash = '';
		//if ( window.location.hash.slice( 0, 1 ) == '#' && window.location.hash.slice( -1 ) == '/' ) 
		if ( window.location.hash.slice( 0, 1 ) == '#' ) 
			hash = window.location.hash.slice( 1 );

		//console.log( 'hash: ', hash );


		let arr = hash.split( '/' );


		//console.log( 'arr: ', arr );
		//console.log( 'arr[ 0 ]: ', arr[ 0 ] );


		let win = arr[ 0 ];

		arr.shift();

		//console.log( 'win: ', win );
		//console.log( 'arr: ', arr );

		arr.forEach( k => {
			this.url.keys[ k ] = true;
		});


		//console.log( 'this.url: ', this.url );


		

		//document.getElementById( 'content' ).innerHTML = eval( 'ComponentWin' + win.slice( 0, 1 ).toUpperCase() + win.slice( 1 ) + '.html( arr )' );



















		// сделать блок Меню уже "прорисованым" в DOMе !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
		this.lightActiveBtn();



		if ( win == 'index' ) 
			document.getElementById( 'content' ).innerHTML = ComponentWinIndex.html();

		if ( win == 'users' ) 
			document.getElementById( 'content' ).innerHTML = ComponentWinUsers.html( arr );





		//console.log( win.slice( 0, 1 ).toUpperCase() + win.slice( 1 ) );

	}








	static link( key ) {

		//alert( Router.win );

		//console.log( 'win: ', win );
		//console.log( 'key: ', key );

		//console.log( 'this.urlParams: ', this.urlParams );








		if ( key == 'men' || key == 'women' ) {

			if ( key == 'men' ) {
				if ( this.url.keys.men )
					delete this.url.keys.men;
				else this.url.keys.men = true;

				if ( this.url.keys.women )
					delete this.url.keys.women;
			}

			if ( key == 'women' ) {
				if ( this.url.keys.women )
					delete this.url.keys.women;
				else this.url.keys.women = true;

				if ( this.url.keys.men ) 
					delete this.url.keys.men;
			}

		} else {

			if ( this.url.keys[ key ] ) {
				delete this.url.keys[ key ];
			} else this.url.keys[ key ] = true;
		}



		let hash = '';
		for ( let k in this.url.keys ) {
			hash += '/' + k;
		}

		//console.log( 'hash: ', hash );





		if ( history.pushState ) {
			history.pushState( null, null, window.location.protocol + "//" + window.location.host + window.location.pathname + '#users' + hash );
			this.loadContent();
		}
	}









	// підсвічування активних кнопок
	static lightActiveBtn() {


		let arr = document.querySelectorAll( 'cmp-menu .btn ' );


		console.log( arr );
		console.log( this.url.keys );

/*
		arr.forEach( k => {
			if ( k.dataset.id == id ) 
				k.classList.add( 'active' );
			else 
				k.classList.remove( 'active' );
		});
*/


	}















}








