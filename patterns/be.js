﻿// Created by Olexandr Zhydenko ((olexandr.zhydenko (at) gmail.com)
//
// Based on the file: hyph_be_BY.dic
// Created by: Alex Buloichik <alex73mail at gmail dot com>
// Corrected by: Liasovich Sviatlana <xelj.gjkz atbk dot ru>
// License: LGPL
if (typeof Hyphenator === 'undefined') {
    Hyphenator = [];
    Hyphenator.languages = [];
}
/*global Hyphenator*/
Hyphenator.languages['be'] = {
    leftmin: 2,
    rightmin: 2,
    specialChars: "'’абвгґдежзиійклмнопрстуўфхцчшьыэюя",
    patterns: {
        3: "а1аа1еа1ёа1іа1оа1уа1ыа1эа1юа1яе1ае1ее1ёе1іе1ое1уе1ые1эе1юе1яё1аё1её1ёё1іё1оё1уё1ыё1эё1юё1яі1аі1еі1ёі1іі1оі1уі1ыі1эі1юі1яо1ао1ео1ёо1іо1оо1уо1ыо1эо1юо1яу1ау1еу1ёу1іу1оу1уу1ыу1эу1юу1яы1аы1еы1ёы1іы1оы1уы1ыы1эы1юы1яэ1аэ1еэ1ёэ1іэ1оэ1уэ1ыэ1ээ1юэ1яю1аю1ею1ёю1ію1ою1ую1ыю1эю1юю1яя1ая1ея1ёя1ія1оя1уя1ыя1эя1юя1я_б88б__в88в__г88г__ґ88ґ__д88д__ж88ж__з88з__й88й__к88к__л88л__м88м__н88н__п88п__р88р__с88с__т88т__ў88ў__ф88ф__х88х__ц88ц__ч88ч__ш88ш__ь88ь__а88а__е88е__ё88ё__і88і__о88о__у88у__ы88ы__э88э__ю88ю__я88я_б1бв1вг1гґ1ґд1дж1жз1зй1йк1кл1лм1мн1нп1пр1рс1ст1тў1ўф1фх1хц1цч1чш1шь1ьб8ьв8ьг8ьґ8ьд8ьж8ьз8ьй8ьк8ьл8ьм8ьн8ьп8ьр8ьс8ьт8ьў8ьф8ьх8ьц8ьч8ьш8ьь8ьд8зд8ж",
        4: "1б8а1б8е1б8ё1б8і1б8о1б8у1б8ы1б8э1б8ю1б8я1в8а1в8е1в8ё1в8і1в8о1в8у1в8ы1в8э1в8ю1в8я1г8а1г8е1г8ё1г8і1г8о1г8у1г8ы1г8э1г8ю1г8я1ґ8а1ґ8е1ґ8ё1ґ8і1ґ8о1ґ8у1ґ8ы1ґ8э1ґ8ю1ґ8я1д8а1д8е1д8ё1д8і1д8о1д8у1д8ы1д8э1д8ю1д8я1ж8а1ж8е1ж8ё1ж8і1ж8о1ж8у1ж8ы1ж8э1ж8ю1ж8я1з8а1з8е1з8ё1з8і1з8о1з8у1з8ы1з8э1з8ю1з8я1й8а1й8е1й8ё1й8і1й8о1й8у1й8ы1й8э1й8ю1й8я1к8а1к8е1к8ё1к8і1к8о1к8у1к8ы1к8э1к8ю1к8я1л8а1л8е1л8ё1л8і1л8о1л8у1л8ы1л8э1л8ю1л8я1м8а1м8е1м8ё1м8і1м8о1м8у1м8ы1м8э1м8ю1м8я1н8а1н8е1н8ё1н8і1н8о1н8у1н8ы1н8э1н8ю1н8я1п8а1п8е1п8ё1п8і1п8о1п8у1п8ы1п8э1п8ю1п8я1р8а1р8е1р8ё1р8і1р8о1р8у1р8ы1р8э1р8ю1р8я1с8а1с8е1с8ё1с8і1с8о1с8у1с8ы1с8э1с8ю1с8я1т8а1т8е1т8ё1т8і1т8о1т8у1т8ы1т8э1т8ю1т8я1ў8а1ў8е1ў8ё1ў8і1ў8о1ў8у1ў8ы1ў8э1ў8ю1ў8я1ф8а1ф8е1ф8ё1ф8і1ф8о1ф8у1ф8ы1ф8э1ф8ю1ф8я1х8а1х8е1х8ё1х8і1х8о1х8у1х8ы1х8э1х8ю1х8я1ц8а1ц8е1ц8ё1ц8і1ц8о1ц8у1ц8ы1ц8э1ц8ю1ц8я1ч8а1ч8е1ч8ё1ч8і1ч8о1ч8у1ч8ы1ч8э1ч8ю1ч8я1ш8а1ш8е1ш8ё1ш8і1ш8о1ш8у1ш8ы1ш8э1ш8ю1ш8я1ь8а1ь8е1ь8ё1ь8і1ь8о1ь8у1ь8ы1ь8э1ь8ю1ь8я_бб88бб__бв88бв__бг88бг__бґ88бґ__бд88бд__бж88бж__бз88бз__бй88бй__бк88бк__бл88бл__бм88бм__бн88бн__бп88бп__бр88бр__бс88бс__бт88бт__бў88бў__бф88бф__бх88бх__бц88бц__бч88бч__бш88бш__бь88бь__б'8_б’8_вб88вб__вв88вв__вг88вг__вґ88вґ__вд88вд__вж88вж__вз88вз__вй88вй__вк88вк__вл88вл__вм88вм__вн88вн__вп88вп__вр88вр__вс88вс__вт88вт__вў88вў__вф88вф__вх88вх__вц88вц__вч88вч__вш88вш__вь88вь__в'8_в’8_гб88гб__гв88гв__гг88гг__гґ88гґ__гд88гд__гж88гж__гз88гз__гй88гй__гк88гк__гл88гл__гм88гм__гн88гн__гп88гп__гр88гр__гс88гс__гт88гт__гў88гў__гф88гф__гх88гх__гц88гц__гч88гч__гш88гш__гь88гь__г'8_г’8_ґб88ґб__ґв88ґв__ґг88ґг__ґґ88ґґ__ґд88ґд__ґж88ґж__ґз88ґз__ґй88ґй__ґк88ґк__ґл88ґл__ґм88ґм__ґн88ґн__ґп88ґп__ґр88ґр__ґс88ґс__ґт88ґт__ґў88ґў__ґф88ґф__ґх88ґх__ґц88ґц__ґч88ґч__ґш88ґш__ґь88ґь__ґ'8_ґ’8_дб88дб__дв88дв__дг88дг__дґ88дґ__дд88дд__дж88дж__дз88дз__дй88дй__дк88дк__дл88дл__дм88дм__дн88дн__дп88дп__др88др__дс88дс__дт88дт__дў88дў__дф88дф__дх88дх__дц88дц__дч88дч__дш88дш__дь88дь__д'8_д’8_жб88жб__жв88жв__жг88жг__жґ88жґ__жд88жд__жж88жж__жз88жз__жй88жй__жк88жк__жл88жл__жм88жм__жн88жн__жп88жп__жр88жр__жс88жс__жт88жт__жў88жў__жф88жф__жх88жх__жц88жц__жч88жч__жш88жш__жь88жь__ж'8_ж’8_зб88зб__зв88зв__зг88зг__зґ88зґ__зд88зд__зж88зж__зз88зз__зй88зй__зк88зк__зл88зл__зм88зм__зн88зн__зп88зп__зр88зр__зс88зс__зт88зт__зў88зў__зф88зф__зх88зх__зц88зц__зч88зч__зш88зш__зь88зь__з'8_з’8_йб88йб__йв88йв__йг88йг__йґ88йґ__йд88йд__йж88йж__йз88йз__йй88йй__йк88йк__йл88йл__йм88йм__йн88йн__йп88йп__йр88йр__йс88йс__йт88йт__йў88йў__йф88йф__йх88йх__йц88йц__йч88йч__йш88йш__йь88йь__й'8_й’8_кб88кб__кв88кв__кг88кг__кґ88кґ__кд88кд__кж88кж__кз88кз__кй88кй__кк88кк__кл88кл__км88км__кн88кн__кп88кп__кр88кр__кс88кс__кт88кт__кў88кў__кф88кф__кх88кх__кц88кц__кч88кч__кш88кш__кь88кь__к'8_к’8_лб88лб__лв88лв__лг88лг__лґ88лґ__лд88лд__лж88лж__лз88лз__лй88лй__лк88лк__лл88лл__лм88лм__лн88лн__лп88лп__лр88лр__лс88лс__лт88лт__лў88лў__лф88лф__лх88лх__лц88лц__лч88лч__лш88лш__ль88ль__л'8_л’8_мб88мб__мв88мв__мг88мг__мґ88мґ__мд88мд__мж88мж__мз88мз__мй88мй__мк88мк__мл88мл__мм88мм__мн88мн__мп88мп__мр88мр__мс88мс__мт88мт__мў88мў__мф88мф__мх88мх__мц88мц__мч88мч__мш88мш__мь88мь__м'8_м’8_нб88нб__нв88нв__нг88нг__нґ88нґ__нд88нд__нж88нж__нз88нз__нй88нй__нк88нк__нл88нл__нм88нм__нн88нн__нп88нп__нр88нр__нс88нс__нт88нт__нў88нў__нф88нф__нх88нх__нц88нц__нч88нч__нш88нш__нь88нь__н'8_н’8_пб88пб__пв88пв__пг88пг__пґ88пґ__пд88пд__пж88пж__пз88пз__пй88пй__пк88пк__пл88пл__пм88пм__пн88пн__пп88пп__пр88пр__пс88пс__пт88пт__пў88пў__пф88пф__пх88пх__пц88пц__пч88пч__пш88пш__пь88пь__п'8_п’8_рб88рб__рв88рв__рг88рг__рґ88рґ__рд88рд__рж88рж__рз88рз__рй88рй__рк88рк__рл88рл__рм88рм__рн88рн__рп88рп__рр88рр__рс88рс__рт88рт__рў88рў__рф88рф__рх88рх__рц88рц__рч88рч__рш88рш__рь88рь__р'8_р’8_сб88сб__св88св__сг88сг__сґ88сґ__сд88сд__сж88сж__сз88сз__сй88сй__ск88ск__сл88сл__см88см__сн88сн__сп88сп__ср88ср__сс88сс__ст88ст__сў88сў__сф88сф__сх88сх__сц88сц__сч88сч__сш88сш__сь88сь__с'8_с’8_тб88тб__тв88тв__тг88тг__тґ88тґ__тд88тд__тж88тж__тз88тз__тй88тй__тк88тк__тл88тл__тм88тм__тн88тн__тп88тп__тр88тр__тс88тс__тт88тт__тў88тў__тф88тф__тх88тх__тц88тц__тч88тч__тш88тш__ть88ть__т'8_т’8_ўб88ўб__ўв88ўв__ўг88ўг__ўґ88ўґ__ўд88ўд__ўж88ўж__ўз88ўз__ўй88ўй__ўк88ўк__ўл88ўл__ўм88ўм__ўн88ўн__ўп88ўп__ўр88ўр__ўс88ўс__ўт88ўт__ўў88ўў__ўф88ўф__ўх88ўх__ўц88ўц__ўч88ўч__ўш88ўш__ўь88ўь__ў'8_ў’8_фб88фб__фв88фв__фг88фг__фґ88фґ__фд88фд__фж88фж__фз88фз__фй88фй__фк88фк__фл88фл__фм88фм__фн88фн__фп88фп__фр88фр__фс88фс__фт88фт__фў88фў__фф88фф__фх88фх__фц88фц__фч88фч__фш88фш__фь88фь__ф'8_ф’8_хб88хб__хв88хв__хг88хг__хґ88хґ__хд88хд__хж88хж__хз88хз__хй88хй__хк88хк__хл88хл__хм88хм__хн88хн__хп88хп__хр88хр__хс88хс__хт88хт__хў88хў__хф88хф__хх88хх__хц88хц__хч88хч__хш88хш__хь88хь__х'8_х’8_цб88цб__цв88цв__цг88цг__цґ88цґ__цд88цд__цж88цж__цз88цз__цй88цй__цк88цк__цл88цл__цм88цм__цн88цн__цп88цп__цр88цр__цс88цс__цт88цт__цў88цў__цф88цф__цх88цх__цц88цц__цч88цч__цш88цш__ць88ць__ц'8_ц’8_чб88чб__чв88чв__чг88чг__чґ88чґ__чд88чд__чж88чж__чз88чз__чй88чй__чк88чк__чл88чл__чм88чм__чн88чн__чп88чп__чр88чр__чс88чс__чт88чт__чў88чў__чф88чф__чх88чх__чц88чц__чч88чч__чш88чш__чь88чь__ч'8_ч’8_шб88шб__шв88шв__шг88шг__шґ88шґ__шд88шд__шж88шж__шз88шз__шй88шй__шк88шк__шл88шл__шм88шм__шн88шн__шп88шп__шр88шр__шс88шс__шт88шт__шў88шў__шф88шф__шх88шх__шц88шц__шч88шч__шш88шш__шь88шь__ш'8_ш’8_ьб88ьб__ьв88ьв__ьг88ьг__ьґ88ьґ__ьд88ьд__ьж88ьж__ьз88ьз__ьй88ьй__ьк88ьк__ьл88ьл__ьм88ьм__ьн88ьн__ьп88ьп__ьр88ьр__ьс88ьс__ьт88ьт__ьў88ьў__ьф88ьф__ьх88ьх__ьц88ьц__ьч88ьч__ьш88ьш__ьь88ьь__ь'8_ь’8б8'1б8’1в8'1в8’1г8'1г8’1ґ8'1ґ8’1д8'1д8’1ж8'1ж8’1з8'1з8’1й8'1й8’1к8'1к8’1л8'1л8’1м8'1м8’1н8'1н8’1п8'1п8’1р8'1р8’1с8'1с8’1т8'1т8’1ў8'1ў8’1ф8'1ф8’1х8'1х8’1ц8'1ц8’1ч8'1ч8’1ш8'1ш8’1ь8'1ь8’1б8а3б8у3б8о3б8е3б8ё3б8ы3б8э3б8і3в8а3в8у3в8о3в8е3в8ё3в8ы3в8э3в8і3г8а3г8у3г8о3г8е3г8ё3г8ы3г8э3г8і3ґ8а3ґ8у3ґ8о3ґ8е3ґ8ё3ґ8ы3ґ8э3ґ8і3д8а3д8у3д8о3д8е3д8ё3д8ы3д8э3д8і3ж8а3ж8у3ж8о3ж8е3ж8ё3ж8ы3ж8э3ж8і3з8а3з8у3з8о3з8е3з8ё3з8ы3з8э3з8і3к8а3к8у3к8о3к8е3к8ё3к8ы3к8э3к8і3л8а3л8у3л8о3л8е3л8ё3л8ы3л8э3л8і3м8а3м8у3м8о3м8е3м8ё3м8ы3м8э3м8і3н8а3н8у3н8о3н8е3н8ё3н8ы3н8э3н8і3п8а3п8у3п8о3п8е3п8ё3п8ы3п8э3п8і3р8а3р8у3р8о3р8е3р8ё3р8ы3р8э3р8і3с8а3с8у3с8о3с8е3с8ё3с8ы3с8э3с8і3т8а3т8у3т8о3т8е3т8ё3т8ы3т8э3т8і3ф8а3ф8у3ф8о3ф8е3ф8ё3ф8ы3ф8э3ф8і3х8а3х8у3х8о3х8е3х8ё3х8ы3х8э3х8і3ц8а3ц8у3ц8о3ц8е3ц8ё3ц8ы3ц8э3ц8і3ч8а3ч8у3ч8о3ч8е3ч8ё3ч8ы3ч8э3ч8і3ш8а3ш8у3ш8о3ш8е3ш8ё3ш8ы3ш8э3ш8і3а8й1о8й1е8й1і8й1э8й1ю8й1я8й1ё8й1ы8й1а8ў1о8ў1е8ў1і8ў1э8ў1ю8ў1я8ў1ё8ў1ы8ў1б8'1б8’1в8'1в8’1г8'1г8’1ґ8'1ґ8’1д8'1д8’1ж8'1ж8’1з8'1з8’1к8'1к8’1л8'1л8’1м8'1м8’1н8'1н8’1п8'1п8’1р8'1р8’1с8'1с8’1т8'1т8’1ф8'1ф8’1х8'1х8’1ц8'1ц8’1ч8'1ч8’1ш8'1ш8’1б8ь1в8ь1г8ь1ґ8ь1д8ь1ж8ь1з8ь1к8ь1л8ь1м8ь1н8ь1п8ь1р8ь1с8ь1т8ь1ф8ь1х8ь1ц8ь1ч8ь1ш8ь1",
        5: "_ад1б_ад1в_ад1г_ад1ґ_ад1д_ад1ж_ад1з_ад1к_ад1л_ад1м_ад1н_ад1п_ад1р_ад1с_ад1т_ад1ф_ад1х_ад1ц_ад1ч_ад1ш_аб1б_аб1в_аб1г_аб1ґ_аб1д_аб1ж_аб1з_аб1к_аб1л_аб1м_аб1н_аб1п_аб1р_аб1с_аб1т_аб1ф_аб1х_аб1ц_аб1ч_аб1ш_уз1б_уз1в_уз1г_уз1ґ_уз1д_уз1ж_уз1з_уз1к_уз1л_уз1м_уз1н_уз1п_уз1р_уз1с_уз1т_уз1ф_уз1х_уз1ц_уз1ч_уз1ш_ус1б_ус1в_ус1г_ус1ґ_ус1д_ус1ж_ус1з_ус1к_ус1л_ус1м_ус1н_ус1п_ус1р_ус1с_ус1т_ус1ф_ус1х_ус1ц_ус1ч_ус1ш8льш_8сць_8дзь_",
        6: "_над1б_над1в_над1г_над1ґ_над1д_над1ж_над1з_над1к_над1л_над1м_над1н_над1п_над1р_над1с_над1т_над1ф_над1х_над1ц_над1ч_над1ш_пад1б_пад1в_пад1г_пад1ґ_пад1д_пад1ж_пад1з_пад1к_пад1л_пад1м_пад1н_пад1п_пад1р_пад1с_пад1т_пад1ф_пад1х_пад1ц_пад1ч_пад1ш_раз1б_раз1в_раз1г_раз1ґ_раз1д_раз1ж_раз1з_раз1к_раз1л_раз1м_раз1н_раз1п_раз1р_раз1с_раз1т_раз1ф_раз1х_раз1ц_раз1ч_раз1ш_рас1б_рас1в_рас1г_рас1ґ_рас1д_рас1ж_рас1з_рас1к_рас1л_рас1м_рас1н_рас1п_рас1р_рас1с_рас1т_рас1ф_рас1х_рас1ц_рас1ч_рас1ш_роз1б_роз1в_роз1г_роз1ґ_роз1д_роз1ж_роз1з_роз1к_роз1л_роз1м_роз1н_роз1п_роз1р_роз1с_роз1т_роз1ф_роз1х_роз1ц_роз1ч_роз1ш_бяз1б_бяз1в_бяз1г_бяз1ґ_бяз1д_бяз1ж_бяз1з_бяз1к_бяз1л_бяз1м_бяз1н_бяз1п_бяз1р_бяз1с_бяз1т_бяз1ф_бяз1х_бяз1ц_бяз1ч_бяз1ш_без1б_без1в_без1г_без1ґ_без1д_без1ж_без1з_без1к_без1л_без1м_без1н_без1п_без1р_без1с_без1т_без1ф_без1х_без1ц_без1ч_без1ш_бяс1б_бяс1в_бяс1г_бяс1ґ_бяс1д_бяс1ж_бяс1з_бяс1к_бяс1л_бяс1м_бяс1н_бяс1п_бяс1р_бяс1с_бяс1т_бяс1ф_бяс1х_бяс1ц_бяс1ч_бяс1ш_бес1б_бес1в_бес1г_бес1ґ_бес1д_бес1ж_бес1з_бес1к_бес1л_бес1м_бес1н_бес1п_бес1р_бес1с_бес1т_бес1ф_бес1х_бес1ц_бес1ч_бес1ш_рос1б_рос1в_рос1г_рос1ґ_рос1д_рос1ж_рос1з_рос1к_рос1л_рос1м_рос1н_рос1п_рос1р_рос1с_рос1т_рос1ф_рос1х_рос1ц_рос1ч_рос1швё8рст",
        7: "_праз1б_праз1в_праз1г_праз1ґ_праз1д_праз1ж_праз1з_праз1к_праз1л_праз1м_праз1н_праз1п_праз1р_праз1с_праз1т_праз1ф_праз1х_праз1ц_праз1ч_праз1ш_ад8зінтэ8мбр__дву8х3_шма8т1",
        8: "_перад1б_перад1в_перад1г_перад1ґ_перад1д_перад1ж_перад1з_перад1к_перад1л_перад1м_перад1н_перад1п_перад1р_перад1с_перад1т_перад1ф_перад1х_перад1ц_перад1ч_перад1ш_цераз1б_цераз1в_цераз1г_цераз1ґ_цераз1д_цераз1ж_цераз1з_цераз1к_цераз1л_цераз1м_цераз1н_цераз1п_цераз1р_цераз1с_цераз1т_цераз1ф_цераз1х_цераз1ц_цераз1ч_цераз1ш_церас1б_церас1в_церас1г_церас1ґ_церас1д_церас1ж_церас1з_церас1к_церас1л_церас1м_церас1н_церас1п_церас1р_церас1с_церас1т_церас1ф_церас1х_церас1ц_церас1ч_церас1шна1д8вор",
        9: "за1п8люшч_па1д8зял_па1д8зелраз1г8лядраз1г8ледзло1ў8жыв_па1д8зяк_вы1к8люч",
        10: "віда1з8мянвіда1з8менза3ц8вярдз_па3г8лядз",
        12: "слова1ў8тваркрова3ў8твар"
    }
};