//console.log( '' );









class ComponentHeader {



	static tfMenu = false;




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
					<div class="btn-menu" onclick="ComponentHeader.clc()">☰</div>
				</div>
				<div class="version">Version: ${ appVersion }</div>
				<div class="menu"></div>
			`,
		});
	}



	static clc( id ) {

		this.tfMenu = !this.tfMenu;

		let divMenu = document.querySelectorAll( 'cmp-header .menu' )[ 0 ];

		if ( this.tfMenu ) {
			divMenu.innerHTML = ComponentMenu.html();

		} 
		else divMenu.innerHTML = '';


		//alert( this.tfMenu );

	}








}











