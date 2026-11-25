# Builds bridges/hub-data.json (made-up demo data for the Prism Hub screenshots) from the SHAPE of a reply recording
# (cdp-eval.js → %USERPROFILE%\PrismHubBuild\rec\hub.json). Every path, version, size and usage number is replaced, so
# nothing from the real PC reaches the public site.  python tools/capture/make-hub-demo.py
import json, os, random, datetime
src = os.path.expanduser(r'~\PrismHubBuild\rec\hub.json')
out = os.path.join(os.path.dirname(__file__), 'bridges', 'hub-data.json')
d = json.load(open(src, encoding='utf-8'))
random.seed(543)
VER = {'size': '1.1.0', 'cam': '1.3.0', 'player': '1.0.0', 'studio': '1.0.0', 'rec': '1.0.0', 'voiceopen': '1.1.0', 'code': '1.5.0', 'llearn': '1.1.0', 'shot': '1.0.0'}
NEW = {'rec': '1.1.0', 'code': '1.6.0'}           # pretend these have an update waiting
NOT_INSTALLED = {'studio'}
RUNNING = {'rec', 'llearn'}
apps = []
for a in d['state']['apps']:
    k = a['key']
    folder = a['name']
    a['dev'] = ''
    if k in ('voiceopen', 'llearn'): a['repo'] = 'Pangpond543/prism-' + k
    a['running'] = k in RUNNING
    a['runningPath'] = ''
    a['others'] = []
    a['startupState'] = {'on': k in ('rec', 'voiceopen')}
    if k in NOT_INSTALLED:
        a['install'] = None
    else:
        setup = k in ('size', 'cam', 'code')
        base = r'C:\Program Files' if setup else r'D:\Apps'
        exe = a['exe']
        a['install'] = {'byHub': not setup, 'dir': f'{base}\\{folder}', 'exe': f'{base}\\{folder}\\{exe}', 'exists': True,
                        'kind': 'setup' if setup else 'portable', 'source': 'setup' if setup else 'hub', 'uninstall': '', 'version': VER[k]}
    apps.append(a)
d['state']['apps'] = apps
d['state']['suite'] = None
d['state']['hotkeyOk'] = True
d['state']['hubStartup'] = {'on': True}
d['about'].update({'sandbox': False, 'version': '1.0.0', 'repo': 'Pangpond543/prism-hub'})
d['settings'].update({'hotkey': 'Ctrl+Alt+Space', 'notify': True, 'showDev': False})
# 30 days of usage minutes
days = {}
today = datetime.date(2026, 11, 25)
weights = {'llearn': 55, 'rec': 25, 'code': 40, 'cam': 30, 'player': 35, 'shot': 12, 'size': 6, 'voiceopen': 20}
for i in range(150):
    day = (today - datetime.timedelta(days=i)).isoformat()
    e = {}
    for k, w in weights.items():
        if random.random() < (0.65 if i < 60 else 0.35):
            r = int(w * 60 * random.uniform(0.2, 1.6))
            e[k] = {'r': r, 'a': int(r * random.uniform(0.4, 0.8)), 'n': random.randint(1, 4)}
    days[day] = e
d['usage'] = {'data': {'days': days}, 'today': today.isoformat()}
# health: keep the system checks' shape, made-up numbers
items = []
for it in d['health']['items']:
    if 'Drive' in it['en'] or 'ไดรฟ์' in it['th']:
        it['en'] = 'Drive C:\\ has 182 GB free of 476 GB'; it['th'] = 'ไดรฟ์ C:\\ ว่าง 182 GB จาก 476 GB'
    if 'WebView2' in it['en']:
        it['en'] = 'WebView2 is installed — most Prism apps draw their window with it'; it['th'] = 'มี WebView2 แล้ว — ใช้แสดงหน้าต่างของแอป Prism ส่วนใหญ่'
    if it.get('app') == 'studio': continue
    if it.get('level') != 'ok' and it.get('app') != 'shot': continue
    items.append(it)
d['health']['items'] = items
# releases: keep the public GitHub shape, set demo versions
rels = {}
for a in apps:
    k = a['key']
    if not a.get('repo'): continue
    tmpl = json.loads(json.dumps(d['rel_cam']))
    v = NEW.get(k, VER[k])
    nm = a['name']
    tmpl['key'] = k; tmpl['current'] = VER[k] if a['install'] else ''; tmpl['hasUpdate'] = k in NEW
    tmpl['stale'] = False; tmpl['ok'] = True; tmpl['reason'] = ''
    body = (f"## {nm} {v}\n\n### ภาษาไทย\n- ปรับให้เร็วขึ้นและเสถียรขึ้น\n- แก้ปัญหาเล็กๆ ที่ผู้ใช้แจ้งมา\n\n---\n\n"
            f"### English\n- Faster and more stable\n- Small fixes from user reports")
    slug = nm.replace(' ', '-')
    lat = {'assets': [{'downloads': 12, 'name': f'{slug}-{v}-Setup.exe', 'size': 18_000_000, 'url': ''},
                      {'downloads': 7, 'name': f'{slug}-{v}-Portable.zip', 'size': 19_000_000, 'url': ''}],
           'body': body, 'date': '2026-11-24T10:00:00Z', 'name': f'{nm} {v}', 'pre': False, 'tag': f'v{v}', 'url': '', 'version': v}
    tmpl['latest'] = lat
    tmpl['releases'] = [lat]
    rels[k] = tmpl
d['rel'] = rels
for k in [k for k in d if k.startswith('rel_')]: del d[k]
# disk
disk = {}
for a in apps:
    k = a['key']
    inst = a['install'] is not None
    prog = {'size': 320e6, 'cam': 210e6, 'player': 140e6, 'studio': 0, 'rec': 160e6, 'voiceopen': 120e6, 'code': 95e6, 'llearn': 650e6, 'shot': 180e6}[k]
    models = {'voiceopen': 840e6, 'llearn': 2.49e9, 'shot': 30e6, 'cam': 60e6}.get(k, 0) if inst else 0
    data = random.randint(2, 300) * 1e6 if inst else 0
    disk[k] = {'cache': random.randint(0, 80) * 1e6 if inst else 0, 'data': int(data), 'dataDirs': [], 'driveFree': 182e9, 'driveTotal': 476e9,
               'installed': inst, 'key': k, 'models': int(models), 'program': int(prog), 'programDir': a['install']['dir'] if inst else '',
               'total': int(prog + models + data)}
d['disk'] = disk
for k in [k for k in d if k.startswith('disk_')]: del d[k]
s = json.dumps(d, ensure_ascii=False, indent=1)
assert os.path.basename(os.path.expanduser('~')) not in s and 'OneDrive' not in s and 'Users' not in s, 'real path left in demo data'
open(out, 'w', encoding='utf-8').write(s)
print('wrote', out, len(s))
