module.exports=(array, time, strings)=>{
    for(i=array.length-1;i>=0;i--){
        if(array[i]==strings[strings.length-1]){
            flag=true;
            for(j=0;j<strings.length;j++){
                if(array[i-j]!=strings[strings.length-1-j]){
                    flag=false;
                    break;
                }
            }
            if(flag){
                let start=i-strings.length+1;
                let end=i;
                let timeframe=time.slice(start, end+1);
                let val=timeframe[0];
                for(k=0;k<timeframe.length;k++){
                    timeframe[k]=timeframe[k]-val;
                }
                return timeframe;
            }
        }
    } 
    return [] 
}

