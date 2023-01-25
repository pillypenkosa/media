//console.log( '' );



class ComponentErr404 {



	static className = '';

	static paramAttr = [];

	static arrArgs = []; 




	static html( className, tagName ) {

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
		console.log( ok + '// завантаження компоненту...' ); 

		//alert( ok ); 
		console.log( ok + '// Router.urlGET: ', Router.urlGET ); 


	
		const title = 'Головна';

		document.title = appProjectName + ' ' + title;


		let html = `Error 404! А як це ви сюди взагалі потрапили?...`;



		return getComponentHtml( this.paramAttr, html );
	}







	static clc( data ) {

		let name = 'clc';
		let ok = `\x1b[32m ok ${ this.name }.${ name }() `;
		let err = `\x1b[31m err ${ this.name }.${ name }() `;

		console.log( ok + '// data:', data ); 
		//alert( data );

	}










}























