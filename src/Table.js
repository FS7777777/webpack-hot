var table = (function($){
	/*
	 * table 类，向外部返回的最终对象
	 * table.*表示对外提供的方法
	 * _*开头的方法表示内部方法
	 */
	var T = {};
	var _table = $('table');
	var _beginCell = null;
	var _endCell = null;
		/*
	 * 判断表格的总行数和总列数
	 * 总行数根据 tbody -> tr
	 * 总列数根据 thead -> tr -> th
	 */
	var _rowsAndColumns = function(){
		return{
			rows : _table.find("tbody tr").length,
			column : _table.find("thead tr th").length
		}
	}
	/*
	 * 给表格添加id
	 */
	var _initId = function(){
		var row = 0;
		_table.find("tbody tr").each(function(){
			var column = 0;
			$(this).find('td').each(function(){
				$(this).attr('id','tb_'+row+'_'+column);
				$(this).prop('id','tb_'+row+'_'+column);
				column++;
			});
			row++;
		});
	}
	
	var _addClass = function(object){
		object.addClass('choose');
	}
	var _removeClass = function(object){
		object.removeClass('choose');
	}
	
	T.init =function(){
		var rowsAndColumns = _rowsAndColumns();
		_initId();
		//console.log(rowsAndColumns);
		/*
		 * 判断鼠标是否是按下移动状态，决定是否标记选中的单元格
		 */
		var mouseDownFlag = false;
		_table.find("tr td").bind('mousedown',function(){
			mouseDownFlag = true;
			_beginCell = $(this);
		});
		_table.find("tr td").bind('mouseup',function(){
			mouseDownFlag = false;
			_endCell = $(this);
			if(!$(this).hasClass('choose'))
			{
				$('.choose').each(function(){
					_removeClass($(this));
				})
				_beginCell = null;
				_endCell = null;
			}
		});
		_table.find("tr td").bind('mousemove',function(){
			if(mouseDownFlag){
				_addClass($(this));
			}
		});
	}
	/*
	 * 根据其实坐标和结束坐标计算两点之间的cell数量
	 * 需要兼容已经合并过的cell位置
	 */
	T.nodes = function(){
		
		console.log(_beginCell);
		console.log(_endCell);
		//获取两点间的所有租表 
		 
		 return;
	}
	
	//列合并
	//行合并
	
	return {T:T};
})(jQuery);