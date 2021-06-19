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
            
            document.getElementById("vultr-result").textContent = 
            document.vultrForm.instancePerformance[i].value + ` を ` + usageTime + ` 時間使用した際の料金 : ` + res + `$`;
            break;
        }
    }
}

// Mbps -> MB/s
function trafficTransforMbpsToMb(){
    const trafficVolumeMbps = document.getElementById("traffic-volume-mbps-to-mb").value;
    let trafficVolumeMbpsToMbResult = trafficVolumeMbps / 8; // 1Mbps = (1 / 8)MB/s
    document.getElementById("traffic-transfor-mbps-to-mb-result").textContent =  trafficVolumeMbps + " Mbps は " + trafficVolumeMbpsToMbResult + " MB/s です";
}

// MB/s -> Mbps
function trafficTransforMbToMbps(){
    const trafficVolumeMb = document.getElementById("traffic-volume-mb-to-mbps").value;
    let trafficVolumeMbToMbpsResult = trafficVolumeMb * 8; // 1MB = 8Mbps
    document.getElementById("traffic-transfor-mb-to-mbps-result").textContent =  trafficVolumeMb + " MB/s は " + trafficVolumeMbToMbpsResult + " Mbps です";
}
