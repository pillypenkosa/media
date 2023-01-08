class Router {






	static loadApp() {

		console.log( 'Router.loadApp()' );
		document.querySelectorAll( 'cmp-app' )[ 0 ].innerHTML = ComponentHeader.html() + ComponentMiddle.html(); 
		this.loadContent();
	}




	static loadContent() {

		console.log( 'Router.loadContent()' );

		//str.slice( 1 );
		//console.log( window.location.hash );
		//let contentHtml = ComponentErr404.html();
		let contentHtml = '';

		if ( window.location.hash ) {
		
			let url = window.location.hash.slice( 1 ).split('/');

			//alert();

			if ( routes[ url[ 0 ] ] ) {

				//alert( url[ 0 ] );

				// подсветка кнопок в aside
				btnLight( 'cmp-aside', url[ 0 ] );

				contentHtml = eval( routes[ url[ 0 ] ] + '.html()' );
			}

			else {

				// подсветка кнопки Error ( в других проектах ее скорее всего не будет, поэтому в этом случае не будет и подсветки никаких кнопок )
				btnLight( 'cmp-aside', 'err404' );

				contentHtml = ComponentErr404.html();
			}
		} 
		else {
			// подсветка кнопки Головна
			btnLight( 'cmp-aside', 'index' );

			contentHtml = ComponentIndex.html();
		}

		document.getElementById( 'content' ).innerHTML = contentHtml;
	}










	static link( txt ) {

		//history - встроенный объект, не трогать!!!
		if ( history.pushState ) {
			history.pushState( null, null, window.location.protocol + "//" + window.location.host + window.location.pathname + '#' + txt );
		
			this.loadContent();
		}
	}






}








