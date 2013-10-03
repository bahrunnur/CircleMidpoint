(function(){

	window.midpoint = {

		// algoritma midpointnya
		draw : function(centerX, centerY, radius){
			f = 1 - radius;
			ddf_x = 1;
			ddf_y = -2 * radius;
			x = 0;
			y = radius;
			cordinate = [];
			while(x<y){
				if(f>=0)
				{
					y -=1;
					ddf_y += 2;
					f += ddf_y;
				}

				x += 1;
				ddf_x += 2;
				f += ddf_x;

				cordinate.push( [centerX + x, centerY + y] );
				cordinate.push( [centerX + x, centerY - y] );
				cordinate.push( [centerX - x, centerY + y] );
				cordinate.push( [centerX - x, centerY - y] );
				cordinate.push( [centerX + y, centerY + x] );
				cordinate.push( [centerX + y, centerY - x] );
				cordinate.push( [centerX - y, centerY + x] );
				cordinate.push( [centerX - y, centerY - x] );
			}
			return cordinate;
		},

	};

})();