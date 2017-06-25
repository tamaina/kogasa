pushd "%~dp0"
:loop
bpgenc.exe -o "%~dpn1.bpg" -lossless "%~1"
shift
if not "%~1" == "" goto loop
pause
exit