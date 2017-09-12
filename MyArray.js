function MyArray(){
			// this[0]=arguments[0];
			// this[1]=arguments[1];
			for(let i=0;i<arguments.length;i++){
				this[i]=arguments[i];
			}
			this.length=arguments.length;
			
            //在一个数组后面增加几个元素
			this.push=function(){
				for(let i=0;i<arguments.length;i++){
					this[this.length]=arguments[i];
					this.length++;
				}
			}
			//indexOf某个元素首次出现的位置
			this.indexOf=function(value){
				for(let i=0;i<this.length;i++){
					if(this[i]==value){
						return i;
					}

				}
				return -1;
			}
			//lastindexOf某个元素最后出现的位置
			this.lastindexOf=function(value){
				for(let i=this.length;i>=0;i--){
					if(this[i]==value){
						return i;
					}
				}
				return -1;
			}
			//是否存在某个元素
			this.includes=function(value){
				for(let i=0;i<this.length;i++){
					if(this[i]==value){
						return true;
					}
				}
				return false;
			}
			//reverse数组反转
			this.reverse=function(){
				let newarr=[];
				for(let i=this.length-1;i>=0;i--){
					newarr[newarr.length]=this[i];
				}
				return newarr;
			}
			//join在某个位置插入数
			this.join=function(pos){
				let newarr=[];
				for(let i=0;i<pos;i++){
					newarr[newarr.length]=this[i];
				}
				for(let i=1;i<arguments.length;i++){
					newarr[newarr.length]=arguments[i];
				}
				for(let i=pos;i<this.length;i++){
					newarr[newarr.length]=this[i];
				}
				return newarr;
			}
			//sort数组升序排序
			this.sort=function(){
				for(let i=0;i<this.length;i++){
					for(let j=i;j<this.length;j++){
						if(this[i]>this[j]){
							let str=this[i];
							    this[i]=this[j];
							    this[j]=str;
						}
					}
				}
				return this;
			}
			//最大值
			this.max=function(){
				let max=this[0];
				for(let i=0;i<this.length;i++){
					if(this[i]>max){
						max=this[i];
					}
				}
				return max;
			}
			//最小值
			this.min=function(){
				let min=this[0];
				for(let i=0;i<this.length;i++){
					if(this[i]<min){
						min=this[i];
					}
				}
				return min;
			}
			//是否存在某一个元素符合条件
			this.some=function(fn){
				for(let i=0;i<this.length;i++){
					if(fn(this[i])){
						return true;
					}
				}
				return false;
			}
		
		//every都满足条件返回true,有一个不满足条件返回false
		    this.every=function(fn1){
		    	for (let i=0;i<this.length;i++){
		    		if(!fn1(this[i])){
		    			return false;
		    		}
		    	}
		    	return true;
		    }
		//map映射
		    this.map=function(fn){
		    	let newarr=[];
		    	for(let i=0;i<this.length;i++){
		    		newarr[newarr.length]=fn(this[i]);
		    	}
		    	return newarr;
		    }
		//filter筛选数组中符合条件的元素
		   this.filter=function(fn){
		   	let newarr=[];
		   	for(let i=0;i<this.length;i++){
		   		if(fn(this[i])){
		   		newarr[newarr.length]=this[i];
		   		}
		   	}
		   	return newarr;
		   }
	}