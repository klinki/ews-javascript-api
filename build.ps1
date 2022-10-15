$path = Join-Path "build" "browser"
$outputFile = Join-Path $path "ExchangeWebService.ts"

mkdir $path -Force

Get-Content .\singleFileBuildSequence-ts.txt
    | Where-Object{![string]::IsNullOrEmpty($_)}
    | ForEach-Object { if ($_.StartsWith("--")) {
            $_.replace("--","")
        } else {
            Get-Content $_ | Where-Object{$_ -notmatch '\s*import.*\.\/.*|\s*import.*from\s*["''].*["''];?'}
        }
    }
    | Out-File $outputFile
