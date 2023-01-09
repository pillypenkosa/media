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




		

		//document.getElementById( 'content' ).innerHTML = eval( 'ComponentWin' + win.slice( 0, 1 ).toUpperCase() + win.slice( 1 ) + '.html( arr )' );


		if ( win == 'index' ) 
			document.getElementById( 'content' ).innerHTML = ComponentWinIndex.html();

		if ( win == 'users' ) 
			document.getElementById( 'content' ).innerHTML = ComponentWinUsers.html( arr );

		if ( win == 'films' ) 
			document.getElementById( 'content' ).innerHTML = ComponentWinFilms.html( arr );





		//console.log( win.slice( 0, 1 ).toUpperCase() + win.slice( 1 ) );






		return;


		//console.log( 'this.win:', this.win );
		//console.log( 'urlParams', this.urlParams );


		//console.log( window.location.hash );








		//let arr = hash.split( '/' );

		//console.log( arr );



		arr.forEach( k => {
			this.urlParams[ k ] = true;
		});

		//console.log( this.urlParams );


		/*


		arr.forEach( k => {
			if ( k )
				this.urlParams[ k ] = true;
		});

*/
		//console.log( this.urlParams );








		//document.getElementById( 'content' ).innerHTML = ComponentIndex.html();

	}








	static link( win, key ) {

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
			history.pushState( null, null, window.location.protocol + "//" + window.location.host + window.location.pathname + '#' + win + hash );
			this.loadContent();
		}
	}























}








