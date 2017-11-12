const INPUT1 = `total 3208
drwx------+  34 niklas  staff    1156 Nov 12 00:27 [34m.[39;49m[0m
drwxr-xr-x+  90 niklas  staff    3060 Nov 12 11:32 [34m..[39;49m[0m
-rw-r--r--@   1 niklas  staff   28676 Nov 12 00:27 .DS_Store
-rw-r--r--    1 niklas  staff       0 Oct 20  2016 .localized
drwxr-xr-x    5 niklas  staff     170 Oct 14 22:17 [34mAperture[39;49m[0m
-rw-r--r--@   1 niklas  staff    1721 Aug 29 23:40 Apps.html
-rw-r--r--    1 niklas  staff    1645 Dec  1  2016 Apps.txt
-rw-r--r--@   1 niklas  staff    4944 Jun 19 20:19 Custom.ulss
drwxr-xr-x   16 niklas  staff     544 Oct 24 21:14 [34mDEV[39;49m[0m
drwx------@   9 niklas  staff     306 Aug  4 15:37 [34mDesktop[39;49m[0m
-rwxr-xr-x@   1 niklas  staff      13 Mar 12  2016 [31mDock.command[39;49m[0m
drwx------@  13 niklas  staff     442 Aug  4 15:31 [34mDownloads[39;49m[0m
drwxr-xr-x   13 niklas  staff     442 Oct 18 21:39 [34mFotos[39;49m[0m
drwxrwxrwx  398 niklas  staff   13532 Nov  2  2016 [30m[43mIMPORTED[39;49m[0m
drwxr-xr-x    2 niklas  staff      68 Nov  3 16:59 [34miPad[39;49m[0m
drwxr-xr-x    9 niklas  staff     306 Aug 18 10:18 [34mHandy[39;49m[0m
drwxr-xr-x    4 niklas  staff     136 Oct 29 17:08 [34mPAPA[39;49m[0m
drwxr-xr-x    5 niklas  staff     170 Aug  7 16:19 [34mPC[39;49m[0m
-rw-r--r--@   1 niklas  staff     183 Aug 21 22:18 Sketch.cpp
-rw-r--r--@   1 niklas  staff  352526 Oct 25 20:43 Test.gcx
-rw-r--r--@   1 niklas  staff   15358 Oct 24 19:59 Test.ggb
-rw-r--r--@   1 niklas  staff  497169 Oct 25 21:32 Test3D.gcx
drwxr-xr-x    7 niklas  staff     238 Aug  7 16:20 [34mVids[39;49m[0m
drwxr-xr-x    9 niklas  staff     306 Sep 10 11:35 [34mWinStick[39;49m[0m
-rw-------@   1 niklas  staff  703911 Sep  3 16:37 bookmarks_03.09.17.html
drwxr-xr-x    5 niklas  staff     170 Oct 14 21:25 [34mold[39;49m[0m
drwxr-xr-x    9 niklas  staff     306 Jun  5 17:27 [34mscrlayer-scrpage[39;49m[0m
-rwxr-xr-x    1 niklas  staff    1078 Nov 12 12:42 [31mtest.py[39;49m[0m
-rw-r--r--    1 niklas  staff       0 Nov 12 12:42 workfile
`;

// created by Charles Cooke's 16-color Mandelbrot
// https://gist.github.com/ormaaj/3369392
const INPUT2=`[31m█
█████████████████████████████████████████████████████████████[33m██████████████████████████[34m██████████[35m██████[36m█[37m█[90m██[93m█[32m█[97m█[32m█[92m█[37m██[36m██[34m███[32m█████████████████████████████████████████████████
[31m█████████████████████████████████████████████████████████[33m████████████████████████[34m██████████████[35m██████[92m█[93m█[92m██[94m█[30m█[36m█[30m█[92m█[97m██[90m███[37m█[35m███[34m█████████[32m████████████████████████████████████████
[31m██████████████████████████████████████████████████████[33m███████████████████████[34m███████████████[35m███[36m██[37m██[90m█[92m█[94m██[30m█████████[33m█[32m█[34m█[93m█[91m█[35m█████████[34m██████[33m███[32m█████████████████████████████████
[31m███████████████████████████████████████████████████[33m██████████████████████[34m█████████████[36m███████[37m████[90m█[91m█[92m██[93m█[92m█[30m██████████[31m█[96m█[92m█[90m███[37m██[36m███[35m█████████[34m█[33m██████[32m████████████████████████████
[31m█████████████████████████████████████████████████[33m████████████████████[34m██████████[36m██[37m█[91m█[94m██[37m█[94m█[91m█[31m█[96m██[93m██[95m█[91m█[30m██[35m█[94m█[30m█████████████████[34m█[30m█[34m█[32m█[30m██[33m█[94m█[91m█[90m███[37m██[91m█[92m█[94m█[90m██[37m█[35m█[33m███████[32m████████████████████████
[31m███████████████████████████████████████████████[33m██████████████████[34m██[35m█████████[36m████[37m█[90m██[91m█[96m█[33m█[30m███████████████████████████████████████[32m█[90m█[30m█████[32m█[93m█[91m█[36m█[35m██[33m█████████[32m█████████████████████
[31m█████████████████████████████████████████████[33m████████████████[35m███████████[36m██████[96m█[94m█[95m█[34m█[96m█[31m█[91m█[30m██████████████████████████████████████████████[94m█[92m█[90m█[37m██[36m██[35m██[33m█████████[32m███████████████████
[31m████████████████████████████████████████████[33m████████████[37m██[35m█████████[37m████████[90m██[92m█[36m█[30m█[93m█[90m█[30m███████████████████████████████████████████████████[97m█[32m█[30m█[93m█[95m██[35m█[34m██[33m██████████[32m████████████████
[31m███████████████████████████████████████████[33m█████[90m██[92m█[93m██[35m█[95m█[97m█[93m█[94m█[93m██[95m█[31m█[93m█[92m█[95m█[96m█[35m█[94m█[92m█[91m██████[92m█[96m█[30m█[92m█[30m████████████████████████████████████████████████████████[94m█[90m█[37m█[36m█[35m█[34m███[33m██████████[32m███████████████
[31m██████████████████████████████████████████[35m████[37m████[93m██[95m█[33m█[93m█[31m█[30m██████████████[31m█[37m█[95m███[96m█[30m███████████████████████████████████████████████████████████[96m█[97m█[34m█[35m█[34m█████[33m██████████[32m██████████████
[31m██████████████████████████████████████████[35m███[91m███[93m███[30m████████████████████████[90m█[30m█████████████████████████████████████████████████████████[91m█[95m█[94m█[36m█[35m██[34m█████[33m███████████[32m█████████████
[31m█████████████████████████████████████████[91m█[95m█[37m█[95m█[30m████[33m█[30m█████████████████████████████████████████████████████████████████████████████████[35m█[91m█[37m█[36m██[35m███[34m██████[33m███████████[32m████████████
[31m█████████████████████████████████████████[91m█[95m█[37m█[95m█[30m████[33m█[30m█████████████████████████████████████████████████████████████████████████████████[35m█[91m█[37m█[36m██[35m███[34m██████[33m███████████[32m████████████
[31m██████████████████████████████████████████[35m███[91m███[93m███[30m████████████████████████[90m█[30m█████████████████████████████████████████████████████████[91m█[95m█[94m█[36m█[35m██[34m█████[33m███████████[32m█████████████
[31m██████████████████████████████████████████[35m████[37m████[93m██[95m█[33m█[93m█[31m█[30m██████████████[31m█[37m█[95m███[96m█[30m███████████████████████████████████████████████████████████[96m█[97m█[34m█[35m█[34m█████[33m██████████[32m██████████████
[31m███████████████████████████████████████████[33m█████[90m██[92m█[93m██[35m█[95m█[97m█[93m█[94m█[93m██[95m█[31m█[93m█[92m█[95m█[96m█[35m█[94m█[92m█[91m██████[92m█[96m█[30m█[92m█[30m████████████████████████████████████████████████████████[94m█[90m█[37m█[36m█[35m█[34m███[33m██████████[32m███████████████
[31m████████████████████████████████████████████[33m████████████[37m██[35m█████████[37m████████[90m██[92m█[36m█[30m█[93m█[90m█[30m███████████████████████████████████████████████████[97m█[32m█[30m█[93m█[95m██[35m█[34m██[33m██████████[32m████████████████
[31m█████████████████████████████████████████████[33m████████████████[35m███████████[36m██████[96m█[94m█[95m█[34m█[96m█[31m█[91m█[30m██████████████████████████████████████████████[94m█[92m█[90m█[37m██[36m██[35m██[33m█████████[32m███████████████████
[31m███████████████████████████████████████████████[33m██████████████████[34m██[35m█████████[36m████[37m█[90m██[91m█[96m█[33m█[30m███████████████████████████████████████[32m█[90m█[30m█████[32m█[93m█[91m█[36m█[35m██[33m█████████[32m█████████████████████
[31m█████████████████████████████████████████████████[33m████████████████████[34m██████████[36m██[37m█[91m█[94m██[37m█[94m█[91m█[31m█[96m██[93m██[95m█[91m█[30m██[35m█[94m█[30m█████████████████[34m█[30m█[34m█[32m█[30m██[33m█[94m█[91m█[90m███[37m██[91m█[92m█[94m█[90m██[37m█[35m█[33m███████[32m████████████████████████
[31m███████████████████████████████████████████████████[33m██████████████████████[34m█████████████[36m███████[37m████[90m█[91m█[92m██[93m█[92m█[30m██████████[31m█[96m█[92m█[90m███[37m██[36m███[35m█████████[34m█[33m██████[32m████████████████████████████
[31m██████████████████████████████████████████████████████[33m███████████████████████[34m███████████████[35m███[36m██[37m██[90m█[92m█[94m██[30m█████████[33m█[32m█[34m█[93m█[91m█[35m█████████[34m██████[33m███[32m█████████████████████████████████
[31m█████████████████████████████████████████████████████████[33m████████████████████████[34m██████████████[35m██████[92m█[93m█[92m██[94m█[30m█[36m█[30m█[92m█[97m██[90m███[37m█[35m███[34m█████████[32m████████████████████████████████████████
[31m█████████████████████████████████████████████████████████████[33m██████████████████████████[34m██████████[35m██████[36m█[37m█[90m██[93m█[32m█[97m█[32m█[92m█[37m██[36m██[34m███[32m█████████████████████████████████████████████████
`;

const el = document.querySelector("pre");

// default values:
// const defaultFG = "lightgrey";
// const defaultBG = "black";

// el.style.color = defaultFG;
// el.style.backgroundColor = defaultBG;

el.innerHTML = ansiToHTML(INPUT1, /*defaultFG, defaultBG*/);

el.innerHTML += "<br>"+ansiToHTML(INPUT2, /*defaultFG, defaultBG*/);