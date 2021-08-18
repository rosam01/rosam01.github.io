Domain | Comment
------ | -------
ruxit.com  | Dynatrace-related

#### Scan segment
&#35; -n: no dns resolution\
&#35; -sn: ping scan\
&#35; -oA: output all formats\
nmap -v -n -sn -oA scope.online 192.168.201.0/24

#### Top X ports
&#35; -n: no dns resolution\
&#35; -sS: SYN scan\
&#35; -R: resolve DNS\
&#35; -iL: input list of hosts to scan
&#35; -oA: output all formats\
nmap -v -sS --top-ports 1000 -R -oA scope.top1000 -iL scope.online.txt


