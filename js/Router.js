class Router {

	static name = 'Router';


/*
	static url = { 

		win 		: '' 	, // сторінка 
		sex 		: '' 	, // фільтр користувачів за статтю
		country 	: '' 	, // країна
		hash		: '' 	, // хеш-теги користувачів
	};
*/


	static userHash = {};

	static urlGET = {};








	static loadApp() {

		const name 		= 'loadApp';
		const method 	= `${ this.name }.${ name }()`;
		const ok 		= `\x1b[32m ok ${ method } `;
		const err 		= `\x1b[31m err ${ method } `;

		//console.log( ok, 'завантаження застосування...' );
		//console.log( '\x1b[32m ok Router.loadApp() завантаження застосування...');


		if ( !window.location.search ) {

			if ( history.pushState )
				history.pushState( null, null, '?win=index' );
		}


		this.ini();


		//document.querySelectorAll( 'cmp-app' )[ 0 ].innerHTML = Component( 'Any-Header' ); 
		document.querySelectorAll( 'cmp-app' )[ 0 ].innerHTML = Component( 'Header' ) + Component( 'Middle' ); 

		// подсветка меню
		ComponentMenu.activeLight();

		// загрузка контентк
		this.loadContent();
	}



	// ініціалізація
	static ini() {

		this.urlGET = this.parseURL();

		//console.log( 'this.urlGET:', this.urlGET );

		if ( this.urlGET.hash ) 
			this.userHash = this.getHashGET( this.urlGET.hash );
	}










	static loadContent() { // txt - win

		const name 		= 'loadContent';
		const method 	= `${ this.name }.${ name }()`;
		const ok 		= `\x1b[32m ok ${ method } `;
		const err 		= `\x1b[31m err ${ method } `;

		//console.log( ok ); 




		//console.log( ok, 'this.urlGET:', this.urlGET );
		

		let html = '';
		if ( this.urlGET.win ) {

			//console.log( ok + 'this.urlGET:', this.urlGET ); 
			//console.log( ok + 'ROUTES:', ROUTES  );

			if ( ROUTES[ this.urlGET.win ] ) {

				//формування розмітки конкретного компоненту
				html = Component( ROUTES[ this.urlGET.win ] );

			} else {
				//console.log( err + 'немає маршруту за цим win:', this.urlGET.win );
				html = Component( 'Err404' );
			}

		} else {
			//console.log( err + 'немає win:', this.urlGET.win );
			html = Component( 'Err404' );
		}


		//console.log( ok, 'this.urlGET:', this.urlGET );
		//console.log( ok, 'this.userHash:', this.userHash );


		document.getElementById( 'content' ).innerHTML = html;
	}






	static parseURL() {		

		const name 		= 'parseURL';
		const method 	= `${ this.name }.${ name }()`;
		const ok 		= `\x1b[32m ok ${ method } `;
		const err 		= `\x1b[31m err ${ method } `;


		let urlGET = {};


		//let getParam = {};

		//console.log( 'Router.parseURL()'  );
		//console.log( 'Router.parseURL() - window.location.search:', window.location.search ); 

		//let win = '';

		if ( window.location.search ) {

			//console.log( ok + 'є якийсь window.location.search:', window.location.search  ); 

			let arr = window.location.search.split( '?' );

			if ( arr[ 1 ] ) {

				//console.log( ok + 'є рядок window.location.search після знаку ?:', arr[ 1 ]  ); 
				//console.log( 'Router.parseURL() - є якийсь GET-запит...' ); 

				let arr2 = arr[ 1 ].split( '&' );

				if ( arr2 ) {

					//console.log( ok + 'є якісь рядки-елементи, розділені знаком &:', arr2 ); 
					//console.log( 'Router.parseURL() - arr2[]', arr2 ); 

					arr2.forEach( k => {
						let arr3 = k.split( '=' );

						if ( arr3[ 0 ] ) {

							//console.log( ok + 'arr3 має ключ-назву GET-параметру:', arr3[ 0 ] ); 

							if ( arr3[ 1 ] ) {
								//console.log( ok + 'рядок arr3 має значення GET-параметру', arr3 ); 

								urlGET[ arr3[ 0 ] ] = arr3[ 1 ];

							} else {
								console.log( err + 'один з рядків немає значення GET-параметру // можливо відсутні символи \'=\' для split(\'=\'), arr3:', arr3,', arr3[1]:', arr3[ 1 ] ); 

							}

						} else {
							// ніколи не має виконатись
							console.log( err + 'arr3 немає рядків', arr3 ); 
						}
					});

				} else {
					// ніколи не має виконатись
					console.log( err + 'не має ніяких елементів:', arr2 ); 
				} 

			} else {
				// ніколи не має виконатись
				console.log( err + 'немає ніяких GET-запитів...' ); 
			}

		} else {
			// ніколи не має виконатись
			console.log( err + 'немає ніяких запитів...' ); 
		}

		return urlGET;
	}



	// отримати hash з GET-параметру &hash=
	static getHashGET( txt ) {
		let arr = txt.split( '/' );

		let obj = {};

		arr.forEach( k => {
			obj[ k ] = 1;
		});

		return obj;
	}



	static link( elem ) {


		let name = 'parseURL';
		let ok = `\x1b[32m ok ${ this.name }.${ name }() `;
		let err = `\x1b[31m err ${ this.name }.${ name }() `;

		//console.log( ok );

	}





	static clcHashTag( elem ) {
		const name 		= 'clcHashTag';
		const method 	= `${ this.name }.${ name }()`;
		const ok 		= `\x1b[32m ok ${ method } `;
		const err 		= `\x1b[31m err ${ method } `;



		//console.log( ok + 'elem.dataset.id:', elem.dataset.id  ); 


		//console.log( ok + 'this.urlGET:', this.urlGET  ); 

		// скинути країну
		delete this.urlGET.country;


		let country = '';
		//let country = this.urlGET.country ? '&country=' +  this.urlGET.country : '';

		if ( this.urlGET.country ) {
			if ( this.urlGET.country != 'all' ) {
				country = '&country=' + this.urlGET.country;
			}
		}




		if ( history.pushState )
			history.pushState( null, null, '?win=people' + country + '&hash=' + elem.dataset.id );



		this.ini();

		// подсветка меню
		ComponentMenu.activeLight();

		// загрузка контентк
		this.loadContent();
	}








	// клік по хеш-тегу країни
	static clcHashCountry( elem ) {
		const name 		= 'clcHashCountry';
		const method 	= `${ this.name }.${ name }()`;
		const ok 		= `\x1b[32m ok ${ method } `;
		const err 		= `\x1b[31m err ${ method } `;


		// скинути хеш-теги
		this.userHash = {};


		//console.log( elem.dataset.id );

		if ( history.pushState )
			history.pushState( null, null, '?win=people&country=' + elem.dataset.id );

		this.ini();

		//console.log( ok + 'this.urlGET:', this.urlGET  ); 
		//console.log( ok + 'this.userHash:', this.userHash  ); 


		// подсветка меню
		ComponentMenu.activeLight();

		// загрузка контентк
		this.loadContent();
	}









}








