//console.log( '' );



class ComponentEachUser {

	//static name = 'Win-Index';


	static className = '';

	static paramAttr = [];

	static arrArgs = []; 


	static user = {};





	static html( className, tagName, data ) {

		this.className = className;
		
		this.paramAttr = [

			{ k: 'tag' 			, v: tagName 							, }, // tag ставити завжди першим у массиві
			//{ k: 'class' 		, v: 'active' 							, },
			//{ k: 'name' 		, v: 'Параметр name' 					, },
			//{ k: 'title' 		, v: 'Підказка title, яка вспливає' 	, },
			//{ k: 'selected' 	, v: '' 								, },
			//{ k: 'defer' 		, v: '' 								, },
			//{ k: 'data-id' 		, v: 'anyData' 							, },
			//{ k: 'onclick' 		, v: this.className + '.clc( ' + this.className + '.arrArgs )' 	, },

		];


		const name 		= 'html';
		const method 	= `${ this.name }.${ name }()`;
		const ok 		= `\x1b[32m ok ${ method } `;
		const err 		= `\x1b[31m err ${ method } `;

		
		//console.log( ok ); 
		//console.log( ok, 'завантаження компоненту...' ); 



		let users = arrListPeople.filter( k => k.id == data );
		let user = users[ 0 ];

		//console.log( ok, 'users:', users ); 
		//console.log( ok, 'users:', users[ 0 ] ); 
		//console.log( ok, 'user:', user ); 


		let dateLife = ''; 

		if ( user.life ) {

			dateLife += ( user.life.bd ? user.life.bd : '' );
			dateLife += ( user.life.bm ? '.' + user.life.bm : '' );
			dateLife += ( user.life.by ? '.' + user.life.by : '' );

			if ( user.life.dd || user.life.dm || user.life.dy ) {
				dateLife += ' - ';

				dateLife += ( user.life.dd ? user.life.dd : '' );
				dateLife += ( user.life.dm ? '.' + user.life.dm : '' );
				dateLife += ( user.life.dy ? '.' + user.life.dy : '' );
			}
		}




		let wikiUa = user.internet ? ( user.internet.wiki_ua ? `<a href="https://uk.wikipedia.org/wiki/${ user.internet.wiki_ua }" target="_blank" title="Перейти на WikiUA"><img src="img/pic/sn_wiki_ua.png"></a>` : '' ) : '';
		let wikiRu = user.internet ? ( user.internet.wiki_ru ? `<a href="https://ru.wikipedia.org/wiki/${ user.internet.wiki_ru }" target="_blank" title="Перейти на WikiRU"><img src="img/pic/sn_wiki_ru.png"></a>` : '' ) : '';
		let wikiEn = user.internet ? ( user.internet.wiki_en ? `<a href="https://en.wikipedia.org/wiki/${ user.internet.wiki_en }" target="_blank" title="Перейти на WikiEN"><img src="img/pic/sn_wiki_en.png"></a>` : '' ) : '';

		let imdb = user.internet ? ( user.internet.imdb ? `<a href="https://www.imdb.com/name/nm${ user.internet.imdb }/" target="_blank" title="Перейти на IMDB"><img src="img/pic/logo_IMDb.png"></a>` : '' ) : '';
		
		let kinoteatr = user.internet ? ( user.internet.kinoteatr ? `<a href="${ user.internet.kinoteatr }" target="_blank" title="Перейти на Кінотеатр"><img src="img/pic/logo_kinoteatr.png"></a>` : '' ) : '';





		let hash = '';
		let htmlPresident = '';

		let htmlFilms = '';


		if ( user.hash ) {

			for ( let k in user.hash ) {
				//hash += ` <a href="file:///F:/web/media/index.html?win=people&sex=allsex&hash=${ k }">#${ objPeopleHash[ k ].title }</a>`;
				
				hash += `<span class="each hashTag" onclick="Router.clcHashTag( this )" data-id="${ k }" title="Відобразити всіх за тегом: ${ objListPeopleHash[ k ].title }">#${ objListPeopleHash[ k ].title }</span>`;
			}

			if ( user.hash.president ) {

				let html = '';
				user.hash.president.forEach( k => {
					html += `<div class="each">
						<div>${ k.n }-й Президент</div>
						<div class="country">${ objCountry[ k.country ].title.ua }</div>
						<div class="date">${ k.date }</div>
					</div>`;

						
					//${ k.n }-й Президент, ${ objCountry[ k.country ].title.ua } (${ k.date })


				});

				if ( html ) {
					htmlPresident = `<div class="president">${ html }</div>`;
				}
			}






			if ( user.hash.movie && user.hash.actor ) {


				//console.log( 'user: ', user  );



				let tBody = '';


				let arrSelectActorFilms = arrFilms.filter( k => {

					if ( k.cast ) {
						if ( k.cast[ data ] ) 
							return true;
					}

				});



				//console.log( 'arrSelectActorFilms: ', arrSelectActorFilms  );


				// сортировка об'єктів-фільмів за роком випуску
				arrSelectActorFilms.sort( ( a, b ) => { return a.year < b.year ? -1 : 1;  } );


				//console.log( 'arrSelectActorFilms: ', arrSelectActorFilms  );




				arrSelectActorFilms.forEach( k => {


					if ( k.cast ) {
						if ( k.cast[ data ] ) {

							//console.log( 'filmID: ', k.id );

							tBody += `<tr>
								<td><img src="https://pillypenkosa.github.io/movies/img/poster/${ k.id }.jpg" alt="" title="${ k.title.ua } (${ k.year })"></td>
								<td>${ k.title.ua } (${ k.year })</td>
							</tr>`;
						}
					}
				});



				//let tBody = `<tbody>${ htmlTr }</tbody>`;
			





				htmlFilms += `<table>
					<thead>
						<tr>
							<td></td>
							<td></td>
						<tr>
					</thead>
					<tbody>${ tBody }</tbody>
				</table>`;
			}
		

		}



		let country = '';
		if ( user.country ) {

			for ( let k in user.country ) {
				country += `<span class="hashTag hashCountry" data-id="${ k }" onclick="Router.clcHashCountry( this )">#${ objCountry[ k ].title.ua }</span> `;


				//country = `<span class="hashCountry" data-id="${ }" onclick="${ this.className }.clcHashCountry( this )">${ country.slice( 0, -2 ) }</span>`;


			}
			//country = 'Країна: ' + country.slice( 0, -2 );
		}


		let htmlBirthplace = '';
		if ( user.birthplace ) {

			let cityBirth = '';
			let countryBirth = '';

			if ( objCity[ user.birthplace ] ) {
				cityBirth = objCity[ user.birthplace ].title.ua;

				if ( objCity[ user.birthplace ].country ) 
					countryBirth = objCountry[ objCity[ user.birthplace ].country ].title.ua;
			}

			htmlBirthplace = `<div>Місце народження: ${ cityBirth }, ${ countryBirth }</div>`;
		}






		let htmlImgOther = '';
		if ( user.img ) {
			if ( user.img[ 0 ] > 1 ) {
				for ( let i = 0; i < user.img[ 0 ]; i++ ) {
					let n = i + 1;
					htmlImgOther += `<div class="each" onmouseover="${ this.className }.clcImgOther( '${ user.id }', ${ n } )"><img src="img/people/${ user.id }/${ n }.jpg"></div>`;
				}
			}
		}


		if ( htmlImgOther ) {
			htmlImgOther = `<div class="imgOther">${ htmlImgOther }</div>`;
		}

		let htmlRibbon = '';
		if ( user.life ) {
			if ( user.life.dy ) {

				htmlRibbon = '<div class="ribbon"><img src="img/pic/ribbon.png"></div>';
			}
		}

		let htmlAva = '';
		if ( user.img ) {

			htmlAva = `<img src="img/people/${ user.id }/${ user.img[ 1 ]}.jpg" alt="${ user.name.n } ${ user.name.s }">`;
		} else {

			htmlAva = `<img src="img/pic/no_img_${ user.sex ? 'm' : 'w' }.jpg" alt="Немає фото">`;
		}

		let htmlNote = user.note ? `<div class="note"><hr/>${ user.note }</div>` : '';


		let letterSex = user.sex ? 'm' : 'w';


		let htmlRelative = '';
		if ( user.relative ) {

			//let htmlRelativeBS = '';





			if ( user.relative.father ) {
				htmlRelative += `<div class="each-relative father" title="father: ${ user.relative.father }">
					<img src="img/people/${ user.relative.father }/1.jpg" alt="${ user.relative.father }" >
				</div>`;
			}

			if ( user.relative.mother ) {
				htmlRelative += `<div class="each-relative mother" title="mother: ${ user.relative.mother }">
					<img src="img/people/${ user.relative.mother }/1.jpg" alt="${ user.relative.mother }" >
				</div>`;
			}

			if ( user.relative.bs ) {

				user.relative.bs.forEach( k => {
					htmlRelative += `<div class="each-relative bs" title="b/s: ${ k }">
						<img src="img/people/${ k }/1.jpg" alt="${ k }" >
					</div>`;
				});
			}


			if ( user.relative.children ) {

				user.relative.children.forEach( k => {
					htmlRelative += `<div class="each-relative child" title="child: ${ k }">
						<img src="img/people/${ k }/1.jpg" alt="${ k }" >
					</div>`;
				});
			}










			htmlRelative = `<div class="relative">
				<div class="">Родичі:</div>
				${ htmlRelative }
			</div>`;
		}





		let html = `<div class="">

			<div class="main">
				<div class="ava ${ letterSex }">
					${ htmlAva }
					${ htmlRibbon }
				</div>

				<div class="info">
					<div class="name">${ user.name.n ? user.name.n : '' } ${ user.name.p ? user.name.p : '' } ${ user.name.s ? user.name.s : '' }</div>
					<div class="date">${ dateLife }</div>
					<hr/>

					<div class="internet">${ wikiUa } ${ wikiRu } ${ wikiEn } ${ imdb } ${ kinoteatr }</div>
					<div class="country">${ country }</div>

					${ htmlBirthplace }


					<div class="hash">${ hash }</div>

					${ htmlPresident }
					${ htmlNote }
				</div>
				
				<div class="close" onclick="${ this.className }.clcClose()" title="Close">&#10006;</div>
			</div>

			${ htmlImgOther }
			${ htmlRelative }



			<div class="films">${ htmlFilms }</div>
		<div>`;

		return getComponentHtml( this.paramAttr, html );
	}



	static clcClose() {

		const name 		= 'clc';
		const method 	= `${ this.name }.${ name }()`;
		const ok 		= `\x1b[32m ok ${ method } `;
		const err 		= `\x1b[31m err ${ method } `;

		//console.log( ok ); 


		document.querySelectorAll( 'cmp-win-people .people' )[ 0 ].classList.remove( 'hide' ); 		// добавить класс
		document.querySelectorAll( 'cmp-win-people .modal' )[ 0 ].innerHTML = '';
	}


	static clcImgOther( id, n ) {

		const name 		= 'clcImgOther';
		const method 	= `${ this.name }.${ name }()`;
		const ok 		= `\x1b[32m ok ${ method } `;
		const err 		= `\x1b[31m err ${ method } `;

		//console.log( ok ); 



		//alert( n );


		let elemImg = document.querySelectorAll( 'cmp-each-user .ava img' )[ 0 ];


		console.log( elemImg );

		elemImg.src = `img/people/${ id }/${ n }.jpg`;


/*
		document.querySelectorAll( 'cmp-win-people .people' )[ 0 ].classList.remove( 'hide' ); 		// добавить класс
		document.querySelectorAll( 'cmp-win-people .modal' )[ 0 ].innerHTML = '';

*/

	}








/*

	static clcHashTag( elem ) {

		console.log( elem.dataset.id );


		Router.ini();

		// подсветка меню
		this.activeLight();

		// загрузка контентк
		Router.loadContent();



	}

*/






}























