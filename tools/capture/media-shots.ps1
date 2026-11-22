# Prism Player / Studio screenshots for the website (native egui apps — no web page to load).
# Opens each app on a demo clip (made by ffmpeg, no personal content), sizes the window to 1480x920,
# makes it topmost and copies ONLY that window's rectangle (egui draws with OpenGL, so PrintWindow returns black;
# this is the method in prism-media/CLAUDE.md). Every image is checked by eye before it is published.
# Run:  powershell -ExecutionPolicy Bypass -File tools\capture\media-shots.ps1 [-Only player,studio]
param([string]$Only = '')
$ErrorActionPreference = 'Stop'
$root = Resolve-Path "$PSScriptRoot\..\.."
$app = Resolve-Path "$root\..\prism-media\app"
$ff = "$app\runtime\ffmpeg.exe"
$demo = "C:\Users\Public\Videos\Prism demo.mp4"   # neutral path: the Player info tab shows the folder
$out = "$root\shots\media"; New-Item -ItemType Directory -Force $out | Out-Null
Add-Type -AssemblyName System.Drawing
Add-Type @"
using System; using System.Runtime.InteropServices;
public class PW { [DllImport("user32.dll")] public static extern bool SetProcessDPIAware();
[DllImport("user32.dll")] public static extern bool PrintWindow(IntPtr h, IntPtr dc, uint f);
[DllImport("user32.dll")] public static extern bool SetWindowPos(IntPtr h, IntPtr a, int x, int y, int w, int hh, uint f);
[DllImport("user32.dll")] public static extern bool SetForegroundWindow(IntPtr h);
[DllImport("user32.dll")] public static extern bool GetWindowRect(IntPtr h, out RECT r);
public struct RECT { public int L, T, R, B; } }
"@
[PW]::SetProcessDPIAware() | Out-Null

function Shot($id, $exe, $name, $envs, $variants) {
  if ($Only -and -not ($Only.Split(',') -contains $id)) { return }
  foreach ($v in $variants) {
    $theme, $lang = $v.Split('.')
    Get-Process $name -ErrorAction SilentlyContinue | Stop-Process -Force
    $env:PRISM_THEME = $theme; $env:PRISM_LANG = $lang
    foreach ($k in $envs.Keys) { Set-Item "env:$k" $envs[$k] }
    $p = Start-Process -FilePath "$app\$exe" -ArgumentList "`"$demo`"" -PassThru
    $h = [IntPtr]::Zero
    for ($i = 0; $i -lt 60 -and $h -eq [IntPtr]::Zero; $i++) { Start-Sleep -Milliseconds 200; $p.Refresh(); $h = $p.MainWindowHandle }
    if ($h -eq [IntPtr]::Zero) { "no window for $id"; continue }
    [PW]::SetWindowPos($h, [IntPtr](-1), 40, 40, 1480, 920, 0x0040) | Out-Null   # HWND_TOPMOST, SWP_SHOWWINDOW
    [PW]::SetForegroundWindow($h) | Out-Null
    Start-Sleep -Milliseconds 4200
    $r = New-Object PW+RECT; [PW]::GetWindowRect($h, [ref]$r) | Out-Null
    $w = $r.R - $r.L; $hh = $r.B - $r.T
    $bmp = New-Object System.Drawing.Bitmap $w, $hh
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.CopyFromScreen($r.L, $r.T, 0, 0, (New-Object System.Drawing.Size $w, $hh))
    $png = "$out\$id.$theme.$lang.png"
    $bmp.Save($png, [System.Drawing.Imaging.ImageFormat]::Png); $g.Dispose(); $bmp.Dispose()
    Stop-Process -Id $p.Id -Force
    foreach ($k in $envs.Keys) { Remove-Item "env:$k" -ErrorAction SilentlyContinue }
    & $ff -y -hide_banner -loglevel error -i $png -c:v libwebp -quality 86 "$out\$id.$theme.$lang.webp"
    Remove-Item $png
    "$id.$theme.$lang  ${w}x${hh}"
  }
}
$all = @('light.th', 'dark.th', 'light.en', 'dark.en')
$two = @('light.th', 'light.en')
Shot 'player' 'prism-player.exe' 'prism-player' @{} $all
Shot 'playerside' 'prism-player.exe' 'prism-player' @{ PRISM_SIDE = '0' } $two
Shot 'studio' 'prism-studio.exe' 'prism-studio' @{ PRISM_TAB = '0' } $all
Shot 'studioedit' 'prism-studio.exe' 'prism-studio' @{ PRISM_TEST_EDIT = '1'; PRISM_TAB = '4' } $two
Shot 'studiofx' 'prism-studio.exe' 'prism-studio' @{ PRISM_TAB = '2' } $two
Shot 'studioai' 'prism-studio.exe' 'prism-studio' @{ PRISM_TAB = '3' } $two
Shot 'studioexport' 'prism-studio.exe' 'prism-studio' @{ PRISM_TAB = '5' } $two
Remove-Item env:PRISM_THEME, env:PRISM_LANG -ErrorAction SilentlyContinue
