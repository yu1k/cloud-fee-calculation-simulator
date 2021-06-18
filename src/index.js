"use strict"

// vultr
function clickBtnVultr(){
    // インスタンスを使用する時間
    const usageTime = document.getElementById("usageTime").value;
    // 料金プランは9個
    const instanceTypeArray = [0.005, 0.007, 0.015, 0.030, 0.060, 0.119, 0.238, 0.476, 0.952];
    
    for(let i = 0; i <= document.vultrForm.instancePerformance.length; i++){
        if(document.vultrForm.instancePerformance[i].checked){
            let res = 0;
            res = usageTime * instanceTypeArray[i];
            
            // デバッグ用
            console.log(res);
            
            document.getElementById("inner-result").textContent = 
            document.vultrForm.instancePerformance[i].value + ` を ` + usageTime + ` 時間使用した際の料金 : ` + res + `$`;
            break;
        }
    }
}