var tipuesearch = {"pages":[{"title":"About","text":"NFU-MDE104B-40423226-胡原愷 倉儲: https://github.com/40423226/2017springcd_hw 簡報: https://40423226.github.io/2017springcd_hw 網誌: https://40423226.github.io/2017springcd_hw/blog/ Vimeo: https://vimeo.com/user46807821","url":"./pages/about/","tags":"misc"},{"title":"201703029 Week 6","text":"Fourbar 安裝 base Fourbar (base) (SolveSpace) from NFU-MDE-104B-40423226 on Vimeo . Fourbar 運動模擬 在 V-rep 模擬 Fourbar (V-rep) from NFU-MDE-104B-40423226 on Vimeo .","url":"./Week 6.html","tags":"Course"},{"title":"201703022 Week 5","text":"Fossil SCM 與 Stunnel 啟動整合 1. 更改 Start.bat 設定 REM tiny2017 主要針對初學 Python3 與 C 學員所建立 REM 近端使用 fossil 管理資料版本, 並且定時轉為 git 格式後上傳到 github @echo off REM 設定 y 硬碟代號與 data 目錄對應 set Disk=y subst %Disk%: \"data\" REM 設定 leo 相關對應 Home 位置 set HomePath=%Disk%:\\home set HomeDrive=%Disk%:\\home set Home=%Disk%:\\home REM 將系統 Python 程式的 io 設為 utf-8 set PYTHONIOENCODING=\"utf-8\" REM 將後續的指令執行, 以 %Disk% 為主 %Disk%: REM 設定 PYTHONPATH set PYTHONPATH=%Disk%:\\python-3.5.3-embed-amd64 REM 設定 Leo 所用的編輯器 set LEO_EDITOR=%Disk%:\\wscite\\SciTE.exe REM for fossil https 連線設定 set HTTPS=on REM 指令搜尋路徑設定 set path1=%PATH%;%Disk%:;%Disk%:\\python-3.5.3-embed-amd64;%Disk%:\\git\\bin;%Disk%:\\stunnel\\bin;%Disk%:\\sqlite-tools;%Disk%:\\python-3.5.3-embed-amd64\\Scripts;%Disk%:\\portablegit\\bin; set path2=c:\\Windows\\Microsoft.NET\\Framework\\v3.5;%Disk%:\\python-3.5.3-embed-amd64\\Lib\\site-packages; set path3=\"C:\\Program Files (x86)\\Google\\Chrome\\Application\" path=%path%;%path1%;%path2%;%path3% start /MIN %Disk%:\\wscite\\SciTE.exe start /MIN cmd.exe start /MIN cmd.exe start /MIN cmd.exe REM 啟動 Leo 編輯器 REM %Disk%:\\Miniconda3\\python.exe %Disk%:\\apps\\launchLeo.py REM 啟動 stunnel start /MIN fossil.exe server -P 127.0.0.1:8080 %Disk%:\\tmp\\fossil_repo\\2017springcd_bg1.fpssil REM 取得電腦 IP, 然後設定 %Disk%:/stunnel/config/stunnel.conf for /f \"delims=[] tokens=2\" %%a in ('ping -4 -n 1 %ComputerName% &#94;| findstr [') do set NetworkIP=%%a REM echo Network IP: %NetworkIP% REM Saved in %Disk%:\\stunnel\\config\\stunnel.conf @echo off REM 建立 stunnel.conf @echo [https] > %Disk%:\\stunnel\\config\\stunnel.conf REM 附加資料 @echo accept = %NetworkIP%:443 >> %Disk%:\\stunnel\\config\\stunnel.conf @echo connect = 127.0.0.1:8080 >> %Disk%:\\stunnel\\config\\stunnel.conf @echo TIMEOUTclose = 0 >> %Disk%:\\stunnel\\config\\stunnel.conf @echo cert = %Disk%:\\stunnel\\config\\localhost.crt >> %Disk%:\\stunnel\\config\\stunnel.conf @echo key = %Disk%:\\stunnel\\config\\localhost.key >> %Disk%:\\stunnel\\config\\stunnel.conf REM 啟動 stunnel start /MIN stunnel.exe REM 以 chrome 連線到 https://%NetworkIP%:443 chrome https://%NetworkIP% https://mde2a2.kmol.info/cdbg1 Exit 2. 檢查是否有相對應的 fossil 檔案 start /MIN fossil.exe server -P 127.0.0.1:8080 %Disk%:\\tmp\\fossil_repo\\2017springcd_bg1.fpssil 3. 自己額外在最後一行, 新增一個小組 fpssil 網址 https://mde2a2.kmol.info/cdbg1 建立與 project name 同名的首頁 wiki https://mde2a2.kmol.info/cdbg1 從 SolveSpace 匯出 onebar 並在 V-rep 加入馬達 SolveSpacec 匯出: 影片 V-rep 加入馬達: 影片","url":"./Week 5.html","tags":"Course"},{"title":"201703015 Week 4","text":"建立各組協同主機 2017springcd_bg1: https://mde2a2.kmol.info/cdbg1 單桿機構","url":"./Week 4.html","tags":"Course"},{"title":"201703018 Week 3","text":"HyperWorks 14.0 Student Edition Student Edition: Download Now! 近端 Fossil 1. 更改 Start.bat 設定 REM tiny2017 主要針對初學 Python3 與 C 學員所建立 REM 近端使用 fossil 管理資料版本, 並且定時轉為 git 格式後上傳到 github @echo off REM 設定 y 硬碟代號與 data 目錄對應 set Disk=y subst %Disk%: \"data\" REM 設定 leo 相關對應 Home 位置 set HomePath=%Disk%:\\home set HomeDrive=%Disk%:\\home set Home=%Disk%:\\home REM 將系統 Python 程式的 io 設為 utf-8 set PYTHONIOENCODING=\"utf-8\" REM 將後續的指令執行, 以 %Disk% 為主 %Disk%: REM 設定 PYTHONPATH set PYTHONPATH=%Disk%:\\python-3.5.3-embed-amd64 REM 設定 Leo 所用的編輯器 set LEO_EDITOR=%Disk%:\\wscite\\SciTE.exe REM for fossil https 連線設定 set HTTPS=on REM 指令搜尋路徑設定 set path1=%PATH%;%Disk%:;%Disk%:\\python-3.5.3-embed-amd64;%Disk%:\\git\\bin;%Disk%:\\stunnel\\bin;%Disk%:\\sqlite-tools;%Disk%:\\python-3.5.3-embed-amd64\\Scripts;%Disk%:\\portablegit\\bin; set path2=c:\\Windows\\Microsoft.NET\\Framework\\v3.5;%Disk%:\\python-3.5.3-embed-amd64\\Lib\\site-packages; path=%path%;%path1%;%path2% start /MIN %Disk%:\\wscite\\SciTE.exe start /MIN cmd.exe start /MIN cmd.exe start /MIN cmd.exe REM 啟動 Leo 編輯器 REM %Disk%:\\Miniconda3\\python.exe %Disk%:\\apps\\launchLeo.py REM 啟動 stunnel start /MIN fossil.exe server -P 127.0.0.1:8080 %Disk%:\\tmp\\fossil_repo\\2017springcd_hw.fpssil REM 取得電腦 IP, 然後設定 %Disk%:/stunnel/config/stunnel.conf for /f \"delims=[] tokens=2\" %%a in ('ping -4 -n 1 %ComputerName% &#94;| findstr [') do set NetworkIP=%%a REM echo Network IP: %NetworkIP% REM Saved in %Disk%:\\stunnel\\config\\stunnel.conf @echo off REM 建立 stunnel.conf @echo [https] > %Disk%:\\stunnel\\config\\stunnel.conf REM 附加資料 @echo accept = %NetworkIP%:443 >> %Disk%:\\stunnel\\config\\stunnel.conf @echo connect = 127.0.0.1:8080 >> %Disk%:\\stunnel\\config\\stunnel.conf @echo TIMEOUTclose = 0 >> %Disk%:\\stunnel\\config\\stunnel.conf @echo cert = %Disk%:\\stunnel\\config\\localhost.crt >> %Disk%:\\stunnel\\config\\stunnel.conf @echo key = %Disk%:\\stunnel\\config\\localhost.key >> %Disk%:\\stunnel\\config\\stunnel.conf REM 啟動 stunnel start /MIN stunnel.exe Exit 2. 在tmp裏的 fossil_repo 目錄執行指令 fossil init 2017springcd_hw.fpssil 3. 查詢 IP ipconfig /all 4. 確認是否有用 Proxy , 若有則需要將自己的IP設為例外 5. 使用瀏覽器輸入網址 https:// 電腦IPv4的IP Fourbar 零件繪製 Link_30: SolveSpace Onshape 尺寸圖 Link_50: SolveSpace Onshape 尺寸圖 Link_60: SolveSpace Onshape 尺寸圖 Fourbar組裝: SolveSpace Onshape 外加正三角形: 尺寸圖 路徑圖","url":"./Week 3.html","tags":"Course"},{"title":"20170301 Week 2","text":"分組座位原始碼 #import os adata = open(\"w2b_cadlab.txt\", encoding=\"utf-8\").read() #讀取w2b_cadlab.txt 檔案,讓裡面的內容成為資料, 因為檔案裡有中文, 所以設定encoding 使用utf-8 的編驛碼 rdata = open(\"w2b_registered.txt\", encoding=\"utf-8\").read().splitlines() #print(adata) #用print 先檢查資料是否是我們需要的 alist = adata.splitlines() #利用splitlines 的方法把資料隔開, 就可以得到一個特定的數列 #print(alist[2]) n = 0 row = 0 final_list = [] w2_list = [] for stud_num in alist[2:]: #從第2列開始, 因為第0列和第1列都不是我們要的 row = row + 1 blist = stud_num.split(\"\\t\") #print(blist) column = 0 #為了避免序號連續, 利用column = 0 將順序重製, 因為每一列算完之後要換下一列重新開始 for i in range(len(blist)): column = column + 1 if blist[i] != \"\": #print(blist[i]) clist = blist[i].split(\"_\") stud_data = clist[0]+\"_\"+clist[1]+\"_\"+str(row)+\"_\"+str(column) final_list.append(stud_data) w2_list.append(clist[1]) n = n +1 # 根據數列前導字串排序, 目的在建立分組數列 group_list = sorted(final_list) print(\"分組名單:\") for i in range(len(group_list)): print(group_list[i]) print(\"座位列表:\") for i in range(len(final_list)): print(final_list[i]) for i in range(len(rdata)): if rdata[i] not in w2_list: print(\"缺席學生:\", rdata[i]) print(\"學生總數:\", n) #print(os.environ) Fourbar 利用 Solvespace 畫出簡單的四連桿機構, 觀察該機構的運動方式, 也可以匯出到 V-rep 進行動態模擬 Fourbar from NFU-MDE-104B-40423226 on Vimeo . 心得 雖然程式能做的人也可以做, 但人會出錯, 簡單卻繁瑣的工作就交給程式, 困難的再讓人來做就行了","url":"./Week 2.html","tags":"Course"},{"title":"20170222 Week 1","text":"修改 stunnel.conf 的 IP 設定 Set stunnel IP from NFU-MDE-104B-40423226 on Vimeo . 心得: 還好還沒忘記, 複習一下ipconfig /all指令","url":"./Week 1.html","tags":"Course"},{"title":"Glyphicons","text":"glyphicon glyphicon-asterisk glyphicon glyphicon-plus glyphicon glyphicon-euro glyphicon glyphicon-minus glyphicon glyphicon-cloud glyphicon glyphicon-envelope glyphicon glyphicon-pencil glyphicon glyphicon-glass glyphicon glyphicon-music glyphicon glyphicon-search glyphicon glyphicon-heart glyphicon glyphicon-star glyphicon glyphicon-star-empty glyphicon glyphicon-user glyphicon glyphicon-film glyphicon glyphicon-th-large glyphicon glyphicon-th glyphicon glyphicon-th-list glyphicon glyphicon-ok glyphicon glyphicon-remove glyphicon glyphicon-zoom-in glyphicon glyphicon-zoom-out glyphicon glyphicon-off glyphicon glyphicon-signal glyphicon glyphicon-cog glyphicon glyphicon-trash glyphicon glyphicon-home glyphicon glyphicon-file glyphicon glyphicon-time glyphicon glyphicon-road glyphicon glyphicon-download-alt glyphicon glyphicon-download glyphicon glyphicon-upload glyphicon glyphicon-inbox glyphicon glyphicon-play-circle glyphicon glyphicon-repeat glyphicon glyphicon-refresh glyphicon glyphicon-list-alt glyphicon glyphicon-lock glyphicon glyphicon-flag glyphicon glyphicon-headphones glyphicon glyphicon-volume-off glyphicon glyphicon-volume-down glyphicon glyphicon-volume-up glyphicon glyphicon-qrcode glyphicon glyphicon-barcode glyphicon glyphicon-tag glyphicon glyphicon-tags glyphicon glyphicon-book glyphicon glyphicon-bookmark glyphicon glyphicon-print glyphicon glyphicon-camera glyphicon glyphicon-font glyphicon glyphicon-bold glyphicon glyphicon-italic glyphicon glyphicon-text-height glyphicon glyphicon-text-width glyphicon glyphicon-align-left glyphicon glyphicon-align-center glyphicon glyphicon-align-right glyphicon glyphicon-align-justify glyphicon glyphicon-list glyphicon glyphicon-indent-left glyphicon glyphicon-indent-right glyphicon glyphicon-facetime-video glyphicon glyphicon-picture glyphicon glyphicon-map-marker glyphicon glyphicon-adjust glyphicon glyphicon-tint glyphicon glyphicon-edit glyphicon glyphicon-share glyphicon glyphicon-check glyphicon glyphicon-move glyphicon glyphicon-step-backward glyphicon glyphicon-fast-backward glyphicon glyphicon-backward glyphicon glyphicon-play glyphicon glyphicon-pause glyphicon glyphicon-stop glyphicon glyphicon-forward glyphicon glyphicon-fast-forward glyphicon glyphicon-step-forward glyphicon glyphicon-eject glyphicon glyphicon-chevron-left glyphicon glyphicon-chevron-right glyphicon glyphicon-plus-sign glyphicon glyphicon-minus-sign glyphicon glyphicon-remove-sign glyphicon glyphicon-ok-sign glyphicon glyphicon-question-sign glyphicon glyphicon-info-sign glyphicon glyphicon-screenshot glyphicon glyphicon-remove-circle glyphicon glyphicon-ok-circle glyphicon glyphicon-ban-circle glyphicon glyphicon-arrow-left glyphicon glyphicon-arrow-right glyphicon glyphicon-arrow-up glyphicon glyphicon-arrow-down glyphicon glyphicon-share-alt glyphicon glyphicon-resize-full glyphicon glyphicon-resize-small glyphicon glyphicon-exclamation-sign glyphicon glyphicon-gift glyphicon glyphicon-leaf glyphicon glyphicon-fire glyphicon glyphicon-eye-open glyphicon glyphicon-eye-close glyphicon glyphicon-warning-sign glyphicon glyphicon-plane glyphicon glyphicon-calendar glyphicon glyphicon-random glyphicon glyphicon-comment glyphicon glyphicon-magnet glyphicon glyphicon-chevron-up glyphicon glyphicon-chevron-down glyphicon glyphicon-retweet glyphicon glyphicon-shopping-cart glyphicon glyphicon-folder-close glyphicon glyphicon-folder-open glyphicon glyphicon-resize-vertical glyphicon glyphicon-resize-horizontal glyphicon glyphicon-hdd glyphicon glyphicon-bullhorn glyphicon glyphicon-bell glyphicon glyphicon-certificate glyphicon glyphicon-thumbs-up glyphicon glyphicon-thumbs-down glyphicon glyphicon-hand-right glyphicon glyphicon-hand-left glyphicon glyphicon-hand-up glyphicon glyphicon-hand-down glyphicon glyphicon-circle-arrow-right glyphicon glyphicon-circle-arrow-left glyphicon glyphicon-circle-arrow-up glyphicon glyphicon-circle-arrow-down glyphicon glyphicon-globe glyphicon glyphicon-wrench glyphicon glyphicon-tasks glyphicon glyphicon-filter glyphicon glyphicon-briefcase glyphicon glyphicon-fullscreen glyphicon glyphicon-dashboard glyphicon glyphicon-paperclip glyphicon glyphicon-heart-empty glyphicon glyphicon-link glyphicon glyphicon-phone glyphicon glyphicon-pushpin glyphicon glyphicon-usd glyphicon glyphicon-gbp glyphicon glyphicon-sort glyphicon glyphicon-sort-by-alphabet glyphicon glyphicon-sort-by-alphabet-alt glyphicon glyphicon-sort-by-order glyphicon glyphicon-sort-by-order-alt glyphicon glyphicon-sort-by-attributes glyphicon glyphicon-sort-by-attributes-alt glyphicon glyphicon-unchecked glyphicon glyphicon-expand glyphicon glyphicon-collapse-down glyphicon glyphicon-collapse-up glyphicon glyphicon-log-in glyphicon glyphicon-flash glyphicon glyphicon-log-out glyphicon glyphicon-new-window glyphicon glyphicon-record glyphicon glyphicon-save glyphicon glyphicon-open glyphicon glyphicon-saved glyphicon glyphicon-import glyphicon glyphicon-export glyphicon glyphicon-send glyphicon glyphicon-floppy-disk glyphicon glyphicon-floppy-saved glyphicon glyphicon-floppy-remove glyphicon glyphicon-floppy-save glyphicon glyphicon-floppy-open glyphicon glyphicon-credit-card glyphicon glyphicon-transfer glyphicon glyphicon-cutlery glyphicon glyphicon-header glyphicon glyphicon-compressed glyphicon glyphicon-earphone glyphicon glyphicon-phone-alt glyphicon glyphicon-tower glyphicon glyphicon-stats glyphicon glyphicon-sd-video glyphicon glyphicon-hd-video glyphicon glyphicon-subtitles glyphicon glyphicon-sound-stereo glyphicon glyphicon-sound-dolby glyphicon glyphicon-sound-5-1 glyphicon glyphicon-sound-6-1 glyphicon glyphicon-sound-7-1 glyphicon glyphicon-copyright-mark glyphicon glyphicon-registration-mark glyphicon glyphicon-cloud-download glyphicon glyphicon-cloud-upload glyphicon glyphicon-tree-conifer glyphicon glyphicon-tree-deciduous","url":"./glyphicons.html","tags":"Course"}]};