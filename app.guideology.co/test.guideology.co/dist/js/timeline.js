/* eslint-disable */ ! function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((e = "undefined" != typeof globalThis ? globalThis : e || self).mobiscroll = {})
}(this, (function(e) {
    "use strict";
    var t = {
            apiKey: "ddc9a47a",
            apiUrl: "https://trial.mobiscroll.com/"
        },
        n = function(e, t) {
            return (n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                })(e, t)
        };

    function a(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

        function a() {
            this.constructor = e
        }
        n(e, t), e.prototype = null === t ? Object.create(t) : (a.prototype = t.prototype, new a)
    }
    var s = function() {
        return (s = Object.assign || function(e) {
            for (var t, n = 1, a = arguments.length; n < a; n++)
                for (var s in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
            return e
        }).apply(this, arguments)
    };

    function i(e, t) {
        var n = {};
        for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (n[a] = e[a]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
            var s = 0;
            for (a = Object.getOwnPropertySymbols(e); s < a.length; s++) t.indexOf(a[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[s]) && (n[a[s]] = e[a[s]])
        }
        return n
    }
    var r, o, l, c, h = function() {
            function e() {
                this.nr = 0, this.keys = 1, this.subscribers = {}
            }
            return e.prototype.subscribe = function(e) {
                var t = this.keys++;
                return this.subscribers[t] = e, this.nr++, t
            }, e.prototype.unsubscribe = function(e) {
                this.nr--, delete this.subscribers[e]
            }, e.prototype.next = function(e) {
                var t = this.subscribers;
                for (var n in t) t.hasOwnProperty(n) && t[n](e)
            }, e
        }(),
        d = [],
        u = !1,
        m = "undefined" != typeof window,
        _ = m && window.matchMedia && window.matchMedia("(prefers-color-scheme:dark)"),
        p = m ? navigator.userAgent : "",
        v = m ? navigator.platform : "",
        f = m ? navigator.maxTouchPoints : 0,
        g = p && p.match(/Android|iPhone|iPad|iPod|Windows Phone|Windows|MSIE/i),
        y = p && /Safari/.test(p);
    /Android/i.test(g) ? (r = "android", o = p.match(/Android\s+([\d.]+)/i), u = !0, o && (d = o[0].replace("Android ", "").split("."))) : /iPhone|iPad|iPod/i.test(g) || /iPhone|iPad|iPod/i.test(v) || "MacIntel" === v && f > 1 ? (r = "ios", o = p.match(/OS\s+([\d_]+)/i), u = !0, o && (d = o[0].replace(/_/g, ".").replace("OS ", "").split("."))) : /Windows Phone/i.test(g) ? (r = "wp", u = !0) : /Windows|MSIE/i.test(g) && (r = "windows"), l = +d[0], c = +d[1];
    var b = {},
        x = {},
        T = {},
        D = {},
        C = new h;

    function S() {
        var e = "",
            t = "",
            n = "";
        for (var a in t = "android" === r ? "material" : "wp" === r || "windows" === r ? "windows" : "ios", T) {
            if (T[a].baseTheme === t && !1 !== T[a].auto && a !== t + "-dark") {
                e = a;
                break
            }
            a === t ? e = a : n || (n = a)
        }
        return e || n
    }

    function w(e, t, n) {
        var a = T[t];
        T[e] = s({}, a, {
            auto: n,
            baseTheme: t
        }), D.theme = S()
    }
    var k = {
            majorVersion: l,
            minorVersion: c,
            name: r
        },
        M = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z"/></svg>',
        E = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"/></svg>',
        N = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"/></svg>',
        I = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 217.9L383 345c9.4 9.4 24.6 9.4 33.9 0 9.4-9.4 9.3-24.6 0-34L273 167c-9.1-9.1-23.7-9.3-33.1-.7L95 310.9c-4.7 4.7-7 10.9-7 17s2.3 12.3 7 17c9.4 9.4 24.6 9.4 33.9 0l127.1-127z"/></svg>',
        L = '<svg xmlns="http://www.w3.org/2000/svg" height="17" viewBox="0 0 17 17" width="17"><path d="M8.5 0a8.5 8.5 0 110 17 8.5 8.5 0 010-17zm3.364 5.005a.7.7 0 00-.99 0l-2.44 2.44-2.439-2.44-.087-.074a.7.7 0 00-.903 1.064l2.44 2.439-2.44 2.44-.074.087a.7.7 0 001.064.903l2.439-2.441 2.44 2.441.087.074a.7.7 0 00.903-1.064l-2.441-2.44 2.441-2.439.074-.087a.7.7 0 00-.074-.903z" fill="currentColor" fill-rule="evenodd"/></svg>',
        H = {
            clearIcon: L,
            labelStyle: "inline"
        };
    T.ios = {
        Calendar: {
            nextIconH: N,
            nextIconV: E,
            prevIconH: M,
            prevIconV: I
        },
        Checkbox: {
            position: "end"
        },
        Datepicker: {
            clearIcon: L,
            display: "bottom"
        },
        Dropdown: H,
        Eventcalendar: {
            chevronIconDown: E,
            nextIconH: N,
            nextIconV: E,
            prevIconH: M,
            prevIconV: I
        },
        Input: H,
        Radio: {
            position: "end"
        },
        Scroller: {
            display: "bottom",
            itemHeight: 34,
            minWheelWidth: 55,
            rows: 5,
            scroll3d: !0
        },
        SegmentedGroup: {
            drag: !0
        },
        Select: {
            clearIcon: L
        },
        Textarea: H
    }, w("ios-dark", "ios");
    var O = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7 10l5 5 5-5z"/><path d="M0 0h24v24H0z" fill="none"/></svg>',
        Y = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7 14l5-5 5 5z"/><path d="M0 0h24v24H0z" fill="none"/></svg>',
        P = '<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36"><path d="M23.12 11.12L21 9l-9 9 9 9 2.12-2.12L16.24 18z"/></svg>',
        F = '<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36"><path d="M15 9l-2.12 2.12L19.76 18l-6.88 6.88L15 27l9-9z"/></svg>',
        z = '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"/></svg>',
        V = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/><path fill="none" d="M0 0h24v24H0V0z"/></svg>',
        R = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"/><path d="M0 0h24v24H0z" fill="none"/></svg>',
        A = {
            clearIcon: z,
            dropdownIcon: O,
            inputStyle: "box",
            labelStyle: "floating",
            notch: !0,
            ripple: !0
        };
    T.material = {
        Button: {
            ripple: !0
        },
        Calendar: {
            downIcon: O,
            nextIconH: F,
            nextIconV: V,
            prevIconH: P,
            prevIconV: R,
            upIcon: Y
        },
        Datepicker: {
            clearIcon: z,
            display: "center"
        },
        Dropdown: A,
        Eventcalendar: {
            chevronIconDown: V,
            colorEventList: !0,
            downIcon: O,
            nextIconH: F,
            nextIconV: V,
            prevIconH: P,
            prevIconV: R,
            upIcon: Y
        },
        Input: A,
        ListItem: {
            ripple: !0
        },
        Scroller: {
            display: "center",
            rows: 3
        },
        Select: {
            clearIcon: z,
            rows: 3
        },
        Textarea: A
    }, w("material-dark", "material");
    var W = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M4.22 10.78l-1.44 1.44 12.5 12.5.72.686.72-.687 12.5-12.5-1.44-1.44L16 22.564 4.22 10.78z"/></svg>',
        U = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M19.03 4.28l-11 11-.686.72.687.72 11 11 1.44-1.44L10.187 16l10.28-10.28-1.437-1.44z"/></svg>',
        B = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M12.97 4.28l-1.44 1.44L21.814 16 11.53 26.28l1.44 1.44 11-11 .686-.72-.687-.72-11-11z"/></svg>',
        j = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M16 6.594l-.72.687-12.5 12.5 1.44 1.44L16 9.437l11.78 11.78 1.44-1.437-12.5-12.5-.72-.686z"/></svg>';
    T.mobiscroll = {
        Calendar: {
            nextIconH: B,
            nextIconV: W,
            prevIconH: U,
            prevIconV: j
        },
        Eventcalendar: {
            nextIconH: B,
            nextIconV: W,
            prevIconH: U,
            prevIconV: j
        },
        Input: {
            notch: !0,
            ripple: !0
        }
    }, w("mobiscroll-dark", "mobiscroll");
    var K = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M15 4v20.063L8.22 17.28l-1.44 1.44 8.5 8.5.72.686.72-.687 8.5-8.5-1.44-1.44L17 24.063V4h-2z"/></svg>',
        J = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M16 4.094l-.72.687-8.5 8.5 1.44 1.44L15 7.936V28h2V7.937l6.78 6.782 1.44-1.44-8.5-8.5-.72-.686z"/></svg>',
        X = '<svg fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32px" height="32px"><path d="M 7.21875 5.78125 L 5.78125 7.21875 L 14.5625 16 L 5.78125 24.78125 L 7.21875 26.21875 L 16 17.4375 L 24.78125 26.21875 L 26.21875 24.78125 L 17.4375 16 L 26.21875 7.21875 L 24.78125 5.78125 L 16 14.5625 Z"/></svg>',
        G = {
            clearIcon: X,
            inputStyle: "box",
            labelStyle: "stacked"
        };
    T.windows = {
        Calendar: {
            nextIconH: B,
            nextIconV: K,
            prevIconH: U,
            prevIconV: J
        },
        Checkbox: {
            position: "start"
        },
        Datepicker: {
            clearIcon: X,
            display: "center"
        },
        Dropdown: G,
        Eventcalendar: {
            chevronIconDown: W,
            nextIconH: B,
            nextIconV: K,
            prevIconH: U,
            prevIconV: J
        },
        Input: G,
        Scroller: {
            display: "center",
            itemHeight: 44,
            minWheelWidth: 88,
            rows: 6
        },
        Select: {
            clearIcon: X,
            rows: 6
        },
        Textarea: G
    }, w("windows-dark", "windows"), D.theme = S();
    var q = {
            rtl: !0,
            setText: "تعيين",
            cancelText: "إلغاء",
            clearText: "مسح",
            closeText: "إغلاق",
            selectedText: "{count} المحدد",
            dateFormat: "DD/MM/YYYY",
            dateFormatLong: "DD/MM/YYYY",
            dateWheelFormat: "|DDD D MMM|",
            dayNames: ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
            dayNamesShort: ["أحد", "اثنين", "ثلاثاء", "أربعاء", "خميس", "جمعة", "سبت"],
            dayNamesMin: ["ح", "ن", "ث", "ر", "خ", "ج", "س"],
            fromText: "يبدا",
            monthNames: ["يناير", "فبراير", "مارس", "ابريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"],
            monthNamesShort: ["يناير", "فبراير", "مارس", "ابريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"],
            amText: "ص",
            pmText: "م",
            timeFormat: "hh:mm A",
            timeWheels: "Ammhh",
            toText: "ينتهي",
            nowText: "الآن",
            firstDay: 0,
            dateText: "تاريخ",
            timeText: "وقت",
            todayText: "اليوم",
            prevMonthText: "الشهر السابق",
            nextMonthText: "الشهر القادم",
            prevYearText: "السنه السابقة",
            nextYearText: "العام القادم",
            allDayText: "اليوم كله",
            noEventsText: "لا توجد احداث",
            eventText: "الحدث",
            eventsText: "أحداث",
            moreEventsText: "واحد آخر",
            moreEventsPluralText: "اثنان آخران {count}",
            weekText: "أسبوع {count}",
            rangeEndHelp: "أختر",
            rangeEndLabel: "ينتهي",
            rangeStartHelp: "أختر",
            rangeStartLabel: "يبدا",
            filterEmptyText: "لا نتيجة",
            filterPlaceholderText: "بحث"
        },
        Z = {
            setText: "Задаване",
            cancelText: "Отмяна",
            clearText: "Изчистване",
            closeText: "затвори",
            selectedText: "{count} подбран",
            dateFormat: "DD.MM.YYYY",
            dateFormatLong: "DD.MM.YYYY",
            dateWheelFormat: "|DDD MM.DD|",
            dayNames: ["Неделя", "Понеделник", "Вторник", "Сряда", "Четвъртък", "Петък", "Събота"],
            dayNamesShort: ["Нед", "Пон", "Вто", "Сря", "Чет", "Пет", "Съб"],
            dayNamesMin: ["Не", "По", "Вт", "Ср", "Че", "Пе", "Съ"],
            fromText: "ОТ",
            monthNames: ["Януари", "Февруари", "Март", "Април", "Май", "Юни", "Юли", "Август", "Септември", "Октомври", "Ноември", "Декември"],
            monthNamesShort: ["Яну", "Фев", "Мар", "Апр", "Май", "Юни", "Юли", "Авг", "Сеп", "Окт", "Нов", "Дек"],
            timeFormat: "H:mm",
            toText: "ДО",
            nowText: "Сега",
            pmText: "pm",
            amText: "am",
            firstDay: 1,
            dateText: "Дата",
            timeText: "път",
            todayText: "днес",
            prevMonthText: "Предишния месец",
            nextMonthText: "Следващият месец",
            prevYearText: "Предходната година",
            nextYearText: "Следващата година",
            eventText: "Събитие",
            eventsText: "Събития",
            allDayText: "Цял ден",
            noEventsText: "Няма събития",
            moreEventsText: "Още {count}",
            weekText: "Седмица {count}",
            rangeStartLabel: "ОТ",
            rangeEndLabel: "ДО",
            rangeStartHelp: "Избирам",
            rangeEndHelp: "Избирам",
            filterEmptyText: "Без резултат",
            filterPlaceholderText: "Търсене"
        },
        $ = {
            setText: "Acceptar",
            cancelText: "Cancel·lar",
            clearText: "Esborrar",
            closeText: "Tancar",
            selectedText: "{count} seleccionat",
            selectedPluralText: "{count} seleccionats",
            dateFormat: "DD/MM/YYYY",
            dateFormatLong: "DDD, D MMM YYYY",
            dateWheelFormat: "|DDD D MMM|",
            dayNames: ["Diumenge", "Dilluns", "Dimarts", "Dimecres", "Dijous", "Divendres", "Dissabte"],
            dayNamesShort: ["Dg", "Dl", "Dt", "Dc", "Dj", "Dv", "Ds"],
            dayNamesMin: ["Dg", "Dl", "Dt", "Dc", "Dj", "Dv", "Ds"],
            fromText: "Iniciar",
            monthNames: ["Gener", "Febrer", "Març", "Abril", "Maig", "Juny", "Juliol", "Agost", "Setembre", "Octubre", "Novembre", "Desembre"],
            monthNamesShort: ["Gen", "Feb", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Oct", "Nov", "Des"],
            timeFormat: "H:mm",
            toText: "Final",
            nowText: "Ara",
            pmText: "pm",
            amText: "am",
            todayText: "Avui",
            firstDay: 1,
            dateText: "Data",
            timeText: "Temps",
            allDayText: "Tot el dia",
            noEventsText: "Cap esdeveniment",
            eventText: "Esdeveniments",
            eventsText: "Esdeveniments",
            moreEventsText: "{count} més",
            weekText: "Setmana {count}",
            rangeStartLabel: "Iniciar",
            rangeEndLabel: "Final",
            rangeStartHelp: "Seleccionar",
            rangeEndHelp: "Seleccionar",
            filterEmptyText: "Cap resultat",
            filterPlaceholderText: "Buscar"
        },
        Q = {
            setText: "Zadej",
            cancelText: "Storno",
            clearText: "Vymazat",
            closeText: "Zavřít",
            selectedText: "Označený: {count}",
            dateFormat: "DD.MM.YYYY",
            dateFormatLong: "DDD, D.M.YYYY",
            dateWheelFormat: "|DDD D. M.|",
            dayNames: ["Neděle", "Pondělí", "Úterý", "Středa", "Čtvrtek", "Pátek", "Sobota"],
            dayNamesShort: ["Ne", "Po", "Út", "St", "Čt", "Pá", "So"],
            dayNamesMin: ["N", "P", "Ú", "S", "Č", "P", "S"],
            fromText: "Začátek",
            monthNames: ["Leden", "Únor", "Březen", "Duben", "Květen", "Červen", "Červenec", "Srpen", "Září", "Říjen", "Listopad", "Prosinec"],
            monthNamesShort: ["Led", "Úno", "Bře", "Dub", "Kvě", "Čer", "Čvc", "Spr", "Zář", "Říj", "Lis", "Pro"],
            timeFormat: "H:mm",
            toText: "Konec",
            nowText: "Teď",
            amText: "am",
            pmText: "pm",
            todayText: "Dnes",
            firstDay: 1,
            dateText: "Datum",
            timeText: "Čas",
            allDayText: "Celý den",
            noEventsText: "Žádné události",
            eventText: "Událostí",
            eventsText: "Události",
            moreEventsText: "{count} další",
            weekText: "{count}. týden",
            rangeStartLabel: "Začátek",
            rangeEndLabel: "Konec",
            rangeStartHelp: "Vybrat",
            rangeEndHelp: "Vybrat",
            filterEmptyText: "Žádné výsledky",
            filterPlaceholderText: "Hledat"
        },
        ee = {
            setText: "Sæt",
            cancelText: "Annuller",
            clearText: "Ryd",
            closeText: "Luk",
            selectedText: "{count} valgt",
            selectedPluralText: "{count} valgt",
            dateFormat: "DD/MM/YYY",
            dateFormatLong: "DDD. D. MMM. YYYY.",
            dateWheelFormat: "|DDD. D. MMM.|",
            dayNames: ["Søndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag"],
            dayNamesShort: ["Søn", "Man", "Tir", "Ons", "Tor", "Fre", "Lør"],
            dayNamesMin: ["S", "M", "T", "O", "T", "F", "L"],
            fromText: "Start",
            monthNames: ["Januar", "Februar", "Marts", "April", "Maj", "Juni", "Juli", "August", "September", "Oktober", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"],
            amText: "am",
            pmText: "pm",
            timeFormat: "HH.mm",
            toText: "Slut",
            nowText: "Nu",
            todayText: "I dag",
            firstDay: 1,
            dateText: "Dato",
            timeText: "Tid",
            allDayText: "Hele dagen",
            noEventsText: "Ingen begivenheder",
            eventText: "Begivenheder",
            eventsText: "Begivenheder",
            moreEventsText: "{count} mere",
            weekText: "Uge {count}",
            rangeStartLabel: "Start",
            rangeEndLabel: "Slut",
            rangeStartHelp: "Vælg",
            rangeEndHelp: "Vælg",
            filterEmptyText: "Ingen resultater",
            filterPlaceholderText: "Søg"
        },
        te = {
            setText: "OK",
            cancelText: "Abbrechen",
            clearText: "Löschen",
            closeText: "Schließen",
            selectedText: "{count} ausgewählt",
            dateFormat: "DD.MM.YYYY",
            dateFormatLong: "DDD. D. MMM. YYYY.",
            dateWheelFormat: "|DDD. D. MMM.|",
            dayNames: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"],
            dayNamesShort: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
            dayNamesMin: ["S", "M", "D", "M", "D", "F", "S"],
            fromText: "Von",
            monthNames: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
            monthNamesShort: ["Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"],
            timeFormat: "HH:mm",
            nowText: "Jetzt",
            pmText: "pm",
            amText: "am",
            todayText: "Heute",
            toText: "Bis",
            firstDay: 1,
            dateText: "Datum",
            timeText: "Zeit",
            allDayText: "Ganztägig",
            noEventsText: "Keine Ereignisse",
            eventText: "Ereignis",
            eventsText: "Ereignisse",
            moreEventsText: "{count} weiteres Element",
            moreEventsPluralText: "{count} weitere Elemente",
            weekText: "Woche {count}",
            rangeStartLabel: "Von",
            rangeEndLabel: "Bis",
            rangeStartHelp: "Auswählen",
            rangeEndHelp: "Auswählen",
            filterEmptyText: "Keine Treffer",
            filterPlaceholderText: "Suchen"
        },
        ne = {
            setText: "Ορισμος",
            cancelText: "Ακυρωση",
            clearText: "Διαγραφη",
            closeText: "Κλείσιμο",
            selectedText: "{count} επιλεγμένα",
            dateFormat: "DD/MM/YYYY",
            dateFormatLong: "DDD, D MMM YYYY",
            dateWheelFormat: "|DDD D MMM|",
            dayNames: ["Κυριακή", "Δευτέρα", "Τρίτη", "Τετάρτη", "Πέμπτη", "Παρασκευή", "Σάββατο"],
            dayNamesShort: ["Κυρ", "Δευ", "Τρι", "Τετ", "Πεμ", "Παρ", "Σαβ"],
            dayNamesMin: ["Κυ", "Δε", "Τρ", "Τε", "Πε", "Πα", "Σα"],
            fromText: "Αρχή",
            monthNames: ["Ιανουάριος", "Φεβρουάριος", "Μάρτιος", "Απρίλιος", "Μάιος", "Ιούνιος", "Ιούλιος", "Αύγουστος", "Σεπτέμβριος", "Οκτώβριος", "Νοέμβριος", "Δεκέμβριος"],
            monthNamesShort: ["Ιαν", "Φεβ", "Μαρ", "Απρ", "Μαι", "Ιουν", "Ιουλ", "Αυγ", "Σεπ", "Οκτ", "Νοε", "Δεκ"],
            timeFormat: "H:mm",
            toText: "Τέλος",
            nowText: "τώρα",
            pmText: "μμ",
            amText: "πμ",
            firstDay: 1,
            dateText: "Ημερομηνία",
            timeText: "φορά",
            todayText: "Σήμερα",
            prevMonthText: "Προηγούμενο μήνα",
            nextMonthText: "Επόμενο μήνα",
            prevYearText: "Προηγούμενο έτος",
            nextYearText: "Επόμενο έτος",
            eventText: "Γεγονότα",
            eventsText: "Γεγονότα",
            allDayText: "Ολοήμερο",
            noEventsText: "Δεν υπάρχουν γεγονότα",
            moreEventsText: "{count} ακόμη",
            weekText: "Εβδομάδα {count}",
            rangeStartLabel: "Αρχή",
            rangeEndLabel: "Τέλος",
            rangeStartHelp: "Επιλογή",
            rangeEndHelp: "Επιλογή",
            filterEmptyText: "Κανένα αποτέλεσμα",
            filterPlaceholderText: "Αναζήτηση"
        },
        ae = {
            dateFormat: "DD/MM/YYYY",
            dateWheelFormat: "|DDD D MMM|",
            timeFormat: "H:mm"
        },
        se = {
            setText: "Aceptar",
            cancelText: "Cancelar",
            clearText: "Borrar",
            closeText: "Cerrar",
            selectedText: "{count} seleccionado",
            selectedPluralText: "{count} seleccionados",
            dateFormat: "DD/MM/YYYY",
            dateFormatLong: "DDD, MMM. D. YYYY",
            dateWheelFormat: "|DDD D MMM|",
            dayNames: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
            dayNamesShort: ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sá"],
            dayNamesMin: ["D", "L", "M", "M", "J", "V", "S"],
            fromText: "Iniciar",
            monthNames: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
            monthNamesShort: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
            timeFormat: "H:mm",
            toText: "Final",
            nowText: "Ahora",
            pmText: "pm",
            amText: "am",
            todayText: "Hoy",
            firstDay: 1,
            dateText: "Fecha",
            timeText: "Tiempo",
            allDayText: "Todo el día",
            noEventsText: "No hay eventos",
            eventText: "Evento",
            eventsText: "Eventos",
            moreEventsText: "{count} más",
            weekText: "Semana {count}",
            rangeStartLabel: "Iniciar",
            rangeEndLabel: "Final",
            rangeStartHelp: "Seleccionar",
            rangeEndHelp: "Seleccionar",
            filterEmptyText: "Sin resultados",
            filterPlaceholderText: "Buscar"
        },
        ie = void 0,
        re = ge(3),
        oe = ge(4),
        le = ge(7);

    function ce(e, t, n) {
        return Math.max(t, Math.min(e, n))
    }

    function he(e) {
        return Array.isArray(e)
    }

    function de(e) {
        return e - parseFloat(e) >= 0
    }

    function ue(e) {
        return "number" == typeof e
    }

    function me(e) {
        return "string" == typeof e
    }

    function _e(e) {
        return e === ie || null === e || "" === e
    }

    function pe(e) {
        return void 0 === e
    }

    function ve(e) {
        return "object" == typeof e
    }

    function fe(e) {
        return null !== e && e !== ie && "" + e != "false"
    }

    function ge(e) {
        return Array.apply(0, Array(Math.max(0, e)))
    }

    function ye(e) {
        return e !== ie ? e + (de(e) ? "px" : "") : ""
    }

    function be() {}

    function xe(e, t) {
        void 0 === t && (t = 2);
        for (var n = e + ""; n.length < t;) n = "0" + n;
        return n
    }

    function Te(e) {
        return Math.round(e)
    }

    function De(e, t) {
        return Ce(e / t) * t
    }

    function Ce(e) {
        return Math.floor(e)
    }

    function Se(e, t) {
        var n, a;
        return void 0 === t && (t = 100),
            function() {
                for (var s = [], i = 0; i < arguments.length; i++) s[i] = arguments[i];
                var r = +new Date;
                n && r < n + t ? (clearTimeout(a), a = setTimeout((function() {
                    n = r, e.apply(void 0, s)
                }), t)) : (n = r, e.apply(void 0, s))
            }
    }

    function we(e, t) {
        var n;
        return void 0 === t && (t = 100),
            function() {
                for (var a = [], s = 0; s < arguments.length; s++) a[s] = arguments[s];
                clearTimeout(n), n = setTimeout((function() {
                    e.apply(void 0, a)
                }), t)
            }
    }

    function ke(e, t) {
        if (e === t) return !0;
        if (e && !t || t && !e) return !1;
        if (e.length !== t.length) return !1;
        for (var n = 0; n < e.length; n++)
            if (e[n] !== t[n]) return !1;
        return !0
    }

    function Me(e, t) {
        e._cdr ? setTimeout(t) : t()
    }

    function Ee(e, t) {
        return Ne(e, t)
    }

    function Ne(e, t, n) {
        for (var a = e.length, s = 0; s < a; s++) {
            var i = e[s];
            if (t(i, s)) return n ? s : i
        }
        return n ? -1 : ie
    }

    function Ie(e, t) {
        return he(e) ? e.map(t) : t(e, 0, [e])
    }

    function Le(e) {
        var t = [];
        if (e)
            for (var n = 0, a = Object.keys(e); n < a.length; n++) {
                var s = a[n];
                t.push(e[s])
            }
        return t
    }
    ge(24);
    var He = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
        Oe = [31, 31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 29];

    function Ye(e, t, n) {
        var a, s = e - 1600,
            i = t - 1,
            r = n - 1,
            o = 365 * s + Ce((s + 3) / 4) - Ce((s + 99) / 100) + Ce((s + 399) / 400);
        for (a = 0; a < i; ++a) o += He[a];
        i > 1 && (s % 4 == 0 && s % 100 != 0 || s % 400 == 0) && ++o;
        var l = (o += r) - 79,
            c = 979 + 33 * Ce(l / 12053) + 4 * Ce((l %= 12053) / 1461);
        for ((l %= 1461) >= 366 && (c += Ce((l - 1) / 365), l = (l - 1) % 365), a = 0; a < 11 && l >= Oe[a]; ++a) l -= Oe[a];
        return [c, a + 1, l + 1]
    }
    var Pe = {
            getYear: function(e) {
                return Ye(e.getFullYear(), e.getMonth() + 1, e.getDate())[0]
            },
            getMonth: function(e) {
                return --Ye(e.getFullYear(), e.getMonth() + 1, e.getDate())[1]
            },
            getDay: function(e) {
                return Ye(e.getFullYear(), e.getMonth() + 1, e.getDate())[2]
            },
            getDate: function(e, t, n, a, s, i, r) {
                t < 0 && (e += Ce(t / 12), t = t % 12 ? 12 + t % 12 : 0), t > 11 && (e += Ce(t / 12), t %= 12);
                var o = function(e, t, n) {
                    var a, s = e - 979,
                        i = t - 1,
                        r = n - 1,
                        o = 365 * s + 8 * Ce(s / 33) + Ce((s % 33 + 3) / 4);
                    for (a = 0; a < i; ++a) o += Oe[a];
                    var l = (o += r) + 79,
                        c = 1600 + 400 * Ce(l / 146097),
                        h = !0;
                    for ((l %= 146097) >= 36525 && (c += 100 * Ce(--l / 36524), (l %= 36524) >= 365 ? l++ : h = !1), c += 4 * Ce(l / 1461), (l %= 1461) >= 366 && (h = !1, c += Ce(--l / 365), l %= 365), a = 0; l >= He[a] + (1 === a && h ? 1 : 0); a++) l -= He[a] + (1 === a && h ? 1 : 0);
                    return [c, a + 1, l + 1]
                }(e, +t + 1, n);
                return new Date(o[0], o[1] - 1, o[2], a || 0, s || 0, i || 0, r || 0)
            },
            getMaxDayOfMonth: function(e, t) {
                var n, a, s, i = 31;
                for (t < 0 && (e += Ce(t / 12), t = t % 12 ? 12 + t % 12 : 0), t > 11 && (e += Ce(t / 12), t %= 12); !1 == (a = t + 1, s = i, !((n = e) < 0 || n > 32767 || a < 1 || a > 12 || s < 1 || s > Oe[a - 1] + (12 === a && (n - 979) % 33 % 4 == 0 ? 1 : 0)));) i--;
                return i
            }
        },
        Fe = {
            setText: "تاييد",
            cancelText: "انصراف",
            clearText: "واضح ",
            closeText: "نزدیک",
            selectedText: "{count} منتخب",
            rtl: !0,
            calendarSystem: Pe,
            dateFormat: "YYYY/MM/DD",
            dateFormatLong: "YYYY/MM/DD",
            dateWheelFormat: "|DDDD MMM D|",
            dayNames: ["يکشنبه", "دوشنبه", "سه‌شنبه", "چهارشنبه", "پنج‌شنبه", "جمعه", "شنبه"],
            dayNamesShort: ["ی", "د", "س", "چ", "پ", "ج", "ش"],
            dayNamesMin: ["ی", "د", "س", "چ", "پ", "ج", "ش"],
            fromText: "شروع ",
            monthNames: ["فروردين", "ارديبهشت", "خرداد", "تير", "مرداد", "شهريور", "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"],
            monthNamesShort: ["فروردين", "ارديبهشت", "خرداد", "تير", "مرداد", "شهريور", "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"],
            timeFormat: "HH:mm",
            timeWheels: "mmHH",
            toText: "پایان",
            nowText: "اکنون",
            amText: "ب",
            pmText: "ص",
            todayText: "امروز",
            firstDay: 6,
            dateText: "تاریخ ",
            timeText: "زمان ",
            allDayText: "تمام روز",
            noEventsText: "هیچ رویداد",
            eventText: "رویداد",
            eventsText: "رویدادها",
            moreEventsText: "{count} مورد دیگر",
            weekText: "{count} هفته",
            rangeStartLabel: "شروع ",
            rangeEndLabel: "پایان",
            rangeStartHelp: "انتخاب کنید",
            rangeEndHelp: "انتخاب کنید",
            filterEmptyText: "نتیجه ای ندارد",
            filterPlaceholderText: "جستجو کردن"
        },
        ze = {
            setText: "Aseta",
            cancelText: "Peruuta",
            clearText: "Tyhjennä",
            closeText: "Sulje",
            selectedText: "{count} valita",
            dateFormat: "D. MMMM YYYY",
            dateFormatLong: "DDD, D. MMMM, YYYY",
            dateWheelFormat: "|DDD D. M.|",
            dayNames: ["Sunnuntai", "Maanantai", "Tiistai", "Keskiviiko", "Torstai", "Perjantai", "Lauantai"],
            dayNamesShort: ["Su", "Ma", "Ti", "Ke", "To", "Pe", "La"],
            dayNamesMin: ["S", "M", "T", "K", "T", "P", "L"],
            fromText: "Alkaa",
            monthNames: ["Tammikuu", "Helmikuu", "Maaliskuu", "Huhtikuu", "Toukokuu", "Kesäkuu", "Heinäkuu", "Elokuu", "Syyskuu", "Lokakuu", "Marraskuu", "Joulukuu"],
            monthNamesShort: ["Tam", "Hel", "Maa", "Huh", "Tou", "Kes", "Hei", "Elo", "Syy", "Lok", "Mar", "Jou"],
            timeFormat: "H:mm",
            toText: "Päättyy",
            nowText: "Nyt",
            pmText: "pm",
            amText: "am",
            firstDay: 1,
            dateText: "Päiväys",
            timeText: "Aika",
            todayText: "Tänään",
            prevMonthText: "Edellinen kuukausi",
            nextMonthText: "Ensi kuussa",
            prevYearText: "Edellinen vuosi",
            nextYearText: "Ensi vuosi",
            eventText: "Tapahtumia",
            eventsText: "Tapahtumia",
            allDayText: "Koko päivä",
            noEventsText: "Ei tapahtumia",
            moreEventsText: "{count} muu",
            moreEventsPluralText: "{count} muuta",
            weekText: "Viikko {count}",
            rangeStartLabel: "Alkaa",
            rangeEndLabel: "Päättyy",
            rangeStartHelp: "Valitse",
            rangeEndHelp: "Valitse",
            filterEmptyText: "Ei tuloksia",
            filterPlaceholderText: "Haku"
        },
        Ve = {
            setText: "Terminer",
            cancelText: "Annuler",
            clearText: "Effacer",
            closeText: "Fermer",
            selectedText: "{count} sélectionné",
            selectedPluralText: "{count} sélectionnés",
            dateFormat: "DD/MM/YYYY",
            dateFormatLong: "DD/MM/YYYY",
            dateWheelFormat: "|DDD D MMM|",
            dayNames: ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"],
            dayNamesShort: ["Dim.", "Lun.", "Mar.", "Mer.", "Jeu.", "Ven.", "Sam."],
            dayNamesMin: ["D", "L", "M", "M", "J", "V", "S"],
            fromText: "Démarrer",
            monthNames: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
            monthNamesShort: ["Janv.", "Févr.", "Mars", "Avril", "Mai", "Juin", "Juil.", "Août", "Sept.", "Oct.", "Nov.", "Déc."],
            timeFormat: "HH:mm",
            toText: "Fin",
            nowText: "Maintenant",
            pmText: "pm",
            amText: "am",
            todayText: "Aujourd'hui",
            firstDay: 1,
            dateText: "Date",
            timeText: "Heure",
            allDayText: "Toute la journée",
            noEventsText: "Aucun événement",
            eventText: "Événement",
            eventsText: "Événements",
            moreEventsText: "{count} autre",
            moreEventsPluralText: "{count} autres",
            weekText: "Semaine {count}",
            rangeStartLabel: "Démarrer",
            rangeEndLabel: "Fin",
            rangeStartHelp: "Choisir",
            rangeEndHelp: "Choisir",
            filterEmptyText: "Aucun résultat",
            filterPlaceholderText: "Rechercher"
        },
        Re = {
            rtl: !0,
            setText: "שמירה",
            cancelText: "ביטול",
            clearText: "נקה",
            closeText: "סגירה",
            selectedText: "{count} נבחר",
            selectedPluralText: "{count} נבחרו",
            dateFormat: "DD/MM/YYYY",
            dateFormatLong: "DD/MM/YYYY",
            dateWheelFormat: "|DDD D MMM|",
            dayNames: ["ראשון", "שני", "שלישי", "רביעי", "חמישי", "שישי", "שבת"],
            dayNamesShort: ["א'", "ב'", "ג'", "ד'", "ה'", "ו'", "ש'"],
            dayNamesMin: ["א", "ב", "ג", "ד", "ה", "ו", "ש"],
            fromText: "התחלה",
            monthNames: ["ינואר", "פברואר", "מרץ", "אפריל", "מאי", "יוני", "יולי", "אוגוסט", "ספטמבר", "אוקטובר", "נובמבר", "דצמבר"],
            monthNamesShort: ["ינו", "פבר", "מרץ", "אפר", "מאי", "יונ", "יול", "אוג", "ספט", "אוק", "נוב", "דצמ"],
            amText: "am",
            pmText: "pm",
            timeFormat: "H:mm",
            timeWheels: "mmH",
            toText: "סיום",
            nowText: "עכשיו",
            firstDay: 0,
            dateText: "תאריך",
            timeText: "זמן",
            todayText: "היום",
            allDayText: "כל היום",
            noEventsText: "אין אירועים",
            eventText: "מִקרֶה",
            eventsText: "מִקרֶה",
            moreEventsText: "אירוע אחד נוסף",
            moreEventsPluralText: "{count} אירועים נוספים",
            weekText: "{count} שבוע",
            rangeStartLabel: "התחלה",
            rangeEndLabel: "סיום",
            rangeStartHelp: "בחר",
            rangeEndHelp: "בחר",
            filterEmptyText: "אין תוצאוה",
            filterPlaceholderText: "לחפש"
        },
        Ae = {
            setText: "सैट करें",
            cancelText: "रद्द करें",
            clearText: "साफ़ को",
            closeText: "बंद",
            selectedText: "{count} चयनित",
            dateFormat: "DD/MM/YYYY",
            dateFormatLong: "DD/MM/YYYY",
            dateWheelFormat: "|DDD D MMM|",
            dayNames: ["रविवार", "सोमवार", "मंगलवार", "बुधवार", "गुरुवार", "शुक्रवार", "शनिवार"],
            dayNamesShort: ["रवि", "सोम", "मंगल", "बुध", "गुरु", "शुक्र", "शनि"],
            dayNamesMin: ["रवि", "सोम", "मंगल", "बुध", "गुरु", "शुक्र", "शनि"],
            fromText: "से",
            monthNames: ["जनवरी ", "फरवरी", "मार्च", "अप्रेल", "मई", "जून", "जूलाई", "अगस्त ", "सितम्बर", "अक्टूबर", "नवम्बर", "दिसम्बर"],
            monthNamesShort: ["जन", "फर", "मार्च", "अप्रेल", "मई", "जून", "जूलाई", "अग", "सित", "अक्ट", "नव", "दि"],
            timeFormat: "H:mm",
            toText: "तक",
            nowText: "अब",
            pmText: "अपराह्न",
            amText: "पूर्वाह्न",
            firstDay: 1,
            dateText: "तिथि",
            timeText: "समय",
            todayText: "आज",
            prevMonthText: "पिछ्ला महिना",
            nextMonthText: "अगले महीने",
            prevYearText: "पिछला साल",
            nextYearText: "अगले वर्ष",
            eventText: "इवेट३",
            eventsText: "इवेट३",
            allDayText: "पूरे दिन",
            noEventsText: "Ei tapahtumia",
            moreEventsText: "{count} और",
            weekText: "सप्ताह {count}",
            rangeStartLabel: "से",
            rangeEndLabel: "तक",
            rangeStartHelp: "चुनें",
            rangeEndHelp: "चुनें",
            filterEmptyText: "कोई परिणाम नही",
            filterPlaceholderText: "खोज"
        },
        We = {
            setText: "Postavi",
            cancelText: "Izlaz",
            clearText: "Izbriši",
            closeText: "Zatvori",
            selectedText: "{count} odabran",
            dateFormat: "DD.MM.YYYY",
            dateFormatLong: "DDD, D. MMM. YYYY.",
            dateWheelFormat: "|DDD D MMM|",
            dayNames: ["Nedjelja", "Ponedjeljak", "Utorak", "Srijeda", "Četvrtak", "Petak", "Subota"],
            dayNamesShort: ["Ned", "Pon", "Uto", "Sri", "Čet", "Pet", "Sub"],
            dayNamesMin: ["Ne", "Po", "Ut", "Sr", "Če", "Pe", "Su"],
            fromText: "Počinje",
            monthNames: ["Siječanj", "Veljača", "Ožujak", "Travanj", "Svibanj", "Lipanj", "Srpanj", "Kolovoz", "Rujan", "Listopad", "Studeni", "Prosinac"],
            monthNamesShort: ["Sij", "Velj", "Ožu", "Tra", "Svi", "Lip", "Srp", "Kol", "Ruj", "Lis", "Stu", "Pro"],
            timeFormat: "H:mm",
            toText: "Završava",
            nowText: "Sada",
            pmText: "pm",
            amText: "am",
            firstDay: 1,
            dateText: "Datum",
            timeText: "Vrijeme",
            todayText: "Danas",
            prevMonthText: "Prethodni mjesec",
            nextMonthText: "Sljedeći mjesec",
            prevYearText: "Prethodni godina",
            nextYearText: "Slijedeće godine",
            eventText: "Događaj",
            eventsText: "događaja",
            allDayText: "Cijeli dan",
            noEventsText: "Bez događaja",
            moreEventsText: "Još {count}",
            weekText: "{count}. tjedan",
            rangeStartLabel: "Počinje",
            rangeEndLabel: "Završava",
            rangeStartHelp: "Odaberite",
            rangeEndHelp: "Odaberite",
            filterEmptyText: "Bez rezultata",
            filterPlaceholderText: "Traži"
        },
        Ue = {
            setText: "OK",
            cancelText: "Mégse",
            clearText: "Törlés",
            closeText: "Bezár",
            selectedText: "{count} kiválasztva",
            dateFormat: "YYYY.MM.DD.",
            dateFormatLong: "YYYY. MMM. D., DDD",
            dateWheelFormat: "|MMM. D. DDD|",
            dayNames: ["Vasárnap", "Hétfő", "Kedd", "Szerda", "Csütörtök", "Péntek", "Szombat"],
            dayNamesShort: ["Va", "Hé", "Ke", "Sze", "Csü", "Pé", "Szo"],
            dayNamesMin: ["V", "H", "K", "Sz", "Cs", "P", "Sz"],
            fromText: "Eleje",
            monthNames: ["Január", "Február", "Március", "Április", "Május", "Június", "Július", "Augusztus", "Szeptember", "Október", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Már", "Ápr", "Máj", "Jún", "Júl", "Aug", "Szep", "Okt", "Nov", "Dec"],
            timeFormat: "H:mm",
            toText: "Vége",
            nowText: "Most",
            pmText: "pm",
            amText: "am",
            firstDay: 1,
            dateText: "Dátum",
            timeText: "Idő",
            todayText: "Ma",
            prevMonthText: "Előző hónap",
            nextMonthText: "Következő hónap",
            prevYearText: "Előző év",
            nextYearText: "Következő év",
            eventText: "esemény",
            eventsText: "esemény",
            allDayText: "Egész nap",
            noEventsText: "Nincs esemény",
            moreEventsText: "{count} további",
            weekText: "{count}. hét",
            rangeStartLabel: "Eleje",
            rangeEndLabel: "Vége",
            rangeStartHelp: "Válasszon",
            rangeEndHelp: "Válasszon",
            filterEmptyText: "Nincs találat",
            filterPlaceholderText: "Keresés"
        },
        Be = {
            setText: "OK",
            cancelText: "Annulla",
            clearText: "Chiarire",
            closeText: "Chiudere",
            selectedText: "{count} selezionato",
            selectedPluralText: "{count} selezionati",
            dateFormat: "DD/MM/YYYY",
            dateFormatLong: "DD/MM/YYYY",
            dateWheelFormat: "|DDD D MMM|",
            dayNames: ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"],
            dayNamesShort: ["Do", "Lu", "Ma", "Me", "Gi", "Ve", "Sa"],
            dayNamesMin: ["D", "L", "M", "M", "G", "V", "S"],
            fromText: "Inizio",
            monthNames: ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"],
            monthNamesShort: ["Gen", "Feb", "Mar", "Apr", "Mag", "Giu", "Lug", "Ago", "Set", "Ott", "Nov", "Dic"],
            timeFormat: "HH:mm",
            toText: "Fine",
            nowText: "Ora",
            pmText: "pm",
            amText: "am",
            todayText: "Oggi",
            firstDay: 1,
            dateText: "Data",
            timeText: "Volta",
            allDayText: "Tutto il giorno",
            noEventsText: "Nessun evento",
            eventText: "Evento",
            eventsText: "Eventi",
            moreEventsText: "{count} altro",
            moreEventsPluralText: "altri {count}",
            weekText: "Settimana {count}",
            rangeStartLabel: "Inizio",
            rangeEndLabel: "Fine",
            rangeStartHelp: "Scegli",
            rangeEndHelp: "Scegli",
            filterEmptyText: "Nessun risultato",
            filterPlaceholderText: "Cerca"
        },
        je = {
            setText: "セット",
            cancelText: "キャンセル",
            clearText: "クリア",
            closeText: "クローズ",
            selectedText: "{count} 選択",
            dateFormat: "YYYY年MM月DD日",
            dateFormatLong: "YYYY年MM月DD日",
            dateWheelFormat: "|M月D日 DDD|",
            dayNames: ["日", "月", "火", "水", "木", "金", "土"],
            dayNamesShort: ["日", "月", "火", "水", "木", "金", "土"],
            dayNamesMin: ["日", "月", "火", "水", "木", "金", "土"],
            fromText: "開始",
            monthNames: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
            monthNamesShort: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
            timeFormat: "H:mm",
            toText: "終わり",
            nowText: "今",
            pmText: "午後",
            amText: "午前",
            yearSuffix: "年",
            monthSuffix: "月",
            daySuffix: "日",
            todayText: "今日",
            dateText: "日付",
            timeText: "時間",
            allDayText: "終日",
            noEventsText: "イベントはありません",
            eventText: "イベント",
            eventsText: "イベント",
            moreEventsText: "他 {count} 件",
            weekText: "{count}週目",
            rangeStartLabel: "開始",
            rangeEndLabel: "終わり",
            rangeStartHelp: "選択",
            rangeEndHelp: "選択",
            filterEmptyText: "検索結果はありません",
            filterPlaceholderText: "探す"
        },
        Ke = {
            setText: "설정",
            cancelText: "취소",
            clearText: "삭제",
            closeText: "닫기",
            selectedText: "{count} 선택된",
            dateFormat: "YYYY년MM월DD일",
            dateFormatLong: "YYYY년MM월DD일",
            dateWheelFormat: "|M월 D일 DDD|",
            dayNames: ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"],
            dayNamesShort: ["일", "월", "화", "수", "목", "금", "토"],
            dayNamesMin: ["일", "월", "화", "수", "목", "금", "토"],
            fromText: "시작",
            monthNames: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
            monthNamesShort: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
            timeFormat: "H:mm",
            toText: "종료",
            nowText: "지금",
            pmText: "오후",
            amText: "오전",
            yearSuffix: "년",
            monthSuffix: "월",
            daySuffix: "일",
            firstDay: 0,
            dateText: "날짜",
            timeText: "시간",
            todayText: "오늘",
            prevMonthText: "이전 달",
            nextMonthText: "다음 달",
            prevYearText: "이전 년",
            nextYearText: "다음 년",
            eventText: "이벤트",
            eventsText: "이벤트",
            allDayText: "종일",
            noEventsText: "이벤트 없음",
            moreEventsText: "{count}개 더보기",
            weekText: "{count}주차",
            rangeStartLabel: "시작",
            rangeEndLabel: "종료",
            rangeStartHelp: "선택",
            rangeEndHelp: "선택",
            filterEmptyText: "결과가 없다",
            filterPlaceholderText: "찾다"
        },
        Je = {
            setText: "OK",
            cancelText: "Atšaukti",
            clearText: "Išvalyti",
            closeText: "Uždaryti",
            selectedText: "Pasirinktas {count}",
            selectedPluralText: "Pasirinkti {count}",
            dateFormat: "YYYY-MM-DD",
            dateFormatLong: "YYYY-MM-DD",
            dateWheelFormat: "|MM-DD DDD|",
            dayNames: ["Sekmadienis", "Pirmadienis", "Antradienis", "Trečiadienis", "Ketvirtadienis", "Penktadienis", "Šeštadienis"],
            dayNamesShort: ["S", "Pr", "A", "T", "K", "Pn", "Š"],
            dayNamesMin: ["S", "Pr", "A", "T", "K", "Pn", "Š"],
            fromText: "Nuo",
            monthNames: ["Sausis", "Vasaris", "Kovas", "Balandis", "Gegužė", "Birželis", "Liepa", "Rugpjūtis", "Rugsėjis", "Spalis", "Lapkritis", "Gruodis"],
            monthNamesShort: ["Sau", "Vas", "Kov", "Bal", "Geg", "Bir", "Lie", "Rugp", "Rugs", "Spa", "Lap", "Gruo"],
            amText: "am",
            pmText: "pm",
            timeFormat: "HH:mm",
            toText: "Iki",
            nowText: "Dabar",
            todayText: "Šiandien",
            firstDay: 1,
            dateText: "Data",
            timeText: "Laikas",
            allDayText: "Visą dieną",
            noEventsText: "Nėra įvykių",
            eventText: "Įvykių",
            eventsText: "Įvykiai",
            moreEventsText: "Dar {count}",
            weekText: "{count} savaitė",
            rangeStartLabel: "Nuo",
            rangeEndLabel: "Iki",
            rangeStartHelp: "Pasirinkti",
            rangeEndHelp: "Pasirinkti",
            filterEmptyText: "Nėra rezultatų",
            filterPlaceholderText: "Paieška"
        },
        Xe = {
            setText: "Instellen",
            cancelText: "Annuleren",
            clearText: "Leegmaken",
            closeText: "Sluiten",
            selectedText: "{count} gekozen",
            dateFormat: "DD-MM-YYYY",
            dateFormatLong: "DD-MM-YYYY",
            dateWheelFormat: "|DDD D MMM|",
            dayNames: ["Zondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag"],
            dayNamesShort: ["Zo", "Ma", "Di", "Wo", "Do", "Vr", "Za"],
            dayNamesMin: ["Z", "M", "D", "W", "D", "V", "Z"],
            fromText: "Start",
            monthNames: ["Januari", "Februari", "Maart", "April", "Mei", "Juni", "Juli", "Augustus", "September", "Oktober", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Mrt", "Apr", "Mei", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"],
            timeFormat: "HH:mm",
            toText: "Einde",
            nowText: "Nu",
            pmText: "pm",
            amText: "am",
            todayText: "Vandaag",
            firstDay: 1,
            dateText: "Datum",
            timeText: "Tijd",
            allDayText: "Hele dag",
            noEventsText: "Geen activiteiten",
            eventText: "Activiteit",
            eventsText: "Activiteiten",
            moreEventsText: "nog {count}",
            weekText: "Week {count}",
            rangeStartLabel: "Start",
            rangeEndLabel: "Einde",
            rangeStartHelp: "Kies",
            rangeEndHelp: "Kies",
            filterEmptyText: "Niets gevonden",
            filterPlaceholderText: "Zoek"
        },
        Ge = {
            setText: "OK",
            cancelText: "Avbryt",
            clearText: "Tømme",
            closeText: "Lukk",
            selectedText: "{count} valgt",
            dateFormat: "DD.MM.YYY",
            dateFormatLong: "DDD. D. MMM. YYYY",
            dateWheelFormat: "|DDD. D. MMM.|",
            dayNames: ["Søndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag"],
            dayNamesShort: ["Sø", "Ma", "Ti", "On", "To", "Fr", "Lø"],
            dayNamesMin: ["S", "M", "T", "O", "T", "F", "L"],
            fromText: "Start",
            monthNames: ["Januar", "Februar", "Mars", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Desember"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Des"],
            timeFormat: "HH:mm",
            toText: "End",
            nowText: "Nå",
            pmText: "pm",
            amText: "am",
            todayText: "I dag",
            firstDay: 1,
            dateText: "Dato",
            timeText: "Tid",
            allDayText: "Hele dagen",
            noEventsText: "Ingen hendelser",
            eventText: "Hendelse",
            eventsText: "Hendelser",
            moreEventsText: "{count} mere",
            weekText: "Uke {count}",
            rangeStartLabel: "Start",
            rangeEndLabel: "End",
            rangeStartHelp: "Velg",
            rangeEndHelp: "Velg",
            filterEmptyText: "Ingen treff",
            filterPlaceholderText: "Søk"
        },
        qe = {
            setText: "Zestaw",
            cancelText: "Anuluj",
            clearText: "Oczyścić",
            closeText: "Zakończenie",
            selectedText: "Wybór: {count}",
            dateFormat: "YYYY-MM-DD",
            dateFormatLong: "DDD, D.MM.YYYY",
            dateWheelFormat: "|DDD D.MM|",
            dayNames: ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"],
            dayNamesShort: ["Niedz.", "Pon.", "Wt.", "Śr.", "Czw.", "Pt.", "Sob."],
            dayNamesMin: ["N", "P", "W", "Ś", "C", "P", "S"],
            fromText: "Rozpoczęcie",
            monthNames: ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"],
            monthNamesShort: ["Sty", "Lut", "Mar", "Kwi", "Maj", "Cze", "Lip", "Sie", "Wrz", "Paź", "Lis", "Gru"],
            timeFormat: "HH:mm",
            toText: "Koniec",
            nowText: "Teraz",
            amText: "am",
            pmText: "pm",
            todayText: "Dzisiaj",
            firstDay: 1,
            dateText: "Data",
            timeText: "Czas",
            allDayText: "Cały dzień",
            noEventsText: "Brak wydarzeń",
            eventText: "Wydarzeń",
            eventsText: "Wydarzenia",
            moreEventsText: "Jeszcze {count}",
            weekText: "Tydzień {count}",
            rangeStartLabel: "Rozpoczęcie",
            rangeEndLabel: "Koniec",
            rangeStartHelp: "Wybierz",
            rangeEndHelp: "Wybierz",
            filterEmptyText: "Brak wyników",
            filterPlaceholderText: "Szukaj"
        },
        Ze = {
            setText: "Seleccionar",
            cancelText: "Cancelar",
            clearText: "Claro",
            closeText: "Fechar",
            selectedText: "{count} selecionado",
            selectedPluralText: "{count} selecionados",
            dateFormat: "DD-MM-YYYY",
            dateFormatLong: "DDD, D MMM, YYYY",
            dateWheelFormat: "|DDD D de MMM|",
            dayNames: ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"],
            dayNamesShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
            dayNamesMin: ["D", "S", "T", "Q", "Q", "S", "S"],
            fromText: "Início",
            monthNames: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
            monthNamesShort: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
            timeFormat: "HH:mm",
            toText: "Fim",
            nowText: "Actualizar",
            pmText: "pm",
            amText: "am",
            todayText: "Hoje",
            firstDay: 1,
            dateText: "Data",
            timeText: "Tempo",
            allDayText: "Todo o dia",
            noEventsText: "Nenhum evento",
            eventText: "Evento",
            eventsText: "Eventos",
            moreEventsText: "Mais {count}",
            weekText: "Semana {count}",
            rangeStartLabel: "Início",
            rangeEndLabel: "Fim",
            rangeStartHelp: "Escolha",
            rangeEndHelp: "Escolha",
            filterEmptyText: "Nenhum resultado",
            filterPlaceholderText: "Pesquisa"
        },
        $e = s({}, Ze, {
            setText: "Selecionar",
            dateFormat: "DD/MM/YYYY",
            nowText: "Agora",
            allDayText: "Dia inteiro",
            filterPlaceholderText: "Buscar"
        }),
        Qe = {
            setText: "Setare",
            cancelText: "Anulare",
            clearText: "Ştergere",
            closeText: "Închidere",
            selectedText: "{count} selectat",
            selectedPluralText: "{count} selectate",
            dateFormat: "DD.MM.YYYY",
            dateFormatLong: "DDD., D MMM YYYY",
            dateWheelFormat: "|DDD. D MMM|",
            dayNames: ["Duminică", "Luni", "Marți", "Miercuri", "Joi", "Vineri", "Sâmbătă"],
            dayNamesShort: ["Du", "Lu", "Ma", "Mi", "Jo", "Vi", "Sâ"],
            dayNamesMin: ["D", "L", "M", "M", "J", "V", "S"],
            fromText: "Start",
            monthNames: ["Ianuarie", "Februarie", "Martie", "Aprilie", "Mai", "Iunie", "Iulie", "August", "Septembrie", "Octombrie", "Noiembrie", "Decembrie"],
            monthNamesShort: ["Ian.", "Feb.", "Mar.", "Apr.", "Mai", "Iun.", "Iul.", "Aug.", "Sept.", "Oct.", "Nov.", "Dec."],
            timeFormat: "HH:mm",
            toText: "Final",
            nowText: "Acum",
            amText: "am",
            pmText: "pm",
            todayText: "Astăzi",
            prevMonthText: "Luna anterioară",
            nextMonthText: "Luna următoare",
            prevYearText: "Anul anterior",
            nextYearText: "Anul următor",
            eventText: "Eveniment",
            eventsText: "Evenimente",
            allDayText: "Toată ziua",
            noEventsText: "Niciun eveniment",
            moreEventsText: "Încă unul",
            moreEventsPluralText: "Încă {count}",
            firstDay: 1,
            dateText: "Data",
            timeText: "Ora",
            weekText: "Săptămâna {count}",
            rangeStartLabel: "Start",
            rangeEndLabel: "Final",
            rangeStartHelp: "Selectare",
            rangeEndHelp: "Selectare",
            filterEmptyText: "Niciun rezultat",
            filterPlaceholderText: "Căutare"
        },
        et = {
            setText: "Установить",
            cancelText: "Отмена",
            clearText: "Очистить",
            closeText: "Закрыть",
            selectedText: "{count} Выбрать",
            dateFormat: "DD.MM.YYYY",
            dateFormatLong: "DDD, D MMM YYYY",
            dateWheelFormat: "|DDD D MMM|",
            dayNames: ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"],
            dayNamesShort: ["вс", "пн", "вт", "ср", "чт", "пт", "сб"],
            dayNamesMin: ["в", "п", "в", "с", "ч", "п", "с"],
            fromText: "Начало",
            monthNames: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
            monthNamesShort: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
            timeFormat: "HH:mm",
            toText: "Конец",
            nowText: "Сейчас",
            amText: "am",
            pmText: "pm",
            todayText: "Cегодня",
            firstDay: 1,
            dateText: "Дата",
            timeText: "Время",
            allDayText: "Весь день",
            noEventsText: "Нет событий",
            eventText: "Мероприятия",
            eventsText: "Мероприятия",
            moreEventsText: "Ещё {count}",
            weekText: "Неделя {count}",
            rangeStartLabel: "Начало",
            rangeEndLabel: "Конец",
            rangeStartHelp: "выбирать",
            rangeEndHelp: "выбирать",
            filterEmptyText: "Нет результатов",
            filterPlaceholderText: "Поиск"
        },
        tt = s({}, et, {
            cancelText: "Отменить",
            clearText: "Очиститьr",
            selectedText: "{count} Вібрать",
            monthNamesShort: ["Янв.", "Февр.", "Март", "Апр.", "Май", "Июнь", "Июль", "Авг.", "Сент.", "Окт.", "Нояб.", "Дек."],
            filterEmptyText: "Ніякага выніку",
            filterPlaceholderText: "Пошук"
        }),
        nt = {
            setText: "Zadaj",
            cancelText: "Zrušiť",
            clearText: "Vymazať",
            closeText: "Zavrieť",
            selectedText: "Označený: {count}",
            dateFormat: "D.M.YYYY",
            dateFormatLong: "DDD D. MMM YYYY",
            dateWheelFormat: "|DDD D. MMM|",
            dayNames: ["Nedeľa", "Pondelok", "Utorok", "Streda", "Štvrtok", "Piatok", "Sobota"],
            dayNamesShort: ["Ne", "Po", "Ut", "St", "Št", "Pi", "So"],
            dayNamesMin: ["N", "P", "U", "S", "Š", "P", "S"],
            fromText: "Začiatok",
            monthNames: ["Január", "Február", "Marec", "Apríl", "Máj", "Jún", "Júl", "August", "September", "Október", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "Máj", "Jún", "Júl", "Aug", "Sep", "Okt", "Nov", "Dec"],
            timeFormat: "H:mm",
            toText: "Koniec",
            nowText: "Teraz",
            amText: "am",
            pmText: "pm",
            todayText: "Dnes",
            firstDay: 1,
            dateText: "Datum",
            timeText: "Čas",
            allDayText: "Celý deň",
            noEventsText: "Žiadne udalosti",
            eventText: "Udalostí",
            eventsText: "Udalosti",
            moreEventsText: "{count} ďalšia",
            moreEventsPluralText: "{count} ďalšie",
            weekText: "{count}. týždeň",
            rangeStartLabel: "Začiatok",
            rangeEndLabel: "Koniec",
            rangeStartHelp: "Vybrať",
            rangeEndHelp: "Vybrať",
            filterEmptyText: "Žiadne výsledky",
            filterPlaceholderText: "Vyhľadávanie"
        },
        at = {
            setText: "Постави",
            cancelText: "Откажи",
            clearText: "Обриши",
            selectedText: "{count} изабрана",
            dateFormat: "DD.MM.YYYY",
            dateFormatLong: "DD.MM.YYYY",
            dateWheelFormat: "|DDD D. MMM|",
            dayNames: ["Недеља", "Понедељак", "Уторак", "Среда", "Четвртак", "Петак", "Субота"],
            dayNamesShort: ["Нед", "Пон", "Уто", "Сре", "Чет", "Пет", "Суб"],
            dayNamesMin: ["Не", "По", "Ут", "Ср", "Че", "Пе", "Су"],
            fromText: "Од",
            monthNames: ["Јануар", "Фебруар", "Март", "Април", "Мај", "Јун", "Јул", "Август", "Септембар", "Октобар", "Новембар", "Децембар"],
            monthNamesShort: ["Јан", "Феб", "Мар", "Апр", "Мај", "Јун", "Јул", "Авг", "Сеп", "Окт", "Нов", "Дец"],
            timeFormat: "HH:mm",
            toText: "До",
            nowText: "сада",
            pmText: "pm",
            amText: "am",
            firstDay: 1,
            dateText: "Датум",
            timeText: "време",
            todayText: "Данас",
            prevMonthText: "Претходни мјесец",
            nextMonthText: "Следећег месеца",
            prevYearText: "Претходна године",
            nextYearText: "Следеће године",
            closeText: "Затвори",
            eventText: "Догађај",
            eventsText: "Догађаји",
            allDayText: "Цео дан",
            noEventsText: "Нема догађаја",
            moreEventsText: "Још {count}",
            weekText: "{count}. недеља",
            rangeStartLabel: "Од",
            rangeEndLabel: "До",
            rangeStartHelp: "Изаберите",
            rangeEndHelp: "Изаберите",
            filterEmptyText: "Без резултата",
            filterPlaceholderText: "Претрага"
        },
        st = {
            setText: "OK",
            cancelText: "Avbryt",
            clearText: "Klara",
            closeText: "Stäng",
            selectedText: "{count} vald",
            dateFormat: "YYYY-MM-DD",
            dateFormatLong: "DDD D MMM. YYYY",
            dateWheelFormat: "|DDD D MMM|",
            dayNames: ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"],
            dayNamesShort: ["Sö", "Må", "Ti", "On", "To", "Fr", "Lö"],
            dayNamesMin: ["S", "M", "T", "O", "T", "F", "L"],
            fromText: "Start",
            monthNames: ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"],
            timeFormat: "HH:mm",
            toText: "Slut",
            nowText: "Nu",
            pmText: "pm",
            amText: "am",
            todayText: "I dag",
            firstDay: 1,
            dateText: "Datum",
            timeText: "Tid",
            allDayText: "Heldag",
            noEventsText: "Inga aktiviteter",
            eventText: "Händelse",
            eventsText: "Händelser",
            moreEventsText: "{count} till",
            weekText: "Vecka {count}",
            rangeStartLabel: "Start",
            rangeEndLabel: "Slut",
            rangeStartHelp: "Välj",
            rangeEndHelp: "Välj",
            filterEmptyText: "Inga träffar",
            filterPlaceholderText: "Sök"
        },
        it = {
            setText: "ตั้งค่า",
            cancelText: "ยกเลิก",
            clearText: "ล้าง",
            closeText: "ปิด",
            selectedText: "{count} เลือก",
            dateFormat: "DD/MM/YYYY",
            dateFormatLong: "DD/MM/YYYY",
            dateWheelFormat: "|DDD D MMM|",
            dayNames: ["อาทิตย์", "จันทร์", "อังคาร", "พุธ", "พฤหัสบดี", "ศุกร์", "เสาร์"],
            dayNamesShort: ["อา.", "จ.", "อ.", "พ.", "พฤ.", "ศ.", "ส."],
            dayNamesMin: ["อา.", "จ.", "อ.", "พ.", "พฤ.", "ศ.", "ส."],
            fromText: "จาก",
            monthNames: ["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"],
            monthNamesShort: ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."],
            timeFormat: "HH:mm",
            toText: "ถึง",
            nowText: "ตอนนี้",
            pmText: "pm",
            amText: "am",
            firstDay: 0,
            dateText: "วัน",
            timeText: "เวลา",
            todayText: "วันนี้",
            prevMonthText: "เดือนก่อนหน้า",
            nextMonthText: "เดือนถัดไป",
            prevYearText: "ปีก่อนหน้า",
            nextYearText: "ปีถัดไป",
            eventText: "เหตุการณ์",
            eventsText: "เหตุการณ์",
            allDayText: "ตลอดวัน",
            noEventsText: "ไม่มีกิจกรรม",
            moreEventsText: "อีก {count} กิจกรรม",
            weekText: "สัปดาห์ที่ {count}",
            rangeStartLabel: "จาก",
            rangeEndLabel: "ถึง",
            rangeStartHelp: "เลือก",
            rangeEndHelp: "เลือก",
            filterEmptyText: "ไม่มีผลลัพธ์",
            filterPlaceholderText: "ค้นหา"
        },
        rt = {
            setText: "Seç",
            cancelText: "İptal",
            clearText: "Temizleyin",
            closeText: "Kapatmak",
            selectedText: "{count} seçilmiş",
            dateFormat: "DD.MM.YYYY",
            dateFormatLong: "D MMMM DDD, YYYY",
            dateWheelFormat: "|D MMM DDD|",
            dayNames: ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"],
            dayNamesShort: ["Paz", "Pzt", "Sal", "Çar", "Per", "Cum", "Cmt"],
            dayNamesMin: ["P", "P", "S", "Ç", "P", "C", "C"],
            fromText: "Başla",
            monthNames: ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"],
            monthNamesShort: ["Oca", "Şub", "Mar", "Nis", "May", "Haz", "Tem", "Ağu", "Eyl", "Eki", "Kas", "Ara"],
            timeFormat: "HH:mm",
            toText: "Son",
            nowText: "Şimdi",
            pmText: "pm",
            amText: "am",
            todayText: "Bugün",
            firstDay: 1,
            dateText: "Tarih",
            timeText: "Zaman",
            allDayText: "Tüm gün",
            noEventsText: "Etkinlik Yok",
            eventText: "Etkinlik",
            eventsText: "Etkinlikler",
            moreEventsText: "{count} tane daha",
            weekText: "{count}. Hafta",
            rangeStartLabel: "Başla",
            rangeEndLabel: "Son",
            rangeStartHelp: "Seç",
            rangeEndHelp: "Seç",
            filterEmptyText: "Sonuç Yok",
            filterPlaceholderText: "Arayın"
        },
        ot = {
            setText: "встановити",
            cancelText: "відміна",
            clearText: "очистити",
            closeText: "Закрити",
            selectedText: "{count} вибрані",
            dateFormat: "DD.MM.YYYY",
            dateFormatLong: "DDD, D MMM. YYYY",
            dateWheelFormat: "|DDD D MMM.|",
            dayNames: ["неділя", "понеділок", "вівторок", "середа", "четвер", "п’ятниця", "субота"],
            dayNamesShort: ["нед", "пнд", "вів", "срд", "чтв", "птн", "сбт"],
            dayNamesMin: ["Нд", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
            fromText: "від",
            monthNames: ["Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень", "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень"],
            monthNamesShort: ["Січ", "Лют", "Бер", "Кві", "Тра", "Чер", "Лип", "Сер", "Вер", "Жов", "Лис", "Гру"],
            timeFormat: "H:mm",
            toText: "кінець",
            nowText: "Зараз",
            pmText: "pm",
            amText: "am",
            firstDay: 1,
            dateText: "дата",
            timeText: "Час",
            todayText: "Сьогодні",
            prevMonthText: "Попередній місяць",
            nextMonthText: "Наступного місяця",
            prevYearText: "Попередній рік",
            nextYearText: "Наступного року",
            eventText: "подія",
            eventsText: "події",
            allDayText: "Увесь день",
            noEventsText: "Жодної події",
            moreEventsText: "та ще {count}",
            weekText: "{count} тиждень",
            rangeStartLabel: "від",
            rangeEndLabel: "кінець",
            rangeEndHelp: "Обрати",
            rangeStartHelp: "Обрати",
            filterEmptyText: "Ніякого результату",
            filterPlaceholderText: "Пошук"
        },
        lt = {
            setText: "Đặt",
            cancelText: "Hủy bò",
            clearText: "Xóa",
            closeText: "Đóng",
            selectedText: "{count} chọn",
            dateFormat: "DD/MM/YYYY",
            dateFormatLong: "DDD D, MMM YYYY",
            dateWheelFormat: "|DDD D MMM|",
            dayNames: ["Chủ Nhật", "Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu", "Thứ Bảy"],
            dayNamesShort: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
            dayNamesMin: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
            fromText: "Từ",
            monthNames: ["Tháng Một", "Tháng Hai", "Tháng Ba", "Tháng Tư", "Tháng Năm", "Tháng Sáu", "Tháng Bảy", "Tháng Tám", "Tháng Chín", "Tháng Mười", "Tháng Mười Một", "Tháng Mười Hai"],
            monthNamesShort: ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"],
            timeFormat: "H:mm",
            toText: "Tới",
            nowText: "Bây giờ",
            pmText: "pm",
            amText: "am",
            firstDay: 0,
            dateText: "Ngày",
            timeText: "Hồi",
            todayText: "Hôm nay",
            prevMonthText: "Tháng trước",
            nextMonthText: "Tháng tới",
            prevYearText: "Măm trước",
            nextYearText: "Năm tới",
            eventText: "Sự kiện",
            eventsText: "Sự kiện",
            allDayText: "Cả ngày",
            noEventsText: "Không có sự kiện",
            moreEventsText: "{count} thẻ khác",
            weekText: "Tuần {count}",
            rangeStartLabel: "Từ",
            rangeEndLabel: "Tới",
            rangeStartHelp: "Chọn",
            rangeEndHelp: "Chọn",
            filterEmptyText: "Không kết quả",
            filterPlaceholderText: "Tìm kiếm"
        },
        ct = {
            setText: "确定",
            cancelText: "取消",
            clearText: "明确",
            closeText: "关闭",
            selectedText: "{count} 选",
            dateFormat: "YYYY年M月D日",
            dateFormatLong: "YYYY年M月D日",
            dateWheelFormat: "|M月D日 DDD|",
            dayNames: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
            dayNamesShort: ["日", "一", "二", "三", "四", "五", "六"],
            dayNamesMin: ["日", "一", "二", "三", "四", "五", "六"],
            fromText: "开始时间",
            monthNames: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
            monthNamesShort: ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二"],
            timeFormat: "H:mm",
            toText: "结束时间",
            nowText: "当前",
            pmText: "下午",
            amText: "上午",
            yearSuffix: "年",
            monthSuffix: "月",
            daySuffix: "日",
            todayText: "今天",
            dateText: "日",
            timeText: "时间",
            allDayText: "全天",
            noEventsText: "无事件",
            eventText: "活动",
            eventsText: "活动",
            moreEventsText: "他 {count} 件",
            weekText: "第 {count} 週",
            rangeStartLabel: "开始时间",
            rangeEndLabel: "结束时间",
            rangeStartHelp: "选取",
            rangeEndHelp: "选取",
            filterEmptyText: "没有结果",
            filterPlaceholderText: "搜索"
        };

    function ht(e) {
        return e < -1e-7 ? Math.ceil(e - 1e-7) : Math.floor(e + 1e-7)
    }

    function dt(e, t, n) {
        var a, s, i, r, o = [0, 0, 0];
        return a = e > 1582 || 1582 === e && t > 10 || 1582 === e && 10 === t && n > 14 ? ht(1461 * (e + 4800 + ht((t - 14) / 12)) / 4) + ht(367 * (t - 2 - 12 * ht((t - 14) / 12)) / 12) - ht(3 * ht((e + 4900 + ht((t - 14) / 12)) / 100) / 4) + n - 32075 : 367 * e - ht(7 * (e + 5001 + ht((t - 9) / 7)) / 4) + ht(275 * t / 9) + n + 1729777, r = ht(((s = a - 1948440 + 10632) - 1) / 10631), i = ht((10985 - (s = s - 10631 * r + 354)) / 5316) * ht(50 * s / 17719) + ht(s / 5670) * ht(43 * s / 15238), s = s - ht((30 - i) / 15) * ht(17719 * i / 50) - ht(i / 16) * ht(15238 * i / 43) + 29, t = ht(24 * s / 709), n = s - ht(709 * t / 24), e = 30 * r + i - 30, o[2] = n, o[1] = t, o[0] = e, o
    }
    var ut = {
            getYear: function(e) {
                return dt(e.getFullYear(), e.getMonth() + 1, e.getDate())[0]
            },
            getMonth: function(e) {
                return --dt(e.getFullYear(), e.getMonth() + 1, e.getDate())[1]
            },
            getDay: function(e) {
                return dt(e.getFullYear(), e.getMonth() + 1, e.getDate())[2]
            },
            getDate: function(e, t, n, a, s, i, r) {
                t < 0 && (e += Math.floor(t / 12), t = t % 12 ? 12 + t % 12 : 0), t > 11 && (e += Math.floor(t / 12), t %= 12);
                var o = function(e, t, n) {
                    var a, s, i, r, o, l = new Array(3),
                        c = ht((11 * e + 3) / 30) + 354 * e + 30 * t - ht((t - 1) / 2) + n + 1948440 - 385;
                    return c > 2299160 ? (i = ht(4 * (a = c + 68569) / 146097), a -= ht((146097 * i + 3) / 4), r = ht(4e3 * (a + 1) / 1461001), a = a - ht(1461 * r / 4) + 31, s = ht(80 * a / 2447), n = a - ht(2447 * s / 80), t = s + 2 - 12 * (a = ht(s / 11)), e = 100 * (i - 49) + r + a) : (o = ht(((s = c + 1402) - 1) / 1461), i = ht(((a = s - 1461 * o) - 1) / 365) - ht(a / 1461), s = ht(80 * (r = a - 365 * i + 30) / 2447), n = r - ht(2447 * s / 80), t = s + 2 - 12 * (r = ht(s / 11)), e = 4 * o + i + r - 4716), l[2] = n, l[1] = t, l[0] = e, l
                }(e, +t + 1, n);
                return new Date(o[0], o[1] - 1, o[2], a || 0, s || 0, i || 0, r || 0)
            },
            getMaxDayOfMonth: function(e, t) {
                t < 0 && (e += Math.floor(t / 12), t = t % 12 ? 12 + t % 12 : 0), t > 11 && (e += Math.floor(t / 12), t %= 12);
                return [30, 29, 30, 29, 30, 29, 30, 29, 30, 29, 30, 29][t] + (11 === t && (11 * e + 14) % 30 < 11 ? 1 : 0)
            }
        },
        mt = {},
        _t = {
            ar: q,
            bg: Z,
            ca: $,
            cs: Q,
            da: ee,
            de: te,
            el: ne,
            en: mt,
            "en-GB": ae,
            es: se,
            fa: Fe,
            fi: ze,
            fr: Ve,
            he: Re,
            hi: Ae,
            hr: We,
            hu: Ue,
            it: Be,
            ja: je,
            ko: Ke,
            lt: Je,
            nl: Xe,
            no: Ge,
            pl: qe,
            "pt-BR": $e,
            "pt-PT": Ze,
            ro: Qe,
            ru: et,
            "ru-UA": tt,
            sk: nt,
            sr: at,
            sv: st,
            th: it,
            tr: rt,
            ua: ot,
            vi: lt,
            zh: ct
        },
        pt = m ? document : ie,
        vt = m ? window : ie,
        ft = ["Webkit", "Moz"],
        gt = pt && pt.createElement("div").style,
        yt = pt && pt.createElement("canvas"),
        bt = yt && yt.getContext && yt.getContext("2d"),
        xt = vt && vt.CSS,
        Tt = xt && xt.supports,
        Dt = {},
        Ct = vt && vt.requestAnimationFrame || function(e) {
            return setTimeout(e, 20)
        },
        St = vt && vt.cancelAnimationFrame || function(e) {
            clearTimeout(e)
        },
        wt = gt && gt.animationName !== ie,
        kt = "ios" === r && !y,
        Mt = kt && vt && vt.webkit && vt.webkit.messageHandlers,
        Et = gt && gt.touchAction === ie || kt && !Mt,
        Nt = function() {
            if (!gt || gt.transform !== ie) return "";
            for (var e = 0, t = ft; e < t.length; e++) {
                var n = t[e];
                if (gt[n + "Transform"] !== ie) return n
            }
            return ""
        }(),
        It = Nt ? "-" + Nt.toLowerCase() + "-" : "",
        Lt = Tt && Tt("(transform-style: preserve-3d)"),
        Ht = Tt && (Tt("position", "sticky") || Tt("position", "-webkit-sticky"));

    function Ot(e, t, n, a) {
        e && e.addEventListener(t, n, a)
    }

    function Yt(e, t, n, a) {
        e && e.removeEventListener(t, n, a)
    }

    function Pt(e) {
        return m ? e && e.ownerDocument ? e.ownerDocument : pt : ie
    }

    function Ft(e, t) {
        return parseFloat(getComputedStyle(e)[t] || "0")
    }

    function zt(e) {
        return e.scrollLeft !== ie ? e.scrollLeft : e.pageXOffset
    }

    function Vt(e) {
        return e.scrollTop !== ie ? e.scrollTop : e.pageYOffset
    }

    function Rt(e) {
        return m ? e && e.ownerDocument && e.ownerDocument.defaultView ? e.ownerDocument.defaultView : vt : ie
    }

    function At(e, t) {
        var n = getComputedStyle(e),
            a = (Nt ? n[Nt + "Transform"] : n.transform).split(")")[0].split(", ");
        return +(t ? a[13] || a[5] : a[12] || a[4]) || 0
    }

    function Wt(e) {
        if (Dt[e]) return Dt[e];
        if (!bt) return "#fff";
        bt.fillStyle = e, bt.fillRect(0, 0, 1, 1);
        var t = bt.getImageData(0, 0, 1, 1),
            n = t ? t.data : [0, 0, 0],
            a = .299 * +n[0] + .587 * +n[1] + .114 * +n[2] < 130 ? "#fff" : "#000";
        return Dt[e] = a, a
    }

    function Ut(e, t, n, a, s, i, r) {
        var o, l, c = Math.min(1, (+new Date - t) / 468),
            h = .5 * (1 - Math.cos(Math.PI * c));
        s !== ie && (o = Te(n + (s - n) * h), e.scrollLeft = o), i !== ie && (l = Te(a + (i - a) * h), e.scrollTop = l), o !== s || l !== i ? Ct((function() {
            Ut(e, t, n, a, s, i, r)
        })) : r && r()
    }

    function Bt(e, t, n, a, s, i) {
        t !== ie && (t = Math.max(0, Te(t))), n !== ie && (n = Math.max(0, Te(n))), s && t !== ie && (t = -t), a ? Ut(e, +new Date, e.scrollLeft, e.scrollTop, t, n, i) : (t !== ie && (e.scrollLeft = t), n !== ie && (e.scrollTop = n), i && i())
    }

    function jt(e) {
        var t = e.getBoundingClientRect(),
            n = {
                left: t.left,
                top: t.top
            },
            a = Rt(e);
        return a !== ie && (n.top += Vt(a), n.left += zt(a)), n
    }

    function Kt(e, t) {
        var n = e && (e.matches || e.msMatchesSelector);
        return n && n.call(e, t)
    }

    function Jt(e, t, n) {
        for (; e && !Kt(e, t);) {
            if (e === n || e.nodeType === e.DOCUMENT_NODE) return null;
            e = e.parentNode
        }
        return e
    }

    function Xt(e, t, n) {
        var a;
        try {
            a = new CustomEvent(t, {
                bubbles: !0,
                cancelable: !0,
                detail: n
            })
        } catch (e) {
            (a = document.createEvent("Event")).initEvent(t, !0, !0), a.detail = n
        }
        e.dispatchEvent(a)
    }

    function Gt(e, t) {
        for (var n = 0; n < e.length; n++) t(e[n], n)
    }
    var qt = {},
        Zt = [],
        $t = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;

    function Qt(e, t) {
        for (var n in t) e[n] = t[n];
        return e
    }

    function en(e) {
        var t = e.parentNode;
        t && t.removeChild(e)
    }
    var tn = {
        _catchError: function(e, t) {
            for (var n, a, s; t = t._parent;)
                if ((n = t._component) && !n._processingException) try {
                    if ((a = n.constructor) && null != a.getDerivedStateFromError && (n.setState(a.getDerivedStateFromError(e)), s = n._dirty), null != n.componentDidCatch && (n.componentDidCatch(e), s = n._dirty), s) return n._pendingError = n
                } catch (t) {
                    e = t
                }
            throw e
        },
        _vnodeId: 0
    };

    function nn(e, t, n) {
        var a, s, i, r = {};
        for (i in t) "key" == i ? a = t[i] : "ref" == i ? s = t[i] : r[i] = t[i];
        if (arguments.length > 3)
            for (n = [n], i = 3; i < arguments.length; i++) n.push(arguments[i]);
        if (null != n && (r.children = n), "function" == typeof e && null != e.defaultProps)
            for (i in e.defaultProps) void 0 === r[i] && (r[i] = e.defaultProps[i]);
        return an(e, r, a, s, null)
    }

    function an(e, t, n, a, s) {
        var i = {
            type: e,
            props: t,
            key: n,
            ref: a,
            _children: null,
            _parent: null,
            _depth: 0,
            _dom: null,
            _nextDom: void 0,
            _component: null,
            _hydrating: null,
            constructor: void 0,
            _original: null == s ? ++tn._vnodeId : s
        };
        return null != tn.vnode && tn.vnode(i), i
    }

    function sn(e) {
        return e.children
    }

    function rn(e, t) {
        this.props = e, this.context = t
    }

    function on(e, t) {
        if (null == t) return e._parent ? on(e._parent, e._parent._children.indexOf(e) + 1) : null;
        for (var n; t < e._children.length; t++)
            if (null != (n = e._children[t]) && null != n._dom) return n._dom;
        return "function" == typeof e.type ? on(e) : null
    }

    function ln(e) {
        var t = e._vnode,
            n = t._dom,
            a = e._parentDom;
        if (a) {
            var s = [],
                i = Qt({}, t);
            i._original = t._original + 1, Tn(a, t, i, e._globalContext, void 0 !== a.ownerSVGElement, null != t._hydrating ? [n] : null, s, null == n ? on(t) : n, t._hydrating), Dn(s, t), t._dom != n && cn(t)
        }
    }

    function cn(e) {
        if (null != (e = e._parent) && null != e._component) {
            e._dom = e._component.base = null;
            for (var t = 0; t < e._children.length; t++) {
                var n = e._children[t];
                if (null != n && null != n._dom) {
                    e._dom = e._component.base = n._dom;
                    break
                }
            }
            return cn(e)
        }
    }
    rn.prototype.setState = function(e, t) {
        var n;
        n = null != this._nextState && this._nextState !== this.state ? this._nextState : this._nextState = Qt({}, this.state), "function" == typeof e && (e = e(Qt({}, n), this.props)), e && Qt(n, e), null != e && this._vnode && (t && this._renderCallbacks.push(t), mn(this))
    }, rn.prototype.forceUpdate = function(e) {
        this._vnode && (this._force = !0, e && this._renderCallbacks.push(e), mn(this))
    }, rn.prototype.render = sn;
    var hn, dn = [],
        un = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout;

    function mn(e) {
        (!e._dirty && (e._dirty = !0) && dn.push(e) && !_n._rerenderCount++ || hn !== tn.debounceRendering) && ((hn = tn.debounceRendering) || un)(_n)
    }

    function _n() {
        for (var e; _n._rerenderCount = dn.length;) e = dn.sort((function(e, t) {
            return e._vnode._depth - t._vnode._depth
        })), dn = [], e.some((function(e) {
            e._dirty && ln(e)
        }))
    }

    function pn(e, t, n, a, s, i, r, o, l, c) {
        var h, d, u, m, _, p, v, f = a && a._children || Zt,
            g = f.length;
        for (n._children = [], h = 0; h < t.length; h++)
            if (null != (m = null == (m = t[h]) || "boolean" == typeof m ? n._children[h] = null : "string" == typeof m || "number" == typeof m || "bigint" == typeof m ? n._children[h] = an(null, m, null, null, m) : Array.isArray(m) ? n._children[h] = an(sn, {
                    children: m
                }, null, null, null) : m._depth > 0 ? n._children[h] = an(m.type, m.props, m.key, null, m._original) : n._children[h] = m)) {
                if (m._parent = n, m._depth = n._depth + 1, null === (u = f[h]) || u && m.key == u.key && m.type === u.type) f[h] = void 0;
                else
                    for (d = 0; d < g; d++) {
                        if ((u = f[d]) && m.key == u.key && m.type === u.type) {
                            f[d] = void 0;
                            break
                        }
                        u = null
                    }
                Tn(e, m, u = u || qt, s, i, r, o, l, c), _ = m._dom, (d = m.ref) && u.ref != d && (v || (v = []), u.ref && v.push(u.ref, null, m), v.push(d, m._component || _, m)), null != _ ? (null == p && (p = _), "function" == typeof m.type && null != m._children && m._children === u._children ? m._nextDom = l = vn(m, l, e) : l = fn(e, m, u, f, _, l), c || "option" !== n.type ? "function" == typeof n.type && (n._nextDom = l) : e.value = "") : l && u._dom == l && l.parentNode != e && (l = on(u))
            }
        for (n._dom = p, h = g; h--;) null != f[h] && ("function" == typeof n.type && null != f[h]._dom && f[h]._dom == n._nextDom && (n._nextDom = on(a, h + 1)), Sn(f[h], f[h]));
        if (v)
            for (h = 0; h < v.length; h++) Cn(v[h], v[++h], v[++h])
    }

    function vn(e, t, n) {
        for (var a = 0; a < e._children.length; a++) {
            var s = e._children[a];
            s && (s._parent = e, t = "function" == typeof s.type ? vn(s, t, n) : fn(n, s, s, e._children, s._dom, t))
        }
        return t
    }

    function fn(e, t, n, a, s, i) {
        var r;
        if (void 0 !== t._nextDom) r = t._nextDom, t._nextDom = void 0;
        else if (null == n || s != i || null == s.parentNode) e: if (null == i || i.parentNode !== e) e.appendChild(s), r = null;
            else {
                for (var o = i, l = 0;
                    (o = o.nextSibling) && l < a.length; l += 2)
                    if (o == s) break e;
                e.insertBefore(s, i), r = i
            }
        return i = void 0 !== r ? r : s.nextSibling
    }

    function gn(e, t, n) {
        "-" === t[0] ? e.setProperty(t, n) : null == n ? e[t] = "" : "number" != typeof n || $t.test(t) ? e[t] = n : e[t] = n + "px"
    }

    function yn(e, t, n, a, s) {
        var i;
        e: if ("style" === t)
            if ("string" == typeof n) e.style.cssText = n;
            else {
                if ("string" == typeof a && (e.style.cssText = a = ""), a)
                    for (t in a) n && t in n || gn(e.style, t, "");
                if (n)
                    for (t in n) a && n[t] === a[t] || gn(e.style, t, n[t])
            }
        else if ("o" === t[0] && "n" === t[1])
            if (i = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e._listeners || (e._listeners = {}), e._listeners[t + i] = n, n) {
                if (!a) {
                    var r = i ? xn : bn;
                    e.addEventListener(t, r, i)
                }
            } else {
                var o = i ? xn : bn;
                e.removeEventListener(t, o, i)
            }
        else if ("dangerouslySetInnerHTML" !== t) {
            if (s) t = t.replace(/xlink[H:h]/, "h").replace(/sName$/, "s");
            else if ("href" !== t && "list" !== t && "form" !== t && "tabIndex" !== t && "download" !== t && t in e) try {
                e[t] = null == n ? "" : n;
                break e
            } catch (e) {}
            "function" == typeof n || (null != n && (!1 !== n || "a" === t[0] && "r" === t[1]) ? e.setAttribute(t, n) : e.removeAttribute(t))
        }
    }

    function bn(e) {
        this._listeners[e.type + !1](tn.event ? tn.event(e) : e)
    }

    function xn(e) {
        this._listeners[e.type + !0](tn.event ? tn.event(e) : e)
    }

    function Tn(e, t, n, a, s, i, r, o, l) {
        var c, h = t.type;
        if (void 0 !== t.constructor) return null;
        null != n._hydrating && (l = n._hydrating, o = t._dom = n._dom, t._hydrating = null, i = [o]), (c = tn._diff) && c(t);
        try {
            e: if ("function" == typeof h) {
                var d, u, m, _, p, v, f = t.props,
                    g = (c = h.contextType) && a[c._id],
                    y = c ? g ? g.props.value : c._defaultValue : a;
                if (n._component ? v = (d = t._component = n._component)._processingException = d._pendingError : ("prototype" in h && h.prototype.render ? t._component = d = new h(f, y) : (t._component = d = new rn(f, y), d.constructor = h, d.render = wn), g && g.sub(d), d.props = f, d.state || (d.state = {}), d.context = y, d._globalContext = a, u = d._dirty = !0, d._renderCallbacks = []), null == d._nextState && (d._nextState = d.state), null != h.getDerivedStateFromProps && (d._nextState == d.state && (d._nextState = Qt({}, d._nextState)), Qt(d._nextState, h.getDerivedStateFromProps(f, d._nextState))), m = d.props, _ = d.state, u) null == h.getDerivedStateFromProps && null != d.componentWillMount && d.componentWillMount(), null != d.componentDidMount && d._renderCallbacks.push(d.componentDidMount);
                else {
                    if (null == h.getDerivedStateFromProps && f !== m && null != d.componentWillReceiveProps && d.componentWillReceiveProps(f, y), !d._force && null != d.shouldComponentUpdate && !1 === d.shouldComponentUpdate(f, d._nextState, y) || t._original === n._original) {
                        d.props = f, d.state = d._nextState, t._original !== n._original && (d._dirty = !1), d._vnode = t, t._dom = n._dom, t._children = n._children, t._children.forEach((function(e) {
                            e && (e._parent = t)
                        })), d._renderCallbacks.length && r.push(d);
                        break e
                    }
                    null != d.componentWillUpdate && d.componentWillUpdate(f, d._nextState, y), null != d.componentDidUpdate && d._renderCallbacks.push((function() {
                        d.componentDidUpdate(m, _, p)
                    }))
                }
                d.context = y, d.props = f, d.state = d._nextState, (c = tn._render) && c(t), d._dirty = !1, d._vnode = t, d._parentDom = e, c = d.render(d.props, d.state, d.context), d.state = d._nextState, null != d.getChildContext && (a = Qt(Qt({}, a), d.getChildContext())), u || null == d.getSnapshotBeforeUpdate || (p = d.getSnapshotBeforeUpdate(m, _));
                var b = null != c && c.type === sn && null == c.key ? c.props.children : c;
                pn(e, Array.isArray(b) ? b : [b], t, n, a, s, i, r, o, l), d.base = t._dom, t._hydrating = null, d._renderCallbacks.length && r.push(d), v && (d._pendingError = d._processingException = null), d._force = !1
            } else null == i && t._original === n._original ? (t._children = n._children, t._dom = n._dom) : t._dom = function(e, t, n, a, s, i, r, o) {
                var l = n.props,
                    c = t.props,
                    h = t.type,
                    d = 0;
                "svg" === h && (s = !0);
                if (null != i)
                    for (; d < i.length; d++) {
                        var u = i[d];
                        if (u && (u === e || (h ? u.localName == h : 3 == u.nodeType))) {
                            e = u, i[d] = null;
                            break
                        }
                    }
                if (null == e) {
                    if (null === h) return document.createTextNode(c);
                    e = s ? document.createElementNS("http://www.w3.org/2000/svg", h) : document.createElement(h, c.is && c), i = null, o = !1
                }
                if (null === h) l === c || o && e.data === c || (e.data = c);
                else {
                    i = i && Zt.slice.call(e.childNodes);
                    var m = (l = n.props || qt).dangerouslySetInnerHTML,
                        _ = c.dangerouslySetInnerHTML;
                    if (o || (null != i && (l = {}), (_ || m) && (_ && (m && _.__html == m.__html || _.__html === e.innerHTML) || (e.innerHTML = _ && _.__html || ""))), function(e, t, n, a, s) {
                            var i;
                            for (i in n) "children" === i || "key" === i || i in t || yn(e, i, null, n[i], a);
                            for (i in t) s && "function" != typeof t[i] || "children" === i || "key" === i || "value" === i || "checked" === i || n[i] === t[i] || yn(e, i, t[i], n[i], a)
                        }(e, c, l, s, o), _) t._children = [];
                    else if (d = t.props.children, pn(e, Array.isArray(d) ? d : [d], t, n, a, s && "foreignObject" !== h, i, r, e.firstChild, o), null != i)
                        for (d = i.length; d--;) null != i[d] && en(i[d]);
                    o || ("value" in c && void 0 !== (d = c.value) && (d !== e.value || "progress" === h && !d) && yn(e, "value", d, l.value, !1), "checked" in c && void 0 !== (d = c.checked) && d !== e.checked && yn(e, "checked", d, l.checked, !1))
                }
                return e
            }(n._dom, t, n, a, s, i, r, l);
            (c = tn.diffed) && c(t)
        }
        catch (e) {
            t._original = null, (l || null != i) && (t._dom = o, t._hydrating = !!l, i[i.indexOf(o)] = null), tn._catchError(e, t, n)
        }
    }

    function Dn(e, t) {
        tn._commit && tn._commit(t, e), e.some((function(t) {
            try {
                e = t._renderCallbacks, t._renderCallbacks = [], e.some((function(e) {
                    e.call(t)
                }))
            } catch (e) {
                tn._catchError(e, t._vnode)
            }
        }))
    }

    function Cn(e, t, n) {
        try {
            "function" == typeof e ? e(t) : e.current = t
        } catch (e) {
            tn._catchError(e, n)
        }
    }

    function Sn(e, t, n) {
        var a, s;
        if (tn.unmount && tn.unmount(e), (a = e.ref) && (a.current && a.current !== e._dom || Cn(a, null, t)), n || "function" == typeof e.type || (n = null != (s = e._dom)), e._dom = e._nextDom = void 0, null != (a = e._component)) {
            if (a.componentWillUnmount) try {
                a.componentWillUnmount()
            } catch (e) {
                tn._catchError(e, t)
            }
            a.base = a._parentDom = null
        }
        if (a = e._children)
            for (var i = 0; i < a.length; i++) a[i] && Sn(a[i], t, n);
        null != s && en(s)
    }

    function wn(e, t, n) {
        return this.constructor(e, n)
    }

    function kn(e, t, n) {
        tn._root && tn._root(e, t);
        var a = "function" == typeof n,
            s = a ? null : n && n._children || t._children,
            i = [];
        Tn(t, e = (!a && n || t)._children = nn(sn, null, [e]), s || qt, qt, void 0 !== t.ownerSVGElement, !a && n ? [n] : s ? null : t.firstChild ? Zt.slice.call(t.childNodes) : null, i, !a && n ? n : s ? s._dom : t.firstChild, a), Dn(i, e)
    }
    _n._rerenderCount = 0;
    var Mn = 0;

    function En(e, t) {
        var n = {
            _id: t = "__cC" + Mn++,
            _defaultValue: e,
            Consumer: function(e, t) {
                return e.children(t)
            },
            Provider: function(e) {
                if (!this.getChildContext) {
                    var n = [],
                        a = {};
                    a[t] = this, this.getChildContext = function() {
                        return a
                    }, this.shouldComponentUpdate = function(e) {
                        this.props.value !== e.value && n.some(mn)
                    }, this.sub = function(e) {
                        n.push(e);
                        var t = e.componentWillUnmount;
                        e.componentWillUnmount = function() {
                            n.splice(n.indexOf(e), 1), t && t.call(e)
                        }
                    }
                }
                return e.children
            }
        };
        return n.Provider._contextRef = n.Consumer.contextType = n
    }
    var Nn = function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return a(t, e), t.prototype.render = function() {}, t.prototype.shouldComponentUpdate = function(e, t) {
            return In(e, this.props) || In(t, this.state)
        }, t
    }(rn);

    function In(e, t) {
        for (var n in e)
            if (e[n] !== t[n]) return !0;
        for (var n in t)
            if (!(n in e)) return !0;
        return !1
    }
    var Ln = nn;
    tn.vnode = function(e) {
        var t = e.props,
            n = {};
        if (me(e.type)) {
            for (var a in t) {
                var s = t[a];
                /^onAni/.test(a) ? a = a.toLowerCase() : /ondoubleclick/i.test(a) && (a = "ondblclick"), n[a] = s
            }
            e.props = n
        }
    };
    var Hn = {},
        On = 0;

    function Yn(e, t, n, a, s) {
        Kt(e, t) ? e.__mbscFormInst || Pn(n, e, s, a, !0) : Gt(e.querySelectorAll(t), (function(e) {
            e.__mbscFormInst || Pn(n, e, s, a, !0)
        }))
    }

    function Pn(e, t, n, a, i) {
        var r, o, l = [],
            c = [],
            h = {},
            d = a || {},
            u = d.renderToParent ? t.parentNode : t,
            m = u.parentNode,
            _ = d.useOwnChildren ? t : u,
            p = t.getAttribute("class"),
            v = t.value,
            f = s({
                className: u.getAttribute("class")
            }, t.dataset, n, {
                ref: function(e) {
                    o = e
                }
            });
        d.readProps && d.readProps.forEach((function(e) {
            var n = t[e];
            n !== ie && (f[e] = n)
        })), d.readAttrs && d.readAttrs.forEach((function(e) {
            var n = t.getAttribute(e);
            null !== n && (f[e] = n)
        }));
        var g = d.slots;
        if (g)
            for (var y in g)
                if (g.hasOwnProperty(y)) {
                    var b = g[y],
                        x = u.querySelector("[mbsc-" + b + "]");
                    x && (h[y] = x, x.parentNode.removeChild(x), f[y] = Ln("span", {
                        className: "mbsc-slot-" + b
                    }))
                }
        if (d.hasChildren && (Gt(_.childNodes, (function(e) {
                e !== t && 8 !== e.nodeType && (3 !== e.nodeType || 3 === e.nodeType && /\S/.test(e.nodeValue)) && l.push(e), c.push(e)
            })), Gt(l, (function(e) {
                _.removeChild(e)
            })), l.length && (f.hasChildren = !0)), t.id || (t.id = "mbsc-control-" + On++), d.before && d.before(t, f, l), kn(Ln(e, f), m, u), p && d.renderToParent && (r = t.classList).add.apply(r, p.replace(/^\s+|\s+$/g, "").replace(/\s+|^\s|\s$/g, " ").split(" ")), d.hasChildren) {
            var T = "." + d.parentClass,
                D = Kt(u, T) ? u : u.querySelector(T);
            D && Gt(l, (function(e) {
                D.appendChild(e)
            }))
        }
        if (d.hasValue && (t.value = v), g) {
            var C = function(e) {
                if (h.hasOwnProperty(e)) {
                    var t = g[e],
                        n = h[e];
                    Gt(u.querySelectorAll(".mbsc-slot-" + t), (function(e, t) {
                        var a = t > 0 ? n.cloneNode(!0) : n;
                        e.appendChild(a)
                    }))
                }
            };
            for (var y in h) C(y)
        }
        return o.destroy = function() {
            var e = u.parentNode,
                n = pt.createComment("");
            e.insertBefore(n, u), kn(null, u), delete t.__mbscInst, delete t.__mbscFormInst, u.innerHTML = "", u.setAttribute("class", f.className), e.replaceChild(u, n), d.hasChildren && Gt(c, (function(e) {
                _.appendChild(e)
            })), d.renderToParent && t.setAttribute("class", p)
        }, i ? (t.__mbscInst || (t.__mbscInst = o), t.__mbscFormInst = o) : t.__mbscInst = o, o
    }

    function Fn(e) {
        Hn[e._name] = e
    }

    function zn(e, t) {
        if (e)
            for (var n in Hn)
                if (Hn.hasOwnProperty(n)) {
                    var a = Hn[n];
                    Yn(e, a._selector, a, a._renderOpt, t)
                }
    }
    var Vn = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t._newProps = {}, t._setEl = function(e) {
                    t._el = e ? e._el || e : null
                }, t
            }
            return a(t, e), Object.defineProperty(t.prototype, "value", {
                get: function() {
                    return this.__value
                },
                set: function(e) {
                    this.__value = e
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.componentDidMount = function() {
                this.__init(), this._init(), this._mounted(), this._updated(), this._enhance()
            }, t.prototype.componentDidUpdate = function() {
                this._updated(), this._enhance()
            }, t.prototype.componentWillUnmount = function() {
                this._destroy(), this.__destroy()
            }, t.prototype.render = function() {
                return this._willUpdate(), this._template(this.s, this.state)
            }, t.prototype.getInst = function() {
                return this
            }, t.prototype.setOptions = function(e) {
                for (var t in e) this.props[t] = e[t];
                this.forceUpdate()
            }, t.prototype._safeHtml = function(e) {
                return {
                    __html: e
                }
            }, t.prototype._init = function() {}, t.prototype.__init = function() {}, t.prototype._emit = function(e, t) {}, t.prototype._template = function(e, t) {}, t.prototype._mounted = function() {}, t.prototype._updated = function() {}, t.prototype._destroy = function() {}, t.prototype.__destroy = function() {}, t.prototype._willUpdate = function() {}, t.prototype._enhance = function() {
                var e = this._shouldEnhance;
                e && (zn(!0 === e ? this._el : e), this._shouldEnhance = !1)
            }, t
        }(Nn),
        Rn = new Date(1970, 0, 1),
        An = 6e4,
        Wn = 36e5,
        Un = 864e5;

    function Bn(e) {
        return !!e._mbsc
    }

    function jn(e, t) {
        var n = t.dataTimezone || t.displayTimezone,
            a = t.timezonePlugin;
        if (n && a && Bn(e)) {
            var s = e.clone();
            return s.setTimezone(n), s.toISOString()
        }
        return e
    }
    var Kn = {
            amText: "am",
            dateFormat: "MM/DD/YYYY",
            dateFormatLong: "D DDD MMM YYYY",
            dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            dayNamesMin: ["S", "M", "T", "W", "T", "F", "S"],
            dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            daySuffix: "",
            firstDay: 0,
            fromText: "Start",
            getDate: ca,
            monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            monthSuffix: "",
            pmText: "pm",
            separator: " ",
            shortYearCutoff: "+10",
            timeFormat: "h:mm A",
            toText: "End",
            todayText: "Today",
            weekText: "Week {count}",
            yearSuffix: "",
            getMonth: function(e) {
                return e.getMonth()
            },
            getDay: function(e) {
                return e.getDate()
            },
            getYear: function(e) {
                return e.getFullYear()
            },
            getMaxDayOfMonth: function(e, t) {
                return 32 - new Date(e, t, 32, 12).getDate()
            },
            getWeekNumber: function(e) {
                var t = new Date(+e);
                t.setHours(0, 0, 0), t.setDate(t.getDate() + 4 - (t.getDay() || 7));
                var n = new Date(t.getFullYear(), 0, 1);
                return Math.ceil(((t - n) / 864e5 + 1) / 7)
            }
        },
        Jn = /^(\d{4}|[+-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[T\s](\d{2}):?(\d{2})(?::?(\d{2})(?:\.(\d{3}))?)?((Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/,
        Xn = /^((\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{3}))?)?(?:(Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/;

    function Gn(e, t, n) {
        var a, s, i = {
            y: 1,
            m: 2,
            d: 3,
            h: 4,
            i: 5,
            s: 6,
            u: 7,
            tz: 8
        };
        if (n)
            for (a in i) i.hasOwnProperty(a) && (s = e[i[a] - t]) && (n[a] = "tz" === a ? s : 1)
    }

    function qn(e) {
        return +new Date(1970, 0, 1, e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()) - +Rn
    }

    function Zn(e, t, n, a, s) {
        var i = +e,
            r = +n;
        return i < (s && r === +a ? +a + 1 : +a) && (s && i === +t ? +t + 1 : +t) > r
    }

    function $n(e, t) {
        var n = _a(e, t);
        return n.setHours(0, 0, 0, 0), n
    }

    function Qn(e, t) {
        var n = _a(e, t);
        return n.setHours(23, 59, 59, 999), n
    }

    function ea(e, t, n, a, s) {
        return (!t && !s || e.exclusiveEndDates) && n && a && n < a ? _a(t ? ie : e, +a - 1) : a
    }

    function ta(e) {
        return e.getFullYear() + "-" + xe(e.getMonth() + 1) + "-" + xe(e.getDate())
    }

    function na(e, t) {
        return Bn(e) && !t ? e.createDate(e.getFullYear(), e.getMonth(), e.getDate()) : ca(e.getFullYear(), e.getMonth(), e.getDate())
    }

    function aa(e) {
        return Date.UTC(e.getFullYear(), e.getMonth(), e.getDate())
    }

    function sa(e, t) {
        return Te((aa(t) - aa(e)) / Un)
    }

    function ia(e, t, n, a) {
        for (var s = -1, i = na(e); i <= na(t); i.setDate(i.getDate() + 1)) Da(i.getDay(), n, a) && s++;
        return s
    }

    function ra(e, t, n) {
        var a = e.getFullYear(),
            s = e.getMonth(),
            i = e.getDay(),
            r = n === ie ? t.firstDay : n;
        return new Date(a, s, r - (r - i > 0 ? 7 : 0) - i + e.getDate())
    }

    function oa(e, t) {
        return e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth() && e.getDate() === t.getDate()
    }

    function la(e, t, n) {
        return n.getYear(e) === n.getYear(t) && n.getMonth(e) === n.getMonth(t)
    }

    function ca(e, t, n, a, s, i, r) {
        var o = new Date(e, t, n, a || 0, s || 0, i || 0, r || 0);
        return 23 === o.getHours() && 0 === (a || 0) && o.setHours(o.getHours() + 2), o
    }

    function ha(e) {
        return e.getTime
    }

    function da(e) {
        return me(e) && Xn.test(e)
    }

    function ua(e, t) {
        return _a(e, t.getFullYear(), t.getMonth(), t.getDate(), t.getHours(), t.getMinutes(), t.getSeconds(), t.getMilliseconds())
    }

    function ma(e) {
        return e ? new Date(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()) : e
    }

    function _a(e, t, n, a, s, i, r, o) {
        return null === t ? null : t && (ue(t) || me(t)) && pe(n) ? pa(t, e) : e && e.timezonePlugin ? e.timezonePlugin.createDate(e, t, n, a, s, i, r, o) : ve(t) ? new Date(t) : pe(t) ? new Date : new Date(t, n || 0, a || 1, s || 0, i || 0, r || 0, o || 0)
    }

    function pa(e, t, n, a, s) {
        var i;
        if (me(e) && (e = e.trim()), !e) return null;
        var r = t && t.timezonePlugin;
        if (r && !s) {
            var o = Bn(e) ? e : r.parse(e, t);
            return o.setTimezone(t.displayTimezone), o
        }
        return ha(e) ? e : e._isAMomentObject ? e.toDate() : ue(e) ? new Date(e) : (i = Xn.exec(e)) ? (Gn(i, 2, a), new Date(1970, 0, 1, i[2] ? +i[2] : 0, i[3] ? +i[3] : 0, i[4] ? +i[4] : 0, i[5] ? +i[5] : 0)) : (i = Jn.exec(e)) ? (Gn(i, 0, a), new Date(i[1] ? +i[1] : 1970, i[2] ? i[2] - 1 : 0, i[3] ? +i[3] : 1, i[4] ? +i[4] : 0, i[5] ? +i[5] : 0, i[6] ? +i[6] : 0, i[7] ? +i[7] : 0)) : ya(n, e, t)
    }

    function va(e, t, n, a, s) {
        var i = m && window.moment || t.moment,
            r = t.timezonePlugin && (t.dataTimezone || t.displayTimezone),
            o = r ? "iso8601" : t.returnFormat;
        if (r && s) return jn(e, t);
        if (e) {
            if ("moment" === o && i) return i(e);
            if ("locale" === o) return ga(n, e, t);
            if ("iso8601" === o) return function(e, t) {
                var n = "",
                    a = "";
                return e && (t.h && (a += xe(e.getHours()) + ":" + xe(e.getMinutes()), t.s && (a += ":" + xe(e.getSeconds())), t.u && (a += "." + xe(e.getMilliseconds(), 3)), t.tz && (a += t.tz)), t.y ? (n += e.getFullYear(), t.m && (n += "-" + xe(e.getMonth() + 1), t.d && (n += "-" + xe(e.getDate())), t.h && (n += "T" + a))) : t.h && (n = a)), n
            }(e, a)
        }
        return e
    }

    function fa(e, t, n) {
        return ga(e, t, s({}, Kn, b.locale, n))
    }

    function ga(e, t, n) {
        var a, s, i = "",
            r = !1,
            o = function(t) {
                for (var n = 0, s = a; s + 1 < e.length && e.charAt(s + 1) === t;) n++, s++;
                return n
            },
            l = function(e) {
                var t = o(e);
                return a += t, t
            },
            c = function(e, t, n) {
                var a = "" + t;
                if (l(e))
                    for (; a.length < n;) a = "0" + a;
                return a
            },
            h = function(e, t, n, a) {
                return 3 === l(e) ? a[t] : n[t]
            };
        for (a = 0; a < e.length; a++)
            if (r) "'" !== e.charAt(a) || l("'") ? i += e.charAt(a) : r = !1;
            else switch (e.charAt(a)) {
                case "D":
                    i += o("D") > 1 ? h("D", t.getDay(), n.dayNamesShort, n.dayNames) : c("D", n.getDay(t), 2);
                    break;
                case "M":
                    i += o("M") > 1 ? h("M", n.getMonth(t), n.monthNamesShort, n.monthNames) : c("M", n.getMonth(t) + 1, 2);
                    break;
                case "Y":
                    s = n.getYear(t), i += 3 === l("Y") ? s : (s % 100 < 10 ? "0" : "") + s % 100;
                    break;
                case "h":
                    var d = t.getHours();
                    i += c("h", d > 12 ? d - 12 : 0 === d ? 12 : d, 2);
                    break;
                case "H":
                    i += c("H", t.getHours(), 2);
                    break;
                case "m":
                    i += c("m", t.getMinutes(), 2);
                    break;
                case "s":
                    i += c("s", t.getSeconds(), 2);
                    break;
                case "a":
                    i += t.getHours() > 11 ? n.pmText : n.amText;
                    break;
                case "A":
                    i += t.getHours() > 11 ? n.pmText.toUpperCase() : n.amText.toUpperCase();
                    break;
                case "'":
                    l("'") ? i += "'" : r = !0;
                    break;
                default:
                    i += e.charAt(a)
            }
        return i
    }

    function ya(e, t, n) {
        var a = s({}, Kn, n),
            i = pa(a.defaultValue || new Date);
        if (!t) return i;
        e || (e = a.dateFormat + a.separator + a.timeFormat);
        var r, o = a.shortYearCutoff,
            l = a.getYear(i),
            c = a.getMonth(i) + 1,
            h = a.getDay(i),
            d = i.getHours(),
            u = i.getMinutes(),
            m = 0,
            _ = -1,
            p = !1,
            v = 0,
            f = function(t) {
                for (var n = 0, a = r; a + 1 < e.length && e.charAt(a + 1) === t;) n++, a++;
                return n
            },
            g = function(e) {
                var t = f(e);
                return r += t, t
            },
            y = function(e) {
                var n = g(e),
                    a = new RegExp("^\\d{1," + (n >= 2 ? 4 : 2) + "}"),
                    s = t.substr(v).match(a);
                return s ? (v += s[0].length, parseInt(s[0], 10)) : 0
            },
            b = function(e, n, a) {
                for (var s = 3 === g(e) ? a : n, i = 0; i < s.length; i++)
                    if (t.substr(v, s[i].length).toLowerCase() === s[i].toLowerCase()) return v += s[i].length, i + 1;
                return 0
            },
            x = function() {
                v++
            };
        for (r = 0; r < e.length; r++)
            if (p) "'" !== e.charAt(r) || g("'") ? x() : p = !1;
            else switch (e.charAt(r)) {
                case "Y":
                    l = y("Y");
                    break;
                case "M":
                    c = f("M") < 2 ? y("M") : b("M", a.monthNamesShort, a.monthNames);
                    break;
                case "D":
                    f("D") < 2 ? h = y("D") : b("D", a.dayNamesShort, a.dayNames);
                    break;
                case "H":
                    d = y("H");
                    break;
                case "h":
                    d = y("h");
                    break;
                case "m":
                    u = y("m");
                    break;
                case "s":
                    m = y("s");
                    break;
                case "a":
                    _ = b("a", [a.amText, a.pmText], [a.amText, a.pmText]) - 1;
                    break;
                case "A":
                    _ = b("A", [a.amText, a.pmText], [a.amText, a.pmText]) - 1;
                    break;
                case "'":
                    g("'") ? x() : p = !0;
                    break;
                default:
                    x()
            }
        if (l < 100) {
            var T = void 0;
            T = l <= (me(o) ? (new Date).getFullYear() % 100 + parseInt(o, 10) : +o) ? 0 : -100, l += (new Date).getFullYear() - (new Date).getFullYear() % 100 + T
        }
        d = -1 === _ ? d : _ && d < 12 ? d + 12 : _ || 12 !== d ? d : 0;
        var D = a.getDate(l, c - 1, h, d, u, m);
        return a.getYear(D) !== l || a.getMonth(D) + 1 !== c || a.getDay(D) !== h ? i : D
    }

    function ba(e, t, n) {
        if (e === t) return !0;
        if (he(e) && !e.length && null === t || he(t) && !t.length && null === e) return !0;
        if (null === e || null === t || e === ie || t === ie) return !1;
        if (me(e) && me(t)) return e === t;
        var a = n && n.dateFormat;
        if (he(e) || he(t)) {
            if (e.length !== t.length) return !1;
            for (var s = 0; s < e.length; s++) {
                var i = e[s],
                    r = t[s];
                if (!(me(i) && me(r) ? i === r : +pa(i, n, a) == +pa(r, n, a))) return !1
            }
            return !0
        }
        return +pa(e, n, a) == +pa(t, n, a)
    }

    function xa(e) {
        return Bn(e) ? e.clone() : new Date(e)
    }

    function Ta(e, t) {
        var n = xa(e);
        return n.setDate(n.getDate() + t), n
    }

    function Da(e, t, n) {
        return t > n ? e <= n || e >= t : e >= t && e <= n
    }

    function Ca(e, t) {
        var n = An * t,
            a = xa(e).setHours(0, 0, 0, 0),
            s = a + Math.round((+e - +a) / n) * n;
        return Bn(e) ? e.createDate(s) : new Date(s)
    }

    function Sa(e, t, n) {
        return t && e < t ? new Date(t) : n && e > n ? new Date(n) : e
    }
    m && "undefined" == typeof Symbol && (window.Symbol = {
        toPrimitive: "toPrimitive"
    }), x.datetime = {
        formatDate: fa,
        parseDate: ya
    };
    var wa, ka, Ma = vt,
        Ea = +new Date,
        Na = {},
        Ia = {};

    function La(e) {
        !e._logged && "mbscdemo" !== t.apiKey && pt && (e._logged = !0, Na.components = Na.components || [], Na.components.push(e.constructor._name.toLowerCase()), clearTimeout(ka), ka = setTimeout((function() {
            if (!t.fwv) {
                var n = void 0;
                switch (t.fw) {
                    case "angular":
                        var a = pt.querySelector("[ng-version]");
                        n = a ? a.getAttribute("ng-version") : "N/A";
                        break;
                    case "jquery":
                        n = Ma.$.fn && Ma.$.fn.jquery
                }
                t.fwv = n || "N/A"
            }
            // Na.demo = !!Ma.isMbscDemo, Na.fw = t.fw, Na.fwv = t.fwv, Na.theme = e.s.theme, Na.trialCode = t.apiKey, Na.v = e._v.version, Oa("log", null, Na, (function() {
            //     Na = {}
            // }))
        }), 5e3))
    }

    // function Ha(e) {
    //     if (e && pt && !pt.getElementById("")) {
    //         var t = pt.createElement("div");
    //         t.setAttribute("id", "trial-message"), t.setAttribute("style", "position: absolute;width: 100%; bottom: 0;left: 0; padding: 10px;box-sizing: border-box;"), t.setAttribute("class", "mbsc-font");
    //         var n = pt.createElement("div");
    //         n.setAttribute("style", "padding: 15px 25px; max-width: 400px; margin: 0 auto 10px auto; border-radius: 16px; line-height: 25px; background: #cacaca59; font-size: 15px; color: #151515;"), n.innerHTML = e.message + " ";
    //         var a = pt.createElement("a");
    //         a.innerHTML = e.button.text, a.setAttribute("style", "color: #FF4080;font-weight: 600;"), a.setAttribute("href", "https://mobiscroll.com/pricing?ref=trialapp"), n.appendChild(a), t.appendChild(n), pt.body.appendChild(t), setTimeout((function() {
    //             pt.body.removeChild(t)
    //         }), 6e3)
    //     }
    // }

    function Oa(e, n, a, s, i, r) {
        if (vt && pt) {
            var o, l = pt.createElement("script"),
                c = "mbsc_jsonp_" + (i || ++Ea);
            c = vt[c] ? "mbsc_jsonp_" + ++Ea : c;
            var h = r || 1;
            vt[c] = function(t, a) {
                clearTimeout(o), l.parentNode.removeChild(l), delete vt[c], t = t ? JSON.parse(t, (function(e, t) {
                    return "string" != typeof t ? t : "function_" === t.substring(0, 9) && n ? n[t.replace("function_", "")] : t.match(Jn) ? pa(t) : t
                })) : {}, "remote" === e && (Ia.txt = t.__e, delete t.__e), a || s(t)
            }, o = setTimeout(d, 6e3), l.onerror = d, l.src = t.apiUrl + t.apiKey + "/" + e + "?callback=" + c + "&data=" + encodeURIComponent(JSON.stringify(a)), pt.body.appendChild(l)
        } else s({});

        function d() {
            vt && vt[c] && vt[c](null, !0), "remote" === e && (h < 4 ? Oa(e, n, a, s, i, h + 1) : wa || (wa = !0, Ya()))
        }
    }

    function Ya() {
        var e = pt.cookie.replace(/(?:(?:^|.*;\s*)ASP.NET_SessionId\s*=\s*([^;]*).*$)|^.*$/, "$1");
        pt.cookie = "mobiscrollClientError=1; expires=" + new Date((new Date).getTime() + 864e5).toUTCString() + "; path=/; SameSite=Strict";
        try {
            vt.name = (vt.name || "") + ";mobiscrollClientError"
        } catch (e) {}
        Oa("error", null, {
            sessionID: e,
            // trialCode: t.apiKey
        }, (function() {
            pt.cookie = "mobiscrollClientError=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
            try {
                vt.name = (vt.name || "").replace(/;mobiscrollClientError/g, "")
            } catch (e) {}
        }))
    }
    pt && (pt.cookie.replace(/(?:(?:^|.*;\s*)mobiscrollClientError\s*=\s*([^;]*).*$)|^.*$/, "$1") || /mobiscrollClientError/.test(vt.name || "")) && pt.addEventListener("DOMContentLoaded", (function() {
        Ya()
    }));
    var Pa, Fa = new Function("textParam,p", function() {
            var e, t = function(e, t) {
                    var n, a = function(e) {
                            var t, n = e[0];
                            for (t = 0; t < 16; ++t)
                                if (n * t % 16 == 1) return [t, e[1]]
                        }(t),
                        s = function(e, t, n, a) {
                            var s, i = "0123456789abcdef",
                                r = "",
                                o = t.length;
                            for (s = 0; s < o; ++s) r += e ? i[(n * i.indexOf(t[s]) + a) % 16] : i[((n * i.indexOf(t[s]) - n * a) % 16 + 16) % 16];
                            return r
                        }(0, e, a[0], a[1]),
                        i = s.length,
                        r = [];
                    for (n = 0; n < i; n += 2) r.push(s[n] + s[n + 1]);
                    return r
                }("7c7a797b7ce5707c58e17ae1eda67ee1e43d313b7ae57c757ae6a0cde17ce0a67ae1e6ecefeda0a934cde17ce0a6ede170a038a6383ea478a9aeaea17ce5707c58e17ae1eda67c707c3fa734ece97ea8737c79e4e53daaa7abee75e6e37ce9efe6a0e5a97b7ee17aa87c3de5a6e4e5e6e77ce0a4e6a47a3b77e0e9e4e5a038a13d3d7ca97b7a3dcde17ce0a6eee4efef7aa0cde17ce0a67ae1e6ecefeda0a9a27ca93b7cad3d313be63de55b7c5d3be55b7c5d3de55b7a5d3be55b7a5d3de67d7ae57c757ae6a8e57da05ba778efe9e67ce57aade57ee5e67c7332e6efe6e5a7a4a7ece97378e4e17932eae4efe3eba1e9ed78ef7a7ce1e67ca7a4a778ef73e97ce9efe632e1ea73efe4757ce5a1e9ed78ef7a7ce1e67ca7a4a77cef783238a1e9ed78ef7a7ce1e67ca7a4a7e4e5ee7c3238a1e9ed78ef7a7ce1e67ca7a4a7eaef7c7cefed3238a1e9ed78ef7a7ce1e67ca7a4a77ae9e7e07c3238a1e9ed78ef7a7ce1e67ca7a4a7ede17ae7e9e63238a1e9ed78ef7a7ce1e67ca7a4a778e1ecece9e6e73238a1e9ed78ef7a7ce1e67ca7a4a7eeefe67cad73e972e532307870a1e9ed78ef7a7ce1e67ca7a4a7e4e9e6e5ade0e5e9e7e07c32313a7870a7a4a77ce5707cade1e4e9e7e632e3e5e67ce57aa7a4a7ef78e1e3e97c7932a7aba0cde17ce0a6eee4efef7aa0cde17ce0a67ae1e6ecefeda0a9a23a38a9af313838ab38a630a9aba7a1e9ed78ef7a7ce1e67ca75da9a6e2efe9e6a0a73ba7a9aba7aa3654753838353c54753838353a547538383c39547538383c31547538383ce334afece97e36a732a7a7a97de3e17ce3e0a0e5a97b7ae57c757ae6a8a7a77d2", [9, 8]),
                n = "",
                a = t.length;
            for (e = 0; e < a; e++) n += String.fromCharCode(parseInt(t[e], 16));
            return n
        }()),
        za = "5.18.2",
        Va = 0,
        Ra = {
            large: 992,
            medium: 768,
            small: 576,
            xlarge: 1200,
            xsmall: 0
        };
    _ && (Pa = _.matches, _.addListener((function(e) {
        Pa = e.matches, C.next()
    })));
    var Aa, Wa, Ua = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.s = {}, t.state = {}, t._mbsc = !0, t._v = {
                    version: "5.18.2"
                }, t._uid = ++Va, t._textParamMulti = {}, t.__getText = Fa, t
            }
            return a(t, e), Object.defineProperty(t.prototype, "nativeElement", {
                get: function() {
                    return this._el
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "__getTextParam", {
                get: function() {
                    return Ia.val
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "textParam", {
                get: function() {
                    return void 0 === this._textParam && (this._textParam = this.__getText(Ia, .15)), this._safeHtml(this._textParam)
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.textParamMulti = function(e) {
                return void 0 === this._textParamMulti[e] && (this._textParamMulti[e] = this.__getText(Ia, .15)), this._safeHtml(this._textParamMulti[e])
            }, t.prototype.destroy = function() {}, t.prototype._hook = function(e, t) {
                var n = this.s;
                if (t.inst = this, t.type = e, this._emit(e, t), n[e]) return n[e](t, this)
            }, t.prototype.__init = function() {
                var e = this;
                if (this.constructor.defaults) {
                    this._optChange = C.subscribe((function() {
                        e.forceUpdate()
                    }));
                    var t = this.props.modules;
                    if (t)
                        for (var n = 0, a = t; n < a.length; n++) {
                            var s = a[n];
                            s.init && s.init(this)
                        }
                }
                this._hook("onInit", {})
            }, t.prototype.__destroy = function() {
                this._optChange !== ie && C.unsubscribe(this._optChange), this._hook("onDestroy", {})
            }, t.prototype._render = function(e, t) {}, t.prototype._willUpdate = function() {
                this._merge(), this._render(this.s, this.state)
            }, t.prototype._resp = function(e) {
                var t, n = e.responsive,
                    a = -1,
                    s = this.state.width;
                if (s === ie && (s = vt ? vt.innerWidth : 375), n && s)
                    for (var i in n)
                        if (n.hasOwnProperty(i)) {
                            var r = n[i],
                                o = r.breakpoint || Ra[i];
                            s >= o && o > a && (t = r, a = o)
                        }
                return t
            }, t.prototype._merge = function() {
                var e, t, n, a = this.constructor,
                    i = a.defaults,
                    o = this._opt || {},
                    l = {};
                if (this._prevS = this.s || {}, i) {
                    for (var c in this.props) this.props[c] !== ie && (l[c] = this.props[c]);
                    var h = l.locale || o.locale || b.locale || {},
                        d = l.calendarSystem || h.calendarSystem || o.calendarSystem || b.calendarSystem,
                        m = l.theme || o.theme || b.theme,
                        _ = l.themeVariant || o.themeVariant || b.themeVariant;
                    "auto" !== m && m || (m = D.theme), "dark" !== _ && (!Pa || "auto" !== _ && _) || !T[m + "-dark"] || (m += "-dark"), l.theme = m;
                    var p = (n = T[m]) && T[m][a._name];
                    t = s({}, i, p, h, b, o, d, l);
                    var v = this._resp(t);
                    this._respProps = v, v && (t = s({}, t, v))
                } else t = s({}, this.props), n = T[t.theme];
                e = n && n.baseTheme, t.baseTheme = e, this.s = t, this._className = t.cssClass || t.class || t.className || "", this._rtl = " mbsc-" + (t.rtl ? "rtl" : "ltr"), this._theme = " mbsc-" + t.theme + (e ? " mbsc-" + e : ""), this._touchUi = "auto" === t.touchUi || t.touchUi === ie ? u : t.touchUi, this._hb = "ios" !== r || "ios" !== t.theme && "ios" !== e ? "" : " mbsc-hb"
            }, t.defaults = ie, t._name = "", t
        }(Vn),
        Ba = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return a(t, e), t.prototype._template = function(e) {
                return Ln("span", {
                    onClick: e.onClick,
                    className: this._cssClass,
                    dangerouslySetInnerHTML: this._svg
                }, this._hasChildren && e.name)
            }, t
        }(function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return a(t, e), t.prototype._render = function(e) {
                this._hasChildren = !me(e.name), this._cssClass = this._className + " mbsc-icon" + this._theme + (e.name && !this._hasChildren ? -1 !== e.name.indexOf(" ") ? " " + e.name : " mbsc-font-icon mbsc-icon-" + e.name : ""), this._svg = e.svg ? this._safeHtml(e.svg) : ie
            }, t
        }(Ua)),
        ja = "animationstart",
        Ka = "blur",
        Ja = "change",
        Xa = "click",
        Ga = "contextmenu",
        qa = "dblclick",
        Za = "focus",
        $a = "focusin",
        Qa = "input",
        es = "keydown",
        ts = "mousedown",
        ns = "mousemove",
        as = "mouseup",
        ss = "mouseenter",
        is = "mouseleave",
        rs = "mousewheel",
        os = "resize",
        ls = "scroll",
        cs = "touchstart",
        hs = "touchmove",
        ds = "touchend",
        us = "touchcancel",
        ms = "wheel",
        _s = 0;

    function ps(e, t, n) {
        var a = (n ? "page" : "client") + t;
        return e.targetTouches && e.targetTouches[0] ? e.targetTouches[0][a] : e.changedTouches && e.changedTouches[0] ? e.changedTouches[0][a] : e[a]
    }

    function vs(e, t) {
        if (!t.mbscClick) {
            var n = (e.originalEvent || e).changedTouches[0],
                a = document.createEvent("MouseEvents");
            a.initMouseEvent("click", !0, !0, window, 1, n.screenX, n.screenY, n.clientX, n.clientY, !1, !1, !1, !1, 0, null), a.isMbscTap = !0, a.isIonicTap = !0, Aa = !0, t.mbscChange = !0, t.mbscClick = !0, t.dispatchEvent(a), Aa = !1, _s++, setTimeout((function() {
                _s--
            }), 500), setTimeout((function() {
                delete t.mbscClick
            }))
        }
    }

    function fs(e) {
        !_s || Aa || e.isMbscTap || "TEXTAREA" === e.target.nodeName && e.type === ts || (e.stopPropagation(), e.preventDefault())
    }

    function gs(e) {
        Rt(e.target).__mbscFocusVisible = !1
    }

    function ys(e) {
        Rt(e.target).__mbscFocusVisible = !0
    }

    function bs(e) {
        Pt(e.target).__mbscMoveObs.next(e)
    }

    function xs(e) {
        e && setTimeout((function() {
            e.style.opacity = "0", e.style.transition = "opacity linear .4s", setTimeout((function() {
                e && e.parentNode && e.parentNode.removeChild(e)
            }), 400)
        }), 200)
    }

    function Ts(e, t) {
        var n, a, s, i, r, o, l, c, d, u, m, _, p, v, f, g, y = {},
            b = Rt(e),
            x = Pt(e);

        function T(e) {
            if (e.type === cs) Wa = !0;
            else if (Wa) return e.type === ts && (Wa = !1), !0;
            return !1
        }

        function D() {
            l && (xs(i), i = function(e, t, n) {
                var a = e.getBoundingClientRect(),
                    s = t - a.left,
                    i = n - a.top,
                    r = Math.max(s, e.offsetWidth - s),
                    o = Math.max(i, e.offsetHeight - i),
                    l = 2 * Math.sqrt(Math.pow(r, 2) + Math.pow(o, 2)),
                    c = pt.createElement("span");
                c.classList.add("mbsc-ripple");
                var h = c.style;
                return h.backgroundColor = getComputedStyle(e).color, h.width = l + "px", h.height = l + "px", h.top = n - a.top - l / 2 + "px", h.left = t - a.left - l / 2 + "px", e.appendChild(c), setTimeout((function() {
                    h.opacity = ".2", h.transform = "scale(1)", h.transition = "opacity linear .1s, transform cubic-bezier(0, 0, 0.2, 1) .4s"
                }), 30), c
            }(e, _, p)), t.onPress(), n = !0
        }

        function C(e, i) {
            a = !1, xs(e), clearTimeout(s), s = setTimeout((function() {
                n && (t.onRelease(), n = !1)
            }), i)
        }

        function S(e) {
            if (!T(e) && (e.type !== ts || 0 === e.button && !e.ctrlKey)) {
                if (u = ps(e, "X"), m = ps(e, "Y"), _ = u, p = m, n = !1, a = !1, c = !1, g = !0, y.moved = c, y.startX = u, y.startY = m, y.endX = _, y.endY = p, y.deltaX = 0, y.deltaY = 0, y.domEvent = e, y.isTouch = Wa, xs(i), t.onStart) {
                    var r = t.onStart(y);
                    l = r && r.ripple
                }
                t.onPress && (a = !0, clearTimeout(s), s = setTimeout(D, 50)), e.type === ts && (Ot(x, ns, w), Ot(x, as, k)), Ot(x, Ga, Y)
            }
        }

        function w(e) {
            g && (_ = ps(e, "X"), p = ps(e, "Y"), v = _ - u, f = p - m, !c && (Math.abs(v) > 9 || Math.abs(f) > 9) && (c = !0, C(i)), y.moved = c, y.endX = _, y.endY = p, y.deltaX = v, y.deltaY = f, y.domEvent = e, y.isTouch = e.type === hs, t.onMove && t.onMove(y))
        }

        function k(e) {
            g && (a && !n && (clearTimeout(s), D()), y.domEvent = e, y.isTouch = e.type === ds, t.onEnd && t.onEnd(y), C(i, 75), g = !1, e.type === ds && t.click && Et && !c && vs(e, e.target), e.type === as && (Yt(x, ns, w), Yt(x, as, k)), Yt(x, Ga, Y))
        }

        function M(e) {
            T(e) || (o = !0, t.onHoverIn(e))
        }

        function E(e) {
            o && t.onHoverOut(e), o = !1
        }

        function N(e) {
            t.onKeyDown(e)
        }

        function I(e) {
            (t.keepFocus || b.__mbscFocusVisible) && (r = !0, t.onFocus(e))
        }

        function L(e) {
            r && t.onBlur(e), r = !1
        }

        function H(e) {
            t.onChange(e)
        }

        function O(e) {
            y.domEvent = e, Wa || t.onDoubleClick(y)
        }

        function Y(e) {
            Wa && e.preventDefault()
        }
        if (Ot(e, cs, S, {
                passive: !0
            }), Ot(e, ts, S), Ot(e, ds, k), Ot(e, us, k), x) {
            var P = x.__mbscMoveCount || 0,
                F = x.__mbscMoveObs || new h;
            0 === P && Ot(x, hs, bs, {
                passive: !1
            }), x.__mbscMoveObs = F, x.__mbscMoveCount = ++P, d = F.subscribe(w)
        }
        if (t.onChange && Ot(e, Ja, H), t.onHoverIn && Ot(e, ss, M), t.onHoverOut && Ot(e, is, E), t.onKeyDown && Ot(e, es, N), t.onFocus && b && (Ot(e, Za, I), !t.keepFocus)) {
            var z = b.__mbscFocusCount || 0;
            0 === z && (Ot(b, ts, gs, !0), Ot(b, es, ys, !0)), b.__mbscFocusCount = ++z
        }
        return t.onBlur && Ot(e, Ka, L), t.onDoubleClick && Ot(e, qa, O),
            function() {
                if (clearTimeout(s), t.onFocus && b && !t.keepFocus) {
                    var n = b.__mbscFocusCount || 0;
                    b.__mbscFocusCount = --n, n <= 0 && (Yt(b, ts, gs), Yt(b, es, ys))
                }
                if (x) {
                    var a = x.__mbscMoveCount || 0;
                    x.__mbscMoveCount = --a, x.__mbscMoveObs && x.__mbscMoveObs.unsubscribe(d), a <= 0 && (delete x.__mbscMoveCount, delete x.__mbscMoveObs, Yt(x, hs, bs, {
                        passive: !1
                    }))
                }
                Yt(e, ts, S, {
                    passive: !0
                }), Yt(e, ds, k), Yt(e, us, k), Yt(x, ns, w), Yt(x, as, k), Yt(x, Ga, Y), Yt(e, Ja, H), Yt(e, ss, M), Yt(e, is, E), Yt(e, es, N), Yt(e, cs, S), Yt(e, Za, I), Yt(e, Ka, L), Yt(e, qa, O)
            }
    }
    m && (["mousedown", ss, ts, as, Xa].forEach((function(e) {
        pt.addEventListener(e, fs, !0)
    })), "android" === r && l < 5 && pt.addEventListener(Ja, (function(e) {
        var t = e.target;
        _s && "checkbox" === t.type && !t.mbscChange && (e.stopPropagation(), e.preventDefault()), delete t.mbscChange
    }), !0));
    var Ds, Cs = new h,
        Ss = 0;

    function ws() {
        clearTimeout(Ds), Ds = setTimeout((function() {
            Cs.next()
        }), 100)
    }

    function ks(e) {
        try {
            return Kt(e, "*:-webkit-autofill")
        } catch (e) {
            return !1
        }
    }
    var Ms = function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return a(t, e), Object.defineProperty(t.prototype, "value", {
            get: function() {
                return this._el && this._el.value
            },
            set: function(e) {
                this._el.value = e, this._checkFloating(), "textarea" === this._tag && this._sizeTextArea()
            },
            enumerable: !0,
            configurable: !0
        }), t.prototype._template = function(e, t) {
            var n = this,
                a = this.props,
                r = a.children,
                o = a.dropdown;
            a.dropdownIcon, a.endIcon, a.endIconSrc, a.endIconSvg, a.error;
            var l = a.errorMessage,
                c = a.hasChildren;
            a.hideIcon, a.hideIconSvg, a.inputClass, a.inputStyle, a.label, a.labelStyle, a.notch, a.passwordToggle, a.pickerMap, a.pickerValue, a.ripple, a.rows, a.rtl, a.showIcon, a.showIconSvg, a.startIcon, a.startIconSrc, a.startIconSvg;
            var h = a.tags;
            a.theme, a.themeVariant;
            var d = a.type,
                u = i(a, ["children", "dropdown", "dropdownIcon", "endIcon", "endIconSrc", "endIconSvg", "error", "errorMessage", "hasChildren", "hideIcon", "hideIconSvg", "inputClass", "inputStyle", "label", "labelStyle", "notch", "passwordToggle", "pickerMap", "pickerValue", "ripple", "rows", "rtl", "showIcon", "showIconSvg", "startIcon", "startIconSrc", "startIconSvg", "tags", "theme", "themeVariant", "type"]),
                m = e.label;
            return Ln("label", {
                className: this._cssClass,
                onMouseDown: this._onMouseDown
            }, (m || c) && Ln("span", {
                className: this._labelClass
            }, c ? "" : m), Ln("span", {
                className: this._innerClass
            }, "input" === this._tag && Ln("input", s({}, u, {
                ref: this._setEl,
                className: this._nativeElmClass + (e.tags ? " mbsc-textfield-hidden" : ""),
                disabled: this._disabled,
                type: e.passwordToggle ? this._hidePass ? "password" : "text" : d
            })), "file" === d && Ln("input", {
                className: this._dummyElmClass,
                disabled: this._disabled,
                placeholder: e.placeholder,
                readOnly: !0,
                type: "text",
                value: t.files || ""
            }), "select" === this._tag && Ln("select", s({}, u, {
                ref: this._setEl,
                className: "mbsc-select" + this._nativeElmClass,
                disabled: this._disabled
            }), r), "textarea" === this._tag && Ln("textarea", s({}, u, {
                ref: this._setEl,
                className: this._nativeElmClass,
                disabled: this._disabled
            })), h && Ln("span", {
                className: "mbsc-textfield-tags" + this._nativeElmClass
            }, this._tagsArray.length ? this._tagsArray.map((function(t, a) {
                return t && Ln("span", {
                    key: a,
                    className: "mbsc-textfield-tag" + n._theme + n._rtl
                }, Ln("span", {
                    className: "mbsc-textfield-tag-text" + n._theme
                }, t), Ln(Ba, {
                    className: "mbsc-textfield-tag-clear",
                    onClick: function(e) {
                        return n._onTagClear(e, a)
                    },
                    svg: e.clearIcon,
                    theme: e.theme
                }))
            })) : Ln("span", {
                className: "mbsc-textfield-tags-placeholder" + this._theme
            }, e.placeholder)), ("select" === this._tag || o) && Ln(Ba, {
                className: this._selectIconClass,
                svg: e.dropdownIcon,
                theme: e.theme
            }), this._hasStartIcon && Ln(Ba, {
                className: this._startIconClass,
                name: e.startIcon,
                svg: e.startIconSvg,
                theme: e.theme
            }), this._hasEndIcon && !e.passwordToggle && Ln(Ba, {
                className: this._endIconClass,
                name: e.endIcon,
                svg: e.endIconSvg,
                theme: e.theme
            }), e.passwordToggle && Ln(Ba, {
                onClick: this._onClick,
                className: this._passIconClass,
                name: this._hidePass ? e.showIcon : e.hideIcon,
                svg: this._hidePass ? e.showIconSvg : e.hideIconSvg,
                theme: e.theme
            }), this._hasError && Ln("span", {
                className: this._errorClass
            }, l), e.notch && "outline" === e.inputStyle && Ln("fieldset", {
                "aria-hidden": "true",
                className: this._fieldSetClass
            }, Ln("legend", {
                className: this._legendClass
            }, m && "inline" !== e.labelStyle ? m : "&nbsp;")), e.ripple && "outline" !== e.inputStyle && Ln("span", {
                className: this._rippleClass
            })))
        }, t
    }(function(e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t._tag = "input", t._onClick = function() {
                t._hidePass = !t._hidePass
            }, t._onMouseDown = function(e) {
                t.s.tags && (t._preventFocus = !0)
            }, t._onTagClear = function(e, n) {
                if (e.stopPropagation(), e.preventDefault(), !t.s.disabled) {
                    var a = t.s.pickerValue.slice();
                    a.splice(n, 1), Xt(t._el, Ja, a)
                }
            }, t._sizeTextArea = function() {
                var e, n, a, s = t._el,
                    i = t.s.rows;
                s.offsetHeight && (s.style.height = "", a = s.scrollHeight - s.offsetHeight, e = s.offsetHeight + (a > 0 ? a : 0), (n = Math.round(e / 24)) > i ? (e = 24 * i + (e - 24 * n), s.style.overflow = "auto") : s.style.overflow = "", e && (s.style.height = e + "px"))
            }, t._onAutoFill = function() {
                "floating" === t.s.labelStyle && ks(t._el) && t.setState({
                    isFloatingActive: !0
                })
            }, t
        }
        return a(t, e), t.prototype._checkFloating = function() {
            var e = this,
                t = this._el,
                n = this.s,
                a = ks(t),
                s = this.state.hasFocus || a || !_e(this.value);
            if (t && "floating" === n.labelStyle) {
                if ("select" === this._tag) {
                    var i = t,
                        r = i.options[0];
                    s = !!(s || i.multiple || i.value || i.selectedIndex > -1 && r && r.label)
                } else if (this.value === ie) {
                    s = !(!s && !t.value)
                }
                this._valueChecked = !0, Me(this, (function() {
                    e.setState({
                        isFloatingActive: s
                    })
                }))
            }
        }, t.prototype._mounted = function() {
            var e, t = this,
                n = this.s,
                a = this._el;
            Ot(a, ja, this._onAutoFill), "textarea" === this._tag && (Ot(a, Qa, this._sizeTextArea), this._unsubscribe = (e = this._sizeTextArea, Ss || Ot(vt, os, ws), Ss++, Cs.subscribe(e))), this._unlisten = Ts(a, {
                keepFocus: !0,
                onBlur: function() {
                    t.setState({
                        hasFocus: !1,
                        isFloatingActive: !!a.value
                    })
                },
                onChange: function(e) {
                    if ("file" === n.type) {
                        for (var a = [], s = 0, i = e.target.files; s < i.length; s++) {
                            var r = i[s];
                            a.push(r.name)
                        }
                        t.setState({
                            files: a.join(", ")
                        })
                    }
                    n.tags && n.value === ie && n.defaultValue === ie && t.setState({
                        value: e.target.value
                    }), t._checkFloating(), t._emit("onChange", e)
                },
                onFocus: function() {
                    t._preventFocus || t.setState({
                        hasFocus: !0,
                        isFloatingActive: !0
                    }), t._preventFocus = !1
                },
                onHoverIn: function() {
                    t._disabled || t.setState({
                        hasHover: !0
                    })
                },
                onHoverOut: function() {
                    t.setState({
                        hasHover: !1
                    })
                }
            })
        }, t.prototype._render = function(e, t) {
            var n = !(!e.endIconSvg && !e.endIcon),
                a = e.pickerValue,
                s = !(!e.startIconSvg && !e.startIcon),
                i = e.label !== ie || e.hasChildren,
                r = e.error,
                o = e.rtl ? "right" : "left",
                l = e.rtl ? "left" : "right",
                c = e.inputStyle,
                h = e.labelStyle,
                d = "floating" === h,
                u = !(!d || !i || !t.isFloatingActive && _e(e.value)),
                m = e.disabled === ie ? t.disabled : e.disabled,
                _ = this._prevS,
                p = e.value !== ie ? e.value : t.value !== ie ? t.value : e.defaultValue,
                v = this._theme + this._rtl + (r ? " mbsc-error" : "") + (m ? " mbsc-disabled" : "") + (t.hasHover ? " mbsc-hover" : "") + (t.hasFocus && !m ? " mbsc-focus" : "");
            "file" !== e.type || n || (e.endIconSvg = '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/></svg>', n = !0), e.tags && (_e(a) && (a = []), he(a) || (a = [a]), this._tagsArray = e.pickerMap ? a.map((function(t) {
                return e.pickerMap.get(t)
            })) : _e(p) ? [] : p.split(", ")), e.passwordToggle && (n = !0, this._passIconClass = v + " mbsc-toggle-icon mbsc-textfield-icon mbsc-textfield-icon-" + c + " mbsc-textfield-icon-" + l + " mbsc-textfield-icon-" + c + "-" + l + (i ? " mbsc-textfield-icon-" + h : ""), this._hidePass = this._hidePass === ie ? "password" === e.type : this._hidePass), this._hasStartIcon = s, this._hasEndIcon = n, this._hasError = r, this._disabled = m, this._cssClass = this._className + this._hb + v + " mbsc-form-control-wrapper mbsc-textfield-wrapper mbsc-font mbsc-textfield-wrapper-" + c + (m ? " mbsc-disabled" : "") + (i ? " mbsc-textfield-wrapper-" + h : "") + (s ? " mbsc-textfield-wrapper-has-icon-" + o + " " : "") + (n ? " mbsc-textfield-wrapper-has-icon-" + l + " " : ""), i && (this._labelClass = v + " mbsc-label mbsc-label-" + h + " mbsc-label-" + c + "-" + h + (s ? " mbsc-label-" + c + "-" + h + "-has-icon-" + o + " " : "") + (n ? " mbsc-label-" + c + "-" + h + "-has-icon-" + l + " " : "") + (d && this._animateFloating ? " mbsc-label-floating-animate" : "") + (u ? " mbsc-label-floating-active" : "")), this._innerClass = v + " mbsc-textfield-inner mbsc-textfield-inner-" + c + (i ? " mbsc-textfield-inner-" + h : ""), s && (this._startIconClass = v + " mbsc-textfield-icon mbsc-textfield-icon-" + c + " mbsc-textfield-icon-" + o + " mbsc-textfield-icon-" + c + "-" + o + (i ? " mbsc-textfield-icon-" + h : "")), n && (this._endIconClass = v + " mbsc-textfield-icon mbsc-textfield-icon-" + c + " mbsc-textfield-icon-" + l + " mbsc-textfield-icon-" + c + "-" + l + (i ? " mbsc-textfield-icon-" + h : "")), this._nativeElmClass = v + " " + (e.inputClass || "") + " mbsc-textfield mbsc-textfield-" + c + (e.dropdown ? " mbsc-select" : "") + (i ? " mbsc-textfield-" + h + " mbsc-textfield-" + c + "-" + h : "") + (u ? " mbsc-textfield-floating-active" : "") + (s ? " mbsc-textfield-has-icon-" + o + " mbsc-textfield-" + c + "-has-icon-" + o + (i ? " mbsc-textfield-" + c + "-" + h + "-has-icon-" + o : "") : "") + (n ? " mbsc-textfield-has-icon-" + l + " mbsc-textfield-" + c + "-has-icon-" + l + (i ? " mbsc-textfield-" + c + "-" + h + "-has-icon-" + l : "") : ""), ("select" === this._tag || e.dropdown) && (this._selectIconClass = "mbsc-select-icon mbsc-select-icon-" + c + this._rtl + this._theme + (i ? " mbsc-select-icon-" + h : "") + (s ? " mbsc-select-icon-" + o : "") + (n ? " mbsc-select-icon-" + l : "")), ("textarea" === this._tag || e.tags) && (this._cssClass += " mbsc-textarea-wrapper", this._innerClass += " mbsc-textarea-inner", this._nativeElmClass += " mbsc-textarea", "textarea" !== this._tag || p === this._prevValue && e.inputStyle === _.inputStyle && e.labelStyle === _.labelStyle && e.rows === _.rows && e.theme === _.theme || (this._shouldSize = !0), this._prevValue = p), e.tags && (this._innerClass += " mbsc-textfield-tags-inner"), "file" === e.type && (this._dummyElmClass = this._nativeElmClass, this._nativeElmClass += " mbsc-textfield-file"), this._errorClass = this._theme + this._rtl + " mbsc-error-message mbsc-error-message-" + c + (i ? " mbsc-error-message-" + h : "") + (s ? " mbsc-error-message-has-icon-" + o : "") + (n ? " mbsc-error-message-has-icon-" + l : ""), e.notch && "outline" === c && (this._fieldSetClass = "mbsc-textfield-fieldset" + v + (s ? " mbsc-textfield-fieldset-has-icon-" + o : "") + (n ? " mbsc-textfield-fieldset-has-icon-" + l : ""), this._legendClass = "mbsc-textfield-legend" + this._theme + (u || i && "stacked" === h ? " mbsc-textfield-legend-active" : "")), e.ripple && "outline" !== e.inputStyle && (this._rippleClass = "mbsc-textfield-ripple" + this._theme + (r ? " mbsc-error" : "") + (t.hasFocus ? " mbsc-textfield-ripple-active" : "")), this._valueChecked && (this._animateFloating = !0)
        }, t.prototype._updated = function() {
            var e = this;
            this._shouldSize && (this._shouldSize = !1, Me(this, (function() {
                e._sizeTextArea()
            }))), this._checkFloating()
        }, t.prototype._destroy = function() {
            Yt(this._el, ja, this._onAutoFill), Yt(this._el, Qa, this._sizeTextArea),
                function(e) {
                    Ss--, Cs.unsubscribe(e), Ss || Yt(vt, os, ws)
                }(this._unsubscribe), this._unlisten()
        }, t.defaults = {
            dropdown: !1,
            dropdownIcon: E,
            hideIcon: "eye-blocked",
            inputStyle: "underline",
            labelStyle: "stacked",
            placeholder: "",
            ripple: !1,
            rows: 6,
            showIcon: "eye",
            type: "text"
        }, t._name = "Input", t
    }(Ua));

    function Es(e) {
        return this.getChildContext = function() {
            return e.context
        }, e.children
    }

    function Ns(e) {
        var t = this,
            n = e._container;
        t.componentWillUnmount = function() {
            kn(null, t._temp), t._temp = null, t._container = null
        }, t._container && t._container !== n && t.componentWillUnmount(), e._vnode ? (t._temp || (t._container = n, t._temp = {
            nodeType: 1,
            parentNode: n,
            childNodes: [],
            appendChild: function(e) {
                this.childNodes.push(e), t._container.appendChild(e)
            },
            insertBefore: function(e, n) {
                this.childNodes.push(e), t._container.appendChild(e)
            },
            removeChild: function(e) {
                this.childNodes.splice(this.childNodes.indexOf(e) >>> 1, 1), t._container.removeChild(e)
            }
        }), kn(nn(Es, {
            context: t.context
        }, e._vnode), t._temp)) : t._temp && t.componentWillUnmount()
    }

    function Is(e, t) {
        return nn(Ns, {
            _vnode: e,
            _container: t
        })
    }
    var Ls, Hs, Os = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return a(t, e), t.prototype.render = function() {
                var e = this.props.context;
                return e ? Is(this.props.children, e) : null
            }, t
        }(rn),
        Ys = 13,
        Ps = 32,
        Fs = 33,
        zs = 34,
        Vs = 35,
        Rs = 36,
        As = 37,
        Ws = 38,
        Us = 39,
        Bs = 40,
        js = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return a(t, e), t.prototype._template = function(e) {
                var t = this.props,
                    n = t.ariaLabel,
                    a = t.children;
                t.className, t.color;
                var r = t.endIcon;
                t.endIconSrc;
                var o = t.endIconSvg;
                t.hasChildren;
                var l = t.icon;
                t.iconSrc;
                var c = t.iconSvg;
                t.ripple, t.rtl;
                var h = t.role,
                    d = t.startIcon;
                t.startIconSrc;
                var u = t.startIconSvg;
                t.tag, t.tabIndex, t.theme, t.themeVariant, t.variant;
                var m = i(t, ["ariaLabel", "children", "className", "color", "endIcon", "endIconSrc", "endIconSvg", "hasChildren", "icon", "iconSrc", "iconSvg", "ripple", "rtl", "role", "startIcon", "startIconSrc", "startIconSvg", "tag", "tabIndex", "theme", "themeVariant", "variant"]),
                    _ = s({
                        "aria-label": n,
                        className: this._cssClass,
                        ref: this._setEl
                    }, m),
                    p = Ln(sn, null, this._isIconOnly && Ln(Ba, {
                        className: this._iconClass,
                        name: l,
                        svg: c,
                        theme: e.theme
                    }), this._hasStartIcon && Ln(Ba, {
                        className: this._startIconClass,
                        name: d,
                        svg: u,
                        theme: e.theme
                    }), a, this._hasEndIcon && Ln(Ba, {
                        className: this._endIconClass,
                        name: r,
                        svg: o,
                        theme: e.theme
                    }));
                return "span" === e.tag ? Ln("span", s({
                    role: h,
                    "aria-disabled": e.disabled,
                    tabIndex: this._tabIndex
                }, _), p) : "a" === e.tag ? Ln("a", s({
                    "aria-disabled": e.disabled,
                    tabIndex: this._tabIndex
                }, _), p) : Ln("button", s({
                    role: h,
                    tabIndex: this._tabIndex
                }, _), p)
            }, t
        }(function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return a(t, e), t.prototype._mounted = function() {
                var e = this;
                this._unlisten = Ts(this._el, {
                    click: !0,
                    onBlur: function() {
                        e.setState({
                            hasFocus: !1
                        })
                    },
                    onFocus: function() {
                        e.setState({
                            hasFocus: !0
                        })
                    },
                    onHoverIn: function() {
                        e.s.disabled || e.setState({
                            hasHover: !0
                        })
                    },
                    onHoverOut: function() {
                        e.setState({
                            hasHover: !1
                        })
                    },
                    onKeyDown: function(t) {
                        switch (t.keyCode) {
                            case Ys:
                            case Ps:
                                e._el.click(), t.preventDefault()
                        }
                    },
                    onPress: function() {
                        e.setState({
                            isActive: !0
                        })
                    },
                    onRelease: function() {
                        e.setState({
                            isActive: !1
                        })
                    },
                    onStart: function() {
                        return {
                            ripple: e.s.ripple && !e.s.disabled
                        }
                    }
                })
            }, t.prototype._render = function(e, t) {
                var n = this,
                    a = e.disabled;
                this._isIconOnly = !(!e.icon && !e.iconSvg), this._hasStartIcon = !(!e.startIcon && !e.startIconSvg), this._hasEndIcon = !(!e.endIcon && !e.endIconSvg), this._tabIndex = a ? ie : e.tabIndex || 0, this._cssClass = this._className + " mbsc-reset mbsc-font mbsc-button" + this._theme + this._rtl + " mbsc-button-" + e.variant + (this._isIconOnly ? " mbsc-icon-button" : "") + (a ? " mbsc-disabled" : "") + (e.color ? " mbsc-button-" + e.color : "") + (t.hasFocus && !a ? " mbsc-focus" : "") + (t.isActive && !a ? " mbsc-active" : "") + (t.hasHover && !a ? " mbsc-hover" : ""), this._iconClass = "mbsc-button-icon" + this._rtl, this._startIconClass = this._iconClass + " mbsc-button-icon-start", this._endIconClass = this._iconClass + " mbsc-button-icon-end", e.disabled && t.hasHover && setTimeout((function() {
                    n.setState({
                        hasHover: !1
                    })
                }))
            }, t.prototype._destroy = function() {
                this._unlisten()
            }, t.defaults = {
                ripple: !1,
                role: "button",
                tag: "button",
                variant: "standard"
            }, t._name = "Button", t
        }(Ua)),
        Ks = 0;

    function Js(e, t, n) {
        var a, s, i, r, o, l, c, h = 0;

        function d() {
            s.style.width = "100000px", s.style.height = "100000px", a.scrollLeft = 1e5, a.scrollTop = 1e5, l.scrollLeft = 1e5, l.scrollTop = 1e5
        }

        function u() {
            var e = +new Date;
            r = 0, c || (e - h > 200 && !a.scrollTop && !a.scrollLeft && (h = e, d()), r || (r = Ct(u)))
        }

        function m() {
            o || (o = Ct(_))
        }

        function _() {
            o = 0, d(), t()
        }
        return vt && vt.ResizeObserver ? (Ls || (Ls = new vt.ResizeObserver((function(e) {
            o || (o = Ct((function() {
                for (var t = 0, n = e; t < n.length; t++) {
                    var a = n[t];
                    a.target.__mbscResize && a.target.__mbscResize()
                }
                o = 0
            })))
        }))), Ks++, e.__mbscResize = function() {
            n ? n.run(t) : t()
        }, Ls.observe(e)) : i = pt && pt.createElement("div"), i && (i.innerHTML = '<div class="mbsc-resize"><div class="mbsc-resize-i mbsc-resize-x"></div></div><div class="mbsc-resize"><div class="mbsc-resize-i mbsc-resize-y"></div></div>', i.dir = "ltr", l = i.childNodes[1], a = i.childNodes[0], s = a.childNodes[0], e.appendChild(i), Ot(a, "scroll", m), Ot(l, "scroll", m), n ? n.runOutsideAngular((function() {
            Ct(u)
        })) : Ct(u)), {
            detach: function() {
                Ls ? (Ks--, delete e.__mbscResize, Ls.unobserve(e), Ks || (Ls = ie)) : (i && (Yt(a, "scroll", m), Yt(l, "scroll", m), e.removeChild(i), St(o), i = ie), c = !0)
            }
        }
    }
    var Xs = "input,select,textarea,button",
        Gs = 'textarea,button,input[type="button"],input[type="submit"]',
        qs = Xs + ',[tabindex="0"]',
        Zs = {
            enter: Ys,
            esc: 27,
            space: Ps
        },
        $s = m && /(iphone|ipod)/i.test(p) && l >= 7 && l < 15;

    function Qs(e, t) {
        var n = e.s,
            a = [],
            s = {
                cancel: {
                    cssClass: "mbsc-popup-button-close",
                    name: "cancel",
                    text: n.cancelText
                },
                close: {
                    cssClass: "mbsc-popup-button-close",
                    name: "close",
                    text: n.closeText
                },
                ok: {
                    cssClass: "mbsc-popup-button-primary",
                    keyCode: Ys,
                    name: "ok",
                    text: n.okText
                },
                set: {
                    cssClass: "mbsc-popup-button-primary",
                    keyCode: Ys,
                    name: "set",
                    text: n.setText
                }
            };
        if (t && t.length) return t.forEach((function(t) {
            var n = me(t) ? s[t] || {
                text: t
            } : t;
            n.handler && !me(n.handler) || (me(n.handler) && (n.name = n.handler), n.handler = function(t) {
                e._onButtonClick({
                    domEvent: t,
                    button: n
                })
            }), a.push(n)
        })), a
    }

    function ei(e, t) {
        void 0 === t && (t = 0);
        var n = e._prevModal;
        if (n && n !== e && t < 10) return n.isVisible() ? n : ei(n, t + 1)
    }
    var ti = Os,
        ni = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t._setActive = function(e) {
                    t._active = e
                }, t._setContent = function(e) {
                    t._content = e
                }, t._setLimitator = function(e) {
                    t._limitator = e
                }, t._setPopup = function(e) {
                    t._popup = e
                }, t._setWrapper = function(e) {
                    t._wrapper = e
                }, t
            }
            return a(t, e), t.prototype._template = function(e, t) {
                var n = this,
                    a = this._hb,
                    s = this._rtl,
                    i = this._theme,
                    r = e.display;
                return this._isModal ? this._isVisible ? Ln(ti, {
                    context: this._ctx
                }, Ln("div", {
                    className: "mbsc-font mbsc-popup-wrapper mbsc-popup-wrapper-" + r + i + s + " " + this._className + (e.fullScreen ? " mbsc-popup-wrapper-" + r + "-full" : "") + (this._touchUi ? "" : " mbsc-popup-pointer") + (this._round ? " mbsc-popup-round" : "") + (this._hasContext ? " mbsc-popup-wrapper-ctx" : "") + (t.isReady ? "" : " mbsc-popup-hidden"),
                    ref: this._setWrapper,
                    onKeyDown: this._onKeyDown
                }, e.showOverlay && Ln("div", {
                    className: "mbsc-popup-overlay mbsc-popup-overlay-" + r + i + (this._isClosing ? " mbsc-popup-overlay-out" : "") + (this._isOpening && t.isReady ? " mbsc-popup-overlay-in" : ""),
                    onClick: this._onOverlayClick
                }), Ln("div", {
                    className: "mbsc-popup-limits mbsc-popup-limits-" + r,
                    ref: this._setLimitator,
                    style: this._limits
                }), Ln("div", {
                    className: "mbsc-popup " + i + a + " mbsc-popup-" + r + (e.fullScreen ? "-full" : "") + (t.bubblePos && t.showArrow && "anchored" === r ? " mbsc-popup-anchored-" + t.bubblePos : "") + (this._isClosing ? " mbsc-popup-" + this._animation + "-out" : "") + (this._isOpening && t.isReady ? " mbsc-popup-" + this._animation + "-in" : ""),
                    role: "dialog",
                    "aria-modal": "true",
                    ref: this._setPopup,
                    style: this._style,
                    onClick: this._onPopupClick,
                    onAnimationEnd: this._onAnimationEnd
                }, "anchored" === r && t.showArrow && Ln("div", {
                    className: "mbsc-popup-arrow-wrapper mbsc-popup-arrow-wrapper-" + t.bubblePos + i
                }, Ln("div", {
                    className: "mbsc-popup-arrow mbsc-popup-arrow-" + t.bubblePos + i,
                    style: t.arrowPos
                })), Ln("div", {
                    className: "mbsc-popup-focus",
                    tabIndex: -1,
                    ref: this._setActive
                }), Ln("div", {
                    className: "mbsc-popup-body mbsc-popup-body-" + r + i + a + (e.fullScreen ? " mbsc-popup-body-" + r + "-full" : "") + (this._round ? " mbsc-popup-body-round" : "")
                }, this._headerText && Ln("div", {
                    className: "mbsc-popup-header mbsc-popup-header-" + r + i + a + (this._buttons ? "" : " mbsc-popup-header-no-buttons"),
                    dangerouslySetInnerHTML: this._headerText
                }), Ln("div", {
                    className: "mbsc-popup-content" + (e.contentPadding ? " mbsc-popup-padding" : ""),
                    ref: this._setContent
                }, e.children), this._buttons && Ln("div", {
                    className: "mbsc-popup-buttons mbsc-popup-buttons-" + r + i + s + a + (this._flexButtons ? " mbsc-popup-buttons-flex" : "") + (e.fullScreen ? " mbsc-popup-buttons-" + r + "-full" : "")
                }, this._buttons.map((function(t, i) {
                    return Ln(js, {
                        color: t.color,
                        className: "mbsc-popup-button mbsc-popup-button-" + r + s + a + (n._flexButtons ? " mbsc-popup-button-flex" : "") + " " + (t.cssClass || ""),
                        icon: t.icon,
                        disabled: t.disabled,
                        key: i,
                        theme: e.theme,
                        themeVariant: e.themeVariant,
                        variant: t.variant || e.buttonVariant,
                        onClick: t.handler
                    }, t.text)
                }))))))) : null : Ln(sn, null, e.children)
            }, t
        }(function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t._lastFocus = +new Date, t._onOverlayClick = function() {
                    t._isOpen && t.s.closeOnOverlayClick && !t._preventClose && t._close("overlay"), t._preventClose = !1
                }, t._onDocClick = function(e) {
                    t.s.showOverlay || e.target === t.s.focusElm || Hs !== t || t._onOverlayClick()
                }, t._onMouseDown = function(e) {
                    t.s.showOverlay || (t._target = e.target)
                }, t._onMouseUp = function(e) {
                    t._target && t._popup && t._popup.contains(t._target) && !t._popup.contains(e.target) && (t._preventClose = !0), t._target = !1
                }, t._onPopupClick = function() {
                    t.s.showOverlay || (t._preventClose = !0)
                }, t._onAnimationEnd = function(e) {
                    e.target === t._popup && (t._isClosing && (t._onClosed(), t._isClosing = !1, t.state.isReady ? t.setState({
                        isReady: !1
                    }) : t.forceUpdate()), t._isOpening && (t._onOpened(), t._isOpening = !1, t.forceUpdate()))
                }, t._onButtonClick = function(e) {
                    var n = e.domEvent,
                        a = e.button;
                    t._hook("onButtonClick", {
                        domEvent: n,
                        button: a
                    }), /cancel|close|ok|set/.test(a.name) && t._close(a.name)
                }, t._onFocus = function(e) {
                    var n = +new Date;
                    Hs === t && e.target.nodeType && t._ctx.contains(e.target) && !t._popup.contains(e.target) && n - t._lastFocus > 100 && e.target !== t.s.focusElm && (t._lastFocus = n, t._active.focus())
                }, t._onKeyDown = function(e) {
                    var n = t.s,
                        a = e.keyCode,
                        s = n.focusElm && !n.focusOnOpen ? n.focusElm : ie;
                    if ((a === Ps && !Kt(e.target, Xs) || t._lock && (a === Ws || a === Bs)) && e.preventDefault(), n.focusTrap && 9 === a) {
                        var i = t._popup.querySelectorAll(qs),
                            r = [],
                            o = -1,
                            l = 0,
                            c = -1,
                            h = ie;
                        Gt(i, (function(e) {
                            e.disabled || !e.offsetHeight && !e.offsetWidth || (r.push(e), o++, e === t._doc.activeElement && (c = o))
                        })), e.shiftKey && (l = o, o = 0), c === o ? h = s || r[l] : e.target === s && (h = r[l]), h && (h.focus(), e.preventDefault())
                    }
                }, t._onContentScroll = function(e) {
                    !t._lock || e.type === hs && "stylus" === e.touches[0].touchType || e.preventDefault()
                }, t._onScroll = function(e) {
                    var n = t.s;
                    n.closeOnScroll ? t._close("scroll") : (t._hasContext || "anchored" === n.display) && t.position()
                }, t._onWndKeyDown = function(e) {
                    var n = t.s,
                        a = e.keyCode;
                    if (Hs === t) {
                        if (t._hook("onKeyDown", {
                                keyCode: a
                            }), n.closeOnEsc && 27 === a && t._close("esc"), a === Ys && Kt(e.target, Gs) && !e.shiftKey) return;
                        if (t._buttons)
                            for (var s = 0, i = t._buttons; s < i.length; s++)
                                for (var r = i[s], o = 0, l = he(r.keyCode) ? r.keyCode : [r.keyCode]; o < l.length; o++) {
                                    var c = l[o];
                                    if (!r.disabled && c !== ie && (c === a || Zs[c] === a)) return void r.handler(e)
                                }
                    }
                }, t._onResize = function() {
                    var e = t._wrapper,
                        n = t._hasContext;
                    t._vpWidth = Math.min(e.clientWidth, n ? 1 / 0 : t._win.innerWidth), t._vpHeight = Math.min(e.clientHeight, n ? 1 / 0 : t._win.innerHeight), t._maxWidth = t._limitator.offsetWidth, t._maxHeight = t.s.maxHeight !== ie || t._vpWidth < 768 || t._vpHeight < 650 ? t._limitator.offsetHeight : 600, t._round = !1 === t.s.touchUi || t._popup.offsetWidth < t._vpWidth && t._vpWidth > t._maxWidth;
                    var a = {
                        isLarge: t._round,
                        maxPopupHeight: t._maxHeight,
                        maxPopupWidth: t._maxWidth,
                        target: t._wrapper,
                        windowHeight: t._vpHeight,
                        windowWidth: t._vpWidth
                    };
                    !1 === t._hook("onResize", a) || a.cancel || t.position()
                }, t
            }
            return a(t, e), t.prototype.open = function() {
                this._isOpen || this.setState({
                    isOpen: !0
                })
            }, t.prototype.close = function() {
                this._close()
            }, t.prototype.isVisible = function() {
                return !!this._isOpen
            }, t.prototype.position = function() {
                if (this._isOpen) {
                    var e = this.s,
                        t = this.state,
                        n = this._wrapper,
                        a = this._popup,
                        s = this._hasContext,
                        i = e.anchor,
                        r = e.anchorAlign,
                        o = e.rtl,
                        l = Vt(this._scrollCont),
                        c = zt(this._scrollCont),
                        h = this._vpWidth,
                        d = this._vpHeight,
                        u = this._maxWidth,
                        m = this._maxHeight,
                        _ = Math.min(a.offsetWidth, u),
                        p = Math.min(a.offsetHeight, m),
                        v = e.showArrow;
                    this._lock = e.scrollLock && this._content.scrollHeight <= this._content.clientHeight, s && (n.style.top = l + "px", n.style.left = c + "px");
                    var f = !1 === this._hook("onPosition", {
                        isLarge: this._round,
                        maxPopupHeight: m,
                        maxPopupWidth: u,
                        target: this._wrapper,
                        windowHeight: d,
                        windowWidth: h
                    });
                    if ("anchored" !== e.display || f) this.setState({
                        height: d,
                        isReady: !0,
                        showArrow: v,
                        width: h
                    });
                    else {
                        var g = 0,
                            y = 0,
                            b = ce(t.modalLeft || 0, 8, h - _ - 8),
                            x = t.modalTop || 8,
                            T = "bottom",
                            D = {},
                            C = v ? 16 : 4,
                            S = (n.offsetWidth - h) / 2,
                            w = (n.offsetHeight - d) / 2;
                        if (s) {
                            var k = this._ctx.getBoundingClientRect();
                            y = k.top, g = k.left
                        }
                        if (i && this._ctx.contains(i)) {
                            var M = i.getBoundingClientRect(),
                                E = M.top - y,
                                N = M.left - g,
                                I = i.offsetWidth,
                                L = i.offsetHeight;
                            if (b = ce(b = "start" === r && !o || "end" === r && o ? N : "end" === r && !o || "start" === r && o ? N + I - _ : N - (_ - I) / 2, 8, h - _ - 8), x = E + L + C, D = {
                                    left: ce(N + I / 2 - b - S, 30, _ - 30) + "px"
                                }, x + p + C > d)
                                if (E - p - C > 0) T = "top", x = E - p - C;
                                else if (!e.disableLeftRight) {
                                var H = N - _ - 8 > 0;
                                (H || N + I + _ + 8 <= h) && ((x = ce(E - (p - L) / 2, 8, d - p - 8)) + p + 8 > d && (x = Math.max(d - p - 8, 0)), D = {
                                    top: ce(E + L / 2 - x - w, 30, p - 30) + "px"
                                }, T = H ? "left" : "right", b = H ? N - _ : N + I)
                            }
                        }
                        "top" !== T && "bottom" !== T || x + p + C > d && (x = Math.max(d - p - C, 0), v = !1), this.setState({
                            arrowPos: D,
                            bubblePos: T,
                            height: d,
                            isReady: !0,
                            modalLeft: b,
                            modalTop: x,
                            showArrow: v,
                            width: h
                        })
                    }
                }
            }, t.prototype._render = function(e, t) {
                "bubble" === e.display && (e.display = "anchored");
                var n = e.animation,
                    a = e.display,
                    s = this._prevS,
                    i = "anchored" === a,
                    r = "inline" !== a,
                    o = e.fullScreen && r,
                    l = !!r && (e.isOpen === ie ? t.isOpen : e.isOpen);
                if (l && (e.windowWidth !== s.windowWidth || e.display !== s.display || e.showArrow !== s.showArrow || e.anchor !== s.anchor && "anchored" === e.display) && (this._shouldPosition = !0), this._limits = {
                        maxHeight: ye(e.maxHeight),
                        maxWidth: ye(e.maxWidth)
                    }, this._style = {
                        height: o ? "100%" : ye(e.height),
                        left: i && t.modalLeft ? t.modalLeft + "px" : "",
                        maxHeight: ye(this._maxHeight || e.maxHeight),
                        maxWidth: ye(this._maxWidth || e.maxWidth),
                        top: i && t.modalTop ? t.modalTop + "px" : "",
                        width: o ? "100%" : ye(e.width)
                    }, this._hasContext = "body" !== e.context && e.context !== ie, this._needsLock = $s && !this._hasContext && "anchored" !== a && e.scrollLock, this._isModal = r, this._flexButtons = "center" === a || !this._touchUi && !o && ("top" === a || "bottom" === a), n !== ie && !0 !== n) this._animation = me(n) ? n : "";
                else switch (a) {
                    case "bottom":
                        this._animation = "slide-up";
                        break;
                    case "top":
                        this._animation = "slide-down";
                        break;
                    default:
                        this._animation = "pop"
                }
                e.buttons ? e.buttons !== s.buttons && (this._buttons = Qs(this, e.buttons)) : this._buttons = ie, e.headerText !== s.headerText && (this._headerText = e.headerText ? this._safeHtml(e.headerText) : ie), l && !this._isOpen && this._onOpen(), !l && this._isOpen && this._onClose(), this._isOpen = l, this._isVisible = l || this._isClosing
            }, t.prototype._updated = function() {
                var e = this,
                    t = this.s;
                if (pt && (t.context !== this._prevS.context || !this._ctx) && ((n = me(t.context) ? pt.querySelector(t.context) : t.context) || (n = pt.body), n.__mbscLock = n.__mbscLock || 0, n.__mbscIOSLock = n.__mbscIOSLock || 0, n.__mbscModals = n.__mbscModals || 0, this._ctx = n, this._justOpened)) return void Me(this, (function() {
                    e.forceUpdate()
                }));
                if (this._justOpened) {
                    var n = this._ctx,
                        a = this._wrapper,
                        s = this._hasContext,
                        i = this._doc = Pt(a),
                        r = this._win = Rt(a),
                        o = i.activeElement;
                    if (!this._hasWidth && t.responsive) {
                        var l = Math.min(a.clientWidth, s ? 1 / 0 : r.innerWidth),
                            c = Math.min(a.clientHeight, s ? 1 / 0 : r.innerHeight);
                        if (this._hasWidth = !0, l !== this.state.width || c !== this.state.height) return void Me(this, (function() {
                            e.setState({
                                height: c,
                                width: l
                            })
                        }))
                    }
                    if (this._scrollCont = s ? n : r, this._observer = Js(a, this._onResize, this._zone), this._prevFocus = t.focusElm || o, n.__mbscModals++, t.focusOnOpen && o && setTimeout((function() {
                            o.blur()
                        })), this._needsLock) {
                        if (!n.__mbscIOSLock) {
                            var h = Vt(this._scrollCont),
                                d = zt(this._scrollCont);
                            n.style.left = -d + "px", n.style.top = -h + "px", n.__mbscScrollLeft = d, n.__mbscScrollTop = h, n.classList.add("mbsc-popup-open-ios"), n.parentNode.classList.add("mbsc-popup-open-ios")
                        }
                        n.__mbscIOSLock++
                    }
                    s && n.classList.add("mbsc-popup-ctx"), t.focusTrap && Ot(r, $a, this._onFocus), t.focusElm && !t.focusOnOpen && Ot(t.focusElm, es, this._onKeyDown), Ot(this._scrollCont, hs, this._onContentScroll, {
                        passive: !1
                    }), Ot(this._scrollCont, ms, this._onContentScroll, {
                        passive: !1
                    }), Ot(this._scrollCont, rs, this._onContentScroll, {
                        passive: !1
                    }), setTimeout((function() {
                        Ot(i, ts, e._onMouseDown), Ot(i, as, e._onMouseUp), Ot(i, Xa, e._onDocClick)
                    })), this._hook("onOpen", {
                        target: this._wrapper
                    })
                }
                this._shouldPosition && Me(this, (function() {
                    e._onResize()
                })), this._justOpened = !1, this._justClosed = !1, this._shouldPosition = !1
            }, t.prototype._destroy = function() {
                this._isOpen && (this._onClosed(), this._unlisten(), Hs === this && (Hs = ei(this)))
            }, t.prototype._onOpen = function() {
                var e = this;
                wt && this._animation ? (this._isOpening = !0, this._isClosing = !1) : this._onOpened(), this._justOpened = !0, this._preventClose = !1, Hs !== this && setTimeout((function() {
                    e._prevModal = Hs, Hs = e
                }))
            }, t.prototype._onClose = function() {
                var e = this;
                wt && this._animation ? (this._isClosing = !0, this._isOpening = !1) : setTimeout((function() {
                    e._onClosed(), e.setState({
                        isReady: !1
                    })
                })), this._hasWidth = !1, this._unlisten()
            }, t.prototype._onOpened = function() {
                var e = this.s;
                if (e.focusOnOpen) {
                    var t = e.activeElm,
                        n = t ? me(t) ? this._popup.querySelector(t) || this._active : t : this._active;
                    n && n.focus && n.focus()
                }
                Ot(this._win, es, this._onWndKeyDown), Ot(this._scrollCont, ls, this._onScroll)
            }, t.prototype._onClosed = function() {
                var e = this,
                    t = this._ctx,
                    n = this._prevFocus && this._prevFocus.focus && this.s.focusOnClose;
                t.mbscModals--, this._justClosed = !0, this._needsLock && (t.__mbscIOSLock--, t.__mbscIOSLock || (t.classList.remove("mbsc-popup-open-ios"), t.parentNode.classList.remove("mbsc-popup-open-ios"), t.style.left = "", t.style.top = "", function(e, t) {
                    e.scrollTo ? e.scrollTo(t, e.scrollY) : e.scrollLeft = t
                }(this._scrollCont, t.__mbscScrollLeft), function(e, t) {
                    e.scrollTo ? e.scrollTo(e.scrollX, t) : e.scrollTop = t
                }(this._scrollCont, t.__mbscScrollTop))), this._hasContext && !t.mbscModals && t.classList.remove("mbsc-popup-ctx"), this._hook("onClosed", {
                    focus: n
                }), n && this._prevFocus.focus(), setTimeout((function() {
                    Hs === e && (Hs = ei(e))
                }))
            }, t.prototype._unlisten = function() {
                Yt(this._win, es, this._onWndKeyDown), Yt(this._scrollCont, ls, this._onScroll), Yt(this._scrollCont, hs, this._onContentScroll, {
                    passive: !1
                }), Yt(this._scrollCont, ms, this._onContentScroll, {
                    passive: !1
                }), Yt(this._scrollCont, rs, this._onContentScroll, {
                    passive: !1
                }), Yt(this._doc, ts, this._onMouseDown), Yt(this._doc, as, this._onMouseUp), Yt(this._doc, Xa, this._onDocClick), this.s.focusTrap && Yt(this._win, $a, this._onFocus), this.s.focusElm && Yt(this.s.focusElm, es, this._onKeyDown), this._observer && (this._observer.detach(), this._observer = null)
            }, t.prototype._close = function(e) {
                this._isOpen && (this.s.isOpen === ie && this.setState({
                    isOpen: !1
                }), this._hook("onClose", {
                    source: e
                }))
            }, t.defaults = {
                buttonVariant: "flat",
                cancelText: "Cancel",
                closeOnEsc: !0,
                closeOnOverlayClick: !0,
                closeText: "Close",
                contentPadding: !0,
                display: "center",
                focusOnClose: !0,
                focusOnOpen: !0,
                focusTrap: !0,
                maxWidth: 600,
                okText: "Ok",
                scrollLock: !0,
                setText: "Set",
                showArrow: !0,
                showOverlay: !0
            }, t
        }(Ua));

    function ai(e, t, n) {
        var a = t.inputComponent,
            i = s({
                defaultValue: e._value && e._valueText || "",
                placeholder: t.placeholder,
                ref: e._setInput
            }, t.inputProps);
        t.inputComponent || (a = Ms, i = s({
            "aria-expanded": !!e._isOpen,
            "aria-haspopup": "dialog",
            disabled: t.disabled,
            dropdown: t.dropdown,
            endIcon: t.endIcon,
            endIconSrc: t.endIconSrc,
            endIconSvg: t.endIconSvg,
            error: t.error,
            errorMessage: t.errorMessage,
            inputStyle: t.inputStyle,
            label: t.label,
            labelStyle: t.labelStyle,
            name: t.name,
            pickerMap: t.valueMap,
            pickerValue: e._value,
            placeholder: t.placeholder,
            rtl: t.rtl,
            startIcon: t.startIcon,
            startIconSrc: t.startIconSrc,
            startIconSvg: t.startIconSvg,
            tags: t.tagInput === ie ? t.selectMultiple : t.tagInput,
            theme: t.theme,
            themeVariant: t.themeVariant
        }, i));
        var r = Ln(a, i);
        return Ln(sn, null, e._showInput && r, Ln(ni, {
            activeElm: t.activeElm,
            anchor: e._anchor,
            anchorAlign: e._anchorAlign,
            animation: t.animation,
            buttons: e._buttons,
            cancelText: t.cancelText,
            closeOnEsc: t.closeOnEsc,
            closeOnOverlayClick: t.closeOnOverlayClick,
            closeOnScroll: t.closeOnScroll,
            closeText: t.closeText,
            contentPadding: !1,
            context: t.context,
            cssClass: e._cssClass,
            disableLeftRight: !0,
            display: t.display,
            focusElm: e._focusElm,
            focusOnClose: t.focusOnClose,
            focusOnOpen: !e._allowTyping,
            focusTrap: t.focusTrap,
            fullScreen: t.fullScreen,
            headerText: e._headerText,
            height: t.height,
            isOpen: e._isOpen,
            maxHeight: t.maxHeight,
            maxWidth: e._maxWidth,
            onClose: e._onPopupClose,
            onClosed: e._onPopupClosed,
            onKeyDown: e._onPopupKey,
            onOpen: e._onPopupOpen,
            onResize: e._onResize,
            setText: t.setText,
            showArrow: t.showArrow,
            showOverlay: !e._allowTyping && t.showOverlay,
            ref: e._setPopup,
            rtl: t.rtl,
            scrollLock: e._scrollLock,
            theme: t.theme,
            themeVariant: t.themeVariant,
            touchUi: e._touchUi,
            windowWidth: e.state.width,
            width: t.width
        }, n))
    }
    var si = 1,
        ii = "month",
        ri = "year",
        oi = "multi-year",
        li = 296,
        ci = s({}, Kn, {
            dateText: "Date",
            eventText: "event",
            eventsText: "events",
            moreEventsText: "{count} more",
            nextPageText: "Next page",
            prevPageText: "Previous page",
            showEventTooltip: !0,
            showToday: !0,
            timeText: "Time"
        });

    function hi(e, t) {
        var n = t.refDate ? pa(t.refDate) : Rn,
            a = t.showCalendar ? t.calendarType : t.eventRange,
            s = (t.showCalendar ? "year" === a ? 1 : "week" === a ? t.weeks : t.size : t.eventRangeSize) || 1,
            i = t.getDate,
            r = "week" === a ? ra(n, t) : n,
            o = t.getYear(r),
            l = t.getMonth(r),
            c = t.getDay(r);
        switch (a) {
            case "year":
                return i(o + e * s, 0, 1);
            case "week":
                return i(o, l, c + 7 * s * e);
            case "day":
                return i(o, l, c + s * e);
            default:
                return i(o, l + e * s, 1)
        }
    }

    function di(e, t) {
        var n, a = t.refDate ? pa(t.refDate) : Rn,
            s = t.getYear,
            i = t.getMonth,
            r = t.showCalendar ? t.calendarType : t.eventRange,
            o = (t.showCalendar ? "year" === r ? 1 : "week" === r ? t.weeks : t.size : t.eventRangeSize) || 1;
        switch (r) {
            case "year":
                n = s(e) - s(a);
                break;
            case "week":
                n = sa(ra(a, t), ra(e, t)) / 7;
                break;
            case "day":
                n = sa(a, e);
                break;
            case "month":
                n = i(e) - i(a) + 12 * (s(e) - s(a));
                break;
            default:
                return
        }
        return Ce(n / o)
    }

    function ui(e, t) {
        var n = t.refDate ? pa(t.refDate) : Rn;
        return Ce((t.getYear(e) - t.getYear(n)) / 12)
    }

    function mi(e, t) {
        var n = t.refDate ? pa(t.refDate) : Rn;
        return t.getYear(e) - t.getYear(n)
    }

    function _i(e, t) {
        var n = pa(e.start || e.date),
            a = pa(t.start || e.date),
            s = e.title || e.text,
            i = t.title || t.text,
            r = n ? +n * (e.allDay ? 1 : 10) : 0,
            o = a ? +a * (t.allDay ? 1 : 10) : 0;
        return r === o ? s > i ? 1 : -1 : r - o
    }

    function pi(e, t) {
        return "auto" === e ? Math.max(1, Math.min(3, Math.floor(t ? t / li : 1))) : e ? +e : 1
    }

    function vi(e, t, n, a, s, i, r, o, l, c, h, d, u, m) {
        t = t || {};
        for (var _ = {}, p = {}, v = n, f = 0, g = s, y = a; v < a;) {
            var b = ta(v),
                x = v.getDay(),
                T = e.getDay(v),
                D = h && e.getDate(e.getYear(v), e.getMonth(v) + 1, 0),
                C = l && (x === o || 1 === T && h) || +v == +n,
                S = ra(v, e),
                w = fi(t[b] || [], c),
                k = void 0,
                M = void 0,
                E = 0,
                N = 0,
                I = 0;
            C && (p = {}, y = l ? Ta(S, i) : a), r && (w = w.filter((function(e) {
                return e.allDay
            }))), -1 === s && (g = w.length + 1);
            var L = w.length,
                H = [];
            for (d && (H.push({
                    id: "count_" + +v,
                    count: L,
                    placeholder: 0 === L
                }), E = g); L && E < g;) {
                k = null;
                for (var O = 0; O < w.length; O++) p[E] === w[O] && (k = w[O], M = O);
                if (E === g - 1 && (N < L - 1 || I === L && !k) && -1 !== s) {
                    var Y = L - N,
                        P = u || "",
                        F = (Y > 1 && m || P).replace(/{count}/, Y);
                    if (Y && H.push({
                            id: "more_" + ++f,
                            more: F,
                            label: F
                        }), k) {
                        p[E] = null;
                        for (var z = 0, V = k._days; z < V.length; z++) {
                            var R = V[z],
                                A = P.replace(/{count}/, "1");
                            _[ta(R)].data[E] = {
                                id: "more_" + ++f,
                                more: A,
                                label: A
                            }
                        }
                    }
                    N++, E++
                } else if (k) M === I && I++, oa(v, pa(k.end, k.allDay ? ie : e)) && (p[E] = null), H.push({
                    id: k.occurrenceId || k.id,
                    event: k
                }), E++, N++, k._days.push(v);
                else if (I < L) {
                    var W = w[I],
                        U = W.allDay,
                        B = W.start && pa(W.start, U ? ie : e);
                    if (!B || oa(v, B) || C) {
                        var j = ea(e, U, B, W.end && pa(W.end, U ? ie : e), !0),
                            K = j && !oa(B, j),
                            J = D && D < j ? D : j,
                            X = B ? ", " + e.fromText + ": " + ga("DDDD, MMMM D, YYYY", B, e) : "",
                            G = j ? ", " + e.toText + ": " + ga("DDDD, MMMM D, YYYY", j, e) : "";
                        W.id === ie && (W.id = "mbsc_" + si++), K && (p[E] = W), W._days = [v], H.push({
                            event: W,
                            id: W.occurrenceId || W.id,
                            label: (W.title || W.text || "") + X + G,
                            lastDay: D ? Ta(D, 1) : ie,
                            multiDay: K,
                            showText: !0,
                            width: K ? 100 * Math.min(sa(v, J) + 1, sa(v, y)) : 100
                        }), E++, N++
                    }
                    I++
                } else N < L && H.push({
                    id: "ph_" + ++f,
                    placeholder: !0
                }), E++
            }
            _[b] = {
                data: H,
                events: w
            }, v = na(Ta(v, 1))
        }
        return _
    }

    function fi(e, t) {
        return e && e.slice(0).sort(t || _i)
    }
    var gi = En({}),
        yi = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return a(t, e), t.prototype.componentWillUnmount = function() {
                this._changes && this._changes.unsubscribe(this._handler)
            }, t.prototype.render = function() {
                var e = this,
                    t = this.props,
                    n = t.host,
                    a = t.component,
                    r = t.view,
                    o = i(t, ["host", "component", "view"]),
                    l = r || n && n._calendarView;
                return l && !this._changes && (this._changes = l.s.instanceService.onComponentChange, this._handler = this._changes.subscribe((function() {
                    e.forceUpdate()
                }))), Ln(gi.Consumer, null, (function(e) {
                    var t = e.instance || r || n && n._calendarView;
                    return t && Ln(a, s({
                        inst: t
                    }, o))
                }))
            }, t
        }(Nn),
        bi = function(e) {
            var t = e.inst,
                n = e.className;
            return Ln(js, {
                ariaLabel: t.s.prevPageText,
                className: "mbsc-calendar-button " + (n || ""),
                disabled: t._isPrevDisabled(),
                iconSvg: t._prevIcon,
                onClick: t.prevPage,
                theme: t.s.theme,
                themeVariant: t.s.themeVariant,
                type: "button",
                variant: "flat"
            })
        },
        xi = function(e) {
            var t = e.inst,
                n = e.className;
            return Ln(js, {
                ariaLabel: t.s.nextPageText,
                disabled: t._isNextDisabled(),
                className: "mbsc-calendar-button " + (n || ""),
                iconSvg: t._nextIcon,
                onClick: t.nextPage,
                theme: t.s.theme,
                themeVariant: t.s.themeVariant,
                type: "button",
                variant: "flat"
            })
        },
        Ti = function(e) {
            var t = e.inst,
                n = e.className;
            return Ln(js, {
                className: "mbsc-calendar-button mbsc-calendar-button-today " + (n || ""),
                onClick: t._onTodayClick,
                theme: t.s.theme,
                themeVariant: t.s.themeVariant,
                type: "button",
                variant: "flat"
            }, t.s.todayText)
        },
        Di = function(e) {
            var t = e.inst,
                n = e.className,
                a = t.s,
                s = t._theme,
                i = t._view;
            return Ln("div", {
                "aria-live": "polite",
                className: (n || "") + s
            }, t._title.map((function(e, n) {
                return (1 === t._pageNr || 0 === n || t._hasPicker || i === ii) && Ln(js, {
                    className: "mbsc-calendar-button",
                    "data-index": n,
                    onClick: t._onPickerBtnClick,
                    key: n,
                    theme: a.theme,
                    themeVariant: a.themeVariant,
                    type: "button",
                    variant: "flat"
                }, (t._hasPicker || i === ii) && (e.title ? Ln("span", {
                    className: "mbsc-calendar-title" + s
                }, e.title) : Ln(sn, null, t._yearFirst && Ln("span", {
                    className: "mbsc-calendar-title mbsc-calendar-year" + s
                }, e.yearTitle), Ln("span", {
                    className: "mbsc-calendar-title mbsc-calendar-month" + s
                }, e.monthTitle), !t._yearFirst && Ln("span", {
                    className: "mbsc-calendar-title mbsc-calendar-year" + s
                }, e.yearTitle))), !t._hasPicker && i !== ii && Ln("span", {
                    className: "mbsc-calendar-title" + s
                }, t._viewTitle), a.downIcon && 1 === t._pageNr ? Ln(Ba, {
                    svg: i === ii ? a.downIcon : a.upIcon,
                    theme: a.theme
                }) : null)
            })))
        },
        Ci = function(e) {
            var t = e.calendar,
                n = e.view,
                a = i(e, ["calendar", "view"]);
            return Ln(yi, s({
                component: bi,
                host: t,
                view: n
            }, a))
        };
    Ci._name = "CalendarPrev";
    var Si = function(e) {
        var t = e.calendar,
            n = e.view,
            a = i(e, ["calendar", "view"]);
        return Ln(yi, s({
            component: xi,
            host: t,
            view: n
        }, a))
    };
    Si._name = "CalendarNext";
    var wi = function(e) {
        var t = e.calendar,
            n = e.view,
            a = i(e, ["calendar", "view"]);
        return Ln(yi, s({
            component: Ti,
            host: t,
            view: n
        }, a))
    };
    wi._name = "CalendarToday";
    var ki = function(e) {
        var t = e.calendar,
            n = e.view,
            a = i(e, ["calendar", "view"]);
        return Ln(yi, s({
            component: Di,
            host: t,
            view: n
        }, a))
    };

    function Mi(e, t, n, a) {
        var s;
        if (!(t < n || t > a)) {
            if (he(e)) {
                var i = e.length,
                    r = t % i;
                s = e[r >= 0 ? r : r + i]
            } else s = e(t);
            return s
        }
    }
    ki._name = "CalendarNav";
    var Ei = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t._setInnerEl = function(e) {
                    t._innerEl = e
                }, t._setScrollEl = function(e) {
                    t._scrollEl = e
                }, t._setScrollEl3d = function(e) {
                    t._scrollEl3d = e
                }, t._setScrollbarEl = function(e) {
                    t._scrollbarEl = e
                }, t._setScrollbarContEl = function(e) {
                    t._scrollbarContEl = e
                }, t
            }
            return a(t, e), t.prototype._template = function(e) {
                var t, n = this,
                    a = e.children;
                return e.itemRenderer && (a = this.visibleItems.map((function(t) {
                    return e.itemRenderer(t, n._offset)
                })), e.scroll3d && (t = this.visible3dItems.map((function(t) {
                    return e.itemRenderer(t, n._offset, !0)
                })))), Ln("div", {
                    ref: this._setEl,
                    className: this._cssClass,
                    style: e.styles
                }, Ln("div", {
                    ref: this._setInnerEl,
                    className: e.innerClass,
                    style: e.innerStyles
                }, Ln("div", {
                    ref: this._setScrollEl,
                    className: "mbsc-scrollview-scroll" + this._rtl
                }, a)), e.scroll3d && Ln("div", {
                    ref: this._setScrollEl3d,
                    style: {
                        height: e.itemSize + "px"
                    },
                    className: "mbsc-scroller-items-3d"
                }, t), Ln("div", {
                    ref: this._setScrollbarContEl,
                    className: "mbsc-scroller-bar-cont " + this._rtl + (e.scrollBar && this._barSize !== this._barContSize ? "" : " mbsc-scroller-bar-hidden") + (this._started ? " mbsc-scroller-bar-started" : "")
                }, Ln("div", {
                    className: "mbsc-scroller-bar" + this._theme,
                    ref: this._setScrollbarEl,
                    style: {
                        height: this._barSize + "px"
                    }
                })))
            }, t
        }(function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t._currPos = 0, t._delta = 0, t._endPos = 0, t._lastRaf = 0, t._maxSnapScroll = 0, t._margin = 0, t._scrollEnd = we((function() {
                    St(t._raf), t._raf = !1, t._onEnd(), t._hasScrolled = !1
                }), 200), t._onStart = function(e) {
                    var n = t.s;
                    t._hook("onStart", {}), n.changeOnEnd && t._isScrolling || !n.mouseSwipe && !e.isTouch || !n.swipe || (t._started = !0, t._hasScrolled = t._isScrolling, t._currX = e.startX, t._currY = e.startY, t._delta = 0, t._velocityX = 0, t._velocityY = 0, t._startPos = At(t._scrollEl, t._isVertical), t._timestamp = +new Date, t._isScrolling && (St(t._raf), t._raf = !1, t._scroll(t._startPos)))
                }, t._onMove = function(e) {
                    var n = e.domEvent,
                        a = t.s;
                    t._isVertical || a.scrollLock || t._hasScrolled ? n.cancelable && n.preventDefault() : n.type === hs && (Math.abs(e.deltaY) > 7 || !a.swipe) && (t._started = !1), t._started && (t._delta = t._isVertical ? e.deltaY : e.deltaX, (t._hasScrolled || Math.abs(t._delta) > t._threshold) && (t._hasScrolled || t._hook("onGestureStart", {}), t._hasScrolled = !0, t._isScrolling = !0, t._raf || (t._raf = Ct((function() {
                        return t._move(e)
                    })))))
                }, t._onEnd = function() {
                    if (t._started = !1, t._hasScrolled) {
                        var e, n = t.s,
                            a = 17 * (t._isVertical ? t._velocityY : t._velocityX),
                            s = t._maxSnapScroll,
                            i = t._delta;
                        i += a * a * .5 * (a < 0 ? -1 : 1), s && (i = ce(i, -t._round * s, t._round * s));
                        var r = ce(Te((t._startPos + i) / t._round) * t._round, t._min, t._max),
                            o = Te(-r * t._rtlNr / n.itemSize) + t._offset,
                            l = i > 0 ? t._isVertical ? 270 : 360 : t._isVertical ? 90 : 180,
                            c = o - n.selectedIndex;
                        e = n.time || Math.max(1e3, 3 * Math.abs(r - t._currPos)), t._hook("onGestureEnd", {
                            direction: l,
                            index: o
                        }), t._delta = 0, t._scroll(r, e), c && !n.changeOnEnd && (t._hook("onIndexChange", {
                            index: o,
                            diff: c
                        }), n.selectedIndex === t._prevIndex && n.selectedIndex !== o && t.forceUpdate())
                    }
                }, t._onClick = function(e) {
                    t._hasScrolled && (t._hasScrolled = !1, e.stopPropagation(), e.preventDefault())
                }, t._onScroll = function(e) {
                    e.target.scrollTop = 0, e.target.scrollLeft = 0
                }, t._onMouseWheel = function(e) {
                    var n = t._isVertical ? e.deltaY === ie ? e.wheelDelta || e.detail : e.deltaY : e.deltaX;
                    if (t._el.contains(e.target) && n && t.s.mousewheel) {
                        if (e.preventDefault(), t._hook("onStart", {}), t._started || (t._delta = 0, t._velocityX = 0, t._velocityY = 0, t._startPos = t._currPos, t._hook("onGestureStart", {})), e.deltaMode && 1 === e.deltaMode && (n *= 15), n = ce(-n, -t._scrollSnap, t._scrollSnap), t._delta += n, t._maxSnapScroll && Math.abs(t._delta) > t._round * t._maxSnapScroll && (n = 0), t._startPos + t._delta < t._min && (t._startPos = t._min, t._delta = 0, n = 0), t._startPos + t._delta > t._max && (t._startPos = t._max, t._delta = 0, n = 0), t._raf || (t._raf = Ct((function() {
                                return t._move()
                            }))), !n && t._started) return;
                        t._hasScrolled = !0, t._isScrolling = !0, t._started = !0, t._scrollEnd()
                    }
                }, t._onTrackStart = function(e) {
                    e.stopPropagation();
                    var n = {
                        domEvent: e,
                        startX: ps(e, "X", !0),
                        startY: ps(e, "Y", !0)
                    };
                    if (t._onStart(n), t._trackStartX = n.startX, t._trackStartY = n.startY, e.target === t._scrollbarEl) Ot(t._doc, as, t._onTrackEnd), Ot(t._doc, ns, t._onTrackMove);
                    else {
                        var a = jt(t._scrollbarContEl).top,
                            s = (n.startY - a) / t._barContSize;
                        t._startPos = t._currPos = t._max + (t._min - t._max) * s, t._hasScrolled = !0, t._onEnd()
                    }
                }, t._onTrackMove = function(e) {
                    var n = t._barContSize,
                        a = ps(e, "X", !0),
                        s = ps(e, "Y", !0),
                        i = (t._isVertical ? s - t._trackStartY : a - t._trackStartX) / n;
                    t._isInfinite ? t._delta = -(t._maxSnapScroll * t._round * 2 + n) * i : t._delta = (t._min - t._max - n) * i, (t._hasScrolled || Math.abs(t._delta) > t._threshold) && (t._hasScrolled || t._hook("onGestureStart", {}), t._hasScrolled = !0, t._isScrolling = !0, t._raf || (t._raf = Ct((function() {
                        return t._move({
                            endX: a,
                            endY: s
                        }, !t._isInfinite)
                    }))))
                }, t._onTrackEnd = function() {
                    t._delta = 0, t._startPos = t._currPos, t._onEnd(), Yt(t._doc, as, t._onTrackEnd), Yt(t._doc, ns, t._onTrackMove)
                }, t._onTrackClick = function(e) {
                    e.stopPropagation()
                }, t
            }
            return a(t, e), t.prototype._render = function(e, t) {
                var n = this._prevS,
                    a = e.batchSize,
                    s = e.batchSize3d,
                    i = e.itemNr || 1,
                    r = e.itemSize,
                    o = e.selectedIndex,
                    l = n.selectedIndex,
                    c = t.index === ie ? o : t.index,
                    h = [],
                    d = [],
                    u = o - l,
                    m = c - this._currIndex,
                    _ = e.minIndex,
                    p = e.maxIndex,
                    v = e.items,
                    f = e.offset;
                this._currIndex = c, this._isVertical = "Y" === e.axis, this._threshold = this._isVertical ? e.thresholdY : e.thresholdX, this._rtlNr = !this._isVertical && e.rtl ? -1 : 1, this._round = e.snap ? r : 1;
                for (var g = this._round; g > 44;) g /= 2;
                if (this._scrollSnap = Te(44 / g) * g, v) {
                    for (var y = c - a; y < c + i + a; y++) h.push({
                        key: y,
                        data: Mi(v, y, _, p)
                    });
                    if (e.scroll3d)
                        for (y = c - s; y < c + i + s; y++) d.push({
                            key: y,
                            data: Mi(v, y, _, p)
                        });
                    this.visibleItems = h, this.visible3dItems = d, this._maxSnapScroll = a, this._isInfinite = "function" == typeof v
                }
                this._offset === ie && (this._offset = o);
                var b = -(o - this._offset) * r * this._rtlNr;
                if (Math.abs(u) > a && b !== this._endPos) {
                    var x = u + a * (u > 0 ? -1 : 1);
                    this._offset += x, this._margin -= x
                }
                if (f && f !== n.offset && (this._offset += f, this._margin -= f), m && (this._margin += m), this._max = _ !== ie ? -(_ - this._offset) * r * this._rtlNr : 1 / 0, this._min = p !== ie ? -(p - this._offset - (e.spaceAround ? 0 : i - 1)) * r * this._rtlNr : -1 / 0, -1 === this._rtlNr) {
                    var T = this._min;
                    this._min = this._max, this._max = T
                }
                this._min > this._max && (this._min = this._max);
                var D = e.visibleSize * r;
                this._barContSize = D, this._barSize = Math.max(20, D * D / (this._max - this._min + D)), this._cssClass = this._className + " mbsc-ltr"
            }, t.prototype._mounted = function() {
                this._doc = Pt(this._el), Ot(this._el, Xa, this._onClick, !0), Ot(this.s.scroll3d ? this._innerEl : this._el, ls, this._onScroll), Ot(this._doc, rs, this._onMouseWheel, {
                    passive: !1,
                    capture: !0
                }), Ot(this._doc, ms, this._onMouseWheel, {
                    passive: !1,
                    capture: !0
                }), Ot(this._scrollbarContEl, ts, this._onTrackStart), Ot(this._scrollbarContEl, Xa, this._onTrackClick), this._unlisten = Ts(this._el, {
                    onEnd: this._onEnd,
                    onMove: this._onMove,
                    onStart: this._onStart,
                    prevDef: !0
                })
            }, t.prototype._updated = function() {
                var e = this.s,
                    t = e.batchSize,
                    n = e.itemSize,
                    a = e.selectedIndex,
                    s = this._prevIndex,
                    i = !e.prevAnim && (s !== ie && s !== a || this._isAnimating),
                    r = -(a - this._offset) * n * this._rtlNr;
                e.margin && (this._scrollEl.style.marginTop = this._isVertical ? (this._margin - t) * n + "px" : ""), this._started || this._scroll(r, i ? this._isAnimating || e.time || 1e3 : 0), this._prevIndex = a
            }, t.prototype._destroy = function() {
                Yt(this._el, Xa, this._onClick, !0), Yt(this.s.scroll3d ? this._innerEl : this._el, ls, this._onScroll), Yt(this._doc, rs, this._onMouseWheel, {
                    passive: !1,
                    capture: !0
                }), Yt(this._doc, ms, this._onMouseWheel, {
                    passive: !1,
                    capture: !0
                }), Yt(this._scrollbarContEl, ts, this._onTrackStart), Yt(this._scrollbarContEl, Xa, this._onTrackClick), St(this._raf), this._raf = !1, this._scroll(0), this._unlisten()
            }, t.prototype._anim = function(e) {
                var t = this;
                return this._raf = Ct((function() {
                    var n = t.s,
                        a = +new Date;
                    if (t._raf) {
                        if ((t._currPos - t._endPos) * -e < 4) return t._currPos = t._endPos, t._raf = !1, t._isAnimating = 0, t._isScrolling = !1, t._infinite(t._currPos), t._hook("onAnimationEnd", {}), void t._scrollbarContEl.classList.remove("mbsc-scroller-bar-started");
                        a - t._lastRaf > 100 && (t._lastRaf = a, t._currPos = At(t._scrollEl, t._isVertical), n.changeOnEnd || t._infinite(t._currPos)), t._raf = t._anim(e)
                    }
                }))
            }, t.prototype._infinite = function(e) {
                var t = this.s;
                if (t.itemSize) {
                    var n = Te(-e * this._rtlNr / t.itemSize) + this._offset,
                        a = n - this._currIndex;
                    a && (t.changeOnEnd ? this._hook("onIndexChange", {
                        index: n,
                        diff: a
                    }) : this.setState({
                        index: n
                    }))
                }
            }, t.prototype._scroll = function(e, t) {
                var n = this.s,
                    a = n.itemSize,
                    s = this._isVertical,
                    i = this._scrollEl.style,
                    r = Nt ? Nt + "T" : "t",
                    o = t ? It + "transform " + Te(t) + "ms " + n.easing : "";
                if (i[r + "ransform"] = "translate3d(" + (s ? "0," + e + "px," : e + "px,0,") + "0)", i[r + "ransition"] = o, this._endPos = e, n.scroll3d) {
                    var l = this._scrollEl3d.style,
                        c = 360 / (2 * n.batchSize3d);
                    l[r + "ransform"] = "translateY(-50%) rotateX(" + -e / a * c + "deg)", l[r + "ransition"] = o
                }
                if (this._scrollbarEl) {
                    var h = this._scrollbarEl.style,
                        d = this._isInfinite ? (this._maxSnapScroll * this._round - this._delta) / (this._maxSnapScroll * this._round * 2) : (e - this._max) / (this._min - this._max),
                        u = ce((this._barContSize - this._barSize) * d, 0, this._barContSize - this._barSize);
                    h[r + "ransform"] = "translate3d(" + (s ? "0," + u + "px," : u + "px,0,") + "0)", h[r + "ransition"] = o
                }
                t ? (St(this._raf), this._isAnimating = t, this._scrollbarContEl.classList.add("mbsc-scroller-bar-started"), this._raf = this._anim(e > this._currPos ? 1 : -1)) : (this._currPos = e, n.changeOnEnd || this._infinite(e))
            }, t.prototype._move = function(e, t) {
                var n = this._currX,
                    a = this._currY,
                    s = this._timestamp,
                    i = this._maxSnapScroll;
                if (e) {
                    this._currX = e.endX, this._currY = e.endY, this._timestamp = +new Date;
                    var r = this._timestamp - s;
                    if (r > 0 && r < 100) {
                        var o = (this._currX - n) / r,
                            l = (this._currY - a) / r;
                        this._velocityX = .7 * o + .3 * this._velocityX, this._velocityY = .7 * l + .3 * this._velocityY
                    }
                }
                i && !t && (this._delta = ce(this._delta, -this._round * i, this._round * i)), this._scroll(ce(this._startPos + this._delta, this._min - this.s.itemSize, this._max + this.s.itemSize)), this._raf = !1
            }, t.defaults = {
                axis: "Y",
                batchSize: 40,
                easing: "cubic-bezier(0.190, 1.000, 0.220, 1.000)",
                mouseSwipe: !0,
                mousewheel: !0,
                prevDef: !0,
                selectedIndex: 0,
                spaceAround: !0,
                stopProp: !0,
                swipe: !0,
                thresholdX: 10,
                thresholdY: 5
            }, t
        }(Ua)),
        Ni = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t._onClick = function(e) {
                    t._cellClick("onDayClick", e)
                }, t._onRightClick = function(e) {
                    t._cellClick("onDayRightClick", e)
                }, t._onLabelClick = function(e) {
                    t._labelClick("onLabelClick", e)
                }, t._onLabelDoubleClick = function(e) {
                    t._labelClick("onLabelDoubleClick", e)
                }, t._onLabelRightClick = function(e) {
                    t._labelClick("onLabelRightClick", e)
                }, t._onLabelHoverIn = function(e) {
                    t._labelClick("onLabelHoverIn", e)
                }, t._onLabelHoverOut = function(e) {
                    t._labelClick("onLabelHoverOut", e)
                }, t
            }
            return a(t, e), t.prototype._mounted = function() {
                var e, t, n, a = this;
                this._unlisten = Ts(this._el, {
                    click: !0,
                    onBlur: function() {
                        a.setState({
                            hasFocus: !1
                        })
                    },
                    onDoubleClick: function(e) {
                        var t = a.s;
                        t.clickToCreate && "single" !== t.clickToCreate && t.labels && !t.disabled && t.display && (a._hook("onLabelUpdateStart", e), a._hook("onLabelUpdateEnd", e)), a._cellClick("onDayDoubleClick", e.domEvent)
                    },
                    onEnd: function(s) {
                        e && (s.domEvent.preventDefault(), a._hook("onLabelUpdateEnd", s), e = !1), clearTimeout(n), e = !1, t = !1
                    },
                    onFocus: function() {
                        a.setState({
                            hasFocus: !0
                        })
                    },
                    onHoverIn: function(e) {
                        var t = a.s;
                        t.disabled || a.setState({
                            hasHover: !0
                        }), a._hook("onHoverIn", {
                            date: new Date(t.date),
                            domEvent: e,
                            hidden: !t.display,
                            outer: t.outer,
                            target: a._el
                        })
                    },
                    onHoverOut: function(e) {
                        var t = a.s;
                        a.setState({
                            hasHover: !1
                        }), a._hook("onHoverOut", {
                            date: new Date(t.date),
                            domEvent: e,
                            hidden: !t.display,
                            outer: t.outer,
                            target: a._el
                        })
                    },
                    onKeyDown: function(e) {
                        switch (e.keyCode) {
                            case Ys:
                            case Ps:
                                e.preventDefault(), a._onClick(e)
                        }
                    },
                    onMove: function(s) {
                        e && a.s.dragToCreate ? (s.domEvent.preventDefault(), a._hook("onLabelUpdateMove", s)) : t && a.s.dragToCreate && (Math.abs(s.deltaX) > 7 || Math.abs(s.deltaY) > 7) ? (e = !s.isTouch, a._hook("onLabelUpdateStart", s)) : clearTimeout(n)
                    },
                    onStart: function(s) {
                        var i = a.s;
                        (s.create = !0, i.disabled || !i.dragToCreate && !i.clickToCreate || !i.labels || e) || (Jt(s.domEvent.target, ".mbsc-calendar-text", a._el) || (s.isTouch && i.dragToCreate ? n = setTimeout((function() {
                            a._hook("onLabelUpdateStart", s), a._hook("onLabelUpdateModeOn", s), e = !0
                        }), 350) : "single" === i.clickToCreate ? (a._hook("onLabelUpdateStart", s), e = !0) : t = !s.isTouch))
                    }
                })
            }, t.prototype._render = function(e, t) {
                var n = new Date,
                    a = e.date,
                    s = e.colors,
                    i = e.display,
                    r = e.dragData,
                    o = e.hoverEnd,
                    l = e.hoverStart,
                    c = e.labels,
                    h = e.rangeEnd,
                    d = e.rangeStart,
                    u = new Date(a),
                    m = ta(u),
                    _ = oa(n, u),
                    p = c && c.events,
                    v = s && s[0],
                    f = v && v.background,
                    g = v && v.highlight,
                    y = "",
                    b = "";
                this._draggedLabel = r && r.draggedDates && r.draggedDates[m], this._draggedLabelOrig = r && r.originDates && r.originDates[m], this._todayClass = _ ? " mbsc-calendar-today" : "", this._cellStyles = f && i ? {
                    backgroundColor: f,
                    color: Wt(f)
                } : ie, this._circleStyles = g ? {
                    backgroundColor: g,
                    color: Wt(v.highlight)
                } : ie, this._ariaLabel = "day" === e.type ? (_ ? e.todayText + ", " : "") + e.day + ", " + e.month + " " + e.text + ", " + e.year : "month" === e.type ? e.month : "", i && ((d && a >= d && a <= (h || d) || h && a <= h && a >= (d || h)) && (b = " mbsc-range-day" + (a === (d || h) ? " mbsc-range-day-start" : "") + (a === (h || d) ? " mbsc-range-day-end" : "")), l && o && a >= l && a <= o && (b += " mbsc-range-hover" + (a === l ? " mbsc-range-hover-start mbsc-hover" : "") + (a === o ? " mbsc-range-hover-end mbsc-hover" : ""))), e.marks && e.marks.forEach((function(e) {
                    y += e.cellCssClass ? " " + e.cellCssClass : ""
                })), s && s.forEach((function(e) {
                    y += e.cellCssClass ? " " + e.cellCssClass : ""
                })), p && p.forEach((function(e) {
                    y += e.cellCssClass ? " " + e.cellCssClass : ""
                })), this._cssClass = "mbsc-calendar-cell mbsc-flex-1-0-0 mbsc-calendar-" + e.type + this._theme + this._rtl + this._hb + y + (c ? " mbsc-calendar-day-labels" : "") + (s ? " mbsc-calendar-day-colors" : "") + (e.outer ? " mbsc-calendar-day-outer" : "") + (e.hasMarks ? " mbsc-calendar-day-marked" : "") + (e.disabled ? " mbsc-disabled" : "") + (i ? "" : " mbsc-calendar-day-empty") + (e.selected ? " mbsc-selected" : "") + (t.hasFocus ? " mbsc-focus" : "") + (!t.hasHover || a !== l && a !== o && (l || o) ? "" : " mbsc-hover") + (this._draggedLabel ? " mbsc-calendar-day-highlight" : "") + b, this._data = {
                    date: u,
                    events: p,
                    selected: e.selected
                }
            }, t.prototype._destroy = function() {
                this._unlisten()
            }, t.prototype._cellClick = function(e, t) {
                var n = this.s;
                n.display && this._hook(e, {
                    date: new Date(n.date),
                    disabled: n.disabled,
                    domEvent: t,
                    outer: n.outer,
                    selected: n.selected,
                    source: "calendar",
                    target: this._el
                })
            }, t.prototype._labelClick = function(e, t) {
                var n = this.s;
                t.date = new Date(n.date), t.labels = n.labels.events, this._hook(e, t)
            }, t
        }(Ua),
        Ii = {},
        Li = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return a(t, e), t.prototype._template = function(e) {
                var t = e.event && !1 !== e.event.editable;
                return Ln("div", {
                    "aria-hidden": e.showText ? ie : "true",
                    className: this._cssClass,
                    "data-id": e.showText && e.event ? e.event.id : null,
                    onClick: this._onClick,
                    onContextMenu: this._onRightClick,
                    ref: this._setEl,
                    role: e.showText ? "button" : ie,
                    style: {
                        color: this._color
                    },
                    tabIndex: this._tabIndex,
                    title: this._title
                }, this._hasResizeStart && t && Ln("div", {
                    className: "mbsc-calendar-label-resize mbsc-calendar-label-resize-start" + this._rtl + (e.isUpdate ? " mbsc-calendar-label-resize-start-touch" : "")
                }), this._hasResizeEnd && t && Ln("div", {
                    className: "mbsc-calendar-label-resize mbsc-calendar-label-resize-end" + this._rtl + (e.isUpdate ? " mbsc-calendar-label-resize-end-touch" : "")
                }), e.showText && !e.more && !e.render && Ln("div", {
                    className: "mbsc-calendar-label-background" + this._theme
                }), e.showText && !e.more && e.render ? this._html ? Ln("div", {
                    dangerouslySetInnerHTML: this._html
                }) : this._content : Ln("div", {
                    className: "mbsc-calendar-label-inner" + this._theme,
                    style: {
                        color: this._textColor
                    }
                }, Ln("div", {
                    "aria-hidden": "true",
                    className: "mbsc-calendar-label-text" + this._theme,
                    dangerouslySetInnerHTML: this._html,
                    style: {
                        color: e.event && e.event.textColor
                    }
                }, this._content), e.label && Ln("div", {
                    className: "mbsc-hidden-content"
                }, e.label)))
            }, t
        }(function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t._onClick = function(e) {
                    if (t._isDrag) e.stopPropagation();
                    else {
                        t._triggerEvent("onClick", e);
                        var n = t.s,
                            a = Ii[n.id];
                        a && n.selected && a.next({
                            hasFocus: !1
                        })
                    }
                }, t._onRightClick = function(e) {
                    t._triggerEvent("onRightClick", e)
                }, t._onDocTouch = function(e) {
                    Yt(t._doc, cs, t._onDocTouch), Yt(t._doc, ts, t._onDocTouch), t._isDrag = !1, t._hook("onDragModeOff", {
                        data: t.s.event
                    })
                }, t._updateState = function(e) {
                    t.s.showText && t.setState(e)
                }, t._triggerEvent = function(e, n) {
                    t._hook(e, {
                        domEvent: n,
                        label: t.s.event,
                        target: t._el
                    })
                }, t
            }
            return a(t, e), t.prototype._mounted = function() {
                var e, t = this,
                    n = this.s,
                    a = n.id,
                    i = n.isPicker,
                    r = Ii[a];
                r || (r = new h, Ii[a] = r), this._unsubscribe = r.subscribe(this._updateState), this._doc = Pt(this._el), this._unlisten = Ts(this._el, {
                    keepFocus: !0,
                    onBlur: function() {
                        i || r.next({
                            hasFocus: !1
                        })
                    },
                    onDoubleClick: function(e) {
                        e.domEvent.stopPropagation(), t._hook("onDoubleClick", {
                            domEvent: e.domEvent,
                            label: t.s.event,
                            target: t._el
                        })
                    },
                    onEnd: function(n) {
                        if (t._isDrag) {
                            var a = t.s,
                                i = s({}, n);
                            i.domEvent.preventDefault(), i.data = a.event, a.resize && e ? (i.resize = !0, i.direction = e) : a.drag && (i.drag = !0), t._hook("onDragEnd", i), a.isUpdate || (t._isDrag = !1)
                        }
                        clearTimeout(t._touchTimer), e = ie
                    },
                    onFocus: function() {
                        i || r.next({
                            hasFocus: !0
                        })
                    },
                    onHoverIn: function(e) {
                        t._isDrag || i || (r.next({
                            hasHover: !0
                        }), t._triggerEvent("onHoverIn", e))
                    },
                    onHoverOut: function(e) {
                        r.next({
                            hasHover: !1
                        }), t._triggerEvent("onHoverOut", e)
                    },
                    onKeyDown: function(e) {
                        var n = t.s.event;
                        switch (e.keyCode) {
                            case Ys:
                            case Ps:
                                t._el.click(), e.preventDefault();
                                break;
                            case 8:
                            case 46:
                                n && !1 !== n.editable && t._hook("onDelete", {
                                    domEvent: e,
                                    event: n,
                                    source: "calendar"
                                })
                        }
                    },
                    onMove: function(n) {
                        var a = t.s,
                            i = s({}, n);
                        if (i.data = a.event, e) i.resize = !0, i.direction = e;
                        else {
                            if (!a.drag) return;
                            i.drag = !0
                        }
                        a.event && !1 !== a.event.editable && (t._isDrag ? (i.domEvent.preventDefault(), t._hook("onDragMove", i)) : (Math.abs(i.deltaX) > 7 || Math.abs(i.deltaY) > 7) && (clearTimeout(t._touchTimer), i.isTouch || (t._isDrag = !0, t._hook("onDragStart", i))))
                    },
                    onStart: function(n) {
                        var a = t.s,
                            i = s({}, n),
                            r = i.domEvent.target;
                        if (i.data = a.event, a.resize && r.classList.contains("mbsc-calendar-label-resize")) e = r.classList.contains("mbsc-calendar-label-resize-start") ? "start" : "end", i.resize = !0, i.direction = e;
                        else {
                            if (!a.drag) return;
                            i.drag = !0
                        }
                        a.event && !1 !== a.event.editable && (!t._isDrag && i.isTouch || i.domEvent.stopPropagation(), t._isDrag ? t._hook("onDragStart", i) : i.isTouch && (t._touchTimer = setTimeout((function() {
                            t._hook("onDragModeOn", i), t._hook("onDragStart", i), t._isDrag = !0
                        }), 350)))
                    }
                }), this._isDrag && (Ot(this._doc, cs, this._onDocTouch), Ot(this._doc, ts, this._onDocTouch))
            }, t.prototype._destroy = function() {
                if (this._unsubscribe) {
                    var e = this.s.id,
                        t = Ii[e];
                    t && (t.unsubscribe(this._unsubscribe), t.nr || delete Ii[e])
                }
                this._unlisten && this._unlisten(), Yt(this._doc, cs, this._onDocTouch), Yt(this._doc, ts, this._onDocTouch)
            }, t.prototype._render = function(e, t) {
                var n, a, s, i, r, o = e.event,
                    l = new Date(e.date),
                    c = e.render || e.renderContent,
                    h = !1;
                if (this._isDrag = this._isDrag || e.isUpdate, this._html = this._content = ie, this._title = e.more || e.count || !e.showEventTooltip ? ie : function(e) {
                        if (pt && e) {
                            var t = pt.createElement("div");
                            return t.innerHTML = e, t.textContent.trim()
                        }
                        return e || ""
                    }(o.tooltip || o.title || o.text), this._tabIndex = e.isActiveMonth && e.showText && !e.count && !e.isPicker ? 0 : -1, o) {
                    var d = o.allDay,
                        u = d ? ie : e;
                    n = o.start ? pa(o.start, u) : null, a = o.end ? pa(o.end, u) : null;
                    var m = n && a && ea(e, d, n, a, !0),
                        _ = Ta(ra(l, e), 7),
                        p = e.lastDay && e.lastDay < _ ? e.lastDay : _;
                    s = !(h = n && m && !oa(n, m)) || n && oa(n, l), i = !h || m && oa(m, l), r = !h || (e.showText ? m < p : i), this._hasResizeStart = e.resize && s, this._hasResizeEnd = e.resize && r;
                    var v = o.color;
                    if (!v && o.resource && e.resourcesMap) {
                        var f = e.resourcesMap[he(o.resource) ? o.resource[0] : o.resource];
                        v = f && f.color
                    }
                    e.showText && (this._textColor = v ? Wt(v) : ie), this._color = e.render || e.template ? ie : o.textColor && !v ? "transparent" : v
                }
                if (o && e.showText && (c || e.contentTemplate || e.template)) {
                    var g = o.allDay || !n || h && !s && !i;
                    if (this._data = {
                            end: !g && i && a ? ga(e.timeFormat, a, e) : "",
                            id: o.id,
                            isMultiDay: h,
                            original: o,
                            start: !g && s && n ? ga(e.timeFormat, n, e) : "",
                            title: this._title
                        }, c) {
                        var y = c(this._data);
                        me(y) ? (this._html = this._safeHtml(y), this._shouldEnhance = !0) : this._content = y
                    }
                } else this._html = this._safeHtml(e.more || e.count || e.showText && (o.title || o.text) || "");
                this._cssClass = "mbsc-calendar-text" + this._theme + this._rtl + (t.hasFocus && !e.inactive && !e.selected || e.selected && e.showText ? " mbsc-calendar-label-active " : "") + (!t.hasHover || e.inactive || this._isDrag ? "" : " mbsc-calendar-label-hover") + (e.more ? " mbsc-calendar-text-more" : e.render || e.template ? " mbsc-calendar-custom-label" : " mbsc-calendar-label") + (e.inactive ? " mbsc-calendar-label-inactive" : "") + (e.isUpdate ? " mbsc-calendar-label-dragging" : "") + (e.hidden ? " mbsc-calendar-label-hidden" : "") + (s ? " mbsc-calendar-label-start" : "") + (r ? " mbsc-calendar-label-end" : "") + (o && !1 === o.editable ? " mbsc-readonly-event" : "")
            }, t
        }(Ua)),
        Hi = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return a(t, e), t.prototype._renderEvent = function(e, t, n, a, s, i) {
                return Ln(Li, {
                    key: i,
                    amText: e.amText,
                    count: t.count ? t.count + " " + (t.count > 1 ? e.eventsText : e.eventText) : ie,
                    date: e.date,
                    dataTimezone: e.dataTimezone,
                    displayTimezone: e.displayTimezone,
                    drag: e.dragToMove,
                    resize: e.dragToResize,
                    event: t.event,
                    exclusiveEndDates: e.exclusiveEndDates,
                    firstDay: e.firstDay,
                    hidden: a,
                    id: t.id,
                    inactive: !s && t.event && e.dragData && e.dragData.draggedEvent && t.event.id === e.dragData.draggedEvent.id,
                    isActiveMonth: e.isActiveMonth,
                    isPicker: e.isPicker,
                    isUpdate: s,
                    label: t.label,
                    lastDay: t.lastDay,
                    more: t.more,
                    pmText: e.pmText,
                    resourcesMap: e.resourcesMap,
                    rtl: e.rtl,
                    selected: t.event && e.selectedEventsMap && (e.selectedEventsMap[t.id] || e.selectedEventsMap[t.event.id]),
                    showEventTooltip: e.showEventTooltip,
                    showText: n,
                    theme: e.theme,
                    timeFormat: e.timeFormat,
                    timezonePlugin: e.timezonePlugin,
                    render: e.renderLabel,
                    renderContent: e.renderLabelContent,
                    onClick: this._onLabelClick,
                    onDoubleClick: this._onLabelDoubleClick,
                    onRightClick: this._onLabelRightClick,
                    onHoverIn: this._onLabelHoverIn,
                    onHoverOut: this._onLabelHoverOut,
                    onDelete: e.onLabelDelete,
                    onDragStart: e.onLabelUpdateStart,
                    onDragMove: e.onLabelUpdateMove,
                    onDragEnd: e.onLabelUpdateEnd,
                    onDragModeOn: e.onLabelUpdateModeOn,
                    onDragModeOff: e.onLabelUpdateModeOff
                })
            }, t.prototype._renderLabel = function(e, t) {
                var n = t.id;
                return t.placeholder ? Ln("div", {
                    className: "mbsc-calendar-text mbsc-calendar-text-placeholder",
                    key: n
                }) : t.more || t.count ? this._renderEvent(e, t, !0, !1, !1, n) : t.multiDay ? [Ln("div", {
                    className: "mbsc-calendar-label-wrapper",
                    style: {
                        width: t.width + "%"
                    },
                    key: n
                }, this._renderEvent(e, t, !0)), this._renderEvent(e, t, !1, !1, !1, "-" + n)] : this._renderEvent(e, t, t.showText, !1, !1, n)
            }, t.prototype._template = function(e) {
                var t, n = this,
                    a = this._draggedLabel,
                    s = this._draggedLabelOrig,
                    i = this._theme;
                return e.renderDay && (t = e.renderDay(this._data)), e.renderDayContent && (t = e.renderDayContent(this._data)), me(t) && (t = Ln("div", {
                    dangerouslySetInnerHTML: this._safeHtml(t)
                }), this._shouldEnhance = !0), Ln("div", {
                    ref: this._setEl,
                    className: this._cssClass,
                    onClick: this._onClick,
                    onContextMenu: this._onRightClick,
                    style: this._cellStyles,
                    tabIndex: e.disabled ? ie : e.active ? 0 : -1
                }, Ln("div", {
                    dangerouslySetInnerHTML: this.textParam
                }), Ln("div", {
                    className: "mbsc-calendar-cell-inner mbsc-calendar-" + e.type + "-inner" + i + ("day" === e.type ? "" : this._hb) + (e.display ? "" : " mbsc-calendar-day-hidden")
                }, e.renderDay ? t : Ln(sn, null, 1 === e.text && Ln("div", {
                    "aria-hidden": "true",
                    className: "mbsc-calendar-month-name" + i + this._rtl
                }, e.monthShort), Ln("div", {
                    "aria-label": this._ariaLabel,
                    role: "button",
                    "aria-pressed": e.selected ? "true" : ie,
                    className: "mbsc-calendar-cell-text mbsc-calendar-" + e.type + "-text" + i + this._todayClass,
                    style: this._circleStyles
                }, e.text), e.marks && Ln("div", null, Ln("div", {
                    className: "mbsc-calendar-marks" + i + this._rtl
                }, e.marks.map((function(e, t) {
                    return Ln("div", {
                        className: "mbsc-calendar-mark " + (e.markCssClass || "") + i,
                        key: t,
                        style: {
                            background: e.color
                        }
                    })
                })))), e.renderDayContent && t), e.labels && Ln("div", null, s && s.event && Ln("div", {
                    className: "mbsc-calendar-labels mbsc-calendar-labels-dragging"
                }, Ln("div", {
                    style: {
                        width: s.width + "%" || "100%"
                    }
                }, this._renderEvent(e, {
                    id: 0,
                    event: s.event
                }, !0, !!e.dragData.draggedDates, !0))), a && a.event && Ln("div", {
                    className: "mbsc-calendar-labels mbsc-calendar-labels-dragging"
                }, Ln("div", {
                    className: "mbsc-calendar-label-wrapper",
                    style: {
                        width: a.width + "%" || "100%"
                    }
                }, this._renderEvent(e, {
                    id: 0,
                    event: a.event
                }, !0, !1, !0))), Ln("div", {
                    className: "mbsc-calendar-labels"
                }, e.labels.data.map((function(t) {
                    return n._renderLabel(e, t)
                }))), Ln("div", {
                    className: "mbsc-calendar-text mbsc-calendar-text-placeholder"
                }))))
            }, t
        }(Ni),
        Oi = {
            0: "SU",
            1: "MO",
            2: "TU",
            3: "WE",
            4: "TH",
            5: "FR",
            6: "SA"
        },
        Yi = {
            SU: 0,
            MO: 1,
            TU: 2,
            WE: 3,
            TH: 4,
            FR: 5,
            SA: 6
        },
        Pi = {
            byday: "weekDays",
            bymonth: "month",
            bymonthday: "day",
            bysetpos: "pos",
            dtstart: "from",
            freq: "repeat",
            wkst: "weekStart"
        };

    function Fi(e, t, n, a) {
        var s = pa(t.start, t.allDay ? ie : n),
            i = pa(t.end, t.allDay ? ie : n),
            r = i - s;
        for (a && (t.start = s, t.end = i), s = na(s), i = n.exclusiveEndDates ? i : na(Ta(i, 1)); s < i || !r;) zi(e, s, t), s = Ta(s, 1), r = 1
    }

    function zi(e, t, n) {
        var a = ta(t);
        e[a] || (e[a] = [], e[a].date = na(t, !0)), e[a].push(n)
    }

    function Vi(e, t, n, a, s, i) {
        var r = {};
        if (s)
            for (var o = 0, l = Ki(s); o < l.length; o++) {
                r[ta(pa(l[o]))] = !0
            }
        if (i)
            for (var c = 0, h = Ji(i, e, t, n, a); c < h.length; c++) {
                r[ta(h[c].d)] = !0
            }
        return r
    }

    function Ri(e) {
        return me(e) || e.getTime || e.toDate ? e : e.start || e.date
    }

    function Ai(e) {
        for (var t = {}, n = 0, a = e.split(";"); n < a.length; n++) {
            var s = a[n].split("="),
                i = s[0].trim().toLowerCase(),
                r = s[1].trim();
            t[Pi[i] || i] = r
        }
        return t
    }

    function Wi(e) {
        return me(e) ? Ai(e) : s({}, e)
    }

    function Ui(e, t, n) {
        var a = Wi(e),
            s = pa(t),
            i = pa(n),
            r = sa(i, s),
            o = (a.repeat || "").toLowerCase(),
            l = function(e, t, n) {
                var a = e.filter((function(e) {
                    return e !== t
                }));
                return -1 === a.indexOf(n) && a.push(n), a
            },
            c = function(e, t, n) {
                var a = he(e) ? e : ((e || "") + "").split(",").map((function(e) {
                        return +e
                    })),
                    s = l(a, t, n);
                return s.length > 1 ? s : s[0]
            },
            h = function() {
                if (a.weekDays) {
                    var e = a.weekDays.split(","),
                        t = Oi[i.getDay()],
                        n = Oi[s.getDay()],
                        r = l(e, t, n);
                    a.weekDays = r.join()
                }
            };
        return "weekly" === o ? h() : "monthly" === o ? a.pos === ie ? a.day = c(a.day, i.getDate(), s.getDate()) : h() : "yearly" === o && (a.pos === ie ? (a.month = c(a.month, i.getMonth() + 1, s.getMonth() + 1), a.day = c(a.day, i.getDate(), s.getDate())) : h()), a.from && (a.from = Ta(pa(a.from), r)), a.until && (a.until = Ta(pa(a.until), r)), a
    }

    function Bi(e, t, n, a) {
        for (var s = null, i = 0, r = e; i < r.length; i++) {
            var o = r[i];
            if (o.recurring) {
                var l = pa(o.start || o.date),
                    c = Ji(o.recurring, l, t, ie, n, o.reccurringException, o.recurringExceptionRule, "first");
                (!s || c < s) && (s = c)
            } else if (o.start && o.end) {
                var h = pa(o.start, n, a);
                pa(o.end, n, a) > t && (s = h <= t ? t : s && s < h ? s : h)
            } else {
                var d = pa(Ri(o), n, a);
                d > t && (!s || d < s) && (s = d)
            }
        }
        return s
    }

    function ji(e, t, n, a) {
        var s = t;
        e.sort((function(e, t) {
            return pa(Ri(e), n, a) - pa(Ri(t), n, a)
        }));
        for (var i = 0, r = e; i < r.length; i++) {
            var o = r[i];
            if (o.recurring) {
                var l = pa(o.start || o.date),
                    c = Ji(o.recurring, l, t, ie, n, o.reccurringException, o.recurringExceptionRule, "last");
                c > s && (s = c)
            } else if (o.start && o.end) {
                var h = pa(o.start, n, a),
                    d = pa(o.end, n, a);
                d > s && sa(s, h) <= 1 && (s = d)
            } else {
                var u = pa(Ri(o), n, a);
                u > s && sa(s, u) <= 1 && (s = u)
            }
        }
        return s
    }

    function Ki(e) {
        return e ? he(e) ? e : me(e) ? e.split(",") : [e] : []
    }

    function Ji(e, t, n, a, s, i, r, o) {
        me(e) && (e = Ai(e));
        for (var l, c, h = s.getYear, d = s.getMonth, u = s.getDay, m = s.getDate, _ = s.getMaxDayOfMonth, p = (e.repeat || "").toLowerCase(), v = e.interval || 1, f = e.count, g = e.from ? pa(e.from) : t || (1 !== v || f !== ie ? new Date : n), y = na(g), b = h(g), x = d(g), T = e.until ? pa(e.until) : 1 / 0, D = g < n, C = D ? n : na(g), S = "first" === o, w = "last" === o, k = S || w || !a || T < a ? T : a, M = f === ie ? 1 / 0 : f, E = (e.weekDays || Oi[g.getDay()]).split(","), N = Yi[(e.weekStart || "MO").trim().toUpperCase()], I = he(e.day) ? e.day : ((e.day || u(g)) + "").split(","), L = he(e.month) ? e.month : ((e.month || d(g) + 1) + "").split(","), H = [], O = e.pos !== ie, Y = O ? +e.pos : 1, P = [], F = a ? Vi(t, n, a, s, i, r) : {}, z = !0, V = 0, R = 0, A = null, W = n, U = 0, B = E; U < B.length; U++) {
            var j = B[U];
            P.push(Yi[j.trim().toUpperCase()])
        }
        var K = function() {
                if (a || (F = Vi(c, c, Ta(c, 1), s, i, r)), !F[ta(c)] && c >= C)
                    if (S) A = !A || c < A ? c : A, z = !1;
                    else if (w) {
                    var e = sa(W, c);
                    W = c > W && e <= 1 ? c : W, z = e <= 1
                } else H.push({
                    d: c,
                    i: R
                });
                R++
            },
            J = function(e, t) {
                for (var n = [], a = 0, s = P; a < s.length; a++)
                    for (var i = ra(e, {
                            firstDay: s[a]
                        }); i < t; i.setDate(i.getDate() + 7)) i.getMonth() === e.getMonth() && n.push(+i);
                n.sort();
                var r = n[Y < 0 ? n.length + Y : Y - 1];
                (c = r ? new Date(r) : t) < k ? r && K() : z = !1
            };
        switch (p) {
            case "daily":
                for (R = f && D ? Ce(sa(g, n) / v) : 0; z;)(c = m(h(g), d(g), u(g) + R * v)) < k && R < M ? K() : z = !1;
                break;
            case "weekly":
                var X = P,
                    G = ra(g, {
                        firstDay: N
                    }),
                    q = G.getDay();
                for (X.sort((function(e, t) {
                        return (e = (e -= q) < 0 ? e + 7 : e) - (t = (t -= q) < 0 ? t + 7 : t)
                    })); z;) {
                    for (var Z = 0, $ = X; Z < $.length; Z++) {
                        l = Ta(G, (j = $[Z]) < N ? j - N + 7 : j - N), (c = m(h(l), d(l), u(l) + 7 * V * v)) < k && R < M ? c >= y && K() : z = !1
                    }
                    V++
                }
                break;
            case "monthly":
                for (; z;) {
                    var Q = _(b, x + V * v);
                    if (O) J(m(b, x + V * v, 1), m(b, x + V * v + 1, 1));
                    else
                        for (var ee = 0, te = I; ee < te.length; ee++) {
                            var ne = te[ee];
                            (c = m(b, x + V * v, (ce = +ne) < 0 ? Q + ce + 1 : ce)) < k && R < M ? Q >= ne && c >= y && K() : z = !1
                        }
                    V++
                }
                break;
            case "yearly":
                for (; z;) {
                    for (var ae = 0, se = L; ae < se.length; ae++) {
                        var re = +se[ae];
                        Q = _(b + V * v, re - 1);
                        if (O) J(m(b + V * v, re - 1, 1), m(b + V * v, re, 1));
                        else
                            for (var oe = 0, le = I; oe < le.length; oe++) {
                                var ce;
                                ne = le[oe];
                                (c = m(b + V * v, re - 1, (ce = +ne) < 0 ? Q + ce + 1 : ce)) < k && R < M ? Q >= ne && c >= y && K() : z = !1
                            }
                    }
                    V++
                }
        }
        return S ? A : w ? W : H
    }

    function Xi(e, t, n, a, i) {
        var r = {},
            o = a.timezonePlugin,
            l = a.dataTimezone || a.displayTimezone,
            c = o ? {
                displayTimezone: l,
                timezonePlugin: o
            } : a;
        if (e) {
            for (var h = 0, d = e; h < d.length; h++) {
                var u = d[h],
                    m = Ri(u),
                    _ = pa(m, u.allDay ? ie : a);
                if (u.recurring)
                    for (var p = Xn.test(m) ? null : pa(m), v = Ta(t, -1), f = Ta(n, 1), g = Ji(u.recurring, p, v, f, a, u.recurringException, u.recurringExceptionRule), y = _a(u.allDay ? ie : c, _), b = u.end ? pa(u.end, u.allDay ? ie : a) : y, x = +b - +y, T = 0, D = g; T < D.length; T++) {
                        var C = D[T],
                            S = C.d,
                            w = s({}, u);
                        if (u.start ? w.start = _a(u.allDay ? ie : c, S.getFullYear(), S.getMonth(), S.getDate(), y.getHours(), y.getMinutes(), y.getSeconds()) : (w.allDay = !0, w.start = _a(ie, S.getFullYear(), S.getMonth(), S.getDate())), u.end) {
                            if (u.allDay) {
                                var k = Ta(S, sa(y, b));
                                w.end = new Date(k.getFullYear(), k.getMonth(), k.getDate(), b.getHours(), b.getMinutes(), b.getSeconds())
                            } else w.end = _a(c, +w.start + x);
                            "00:00" === u.end && w.end.setHours(23, 59, 59, 999)
                        }
                        w.nr = C.i, w.occurrenceId = w.id + "_" + ta(w.start), w.original = u, w.start && w.end ? Fi(r, w, a, i) : zi(r, S, w)
                    } else u.start && u.end ? Fi(r, u, a, i) : _ && zi(r, _, u)
            }
            return r
        }
    }
    var Gi = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.state = {
                    height: "sm",
                    pageSize: 0,
                    pickerSize: 0,
                    width: "sm"
                }, t._dim = {}, t._months = [1, 2, 3], t._title = [], t.MONTH_VIEW = ii, t.YEAR_VIEW = ri, t.MULTI_YEAR_VIEW = oi, t.nextPage = function() {
                    switch (t._prevDocClick(), t._view) {
                        case oi:
                            t._activeYearsChange(1);
                            break;
                        case ri:
                            t._activeYearChange(1);
                            break;
                        default:
                            t._activeChange(1)
                    }
                }, t.prevPage = function() {
                    switch (t._prevDocClick(), t._view) {
                        case oi:
                            t._activeYearsChange(-1);
                            break;
                        case ri:
                            t._activeYearChange(-1);
                            break;
                        default:
                            t._activeChange(-1)
                    }
                }, t._changeView = function(e) {
                    var n = t.s,
                        a = t._view,
                        s = t._hasPicker,
                        i = n.selectView,
                        r = "year" === (n.showCalendar ? n.calendarType : n.eventRange);
                    if (!e) {
                        switch (a) {
                            case ii:
                                e = oi;
                                break;
                            case oi:
                                e = ri;
                                break;
                            default:
                                e = s || i === ri ? oi : ii
                        }
                        a === oi && r && (e = ii)
                    }
                    var o = s && e === i;
                    t.setState({
                        view: e,
                        viewClosing: o ? ie : a,
                        viewOpening: o ? ie : e
                    })
                }, t._onDayHoverIn = function(e) {
                    t._disableHover || (t._hook("onDayHoverIn", e), t._hoverTimer = setTimeout((function() {
                        var n = ta(e.date);
                        t._labels && (e.labels = t._labels[n]), t._marked && (e.marked = t._marked[n]), t._isHover = !0, t._hook("onCellHoverIn", e)
                    }), 150))
                }, t._onDayHoverOut = function(e) {
                    if (!t._disableHover && (t._hook("onDayHoverOut", e), clearTimeout(t._hoverTimer), t._isHover)) {
                        var n = ta(e.date);
                        t._labels && (e.labels = t._labels[n]), t._marked && (e.marked = t._marked[n]), t._isHover = !1, t._hook("onCellHoverOut", e)
                    }
                }, t._onLabelClick = function(e) {
                    t._isLabelClick = !0, t._hook("onLabelClick", e)
                }, t._onDayClick = function(e) {
                    t._shouldFocus = !t._isLabelClick, t._prevAnim = !1, t._prevPageChange = t.s.noOuterChange, t._isLabelClick = !1, t._hook("onDayClick", e)
                }, t._onTodayClick = function(e) {
                    t._prevAnim = !1, t._hook("onActiveChange", {
                        date: +new Date,
                        today: !0
                    }), t._hook("onTodayClick", {})
                }, t._onMonthClick = function(e) {
                    var n = e.date,
                        a = t.s;
                    if (a.selectView === ri) t._hook("onDayClick", e);
                    else {
                        var s = di(n, a) - t._offset;
                        t._changeView(ii), t._shouldFocus = !0, t._prevAnim = !t._hasPicker, t._hook("onActiveChange", {
                            date: +n,
                            nav: !0,
                            pageChange: s !== t._pageIndex
                        })
                    }
                }, t._onYearClick = function(e) {
                    var n = e.date,
                        a = t.s,
                        s = a.selectView;
                    if (s === oi) t._hook("onDayClick", e);
                    else if (t._shouldFocus = !0, t._prevAnim = s === ri, t._activeMonth = +n, t._changeView(), "year" === (a.showCalendar ? a.calendarType : a.eventRange)) {
                        var i = di(n, a) - t._offset;
                        t._hook("onActiveChange", {
                            date: +n,
                            pageChange: i !== t._pageIndex
                        })
                    }
                }, t._onPageChange = function(e) {
                    t._isSwipeChange = !0, t._activeChange(e.diff)
                }, t._onYearPageChange = function(e) {
                    t._activeYearChange(e.diff)
                }, t._onYearsPageChange = function(e) {
                    t._activeYearsChange(e.diff)
                }, t._onAnimationEnd = function(e) {
                    t._disableHover = !1, t._isIndexChange && (t._pageLoaded(), t._isIndexChange = !1)
                }, t._onStart = function() {
                    clearTimeout(t._hoverTimer)
                }, t._onGestureStart = function(e) {
                    t._disableHover = !0, t._hook("onGestureStart", e)
                }, t._onGestureEnd = function(e) {
                    t._prevDocClick()
                }, t._onPickerClose = function() {
                    t.setState({
                        view: ii
                    })
                }, t._onPickerOpen = function() {
                    var e = t._pickerCont.clientHeight,
                        n = t._pickerCont.clientWidth;
                    t.setState({
                        pickerSize: t._isVertical ? e : n
                    })
                }, t._onPickerBtnClick = function(e) {
                    t._view === ii && (t._pickerBtn = e.currentTarget), t._prevDocClick(), t._changeView()
                }, t._onDocClick = function(e) {
                    var n = t.s.selectView;
                    t._prevClick || t._hasPicker || t._view === n || !t._pickerCont || t._pickerCont.contains(e.target) || t._changeView(n)
                }, t._onViewAnimationEnd = function() {
                    t.state.viewClosing && t.setState({
                        viewClosing: ie
                    }), t.state.viewOpening && t.setState({
                        viewOpening: ie
                    })
                }, t._onResize = function() {
                    if (t._body && m) {
                        var e = t.s,
                            n = t.state,
                            a = e.showCalendar,
                            s = a && t.__getTextParam ? t._body.querySelector(".mbsc-calendar-body-inner") : t._body,
                            i = t._el.offsetWidth,
                            r = t._el.offsetHeight,
                            o = s.clientHeight,
                            l = s.clientWidth,
                            c = t._isVertical ? o : l,
                            h = t._hasPicker ? n.pickerSize : c,
                            d = a !== ie,
                            u = "sm",
                            _ = "sm",
                            p = 0,
                            v = !1,
                            f = 0,
                            g = 0;
                        if (e.responsiveStyle && !t._isGrid && (o > 300 && (_ = "md"), l > 767 && (u = "md")), u !== n.width || _ !== n.height) t._shouldCheckSize = !0, t.setState({
                            width: u,
                            height: _
                        });
                        else {
                            if (t._labels && a && t.__getTextParam) {
                                var y = s.querySelector(".mbsc-calendar-text"),
                                    b = s.querySelector(".mbsc-calendar-day-inner"),
                                    x = b.querySelector(".mbsc-calendar-labels"),
                                    T = y ? Ft(y, "marginBottom") : 2,
                                    D = y ? y.offsetHeight : 18;
                                f = x.offsetTop, v = s.scrollHeight > s.clientHeight, g = D + T, p = Math.max(1, Ce((b.clientHeight - f) / g))
                            }
                            t._hook("onResize", {
                                height: r,
                                target: t._el,
                                width: i
                            }), t.setState({
                                cellTextHeight: f,
                                hasScrollY: v,
                                labelHeight: g,
                                maxLabels: p,
                                pageSize: c,
                                pickerSize: h,
                                ready: d
                            })
                        }
                    }
                }, t._onKeyDown = function(e) {
                    var n, a = t.s,
                        s = t._view,
                        i = s === ii ? t._active : t._activeMonth,
                        r = new Date(i),
                        o = a.getYear(r),
                        l = a.getMonth(r),
                        c = a.getDay(r),
                        h = a.getDate,
                        d = a.weeks,
                        u = "month" === a.calendarType;
                    if (s === oi) {
                        var m = void 0;
                        switch (e.keyCode) {
                            case As:
                                m = o - 1 * t._rtlNr;
                                break;
                            case Us:
                                m = o + 1 * t._rtlNr;
                                break;
                            case Ws:
                                m = o - 3;
                                break;
                            case Bs:
                                m = o + 3;
                                break;
                            case Rs:
                                m = t._getPageYears(t._yearsIndex);
                                break;
                            case Vs:
                                m = t._getPageYears(t._yearsIndex) + 11;
                                break;
                            case Fs:
                                m = o - 12;
                                break;
                            case zs:
                                m = o + 12
                        }
                        m && t._minYears <= m && t._maxYears >= m && (e.preventDefault(), t._shouldFocus = !0, t._prevAnim = !1, t._activeMonth = +h(m, 0, 1), t.forceUpdate())
                    } else if (s === ri) {
                        switch (e.keyCode) {
                            case As:
                                n = h(o, l - 1 * t._rtlNr, 1);
                                break;
                            case Us:
                                n = h(o, l + 1 * t._rtlNr, 1);
                                break;
                            case Ws:
                                n = h(o, l - 3, 1);
                                break;
                            case Bs:
                                n = h(o, l + 3, 1);
                                break;
                            case Rs:
                                n = h(o, 0, 1);
                                break;
                            case Vs:
                                n = h(o, 11, 1);
                                break;
                            case Fs:
                                n = h(o - 1, l, 1);
                                break;
                            case zs:
                                n = h(o + 1, l, 1)
                        }
                        n && t._minYear <= n && t._maxYear >= n && (e.preventDefault(), t._shouldFocus = !0, t._prevAnim = !1, t._activeMonth = +n, t.forceUpdate())
                    } else if (s === ii) {
                        switch (e.keyCode) {
                            case As:
                                n = h(o, l, c - 1 * t._rtlNr);
                                break;
                            case Us:
                                n = h(o, l, c + 1 * t._rtlNr);
                                break;
                            case Ws:
                                n = h(o, l, c - 7);
                                break;
                            case Bs:
                                n = h(o, l, c + 7);
                                break;
                            case Rs:
                                n = h(o, l, 1);
                                break;
                            case Vs:
                                n = h(o, l + 1, 0);
                                break;
                            case Fs:
                                n = e.altKey ? h(o - 1, l, c) : u ? h(o, l - 1, c) : h(o, l, c - 7 * d);
                                break;
                            case zs:
                                n = e.altKey ? h(o + 1, l, c) : u ? h(o, l + 1, c) : h(o, l, c + 7 * d)
                        }
                        if (n && t._minDate <= n && t._maxDate >= n) {
                            e.preventDefault();
                            var _ = di(n, a) - t._offset;
                            t._shouldFocus = !0, t._prevAnim = !1, t._pageChange = a.noOuterChange && _ !== t._pageIndex, t._hook("onActiveChange", {
                                date: +n,
                                pageChange: t._pageChange
                            })
                        }
                    }
                }, t
            }
            return a(t, e), t.prototype._getPageDay = function(e) {
                return +hi(e + this._offset, this.s)
            }, t.prototype._getPageStyle = function(e, t, n) {
                var a;
                return (a = {})[(Nt ? Nt + "T" : "t") + "ransform"] = "translate" + this._axis + "(" + 100 * (e - t) * this._rtlNr + "%)", a.width = 100 / (n || 1) + "%", a
            }, t.prototype._getPageYear = function(e) {
                var t = this.s,
                    n = t.refDate ? pa(t.refDate) : Rn;
                return t.getYear(n) + e + this._yearOffset
            }, t.prototype._getPageYears = function(e) {
                var t = this.s,
                    n = t.refDate ? pa(t.refDate) : Rn;
                return t.getYear(n) + 12 * (e + this._yearsOffset)
            }, t.prototype._getPickerClass = function(e) {
                var t, n = e === this.s.selectView ? " mbsc-calendar-picker-main" : "",
                    a = "mbsc-calendar-picker",
                    s = this._hasPicker,
                    i = this.state,
                    r = i.viewClosing,
                    o = i.viewOpening;
                switch (e) {
                    case ii:
                        t = s ? "" : (o === ii ? "in-down" : "") + (r === ii ? "out-down" : "");
                        break;
                    case oi:
                        t = s && r === ii ? "" : (o === oi ? "in-up" : "") + (r === oi ? "out-up" : "");
                        break;
                    default:
                        t = s && o === ii ? "" : (o === ri ? r === oi ? "in-down" : "in-up" : "") + (r === ri ? o === oi ? "out-down" : "out-up" : "")
                }
                return a + n + (wt && t ? " " + a + "-" + t : "")
            }, t.prototype._isNextDisabled = function(e) {
                if (!this._hasPicker || e) {
                    var t = this._view;
                    if (t === oi) return this._yearsIndex + 1 > this._maxYearsIndex;
                    if (t === ri) return this._yearIndex + 1 > this._maxYearIndex
                }
                return this._pageIndex + 1 > this._maxIndex
            }, t.prototype._isPrevDisabled = function(e) {
                if (!this._hasPicker || e) {
                    var t = this._view;
                    if (t === oi) return this._yearsIndex - 1 < this._minYearsIndex;
                    if (t === ri) return this._yearIndex - 1 < this._minYearIndex
                }
                return this._pageIndex - 1 < this._minIndex
            }, t.prototype._render = function(e, t) {
                var n = e.getDate,
                    a = e.getYear,
                    s = e.getMonth,
                    i = e.showCalendar,
                    r = e.calendarType,
                    o = e.eventRange,
                    l = e.eventRangeSize || 1,
                    c = e.firstDay,
                    h = "week" === r,
                    d = "month" === r,
                    u = "year" === r ? 12 : e.size || 1,
                    m = u > 1 && !h,
                    _ = i ? h ? e.weeks : 6 : 0,
                    p = e.activeDate || this._active || +new Date,
                    v = p !== this._active,
                    f = new Date(p),
                    g = this._prevS,
                    y = e.dateFormat,
                    b = e.monthNames,
                    x = e.yearSuffix,
                    T = de(e.labelList) ? +e.labelList + 1 : "all" === e.labelList ? -1 : 0,
                    D = e.labelList !== g.labelList,
                    C = r !== g.calendarType || o !== g.eventRange || c !== g.firstDay || e.eventRangeSize !== g.eventRangeSize || e.refDate !== g.refDate || e.showCalendar !== g.showCalendar || e.weeks !== g.weeks,
                    S = this._pageChange || this._pageIndex === ie || C || !this._prevPageChange && v && (p < +this._firstDay || p >= +this._lastDay) ? di(f, e) : this._pageIndex + this._offset;
                _ === this._weeks && this._pageIndex !== ie || (this._offset = S), v && (this._activeMonth = p);
                var w = ui(new Date(this._activeMonth), e),
                    k = mi(new Date(this._activeMonth), e);
                if (v && (this._yearsOffset = w, this._yearOffset = k), this._view = t.view || e.selectView, this._yearsIndex = w - this._yearsOffset, this._yearIndex = k - this._yearOffset, this._view === ri) this._viewTitle = this._getPageYear(this._yearIndex) + "";
                else if (this._view === oi) {
                    var M = this._getPageYears(this._yearsIndex);
                    this._viewTitle = M + " - " + (M + 11)
                }
                var E = m ? 0 : 1,
                    N = m ? 1 : pi(e.pages, t.pageSize),
                    I = "vertical" === e.calendarScroll && "auto" !== e.pages && (e.pages === ie || 1 === e.pages),
                    L = e.showOuterDays !== ie ? e.showOuterDays : !I && N < 2 && (h || !u || u < 2),
                    H = hi(S, e),
                    O = hi(S + N, e);
                i || "week" !== o || e.startDay === ie || e.endDay === ie || (H = Ta(H, e.startDay - c + (e.startDay < c ? 7 : 0)), O = Ta(H, 7 * l + e.endDay - e.startDay + 1 - (e.endDay < e.startDay ? 0 : 7)));
                var Y = i && L ? ra(H, e) : H,
                    P = m ? n(a(O), s(O) - 1, 1) : hi(S + N - 1, e),
                    F = i && L ? Ta(ra(P, e), 7 * _) : O,
                    z = i ? ra(hi(S - 0 - E, e), e) : H,
                    V = i ? ra(hi(S - 0 + N + E - 1, e), e) : O,
                    R = i ? Ta(m ? ra(P, e) : V, 7 * _) : O,
                    A = y.search(/m/i),
                    W = y.search(/y/i);
                if (_e(e.min)) this._minDate = -1 / 0, this._minIndex = -1 / 0, this._minYears = -1 / 0, this._minYearsIndex = -1 / 0, this._minYear = -1 / 0, this._minYearIndex = -1 / 0;
                else {
                    if (g.min !== e.min || e.getDate !== g.getDate) {
                        var U = pa(e.min);
                        this._minDate = na(U), this._minYear = n(a(U), s(U), 1), this._minYears = a(U)
                    }
                    this._minIndex = di(this._minDate, e) - this._offset, this._minYearIndex = mi(this._minDate, e) - this._yearOffset, this._minYearsIndex = ui(this._minDate, e) - this._yearsOffset
                }
                if (_e(e.max)) this._maxDate = 1 / 0, this._maxIndex = 1 / 0, this._maxYears = 1 / 0, this._maxYearsIndex = 1 / 0, this._maxYear = 1 / 0, this._maxYearIndex = 1 / 0;
                else {
                    if (g.max !== e.max || e.getDate !== g.getDate) {
                        var B = pa(e.max);
                        this._maxDate = B, this._maxYear = n(a(B), s(B) + 1, 1), this._maxYears = a(this._maxDate)
                    }
                    this._maxIndex = di(this._maxDate, e) - this._offset, this._maxYearIndex = mi(this._maxDate, e) - this._yearOffset, this._maxYearsIndex = ui(this._maxDate, e) - this._yearsOffset
                }
                if (m && (this._monthsMulti = [], S !== ie)) {
                    for (var j = Ce(t.pageSize / li) || 1; u % j;) j--;
                    for (var K = 0; K < u / j; ++K) {
                        for (var J = [], X = 0; X < j; ++X) J.push(+n(a(H), s(H) + K * j + X, 1));
                        this._monthsMulti.push(J)
                    }
                }(r !== g.calendarType || e.theme !== g.theme || e.calendarScroll !== g.calendarScroll || e.hasContent !== g.hasContent || e.showCalendar !== g.showCalendar || e.showWeekNumbers !== g.showWeekNumbers || e.weeks !== g.weeks || D) && (this._shouldCheckSize = !0), g.width === e.width && g.height === e.height || (this._dim = {
                    height: ye(e.height),
                    width: ye(e.width)
                }), this._cssClass = "mbsc-calendar mbsc-font" + this._theme + this._rtl + (t.ready ? "" : " mbsc-calendar-hidden") + (m ? " mbsc-calendar-grid-view" : " mbsc-calendar-height-" + t.height + " mbsc-calendar-width-" + t.width) + " " + e.cssClass, this._dayNames = "sm" === t.width || m ? e.dayNamesMin : e.dayNamesShort, this._isSwipeChange = !1, this._firstDay = H, this._firstPageDay = Y, this._lastDay = O, this._lastPageDay = F, this._yearFirst = W < A, this._pageNr = N, this._variableRow = T;
                var G = e.pageLoad !== g.pageLoad,
                    q = +z != +this._viewStart || +R != +this._viewEnd;
                if (this._pageIndex !== ie && q && (this._isIndexChange = !this._isSwipeChange && !C, this._hook("onPageChange", {
                        firstDay: Y,
                        lastDay: F,
                        month: d ? H : ie,
                        viewEnd: R,
                        viewStart: z
                    })), S !== ie && (this._pageIndex = S - this._offset), S !== ie && (e.marked !== g.marked || e.colors !== g.colors || e.labels !== g.labels || e.invalid !== g.invalid || e.valid !== g.valid || t.maxLabels !== this._maxLabels || q || D || G)) {
                    (q || G) && (this._marksMap = ie, this._labelsMap = ie, this._hook("onPageLoading", {
                        firstDay: Y,
                        lastDay: F,
                        month: d ? H : ie,
                        viewChanged: q,
                        viewEnd: R,
                        viewStart: z
                    })), this._maxLabels = t.maxLabels || 0, this._viewStart = z, this._viewEnd = R;
                    var Z = this._labelsMap || Xi(e.labels, z, R, e),
                        $ = Z && vi(e, Z, z, R, this._variableRow || this._maxLabels, 7, !1, c, !0, e.eventOrder, !L, e.showLabelCount, e.moreEventsText, e.moreEventsPluralText);
                    $ && !this._labels && (this._shouldCheckSize = !0), ($ && t.maxLabels || !$) && (this._shouldPageLoad = !this._isIndexChange || this._prevAnim || !i || G), this._labelsLayout = $, this._labels = Z, this._marked = !Z && (this._marksMap || Xi(e.marked, z, R, e)), this._colors = Xi(e.colors, z, R, e), this._valid = Xi(e.valid, z, R, e, !0), this._invalid = Xi(e.invalid, z, R, e, !0)
                }
                if (q || v || o !== g.eventRange || l !== g.eventRangeSize || e.monthNames !== g.monthNames) {
                    this._title = [];
                    var Q = Ta(O, -1),
                        ee = S === ie ? f : H;
                    if (h)
                        for (var te = 0, ne = Object.keys(e.selectedDates); te < ne.length; te++) {
                            var ae = ne[te];
                            if (+ae >= +H && +ae < +O) {
                                ee = new Date(+ae);
                                break
                            }
                        }
                    if (this._pageNr > 1)
                        for (K = 0; K < N; K++) {
                            var se = n(a(H), s(H) + K, 1),
                                re = a(se) + x,
                                oe = b[s(se)];
                            this._title.push({
                                yearTitle: re,
                                monthTitle: oe
                            })
                        } else {
                            var le = {
                                    yearTitle: a(ee) + x,
                                    monthTitle: b[s(ee)]
                                },
                                he = e.showSchedule && 1 === l ? o : i ? r : o,
                                ue = o && !i && (!e.showSchedule || l > 1);
                            switch (he) {
                                case "year":
                                    le.title = a(H) + x, l > 1 && (le.title += " - " + (a(Q) + x));
                                    break;
                                case "month":
                                    if (l > 1 && !i) {
                                        var me = b[s(H)],
                                            pe = a(H) + x,
                                            ve = this._yearFirst ? pe + " " + me : me + " " + pe,
                                            fe = b[s(Q)],
                                            ge = a(Q) + x,
                                            be = this._yearFirst ? ge + " " + fe : fe + " " + ge;
                                        le.title = ve + " - " + be
                                    } else m && (le.title = a(H) + x);
                                    break;
                                case "day":
                                case "week":
                                    if (ue) {
                                        var xe = y.search(/d/i) < A ? "D MMM, YYYY" : "MMM D, YYYY";
                                        le.title = ga(xe, H, e), ("week" === he || l > 1) && (le.title += " - " + ga(xe, Q, e))
                                    }
                            }
                            this._title.push(le)
                        }
                }
                this._active = p, this._activeMonth = ce(this._activeMonth, +this._minDate, +this._maxDate), this._hasPicker = e.hasPicker || m || !d || !i || "md" === t.width && !1 !== e.hasPicker, this._axis = I ? "Y" : "X", this._rtlNr = !I && e.rtl ? -1 : 1, this._weeks = _, this._nextIcon = I ? e.nextIconV : e.rtl ? e.prevIconH : e.nextIconH, this._prevIcon = I ? e.prevIconV : e.rtl ? e.nextIconH : e.prevIconH, this._mousewheel = e.mousewheel === ie ? I : e.mousewheel, this._isGrid = m, this._isVertical = I, this._showOuter = L
            }, t.prototype._mounted = function() {
                this._observer = Js(this._el, this._onResize, this._zone), this._doc = Pt(this._el), Ot(this._doc, Xa, this._onDocClick)
            }, t.prototype._updated = function() {
                var e = this;
                if (this._shouldCheckSize ? (setTimeout((function() {
                        e._onResize()
                    })), this._shouldCheckSize = !1) : this._shouldPageLoad && (this._pageLoaded(), this._shouldPageLoad = !1), this._shouldFocus && setTimeout((function() {
                        e._focusActive(), e._shouldFocus = !1
                    })), this.s.instanceService && this.s.instanceService.onComponentChange.next({}), this._pageChange = !1, this._prevPageChange = !1, this._variableRow && this._body.firstChild) {
                    var t = this._body.firstChild,
                        n = t.scrollHeight > t.clientHeight;
                    n !== this.state.hasScrollY && (this._shouldCheckSize = !0, this.setState({
                        hasScrollY: n
                    }))
                }
            }, t.prototype._destroy = function() {
                this._observer && this._observer.detach(), Yt(this._doc, Xa, this._onDocClick), clearTimeout(this._hoverTimer)
            }, t.prototype._getActiveCell = function() {
                var e = this._view,
                    t = e === ii ? this._body : this._pickerCont,
                    n = e === oi ? "year" : e === ri ? "month" : "cell";
                return t && t.querySelector(".mbsc-calendar-" + n + '[tabindex="0"]')
            }, t.prototype._focusActive = function() {
                var e = this._getActiveCell();
                e && e.focus()
            }, t.prototype._pageLoaded = function() {
                this._hook("onPageLoaded", {
                    activeElm: this._getActiveCell(),
                    firstDay: this._firstPageDay,
                    lastDay: this._lastPageDay,
                    month: "month" === this.s.calendarType ? this._firstDay : ie,
                    viewEnd: this._viewEnd,
                    viewStart: this._viewStart
                })
            }, t.prototype._activeChange = function(e) {
                var t = this._pageIndex + e;
                this._minIndex <= t && this._maxIndex >= t && this.__getTextParam && (this._prevAnim = !1, this._pageChange = !0, this._hook("onActiveChange", {
                    date: this._getPageDay(t),
                    dir: e,
                    pageChange: !0
                }))
            }, t.prototype._activeYearsChange = function(e) {
                var t = this._yearsIndex + e;
                if (this._minYearsIndex <= t && this._maxYearsIndex >= t) {
                    var n = this._getPageYears(t);
                    this._prevAnim = !1, this._activeMonth = +this.s.getDate(n, 0, 1), this.forceUpdate()
                }
            }, t.prototype._activeYearChange = function(e) {
                var t = this._yearIndex + e;
                if (this._minYearIndex <= t && this._maxYearIndex >= t) {
                    var n = this._getPageYear(t);
                    this._prevAnim = !1, this._activeMonth = +this.s.getDate(n, 0, 1), this.forceUpdate()
                }
            }, t.prototype._prevDocClick = function() {
                var e = this;
                this._prevClick = !0, setTimeout((function() {
                    e._prevClick = !1
                }))
            }, t
        }(Ua),
        qi = function(e) {
            var t = e.firstDay,
                n = e.hidden,
                a = e.rtl,
                s = e.theme,
                i = e.dayNamesShort,
                r = e.showWeekNumbers,
                o = e.hasScroll;
            return Ln("div", {
                "aria-hidden": "true",
                className: "mbsc-calendar-week-days mbsc-flex" + (n ? " mbsc-hidden" : "")
            }, r && Ln("div", {
                className: "mbsc-calendar-week-day mbsc-flex-none mbsc-calendar-week-nr" + s + a
            }), le.map((function(e, n) {
                return Ln("div", {
                    className: "mbsc-calendar-week-day mbsc-flex-1-0-0" + s + a,
                    key: n
                }, i[(n + t) % 7])
            })), o && Ln("div", {
                className: "mbsc-schedule-fake-scroll-y"
            }))
        };

    function Zi(e, t, n, a, s, i) {
        var r = ta(t);
        if (s && +t < s || i && +t > i) return !0;
        if (a && a[r]) return !1;
        var o = n && n[r];
        if (o)
            for (var l = 0, c = o; l < c.length; l++) {
                var h = c[l],
                    d = h.start,
                    u = h.end,
                    m = h.allDay;
                if (!d || !u || m) return h;
                var _ = ea(e, m, d, u),
                    p = $n(e, t),
                    v = Qn(e, _);
                if (!oa(d, u) && (+d == +p || +_ == +v || !oa(t, d) && !oa(t, u) && t > d && t < u)) return h
            }
        return !1
    }

    function $i(e, t, n, a, s, i, r) {
        var o, l, c = !0,
            h = !0,
            d = 0,
            u = 0; + e < n && (e = _a(t, n)), +e > a && (e = _a(t, a));
        var m = t.getYear(e),
            _ = t.getMonth(e),
            p = t.getDate(m, _ - 1, 1),
            v = t.getDate(m, _ + 2, 1),
            f = +p > n ? +p : n,
            g = +v < a ? +v : a;
        if (s || (i = Xi(t.valid, p, v, t, !0), s = Xi(t.invalid, p, v, t, !0)), !Zi(t, e, s, i, n, a)) return e;
        for (o = e, l = e; c && +o < g && d < 100;) c = Zi(t, o = Ta(o, 1), s, i, n, a), d++;
        for (; h && +l > f && u < 100;) h = Zi(t, l = Ta(l, -1), s, i, n, a), u++;
        return c && h ? e : 1 !== r || c ? -1 !== r || h ? la(e, o, t) ? o : la(e, l, t) ? l : u >= d && !c ? o : l : l : o
    }
    var Qi = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return a(t, e), t.prototype._template = function(e) {
                var t = this,
                    n = e.showWeekNumbers,
                    a = e.showWeekDays ? Ln(qi, {
                        dayNamesShort: e.dayNamesShort,
                        firstDay: e.firstDay,
                        rtl: this._rtl,
                        showWeekNumbers: n,
                        theme: this._theme
                    }) : null;
                return Ln("div", {
                    "aria-hidden": e.isActive ? ie : "true",
                    className: "mbsc-calendar-table mbsc-flex-col mbsc-flex-1-1" + (e.isActive ? " mbsc-calendar-table-active" : "")
                }, a, this._rows.map((function(a, s) {
                    var i = n ? t._getWeekNr(e, a[0].date) : "";
                    return Ln("div", {
                        className: "mbsc-calendar-row mbsc-flex mbsc-flex-1-0",
                        key: s,
                        style: {
                            minHeight: t._rowHeights[s]
                        }
                    }, n && Ln("div", {
                        className: "mbsc-calendar-cell mbsc-flex-none mbsc-calendar-day mbsc-calendar-week-nr" + t._theme
                    }, Ln("div", {
                        "aria-hidden": "true"
                    }, i), Ln("div", {
                        className: "mbsc-hidden-content"
                    }, e.weekText.replace("{count}", i))), a.map((function(n, a) {
                        return Ln(Hi, {
                            active: n.display && t._isActive(n.date),
                            amText: e.amText,
                            clickToCreate: e.clickToCreate,
                            colors: n.colors,
                            date: n.date,
                            day: n.day,
                            disabled: t._isInvalid(n.date),
                            display: n.display,
                            dataTimezone: e.dataTimezone,
                            displayTimezone: e.displayTimezone,
                            dragData: e.dragData,
                            dragToCreate: e.dragToCreate,
                            dragToResize: e.dragToResize,
                            dragToMove: e.dragToMove,
                            eventText: e.eventText,
                            eventsText: e.eventsText,
                            exclusiveEndDates: e.exclusiveEndDates,
                            firstDay: e.firstDay,
                            hasMarks: e.hasMarks,
                            hoverEnd: e.hoverEnd,
                            hoverStart: e.hoverStart,
                            isActiveMonth: e.isActive,
                            isPicker: e.isPicker,
                            key: n.date,
                            labels: n.labels,
                            pmText: e.pmText,
                            marks: n.marks,
                            month: n.month,
                            monthShort: n.monthShort,
                            onDayClick: e.onDayClick,
                            onDayDoubleClick: e.onDayDoubleClick,
                            onDayRightClick: e.onDayRightClick,
                            onLabelClick: e.onLabelClick,
                            onLabelDoubleClick: e.onLabelDoubleClick,
                            onLabelRightClick: e.onLabelRightClick,
                            onLabelHoverIn: e.onLabelHoverIn,
                            onLabelHoverOut: e.onLabelHoverOut,
                            onLabelDelete: e.onLabelDelete,
                            onLabelUpdateStart: e.onLabelUpdateStart,
                            onLabelUpdateMove: e.onLabelUpdateMove,
                            onLabelUpdateEnd: e.onLabelUpdateEnd,
                            onLabelUpdateModeOn: e.onLabelUpdateModeOn,
                            onLabelUpdateModeOff: e.onLabelUpdateModeOff,
                            outer: n.outer,
                            renderDay: e.renderDay,
                            renderDayContent: e.renderDayContent,
                            renderLabel: e.renderLabel,
                            renderLabelContent: e.renderLabelContent,
                            rangeEnd: e.rangeEnd,
                            rangeStart: e.rangeStart,
                            resourcesMap: e.resourcesMap,
                            selectedEventsMap: e.selectedEventsMap,
                            rtl: e.rtl,
                            showEventTooltip: e.showEventTooltip,
                            selected: t._isSelected(n.date),
                            text: n.text,
                            theme: e.theme,
                            timeFormat: e.timeFormat,
                            timezonePlugin: e.timezonePlugin,
                            todayText: e.todayText,
                            type: "day",
                            year: n.year,
                            onHoverIn: e.onDayHoverIn,
                            onHoverOut: e.onDayHoverOut
                        })
                    })))
                })))
            }, t
        }(function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return a(t, e), t.prototype._isActive = function(e) {
                return this.s.isActive && e === this.s.activeDate
            }, t.prototype._isInvalid = function(e) {
                var t = this.s;
                return Zi(t, ua(t, new Date(e)), t.invalid, t.valid, +t.min, +t.max)
            }, t.prototype._isSelected = function(e) {
                var t = new Date(e),
                    n = ua(this.s, t);
                return !!this.s.selectedDates[+n]
            }, t.prototype._getWeekNr = function(e, t) {
                var n = new Date(t);
                return "" + e.getWeekNumber(e.getDate(n.getFullYear(), n.getMonth(), n.getDate() + (7 - e.firstDay + 1) % 7))
            }, t.prototype._render = function(e) {
                var t = e.weeks,
                    n = e.firstDay,
                    a = new Date(e.firstPageDay),
                    s = e.getYear(a),
                    i = e.getMonth(a),
                    r = e.getDay(a),
                    o = e.getDate(s, i, r).getDay(),
                    l = n - o > 0 ? 7 : 0,
                    c = [],
                    h = 0;
                this._rowHeights = [], this._rows = [], this._days = Array.apply(0, Array(7));
                for (var d = 0; d < 7 * t; d++) {
                    var u = e.getDate(s, i, d + n - l - o + r),
                        m = ta(u),
                        _ = e.getMonth(u),
                        p = _ !== i && "week" !== e.calendarType,
                        v = e.marked && e.marked[m],
                        f = v ? e.showSingleMark ? [{}] : v : null,
                        g = e.labels && e.labels[m],
                        y = g ? g.data.length : 0,
                        b = d % 7 == 0;
                    if (e.variableRow) {
                        if (b && p && d) break;
                        y > h && (h = y), d % 7 == 6 && (this._rowHeights.push(h * (e.labelHeight || 20) + (e.cellTextHeight || 0) + 3), h = 0)
                    }
                    b && (c = [], this._rows.push(c)), c.push({
                        colors: e.colors && e.colors[m],
                        date: +u,
                        day: e.dayNames[u.getDay()],
                        display: !p || e.showOuter,
                        labels: g,
                        marks: f,
                        month: e.monthNames[_],
                        monthShort: e.monthNamesShort[_],
                        outer: p,
                        text: e.getDay(u),
                        year: e.getYear(u)
                    })
                }
            }, t
        }(Ua)),
        er = 0,
        tr = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t._setHeader = function(e) {
                    t._headerElement = e
                }, t._setBody = function(e) {
                    t._body = e
                }, t._setPickerCont = function(e) {
                    t._pickerCont = e
                }, t._renderMonthView = function(e, n) {
                    var a = t.s,
                        i = t.state;
                    return Ln(Qi, s({}, n, {
                        activeDate: t._active,
                        amText: a.amText,
                        calendarType: a.calendarType,
                        cellTextHeight: i.cellTextHeight,
                        clickToCreate: a.clickToCreate,
                        colors: t._colors,
                        dayNames: a.dayNames,
                        dayNamesShort: t._dayNames,
                        dataTimezone: a.dataTimezone,
                        displayTimezone: a.displayTimezone,
                        eventText: a.eventText,
                        eventsText: a.eventsText,
                        exclusiveEndDates: a.exclusiveEndDates,
                        firstDay: a.firstDay,
                        firstPageDay: e,
                        getDate: a.getDate,
                        getDay: a.getDay,
                        getMonth: a.getMonth,
                        getWeekNumber: a.getWeekNumber,
                        getYear: a.getYear,
                        hasMarks: !!t._marked,
                        hoverEnd: a.hoverEnd,
                        hoverStart: a.hoverStart,
                        isPicker: a.isPicker,
                        invalid: t._invalid,
                        labels: t._labelsLayout,
                        labelHeight: i.labelHeight,
                        marked: t._marked,
                        max: t._maxDate,
                        min: t._minDate,
                        monthNames: a.monthNames,
                        monthNamesShort: a.monthNamesShort,
                        onDayClick: t._onDayClick,
                        onDayDoubleClick: a.onDayDoubleClick,
                        onDayRightClick: a.onDayRightClick,
                        onDayHoverIn: t._onDayHoverIn,
                        onDayHoverOut: t._onDayHoverOut,
                        onLabelClick: t._onLabelClick,
                        onLabelDoubleClick: a.onLabelDoubleClick,
                        onLabelRightClick: a.onLabelRightClick,
                        onLabelHoverIn: a.onLabelHoverIn,
                        onLabelHoverOut: a.onLabelHoverOut,
                        onLabelDelete: a.onLabelDelete,
                        pmText: a.pmText,
                        rangeEnd: a.rangeEnd,
                        rangeStart: a.rangeStart,
                        resourcesMap: a.resourcesMap,
                        rtl: a.rtl,
                        selectedDates: a.selectedDates,
                        selectedEventsMap: a.selectedEventsMap,
                        showEventTooltip: a.showEventTooltip,
                        showOuter: t._showOuter,
                        showWeekDays: !t._isVertical && !t._variableRow,
                        showWeekNumbers: a.showWeekNumbers,
                        showSingleMark: !!t._marksMap,
                        todayText: a.todayText,
                        theme: a.theme,
                        timeFormat: a.timeFormat,
                        timezonePlugin: a.timezonePlugin,
                        valid: t._valid,
                        weeks: t._weeks,
                        weekText: a.weekText,
                        renderDay: a.renderDay,
                        renderDayContent: a.renderDayContent,
                        renderLabel: a.renderLabel,
                        renderLabelContent: a.renderLabelContent,
                        variableRow: t._variableRow
                    }))
                }, t._renderMonth = function(e, n) {
                    var a = t.s,
                        s = e.key,
                        i = s >= t._pageIndex && s < t._pageIndex + t._pageNr && t._view === ii,
                        r = {
                            dragData: a.dragData,
                            dragToCreate: a.dragToCreate,
                            dragToMove: a.dragToMove,
                            dragToResize: a.dragToResize,
                            isActive: i,
                            onLabelUpdateEnd: a.onLabelUpdateEnd,
                            onLabelUpdateModeOff: a.onLabelUpdateModeOff,
                            onLabelUpdateModeOn: a.onLabelUpdateModeOn,
                            onLabelUpdateMove: a.onLabelUpdateMove,
                            onLabelUpdateStart: a.onLabelUpdateStart
                        };
                    return Ln("div", {
                        className: "mbsc-calendar-slide" + (i ? " mbsc-calendar-slide-active" : "") + t._theme + t._rtl,
                        key: s,
                        style: t._getPageStyle(s, n, t._pageNr)
                    }, t._renderMonthView(t._getPageDay(s), r))
                }, t._renderYears = function(e, n) {
                    var a = t.s,
                        s = e.key,
                        i = t._getPageYears(s),
                        r = a.getYear(new Date(t._active)),
                        o = a.getYear(new Date(t._activeMonth));
                    return Ln("div", {
                        "aria-hidden": t._yearsIndex === s ? ie : "true",
                        className: "mbsc-calendar-picker-slide mbsc-calendar-slide" + t._theme + t._rtl,
                        key: s,
                        style: t._getPageStyle(s, n)
                    }, Ln("div", {
                        className: "mbsc-calendar-table mbsc-flex-col"
                    }, oe.map((function(e, n) {
                        return Ln("div", {
                            className: "mbsc-calendar-row mbsc-flex mbsc-flex-1-0",
                            key: n
                        }, re.map((function(e, s) {
                            var l = i + 3 * n + s,
                                c = +a.getDate(l, 0, 1);
                            return Ln(Hi, {
                                active: l === o,
                                date: c,
                                display: !0,
                                selected: l === r,
                                disabled: l < t._minYears || l > t._maxYears,
                                rtl: a.rtl,
                                text: l + a.yearSuffix,
                                theme: a.theme,
                                type: "year",
                                onDayClick: t._onYearClick,
                                key: l
                            })
                        })))
                    }))))
                }, t._renderYear = function(e, n) {
                    var a = t.s,
                        s = e.key,
                        i = t._getPageYear(s),
                        r = new Date(t._activeMonth),
                        o = a.getYear(r),
                        l = a.getMonth(r),
                        c = new Date(t._active),
                        h = a.getYear(c),
                        d = a.getMonth(c);
                    return Ln("div", {
                        "aria-hidden": t._yearIndex === s ? ie : "true",
                        className: "mbsc-calendar-picker-slide mbsc-calendar-slide" + t._theme + t._rtl,
                        key: s,
                        style: t._getPageStyle(s, n)
                    }, Ln("div", {
                        className: "mbsc-calendar-table mbsc-flex-col"
                    }, oe.map((function(e, n) {
                        return Ln("div", {
                            className: "mbsc-calendar-row mbsc-flex mbsc-flex-1-0",
                            key: n
                        }, re.map((function(e, s) {
                            var r = a.getDate(i, 3 * n + s, 1),
                                c = a.getYear(r),
                                u = a.getMonth(r);
                            return Ln(Hi, {
                                active: c === o && u === l,
                                date: +r,
                                display: !0,
                                selected: c === h && u === d,
                                disabled: r < t._minYear || r >= t._maxYear,
                                month: a.monthNames[u],
                                rtl: a.rtl,
                                text: a.monthNamesShort[u],
                                theme: a.theme,
                                type: "month",
                                onDayClick: t._onMonthClick,
                                key: +r
                            })
                        })))
                    }))))
                }, t
            }
            return a(t, e), t.prototype._template = function(e, t) {
                var n = this;
                er++;
                var a = this._variableRow,
                    i = this._view !== ii,
                    r = (this._isVertical || a && 1 == +e.size) && e.showCalendar ? Ln(qi, {
                        dayNamesShort: this._dayNames,
                        rtl: this._rtl,
                        theme: this._theme,
                        firstDay: e.firstDay,
                        hasScroll: t.hasScrollY,
                        hidden: this._view !== ii && !this._hasPicker,
                        showWeekNumbers: e.showWeekNumbers
                    }) : null,
                    o = {
                        axis: this._axis,
                        batchSize: 1,
                        changeOnEnd: !0,
                        className: "mbsc-calendar-scroll-wrapper" + this._theme,
                        data: er,
                        easing: "ease-out",
                        itemSize: t.pickerSize,
                        items: this._months,
                        mousewheel: this._mousewheel,
                        prevAnim: this._prevAnim,
                        rtl: e.rtl,
                        snap: !0,
                        time: 200
                    },
                    l = Ln("div", {
                        ref: this._setPickerCont,
                        className: this._hasPicker ? "mbsc-calendar-picker-wrapper" : ""
                    }, (t.view === oi || t.viewClosing === oi || e.selectView === oi) && Ln("div", {
                        onAnimationEnd: this._onViewAnimationEnd,
                        className: this._getPickerClass(oi)
                    }, Ln(Ei, s({
                        key: "years",
                        itemRenderer: this._renderYears,
                        maxIndex: this._maxYearsIndex,
                        minIndex: this._minYearsIndex,
                        onGestureEnd: this._onGestureEnd,
                        onIndexChange: this._onYearsPageChange,
                        selectedIndex: this._yearsIndex
                    }, o))), (t.view === ri || t.viewClosing === ri || e.selectView === ri) && Ln("div", {
                        onAnimationEnd: this._onViewAnimationEnd,
                        className: this._getPickerClass(ri)
                    }, Ln(Ei, s({
                        key: "year",
                        itemRenderer: this._renderYear,
                        maxIndex: this._maxYearIndex,
                        minIndex: this._minYearIndex,
                        onGestureEnd: this._onGestureEnd,
                        onIndexChange: this._onYearPageChange,
                        selectedIndex: this._yearIndex
                    }, o))));
                return Ln("div", {
                    className: this._cssClass,
                    ref: this._setEl,
                    style: this._dim,
                    onClick: be
                }, Ln("div", {
                    className: "mbsc-calendar-wrapper mbsc-flex-col mbsc-flex-1-1" + this._theme + this._hb + (e.hasContent || !e.showCalendar ? " mbsc-calendar-wrapper-fixed" : "")
                }, Ln("div", {
                    className: "mbsc-calendar-header" + this._theme + this._hb + (this._isVertical || a ? " mbsc-calendar-header-vertical" : ""),
                    ref: this._setHeader
                }, e.showControls && function() {
                    var t, a;
                    if (e.renderHeader) me(t = e.renderHeader()) && (t !== n._headerHTML && (n._headerHTML = t, n._shouldEnhanceHeader = !0), a = n._safeHtml(t));
                    else {
                        var s = n._pageNr > 1;
                        t = Ln(sn, null, Ln(ki, {
                            className: "mbsc-calendar-title-wrapper" + (s ? " mbsc-calendar-title-wrapper-multi" : "")
                        }), Ln(Ci, {
                            className: "mbsc-calendar-button-prev" + (s ? " mbsc-calendar-button-prev-multi" : "")
                        }), e.showToday && Ln(wi, {
                            className: "mbsc-calendar-header-today"
                        }), Ln(Si, {
                            className: "mbsc-calendar-button-next" + (s ? " mbsc-calendar-button-next-multi" : "")
                        }))
                    }
                    var i = Ln("div", {
                        className: "mbsc-calendar-controls" + n._theme,
                        dangerouslySetInnerHTML: a
                    }, t);
                    return Ln(gi.Provider, {
                        children: i,
                        value: {
                            instance: n
                        }
                    })
                }(), r), Ln("div", {
                    className: "mbsc-calendar-body mbsc-flex-col mbsc-flex-1-1" + this._theme,
                    ref: this._setBody,
                    onKeyDown: this._onKeyDown
                }, e.showCalendar && Ln("div", {
                    className: "mbsc-calendar-body-inner mbsc-flex-col mbsc-flex-1-1" + (a ? " mbsc-calendar-body-inner-variable" : "")
                }, this._isGrid ? Ln("div", {
                    "aria-hidden": i ? "true" : ie,
                    className: "mbsc-calendar-grid mbsc-flex-1-1 mbsc-flex-col" + this._theme + this._hb
                }, this._monthsMulti.map((function(t, a) {
                    return Ln("div", {
                        key: a,
                        className: "mbsc-calendar-grid-row mbsc-flex mbsc-flex-1-1"
                    }, t.map((function(t, a) {
                        return Ln("div", {
                            key: a,
                            className: "mbsc-calendar-grid-item mbsc-flex-col mbsc-flex-1-1" + n._theme
                        }, Ln("div", {
                            className: "mbsc-calendar-month-title" + n._theme
                        }, e.monthNames[new Date(t).getMonth()]), n._renderMonthView(t, {
                            isActive: !0
                        }))
                    })))
                }))) : a ? Ln("div", {
                    "aria-hidden": i ? "true" : ie,
                    className: "mbsc-calendar-slide mbsc-calendar-slide-active " + this._getPickerClass(ii)
                }, this._renderMonthView(+this._firstDay, {
                    dragData: e.dragData,
                    dragToCreate: e.dragToCreate,
                    dragToMove: e.dragToMove,
                    dragToResize: e.dragToResize,
                    isActive: !0,
                    onLabelUpdateEnd: e.onLabelUpdateEnd,
                    onLabelUpdateModeOff: e.onLabelUpdateModeOff,
                    onLabelUpdateModeOn: e.onLabelUpdateModeOn,
                    onLabelUpdateMove: e.onLabelUpdateMove,
                    onLabelUpdateStart: e.onLabelUpdateStart
                })) : e.selectView === ii && Ln("div", {
                    "aria-hidden": i ? "true" : ie,
                    className: this._getPickerClass(ii),
                    onAnimationEnd: this._onViewAnimationEnd
                }, Ln(Ei, s({}, o, {
                    itemNr: this._pageNr,
                    itemSize: t.pageSize / this._pageNr,
                    itemRenderer: this._renderMonth,
                    maxIndex: this._maxIndex,
                    minIndex: this._minIndex,
                    mouseSwipe: e.mouseSwipe,
                    onAnimationEnd: this._onAnimationEnd,
                    onGestureStart: this._onGestureStart,
                    onIndexChange: this._onPageChange,
                    onStart: this._onStart,
                    selectedIndex: this._pageIndex,
                    swipe: e.swipe
                }))), !this._hasPicker && l))), this.props.children, this._hasPicker && Ln(ni, {
                    anchor: this._pickerBtn,
                    closeOnScroll: !0,
                    contentPadding: !1,
                    context: e.context,
                    cssClass: "mbsc-calendar-popup",
                    display: "anchored",
                    isOpen: this._view !== ii,
                    locale: e.locale,
                    onClose: this._onPickerClose,
                    onOpen: this._onPickerOpen,
                    rtl: e.rtl,
                    scrollLock: !1,
                    showOverlay: !1,
                    theme: e.theme,
                    themeVariant: e.themeVariant
                }, Ln("div", {
                    onKeyDown: this._onKeyDown
                }, Ln("div", {
                    className: "mbsc-calendar-controls" + this._theme
                }, Ln("div", {
                    "aria-live": "polite",
                    className: "mbsc-calendar-picker-button-wrapper mbsc-calendar-title-wrapper" + this._theme
                }, Ln(js, {
                    className: "mbsc-calendar-button",
                    onClick: this._onPickerBtnClick,
                    theme: e.theme,
                    themeVariant: e.themeVariant,
                    type: "button",
                    variant: "flat"
                }, this._viewTitle, e.downIcon && Ln(Ba, {
                    svg: t.view === oi ? e.downIcon : e.upIcon,
                    theme: e.theme
                }))), Ln(js, {
                    className: "mbsc-calendar-button",
                    ariaLabel: e.prevPageText,
                    disabled: this._isPrevDisabled(!0),
                    iconSvg: this._prevIcon,
                    onClick: this.prevPage,
                    theme: e.theme,
                    themeVariant: e.themeVariant,
                    type: "button",
                    variant: "flat"
                }), Ln(js, {
                    className: "mbsc-calendar-button",
                    ariaLabel: e.nextPageText,
                    disabled: this._isNextDisabled(!0),
                    iconSvg: this._nextIcon,
                    onClick: this.nextPage,
                    theme: e.theme,
                    themeVariant: e.themeVariant,
                    type: "button",
                    variant: "flat"
                })), l)))
            }, t.prototype._updated = function() {
                e.prototype._updated.call(this), this._shouldEnhanceHeader && (zn(this._headerElement, {
                    view: this
                }), this._shouldEnhanceHeader = !1)
            }, t
        }(Gi),
        nr = function() {
            function e() {
                this.onInstanceReady = new h, this.onComponentChange = new h
            }
            return Object.defineProperty(e.prototype, "instance", {
                get: function() {
                    return this.inst
                },
                set: function(e) {
                    this.inst = e, this.onInstanceReady.next(e)
                },
                enumerable: !0,
                configurable: !0
            }), e
        }();

    function ar(e, t, n) {
        void 0 === n && (n = 0), n > 10 ? (delete e.__mbscTimer, t(e)) : (clearTimeout(e.__mbscTimer), e.__mbscTimer = setTimeout((function() {
            e.getInputElement ? e.getInputElement().then((function(a) {
                a ? (delete e.__mbscTimer, t(a)) : ar(e, t, n + 1)
            })) : ar(e, t, n + 1)
        }), 10))
    }

    function sr(e) {
        return e.getInputElement || e.tagName && "ion-input" === e.tagName.toLowerCase()
    }
    var ir = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t._nullSupport = !0, t._onInputClick = function(e) {
                    t.s.disabled || (t._focusElm = e.target, t._anchor = t.s.anchor || t._focusElm, t.open())
                }, t._onInputFocus = function(e) {
                    t._preventShow ? t._preventShow = !1 : t._onInputClick(e)
                }, t._onInputMouseDown = function(e) {
                    t._allowTyping || e.preventDefault()
                }, t._onInputKey = function(e) {
                    t._isOpen ? e.keyCode === Ys && t._allowTyping && e.stopPropagation() : (e.keyCode === Ps && e.preventDefault(), e.keyCode !== Ys && e.keyCode !== Ps || t._onInputClick(e))
                }, t._onInputChange = function(e, n) {
                    var a = e.detail || (n !== ie ? n : e.target.value);
                    if (a !== t._tempValueText && !t._preventChange) {
                        t._readValue(a, !0), t._valueTextChange = a !== t._tempValueText;
                        var s = _e(a) ? null : t._get(t._tempValueRep);
                        t.value = s, t._change(s)
                    }
                    t._preventChange = !1
                }, t._onResize = function(e) {
                    t._hook("onResize", e)
                }, t._onWrapperResize = function() {
                    t._wrapper && t._onResize({
                        windowWidth: t._wrapper.offsetWidth
                    })
                }, t._onPopupClose = function(e) {
                    /cancel|esc|overlay|scroll/.test(e.source) && t._hook("onCancel", {
                        value: t.value,
                        valueText: t._valueText
                    }), t.close()
                }, t._onPopupClosed = function(e) {
                    e.focus && (t._preventShow = !0), t._hook("onClosed", e), t._onClosed()
                }, t._onPopupKey = function(e) {
                    13 === e.keyCode && t._onEnterKey(e)
                }, t._onPopupOpen = function(e) {
                    e.value = t.value, e.valueText = t._valueText, t._hook("onOpen", e)
                }, t._onWinFocus = function() {
                    t._win.document.activeElement === t._focusElm && (t._preventShow = !0)
                }, t._onButtonClick = function(e) {
                    var n = e.domEvent,
                        a = e.button;
                    "set" === a.name && t.set(), t._popup && t._popup._onButtonClick({
                        domEvent: n,
                        button: a
                    })
                }, t._setInput = function(e) {
                    t._el = e && e.nativeElement ? e.nativeElement : e, t._isMbsc = !!e && e._mbsc
                }, t._setPopup = function(e) {
                    t._popup = e
                }, t._setWrapper = function(e) {
                    t._wrapper = e
                }, t
            }
            return a(t, e), t.prototype.open = function() {
                this._inst ? this._inst.open() : this.s.isOpen === ie && this.setState({
                    isOpen: !0
                })
            }, t.prototype.close = function() {
                if ("inline" !== this.s.display)
                    if (this._inst) this._inst.close();
                    else {
                        var e = {
                            value: this.value,
                            valueText: this._valueText
                        };
                        this.s.isOpen === ie && this.setState({
                            isOpen: !1
                        }), this._hook("onClose", e)
                    }
            }, t.prototype.set = function() {
                this._valueRep = this._copy(this._tempValueRep), this._valueText = this._tempValueText, this._value = this.value = this._get(this._valueRep), this._change(this.value)
            }, t.prototype.position = function() {
                this._inst ? this._inst.position() : this._popup && this._popup.position()
            }, t.prototype.isVisible = function() {
                return this._inst ? this._inst.isVisible() : !!this._popup && this._popup.isVisible()
            }, t.prototype.getVal = function() {
                return this._get(this._valueRep)
            }, t.prototype.setVal = function(e) {
                this.value = e, this.setState({
                    value: e
                })
            }, t.prototype.getTempVal = function() {
                return this._get(this._tempValueRep)
            }, t.prototype.setTempVal = function(e) {
                this._tempValueSet = !0, this._tempValueRep = this._parse(e), this._setOrUpdate(!0)
            }, t.prototype._shouldValidate = function(e, t) {
                return !1
            }, t.prototype._valueEquals = function(e, t) {
                return e === t
            }, t.prototype._render = function(e, t) {
                var n = this,
                    a = this.props || {},
                    s = this._respProps || {},
                    i = this._prevS,
                    r = e.inputTyping && !u && !this._touchUi;
                this._touchUi || (e.display = s.display || a.display || b.display || "anchored", e.showArrow = s.showArrow || a.showArrow || !1), "bubble" === e.display && (e.display = "anchored"), this._scrollLock = e.scrollLock;
                var o = e.isOpen !== ie ? e.isOpen : t.isOpen,
                    l = e.value !== ie ? e.value : t.value === ie ? e.defaultValue : t.value;
                if (this._showInput = e.showInput !== ie ? e.showInput : "inline" !== e.display && e.element === ie, (!this._buttons || e.buttons !== i.buttons || e.display !== i.display || e.setText !== i.setText || e.cancelText !== i.cancelText || e.closeText !== i.closeText || e.touchUi !== i.touchUi) && (this._buttons = Qs(this, e.buttons || ("inline" === e.display || "anchored" === e.display && !this._touchUi ? [] : ["cancel", "set"])), this._live = !0, this._buttons && this._buttons.length))
                    for (var c = 0, h = this._buttons; c < h.length; c++) {
                        var d = h[c];
                        "ok" !== d.name && "set" !== d.name || (this._live = !1)
                    }
                if (!this._valueEquals(l, this._value) || this._tempValueRep === ie || this._shouldValidate(e, i) || e.defaultSelection !== i.defaultSelection || e.invalid !== i.invalid || e.valid !== i.valid) {
                    this._readValue(l);
                    var m = this._get(this._tempValueRep),
                        _ = !(this._valueEquals(l, m) || this._nullSupport && _e(l));
                    this._setHeader(), clearTimeout(this._handler), this._handler = setTimeout((function() {
                        n.value = l, _ && n._change(m), n._valueEquals(n._tempValue, m) || n._inst !== ie || n._hook("onTempChange", {
                            value: m
                        })
                    }))
                }
                if (e.headerText !== i.headerText && this._setHeader(), o && !this._isOpen) {
                    if (!this._tempValueSet || this._live) {
                        var p = this._get(this._tempValueRep),
                            v = this._get(this._valueRep);
                        this._tempValueRep = this._copy(this._valueRep), this._tempValueText = this._format(this._tempValueRep), this._tempValue = p, this._setHeader(), this._valueEquals(p, v) || setTimeout((function() {
                            n._hook("onTempChange", {
                                value: v
                            })
                        }))
                    }
                    this._onOpen()
                }
                this._anchorAlign = e.anchorAlign || (this._touchUi ? "center" : "start"), this._cssClass = "mbsc-picker " + (e.cssClass || ""), this._isOpen = o, this._maxWidth = e.maxWidth, this._valueTextChange = this._valueTextChange || this._oldValueText !== this._valueText, this._oldValueText = this._valueText, this._value = l, this._shouldInitInput = this._shouldInitInput || e.display !== i.display || e.element !== i.element || e.showOnFocus !== i.showOnFocus || e.showOnClick !== i.showOnClick || this._allowTyping !== r, this._allowTyping = r
            }, t.prototype._updated = function() {
                var e = this,
                    t = this.s,
                    n = this._input;
                if (this._shouldInitInput && !this._inst) {
                    this._resetEl(this._prevS.display), this._shouldInitInput = !1;
                    var a = t.element || this._el;
                    a && (sr(a) ? ar(a, (function(t) {
                        e._el = t, e._initEl()
                    })) : a.vInput ? this._el = a.vInput.nativeElement : this._el = a), this._initEl()
                }
                this._valueTextChange && n && this._write(n), this._valueTextChange = !1, this._anchor = t.anchor || this._focusElm || t.element || this._el
            }, t.prototype._writeValue = function(e, t, n) {
                var a = e.value;
                return e.value = t, a !== t
            }, t.prototype._destroy = function() {
                this._resetEl(this.s.display), this._shouldInitInput = !0
            }, t.prototype._setHeader = function() {
                var e = this.s.headerText;
                this._headerText = e ? e.replace(/\{value\}/i, this._tempValueText || "&nbsp;") : ie
            }, t.prototype._setOrUpdate = function(e) {
                var t = this._get(this._tempValueRep);
                this._tempValue = t, this._tempValueText = this._format(this._tempValueRep), this._setHeader(), e || this._hook("onTempChange", {
                    value: t
                }), this._live ? this.set() : this.forceUpdate()
            }, t.prototype._copy = function(e) {
                return e
            }, t.prototype._format = function(e) {
                return e
            }, t.prototype._get = function(e) {
                return e
            }, t.prototype._parse = function(e, t) {
                return e
            }, t.prototype._validate = function() {}, t.prototype._onClosed = function() {}, t.prototype._onOpen = function() {}, t.prototype._onParse = function() {}, t.prototype._onEnterKey = function(e) {
                this.set(), this.close()
            }, t.prototype._change = function(e) {
                this.s.value === ie && this.setState({
                    value: e
                }), this._hook("onChange", {
                    value: e,
                    valueText: this._tempValueText
                })
            }, t.prototype._readValue = function(e, t) {
                this._tempValueRep = this._parse(e, t), this._onParse(), this._validate(), this._tempValueText = this._format(this._tempValueRep), this._valueRep = this._copy(this._tempValueRep), this._valueText = _e(e) ? "" : this._tempValueText
            }, t.prototype._initEl = function() {
                var e = this.s,
                    t = this._el;
                if (this._wrapper && "inline" === e.display && (this._observer = Js(this._wrapper, this._onWrapperResize, this._zone)), t && 1 === t.nodeType) {
                    var n = Kt(t, "input,select"),
                        a = t;
                    this._win = Rt(t), n && (this._input = a, this._readOnly = a.readOnly), "inline" !== e.display && (this._isMbsc || (this._unlisten = Ts(t, {
                        click: !0
                    })), (e.showOnClick || e.showOnFocus) && n && !this._allowTyping && (a.readOnly = !0), this._allowTyping && (a.autocomplete = "off"), e.showOnClick && (Ot(t, Xa, this._onInputClick), Ot(t, ts, this._onInputMouseDown), Ot(t, es, this._onInputKey)), e.showOnFocus && (Ot(this._win, Za, this._onWinFocus), Ot(t, Za, this._onInputFocus)), Ot(t, Ja, this._onInputChange)), n && this._write(a)
                }
            }, t.prototype._resetEl = function(e) {
                if ("inline" !== e) {
                    this._input && (this._input.readOnly = this._readOnly), this._unlisten && this._unlisten();
                    var t = this._el;
                    t && (Yt(t, Xa, this._onInputClick), Yt(t, ts, this._onInputMouseDown), Yt(t, es, this._onInputKey), Yt(t, Za, this._onInputFocus), Yt(t, Ja, this._onInputChange), Yt(this._win, Za, this._onWinFocus))
                }
                this._observer && (this._observer.detach(), this._observer = null)
            }, t.prototype._write = function(e) {
                var t = this,
                    n = this._value;
                this._writeValue(e, this._valueText || "", n) && setTimeout((function() {
                    t._preventChange = !0, Xt(e, Qa), Xt(e, Ja)
                }));
                var a = e.__mbscFormInst;
                a && a.setOptions({
                    pickerMap: this.s.valueMap,
                    pickerValue: n
                })
            }, t.defaults = {
                cancelText: "Cancel",
                closeText: "Close",
                okText: "Ok",
                setText: "Set"
            }, t
        }(Ua),
        rr = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t._instanceService = new nr, t._setCal = function(e) {
                    t._calendarView = e
                }, t
            }
            return a(t, e), t.prototype._template = function(e) {
                return Ln(tr, {
                    ref: this._setCal,
                    refDate: e.refDate,
                    activeDate: e.active,
                    amText: e.amText,
                    cssClass: this._className + " mbsc-flex-1-1 mbsc-calendar-" + e.display,
                    calendarScroll: e.calendarScroll,
                    calendarType: e.calendarType,
                    colors: e.colors,
                    context: e.context,
                    dataTimezone: e.dataTimezone,
                    displayTimezone: e.displayTimezone,
                    timezonePlugin: e.timezonePlugin,
                    downIcon: e.downIcon,
                    exclusiveEndDates: e.exclusiveEndDates,
                    hoverEnd: e.hoverEnd,
                    hoverStart: e.hoverStart,
                    invalid: e.invalid,
                    instanceService: this._instanceService,
                    isPicker: !0,
                    labels: e.labels,
                    marked: e.marked,
                    max: e.max,
                    min: e.min,
                    mousewheel: e.mousewheel,
                    nextIconH: e.nextIconH,
                    nextIconV: e.nextIconV,
                    nextPageText: e.nextPageText,
                    noOuterChange: e.selectRange,
                    onActiveChange: e.onActiveChange,
                    onCellHoverIn: e.onCellHoverIn,
                    onCellHoverOut: e.onCellHoverOut,
                    onDayClick: this._onDayClick,
                    onDayHoverIn: e.onDayHoverIn,
                    onDayHoverOut: e.onDayHoverOut,
                    onLabelClick: e.onLabelClick,
                    onPageChange: e.onPageChange,
                    onPageLoaded: e.onPageLoaded,
                    onPageLoading: e.onPageLoading,
                    onTodayClick: this._onTodayClick,
                    pages: e.pages,
                    pmText: e.pmText,
                    prevIconH: e.prevIconH,
                    prevIconV: e.prevIconV,
                    prevPageText: e.prevPageText,
                    renderDay: e.renderDay,
                    renderDayContent: e.renderDayContent,
                    renderHeader: e.renderCalendarHeader,
                    rangeEnd: e.rangeEnd,
                    rangeStart: e.rangeStart,
                    rtl: e.rtl,
                    selectedDates: this._tempValueRep,
                    selectView: e.selectView,
                    showCalendar: !0,
                    showControls: e.showControls,
                    showOuterDays: e.showOuterDays,
                    showToday: !1,
                    showWeekNumbers: e.showWeekNumbers,
                    size: e.size,
                    theme: e.theme,
                    themeVariant: e.themeVariant,
                    upIcon: e.upIcon,
                    valid: e.valid,
                    weeks: e.weeks,
                    width: e.width,
                    getDate: e.getDate,
                    getDay: e.getDay,
                    getMaxDayOfMonth: e.getMaxDayOfMonth,
                    getMonth: e.getMonth,
                    getWeekNumber: e.getWeekNumber,
                    getYear: e.getYear,
                    dateFormat: e.dateFormat,
                    dayNames: e.dayNames,
                    dayNamesMin: e.dayNamesMin,
                    dayNamesShort: e.dayNamesShort,
                    eventText: e.eventText,
                    eventsText: e.eventsText,
                    firstDay: e.firstDay,
                    fromText: e.fromText,
                    monthNames: e.monthNames,
                    monthNamesShort: e.monthNamesShort,
                    moreEventsPluralText: e.moreEventsPluralText,
                    moreEventsText: e.moreEventsText,
                    todayText: e.todayText,
                    toText: e.toText,
                    weekText: e.weekText,
                    yearSuffix: e.yearSuffix
                })
            }, t
        }(function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t._onDayClick = function(e) {
                    var n = t.s,
                        a = ua(n, e.date),
                        i = +a;
                    if (!e.disabled) {
                        if (n.selectMultiple) {
                            var r = t._tempValueRep;
                            r[i] ? delete r[i] : (n.selectMax === ie || Object.keys(r).length < n.selectMax) && (r[i] = a), t._tempValueRep = s({}, r)
                        } else n.selectRange || (t._tempValueRep = {}), t._tempValueRep[i] = a;
                        t._hook("onCellClick", e), t._setOrUpdate()
                    }
                }, t._onTodayClick = function() {
                    var e = new Date,
                        n = +e;
                    t.s.selectRange || t.s.selectMultiple || (t._tempValueRep = {}, t._tempValueRep[n] = e, t._setOrUpdate())
                }, t
            }
            return a(t, e), t.prototype._valueEquals = function(e, t) {
                return ba(e, t, this.s)
            }, t.prototype._shouldValidate = function(e, t) {
                return e.dataTimezone !== t.dataTimezone || e.displayTimezone !== t.displayTimezone
            }, t.prototype._copy = function(e) {
                return s({}, e)
            }, t.prototype._format = function(e) {
                var t = this.s,
                    n = [];
                for (var a in e) e[a] !== ie && null !== e[a] && n.push(ga(t.dateFormat, new Date(+e[a]), t));
                return t.selectMultiple || t.selectRange ? n.join(", ") : n[0]
            }, t.prototype._parse = function(e) {
                var t = this.s,
                    n = t.selectRange,
                    a = {},
                    s = [];
                me(e) ? s = e.split(",") : he(e) ? s = e : e && !he(e) && (s = [e]);
                for (var i = 0, r = s; i < r.length; i++) {
                    var o = r[i];
                    if (null !== o) {
                        var l = pa(o, t, t.dateFormat);
                        a[n ? +l : +na(l)] = l
                    }
                }
                return a
            }, t.prototype._get = function(e) {
                var t = this.s,
                    n = t.selectRange;
                if (this.s.selectMultiple || n) {
                    for (var a = [], s = 0, i = Object.keys(e); s < i.length; s++) {
                        var r = i[s];
                        a.push(_a(t, +e[r]))
                    }
                    return a
                }
                var o = Object.keys(e || {});
                return o.length ? _a(t, e[o[0]]) : null
            }, t.defaults = s({}, ci, {
                calendarScroll: "horizontal",
                calendarType: "month",
                selectedText: "{count} selected",
                showControls: !0,
                showOnClick: !0,
                weeks: 1
            }), t._name = "Calendar", t
        }(ir)),
        or = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t._onIndexChange = function(e) {
                    e.wheel = t.s.wheel, t._hook("onIndexChange", e)
                }, t._onItemClick = function(e) {
                    t._hook("onIndexChange", {
                        click: !0,
                        index: e.index,
                        wheel: t.s.wheel,
                        selected: e.selected
                    })
                }, t._onKeyDown = function(e) {
                    var n = 0;
                    e.keyCode === Ws ? n = -1 : e.keyCode === Bs && (n = 1);
                    var a = t.s,
                        s = a.activeIndex + n,
                        i = !(s < a.minIndex || s > a.maxIndex);
                    if (n && e.preventDefault(), n && i) {
                        var r = a.selectOnScroll ? "onIndexChange" : "onActiveChange";
                        t._shouldFocus = !0, t._hook(r, {
                            diff: n,
                            index: s,
                            wheel: a.wheel
                        })
                    } else e.keyCode === Ys && a.multiple && t._hook("onSet", {})
                }, t
            }
            return a(t, e), t.prototype._getText = function(e) {
                return e !== ie ? e.display !== ie ? e.display : e : ie
            }, t.prototype._getValue = function(e) {
                return e ? e.value !== ie ? e.value : e.display !== ie ? e.display : e : e
            }, t.prototype._isActive = function(e, t, n) {
                var a = this.s,
                    s = a.scroll3d && a.multiple ? n : !n;
                return a.activeIndex === e.key && t && s
            }, t.prototype._isSelected = function(e) {
                var t = this.s,
                    n = t.selectedValues,
                    a = this._getValue(e.data);
                return t.multiple ? !(!n || !n.indexOf) && n.indexOf(a) >= 0 : t.selectOnScroll ? e.key === t.selectedIndex : a !== ie && a === n
            }, t.prototype._isDisabled = function(e) {
                var t = this.s.disabled,
                    n = e && e.disabled,
                    a = this._getValue(e);
                return !!(n || t && t.get(a))
            }, t.prototype._render = function(e) {
                var t = e.rows,
                    n = e.itemHeight,
                    a = e.wheel._key,
                    s = 2 * Te((n - .03 * (n * t / 2 + 3)) / 2);
                this._items = e.wheel.getItem || e.wheel.data || [], this._batchSize3d = Te(1.8 * t), this._angle3d = 360 / (2 * this._batchSize3d), this._style = {
                    height: 2 * Te(t * n * (e.scroll3d ? 1.1 : 1) / 2)
                }, this._itemNr = e.wheel.spaceAround ? 1 : t, this._innerStyle = {
                    height: (e.scroll3d ? s : e.wheel.spaceAround ? n : n * t) + "px"
                }, this._wheelStyle = e.wheelWidth ? {
                    width: e.wheelWidth[a] || e.wheelWidth
                } : {
                    maxWidth: he(e.maxWheelWidth) ? e.maxWheelWidth[a] : e.maxWheelWidth,
                    minWidth: he(e.minWheelWidth) ? e.minWheelWidth[a] : e.minWheelWidth
                }, e.scroll3d && (this._innerStyle[It + "transform"] = "translateY(-50%) translateZ(" + (n * t / 2 + 3) + "px")
            }, t.prototype._updated = function() {
                if (this._shouldFocus) {
                    var e = this._el.querySelector('[tabindex="0"]');
                    e && setTimeout((function() {
                        e.focus()
                    })), this._shouldFocus = !1
                }
            }, t
        }(Ua),
        lr = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return a(t, e), t.prototype._template = function(e) {
                var t;
                if (e.renderItem && e.data !== ie) {
                    var n = e.renderItem(e.data),
                        a = me(n) ? {
                            __html: n
                        } : ie;
                    t = a ? Ln("div", {
                        dangerouslySetInnerHTML: a
                    }) : Ln("div", null, n)
                } else t = e.text;
                return Ln("div", {
                    "aria-disabled": e.disabled ? "true" : ie,
                    "aria-hidden": t === ie || e.is3d ? "true" : ie,
                    "aria-selected": e.selected ? "true" : ie,
                    ref: this._setEl,
                    tabIndex: e.active ? 0 : ie,
                    className: this._cssClass,
                    role: "option",
                    style: this._style,
                    onClick: this._onClick
                }, Ln("div", {
                    dangerouslySetInnerHTML: this.textParam
                }), e.checkmark && Ln("span", {
                    className: this._checkmarkClass
                }), t)
            }, t
        }(function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t._onClick = function() {
                    var e = t.s;
                    e.text === ie || e.isGroup || t._hook("onClick", {
                        index: e.index,
                        selected: e.selected,
                        disabled: e.disabled
                    })
                }, t
            }
            return a(t, e), t.prototype._mounted = function() {
                var e = this;
                this._unlisten = Ts(this._el, {
                    click: !0,
                    keepFocus: !1,
                    onBlur: function() {
                        e.setState({
                            hasFocus: !1
                        })
                    },
                    onFocus: function() {
                        e.setState({
                            hasFocus: !0
                        })
                    },
                    onHoverIn: function() {
                        e.s.text !== ie && e.setState({
                            hasHover: !0
                        })
                    },
                    onHoverOut: function() {
                        e.s.text !== ie && e.setState({
                            hasHover: !1
                        })
                    },
                    onKeyDown: function(t) {
                        (t.keyCode === Ps || !e.s.multiple && t.keyCode === Ys) && e._onClick()
                    },
                    onPress: function() {
                        e.s.text !== ie && e.setState({
                            isActive: !0
                        })
                    },
                    onRelease: function() {
                        e.s.text !== ie && e.setState({
                            isActive: !1
                        })
                    }
                })
            }, t.prototype._destroy = function() {
                this._unlisten()
            }, t.prototype._render = function(e, t) {
                var n = e.height;
                this._cssClass = "mbsc-scroller-wheel-" + (e.isGroup ? "header" : "item") + this._theme + this._rtl + (e.checkmark && !e.isGroup ? " mbsc-wheel-item-checkmark" : "") + (e.is3d ? " mbsc-scroller-wheel-item-3d" : "") + (e.scroll3d && !e.is3d ? " mbsc-scroller-wheel-item-2d" : "") + (e.selected && !e.is3d ? " mbsc-selected" : "") + (e.selected && e.is3d ? " mbsc-selected-3d" : "") + (e.disabled ? " mbsc-disabled" : "") + (e.multiple && !e.isGroup ? " mbsc-wheel-item-multi" : "") + (t.hasHover ? " mbsc-hover" : "") + (t.hasFocus ? " mbsc-focus" : "") + (t.isActive ? " mbsc-active" : ""), this._style = {
                    height: n,
                    lineHeight: n + "px"
                }, this._checkmarkClass = this._theme + this._rtl + " mbsc-wheel-checkmark" + (e.selected ? " mbsc-selected" : ""), e.is3d && (this._transform = "rotateX(" + (e.offset - e.index) * e.angle3d % 360 + "deg) translateZ(" + n * e.rows / 2 + "px)", this._style[It + "transform"] = this._transform)
            }, t
        }(Ua)),
        cr = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.renderer = function(e, n, a) {
                    var s = t.s;
                    if (e !== ie) {
                        var i = t._getText(e.data);
                        return Ln(lr, {
                            active: t._isActive(e, i, a),
                            angle3d: t._angle3d,
                            data: e.data,
                            disabled: t._isDisabled(e.data),
                            height: s.itemHeight,
                            index: e.key,
                            is3d: a,
                            isGroup: e.data && e.data.isGroup,
                            key: e.key,
                            multiple: s.multiple,
                            onClick: t._onItemClick,
                            offset: n,
                            checkmark: s.wheel.checkmark,
                            renderItem: s.renderItem,
                            rows: s.rows,
                            rtl: s.rtl,
                            scroll3d: s.scroll3d,
                            selected: t._isSelected(e),
                            text: i,
                            theme: s.theme
                        })
                    }
                    return null
                }, t
            }
            return a(t, e), t.prototype._template = function(e, t) {
                return Ln("div", {
                    "aria-multiselectable": e.multiple ? "true" : ie,
                    className: "mbsc-scroller-wheel-wrapper mbsc-scroller-wheel-wrapper-" + e.wheel._key + " " + (e.wheel.cssClass || "") + (e.scroll3d ? " mbsc-scroller-wheel-wrapper-3d" : "") + this._theme + this._rtl,
                    onKeyDown: this._onKeyDown,
                    ref: this._setEl,
                    role: "listbox",
                    style: this._wheelStyle
                }, Ln(Ei, {
                    batchSize3d: this._batchSize3d,
                    className: "mbsc-scroller-wheel" + (e.scroll3d ? " mbsc-scroller-wheel-3d" : "") + this._theme,
                    innerClass: "mbsc-scroller-wheel-cont mbsc-scroller-wheel-cont-" + e.display + (e.scroll3d ? " mbsc-scroller-wheel-cont-3d" : "") + (e.multiple ? " mbsc-scroller-wheel-multi" : "") + this._theme,
                    innerStyles: this._innerStyle,
                    items: this._items,
                    itemSize: e.itemHeight,
                    itemRenderer: this.renderer,
                    itemNr: this._itemNr,
                    margin: !0,
                    maxIndex: e.maxIndex,
                    minIndex: e.minIndex,
                    onIndexChange: this._onIndexChange,
                    offset: e.wheel._offset,
                    rtl: e.rtl,
                    scroll3d: e.scroll3d,
                    scrollBar: !this._touchUi,
                    selectedIndex: e.selectedIndex,
                    snap: !0,
                    spaceAround: e.wheel.spaceAround,
                    styles: this._style,
                    visibleSize: e.rows
                }))
            }, t
        }(or);

    function hr(e, t, n, a) {
        var s = e.min === ie ? -1 / 0 : e.min,
            i = e.max === ie ? 1 / 0 : e.max,
            r = mr(e, t),
            o = _r(e, r),
            l = o,
            c = o,
            h = 0,
            d = 0;
        if (n && n.get(o)) {
            for (; r - h >= s && n.get(l) && h < 100;) l = _r(e, r - ++h);
            for (; r + d < i && n.get(c) && d < 100;) c = _r(e, r + ++d);
            if (n.get(l) && n.get(c)) return o;
            o = (d < h && d && -1 !== a || !h || r - h < 0 || 1 === a) && !n.get(c) ? c : l
        }
        return o
    }

    function dr(e) {
        return e !== ie ? e.value !== ie ? e.value : e.display !== ie ? e.display : e : e
    }

    function ur(e, t) {
        if (e.getItem) return e.getItem(t);
        var n = e.data || [],
            a = n.length,
            s = t % a;
        return e._circular ? n[s >= 0 ? s : s + a] : n[ce(t, 0, a - 1)]
    }

    function mr(e, t) {
        var n = e.multiple ? t && t.length && t[0] || ie : t;
        return (e.getIndex ? +e.getIndex(t) : e._map.get(n)) || 0
    }

    function _r(e, t) {
        return dr(ur(e, t))
    }
    var pr = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return a(t, e), t.prototype._template = function(e) {
                var t = this,
                    n = e.renderPreContent ? e.renderPreContent(e.preContentData) : "",
                    a = e.renderInContent ? e.renderInContent(e.preContentData) : "",
                    s = Ln(sn, null, n, Ln("div", {
                        className: "mbsc-scroller mbsc-scroller-" + this._displayStyle + this._theme + this._rtl + (this._touchUi ? " mbsc-scroller-touch" : " mbsc-scroller-pointer") + ("inline" === e.display ? " mbsc-font " : " ") + this._className
                    }, a, this._wheels.map((function(n, a) {
                        return Ln("div", {
                            key: a,
                            className: "mbsc-scroller-wheel-group-cont" + (e.scroll3d ? " mbsc-scroller-wheel-group-cont-3d" : "") + t._theme
                        }, e.selectOnScroll && Ln("div", {
                            className: "mbsc-scroller-wheel-line" + t._theme,
                            style: t._lineStyle
                        }), Ln("div", {
                            className: "mbsc-scroller-wheel-group" + (e.scroll3d ? " mbsc-scroller-wheel-group-3d" : "") + t._theme
                        }, Ln("div", {
                            className: "mbsc-scroller-wheel-overlay mbsc-scroller-wheel-overlay-" + t._displayStyle + t._theme,
                            style: t._overlayStyle
                        }), n.map((function(n, a) {
                            return Ln(cr, {
                                activeIndex: t._activeIndexes[n._key],
                                disabled: t._disabled && t._disabled[n._key],
                                display: t._displayStyle,
                                key: a,
                                itemHeight: e.itemHeight,
                                onActiveChange: t._onActiveChange,
                                onIndexChange: t._onWheelIndexChange,
                                onSet: t._onSet,
                                maxIndex: n.max,
                                maxWheelWidth: e.maxWheelWidth,
                                minIndex: n.min,
                                minWheelWidth: e.minWheelWidth,
                                multiple: n.multiple,
                                renderItem: e.renderItem,
                                rows: t._rows,
                                scroll3d: t._scroll3d,
                                selectedIndex: t._indexes[n._key],
                                selectedValues: t._tempValueRep[n._key],
                                selectOnScroll: e.selectOnScroll,
                                theme: e.theme,
                                touchUi: e.touchUi,
                                rtl: e.rtl,
                                wheel: n,
                                wheelWidth: e.wheelWidth
                            })
                        }))))
                    }))));
                return ai(this, e, s)
            }, t
        }(function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t._indexes = [], t._activeIndexes = [], t._wheels = [], t._batches = [], t._lastIndexes = [], t._onSet = function() {
                    t._setOrUpdate()
                }, t._onActiveChange = function(e) {
                    var n = e.wheel,
                        a = e.index,
                        s = n._key;
                    t._activeIndexes[s] = a;
                    var i = t._indexes,
                        r = i[s];
                    t._scroll3d ? r = a : a - r >= t._rows ? r++ : a < r && r--, i[s] = r, t.forceUpdate()
                }, t._onWheelIndexChange = function(e) {
                    var n = t.s,
                        a = e.wheel,
                        s = a._key,
                        i = a.multiple,
                        r = _r(a, e.index),
                        o = t._disabled && t._disabled[s] && t._disabled[s].get(r),
                        l = [],
                        c = n.selectOnScroll;
                    (c || !e.click) && (t._lastIndexes[s] = t._indexes[s] = e.index, t._indexes.forEach((function(e, n) {
                        var a = t._wheelMap[n],
                            s = a.data ? a.data.length : 0;
                        t._batches[n] = s ? Ce(e / s) : 0, l[n] = s
                    }))), t._activeIndexes[s] = e.index;
                    var h = t._get(t._tempValueRep),
                        d = !!e.click && !o,
                        u = c || d;
                    if (i) {
                        if (d) {
                            var m = (t._tempValueRep[s] || []).slice();
                            !1 === e.selected ? m.push(r) : !0 === e.selected && m.splice(m.indexOf(r), 1), t._tempValueRep[s] = m
                        }
                    } else u && (t._tempValueRep[s] = r);
                    if (n.onWheelMove && e.index !== ie) {
                        var _ = n.onWheelMove({
                            dataItem: ur(a, e.index),
                            selection: u,
                            wheelIndex: s
                        });
                        _ && _.forEach((function(e, n) {
                            if (e !== ie && (t._tempValueRep[n] = e), !u) {
                                var a = t._wheelMap[n],
                                    s = mr(a, e);
                                t._constrainIndex(s, a)
                            }
                        }))
                    }
                    u && t._validate(s, e.diff > 0 ? 1 : -1), c && t._tempValueRep.forEach((function(e, n) {
                        var a = t._wheelMap[n],
                            s = a.data ? a.data.length : 0,
                            i = t._indexes[n],
                            r = mr(a, e) + t._batches[n] * s;
                        t._activeIndexes[n] = t._lastIndexes[n] = t._indexes[n] = r, a._offset = s !== l[n] ? r - i : 0
                    }));
                    var p = t._get(t._tempValueRep),
                        v = !t._valueEquals(h, p);
                    v || e.click && t._live && !t._valueEquals(t.value, p) ? t._setOrUpdate(!v) : t.forceUpdate(), t._live && d && a.closeOnTap && t.close()
                }, t
            }
            return a(t, e), t.prototype._initWheels = function() {
                var e = this,
                    t = 0,
                    n = this.s.wheels || [];
                this._wheelMap = [], n.forEach((function(n) {
                    n.forEach((function(n) {
                        e._initWheel(n, t), e._wheelMap[t] = n, t++
                    }))
                })), this._wheels = n
            }, t.prototype._shouldValidate = function(e, t) {
                return !!e.shouldValidate && e.shouldValidate(e, t)
            }, t.prototype._valueEquals = function(e, t) {
                return this.s.valueEquality ? this.s.valueEquality(e, t) : e === t
            }, t.prototype._render = function(t, n) {
                var a = this,
                    s = this.props || {},
                    i = this._respProps || {},
                    r = this._prevS,
                    o = !!this._touchUi && t.circular,
                    l = this._touchUi ? t.rows : i.rows || s.rows || 7;
                if (this._displayStyle = t.displayStyle || t.display, this._scroll3d = t.scroll3d && this._touchUi && Lt, (t.itemHeight !== r.itemHeight || l !== this._rows) && (this._rows = l, this._lineStyle = {
                        height: t.itemHeight + "px"
                    }, this._scroll3d)) {
                    var c = "translateZ(" + (t.itemHeight * l / 2 + 3) + "px";
                    this._overlayStyle = {}, this._overlayStyle[It + "transform"] = c, this._lineStyle[It + "transform"] = "translateY(-50%) " + c
                }
                t.wheels === r.wheels && o === this._circular || (this._batches = [], this._shouldSetIndex = !0, this._circular = o, this._initWheels()), e.prototype._render.call(this, t, n), this._shouldSetIndex && (this._setIndexes(), this._shouldSetIndex = this._indexFromValue = !1), t.wheels !== r.wheels && r.wheels !== ie && setTimeout((function() {
                    for (var e = 0, t = a._wheelMap; e < t.length; e++) {
                        var n = t[e];
                        a._onWheelIndexChange({
                            diff: 0,
                            index: a._indexes[n._key],
                            wheel: n
                        })
                    }
                }))
            }, t.prototype._writeValue = function(t, n, a) {
                return this.s.writeValue ? this.s.writeValue(t, n, a) : e.prototype._writeValue.call(this, t, n, a)
            }, t.prototype._copy = function(e) {
                return e.slice(0)
            }, t.prototype._format = function(e) {
                return this.s.formatValue ? this.s.formatValue(e) : e.join(" ")
            }, t.prototype._get = function(e) {
                return this.s.getValue ? this.s.getValue(e) : e
            }, t.prototype._parse = function(e) {
                if (this.s.parseValue) return this.s.parseValue(e);
                var t = [],
                    n = [],
                    a = 0;
                return null !== e && e !== ie && (n = (e + "").split(" ")), this._wheels.forEach((function(e) {
                    e.forEach((function(e) {
                        for (var s = e.data || [], i = s.length, r = dr(s[0]), o = 0; r != n[a] && o < i;) r = dr(s[o]), o++;
                        t.push(r), a++
                    }))
                })), t
            }, t.prototype._validate = function(e, t) {
                var n = this;
                if (this.s.validate) {
                    var a = this.s.validate.call(this._el, {
                        direction: t,
                        index: e,
                        values: this._tempValueRep.slice(0),
                        wheels: this._wheelMap
                    });
                    this._disabled = a.disabled, a.init && this._initWheels(), a.indexes && a.indexes.forEach((function(e, t) {
                        if (e !== ie) {
                            var a = n._wheelMap[t],
                                s = mr(a, e);
                            n._constrainIndex(s, a)
                        }
                    })), a.valid ? this._tempValueRep = a.valid.slice(0) : this._wheelMap.forEach((function(e, a) {
                        n._tempValueRep[a] = hr(e, n._tempValueRep[a], n._disabled && n._disabled[a], t)
                    }))
                }
            }, t.prototype._onOpen = function() {
                this._batches = [], this._shouldSetIndex = !0, this._indexFromValue = !0
            }, t.prototype._onParse = function() {
                this._shouldSetIndex = !0
            }, t.prototype._initWheel = function(e, t) {
                var n = this._circular;
                e._key = t, e._map = new Map, e._circular = n === ie ? e.circular === ie ? e.data && e.data.length > this._rows : e.circular : he(n) ? n[t] : n, e.data && (e.min = e._circular ? ie : 0, e.max = e._circular ? ie : e.data.length - 1, e.data.forEach((function(t, n) {
                    e._map.set(dr(t), n)
                })))
            }, t.prototype._setIndexes = function() {
                var e = this,
                    t = this._indexes || [];
                this._indexes = [], this._activeIndexes = [], this._tempValueRep.forEach((function(n, a) {
                    var s = e._wheelMap[a],
                        i = s.data ? s.data.length : 0,
                        r = mr(s, n);
                    if (e.s.selectOnScroll) e._activeIndexes[a] = e._indexes[a] = r + (e._batches[a] || 0) * i;
                    else {
                        var o = r;
                        e._indexFromValue || (o = t[a]) !== ie && (o = function(e, t) {
                            if (e.getItem && e.getIndex) return e.getIndex(dr(e.getItem(t)));
                            var n = (e.data || []).length,
                                a = t % n;
                            return n ? a >= 0 ? a : a + n : 0
                        }(s, o) + (e._batches[a] || 0) * i), e._constrainIndex(o, s)
                    }
                }))
            }, t.prototype._constrainIndex = function(e, t) {
                var n = t._key;
                e !== ie && t.data ? (t.spaceAround || (e = ce(e, 0, Math.max(t.data.length - this._rows, 0))), this._activeIndexes[n] = this._indexes[n] = e) : this._activeIndexes[n] = this._indexes[n] = this._lastIndexes[n] || 0
            }, t.defaults = {
                itemHeight: 40,
                rows: 5,
                selectOnScroll: !0,
                showOnClick: !0
            }, t._name = "Scroller", t
        }(ir)),
        vr = {
            ios: 50,
            material: 46,
            windows: 50
        },
        fr = ["a", "h", "i", "s", "tt"];

    function gr(e, t, n, a, s, i, r, o, l, c, h, d, u, m, _, p) {
        for (var v = oa(u, m), f = v || !oa(d, m) ? u : $n(e, u), g = v || !oa(d, u) ? m : Qn(e, m), y = i.a(f), b = i.a(g), x = !0, T = !0, D = !1, C = 0, S = 0, w = 0; w < n; w++) {
            var k = a[s[N = fr[w]]];
            if (k !== ie) {
                var M = x ? i[N](f) : 0,
                    E = T ? i[N](g) : r[N];
                t && 1 === w && (M += y ? 12 : 0, E += b ? 12 : 0, k += a[s.a] ? 12 : 0), (x || T) && M < k && k < E && (D = !0), k !== M && (x = !1), k !== E && (T = !1)
            }
        }
        if (!_) {
            for (w = n + 1; w < 4; w++) {
                var N;
                s[N = fr[w]] !== ie && (i[N](f) > 0 && x && (C = o[l]), i[N](g) < r[N] && T && (S = o[l]))
            }
            T && p && !S && (S = 999 !== g.getMilliseconds() ? o[l] : 0)
        }
        if (x || T || D)
            for (M = x && !D ? i[l](f) + C : 0, E = T && !D ? i[l](g) - S : r[l], w = M; w <= E; w += o[l]) c[h].set(w, !_)
    }

    function yr(e, t) {
        var n = new Date(e);
        return t ? Ce(+n / 864e5) : n.getMonth() + 12 * (n.getFullYear() - 1970)
    }

    function br(e) {
        return e.getFullYear() + "-" + xe(e.getMonth() + 1) + "-" + xe(e.getDate())
    }

    function xr(e) {
        return e.getMilliseconds()
    }

    function Tr(e) {
        return e.getHours() > 11 ? 1 : 0
    }
    var Dr = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t._preset = "datetime", t
            }
            return a(t, e), t
        }(function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t._setScroller = function(e) {
                    t._scroller = e
                }, t
            }
            return a(t, e), t.prototype._template = function(e, t) {
                return Ln(pr, s({}, e, {
                    formatValue: this._formatDate,
                    getValue: this._getDate,
                    minWheelWidth: this._minWheelWidth,
                    parseValue: this._parseDate,
                    ref: this._setScroller,
                    shouldValidate: this._shouldValidate,
                    validate: this._validate,
                    value: this._value,
                    valueEquality: this._valueEquals,
                    wheels: this._wheels,
                    onChange: this._onChange
                }), e.children)
            }, t
        }(function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t._preset = "date", t._innerValues = {}, t._onChange = function(e) {
                    t.s.value === ie && t.setState({
                        value: e.value
                    }), t._hook("onChange", e)
                }, t._parseDate = function(e) {
                    var n = t.s;
                    return e || (t._innerValues = {}), t._getArray(pa(e || n.defaultSelection || new Date, n, t._format), !!e)
                }, t._formatDate = function(e) {
                    var n = t._getDate(e);
                    return n ? ga(t._format, n, t.s) : ""
                }, t._getDate = function(e) {
                    var n, a, s = t.s,
                        i = t._getArrayPart,
                        r = t._wheelOrder,
                        o = new Date((new Date).setHours(0, 0, 0, 0));
                    if (null === e || e === ie) return null;
                    if (r.dd !== ie) {
                        var l = e[r.dd].split("-");
                        n = new Date(l[0], l[1] - 1, l[2])
                    }
                    r.tt !== ie && (a = n || o, a = new Date(a.getTime() + e[r.tt] % 86400 * 1e3));
                    var c = i(e, "y", n, o),
                        h = i(e, "m", n, o),
                        d = Math.min(i(e, "d", n, o), s.getMaxDayOfMonth(c, h)),
                        u = i(e, "h", a, o);
                    return s.getDate(c, h, d, t._hasAmPm && i(e, "a", a, o) ? u + 12 : u, i(e, "i", a, o), i(e, "s", a, o), i(e, "u", a, o))
                }, t._validate = function(e) {
                    var n = e.direction,
                        a = e.index,
                        s = e.values,
                        i = e.wheels,
                        r = [],
                        o = t.s,
                        l = o.stepHour,
                        c = o.stepMinute,
                        h = o.stepSecond,
                        d = o.mode || t._preset,
                        u = t._wheelOrder,
                        m = t._getDatePart,
                        _ = t._max,
                        p = t._min,
                        v = ua(o, t._getDate(s)),
                        f = o.getYear(v),
                        g = o.getMonth(v),
                        y = o.getDate(f, g - 1, 1),
                        b = o.getDate(f, g + 2, 1);
                    a !== u.y && a !== u.m && a !== u.d && a !== u.dd && a !== ie || (t._valids = Xi(o.valid, y, b, o, !0), t._invalids = Xi(o.invalid, y, b, o, !0));
                    var x = t._valids,
                        T = t._invalids,
                        D = $i(v, o, p ? +p : -1 / 0, _ ? +_ : 1 / 0, T, x, n),
                        C = t._getArray(D),
                        S = t._wheels && t._wheels[0][u.d],
                        w = m.y(D),
                        k = m.m(D),
                        M = o.getMaxDayOfMonth(w, k),
                        E = {
                            y: p ? p.getFullYear() : -1 / 0,
                            m: 0,
                            d: 1,
                            h: 0,
                            i: 0,
                            s: 0,
                            a: 0,
                            tt: 0
                        },
                        N = {
                            y: _ ? _.getFullYear() : 1 / 0,
                            m: 11,
                            d: 31,
                            h: De(t._hasAmPm ? 11 : 23, l),
                            i: De(59, c),
                            s: De(59, h),
                            a: 1,
                            tt: 86400
                        },
                        I = {
                            y: 1,
                            m: 1,
                            d: 1,
                            h: l,
                            i: c,
                            s: h,
                            a: 1,
                            tt: t._timeStep
                        },
                        L = !1,
                        H = !0,
                        O = !0;
                    if (["dd", "y", "m", "d", "tt", "a", "h", "i", "s"].forEach((function(e) {
                            var t = E[e],
                                n = N[e],
                                a = m[e](D),
                                s = u[e];
                            if (H && p && (t = m[e](p)), O && _ && (n = m[e](_)), a < t && (a = t), a > n && (a = n), "dd" === e || "tt" === e || "a" === e && s === ie || (H && (H = a === t), O && (O = a === n)), s !== ie) {
                                if (r[s] = new Map, "y" !== e && "dd" !== e)
                                    for (var i = E[e]; i <= N[e]; i += I[e])(i < t || i > n) && r[s].set(i, !0);
                                if ("d" === e && T)
                                    for (var l in T)
                                        if (!x || !x[l]) {
                                            var c = new Date(l),
                                                h = o.getYear(c),
                                                d = o.getMonth(c);
                                            h === w && d === k && Zi(o, c, T, x) && r[s].set(o.getDay(c), !0)
                                        }
                            }
                        })), /time/i.test(d)) {
                        var Y = T && T[ta(D)],
                            P = x && x[ta(D)];
                        fr.forEach((function(e, a) {
                            var s = u[e];
                            if (s !== ie) {
                                var l = o.valid ? P : Y;
                                if (l) {
                                    if (o.valid)
                                        for (var c = 0; c <= N[e]; c++) r[s].set(c, !0);
                                    for (var h = 0, d = l; h < d.length; h++) {
                                        var _ = d[h],
                                            p = _.start,
                                            v = _.end;
                                        p && v && gr(o, t._hasAmPm, a, C, u, m, N, I, e, r, s, D, p, v, !!o.valid, o.exclusiveEndDates)
                                    }
                                }
                                C[s] = hr(i[s], m[e](D), r[s], n)
                            }
                        }))
                    }
                    var F = t._dateDisplay;
                    if (S && (S.data.length !== M || /DDD/.test(F))) {
                        for (var z = [], V = F.replace(/[my|]/gi, "").replace(/DDDD/, "{dddd}").replace(/DDD/, "{ddd}").replace(/DD/, "{dd}").replace(/D/, "{d}"), R = 1; R <= M; R++) {
                            var A = o.getDate(w, k, R).getDay(),
                                W = V.replace(/{dddd}/, o.dayNames[A]).replace(/{ddd}/, o.dayNamesShort[A]).replace(/{dd}/, xe(R) + o.daySuffix).replace(/{d}/, R + o.daySuffix);
                            z.push({
                                display: W,
                                value: R
                            })
                        }
                        S.data = z, L = !0
                    }
                    return {
                        disabled: r,
                        init: L,
                        valid: C
                    }
                }, t._shouldValidate = function(e, t) {
                    return !!(e.min && +e.min != +t.min || e.max && +e.max != +t.max) || e.wheels !== t.wheels || e.dataTimezone !== t.dataTimezone || e.displayTimezone !== t.displayTimezone
                }, t._getYearValue = function(e) {
                    return {
                        display: (/yy/i.test(t._dateDisplay) ? e : (e + "").substr(2, 2)) + t.s.yearSuffix,
                        value: e
                    }
                }, t._getYearIndex = function(e) {
                    return +e
                }, t._getDateIndex = function(e) {
                    return yr(e, t._hasDay)
                }, t._getDateItem = function(e) {
                    var n = t.s,
                        a = t._hasDay,
                        s = new Date((new Date).setHours(0, 0, 0, 0)),
                        i = a ? new Date(864e5 * e) : new Date(1970, e, 1);
                    return a && (i = new Date(i.getUTCFullYear(), i.getUTCMonth(), i.getUTCDate())), {
                        disabled: a && Zi(n, i, t._invalids, t._valids),
                        display: s.getTime() === i.getTime() ? n.todayText : ga(t._dateTemplate, i, n),
                        value: br(i)
                    }
                }, t._getArrayPart = function(e, n, a, s) {
                    var i;
                    return t._wheelOrder[n] === ie || (i = +e[t._wheelOrder[n]], isNaN(i)) ? a ? t._getDatePart[n](a) : t._innerValues[n] !== ie ? t._innerValues[n] : t._getDatePart[n](s) : i
                }, t._getHours = function(e) {
                    var n = e.getHours();
                    return De(n = t._hasAmPm && n >= 12 ? n - 12 : n, t.s.stepHour)
                }, t._getMinutes = function(e) {
                    return De(e.getMinutes(), t.s.stepMinute)
                }, t._getSeconds = function(e) {
                    return De(e.getSeconds(), t.s.stepSecond)
                }, t._getFullTime = function(e) {
                    return De(Te((e.getTime() - new Date(e).setHours(0, 0, 0, 0)) / 1e3), t._timeStep || 1)
                }, t
            }
            return a(t, e), t.prototype.getVal = function() {
                return this._value
            }, t.prototype.setVal = function(e) {
                this._value = e, this.setState({
                    value: e
                })
            }, t.prototype.position = function() {
                this._scroller && this._scroller.position()
            }, t.prototype.isVisible = function() {
                return this._scroller && this._scroller.isVisible()
            }, t.prototype._valueEquals = function(e, t) {
                return ba(e, t, this.s)
            }, t.prototype._render = function(e, t) {
                var n = !1,
                    a = this._prevS,
                    s = e.dateFormat,
                    i = e.timeFormat,
                    r = e.mode || this._preset,
                    o = "datetime" === r ? s + e.separator + i : "time" === r ? i : s;
                this._value = e.value === ie ? t.value : e.value, this._minWheelWidth = e.minWheelWidth || ("datetime" === r ? vr[e.baseTheme || e.theme] : ie), this._dateWheels = e.dateWheels || ("datetime" === r ? e.dateWheelFormat : s), this._dateDisplay = e.dateWheels || e.dateDisplay, this._timeWheels = e.timeWheels || i, this._timeDisplay = this._timeWheels, this._format = o, this._hasAmPm = /h/.test(this._timeDisplay), this._getDatePart = {
                    y: e.getYear,
                    m: e.getMonth,
                    d: e.getDay,
                    h: this._getHours,
                    i: this._getMinutes,
                    s: this._getSeconds,
                    u: xr,
                    a: Tr,
                    dd: br,
                    tt: this._getFullTime
                }, +pa(a.min) != +pa(e.min) && (n = !0, this._min = _e(e.min) ? ie : pa(e.min, e, o)), +pa(a.max) != +pa(e.max) && (n = !0, this._max = _e(e.max) ? ie : pa(e.max, e, o)), (e.theme !== a.theme || e.mode !== a.mode || e.locale !== a.locale || e.dateWheels !== a.dateWheels || e.timeWheels !== a.timeWheels || n) && (this._wheels = this._getWheels())
            }, t.prototype._getWheels = function() {
                this._wheelOrder = {};
                var e, t = this.s,
                    n = t.mode || this._preset,
                    a = this._hasAmPm,
                    s = this._dateDisplay,
                    i = this._timeDisplay,
                    r = this._wheelOrder,
                    o = [],
                    l = [],
                    c = [],
                    h = 0;
                if (/date/i.test(n)) {
                    for (var d = 0, u = this._dateWheels.split(/\|/.test(this._dateWheels) ? "|" : ""); d < u.length; d++) {
                        var m = 0;
                        if ((y = u[d]).length)
                            if (/y/i.test(y) && m++, /m/i.test(y) && m++, /d/i.test(y) && m++, m > 1 && r.dd === ie) r.dd = h, h++, l.push(this._getDateWheel(y)), c = l;
                            else if (/y/i.test(y) && r.y === ie) r.y = h, h++, l.push({
                            cssClass: "mbsc-datetime-year-wheel",
                            getIndex: this._getYearIndex,
                            getItem: this._getYearValue,
                            max: this._max ? t.getYear(this._max) : ie,
                            min: this._min ? t.getYear(this._min) : ie,
                            spaceAround: !0
                        });
                        else if (/m/i.test(y) && r.m === ie) {
                            r.m = h, e = [], h++;
                            for (var _ = s.replace(/[dy|]/gi, "").replace(/MMMM/, "{mmmm}").replace(/MMM/, "{mmm}").replace(/MM/, "{mm}").replace(/M/, "{m}"), p = 0; p < 12; p++) {
                                var v = _.replace(/{mmmm}/, t.monthNames[p]).replace(/{mmm}/, t.monthNamesShort[p]).replace(/{mm}/, xe(p + 1) + (t.monthSuffix || "")).replace(/{m}/, p + 1 + (t.monthSuffix || ""));
                                e.push({
                                    display: v,
                                    value: p
                                })
                            }
                            l.push({
                                cssClass: "mbsc-datetime-month-wheel",
                                data: e,
                                spaceAround: !0
                            })
                        } else if (/d/i.test(y) && r.d === ie) {
                            r.d = h, e = [], h++;
                            for (p = 1; p < 32; p++) e.push({
                                display: (/dd/i.test(s) ? xe(p) : p) + t.daySuffix,
                                value: p
                            });
                            l.push({
                                cssClass: "mbsc-datetime-day-wheel",
                                data: e,
                                spaceAround: !0
                            })
                        }
                    }
                    o.push(l)
                }
                if (/time/i.test(n)) {
                    for (var f = 0, g = this._timeWheels.split(/\|/.test(this._timeWheels) ? "|" : ""); f < g.length; f++) {
                        var y;
                        m = 0;
                        if ((y = g[f]).length && (/h/i.test(y) && m++, /m/i.test(y) && m++, /s/i.test(y) && m++, /a/i.test(y) && m++), m > 1 && r.tt === ie) r.tt = h, h++, c.push(this._getTimeWheel(y));
                        else if (/h/i.test(y) && r.h === ie) {
                            e = [], r.h = h, h++;
                            for (p = 0; p < (a ? 12 : 24); p += t.stepHour) e.push({
                                display: a && 0 === p ? 12 : /hh/i.test(i) ? xe(p) : p,
                                value: p
                            });
                            c.push({
                                cssClass: "mbsc-datetime-hour-wheel",
                                data: e,
                                spaceAround: !0
                            })
                        } else if (/m/i.test(y) && r.i === ie) {
                            e = [], r.i = h, h++;
                            for (p = 0; p < 60; p += t.stepMinute) e.push({
                                display: /mm/i.test(i) ? xe(p) : p,
                                value: p
                            });
                            c.push({
                                cssClass: "mbsc-datetime-minute-wheel",
                                data: e,
                                spaceAround: !0
                            })
                        } else if (/s/i.test(y) && r.s === ie) {
                            e = [], r.s = h, h++;
                            for (p = 0; p < 60; p += t.stepSecond) e.push({
                                display: /ss/i.test(i) ? xe(p) : p,
                                value: p
                            });
                            c.push({
                                cssClass: "mbsc-datetime-second-wheel",
                                data: e,
                                spaceAround: !0
                            })
                        } else /a/i.test(y) && r.a === ie && (r.a = h, h++, c.push({
                            cssClass: "mbsc-dt-whl-a",
                            data: /A/.test(y) ? [{
                                display: t.amText.toUpperCase(),
                                value: 0
                            }, {
                                display: t.pmText.toUpperCase(),
                                value: 1
                            }] : [{
                                display: t.amText,
                                value: 0
                            }, {
                                display: t.pmText,
                                value: 1
                            }],
                            spaceAround: !0
                        }))
                    }
                    c !== l && o.push(c)
                }
                return o
            }, t.prototype._getDateWheel = function(e) {
                var t = /d/i.test(e);
                return this._hasDay = t, this._dateTemplate = e, {
                    cssClass: "mbsc-datetime-date-wheel",
                    getIndex: this._getDateIndex,
                    getItem: this._getDateItem,
                    label: "",
                    max: this._max ? yr(br(this._max), t) : ie,
                    min: this._min ? yr(br(this._min), t) : ie,
                    spaceAround: !0
                }
            }, t.prototype._getTimeWheel = function(e) {
                var t = this.s,
                    n = [],
                    a = 1;
                /s/i.test(e) ? a = t.stepSecond : /m/i.test(e) ? a = 60 * t.stepMinute : /h/i.test(e) && (a = 3600 * t.stepHour), this._timeStep = a;
                for (var s = 0; s < 86400; s += a) {
                    var i = new Date((new Date).setHours(0, 0, 0, 0) + 1e3 * s);
                    n.push({
                        display: ga(e, i, t),
                        value: s
                    })
                }
                return {
                    data: n,
                    label: "",
                    spaceAround: !0
                }
            }, t.prototype._getArray = function(e, t) {
                var n = [],
                    a = this._wheelOrder;
                if (null === e || e === ie) return n;
                for (var s = 0, i = ["y", "m", "d", "a", "h", "i", "s", "u", "dd", "tt"]; s < i.length; s++) {
                    var r = i[s],
                        o = this._getDatePart[r](e);
                    a[r] !== ie && (n[a[r]] = o), t && (this._innerValues[r] = o)
                }
                return n
            }, t.defaults = s({}, Kn, {
                dateDisplay: "MMMMDDYYYY",
                dateWheelFormat: "|DDD MMM D|",
                stepHour: 1,
                stepMinute: 1,
                stepSecond: 1
            }), t._name = "Datetime", t
        }(Ua))),
        Cr = En({}),
        Sr = {};

    function wr(e, t) {
        return Sr[e] || (Sr[e] = {
            change: new h,
            selectedIndex: -1
        }), Sr[e].change.subscribe(t)
    }

    function kr(e, t) {
        var n = Sr[e];
        n && (n.change.unsubscribe(t), n.change.nr || delete Sr[e])
    }

    function Mr(e, t, n) {
        var a = Sr[e];
        a && (n !== ie && (a.selectedIndex = n), t !== ie && (a.value = t), a.change.next(a.value))
    }

    function Er(e) {
        return Sr[e] && Sr[e].selectedIndex
    }
    var Nr = 1,
        Ir = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return a(t, e), t.prototype._template = function(e) {
                var t = {
                        color: e.color,
                        disabled: e.disabled,
                        name: this._name,
                        onChange: this._onChange,
                        select: e.select,
                        value: e.value
                    },
                    n = Ln("div", {
                        className: this._groupClass,
                        ref: this._setEl
                    }, e.children);
                return Ln(Cr.Provider, {
                    children: n,
                    value: t
                })
            }, t
        }(function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t._id = "mbsc-segmented-group" + Nr++, t._onChange = function(e, n) {
                    var a = t.s,
                        s = t.value;
                    if ("multiple" === a.select) {
                        if (s !== ie) {
                            var i = (s = s || []).indexOf(n); - 1 !== i ? s.splice(i, 1) : s.push(n), t.value = s.slice()
                        }
                    } else t.value = n;
                    a.onChange && a.onChange(e)
                }, t
            }
            return a(t, e), t.prototype._setupDrag = function() {
                var e, t, n, a, s, i, r = this,
                    o = [],
                    l = [];
                this._unlisten = Ts(this._el, {
                    onEnd: function() {
                        n && a !== s && !o[a] && r._el.querySelectorAll(".mbsc-segmented-input")[a].click();
                        n = !1, r.setState({
                            dragging: !1
                        })
                    },
                    onMove: function(s) {
                        if (n) {
                            for (var c = Math.min(Math.max(s.endX - t, 0), e), h = 0, d = l[0]; c > d && l.length > h + 1;) h++, d += l[h];
                            (h = r.s.rtl ? l.length - 1 - h : h) === a || o[h] || Mr(i, ie, a = h)
                        }
                    },
                    onStart: function(c) {
                        var h = Jt(c.domEvent.target, ".mbsc-segmented-item", r._el);
                        if (h) {
                            var d = h.querySelector(".mbsc-segmented-input");
                            if (d.classList.contains("mbsc-selected")) {
                                o = [], Gt(r._el.querySelectorAll(".mbsc-segmented-button"), (function(e) {
                                    o.push(e.classList.contains("mbsc-disabled"))
                                })), l = [], Gt(r._el.querySelectorAll(".mbsc-segmented-item"), (function(e) {
                                    l.push(e.clientWidth)
                                }));
                                e = r._el.clientWidth - 30, t = jt(r._el).left + 15, i = d.name, a = Er(i), s = a, l.length && "radio" === d.type && (n = !0, r.setState({
                                    dragging: !0
                                }))
                            }
                        }
                    }
                })
            }, t.prototype._cleanupDrag = function() {
                this._unlisten && (this._unlisten(), this._unlisten = null)
            }, t.prototype._render = function(e) {
                this._name = e.name === ie ? this._id : e.name, this._groupClass = "mbsc-segmented " + this._className + this._theme + this._rtl + (e.color ? " mbsc-segmented-" + e.color : "") + (this.state.dragging ? " mbsc-segmented-dragging" : "")
            }, t.prototype._updated = function() {
                this.s.drag && "multiple" !== this.s.select ? this._unlisten || this._setupDrag() : this._cleanupDrag()
            }, t.prototype._destroy = function() {
                this._cleanupDrag()
            }, t.defaults = {
                select: "single"
            }, t._name = "SegmentedGroup", t
        }(Ua)),
        Lr = 1,
        Hr = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t._setBox = function(e) {
                    t._box = e
                }, t
            }
            return a(t, e), Object.defineProperty(t.prototype, "checked", {
                get: function() {
                    return this._checked
                },
                set: function(e) {
                    this._toggle(e)
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype._template = function(e, t) {
                var n = this;
                return Ln(Cr.Consumer, null, (function(a) {
                    return n._groupOptions(a), Ln("label", {
                        className: n._cssClass
                    }, Ln("input", {
                        ref: n._setEl,
                        "aria-labelledby": n._id,
                        checked: n._checked,
                        className: "mbsc-segmented-input mbsc-reset " + (e.inputClass || "") + n._theme + (n._checked ? " mbsc-selected" : ""),
                        disabled: n._disabled,
                        name: n._isMultiple ? e.name : n._name,
                        onChange: be,
                        type: n._isMultiple ? "checkbox" : "radio",
                        value: n._value
                    }), Ln("div", {
                        ref: n._setBox,
                        className: "mbsc-segmented-selectbox" + n._theme + (n._animate ? " mbsc-segmented-selectbox-animate" : "") + (n._checked ? " mbsc-selected" : "")
                    }, Ln("div", {
                        className: "mbsc-segmented-selectbox-inner" + n._theme + (n._index === n._selectedIndex || n._checked ? " mbsc-segmented-selectbox-inner-visible" : "") + (n._checked ? " mbsc-selected" : "")
                    })), Ln(js, {
                        "aria-hidden": !0,
                        ariaLabel: e.ariaLabel,
                        className: "mbsc-segmented-button" + (n._checked ? " mbsc-selected" : "") + (t.hasFocus ? " mbsc-focus" : ""),
                        color: n._color,
                        disabled: n._disabled,
                        endIcon: e.endIcon,
                        endIconSrc: e.endIconSrc,
                        endIconSvg: e.endIconSvg,
                        icon: e.icon,
                        iconSrc: e.iconSrc,
                        iconSvg: e.iconSvg,
                        id: n._id,
                        ripple: e.ripple,
                        rtl: e.rtl,
                        role: "none",
                        startIcon: e.startIcon,
                        startIconSrc: e.startIconSrc,
                        startIconSvg: e.startIconSvg,
                        tag: "span",
                        tabIndex: -1,
                        theme: e.theme,
                        themeVariant: e.themeVariant
                    }, e.children))
                }))
            }, t
        }(function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t._id = "mbsc-segmented-" + Lr++, t._onChange = function(e) {
                    var n = t.s,
                        a = e.target.checked;
                    a !== t._checked && (t._change(a), t._onGroupChange && t._onGroupChange(e, t._value), t._toggle(a), n.onChange && n.onChange(e))
                }, t._onValueChange = function(e) {
                    var n = t.s,
                        a = t._isMultiple ? e && -1 !== e.indexOf(t._value) : e === t._value;
                    n.checked === ie && a !== t.state.selected ? t.setState({
                        selected: a
                    }) : t.forceUpdate(), t._change(a)
                }, t
            }
            return a(t, e), t.prototype._change = function(e) {}, t.prototype._toggle = function(e) {
                this.s.checked === ie && this.setState({
                    selected: e
                })
            }, t.prototype._groupOptions = function(e) {
                var t = this,
                    n = e.color,
                    a = e.disabled,
                    s = e.name,
                    i = e.onChange,
                    r = e.select,
                    o = e.value,
                    l = this.s,
                    c = this.state,
                    h = this._checked,
                    d = l.checked !== ie ? fe(l.checked) : c.selected === ie ? fe(l.defaultChecked) : c.selected;
                this._value = l.value === ie ? this._id : l.value, this._onGroupChange = i, this._isMultiple = "multiple" === (r || l.select), this._name = s === ie ? l.name : s, this._disabled = a === ie ? l.disabled === ie ? c.disabled : fe(l.disabled) : fe(a), this._color = n === ie ? l.color : n, this._checked = o === ie ? d : this._isMultiple ? o && -1 !== o.indexOf(this._value) : o === this._value, this._name && !this._unsubscribe && (this._unsubscribe = wr(this._name, this._onValueChange)), this._isMultiple || h || !this._checked || setTimeout((function() {
                    t._checked && Mr(t._name, t._value, t._index)
                })), this._selectedIndex = Er(this._name), this._cssClass = "mbsc-segmented-item " + this._className + this._theme + this._rtl + (this._checked ? " mbsc-segmented-item-checked" : "") + (c.hasFocus ? " mbsc-focus" : "") + (this._index === this._selectedIndex || this._index === ie && this._checked || this._isMultiple && this._checked ? " mbsc-segmented-item-selected" : "")
            }, t.prototype._mounted = function() {
                var e = this;
                Ot(this._el, Xa, this._onChange), this._unlisten = Ts(this._el, {
                    onBlur: function() {
                        e.setState({
                            hasFocus: !1
                        })
                    },
                    onFocus: function() {
                        e.setState({
                            hasFocus: !0
                        })
                    }
                })
            }, t.prototype._updated = function() {
                if (!this._isMultiple) {
                    var e = Jt(this._el, ".mbsc-segmented"),
                        t = -1,
                        n = -1;
                    if (e)
                        for (var a = e.querySelectorAll('.mbsc-segmented-input[name="' + this._name + '"]'), s = 0; s < a.length; s++) a[s] === this._el && (t = s), a[s].checked && (n = s);
                    this._index !== t && -1 !== n && function(e, t) {
                        Sr[e] && (Sr[e].selectedIndex = t)
                    }(this._name, n), -1 !== this._selectedIndex && (this._box.style.transform = "translateX(" + (this.s.rtl ? -1 : 1) * (this._selectedIndex - t) * 100 + "%)", this._animate = !0), -1 !== t && (this._index = t)
                }
            }, t.prototype._destroy = function() {
                kr(this._name, this._unsubscribe), Yt(this._el, Xa, this._onChange), this._unlisten()
            }, t.defaults = {
                select: "single"
            }, t._name = "Segmented", t
        }(Ua));

    function Or(e) {
        var t = e.disabled,
            n = e.selected,
            a = e.theme,
            s = e.timeSlot,
            i = e.onClick,
            r = e.onKeyDown;
        return Ln("div", {
            className: "mbsc-timegrid-item" + (n ? " mbsc-selected" : "") + (t ? " mbsc-disabled" : "") + a,
            onClick: function() {
                return i(s)
            },
            onKeyDown: r,
            tabIndex: t ? ie : 0,
            "data-timeslot": s.value
        }, s.formattedValue)
    }
    var Yr, Pr = function(e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t._setCont = function(e) {
                t._gridContEl = e && e.parentElement
            }, t
        }
        return a(t, e), t.prototype._template = function(e) {
            var t = this;
            return Ln("div", {
                className: this._cssClass,
                ref: this._setCont
            }, this._timeSlots.map((function(e, n) {
                return Ln("div", {
                    className: "mbsc-timegrid-row",
                    key: n
                }, e.map((function(e, a) {
                    var s = t._isDisabled(e.value);
                    return Ln("div", {
                        className: "mbsc-timegrid-cell" + (s ? " mbsc-disabled" : ""),
                        key: a
                    }, Ln("div", {
                        dangerouslySetInnerHTML: t.textParamMulti(3 * n + a)
                    }), Ln(Or, {
                        disabled: s,
                        onKeyDown: t._onKeyDown,
                        selected: t._value === e.value,
                        timeSlot: e,
                        onClick: t._setTime,
                        theme: t._theme
                    }))
                })))
            })))
        }, t
    }(function(e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t._setTime = function(e) {
                t._hook("onChange", {
                    value: _a(t.s, e.value)
                })
            }, t._isDisabled = function(e) {
                if (e) {
                    var n = ta(_a(t.s, e)),
                        a = t._invalids && t._invalids[n],
                        s = t._valids && t._valids[n],
                        i = t.s.exclusiveEndDates;
                    if (s) {
                        for (var r = 0, o = s; r < o.length; r++) {
                            var l = o[r],
                                c = l.end && (i ? e < +l.end : e <= +l.end);
                            if (l.start && e >= +l.start && c || l.allDay) return !1
                        }
                        return !0
                    }
                    if (a) {
                        for (var h = 0, d = a; h < d.length; h++) {
                            var u = d[h];
                            c = u.end && (i ? e < +u.end : e <= +u.end);
                            if (u.start && e >= +u.start && c || u.allDay) return !0
                        }
                        return !1
                    }
                }
                return !1
            }, t._onKeyDown = function(e) {
                switch (e.keyCode) {
                    case Ps:
                        e.target.click(), e.preventDefault()
                }
            }, t
        }
        return a(t, e), t.prototype._render = function(e, t) {
            var n = this,
                a = this._prevS;
            this._cssClass = "mbsc-timegrid-container mbsc-font" + this._theme + this._rtl;
            var s = e.min !== a.min,
                i = e.max !== a.max,
                r = e.timeFormat,
                o = a.value && !e.value || e.value && +e.value !== this._value;
            s && (this._min = _e(e.min) ? ie : pa(e.min, e, r)), i && (this._max = _e(e.max) ? ie : pa(e.max, e, r));
            var l = na(e.value || _a(e)),
                c = Ta(l, 1),
                h = this._selectedDate !== +l,
                d = e.invalid !== a.invalid,
                u = e.valid !== a.valid;
            (d || h) && (this._invalids = Xi(e.invalid, l, c, e, !0)), (u || h) && (this._valids = Xi(e.valid, l, c, e, !0)), o && (this._value = e.value && +e.value);
            var m = h || d || s || i || r !== a.timeFormat;
            if (m) {
                this._selectedDate = +l;
                var _ = Math.max(+l, +(this._min || -1 / 0)),
                    p = Math.min(+c, +(this._max || 1 / 0) + 1),
                    v = 36e5 * e.stepHour + 6e4 * e.stepMinute;
                this._timeSlots = [], this._validTimes = [];
                for (var f = [], g = 0, y = +l; y < +c; y += v)
                    if (p >= _ ? y >= _ && y < p : y >= _ || y < p) {
                        var b = {
                            formattedValue: ga(r, _a(e, y), e),
                            value: y
                        };
                        f.push(b), 2 === g && (this._timeSlots.push(f), f = [], g = -1), this._isDisabled(y) || this._validTimes.push(b), g++
                    }
                f.length && this._timeSlots.push(f)
            }
            if (this._isDisabled(this._value) || (o || m) && -1 === function(e, t) {
                    return Ne(e, t, !0)
                }(this._validTimes, (function(e) {
                    return e.value === n._value
                }))) {
                var x = function(e, t) {
                    if (null == t || !e.length) return null;
                    for (var n = 0; n < e.length && t >= e[n];) n++;
                    if (n === e.length) return e[n - 1];
                    if (0 === n) return e[0];
                    var a = e[n - 1],
                        s = e[n];
                    return t - a < s - t ? a : s
                }(this._validTimes.map((function(e) {
                    return e.value
                })), this._value);
                x && (clearTimeout(this._validationHandle), this._validationHandle = setTimeout((function() {
                    var e = Ee(n._validTimes, (function(e) {
                        return e.value === x
                    }));
                    n._setTime(e)
                })))
            } else m && clearTimeout(this._validationHandle);
            this._valueChanged = this._valueChanged || o
        }, t.prototype._updated = function() {
            if (this._value !== ie && (this._valueChanged || this._isOpen !== this.s.isOpen && this.s.isOpen)) {
                var e = this._lastValue !== ie,
                    t = this._gridContEl,
                    n = t.querySelector('[data-timeslot="' + this._value + '"]');
                n && setTimeout((function() {
                    var a = n.getBoundingClientRect(),
                        s = a.top,
                        i = a.height,
                        r = t.getBoundingClientRect(),
                        o = r.top,
                        l = r.height,
                        c = Vt(t);
                    (s + i > o + l || s < o) && Bt(t, ie, s - o + c - 5, e)
                })), this._valueChanged = !1, this._lastValue = this._value
            }
            this._isOpen = this.s.isOpen
        }, t.defaults = s({}, Kn, {
            stepHour: 0,
            stepMinute: 30
        }), t._name = "Timegrid", t
    }(Ua));

    function Fr(e) {
        return Yr || (Yr = Vr.luxon.DateTime.local().zoneName), e && "local" !== e ? e : Yr
    }
    var zr = function() {
            function e(e, t) {
                void 0 === t && (t = "utc"), this._mbsc = !0, t = Fr(t);
                var n = Vr.luxon.DateTime,
                    a = {
                        zone: t
                    };
                if (this.zone = t, pe(e)) this.dt = n.utc().setZone(t);
                else if (ha(e) || ue(e)) this.dt = n.fromMillis(+e, a);
                else if (me(e)) this.dt = n.fromISO(e, a);
                else if (he(e)) {
                    for (var i = ["year", "month", "day", "hour", "minute", "second", "millisecond"], r = {}, o = 0; o < e.length && o < 7; o++) r[i[o]] = e[o] + (1 === o ? 1 : 0);
                    1 === n.fromObject.length ? this.dt = n.fromObject(s({}, r, a)) : this.dt = n.fromObject(r, a)
                }
            }
            return e.prototype.clone = function() {
                return new e(this, this.zone)
            }, e.prototype.createDate = function(e, t, n, a, s, i, r) {
                return Vr.createDate({
                    displayTimezone: this.zone
                }, e, t, n, a, s, i, r)
            }, e.prototype[Symbol.toPrimitive] = function(e) {
                return this.dt.toJSDate()[Symbol.toPrimitive](e)
            }, e.prototype.toDateString = function() {
                return this.dt.toFormat("ccc MMM dd yyyy")
            }, e.prototype.toISOString = function() {
                return this.dt.toISO()
            }, e.prototype.toJSON = function() {
                return this.dt.toISO()
            }, e.prototype.valueOf = function() {
                return this.dt.valueOf()
            }, e.prototype.getDate = function() {
                return this.dt.day
            }, e.prototype.getDay = function() {
                return this.dt.weekday % 7
            }, e.prototype.getFullYear = function() {
                return this.dt.year
            }, e.prototype.getHours = function() {
                return this.dt.hour
            }, e.prototype.getMilliseconds = function() {
                return this.dt.millisecond
            }, e.prototype.getMinutes = function() {
                return this.dt.minute
            }, e.prototype.getMonth = function() {
                return this.dt.month - 1
            }, e.prototype.getSeconds = function() {
                return this.dt.second
            }, e.prototype.getTime = function() {
                return this.valueOf()
            }, e.prototype.getTimezoneOffset = function() {
                return -this.dt.offset
            }, e.prototype.getUTCDate = function() {
                return this.dt.toUTC().day
            }, e.prototype.getUTCDay = function() {
                return this.dt.toUTC().weekday % 7
            }, e.prototype.getUTCFullYear = function() {
                return this.dt.toUTC().year
            }, e.prototype.getUTCHours = function() {
                return this.dt.toUTC().hour
            }, e.prototype.getUTCMilliseconds = function() {
                return this.dt.toUTC().millisecond
            }, e.prototype.getUTCMinutes = function() {
                return this.dt.toUTC().minute
            }, e.prototype.getUTCMonth = function() {
                return this.dt.toUTC().month - 1
            }, e.prototype.getUTCSeconds = function() {
                return this.dt.toUTC().second
            }, e.prototype.setMilliseconds = function(e) {
                return this.setter({
                    millisecond: e
                }).millisecond
            }, e.prototype.setSeconds = function(e, t) {
                return this.setter({
                    second: e,
                    millisecond: t
                }).second
            }, e.prototype.setMinutes = function(e, t, n) {
                return this.setter({
                    minute: e,
                    second: t,
                    millisecond: n
                }).minute
            }, e.prototype.setHours = function(e, t, n, a) {
                return this.setter({
                    hour: e,
                    minute: t,
                    second: n,
                    millisecond: a
                }).hour
            }, e.prototype.setDate = function(e) {
                return this.setter({
                    day: e
                }).day
            }, e.prototype.setMonth = function(e, t) {
                return e++, this.setter({
                    month: e,
                    day: t
                }).month - 1
            }, e.prototype.setFullYear = function(e, t, n) {
                return this.setter({
                    year: e,
                    month: t,
                    day: n
                }).year
            }, e.prototype.setTime = function(e) {
                return this.dt = Vr.luxon.DateTime.fromMillis(e), this.dt.valueOf()
            }, e.prototype.setTimezone = function(e) {
                e = Fr(e), this.zone = e, this.dt = this.dt.setZone(e)
            }, e.prototype.setUTCMilliseconds = function(e) {
                return 0
            }, e.prototype.setUTCSeconds = function(e, t) {
                return 0
            }, e.prototype.setUTCMinutes = function(e, t, n) {
                return 0
            }, e.prototype.setUTCHours = function(e, t, n, a) {
                return 0
            }, e.prototype.setUTCDate = function(e) {
                return 0
            }, e.prototype.setUTCMonth = function(e, t) {
                return 0
            }, e.prototype.setUTCFullYear = function(e, t, n) {
                return 0
            }, e.prototype.toUTCString = function() {
                return ""
            }, e.prototype.toTimeString = function() {
                return ""
            }, e.prototype.toLocaleDateString = function() {
                return ""
            }, e.prototype.toLocaleTimeString = function() {
                return ""
            }, e.prototype.setter = function(e) {
                return this.dt = this.dt.set(e), this.dt
            }, e
        }(),
        Vr = {
            luxon: ie,
            parse: function(e, t) {
                return new zr(e, t.dataTimezone || t.displayTimezone)
            },
            createDate: function(e, t, n, a, s, i, r, o) {
                var l = e.displayTimezone;
                return ve(t) || me(t) || pe(n) ? new zr(t, l) : new zr([t || 1970, n || 0, a || 1, s || 0, i || 0, r || 0, o || 0], l)
            }
        };

    function Rr(e) {
        return e && "local" !== e ? e : Wr.moment.tz.guess()
    }
    var Ar = function() {
            function e(e, t) {
                this._mbsc = !0, this.timezone = Rr(t), this.init(e)
            }
            return e.prototype.clone = function() {
                return new e(this, this.timezone)
            }, e.prototype.createDate = function(e, t, n, a, s, i, r) {
                return Wr.createDate({
                    displayTimezone: this.timezone
                }, e, t, n, a, s, i, r)
            }, e.prototype[Symbol.toPrimitive] = function(e) {
                return this.m.toDate()[Symbol.toPrimitive](e)
            }, e.prototype.toDateString = function() {
                return this.m.format("ddd MMM DD YYYY")
            }, e.prototype.toISOString = function() {
                return this.m.toISOString(!0)
            }, e.prototype.toJSON = function() {
                return this.m.toISOString()
            }, e.prototype.valueOf = function() {
                return this.m.valueOf()
            }, e.prototype.getDate = function() {
                return this.m.date()
            }, e.prototype.getDay = function() {
                return this.m.day()
            }, e.prototype.getFullYear = function() {
                return this.m.year()
            }, e.prototype.getHours = function() {
                return this.m.hours()
            }, e.prototype.getMilliseconds = function() {
                return this.m.milliseconds()
            }, e.prototype.getMinutes = function() {
                return this.m.minutes()
            }, e.prototype.getMonth = function() {
                return this.m.month()
            }, e.prototype.getSeconds = function() {
                return this.m.seconds()
            }, e.prototype.getTime = function() {
                return this.m.valueOf()
            }, e.prototype.getTimezoneOffset = function() {
                return -this.m.utcOffset()
            }, e.prototype.getUTCDate = function() {
                return this.utc().date()
            }, e.prototype.getUTCDay = function() {
                return this.utc().day()
            }, e.prototype.getUTCFullYear = function() {
                return this.utc().year()
            }, e.prototype.getUTCHours = function() {
                return this.utc().hours()
            }, e.prototype.getUTCMilliseconds = function() {
                return this.utc().milliseconds()
            }, e.prototype.getUTCMinutes = function() {
                return this.utc().minutes()
            }, e.prototype.getUTCMonth = function() {
                return this.utc().month()
            }, e.prototype.getUTCSeconds = function() {
                return this.utc().seconds()
            }, e.prototype.setMilliseconds = function(e) {
                return this.m.set({
                    millisecond: e
                }).milliseconds()
            }, e.prototype.setSeconds = function(e, t) {
                return this.m.set({
                    seconds: e,
                    milliseconds: t
                }).seconds()
            }, e.prototype.setMinutes = function(e, t, n) {
                return this.m.set({
                    minutes: e,
                    seconds: t,
                    milliseconds: n
                }).minutes()
            }, e.prototype.setHours = function(e, t, n, a) {
                return this.m.set({
                    hours: e,
                    minutes: t,
                    seconds: n,
                    milliseconds: a
                }).hours()
            }, e.prototype.setDate = function(e) {
                return this.m.set({
                    date: e
                }).date()
            }, e.prototype.setMonth = function(e, t) {
                return this.m.set({
                    month: e,
                    date: t
                }).month()
            }, e.prototype.setFullYear = function(e, t, n) {
                return this.m.set({
                    year: e,
                    month: t,
                    date: n
                }).year()
            }, e.prototype.setTime = function(e) {
                return this.init(e), this.m.valueOf()
            }, e.prototype.setTimezone = function(e) {
                this.timezone = Rr(e), this.m.tz(this.timezone)
            }, e.prototype.setUTCMilliseconds = function(e) {
                return 0
            }, e.prototype.setUTCSeconds = function(e, t) {
                return 0
            }, e.prototype.setUTCMinutes = function(e, t, n) {
                return 0
            }, e.prototype.setUTCHours = function(e, t, n, a) {
                return 0
            }, e.prototype.setUTCDate = function(e) {
                return 0
            }, e.prototype.setUTCMonth = function(e, t) {
                return 0
            }, e.prototype.setUTCFullYear = function(e, t, n) {
                return 0
            }, e.prototype.toUTCString = function() {
                return ""
            }, e.prototype.toTimeString = function() {
                return ""
            }, e.prototype.toLocaleDateString = function() {
                return ""
            }, e.prototype.toLocaleTimeString = function() {
                return ""
            }, e.prototype.init = function(e) {
                var t = Wr.moment.tz,
                    n = pe(e) || me(e) || ue(e) || he(e) ? e : +e,
                    a = me(e) && Xn.test(e);
                this.m = a ? t(n, "HH:mm:ss", this.timezone) : t(n, this.timezone)
            }, e.prototype.utc = function() {
                return this.m.clone().utc()
            }, e
        }(),
        Wr = {
            moment: ie,
            parse: function(e, t) {
                return new Ar(e, t.dataTimezone || t.displayTimezone)
            },
            createDate: function(e, t, n, a, s, i, r, o) {
                var l = e.displayTimezone;
                return ve(t) || me(t) || pe(n) ? new Ar(t, l) : new Ar([t || 1970, n || 0, a || 1, s || 0, i || 0, r || 0, o || 0], l)
            }
        },
        Ur = {},
        Br = " - ",
        jr = ["calendar"],
        Kr = [{
            recurring: {
                repeat: "daily"
            }
        }];

    function Jr(e) {
        return "start" === e ? "end" : "start"
    }

    function Xr(e, t) {
        var n = ra(new Date(e), t, t.firstSelectDay !== ie ? t.firstSelectDay : t.firstDay),
            a = new Date(n.getFullYear(), n.getMonth(), n.getDate() + t.selectSize - 1);
        return {
            start: n,
            end: a
        }
    }
    var Gr = function(e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t._iso = {}, t._remote = 0, t._onActiveChange = function(e) {
                t._active = e.date, t.forceUpdate()
            }, t._onResize = function(e) {
                var n = e.windowWidth;
                e.cancel = t.state.width !== n, t.setState({
                    isLarge: e.isLarge,
                    maxPopupWidth: e.maxPopupWidth,
                    width: n,
                    widthType: n > 600 ? "md" : "sm"
                })
            }, t._onDayHoverIn = function(e) {
                var n = e.date,
                    a = e.hidden;
                t.setState({
                    hoverDate: a ? ie : +n
                })
            }, t._onDayHoverOut = function(e) {
                var n = e.date;
                t.state.hoverDate === +n && t.setState({
                    hoverDate: ie
                })
            }, t._onCellClick = function(e) {
                t._lastSelected = ua(t.s, e.date), e.active = t._activeSelect, t._hook("onCellClick", e)
            }, t._onCalendarChange = function(e) {
                t._tempValueSet = !1;
                var n = t.s,
                    a = t._copy(t._tempValueRep),
                    s = Ie(e.value, (function(e) {
                        return ua(n, e)
                    })),
                    i = "preset-range" === n.select,
                    r = "range" === n.select,
                    o = r && t._newSelection,
                    l = (r || i) && n.exclusiveEndDates && !t._hasTime;
                if (l && a.end && (a.end = +$n(n, Ta(_a(n, a.end), -1))), t._hasTime && t._selectedTime && !r)
                    if (t.s.selectMultiple) {
                        var c = s[s.length - 1];
                        c && c.setHours(t._selectedTime.getHours(), t._selectedTime.getMinutes())
                    } else s.setHours(t._selectedTime.getHours(), t._selectedTime.getMinutes());
                if (r || i) {
                    var h = t._getDate(a),
                        d = h.filter((function(e) {
                            return null !== e
                        })),
                        u = d.map((function(e) {
                            return +e
                        })),
                        m = d.map((function(e) {
                            return +na(e)
                        })),
                        _ = s.filter((function(e) {
                            return m.indexOf(+e) < 0
                        }))[0];
                    if (i) {
                        if (_) {
                            var p = Xr(+_, n),
                                v = p.start,
                                f = p.end;
                            a.start = +v, a.end = +f
                        }
                    } else {
                        var g = !t._hasTime,
                            y = t._renderControls,
                            b = t._activeSelect,
                            x = Jr(b);
                        if (_) {
                            switch (t._hasTime && t._selectedTime && _.setHours(t._selectedTime.getHours(), t._selectedTime.getMinutes(), t._selectedTime.getSeconds(), t._selectedTime.getMilliseconds()), u.length) {
                                case 0:
                                    (a = {})[b] = +_;
                                    break;
                                case 1:
                                    if (y) {
                                        a[b] = +_;
                                        break
                                    }
                                    u[0] > +_ || "start" === t._activeSelect ? t._hasTime ? a[b] = +_ : (a = {
                                        start: +_
                                    }, g = !1) : a.end = +_;
                                    break;
                                case 2:
                                    if (y) {
                                        a[b] = +_;
                                        break
                                    }
                                    u[0] > +_ || "start" === t._activeSelect ? t._hasTime ? a[b] = +_ : (a = {
                                        start: +_
                                    }, "end" === t._activeSelect && (g = !1)) : "end" === t._activeSelect && (a.end = +_)
                            }
                            y && a.start && a.end && a.start > a.end && (a = {
                                start: +_
                            }, t._setActiveSelect("end"))
                        } else {
                            var T = void 0;
                            T = 1 === u.length ? _a(n, u[0]) : t._lastSelected, t._hasTime && t._selectedTime ? T.setHours(t._selectedTime.getHours(), t._selectedTime.getMinutes(), t._selectedTime.getSeconds(), t._selectedTime.getMilliseconds()) : !n.exclusiveEndDates && !t._hasTime && "end" === t._activeSelect && h[0] && oa(T, h[0]) && T.setHours(23, 59, 59, 999), y || t._hasTime ? a[b] = +T : "start" === t._activeSelect ? a = {
                                start: +T
                            } : a.end = +T
                        }
                        if (a.start && a.end) {
                            if (a.start > a.end) {
                                var D = _a(n, a.start),
                                    C = _a(n, a.end);
                                oa(D, C) ? (C.setHours(D.getHours(), D.getMinutes(), D.getSeconds(), D.getMilliseconds()), a.end = +C) : a.end = ie
                            }
                            if (n.minRange && a.end) {
                                var S = t._hasTime ? a.start + n.minRange : +Ta(_a(n, a.start), n.minRange - 1);
                                a.end < S && (!t._hasTime || "start" === b) && (a.end = ie)
                            }
                            if (n.maxRange && a.end) {
                                S = t._hasTime ? a.start + n.maxRange : +Ta(_a(n, a.start), n.maxRange) - 1;
                                a.end > S && (!t._hasTime || "start" === b) && (a.end = ie)
                            }
                            if (a.end && "start" === b && !n.inRangeInvalid) {
                                var w = n.valid ? Ta(ji(n.valid, _a(n, a.start), n), 1) : Bi(n.invalid || [], _a(n, a.start), n);
                                null !== w && +w < a.end && (a.end = ie)
                            }
                        }
                        g && (t._newSelection || !t._renderControls || t._newSelection === ie && "inline" === t.s.display) && (t._setActiveSelect(x), t._newSelection = !1)
                    }
                } else if (a = {
                        date: {}
                    }, t.s.selectMultiple)
                    for (var k = 0, M = s; k < M.length; k++) {
                        var E = M[k];
                        a.date[+E] = E
                    } else {
                        if (t._hasTime) {
                            var N = t._selectedTime || new Date;
                            s.setHours(N.getHours(), N.getMinutes(), N.getSeconds(), N.getMilliseconds())
                        }
                        a.date[+s] = s
                    }
                t._tempValueRep = a, l && a.end && (a.end = +$n(n, Ta(_a(n, a.end), 1))), t._setOrUpdate(), !t._live || t.s.selectMultiple && !r || t._hasTime || r && (!a.start || !a.end || o) || t.close()
            }, t._onDatetimeChange = function(e) {
                var n = t.s,
                    a = "range" === n.select,
                    s = ua(n, e.value),
                    i = t._hasTime ? s : na(s),
                    r = +i;
                t._tempValueSet = !1;
                var o = t._copy(t._tempValueRep),
                    l = a && n.exclusiveEndDates && !t._hasTime;
                if (l && o.end && (o.end = +$n(n, Ta(_a(n, o.end), -1))), a)
                    if ("start" === t._activeSelect) {
                        if (t._hasTime && t._selectedTime && i.setHours(t._selectedTime.getHours(), t._selectedTime.getMinutes(), t._selectedTime.getSeconds(), t._selectedTime.getMilliseconds()), o.start = r, o.end) {
                            var c = n.minRange && !t._hasTime ? 24 * (n.minRange - 1) * 60 * 60 * 1e3 - 1 : n.minRange || 0;
                            o.end - o.start < c && (o.end = ie)
                        }
                    } else t._hasTime ? t._selectedTime && i.setHours(t._selectedTime.getHours(), t._selectedTime.getMinutes(), t._selectedTime.getSeconds(), t._selectedTime.getMilliseconds()) : o.start !== +na(i) || n.exclusiveEndDates || i.setHours(23, 59, 59, 999), o.end = +i;
                else {
                    if (t._hasTime && t._hasDate && n.controls.indexOf("datetime") < 0) {
                        var h = t._selectedTime || new Date;
                        i.setHours(h.getHours(), h.getMinutes(), h.getSeconds(), h.getMilliseconds())
                    } else t._selectedTime = _a(n, i);
                    (o = {
                        date: {}
                    }).date[+i] = i
                }
                t._tempValueRep = o, l && o.end && (o.end = +$n(n, Ta(_a(n, o.end), 1))), t._setOrUpdate()
            }, t._onTimePartChange = function(e) {
                t._tempValueSet = !1;
                var n = t.s,
                    a = "range" === n.select,
                    s = ua(n, e.value);
                if (t._selectedTime = s, a) {
                    var i = t._getDate(t._tempValueRep),
                        r = "start" === t._activeSelect ? 0 : 1;
                    if (i[r])(o = _a(n, i[r])).setHours(s.getHours(), s.getMinutes(), s.getSeconds(), s.getMilliseconds()), i[r] = o, "start" === t._activeSelect && +o > +i[1] && (i.length = 1), t._tempValueRep = t._parse(i);
                    else t._selectedTime.setHours(s.getHours(), s.getMinutes(), s.getSeconds(), s.getMilliseconds())
                } else if (!n.selectMultiple) {
                    var o;
                    (o = t._getDate(t._tempValueRep)) ? (o.setHours(s.getHours(), s.getMinutes(), s.getSeconds(), s.getMilliseconds()), t._tempValueRep = {
                        date: {}
                    }, t._tempValueRep.date[+o] = o) : (t._selectedTime.setHours(s.getHours(), s.getMinutes(), s.getSeconds(), s.getMilliseconds()), t._live && t.forceUpdate())
                }
                t._setOrUpdate()
            }, t._changeActiveTab = function(e) {
                t.setState({
                    activeTab: e.target.value
                })
            }, t._changeActiveSelect = function(e) {
                var n = e.target.value;
                t._setActiveSelect(n), t.setActiveDate(n)
            }, t._onInputClickRange = function(e) {
                t._activateBasedOnInput(e.target), t._onInputClick(e)
            }, t._onInputKeyRange = function(e) {
                t._activateBasedOnInput(e.target), t._onInputKey(e)
            }, t._onInputFocusRange = function(e) {
                t._activateBasedOnInput(e.target), t._onInputFocus(e)
            }, t._onInputChangeRange = function(e) {
                var n = t._startInput,
                    a = t._endInput,
                    s = (n ? n.value : "") + (a && a.value ? Br + a.value : "");
                t._onInputChange(e, s)
            }, t._clearEnd = function() {
                t._tempValueRep.end = ie, t._hasTimegrid && (t._selectedTime = ie), t._setOrUpdate()
            }, t._clearStart = function() {
                t._tempValueRep = {}, t._newSelection = !0, t._hasTimegrid && (t._selectedTime = ie), t._setOrUpdate()
            }, t._activateBasedOnInput = function(e) {
                var n = e === t._startInput || t._renderControls ? "start" : "end";
                t._setActiveSelect(n)
            }, t._proxy = function(e) {
                t._hook(e.type, e)
            }, t
        }
        return a(t, e), t.prototype.setActiveDate = function(e) {
            var t = Jr(e);
            this._activeSelect = e;
            var n = this._tempValueRep[e],
                a = this._tempValueRep[t];
            this._tempValueRep.start && this._tempValueRep.end || !n && a ? this._newSelection = !1 : n && !a && (this._newSelection = !0), n && (this._active = n), !n && this._hasTimegrid && (this._selectedTime = ie), this.forceUpdate()
        }, t.prototype.getTempVal = function() {
            return e.prototype.getTempVal.call(this)
        }, t.prototype.setTempVal = function(t) {
            e.prototype.setTempVal.call(this, t)
        }, t.prototype.navigate = function(e) {
            this._active = +pa(e), this.forceUpdate()
        }, t.prototype._shouldValidate = function(e, t) {
            return e.controls !== t.controls || e.dataTimezone !== t.dataTimezone || e.displayTimezone !== t.displayTimezone || e.dateFormat !== t.dateFormat || e.timeFormat !== t.timeFormat || e.locale !== t.locale || e.min !== t.min || e.max !== t.max || this._shouldParse
        }, t.prototype._valueEquals = function(e, t) {
            var n = he(e) && 0 === e.length || e === ie || null === e,
                a = he(t) && 0 === t.length || t === ie || null === t;
            return n && n === a || ba(e, t, this.s)
        }, t.prototype._init = function() {
            this.props.modules && this.props.modules.forEach((function(e) {
                Ur[e._name] = e
            }))
        }, t.prototype._render = function(t, n) {
            var a = this;
            t.inRangeInvalid && (t.rangeEndInvalid = !1), "preset-range" === t.select && (t.controls = jr), t.exclusiveEndDates === ie && (t.exclusiveEndDates = !!t.displayTimezone);
            var r = Ee(t.controls, (function(e) {
                return "time" === e || "datetime" === e || "timegrid" === e
            }));
            r || (t.timezonePlugin = t.dataTimezone = t.displayTimezone = ie), !t.valid || t.invalid && !r || (t.invalid = Kr);
            var o = this._prevS;
            t.buttons;
            var l = t.calendarSize;
            t.children, t.className;
            var c = t.controls;
            t.cssClass, t.element, t.onDestroy, t.onInit, t.onTempChange, t.responsive;
            var h = t.select,
                d = t.selectMultiple,
                u = t.tabs,
                m = i(t, ["buttons", "calendarSize", "children", "className", "controls", "cssClass", "element", "onDestroy", "onInit", "onTempChange", "responsive", "select", "selectMultiple", "tabs"]),
                _ = n.widthType || "sm",
                p = "date" !== h;
            if (this._renderTabs = c.length > 1 && ("auto" === u ? "sm" === _ : u), h !== o.select && this._tempValueRep)
                if (p && this._tempValueRep.date) {
                    var v = Object.keys(this._tempValueRep.date).map((function(e) {
                            return +e
                        })).sort(),
                        f = v[0],
                        g = v[1];
                    this._tempValueRep.start = f, this._tempValueRep.end = g, this._tempValueRep.date = ie, this._tempValueText = this._format(this._tempValueRep), setTimeout((function() {
                        a.set()
                    }))
                } else if (!p && (this._tempValueRep.start || this._tempValueRep.end)) {
                this._tempValueRep.date || (this._tempValueRep.date = {});
                var y = this._tempValueRep.start || this._tempValueRep.end;
                this._tempValueRep.date[y] = new Date(y);
                var b = this._tempValueRep.end || this._tempValueRep.start;
                b !== y && t.selectMultiple && (this._tempValueRep.date[b] = new Date(b)), this._tempValueRep.start = ie, this._tempValueRep.end = ie, this._tempValueText = this._format(this._tempValueRep), setTimeout((function() {
                    a.set()
                }))
            }
            t.min !== o.min && (this._min = _e(t.min) ? ie : pa(t.min, t, t.dateFormat)), t.max !== o.max && (this._max = _e(t.max) ? ie : pa(t.max, t, t.dateFormat)), t.minTime !== o.minTime && (this._minTime = _e(t.minTime) ? ie : pa(t.minTime, t, t.timeFormat)), t.maxTime !== o.maxTime && (this._maxTime = _e(t.maxTime) ? ie : pa(t.maxTime, t, t.timeFormat));
            var x = this._hasTime,
                T = this._tempValueRep && this._tempValueRep.end,
                D = this._tempValueRep && this._tempValueRep.start,
                C = JSON.stringify(c) !== JSON.stringify(o.controls);
            if (C || t.dateFormat !== o.dateFormat || t.timeFormat !== o.timeFormat) {
                C && (this._controls = []), this._valueFormat === ie && (this._valueFormat = ""), this._controlsClass = "";
                var S = {
                    c: "datepicker",
                    controls: c,
                    dateFormat: t.dateFormat,
                    dateText: t.dateText,
                    separator: t.separator,
                    timeFormat: t.timeFormat,
                    timeText: t.timeText,
                    v: za
                };
                this._remote++, La(this), Oa("remote", this, S, (function(e) {
                    if (a._remote--, !a._remote) {
                        for (var n in e) e.hasOwnProperty(n) && (a[n] = e[n]);
                        for (var s = 0, i = a._controls; s < i.length; s++) {
                            var r = i[s];
                            r.Component = Ur["calendar" === r.name ? "Calendar" : "timegrid" === r.name ? "Timegrid" : "Datetime"], a._controlsClass += " mbsc-datepicker-control-" + r.name
                        }
                        Ha(e.notification), a._hasTime || (a._selectedTime = ie), C && p && t.exclusiveEndDates && a._hasTime !== x && T && setTimeout((function() {
                            var e = +Ta(_a(t, T), x ? 1 : -1),
                                n = D && _a(t, D),
                                s = n && e < +n ? +Ta(_a(t, n), 1) : e;
                            a._tempValueRep.end = s, a._tempValueRep.start = n && +n, a._valueText = a._tempValueText = a._format(a._tempValueRep), a._valueTextChange = !0, a.set(), a.forceUpdate()
                        })), a._shouldParse = !0, a.forceUpdate()
                    }
                }), "comp_" + this._uid)
            }
            var w, k = this._valueFormat;
            if (this._hasCalendar = -1 !== t.controls.indexOf("calendar"), this._renderControls = p && "preset-range" !== h && (t.showRangeLabels === ie || t.showRangeLabels), this._nullSupport = "inline" !== t.display || "date" !== h || !0 === t.selectMultiple, this._activeTab = n.activeTab || t.controls[0], e.prototype._render.call(this, t, n), t.headerText === o.headerText && t.selectCounter === o.selectCounter && t.selectMultiple === o.selectMultiple || this._setHeader(), this._scrollLock = t.scrollLock !== ie ? t.scrollLock : !this._hasTimegrid, this._showInput = t.showInput !== ie ? t.showInput : this._showInput && (!p || !t.startInput && !t.endInput), this._shouldInitInputs = this._shouldInitInputs || h !== o.select || t.startInput !== o.startInput || t.endInput !== o.endInput || t.showOnClick !== o.showOnClick || t.showOnFocus !== o.showOnFocus, this._shouldInitInput = this._shouldInitInput || this._shouldInitInputs, c !== o.controls || t.dateWheels !== o.dateWheels || t.timeWheels !== o.timeWheels || t.dateFormat !== o.dateFormat || t.timeFormat !== o.timeFormat || this._shouldParse) {
                var M = t.dateWheels || t.dateFormat,
                    E = t.timeWheels || t.timeFormat,
                    N = this._iso = {};
                this._hasDate && (/y/i.test(M) && (N.y = 1), /M/.test(M) && (N.y = 1, N.m = 1), /d/i.test(M) && (N.y = 1, N.m = 1, N.d = 1)), this._hasTime && (/h/i.test(E) && (N.h = 1), /m/.test(E) && (N.i = 1), /s/i.test(E) && (N.s = 1))
            }
            if (this._shouldParse = !1, p ? (this._activeSelect === ie && this._setActiveSelect("start", !0), w = this._selectionNotReady()) : (this._activeSelect = ie, w = !1), this._buttons) {
                var I = Ee(this._buttons, (function(e) {
                    return "set" === e.name
                }));
                I && I.disabled !== w && (I.disabled = w, this._buttons = this._buttons.slice())
            }
            var L = this._activeSelect;
            this._needsWidth = ("anchored" === t.display || "center" === t.display || "inline" !== t.display && n.isLarge || c.length > 1 && !u) && t.width === ie;
            var H = t.max !== ie ? pa(t.max, t, k) : ie,
                O = t.min !== ie ? pa(t.min, t, k) : ie;
            this._maxLimited = H, this._minLimited = O;
            var Y = this._tempValueRep.start;
            if (Y && (this._prevStart !== Y || o.valid !== t.valid || o.invalid !== t.invalid)) {
                var P = _a(t, Y);
                this._nextInvalid = t.valid ? Ta(ji(t.valid, P, t), 1) : Bi(t.invalid || [], P, t)
            }
            var F = "end" === L && Y;
            if (F) {
                if (!t.inRangeInvalid) {
                    var z = this._nextInvalid;
                    z && (t.rangeEndInvalid ? this._maxLimited = _a(t, +Ta(z, 1) - 1) : this._maxLimited = _a(t, +z - 1))
                }
                this._hasCalendar && !this._hasTime || (!this._minLimited || pa(this._minLimited, t, k) < _a(t, Y)) && (this._minLimited = _a(t, this._tempValueRep.start))
            }
            if (this._minTimeLimited = this._minLimited, F) {
                if (t.minRange) {
                    var V = this._hasTime ? this._tempValueRep.start + t.minRange : +Ta(_a(t, this._tempValueRep.start), t.minRange) - 1;
                    (!this._minLimited || +pa(this._minLimited, t, k) < V) && (this._minLimited = _a(t, V), this._minTimeLimited = this._minLimited)
                }
                if (this._minTimeLimited === ie && this._tempValueRep.start && this._tempValueRep.end && (this._minTimeLimited = _a(t, +this._tempValueRep.start)), t.maxRange !== ie) {
                    var R = this._hasTime ? this._tempValueRep.start + t.maxRange : +Ta(_a(t, this._tempValueRep.start), t.maxRange) - 1;
                    (!this._maxLimited || +pa(this._maxLimited, t, k) > R) && (this._maxLimited = _a(t, R))
                }
            }
            for (var A = 0, W = this._controls; A < W.length; A++) {
                var U = W[A],
                    B = s({}, m, {
                        display: "inline",
                        isOpen: t.isOpen || n.isOpen,
                        max: this._maxLimited,
                        min: this._minLimited
                    });
                if (t.rangeEndInvalid && F && this._nextInvalid && (B.valid = (B.valid || []).concat([this._nextInvalid])), "calendar" === U.name) {
                    B.min = this._minLimited ? na(this._minLimited) : ie, B.max = this._maxLimited ? na(this._maxLimited) : ie, B.selectRange = p, B.width = this._needsWidth ? li * pi(t.pages, n.maxPopupWidth) : ie, "week" === t.calendarType && l ? B.weeks = l : B.size = l;
                    var j = "auto" === t.pages ? 3 : t.pages || 1;
                    if (this._maxWidth = t.maxWidth || (j > 2 ? li * j : ie), p) {
                        var K = this._getDate(this._tempValueRep),
                            J = K[1];
                        J && t.exclusiveEndDates && !this._hasTime && (K[1] = Ta(J, -1));
                        var X = K.filter((function(e) {
                            return null !== e
                        })).map((function(e) {
                            return +na(e)
                        })).filter((function(e, t, n) {
                            return n.indexOf(e) === t
                        })).map((function(e) {
                            return new Date(e)
                        }));
                        if (B.value = X, t.rangeHighlight)
                            if (B.rangeStart = K[0] && +na(ma(K[0])), B.rangeEnd = K[1] && +na(ma(K[1])), B.onDayHoverIn = this._onDayHoverIn, B.onDayHoverOut = this._onDayHoverOut, "preset-range" === h) {
                                if (n.hoverDate) {
                                    var G = Xr(n.hoverDate, t);
                                    f = G.start, g = G.end;
                                    B.hoverStart = +f, B.hoverEnd = +g
                                }
                            } else "end" === L && K[0] && (B.hoverStart = B.rangeEnd || B.rangeStart, B.hoverEnd = n.hoverDate), "start" === L && K[1] && this._renderControls && (B.hoverStart = n.hoverDate, B.hoverEnd = B.rangeStart || B.rangeEnd)
                    } else B.selectMultiple = d, B.value = this._getDate(this._tempValueRep);
                    for (var q = he(B.value) ? B.value : [B.value], Z = B.min ? +B.min : -1 / 0, $ = B.max ? +B.max : 1 / 0, Q = void 0, ee = 0, te = q; ee < te.length; ee++) {
                        var ne = te[ee];
                        !Q && ne >= Z && ne <= $ && (Q = +ne)
                    }
                    Q === this._selectedDate && this._active !== ie && t.min === o.min && t.max === o.max || (this._selectedDate = Q, this._active = ce(Q ? +na(new Date(Q)) : this._active || +na(new Date), Z, $));
                    var ae = t.dateWheels || t.dateFormat,
                        se = /d/i.test(ae) ? ii : /m/i.test(ae) ? ri : /y/i.test(ae) ? oi : ii;
                    B.active = this._active, B.onActiveChange = this._onActiveChange, B.onChange = this._onCalendarChange, B.onCellClick = this._onCellClick, B.onCellHoverIn = this._proxy, B.onCellHoverOut = this._proxy, B.onLabelClick = this._proxy, B.onPageChange = this._proxy, B.onPageLoaded = this._proxy, B.onPageLoading = this._proxy, B.selectView = se
                } else {
                    var re = Object.keys(this._tempValueRep.date || {});
                    if (B.displayStyle = "bottom" !== t.display && "top" !== t.display || !this._hasCalendar && !this._renderTabs ? t.display : "center", B.mode = U.name, "time" !== U.name && "timegrid" !== U.name || !this._hasDate)
                        if (B.onChange = this._onDatetimeChange, p) {
                            var oe = this._tempValueRep[L],
                                le = this._tempValueRep[Jr(L)];
                            B.value = oe ? _a(t, oe) : le ? _a(t, le) : null, "end" === L && t.exclusiveEndDates && !this._hasTime && (B.value = Ta(B.value, -1))
                        } else {
                            var de = this._tempValueRep.date && this._tempValueRep.date[re[0]],
                                ue = de;
                            de && (this._hasTime || (ue = na(de))), B.value = ue || null
                        }
                    else {
                        if (B.onChange = this._onTimePartChange, p) {
                            var me = this._tempValueRep[L],
                                pe = void 0;
                            this._selectedTime && (!this._minTimeLimited || this._selectedTime > this._minTimeLimited ? pe = this._selectedTime : (pe = _a(t, this._minTimeLimited)).setHours(this._selectedTime.getHours(), this._selectedTime.getMinutes(), this._selectedTime.getSeconds(), this._selectedTime.getMilliseconds())), this._selectedTime = me ? _a(t, me) : pe || ("time" === U.name ? _a(t) : ie), B.value = this._selectedTime
                        } else if (!t.selectMultiple) {
                            var ve = this._tempValueRep.date && this._tempValueRep.date[re[0]] || this._selectedTime;
                            this._selectedTime = B.value = ve
                        }
                        B.min = this._minTimeLimited, B.max = this._maxLimited
                    }
                    if ("time" === U.name || "timegrid" === U.name) {
                        var fe = B.value || Sa(new Date, B.min, B.max);
                        if (this._minTime) {
                            var ge = this._minTime;
                            Z = new Date(fe.getFullYear(), fe.getMonth(), fe.getDate(), ge.getHours(), ge.getMinutes(), ge.getSeconds(), ge.getMilliseconds());
                            (!B.min || Z > B.min) && (B.min = Z)
                        }
                        if (this._maxTime) {
                            var ye = this._maxTime;
                            $ = new Date(fe.getFullYear(), fe.getMonth(), fe.getDate(), ye.getHours(), ye.getMinutes(), ye.getSeconds(), ye.getMilliseconds());
                            (!B.max || $ < B.max) && (B.max = $)
                        }
                    }
                }
                U.options = B
            }
            this._prevStart = this._tempValueRep.start
        }, t.prototype._updated = function() {
            var t = this,
                n = this.s;
            if (this._shouldInitInputs) {
                if (this._clearInputHandlers(this._startInput, this._startInputReadOnly), this._clearInputHandlers(this._endInput, this._endInputReadOnly), "range" === n.select) {
                    var a = n.startInput;
                    a && this._setupInput("start", a);
                    var s = n.endInput;
                    s && this._setupInput("end", s), !n.element || this._startInput !== n.element && this._endInput !== n.element || (this._shouldInitInput = !1, clearTimeout(n.element.__mbscTimer))
                }
                this._shouldInitInputs = !1
            }
            var i = this._valueTextChange;
            if (e.prototype._updated.call(this), "range" === n.select && i) {
                var r = function(e, n) {
                    e.value = n, setTimeout((function() {
                        t._preventChange = !0, Xt(e, Qa), Xt(e, Ja)
                    }))
                };
                this._startInput && r(this._startInput, this._getValueText("start")), this._endInput && r(this._endInput, this._getValueText("end"))
            }
        }, t.prototype._onEnterKey = function(t) {
            this._selectionNotReady() || e.prototype._onEnterKey.call(this, t)
        }, t.prototype._setupInput = function(e, t) {
            var n = this,
                a = function(t) {
                    n._win || (n._win = Rt(t)), "start" === e ? (n._startInput = t, n._startInputReadOnly = t.readOnly) : (n._endInput = t, n._endInputReadOnly = t.readOnly), !n.s.showOnClick && !n.s.showOnFocus || n._allowTyping || (t.readOnly = !0), n._allowTyping && (t.autocomplete = "off"), n._setupInputHandlers(t);
                    var a = n._getValueText(e),
                        s = a !== t.value;
                    t.value = a, s && setTimeout((function() {
                        n._preventChange = !0, Xt(t, Qa), Xt(t, Ja)
                    }))
                };
            if (t)
                if (sr(t)) ar(t, a);
                else if (t.vInput) a(t.vInput.nativeElement);
            else if (t._el) a(t._el);
            else if (1 === t.nodeType) a(t);
            else if (me(t)) {
                var s = pt.querySelector(t);
                s && a(s)
            }
        }, t.prototype._destroy = function() {
            this._clearInputHandlers(this._startInput, this._startInputReadOnly), this._clearInputHandlers(this._endInput, this._endInputReadOnly), e.prototype._destroy.call(this)
        }, t.prototype._setupInputHandlers = function(e) {
            this.s.showOnClick && (Ot(e, Xa, this._onInputClickRange), Ot(e, ts, this._onInputMouseDown), Ot(e, es, this._onInputKeyRange)), this.s.showOnFocus && (Ot(e, Za, this._onInputFocusRange), Ot(Rt(e), Za, this._onWinFocus)), Ot(e, Ja, this._onInputChangeRange)
        }, t.prototype._clearInputHandlers = function(e, t) {
            e && (e.readOnly = t, Yt(e, Xa, this._onInputClickRange), Yt(e, ts, this._onInputMouseDown), Yt(e, es, this._onInputKeyRange), Yt(e, Za, this._onInputFocusRange), Yt(e, Ja, this._onInputChangeRange), Yt(Rt(e), Za, this._onWinFocus))
        }, t.prototype._setHeader = function() {
            var t = this.s;
            if (t.selectCounter && t.selectMultiple) {
                var n = Object.keys(this._tempValueRep && this._tempValueRep.date || {}).length;
                this._headerText = (n > 1 && t.selectedPluralText || t.selectedText).replace(/{count}/, "" + n)
            } else e.prototype._setHeader.call(this)
        }, t.prototype._validate = function() {
            if (!(this._max <= this._min)) {
                var e = this.s,
                    t = this._min ? +this._min : -1 / 0,
                    n = this._max ? +this._max : 1 / 0;
                if ("date" === e.select) {
                    var a = this._tempValueRep.date;
                    if (!e.selectMultiple)
                        for (var s = 0, i = Object.keys(a); s < i.length; s++) {
                            var r = i[s],
                                o = a[r],
                                l = $i(o, e, t, n); + l != +o && (delete a[r], a[+na(l)] = l)
                        }
                } else {
                    var c = this._getDate(this._tempValueRep),
                        h = c[0],
                        d = c[1];
                    h && (h = $i(h, e, t, n), e.inRangeInvalid || this._prevStart && this._prevStart === +h || (this._nextInvalid = e.valid ? Ta(ji(e.valid, h, e), 1) : Bi(e.invalid || [], h, e))), d && (d = !e.inRangeInvalid && this._nextInvalid && this._nextInvalid <= d ? e.rangeEndInvalid ? this._nextInvalid : Ta(this._nextInvalid, -1) : $i(d, e, t, n)), h && d && h > d && ("end" === this._activeSelect ? h = d : d = h), h && (this._prevStart = this._tempValueRep.start = +h), d && (this._tempValueRep.end = +d)
                }
            }
        }, t.prototype._copy = function(e) {
            var t = e.date ? s({}, e.date) : e.date;
            return s({}, e, {
                date: t
            })
        }, t.prototype._format = function(e) {
            var t = this.s,
                n = [];
            if (!t) return "";
            if ("date" === t.select) {
                var a = e.date;
                for (var s in a) a[s] !== ie && null !== a[s] && n.push(ga(this._valueFormat, a[s], t));
                return t.selectMultiple ? n.join(", ") : n[0]
            }
            if (e.start && n.push(ga(this._valueFormat, _a(t, e.start), t)), e.end) {
                n.length || n.push("");
                var i = _a(t, e.end),
                    r = t.exclusiveEndDates && !this._hasTime ? Ta(i, -1) : i;
                n.push(ga(this._valueFormat, r, t))
            }
            return this._tempStartText = n[0] || "", this._tempEndText = n[1] || "", n.join(Br)
        }, t.prototype._parse = function(e, t) {
            var n = this.s,
                a = {},
                s = "date" !== n.select,
                i = n.selectMultiple,
                r = [];
            if (_e(e)) {
                var o = n.defaultSelection;
                e = i || s ? o : null === o || this._live && "inline" !== n.display ? null : o || new Date
            }
            if (me(e) && (s || i) ? r = e.split(s ? Br : ",") : he(e) ? r = e : e && !he(e) && (r = [e]), s) {
                var l = r[0],
                    c = r[1],
                    h = pa(l, n, this._valueFormat, this._iso),
                    d = pa(c, n, this._valueFormat, this._iso);
                a.start = h ? +h : ie, a.end = d ? +d : ie
            } else {
                a.date = {};
                for (var u = 0, m = r; u < m.length; u++) {
                    var _ = m[u];
                    if (!_e(_)) {
                        var p = pa(_, n, this._valueFormat, this._iso, t);
                        if (p) {
                            t && (p = ua(n, p));
                            var v = +na(p);
                            a.date[v] = p, this._hasTime && (this._selectedTime = new Date(p))
                        }
                    }
                }
            }
            return a
        }, t.prototype._getDate = function(e) {
            var t = this.s;
            if ("date" !== t.select) {
                var n = e.start ? _a(t, e.start) : null,
                    a = e.end ? _a(t, e.end) : null;
                return n || a ? [n, a] : []
            }
            if (t.selectMultiple) {
                var s = [],
                    i = e.date;
                if (i)
                    for (var r = 0, o = Object.keys(i); r < o.length; r++) {
                        var l = o[r];
                        s.push(_a(t, +l))
                    }
                return s
            }
            var c = Object.keys(e.date || {});
            return c.length ? _a(t, e.date[c[0]]) : null
        }, t.prototype._get = function(e) {
            var t = this,
                n = this.s,
                a = this._valueFormat,
                s = this._iso,
                i = this._getDate(e);
            return he(i) ? i.map((function(e) {
                return e ? va(e, n, a, s, t._hasTime) : null
            })) : null === i ? null : va(i, n, a, s, this._hasTime)
        }, t.prototype._onClosed = function() {
            this._active = this._activeSelect = ie, this._hasTimegrid && (this._selectedTime = ie)
        }, t.prototype._onOpen = function() {
            this._newSelection = !0
        }, t.prototype._getValueText = function(e) {
            return this._valueText.split(Br)["start" === e ? 0 : 1] || ""
        }, t.prototype._selectionNotReady = function() {
            var e = !1;
            if ("range" === this.s.select) {
                var t = (this._get(this._tempValueRep || {}) || []).filter((function(e) {
                    return e
                }));
                (e = !t.length) || (e = this._hasCalendar && !this._hasTime || this._renderControls ? t.length < 2 : !this._tempValueRep[this._activeSelect])
            }
            return e
        }, t.prototype._setActiveSelect = function(e, t) {
            var n = this;
            this._activeSelect !== e && (t ? setTimeout((function() {
                return n._hook("onActiveDateChange", {
                    active: e
                })
            })) : this._hook("onActiveDateChange", {
                active: e
            })), this._activeSelect = e
        }, t.defaults = s({}, Kn, ir.defaults, {
            activeElm: '.mbsc-calendar-cell[tabindex="0"]',
            controls: jr,
            dateText: "Date",
            inRangeInvalid: !1,
            inputTyping: !0,
            rangeEndHelp: "Please select",
            rangeEndLabel: "End",
            rangeHighlight: !0,
            rangeStartHelp: "Please select",
            rangeStartLabel: "Start",
            select: "date",
            selectSize: 7,
            selectedText: "{count} selected",
            showOnClick: !0,
            timeText: "Time"
        }), t._name = "Datepicker", t
    }(ir);
    Ur.Datetime = Dr, Ur.Calendar = rr, Ur.Timegrid = Pr;
    var qr = function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return a(t, e), t.prototype._template = function(e) {
            var t = this,
                n = this._renderTabs,
                a = this._controls,
                i = this._activeSelect,
                r = this._rtl,
                o = this._theme,
                l = Ln("div", {
                    className: "mbsc-datepicker mbsc-flex-col mbsc-datepicker-" + e.display + o + ("inline" === e.display ? " " + this._className : "") + this._controlsClass
                }, this._headerText && "inline" === e.display && Ln("div", {
                    className: "mbsc-picker-header" + o + this._hb
                }, this._headerText), n && Ln(Ir, {
                    rtl: e.rtl,
                    theme: e.theme,
                    themeVariant: e.themeVariant,
                    value: this._activeTab,
                    onChange: this._changeActiveTab
                }, a.map((function(t, n) {
                    return Ln(Hr, {
                        key: n,
                        rtl: e.rtl,
                        theme: e.theme,
                        themeVariant: e.themeVariant,
                        value: t.name
                    }, t.title)
                }))), this._renderControls && Ln("div", {
                    className: "mbsc-range-control-wrapper" + o
                }, Ln(Ir, {
                    theme: e.theme,
                    themeVariant: e.themeVariant,
                    rtl: e.rtl,
                    value: i,
                    onChange: this._changeActiveSelect
                }, Ln(Hr, {
                    rtl: e.rtl,
                    theme: e.theme,
                    themeVariant: e.themeVariant,
                    value: "start",
                    className: "mbsc-range-start" + (this._tempStartText ? " mbsc-range-value-nonempty" : "")
                }, Ln("div", {
                    className: "mbsc-range-control-label" + o + r + ("start" === i ? " active" : "")
                }, e.rangeStartLabel), Ln("div", {
                    className: "mbsc-range-control-value" + o + r + ("start" === i ? " active" : "") + (this._tempStartText ? "" : " mbsc-range-control-text-empty")
                }, this._tempStartText || e.rangeStartHelp), "start" === i && this._tempStartText && Ln(Ba, {
                    className: "mbsc-range-label-clear" + r,
                    onClick: this._clearStart,
                    svg: e.clearIcon,
                    theme: e.theme
                })), Ln(Hr, {
                    rtl: e.rtl,
                    theme: e.theme,
                    themeVariant: e.themeVariant,
                    value: "end",
                    className: "mbsc-range-end" + (this._tempEndText ? " mbsc-range-value-nonempty" : "")
                }, Ln("div", {
                    className: "mbsc-range-control-label" + o + r + ("end" === i ? " active" : "")
                }, e.rangeEndLabel), Ln("div", {
                    className: "mbsc-range-control-value" + o + r + ("end" === i ? " active" : "") + (this._tempEndText ? "" : " mbsc-range-control-text-empty")
                }, this._tempEndText || e.rangeEndHelp), "end" === i && this._tempEndText && Ln(Ba, {
                    className: "mbsc-range-label-clear" + r,
                    onClick: this._clearEnd,
                    svg: e.clearIcon,
                    theme: e.theme
                })))), Ln("div", {
                    className: "mbsc-datepicker-tab-wrapper mbsc-flex-1-1" + o,
                    ref: this._setWrapper
                }, a.map((function(e, i) {
                    return Ln("div", {
                        key: i,
                        className: "mbsc-datepicker-tab mbsc-datepicker-tab-" + e.name + o + (n && e.name === t._activeTab || !n ? " mbsc-datepicker-tab-active" : "") + (n && "time" === e.name ? " mbsc-datepicker-time-modal" : "") + (n || 1 === a.length ? " mbsc-datepicker-tab-expand" : "")
                    }, Ln(e.Component, s({}, e.options)))
                }))));
            return ai(this, e, l)
        }, t
    }(Gr);

    function Zr(e) {
        return me(e) ? pt.querySelector(e) : e
    }
    var $r = {
        before: function(e, t) {
            var n = t.select,
                a = t.startInput,
                s = t.endInput;
            if ("range" === n && a && s) {
                var i = Zr(a),
                    r = Zr(s),
                    o = i && i.value,
                    l = r && r.value;
                o && l && (t.defaultValue = o + Br + l)
            } else t.defaultValue = e.value;
            t.element = e
        }
    };

    function Qr(e, t) {
        return function(n, a) {
            var s = {};
            if (me(n)) {
                var i, r = pt.querySelectorAll(n);
                return Gt(r, (function(n) {
                    var r = Pn(e, n, a, t);
                    s[n.id] = r, i || (i = r)
                })), 1 === r.length ? i : s
            }
            return Pn(e, n, a, t)
        }
    }
    m && (pt.addEventListener("DOMContentLoaded", (function() {
        zn(pt)
    })), pt.addEventListener("mbsc-enhance", (function(e) {
        zn(e.target)
    })));
    var eo = 0;

    function to(e, t, n) {
        "jsonp" === n ? function(e, t) {
            if (vt) {
                var n = pt.createElement("script"),
                    a = "mbscjsonp" + ++eo;
                vt[a] = function(e) {
                    n.parentNode.removeChild(n), delete vt[a], e && t(e)
                }, n.src = e + (e.indexOf("?") >= 0 ? "&" : "?") + "callback=" + a, pt.body.appendChild(n)
            }
        }(e, t) : function(e, t) {
            var n = new XMLHttpRequest;
            n.open("GET", e, !0), n.onload = function() {
                n.status >= 200 && n.status < 400 && t(JSON.parse(n.response))
            }, n.onerror = function() {}, n.send()
        }(e, t)
    }
    var no = {
        getJson: to
    };
    x.http = no;
    var ao = Qr(qr, $r),
        so = ", ",
        io = "group_0";
    var ro = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t._setScroller = function(e) {
                    t._scroller = e
                }, t._setInput = function(e) {
                    t._filterInput = e && e.nativeElement
                }, t._filterRenderer = function() {
                    var e = t.s;
                    return Ln("div", {
                        className: "mbsc-select-filter-cont" + t._theme + t._rtl
                    }, Ln(Ms, {
                        ref: t._setInput,
                        autoComplete: "off",
                        className: "mbsc-select-filter",
                        inputClass: "mbsc-select-filter-input",
                        placeholder: e.filterPlaceholderText,
                        onInput: t._onFilterChange,
                        theme: e.theme,
                        rtl: e.rtl,
                        inputStyle: "box"
                    }), t._filterText ? Ln(Ba, {
                        className: "mbsc-select-filter-clear" + t._rtl,
                        onClick: t._onFilterClear,
                        svg: e.clearIcon,
                        theme: e.theme
                    }) : null)
                }, t._filterEmptyRenderer = function() {
                    return t._noResults ? Ln("div", {
                        className: "mbsc-select-empty-text" + t._theme
                    }, t.s.filterEmptyText) : null
                }, t
            }
            return a(t, e), t.prototype._template = function(e) {
                var t = e.cssClass;
                e.onInit, e.onDestroy, e.responsive;
                var n = i(e, ["cssClass", "onInit", "onDestroy", "responsive"]);
                return Ln(pr, s({}, n, {
                    className: (t || "") + (this._noResults ? " mbsc-select-empty" : "") + " mbsc-select-scroller mbsc-select-scroller-" + e.display,
                    dropdown: e.dropdown,
                    formatValue: this._format,
                    parseValue: this._parse,
                    renderPreContent: e.filter ? this._filterRenderer : ie,
                    renderInContent: this._filterEmptyRenderer,
                    getValue: this._get,
                    valueEquality: this._valueEquals,
                    valueMap: this._map,
                    validate: this._validate,
                    shouldValidate: this._shouldValidate,
                    writeValue: this._writeValue,
                    ref: this._setScroller,
                    wheels: this._wheels,
                    rows: this._rows,
                    selectOnScroll: this._selectOnScroll,
                    onResize: this._onResize,
                    onClose: this._onClose,
                    onChange: this._onChange,
                    activeElm: e.filter ? ".mbsc-select-filter-input" : ie,
                    wheelWidth: this._wheelWidth,
                    onWheelMove: this._onWheelMove
                }), e.children)
            }, t
        }(function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t._options = [], t._selectMap = new Map, t._onFilterChange = function(e) {
                    var n = e.target.value;
                    clearTimeout(t._debounce), t._filterInput.value = n, t._debounce = setTimeout((function() {
                        t._filter(n)
                    }), 300)
                }, t._onFilterClear = function() {
                    var e = t._filterInput;
                    e && (e.value = ""), t._filter("")
                }, t._shouldValidate = function(e, n) {
                    var a = e.selectMultiple !== n.selectMultiple || !e.filter && e.data !== n.data || t._groupChanged;
                    return t._groupChanged = !1, a
                }, t._writeValue = function(e, n, a) {
                    var s = e.value;
                    if (e.value = n, t._isSelect) {
                        he(a) || (a = [a]);
                        for (var i = t.s.selectElement, r = i.options, o = !1, l = 0; l < r.length; l++) {
                            var c = r[l],
                                h = c.selected;
                            c.selected = a.indexOf(c.value) > -1, h !== c.selected && (o = !0)
                        }
                        return o && Xt(i, Ja), o
                    }
                    return s !== n
                }, t._onResize = function(e) {
                    t.setState({
                        width: e.windowWidth
                    })
                }, t._onChange = function(e) {
                    var n = e.value;
                    t._parsedValue = n, t._saveSelected(n), t._hook("onChange", e)
                }, t._format = function(e) {
                    var n = e[t.s.showGroupWheel ? 1 : 0],
                        a = t.s.selectMultiple ? n : [n];
                    return (a.map && a.map((function(e) {
                        return t._map ? t._map.get(e) : ie
                    })) || []).join(so)
                }, t._parse = function(e) {
                    var n, a = t._map,
                        s = t._reMap,
                        i = t.s.selectMultiple,
                        r = t.s.defaultSelection,
                        o = i ? r ? r.length !== ie ? r : r.slice() : [] : r !== ie ? r : null;
                    if (t._parsedValue = e, a)
                        if (i && !_e(e)) {
                            var l = [];
                            if (e.length === ie) l.push(e);
                            else if (me(e))
                                for (var c = 0, h = e.split(so); c < h.length; c++) {
                                    var d = h[c],
                                        u = s.get(d);
                                    u !== ie && l.push(u)
                                } else
                                    for (var m = 0, _ = e; m < _.length; m++) {
                                        var p = _[m];
                                        a.has(p) && l.push(p)
                                    }
                            n = l
                        } else a.has(e) ? n = e : me(e) && s.has(e) && (n = s.get(e));
                    if (n === ie && (n = o), t.s.showGroupWheel) {
                        var v = i ? n[0] : n,
                            f = Ee(t._options, (function(e) {
                                return e.value === v
                            }));
                        return [f && f.group, n]
                    }
                    return [n]
                }, t._get = function(e) {
                    var n = e[t.s.showGroupWheel ? 1 : 0];
                    return t.s.selectMultiple ? n || [] : n
                }, t._valueEquals = function(e, n) {
                    return t.s.selectMultiple ? ke(e || [], n || []) : e === n
                }, t._onWheelMove = function(e) {
                    var n = e.wheelIndex,
                        a = e.selection,
                        s = e.dataItem;
                    if (!t._selectOnScroll && !a && 1 === n) {
                        var i = Ee(t._options, (function(e) {
                            return e.value === s.value
                        }));
                        return [s.isGroup ? s.value : i.group]
                    }
                }, t._validate = function(e) {
                    var n = e.values,
                        a = e.direction,
                        s = e.wheels,
                        i = e.index,
                        r = t._disabled,
                        o = t._selectOnScroll,
                        l = t.s.selectMultiple,
                        c = t.s.showGroupWheel,
                        h = c ? [t._disabledGroups, r] : [r],
                        d = c ? 1 : 0,
                        u = t._get(n),
                        m = {
                            disabled: h
                        };
                    if (i === d || i === ie)
                        if (l) {
                            var _ = [];
                            u.forEach((function(e) {
                                r.get(e) || _.push(e)
                            })), m.valid = t._parse(_), i !== ie && (m.valid[0] = n[0])
                        } else {
                            if (_e(u) && !o) return m.valid = c ? [null, null] : [null], m;
                            var p = hr(s[d], n[d], r, a);
                            if (c) {
                                var v = Ee(t._options, (function(e) {
                                    return e.value === p
                                }));
                                m.valid = [v.group, p]
                            } else m.valid = [p]
                        }
                    else {
                        var f = hr(s[0], n[0], h[0], a),
                            g = Ee(t._options, (function(e) {
                                return !(e.group !== f || o && r.get(e.value))
                            })),
                            y = t._touchUi || g.group === ie ? g.value : g.group;
                        if (o) m.valid = [f, y];
                        else {
                            m.valid = [f, n[1]];
                            var b = l ? [y] : y,
                                x = t._touchUi ? f : ie;
                            m.indexes = [x, b]
                        }
                    }
                    return m
                }, t._onClose = function(e) {
                    t._hook("onClose", e), t._filterText && setTimeout((function() {
                        return t._onFilterClear()
                    }), 100)
                }, t._saveSelected = function(e) {
                    if (t.s.selectMultiple) {
                        var n = new Map;
                        Gt(e, (function(e) {
                            var a = t._map.get(e);
                            n.set(e, a)
                        })), t._selectMap = n
                    }
                }, t
            }
            return a(t, e), t.prototype.reloadOptionElements = function() {
                var e = this;
                this._optionsReloaded = !0, this._setOptionsFromElm(), setTimeout((function() {
                    e.forceUpdate()
                }))
            }, t.prototype.setVal = function(e) {
                this._proxy("setVal", [e])
            }, t.prototype.getVal = function() {
                return _e(this._parsedValue) ? this._parsedValue : this._proxy("getVal")
            }, t.prototype.setTempVal = function(e) {
                this._proxy("setTempVal", [e])
            }, t.prototype.getTempVal = function() {
                return this._proxy("getTempVal")
            }, t.prototype.open = function() {
                this._proxy("open")
            }, t.prototype.close = function() {
                this._proxy("close")
            }, t.prototype._render = function(e) {
                var t = this._prevS,
                    n = this._touchUi && (!e.selectMultiple || "ios" === (e.baseTheme || e.theme)),
                    a = this._touchUi && !e.selectMultiple,
                    s = e.element !== t.element || e.selectElement !== t.selectElement,
                    i = e.data !== t.data,
                    r = i || this._optionsReloaded,
                    o = e.placeholder,
                    l = e.display !== t.display || o !== t.placeholder || a !== this._selectOnScroll,
                    c = r || s || e.invalid !== t.invalid || this._selectOnScroll !== a;
                if (this._selectOnScroll = a, e.showGroupWheel !== t.showGroupWheel && (this._groupChanged = !0), (s || l) && (this._isSelect = e.selectElement !== ie, this._isSelect ? this._setOptionsFromElm() : e.element || (this._options = [])), (i || l) && e.data && this._createOptionList(e.data), c && (this._disabled = function(e, t) {
                        var n = new Map;
                        return e && e.forEach((function(e) {
                            e.disabled && n.set(e.value, !0)
                        })), t && t.forEach((function(e) {
                            n.set(e, !0)
                        })), n
                    }(this._options, e.invalid), this._disabledGroups = function(e, t) {
                        var n = new Map;
                        return t && t.forEach((function(t) {
                            var a = t.group,
                                s = t.value;
                            a && (n.has(a) || n.set(a, !0), e.get(s) || n.set(a, !1))
                        })), n
                    }(this._disabled, a ? this._options : ie)), (c || n !== this._spaceAround || this._groupChanged || e.filter !== t.filter || e.selectMultiple !== t.selectMultiple) && this._createWheels(this._filterText, n), r || e.filter !== t.filter || e.touchUi !== t.touchUi || e.rows !== t.rows) {
                    var h = e.filter ? 1 / 0 : this._wheels[0][e.showGroupWheel ? 1 : 0].data.length,
                        d = (this._respProps || {}).rows,
                        u = this.props.rows,
                        m = this._touchUi ? e.rows : Math.min(d || u || 7, h);
                    this._rows = u || m
                }(this._groupChanged || e.wheelWidth !== t.wheelWidth || e.filter !== t.filter) && (this._wheelWidth = e.wheelWidth || (e.filter ? e.showGroupWheel ? [150, 250] : 400 : ie)), this._spaceAround = n, this._optionsReloaded = !1
            }, t.prototype._createOptionList = function(e) {
                var t = this.s,
                    n = t.placeholder,
                    a = [],
                    s = new Map,
                    i = new Map;
                this._selectMap.forEach((function(e, t) {
                    s.set(t, e)
                }));
                var r = !1,
                    o = function(e, n) {
                        e && e.value !== ie || (e = {
                            text: e,
                            value: e
                        }), _e(e.value) && (r = !0), t.showGroupWheel && e.group === ie && (e.group = io), s.set(e.value, e.text), i.set(e.text, e.value), a.splice(n, 0, e)
                    };
                e.forEach(o), "inline" === t.display && this._selectOnScroll && n && !r && o({
                    value: "",
                    text: n
                }, 0), this._map = s, this._reMap = i, this._options = a
            }, t.prototype._proxy = function(e, t) {
                var n = this._inst || this._scroller;
                if (n) return n[e].apply(n, t)
            }, t.prototype._createWheels = function(e, t) {
                var n = this,
                    a = this.s,
                    s = a.selectMultiple,
                    i = a.filter && e ? function(e, t) {
                        if (!t) return e;
                        var n = t.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&"),
                            a = new RegExp(n, "i");
                        return e.filter((function(e) {
                            return a.test(e.text)
                        }))
                    }(this._options, e) : this._options,
                    r = [],
                    o = [],
                    l = new Map;
                i.forEach((function(e) {
                    var t = e.group,
                        n = t && t !== io ? t : "",
                        a = l.get(n),
                        s = {
                            display: e.text,
                            value: e.value,
                            data: e
                        };
                    a ? a.push(s) : l.set(n, [s])
                }));
                var c = l.get("");
                c && (r.push.apply(r, c), this._selectOnScroll && o.push({
                    display: "",
                    value: io
                })), l.forEach((function(e, t) {
                    t && (r.push({
                        display: t,
                        isGroup: !0,
                        value: t
                    }), r.push.apply(r, e), o.push({
                        display: t,
                        value: t
                    }), n._disabled.set(t, !0))
                }));
                var h = {
                        checkmark: !0,
                        circular: !1,
                        closeOnTap: !s,
                        data: r,
                        multiple: s,
                        spaceAround: t
                    },
                    d = {
                        checkmark: !1,
                        circular: !1,
                        cssClass: "mbsc-select-group-wheel" + (s ? " mbsc-select-group-wheel-multi" : ""),
                        data: o,
                        multiple: !1,
                        spaceAround: t
                    };
                this._noResults = a.filter && !i.length, this._wheels = a.showGroupWheel ? [
                    [d, h]
                ] : [
                    [h]
                ]
            }, t.prototype._setOptionsFromElm = function() {
                for (var e = this.s.selectElement, t = e.options, n = [], a = !1, s = !1, i = 0; i < t.length; i++) {
                    var r = t[i],
                        o = r.parentElement,
                        l = "optgroup" === o.nodeName.toLowerCase() ? o.label : ie;
                    "" !== r.value ? n.push({
                        disabled: r.disabled,
                        group: l,
                        text: r.text,
                        value: r.value
                    }) : a = !0, r.defaultSelected && (s = !0)
                }
                a || (e.insertBefore(new Option(""), e.childNodes[0] || null), s || (e.value = "")), this._createOptionList(n)
            }, t.prototype._filter = function(e) {
                !1 !== this._hook("onFilter", {
                    filterText: e
                }) && (this._filterText = e, this._createWheels(e, this._spaceAround)), this.forceUpdate()
            }, t.defaults = s({}, ir.defaults, {
                dropdown: !0,
                filterEmptyText: "No results",
                filterPlaceholderText: "Search",
                rows: 5
            }), t._name = "Select", t
        }(Ua)),
        oo = Qr(ro, {
            before: function(e, t) {
                if ("select" === e.nodeName.toLowerCase()) {
                    for (var n = [], a = e, s = a.options, i = 0; i < s.length; i++) {
                        var r = s[i];
                        r.defaultSelected && n.push(r.text)
                    }
                    n.length && (t.defaultValue = n.join(", ")), e.style.display = "none", t.inputElement || "inline" === t.display ? t.element = t.inputElement || e : (t.inputComponent = "input", t.showInput = !0), t.selectElement = a, t.selectMultiple !== ie ? a.multiple = t.selectMultiple : t.selectMultiple = a.multiple
                } else t.element = e, t.defaultValue = e.value
            }
        }),
        lo = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return a(t, e), t.prototype._template = function(e) {
                return Ln("div", {
                    ref: this._setEl,
                    className: this._cssClass
                }, e.children)
            }, t
        }(function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return a(t, e), t.prototype._render = function(e) {
                this._cssClass = this._className + " mbsc-list-header" + this._theme + this._hb
            }, t
        }(Ua)),
        co = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return a(t, e), t.prototype._template = function(e) {
                var t = this.props;
                t.actionable;
                var n = t.children;
                t.className, t.data, t.drag, t.ripple, t.rtl;
                var a = t.theme;
                t.themeVariant, t.onHoverIn, t.onHoverOut, t.onDragEnd, t.onDragMove, t.onDragStart, t.onDragModeOn, t.onDragModeOff, t.onDelete, t.onClick;
                var r = i(t, ["actionable", "children", "className", "data", "drag", "ripple", "rtl", "theme", "themeVariant", "onHoverIn", "onHoverOut", "onDragEnd", "onDragMove", "onDragStart", "onDragModeOn", "onDragModeOff", "onDelete", "onClick"]);
                return Ln("div", s({
                    tabIndex: 0,
                    ref: this._setEl,
                    onClick: this._onClick,
                    className: this._cssClass
                }, r), Ln("div", {
                    dangerouslySetInnerHTML: this.textParam
                }), n, Ln("div", {
                    className: "mbsc-list-item-background mbsc-" + a
                }))
            }, t
        }(function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t._onClick = function(e) {
                    t._hook("onClick", {
                        domEvent: e
                    }), t.s.selected && t.setState({
                        hasFocus: !1
                    })
                }, t
            }
            return a(t, e), t.prototype._mounted = function() {
                var e, t, n = this;
                this._unlisten = Ts(this._el, {
                    click: !0,
                    keepFocus: !0,
                    onBlur: function() {
                        n.setState({
                            hasFocus: !1
                        })
                    },
                    onEnd: function(a) {
                        if (e) {
                            var i = s({}, a);
                            i.domEvent.preventDefault(), i.data = n.s.data, i.drag = !0, n._hook("onDragEnd", i), e = !1
                        }
                        clearTimeout(t)
                    },
                    onFocus: function() {
                        n.setState({
                            hasFocus: !0
                        })
                    },
                    onHoverIn: function(e) {
                        n.s.actionable && n.setState({
                            hasHover: !0
                        }), n._hook("onHoverIn", {
                            domEvent: e
                        })
                    },
                    onHoverOut: function(e) {
                        n.setState({
                            hasHover: !1
                        }), n._hook("onHoverOut", {
                            domEvent: e
                        })
                    },
                    onKeyDown: function(e) {
                        var t = n.s.data;
                        switch (e.keyCode) {
                            case Ys:
                            case Ps:
                                n._el.click(), e.preventDefault();
                                break;
                            case 8:
                            case 46:
                                t && !1 !== t.editable && n._hook("onDelete", {
                                    domEvent: e,
                                    event: t,
                                    source: "agenda"
                                })
                        }
                    },
                    onMove: function(a) {
                        var i = n.s,
                            r = s({}, a);
                        r.data = i.data, r.drag = !0, r.external = !0, !e && r.isTouch || r.domEvent.preventDefault(), e ? n._hook("onDragMove", r) : (Math.abs(r.deltaX) > 7 || Math.abs(r.deltaY) > 7) && (clearTimeout(t), !r.isTouch && i.drag && !1 !== i.data.editable && (e = !0, n._hook("onDragStart", r)))
                    },
                    onPress: function() {
                        n.s.actionable && n.setState({
                            isActive: !0
                        })
                    },
                    onRelease: function() {
                        n.setState({
                            isActive: !1
                        })
                    },
                    onStart: function(a) {
                        var i = n.s;
                        return a.isTouch && i.drag && !1 !== i.data.editable && !e && (t = setTimeout((function() {
                            var t = s({}, a);
                            t.data = i.data, t.drag = !0, n._hook("onDragModeOn", t), n._hook("onDragStart", t), e = !0
                        }), 350)), {
                            ripple: i.actionable && i.ripple
                        }
                    }
                })
            }, t.prototype._render = function(e, t) {
                this._cssClass = this._className + " mbsc-list-item" + this._theme + this._hb + this._rtl + (e.actionable ? " mbsc-list-item-actionable" : "") + (t.hasFocus ? " mbsc-focus" : "") + (t.hasHover ? " mbsc-hover" : "") + (t.isActive ? " mbsc-active" : "") + (e.selected ? " mbsc-selected" : "")
            }, t.prototype._destroy = function() {
                this._unlisten()
            }, t.defaults = {
                actionable: !0,
                ripple: !1
            }, t._name = "ListItem", t
        }(Ua)),
        ho = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return a(t, e), t.prototype._template = function(e) {
                return Ln("div", {
                    ref: this._setEl,
                    className: this._cssClass
                }, e.children)
            }, t
        }(function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return a(t, e), t.prototype._render = function(e) {
                this._cssClass = this._className + this._rtl + " mbsc-font mbsc-list" + this._theme
            }, t
        }(Ua)),
        uo = new h;

    function mo(e) {
        return uo.subscribe(e)
    }

    function _o(e) {
        uo.unsubscribe(e)
    }
    var po = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return a(t, e), t.prototype._render = function(e) {
                e.dragData !== this._prevS.dragData && (this._dragData = me(e.dragData) ? JSON.parse(e.dragData.toString()) : e.dragData)
            }, t.prototype._updated = function() {
                var e = this,
                    t = this.s.element || this._el;
                if (this._unlisten === ie && t) {
                    var n, a, i;
                    t.classList.add("mbsc-draggable");
                    var r = Pt(t).body,
                        o = function(e) {
                            n.style.left = e.endX + "px", n.style.top = e.endY + "px"
                        };
                    this._unlisten = Ts(t, {
                        onEnd: function(t) {
                            if (a) {
                                var o = s({}, t);
                                o.domEvent.preventDefault(), o.action = "externalDrop", o.event = e._dragData, o.create = !0, o.eventName = "onDragEnd", uo.next(o), a = !1, r.removeChild(n)
                            }
                            clearTimeout(i)
                        },
                        onMove: function(t) {
                            var l = s({}, t);
                            l.event = e._dragData, l.clone = n, l.create = !0, l.external = !0, !a && l.isTouch || l.domEvent.preventDefault(), a ? (o(t), l.eventName = "onDragMove", uo.next(l)) : (Math.abs(l.deltaX) > 7 || Math.abs(l.deltaY) > 7) && (clearTimeout(i), l.isTouch || (o(t), r.appendChild(n), l.eventName = "onDragStart", uo.next(l), a = !0))
                        },
                        onStart: function(l) {
                            var c = s({}, l);
                            a || ((n = t.cloneNode(!0)).classList.add("mbsc-drag-clone"), c.event = e._dragData, c.create = !0, c.external = !0, c.isTouch && (i = setTimeout((function() {
                                o(l), r.appendChild(n), c.clone = n, c.eventName = "onDragModeOn", uo.next(c), c.eventName = "onDragStart", uo.next(c), a = !0
                            }), 350)))
                        }
                    })
                }
            }, t.prototype._destroy = function() {
                this._unlisten && this._unlisten()
            }, t
        }(Ua),
        vo = 1;

    function fo(e, t, n, a, i, r) {
        var o = n,
            l = a,
            c = new Map,
            h = [];
        i && (o = pa(i, t)), r ? l = pa(r, t) : i && (l = Ta(o, 1));
        var d = Xi(e, o, l, t);
        for (var u in d)
            if (u)
                for (var m = 0, _ = d[u]; m < _.length; m++) {
                    var p = _[m],
                        v = pa(p.start, t),
                        f = pa(p.end, t) || v;
                    if (p.start) {
                        if (!c.has(p) && Zn(o, l, v, f)) {
                            var g = s({}, p);
                            (t.dataTimezone || t.displayTimezone) && (g.start = v.toISOString(), g.end = f.toISOString()), c.set(p, !0), h.push(g)
                        }
                    } else h.push(p)
                }
        return h
    }

    function go() {
        return "mbsc_" + vo++
    }

    function yo(e, t, n, a, s, i, r, o, l, c, h) {
        var d = t.color || o && o.color,
            u = t.start || t.date,
            m = t.recurring ? t.original.start : t.start,
            _ = t.allDay || !m,
            p = u ? pa(u, _ ? ie : e) : null,
            v = t.end ? pa(t.end, _ ? ie : e) : null,
            f = ea(e, t.allDay, p, v, l),
            g = p && f && !oa(p, f),
            y = !g || oa(p, n),
            b = !g || oa(f, n),
            x = _ || !c && g && !y && !b,
            T = h || !p || _ ? "" : ga(s, p, e),
            D = h || !v || _ ? "" : ga(s, v, e),
            C = h || x || !y && !c ? "" : T,
            S = h || x || !b && !c ? "" : D,
            w = t.title || t.text || "",
            k = w,
            M = k + (x ? "" : ", " + C + " - " + S),
            E = "DDDD, MMMM D, YYYY",
            N = !h && p ? ", " + e.fromText + ": " + ga(E, p, e) + (_ ? "" : ", " + T) : "",
            I = !h && v ? ", " + e.toText + ": " + ga(E, v, e) + (_ ? "" : ", " + D) : "";
        return {
            allDay: _,
            allDayText: x ? i : "",
            ariaLabel: k + (o && o.name ? ", " + o.name : "") + N + I,
            color: d,
            currentResource: o,
            date: +n,
            end: S,
            endDate: v || (p ? new Date(p) : null),
            html: w,
            id: t.id,
            isMultiDay: g,
            lastDay: !x && g && b ? r : "",
            original: t,
            position: {},
            resource: t.resource,
            slot: t.slot,
            start: C,
            startDate: p,
            style: {
                background: d,
                color: a && d ? Wt(d) : ""
            },
            title: k,
            tooltip: e.showEventTooltip ? t.tooltip || M : ie,
            uid: t.occurrenceId ? t.occurrenceId : t.id
        }
    }

    function bo(e) {
        var t = [];
        if (e)
            for (var n = 0, a = e; n < a.length; n++) {
                var s = a[n];
                s.id === ie && (s.id = go()), t.push(s)
            }
        return t
    }

    function xo(e, t, n, a, s, i, r, o, l) {
        if ("start-end" === o) {
            var c = Zi(e, a, t, n, i, r),
                h = Zi(e, s, t, n, i, r);
            if (c) return c;
            if (h) return h
        } else
            for (var d = l ? s : na(Ta(s, 1)), u = na(a); u < d; u.setDate(u.getDate() + 1)) {
                var m = Zi(e, u, t, n, i, r);
                if (m) return m
            }
        return !1
    }
    var To = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.state = {
                    activeDate: ie,
                    eventList: [],
                    popoverList: [],
                    selectedDate: ie
                }, t.print = be, t._pageLoad = 0, t._selectedDates = {}, t._shouldScrollSchedule = 0, t._update = 0, t._onScroll = Se((function() {
                    if (!t._isListScrolling && !t._viewChanged)
                        for (var e in t._listDays)
                            if (t._listDays[e]) {
                                var n = t._listDays[e];
                                if (n.offsetTop + n.offsetHeight - t._list.scrollTop > 0) {
                                    +e !== t._selected && (t._shouldSkipScroll = !0, t.setState({
                                        selectedDate: +e
                                    }), t._selectedChange(new Date(+e)));
                                    break
                                }
                            }
                })), t._isListScrolling = 0, t._remote = 0, t._onWeekDayClick = function(e) {
                    e !== t._selected && (t._skipScheduleScroll = !0, t.setState({
                        selectedDate: e
                    }), t._selectedChange(new Date(e)))
                }, t._onDayClick = function(e) {
                    var n = e.date,
                        a = +n,
                        s = ta(n),
                        i = t.state,
                        r = fi(t._eventMap[s], t.s.eventOrder),
                        o = t._showEventPopover,
                        l = o === ie ? !t._showEventLabels && !t._showEventList && !t._showSchedule : o,
                        c = !1 !== o && t._moreLabelClicked,
                        h = (l || c) && (!i.showPopover || i.showPopover && a !== i.popoverDate) && r && r.length > 0;
                    e.events = r, t._isEventClick || t._resetSelection(), t._hook("onCellClick", e), t._moreLabelClicked = !1, e.disabled || (t.setState({
                        selectedDate: a
                    }), a !== t._selected && (t._skipScheduleScroll = !0, t._selectedChange(n))), h && setTimeout((function() {
                        t._anchor = e.target, t._popoverClass = t._popoverClass.replace(" mbsc-popover-hidden", ""), t.setState({
                            popoverDate: a,
                            popoverList: r.map((function(e) {
                                return t._getEventData(e, n)
                            })),
                            showPopover: !0
                        })
                    })), t._isEventClick = !1
                }, t._onActiveChange = function(e) {
                    var n = t._getValidDay(e.date, e.dir),
                        a = {
                            activeDate: n
                        };
                    t._active = n, t._update++, t._skipScheduleScroll = e.pageChange && !e.nav, (e.pageChange || e.today) && (a.selectedDate = n, t._selectedChange(new Date(n))), t.setState(a)
                }, t._onGestureStart = function(e) {
                    t._hidePopover()
                }, t._onDayDoubleClick = function(e) {
                    t._dayClick("onCellDoubleClick", e)
                }, t._onDayRightClick = function(e) {
                    t._dayClick("onCellRightClick", e)
                }, t._onCellHoverIn = function(e) {
                    e.events = t._eventMap[ta(e.date)], t._hook("onCellHoverIn", e)
                }, t._onCellHoverOut = function(e) {
                    e.events = t._eventMap[ta(e.date)], t._hook("onCellHoverOut", e)
                }, t._onEventHoverIn = function(e) {
                    t._hoverTimer = setTimeout((function() {
                        t._isHover = !0, t._eventClick("onEventHoverIn", e)
                    }), 150)
                }, t._onEventHoverOut = function(e) {
                    clearTimeout(t._hoverTimer), t._isHover && (t._isHover = !1, t._eventClick("onEventHoverOut", e))
                }, t._onEventClick = function(e) {
                    var n = t.s;
                    t._handleMultipleSelect(e), !1 === t._eventClick("onEventClick", e) || n.selectMultipleEvents || n.eventDelete || (n.dragToCreate || n.clickToCreate) && !n.eventDelete || t._hidePopover()
                }, t._onEventDoubleClick = function(e) {
                    t._eventClick("onEventDoubleClick", e)
                }, t._onEventRightClick = function(e) {
                    t._eventClick("onEventRightClick", e)
                }, t._onEventDragEnd = function(e) {
                    t._hook("onEventDragEnd", e)
                }, t._onEventDragStart = function(e) {
                    t._hook("onEventDragStart", e)
                }, t._onLabelHoverIn = function(e) {
                    t._hoverTimer = setTimeout((function() {
                        t._isHover = !0, t._labelClick("onEventHoverIn", e)
                    }), 150)
                }, t._onLabelHoverOut = function(e) {
                    clearTimeout(t._hoverTimer), t._isHover && (t._isHover = !1, t._labelClick("onEventHoverOut", e))
                }, t._onLabelClick = function(e) {
                    t._handleMultipleSelect(e), t._hook("onLabelClick", e), t._labelClick("onEventClick", e), t._isEventClick = !0, e.label || (t._moreLabelClicked = !0)
                }, t._onLabelDoubleClick = function(e) {
                    t._labelClick("onEventDoubleClick", e)
                }, t._onLabelRightClick = function(e) {
                    t._labelClick("onEventRightClick", e)
                }, t._onCellClick = function(e) {
                    t._resetSelection(), t._cellClick("onCellClick", e)
                }, t._onCellDoubleClick = function(e) {
                    t._cellClick("onCellDoubleClick", e)
                }, t._onCellRightClick = function(e) {
                    t._cellClick("onCellRightClick", e)
                }, t._onPageChange = function(e) {
                    setTimeout((function() {
                        t._hidePopover()
                    })), t._isPageChange = !0, t._hook("onPageChange", e)
                }, t._onPageLoading = function(e) {
                    var n = t.s,
                        a = Xi(t._events, e.viewStart, e.viewEnd, n);
                    t._colorsMap = Xi(n.colors, e.viewStart, e.viewEnd, n), t._invalidsMap = Xi(n.invalid, e.viewStart, e.viewEnd, n, !0), t._validsMap = Xi(n.valid, e.viewStart, e.viewEnd, n, !0), t._eventMap = a, t._firstDay = ra(e.firstDay, n, t._firstWeekDay), t._lastDay = e.lastDay, n.labels || !t._showEventLabels && !t._showEventCount ? n.marked || (e.inst._marksMap = a) : e.inst._labelsMap = a, e.viewChanged && t._hook("onPageLoading", e)
                }, t._onPageLoaded = function(e) {
                    t._shouldAnimateScroll = t._isPageChange, t._isPageChange = !1;
                    var n = t._showEventList || t._showSchedule || t._showTimeline,
                        a = t._showSchedule ? t._scheduleType : t._showTimeline ? t._timelineType : t._eventListType;
                    if (n && (!t._showCalendar || "day" !== a)) {
                        var s = t.s,
                            i = e.month,
                            r = t._showEventList && i && "month" === a,
                            o = r ? i : e.firstDay,
                            l = r ? s.getDate(s.getYear(i), s.getMonth(i) + t._eventListSize, 1) : e.lastDay;
                        t._setEventList(o, l)
                    }
                    t._hook("onPageLoaded", e)
                }, t._onPopoverClose = function() {
                    t._hidePopover()
                }, t._onResize = function(e) {
                    var n;
                    if (t._showEventList && m) {
                        var a = e.target,
                            s = a.offsetHeight,
                            i = a.getBoundingClientRect().top;
                        n = s - t._list.getBoundingClientRect().top + i > 170
                    }
                    t.setState({
                        height: e.height,
                        isListScrollable: n,
                        width: e.width
                    })
                }, t._onSelectedEventsChange = function(e) {
                    t._emit("selectedEventsChange", e), t._hook("onSelectedEventsChange", {
                        events: e
                    })
                }, t._getDragDates = function(e, n, a) {
                    for (var s = {}, i = t._firstWeekDay, r = ea(t.s, a.allDay, e, n, !0), o = na(Ta(r, 1)), l = na(e); l < o; l.setDate(l.getDate() + 1)) {
                        var c = l.getDay(),
                            h = i - c > 0 ? 7 : 0;
                        oa(e, l) || c === i ? s[ta(l)] = {
                            event: a,
                            width: 100 * Math.min(sa(l, r) + 1, 7 + i - c - h)
                        } : s[ta(l)] = {}
                    }
                    return s
                }, t._onLabelUpdateModeOn = function(e) {
                    var n = e.create ? t._tempEvent : e.data;
                    if (n) {
                        var a = pa(n.start),
                            s = pa(n.end || a);
                        t.setState({
                            isTouchDrag: !0,
                            labelDragData: {
                                draggedEvent: n,
                                originDates: e.external ? ie : t._getDragDates(a, s, n)
                            }
                        })
                    }
                }, t._onLabelUpdateModeOff = function(e) {
                    var n = e.create ? t._tempEvent : e.data;
                    t._hook("onEventDragEnd", {
                        domEvent: e.domEvent,
                        event: n,
                        source: "calendar"
                    }), t.setState({
                        isTouchDrag: !1,
                        labelDragData: ie
                    })
                }, t._onLabelUpdateStart = function(e) {
                    var n = t.s,
                        a = t._el,
                        i = t._showWeekNumbers ? a.querySelector(".mbsc-calendar-week-nr").getBoundingClientRect().width : 0,
                        r = a.querySelectorAll(".mbsc-calendar-slide")["all" === t._calendarLabelList || de(t._calendarLabelList) ? 0 : 1],
                        o = r.getBoundingClientRect(),
                        l = a.querySelector(".mbsc-calendar-week-days"),
                        c = r.querySelectorAll(".mbsc-calendar-row"),
                        h = /click/.test(e.domEvent.type);
                    if (t._areaTop = 0, l) {
                        var d = l.getBoundingClientRect();
                        t._areaTop = d.top + d.height
                    }
                    t._areaLeft = o.left + (n.rtl ? 0 : i), t._areaBottom = o.top + o.height, t._areaRight = t._areaLeft + o.width - (n.rtl ? i : 0), t._calCellWidth = (t._areaRight - t._areaLeft) / 7;
                    var u = 0;
                    if (t._rowTops = [], c.forEach((function(n, a) {
                            var s = n.getBoundingClientRect().top - t._areaTop;
                            t._rowTops.push(s), e.endY - t._areaTop > s && (u = a)
                        })), e.create) {
                        var m = Ce((n.rtl ? t._areaRight - e.endX : e.endX - t._areaLeft) / t._calCellWidth),
                            _ = Ta(t._firstDay, 7 * u + m),
                            p = new Date(_.getFullYear(), _.getMonth(), _.getDate()),
                            v = Ta(p, 1),
                            f = n.exclusiveEndDates ? v : new Date(+v - 1),
                            g = n.extendDefaultEvent ? n.extendDefaultEvent({
                                start: p
                            }) : ie;
                        t._tempEvent = s({
                            allDay: !0,
                            end: f,
                            id: go(),
                            start: p,
                            title: n.newEventText
                        }, e.event, g)
                    }
                    h || t._hook("onEventDragStart", {
                        domEvent: e.domEvent,
                        event: e.create ? t._tempEvent : e.data,
                        source: "calendar"
                    })
                }, t._onLabelUpdateMove = function(e) {
                    var n = t.s,
                        a = e.create ? t._tempEvent : e.data,
                        i = a.allDay ? ie : n;
                    if (e.endY > t._areaTop && e.endY < t._areaBottom && e.endX > t._areaLeft && e.endX < t._areaRight) {
                        var r = t.state.labelDragData,
                            o = Ce((n.rtl ? t._areaRight - e.endX : e.endX - t._areaLeft) / t._calCellWidth),
                            l = Ce((n.rtl ? t._areaRight - e.startX : e.startX - t._areaLeft) / t._calCellWidth),
                            c = 0,
                            h = 0;
                        t._rowTops.forEach((function(n, a) {
                            e.startY - t._areaTop > n && (h = a), e.endY - t._areaTop > n && (c = a)
                        }));
                        var d = 7 * (c - h) + (o - l);
                        if (o !== t._tempDay || c !== t._tempWeek) {
                            var u = pa(a.start, i),
                                m = pa(a.end, i) || u,
                                _ = s({}, a),
                                p = u,
                                v = m;
                            if (e.external) {
                                var f = qn(u),
                                    g = +m - +u;
                                p = _a(n, +Ta(t._firstDay, 7 * c + o) + f), v = _a(n, +p + g)
                            } else if (e.drag) p = Ta(u, d), v = Ta(m, d);
                            else {
                                var y = n.rtl ? -1 : 1,
                                    b = e.create ? c === h ? e.deltaX * y > 0 : d > 0 : "end" === e.direction,
                                    x = sa(u, m);
                                b ? v = Ta(m, Math.max(-x, d)) : p = Ta(u, Math.min(x, d)), v < p && (b ? v = _a(i, p) : p = _a(i, v))
                            }
                            _.start = p, _.end = v, /mbsc-popover-hidden/.test(t._popoverClass) || (t._popoverClass = t._popoverClass + " mbsc-popover-hidden"), t.setState({
                                labelDragData: {
                                    draggedDates: t._getDragDates(p, v, _),
                                    draggedEvent: _,
                                    originDates: r && r.originDates
                                }
                            }), t._tempDay = o, t._tempWeek = c
                        }
                    }
                }, t._onLabelUpdateEnd = function(e) {
                    var n = t.state,
                        a = e.create,
                        s = n.labelDragData || {},
                        i = a ? t._tempEvent : e.data,
                        r = s.draggedEvent || i,
                        o = pa(i.start),
                        l = pa(i.end),
                        c = pa(r.start),
                        h = pa(r.end),
                        d = a || +o != +c || +l != +h,
                        u = {
                            allDay: i.allDay,
                            endDate: h,
                            original: i,
                            startDate: c
                        },
                        m = e.action || (s.draggedEvent ? "drag" : "click"),
                        _ = !d || t._onEventDragStop({
                            action: m,
                            collision: xo(t.s, t._invalidsMap, t._validsMap, c, h, t._minDate, t._maxDate, t.s.invalidateEvent, t.s.exclusiveEndDates),
                            create: a,
                            domEvent: e.domEvent,
                            event: u,
                            source: "calendar"
                        }),
                        p = n.isTouchDrag && (!a || _);
                    p || "click" === m || t._hook("onEventDragEnd", {
                        domEvent: e.domEvent,
                        event: i,
                        source: "calendar"
                    }), t.setState({
                        isTouchDrag: p,
                        labelDragData: p ? {
                            draggedEvent: r,
                            originDates: _ ? t._getDragDates(c, h, u.original) : s.originDates
                        } : {}
                    }), e.drag && t._hidePopover(), t._tempWeek = -1, t._tempDay = -1
                }, t._onEventDragStop = function(e) {
                    var n = t.s,
                        a = e.action,
                        i = e.resource,
                        r = e.slot,
                        o = e.collision,
                        l = e.create,
                        c = e.source,
                        h = e.event,
                        d = h.original,
                        u = d.recurring ? d.original : d,
                        m = s({}, u),
                        _ = s({}, u),
                        p = jn(d.start, n),
                        v = jn(h.startDate, n),
                        f = jn(h.endDate, n),
                        g = h.allDay,
                        y = _.recurring;
                    y ? _.recurringException = Ki(_.recurringException).concat([p]) : (_.allDay = g, _.start = v, _.end = f, i !== ie && (_.resource = i), r !== ie && (_.slot = r));
                    var b = !1,
                        x = y ? s({}, u) : u;
                    if ((l || y) && (y && delete x.recurring, (y || x.id === ie) && (x.id = go()), i !== ie && (x.resource = i), r !== ie && (x.slot = r), x.start = v, x.end = f, x.allDay = g, b = !1 !== t._hook("onEventCreate", s({
                            action: a,
                            domEvent: e.domEvent,
                            event: x,
                            source: c
                        }, y && {
                            originEvent: d
                        })), !1 !== o && (b = !1, t._hook("onEventCreateFailed", s({
                            action: a,
                            event: x,
                            invalid: o,
                            source: c
                        }, y && {
                            originEvent: d
                        })))), l && !y || (b = !1 !== t._hook("onEventUpdate", s({
                            domEvent: e.domEvent,
                            event: _,
                            oldEvent: m,
                            source: c
                        }, y && {
                            newEvent: x,
                            oldEventOccurrence: d
                        })), !1 !== o && (b = !1, t._hook("onEventUpdateFailed", s({
                            event: _,
                            invalid: o,
                            oldEvent: m,
                            source: c
                        }, y && {
                            newEvent: x,
                            oldEventOccurrence: d
                        })))), b && ((l || y) && (t._events.push(x), t._triggerCreated = {
                            action: a,
                            event: x,
                            source: c
                        }), l && !y || (y ? (h.id = x.id, h.original = x, u.recurringException = _.recurringException) : (u.start = v, u.end = f, u.allDay = g, i !== ie && (u.resource = i), r !== ie && (u.slot = r)), t._triggerUpdated = {
                            event: u,
                            oldEvent: m,
                            source: c
                        }), t._refresh = !0, "calendar" !== c)) {
                        var T = void 0,
                            D = void 0;
                        t._showCalendar && "day" === t._scheduleType ? D = na(Ta(T = new Date(t._selected), 1)) : (T = t._firstDay, D = t._lastDay), t._eventMap = Xi(t._events, T, D, n), t.forceUpdate()
                    }
                    return b
                }, t._onExternalDrag = function(e) {
                    if (t.s.externalDrop && t._showCalendar) switch (e.eventName) {
                        case "onDragModeOff":
                            t._onLabelUpdateModeOff(e);
                            break;
                        case "onDragModeOn":
                            t._onLabelUpdateModeOn(e);
                            break;
                        case "onDragStart":
                            t._onLabelUpdateStart(e);
                            break;
                        case "onDragMove":
                            var n = e.clone;
                            e.endY > t._areaTop && e.endY < t._areaBottom && e.endX > t._areaLeft && e.endX < t._areaRight ? (n.style.display = "none", t._onLabelUpdateMove(e), t._onCalendar = !0) : t._onCalendar && (n.style.display = "table", t.setState({
                                labelDragData: {}
                            }), t._tempWeek = -1, t._tempDay = -1, t._onCalendar = !1);
                            break;
                        case "onDragEnd":
                            e.endY > t._areaTop && e.endY < t._areaBottom && e.endX > t._areaLeft && e.endX < t._areaRight ? t._onLabelUpdateEnd(e) : (t.setState({
                                labelDragData: ie
                            }), t._hook("onEventDragEnd", {
                                domEvent: e.domEvent,
                                event: e.event,
                                source: "calendar"
                            }))
                    }
                }, t._onEventDelete = function(e) {
                    var n, a = t.s;
                    if ((a.eventDelete !== ie || a.dragToCreate || a.clickToCreate) && !1 !== a.eventDelete) {
                        for (var i, r, o, l = !1, c = !1, h = !1, d = e.event, u = a.selectMultipleEvents, m = u ? t._selectedEventsMap : ((n = {})[d.id] = d, n), _ = [], p = [], v = [], f = {}, g = [], y = 0, b = Le(m); y < b.length; y++) {
                            var x = b[y];
                            if (x.recurring) {
                                c = !0;
                                var T = (i = x.original).id;
                                f[T] ? o = f[T] : (r = s({}, i), o = s({}, i), p.push(i), _.push(r), v.push(o), f[T] = o);
                                var D = jn(x.start, a);
                                o.recurringException = Ki(o.recurringException).concat([D])
                            } else h = !0, d = x, g.push(x)
                        }
                        if (c)
                            if (!1 !== t._hook("onEventUpdate", {
                                    domEvent: e.domEvent,
                                    event: o,
                                    events: u ? v : ie,
                                    isDelete: !0,
                                    oldEvent: u ? ie : r,
                                    oldEvents: u ? _ : ie
                                })) {
                                l = !0;
                                for (var C = 0, S = p; C < S.length; C++) {
                                    var w = S[C],
                                        k = f[w.id];
                                    w.recurringException = k.recurringException
                                }
                                t._triggerUpdated = {
                                    event: i,
                                    events: u ? p : ie,
                                    oldEvent: u ? ie : r,
                                    oldEvents: u ? _ : ie,
                                    source: e.source
                                }
                            }
                        if (h) !1 !== t._hook("onEventDelete", {
                            domEvent: e.domEvent,
                            event: d,
                            events: u ? g : ie
                        }) && (l = !0, t._events = t._events.filter((function(e) {
                            return !m[e.id]
                        })), t._selectedEventsMap = {}, t._triggerDeleted = {
                            event: d,
                            events: u ? g : ie,
                            source: e.source
                        });
                        l && (t._hidePopover(), t.refresh())
                    }
                }, t._onKeyDown = function(e) {
                    9 === e.keyCode && t._resetSelection()
                }, t
            }
            return a(t, e), t.prototype.addEvent = function(e) {
                for (var t = [], n = 0, a = bo(he(e) ? e : [e]); n < a.length; n++) {
                    var s = a[n];
                    t.push("" + s.id), this._events.push(s)
                }
                return this.refresh(), t
            }, t.prototype.getEvents = function(e, t) {
                return fo(this._events, this.s, this._firstDay, this._lastDay, e, t)
            }, t.prototype.getInvalids = function(e, t) {
                return fo(this.s.invalid, this.s, this._firstDay, this._lastDay, e, t)
            }, t.prototype.getSelectedEvents = function() {
                return Le(this._selectedEventsMap)
            }, t.prototype.setEvents = function(e) {
                for (var t = [], n = bo(e), a = 0, s = n; a < s.length; a++) {
                    var i = s[a];
                    t.push("" + i.id)
                }
                return this._events = n, this.refresh(), t
            }, t.prototype.setSelectedEvents = function(e) {
                this._selectedEventsMap = (e || []).reduce((function(e, t) {
                    return t.occurrenceId ? e[t.occurrenceId] = t : e[t.id] = t, e
                }), {}), this.forceUpdate()
            }, t.prototype.removeEvent = function(e) {
                for (var t = he(e) ? e : [e], n = this._events, a = n.length, s = 0, i = t; s < i.length; s++)
                    for (var r = i[s], o = !1, l = 0; !o && l < a;) {
                        var c = n[l];
                        c.id !== r && c.id !== r.id || (o = !0, n.splice(l, 1)), l++
                    }
                this.refresh()
            }, t.prototype.navigate = function(e, t) {
                var n = +pa(e),
                    a = n !== this._selectedDateTime;
                a && (this._shouldAnimateScroll = !!t), this.s.selectedDate === ie ? !this._showSchedule && !this._showTimeline || a ? this.setState({
                    selectedDate: n
                }) : (this._shouldScrollSchedule++, this.forceUpdate()) : a && this._selectedChange(e)
            }, t.prototype.updateEvent = function(e) {
                for (var t = he(e) ? e : [e], n = this._events, a = n.length, i = 0, r = t; i < r.length; i++)
                    for (var o = r[i], l = !1, c = 0; !l && c < a;) {
                        n[c].id === o.id && (l = !0, n.splice(c, 1, s({}, o))), c++
                    }
                this.refresh()
            }, t.prototype.refresh = function() {
                this._refresh = !0, this.forceUpdate()
            }, t.prototype._isToday = function(e) {
                return oa(new Date(e), new Date)
            }, t.prototype._render = function(e, t) {
                var n, a, s, i = this,
                    r = this._prevS,
                    o = this._showDate,
                    l = e.displayTimezone !== r.displayTimezone || e.dataTimezone !== r.dataTimezone,
                    c = !1;
                if (this._colorEventList = e.eventTemplate === ie && e.renderEvent === ie && e.colorEventList, e.exclusiveEndDates === ie && (e.exclusiveEndDates = !!e.displayTimezone), _e(e.min) ? this._minDate = -1 / 0 : r.min !== e.min && (this._minDate = +pa(e.min)), _e(e.max) ? this._maxDate = 1 / 0 : r.max !== e.max && (this._maxDate = +pa(e.max)), e.selectedDate !== ie ? a = +pa(e.selectedDate) : (this._defaultDate || (this._defaultDate = +(e.defaultSelectedDate !== ie ? pa(e.defaultSelectedDate) : new Date)), a = t.selectedDate || this._defaultDate), this.eventList = t.eventList, e.data !== r.data && (this._events = bo(e.data), this._refresh = !0), (e.invalid !== r.invalid || e.colors !== r.colors || l) && (this._refresh = !0), JSON.stringify(e.view) !== JSON.stringify(r.view) || e.firstDay !== r.firstDay) {
                    var h = {
                        c: "eventcalendar",
                        eventListSize: this._eventListSize,
                        eventListType: this._eventListType,
                        firstDay: e.firstDay,
                        resourcesLength: e.resources ? e.resources.length : 0,
                        scheduleEndDay: this._scheduleEndDay,
                        scheduleEndTime: this._scheduleEndTime,
                        scheduleStartDay: this._scheduleStartDay,
                        scheduleStartTime: this._scheduleStartTime,
                        scheduleTimeCellStep: this._scheduleTimeCellStep,
                        scheduleTimeLabelStep: this._scheduleTimeLabelStep,
                        scheduleTimezones: this._scheduleTimezones,
                        scheduleType: this._scheduleType,
                        showCalendar: this._showCalendar,
                        showEventCount: this._showEventCount,
                        showEventLabels: this._showEventLabels,
                        showEventList: this._showEventList,
                        showMarked: !!e.marked,
                        showSchedule: this._showSchedule,
                        showScheduleDays: this._showScheduleDays,
                        slotsLength: e.slots ? e.slots.length : 0,
                        timelineEndDay: this._timelineEndDay,
                        timelineEndTime: this._timelineEndTime,
                        timelineListing: this._timelineListing,
                        timelineStartTime: this._timelineStartTime,
                        timelineTimeCellStep: this._timelineTimeCellStep,
                        timelineTimeLabelStep: this._timelineTimeLabelStep,
                        timelineType: this._timelineType,
                        v: za,
                        view: e.view
                    };
                    this._remote++, La(this), Oa("remote", this, h, (function(e) {
                        if (i._remote--, !i._remote) {
                            for (var t in e) e.hasOwnProperty(t) && (i[t] = e[t]);
                            Ha(e.notification), i._viewChanged = !0, i.forceUpdate()
                        }
                    }), "comp_" + this._uid)
                }
                if (this._showDate = !this._showScheduleDays && (this._showSchedule && "day" === this._scheduleType || this._showEventList && "day" === this._eventListType && this._eventListSize < 2), this._firstWeekDay = this._showSchedule ? this._scheduleStartDay : this._showTimeline ? this._timelineStartDay : e.firstDay, (this._refresh || e.locale !== r.locale || e.theme !== r.theme) && (c = !0, this._pageLoad++), e.resources !== r.resources && (this._resourcesMap = (e.resources || []).reduce((function(e, t) {
                        return e[t.id] = t, e
                    }), {})), e.selectMultipleEvents && e.selectedEvents !== r.selectedEvents && (this._selectedEventsMap = (e.selectedEvents || []).reduce((function(e, t) {
                        return t.occurrenceId ? e[t.occurrenceId] = t : e[t.id] = t, e
                    }), {})), this._selectedEventsMap === ie && (this._selectedEventsMap = {}), e.refDate !== r.refDate && (this._refDate = pa(e.refDate)), this._refDate || this._showCalendar || !this._showSchedule && !this._showTimeline || (this._refDate = na(new Date)), a !== this._selectedDateTime || this._viewChanged) {
                    var d = this._showCalendar && (this._showSchedule || this._showTimeline || this._showEventList) ? +$i(new Date(a), e, this._minDate, this._maxDate, ie, ie, 1) : ce(a, this._minDate, this._maxDate);
                    d = this._getValidDay(d), a !== d && (a = d, setTimeout((function() {
                        i._selectedChange(new Date(a))
                    }))), this._skipScheduleScroll || a === this._selectedDateTime || this._shouldScrollSchedule++, this._selectedDateTime = a
                }(n = +(s = na(new Date(a)))) === this._selected && o === this._showDate && e.locale === r.locale && r.dateFormatLong === e.dateFormatLong || (this._selectedDateHeader = this._showDate ? ga(e.dateFormatLong, s, e) : ""), n === this._selected && e.dataTimezone === r.dataTimezone && e.displayTimezone === r.displayTimezone || (this._shouldScroll = !this._isPageChange && !this._shouldSkipScroll, this._shouldAnimateScroll = this._shouldAnimateScroll !== ie ? this._shouldAnimateScroll : this._selected !== ie, this._selected = n, this._selectedDates = {}, this._selectedDates[+ua(e, new Date(n))] = !0, this._active = n, c = !0), c && this._showCalendar && ("day" === this._eventListType || "day" === this._scheduleType || "day" === this._timelineType) && this._setEventList(s, Ta(s, 1)), this._refresh && t.showPopover && setTimeout((function() {
                    i._hidePopover()
                })), this._refresh = !1, this._cssClass = this._className + " mbsc-eventcalendar" + (this._showEventList ? " mbsc-eventcalendar-agenda" : "") + (this._showSchedule ? " mbsc-eventcalendar-schedule" : "") + (this._showTimeline ? " mbsc-eventcalendar-timeline" : "")
            }, t.prototype._mounted = function() {
                this._unsubscribe = mo(this._onExternalDrag), Ot(this._el, es, this._onKeyDown)
            }, t.prototype._updated = function() {
                var e = this;
                if (this._shouldScroll && this.state.isListScrollable && (this._scrollToDay(), this._shouldScroll = !1, this._shouldAnimateScroll = ie), this._shouldLoadDays && (this._shouldLoadDays = !1, Gt(this._list.querySelectorAll("[mbsc-timestamp]"), (function(t) {
                        e._listDays[t.getAttribute("mbsc-timestamp")] = t
                    }))), this._shouldEnhance && (this._shouldEnhance = "popover" === this._shouldEnhance ? this._popoverList : this._list), this._triggerCreated) {
                    var t = this._triggerCreated,
                        n = "calendar" === t.source ? this._calendarView._body.querySelector('.mbsc-calendar-table-active .mbsc-calendar-text[data-id="' + t.event.id + '"]') : this._el.querySelector('.mbsc-schedule-event[data-id="' + t.event.id + '"]');
                    this._hook("onEventCreated", s({}, this._triggerCreated, {
                        target: n
                    })), this._triggerCreated = null
                }
                if (this._triggerUpdated) {
                    var a = this._triggerUpdated;
                    n = "calendar" === a.source ? this._calendarView._body.querySelector('.mbsc-calendar-table-active .mbsc-calendar-text[data-id="' + a.event.id + '"]') : this._el.querySelector('.mbsc-schedule-event[data-id="' + a.event.id + '"]');
                    this._hook("onEventUpdated", s({}, this._triggerUpdated, {
                        target: n
                    })), this._triggerUpdated = null
                }
                this._triggerDeleted && (this._hook("onEventDeleted", s({}, this._triggerDeleted)), this._triggerDeleted = null), this._viewChanged && setTimeout((function() {
                    e._viewChanged = !1
                }), 10), this._shouldSkipScroll && setTimeout((function() {
                    e._shouldSkipScroll = !1
                })), this._skipScheduleScroll = !1
            }, t.prototype._destroy = function() {
                _o(this._unsubscribe), Yt(this._el, es, this._onKeyDown)
            }, t.prototype._resetSelection = function() {
                this.s.selectMultipleEvents && Object.keys(this._selectedEventsMap).length > 0 && (this._selectedEventsMap = {}, this._onSelectedEventsChange([]), this.forceUpdate())
            }, t.prototype._getAgendaEvents = function(e, t, n) {
                var a = this,
                    s = [],
                    i = this.s;
                if (n && this._showEventList)
                    for (var r = function(e) {
                            var t = n[ta(e)];
                            if (t && t.length) {
                                var r = fi(t, i.eventOrder);
                                s.push({
                                    date: ga(i.dateFormatLong, e, i),
                                    events: r.map((function(t) {
                                        return a._getEventData(t, e)
                                    })),
                                    timestamp: +e
                                })
                            }
                        }, o = na(e); o < t; o.setDate(o.getDate() + 1)) r(o);
                return s
            }, t.prototype._getEventData = function(e, t) {
                var n, a = this.s;
                if (!e.color && e.resource) {
                    var s = he(e.resource) ? e.resource : [e.resource];
                    n = (this._resourcesMap || {})[s[0]]
                }
                var i = yo(a, e, t, this._colorEventList, a.timeFormat, a.allDayText, a.toText, n, !0);
                return i.html = this._safeHtml(i.html), i
            }, t.prototype._getValidDay = function(e, t) {
                void 0 === t && (t = 1);
                var n = this._rangeStartDay,
                    a = this._rangeEndDay;
                if (!this._showCalendar && "day" === this._rangeType && n !== ie && a !== ie) {
                    var s = new Date(e),
                        i = s.getDay(),
                        r = 0;
                    if ((a < n ? i > a && i < n : i > a || i < n) && (r = t < 0 ? a - i : n - i), r) return +Ta(s, r += t < 0 ? r > 0 ? -7 : 0 : r < 0 ? 7 : 0)
                }
                return e
            }, t.prototype._setEventList = function(e, t) {
                var n = this;
                setTimeout((function() {
                    n._eventListHTML = ie, n._shouldScroll = !0, n._listDays = null, n._scrollToDay(0), n.setState({
                        eventList: n._getAgendaEvents(e, t, n._eventMap)
                    })
                }))
            }, t.prototype._hidePopover = function() {
                this.state.showPopover && this.setState({
                    showPopover: !1
                })
            }, t.prototype._scrollToDay = function(e) {
                var t = this;
                if (this._list) {
                    var n = e,
                        a = void 0;
                    if (e === ie && this._listDays) {
                        var s = this._listDays[this._selected];
                        s && (n = s.offsetTop, a = this._shouldAnimateScroll)
                    }
                    n !== ie && (this._isListScrolling++, Bt(this._list, ie, n, a, !1, (function() {
                        setTimeout((function() {
                            t._isListScrolling--
                        }), 150)
                    })))
                }
            }, t.prototype._selectedChange = function(e) {
                this._emit("selectedDateChange", e), this._hook("onSelectedDateChange", {
                    date: e
                })
            }, t.prototype._cellClick = function(e, t) {
                this._hook(e, s({
                    target: t.domEvent.currentTarget
                }, t))
            }, t.prototype._dayClick = function(e, t) {
                var n = ta(t.date),
                    a = fi(this._eventMap[n], this.s.eventOrder);
                t.events = a, this._hook(e, t)
            }, t.prototype._labelClick = function(e, t) {
                t.label && this._hook(e, {
                    date: t.date,
                    domEvent: t.domEvent,
                    event: t.label,
                    source: "calendar"
                })
            }, t.prototype._eventClick = function(e, t) {
                return t.date = new Date(t.date), this._hook(e, t)
            }, t.prototype._handleMultipleSelect = function(e) {
                var t = e.label || e.event;
                if (t && this.s.selectMultipleEvents) {
                    var n = e.domEvent,
                        a = n.shiftKey || n.ctrlKey || n.metaKey ? this._selectedEventsMap : {},
                        i = t.occurrenceId || t.id;
                    a[i] ? delete a[i] : a[i] = t, this._selectedEventsMap = s({}, a), this._onSelectedEventsChange(Le(a)), this.s.selectedEvents === ie && this.forceUpdate()
                }
            }, t.defaults = s({}, ci, {
                actionableEvents: !0,
                allDayText: "All-day",
                data: [],
                dragTimeStep: 15,
                newEventText: "New event",
                noEventsText: "No events",
                showControls: !0,
                showEventTooltip: !0,
                view: {
                    calendar: {
                        type: "month"
                    }
                }
            }), t._name = "Eventcalendar", t
        }(Ua),
        Do = "mbsc-def";

    function Co(e, t, n, a, s, i) {
        for (var r = "start-end" === s, o = i ? n : na(Ta(n, 1)), l = 0, c = Object.keys(e); l < c.length; l++)
            for (var h = e[c[l]], d = na(t); d < o; d.setDate(d.getDate() + 1)) {
                var u = h[ta(d)];
                if (u) {
                    if (u.allDay && (!r || oa(d, t) || oa(d, n))) return u.allDay;
                    if (!a)
                        for (var m = 0, _ = u.invalids; m < _.length; m++) {
                            var p = _[m];
                            if (r) {
                                if (Zn(p.startDate, p.endDate, t, t, !0)) return p.original;
                                if (Zn(p.startDate, p.endDate, n, n)) return p.original
                            } else if (Zn(p.startDate, p.endDate, t, n)) return p.original
                        }
                }
            }
        return !1
    }

    function So(e, t, n, a, s) {
        for (var i = n.allDay || s, r = n.startDate, o = i ? ea(e, i, r, n.endDate) : n.endDate, l = i ? _a(e, r.getFullYear(), r.getMonth(), r.getDate()) : r, c = i ? _a(e, o.getFullYear(), o.getMonth(), o.getDate(), 23, 59, 59, 999) : o, h = !1, d = 0, u = t; d < u.length; d++) {
            for (var m = u[d], _ = 0, p = !1, v = void 0, f = 0, g = m; f < g.length; f++) {
                for (var y = g[f], b = !1, x = 0, T = y; x < T.length; x++) {
                    var D = T[x],
                        C = D.allDay,
                        S = D.startDate,
                        w = C ? ea(e, C, S, D.endDate) : D.endDate;
                    Zn(C ? _a(e, S.getFullYear(), S.getMonth(), S.getDate()) : S, C ? _a(e, w.getFullYear(), w.getMonth(), w.getDate(), 23, 59, 59, 999) : w, l, c, !0) && (b = !0, p = !0, v ? a[n.uid] = a[n.uid] || _ : a[D.uid] = _ + 1)
                }
                b || v || (v = y), _++
            }
            p && (v ? v.push(n) : m.push([n]), h = !0)
        }
        h || (a[n.uid] = 0, t.push([
            [n]
        ]))
    }

    function wo(e) {
        return (e = Math.abs(Te(e))) > 60 ? 60 * Te(e / 60) : 60 % e == 0 ? e : [6, 10, 12, 15, 20, 30].reduce((function(t, n) {
            return Math.abs(n - e) < Math.abs(t - e) ? n : t
        }))
    }

    function ko(e, t, n, a, s, i) {
        a && a > e && (e = a);
        var r = qn(e);
        return (t > r || s !== ie && i !== ie && !Da(e.getDay(), s, i)) && (r = t), 100 * (r - t) / n
    }

    function Mo(e, t, n, a, s) {
        e = e || {};
        var i = Object.keys(e),
            r = {},
            o = t.map((function(e) {
                return e.id
            })),
            l = n.map((function(e) {
                return e.id
            }));
        o.forEach((function(e) {
            r[e] = {}, l.forEach((function(t) {
                r[e][t] = {}
            }))
        }));
        for (var c = function(t) {
                for (var n = function(e) {
                        var n = e.resource,
                            i = e.slot,
                            c = n !== ie && a ? he(n) ? n : [n] : o,
                            h = i !== ie && s ? [i] : l;
                        c.forEach((function(n) {
                            var a = r[n];
                            a && h.forEach((function(n) {
                                var s = a[n];
                                s && (s[t] || (s[t] = []), s[t].push(e))
                            }))
                        }))
                    }, i = 0, c = e[t]; i < c.length; i++) {
                    n(c[i])
                }
            }, h = 0, d = i; h < d.length; h++) {
            c(d[h])
        }
        return r
    }

    function Eo(e, t) {
        var n = new Date(e),
            a = new Date(+Rn + t);
        return new Date(n.getFullYear(), n.getMonth(), n.getDate(), a.getHours(), a.getMinutes())
    }
    var No = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t._onScroll = function() {}, t._onEventDragModeOn = function(e) {
                    var n = e.create ? t._tempEvent : e.event,
                        a = e.create ? t._tempResource : e.resource,
                        s = e.create ? t._tempSlot : e.slot;
                    t.setState({
                        dragData: {
                            draggedEvent: n,
                            originDates: e.external ? ie : t._getDragDates(n, a, s),
                            resource: a
                        },
                        isTouchDrag: !0
                    })
                }, t._onEventDragModeOff = function(e) {
                    t._hook("onEventDragEnd", {
                        domEvent: e.domEvent,
                        event: e.event,
                        resource: e.resource,
                        slot: e.slot,
                        source: e.source
                    }), t.setState({
                        dragData: ie,
                        isTouchDrag: !1
                    })
                }, t._calcGridDimensions = function() {
                    var e = t.s,
                        n = t._resources,
                        a = t._isTimeline,
                        s = t._daysNr * (a ? 1 : n.length),
                        i = t._gridCont,
                        r = t._scrollCont,
                        o = i.getBoundingClientRect(),
                        l = r.getBoundingClientRect(),
                        c = a ? o.width : i.scrollWidth;
                    t._gridLeft = e.rtl ? o.right - c : o.left, t._gridRight = e.rtl ? o.right : o.left + c, t._gridTop = o.top, t._gridContTop = l.top, t._gridContBottom = l.bottom, t._gridContLeft = l.left, t._gridContRight = l.right, t._allDayTop = t._gridContTop, t._colWidth = c / s, t._colHeight = o.height
                }, t._onEventDragStart = function(e) {
                    var n = t.s,
                        a = e.click,
                        i = n.eventList,
                        r = t._isTimeline,
                        o = t._visibleResources,
                        l = t._slots,
                        c = n.dragTimeStep,
                        h = t._gridCont,
                        d = e.startX,
                        u = e.startY,
                        m = t._groupByResource,
                        _ = m ? t._daysNr : t._hasSlots ? t._slots.length : o.length;
                    t._resWidth = t._resCont ? t._resCont.offsetWidth : 0, t._scrollY = 0, t._scrollX = 0, t._calcGridDimensions();
                    var p = n.rtl ? t._gridRight - d : d - t._gridLeft,
                        v = ce(u - t._gridTop, 8, t._colHeight - 9),
                        f = Ce(p / t._colWidth),
                        g = 0,
                        y = f,
                        b = 0;
                    if (r) {
                        var x = h.querySelectorAll(".mbsc-timeline-row");
                        t._rowTops = [], b = Ce(p / (t._colWidth / l.length)) % l.length, x.forEach((function(e, n) {
                            var a = e.getBoundingClientRect().top - t._gridTop;
                            t._rowTops.push(a), v > a && (g = (t._rowStartIndex || 0) + n)
                        }))
                    } else {
                        var T = t._el.querySelector(".mbsc-schedule-all-day-wrapper"),
                            D = T && T.getBoundingClientRect();
                        t._allDayTop = D ? D.top : t._gridContTop, g = m ? Ce(f / _) : f % _, y = m ? f % _ : Ce(f / _)
                    }
                    var C = e.external ? ie : o[g],
                        S = C ? C.id : ie,
                        w = e.external ? ie : l[b],
                        k = w ? w.id : ie;
                    if (e.create) {
                        y = ce(y, 0, t._daysNr - 1);
                        var M = !r && n.showAllDay && e.endY < t._gridContTop,
                            E = "day" === n.type && 1 === n.size ? t._firstDay : t._days[y].date,
                            N = i || !e.external && !a ? c * An : t._stepCell,
                            I = t._getGridTime(E, p, v, y, a ? t._stepCell / An : c),
                            L = M || i ? E : I,
                            H = Ta(L, 1),
                            O = n.exclusiveEndDates ? H : new Date(+H - 1),
                            Y = M || i ? O : Ca(_a(n, +L + N), a ? 1 : c),
                            P = n.extendDefaultEvent ? n.extendDefaultEvent({
                                resource: S,
                                slot: k,
                                start: L
                            }) : ie,
                            F = s({
                                allDay: M,
                                end: Y,
                                id: go(),
                                resource: C && S !== Do ? S : ie,
                                slot: w && k !== Do ? k : ie,
                                start: L,
                                title: n.newEventText
                            }, P, e.event),
                            z = t._getEventData(F, E, C);
                        if (e.event) {
                            var V = +z.endDate - +z.startDate;
                            z.startDate = E, z.endDate = new Date(+E + V)
                        }
                        t._tempEvent = z, t._tempResource = S, t._tempSlot = k
                    }
                    a || t._hook("onEventDragStart", {
                        domEvent: e.domEvent,
                        event: (e.create ? t._tempEvent : e.event).original,
                        resource: S,
                        slot: k,
                        source: r ? "timeline" : "schedule"
                    })
                }, t._onEventDragMove = function(e) {
                    clearTimeout(t._scrollTimer);
                    var n = t.s,
                        a = n.rtl,
                        i = a ? -1 : 1,
                        r = t._isTimeline,
                        o = t._daysNr,
                        l = t._slots,
                        c = t._groupByResource,
                        h = t.state.dragData,
                        d = n.dragTimeStep,
                        u = n.timeFormat,
                        m = n.eventList,
                        _ = e.startX,
                        p = ce(e.endX, t._gridContLeft, t._gridContRight - 1),
                        v = ce(e.endY, t._gridContTop, t._gridContBottom - 1),
                        f = v - e.startY + t._scrollY,
                        g = a ? _ - p + t._scrollX : p - _ + t._scrollX,
                        y = r ? g : f,
                        b = r ? t._colWidth : t._colHeight - 16,
                        x = ce(a ? t._gridRight + t._scrollX - p : p - t._gridLeft + t._scrollX, 0, t._gridRight - t._gridLeft - 1),
                        T = ce(v - t._gridTop + t._scrollY, 8, t._colHeight - 9),
                        D = Ce((a ? t._gridRight - _ : _ - t._gridLeft) / t._colWidth),
                        C = Ce(x / t._colWidth),
                        S = n.showAllDay && e.endY < t._gridContTop,
                        w = t._scrollCont,
                        k = D,
                        M = C,
                        E = 0,
                        N = 0,
                        I = !1,
                        L = t._gridContBottom - e.endY,
                        H = e.endY - t._gridContTop,
                        O = e.endX - t._gridContLeft,
                        Y = t._gridContRight - e.endX,
                        P = (w.scrollWidth - w.clientWidth) * i,
                        F = a ? 0 : P,
                        z = a ? P : 0;
                    if (L < 30 && w.scrollTop < w.scrollHeight - w.clientHeight && (w.scrollTop += 5, t._scrollY += 5, I = !0), H < 30 && !S && w.scrollTop > 0 && (w.scrollTop -= 5, t._scrollY -= 5, I = !0), O < 30 + (a ? 0 : t._resWidth) && w.scrollLeft > z && (w.scrollLeft -= 5, t._scrollX -= 5 * i, I = !0), Y < 30 + (a ? t._resWidth : 0) && w.scrollLeft < F && (w.scrollLeft += 5, t._scrollX += 5 * i, I = !0), I && (t._scrollTimer = setTimeout((function() {
                            t._onEventDragMove(e)
                        }), 20)), r) N = Ce(x / (t._colWidth / l.length)) % l.length, t._rowTops.forEach((function(e, n) {
                        T > e && (E = (t._rowStartIndex || 0) + n)
                    }));
                    else {
                        var V = c ? o : t._resources.length;
                        k = c ? D % V : Ce(D / V), M = c ? C % V : Ce(C / V), E = c ? Ce(C / V) : C % V
                    }
                    k = ce(k, 0, o - 1), M = ce(M, 0, o - 1);
                    var R, A = e.create ? t._tempEvent : e.event,
                        W = A.startDate,
                        U = A.endDate,
                        B = +U - +W,
                        j = t._time,
                        K = Ce(j * y / b),
                        J = l[N].id,
                        X = t._visibleResources[E].id,
                        G = A.allDay,
                        q = G ? ie : n,
                        Z = G || m,
                        $ = W,
                        Q = U,
                        ee = t._days[k].date,
                        te = t._days[M].date,
                        ne = "day" === n.type && 1 === n.size ? 0 : sa(ee, te),
                        ae = ne - M + k;
                    if (e.drag || e.external) {
                        if (G = S || r && A.allDay, Z = S || m || r && A.allDay, q = G ? ie : n, A.allDay && !r && !S || e.external && !S) {
                            var se = na(Ta(W, ne));
                            $ = t._getGridTime(se, x, T, M, d)
                        } else r && !Z ? $ = Ca(_a(n, +W + K + (Un - j) * ne + j * ae), d) : (R = Ta(W, ne), $ = Z ? R : Ca(_a(q, +R + K), d));
                        Q = _a(q, +$ + B)
                    } else {
                        var re = r ? 0 : C - D,
                            oe = e.create ? re ? re > 0 : y > 0 : "end" === e.direction,
                            le = sa(W, U),
                            he = e.create ? t._tempResource : e.resource;
                        !r && c && he !== X && h && h.draggedEvent && (ne = sa(h.draggedEvent.startDate, h.draggedEvent.endDate) * (oe ? 1 : -1)), oe ? r && !Z ? Q = Ca(_a(n, +U + K + ne * (Un - j) + j * ae), d) : (R = Ta(U, Math.max(-le, ne)), Q = Z ? R : Ca(_a(q, +R + K), d), !Z && (qn(Q) > t._endTime + 1 || Q >= Ta(na(R), 1)) && (Q = _a(n, +na(R) + t._endTime + 1))) : r && !Z ? $ = Ca(_a(n, +W + K + ne * (Un - j) + j * ae), d) : (R = Ta(W, Math.min(le, ne)), $ = Z ? R : Ca(_a(q, +R + K), d), !Z && (qn($) < t._startTime || $ < na(R)) && ($ = _a(n, +na(R) + t._startTime))), X = he, Z && Q < $ && (oe ? Q = _a(n, $) : $ = _a(n, Q)), !Z && (Q < $ || Math.abs(+Q - +$) < d * An) && (oe ? Q = _a(n, +$ + d * An) : $ = _a(n, +Q - d * An))
                    }
                    if (t._tempStart !== +$ || t._tempEnd !== +Q || t._tempAllDay !== G || t._tempResource !== X || t._tempSlot !== J) {
                        var de = s({}, A);
                        de.startDate = $, de.endDate = Q, de.start = ga(u, $, n), de.end = ga(u, Q, n), de.allDay = G, t._tempStart = +$, t._tempEnd = +Q, t._tempAllDay = G, t._tempResource = X, t._tempSlot = J, t.setState({
                            dragData: {
                                draggedDates: t._getDragDates(de, X, J),
                                draggedEvent: de,
                                originDates: h && h.originDates,
                                resource: X,
                                slot: J
                            }
                        })
                    }
                }, t._onEventDragEnd = function(e) {
                    clearTimeout(t._scrollTimer);
                    var n = t.s,
                        a = e.create,
                        s = t.state,
                        i = s.dragData;
                    if (a && !i && ((i = {}).draggedEvent = t._tempEvent), i && i.draggedEvent) {
                        var r = e.event,
                            o = i.draggedEvent,
                            l = o.startDate,
                            c = o.endDate,
                            h = o.allDay,
                            d = o.original,
                            u = e.resource,
                            m = i.resource === ie ? u : i.resource,
                            _ = d.resource === ie ? m : d.resource,
                            p = a ? t._tempSlot : e.slot,
                            v = i.slot === ie ? p : i.slot,
                            f = {},
                            g = t._isTimeline ? "timeline" : "schedule",
                            y = a || +l != +r.startDate || +c != +r.endDate || h !== r.allDay || u !== m || p !== v,
                            b = _;
                        if (u !== m && !a && !t._isSingleResource)
                            if (he(_) && _.length && m) {
                                var x = _.indexOf(u); - 1 === _.indexOf(m) && (b = _.slice()).splice(x, 1, m)
                            } else b = m;
                        for (var T = 0, D = b && n.resources ? he(b) ? b : [b] : t._resources.map((function(e) {
                                return e.id
                            })); T < D.length; T++) {
                            var C = D[T];
                            t._invalids[C] && (f[C] = t._invalids[C][v])
                        }
                        var S = e.action || (s.dragData ? "drag" : "click"),
                            w = !y || n.eventDragEnd({
                                action: S,
                                collision: Co(f, l, c, h, n.invalidateEvent, n.exclusiveEndDates),
                                create: a,
                                domEvent: e.domEvent,
                                event: o,
                                resource: b !== Do ? b : ie,
                                slot: v !== Do ? v : ie,
                                source: g
                            }),
                            k = s.isTouchDrag && (!a || w);
                        if (w && k && u !== m && !d.color) {
                            var M = Ee(t._resources, (function(e) {
                                    return e.id === m
                                })),
                                E = M && M.color;
                            E ? (o.color = E, o.style.background = E, o.style.color = Wt(E)) : (o.color = ie, o.style = {})
                        }
                        k || "click" === S || t._hook("onEventDragEnd", {
                            domEvent: e.domEvent,
                            event: (a ? t._tempEvent : e.event).original,
                            resource: m,
                            slot: v,
                            source: g
                        }), t.setState({
                            dragData: k ? {
                                draggedEvent: o,
                                originDates: w ? t._getDragDates(o, m, v) : i.originDates
                            } : ie,
                            isTouchDrag: k
                        }), t._tempStart = 0, t._tempEnd = 0, t._tempAllDay = ie
                    }
                }, t._onExternalDrag = function(e) {
                    if (t.s.externalDrop) {
                        var n = e.endY < t._gridContBottom && e.endY > t._allDayTop && e.endX > t._gridContLeft && e.endX < t._gridContRight;
                        switch (e.eventName) {
                            case "onDragModeOff":
                                t._onEventDragModeOff(e);
                                break;
                            case "onDragModeOn":
                                t._onEventDragModeOn(e);
                                break;
                            case "onDragStart":
                                t._onEventDragStart(e);
                                break;
                            case "onDragMove":
                                var a = e.clone;
                                n ? (a.style.display = "none", t._onEventDragMove(e), t._onCalendar = !0) : t._onCalendar && (clearTimeout(t._scrollTimer), a.style.display = "table", t.setState({
                                    dragData: {}
                                }), t._tempStart = 0, t._tempEnd = 0, t._tempAllDay = ie, t._onCalendar = !1);
                                break;
                            case "onDragEnd":
                                n ? t._onEventDragEnd(e) : (t.setState({
                                    dragData: ie,
                                    isTouchDrag: !1
                                }), t._hook("onEventDragEnd", {
                                    domEvent: e.domEvent,
                                    event: e.event,
                                    resource: e.resource,
                                    slot: e.slot,
                                    source: e.source
                                }))
                        }
                    }
                }, t
            }
            return a(t, e), t.prototype._isToday = function(e) {
                return oa(new Date(e), new Date)
            }, t.prototype._formatTime = function(e, t) {
                var n = this.s,
                    a = n.timeFormat,
                    s = /a/i.test(a) && this._stepLabel === Wn && e % Wn == 0 ? a.replace(/.[m]+/i, "") : a,
                    i = new Date(+Rn + e),
                    r = _a(n, i.getFullYear(), i.getMonth(), i.getDate(), i.getHours(), i.getMinutes());
                return Bn(r) && t && r.setTimezone(t), ga(s, r, n)
            }, t.prototype._getEventPos = function(e, t, n, a) {
                var s = this.s,
                    i = e.allDay ? ie : s,
                    r = _a(i, t.getFullYear(), t.getMonth(), t.getDate()),
                    o = this._dayIndexMap[n],
                    l = na(Ta(r, 1)),
                    c = i ? this._firstDayTz : this._firstDay,
                    h = i ? this._lastDayTz : this._lastDay,
                    d = this._isTimeline,
                    u = !d && !this._groupByResource,
                    m = e.allDay,
                    _ = this._startTime,
                    p = this._endTime + 1,
                    v = this._time,
                    f = this._hasSlots,
                    g = e.endDate,
                    y = e.start,
                    b = e.startDate,
                    x = e.end,
                    T = ea(s, m, b, g),
                    D = +b == +T ? 1 : 0;
                if (m || d) {
                    if (!a.get(e.original) || f || u) {
                        var C = s.startDay,
                            S = s.endDay,
                            w = s.eventList,
                            k = m || w,
                            M = !oa(b, T),
                            E = this._daysNr;
                        d && M && qn(b) >= p && (b = _a(s, +na(b) + p));
                        var N = k ? T : g,
                            I = ko(b, _, v, c, C, S),
                            L = function(e, t, n, a, s, i, r, o, l, c) {
                                var h = e,
                                    d = t;
                                h < a && (h = a), d > s && (d = s);
                                var u = qn(h),
                                    m = qn(d);
                                i > u && (u = i), r < m && (m = r), oa(h, d) || (u > r && (u = r), m < i && (m = i));
                                var _ = 0;
                                if (oa(h, d)) _ = c ? n : m - u;
                                else
                                    for (var p = na(h); p <= d; p.setDate(p.getDate() + 1)) Da(p.getDay(), o, l) && (!c && oa(p, h) ? _ += n - u + i : !c && oa(p, d) ? _ += m - i : _ += n);
                                return 100 * _ / n
                            }(b, N, v, c, h, _, p, C, S, k);
                        d && (L /= E, I = (I + 100 * o) / E);
                        var H = d ? k ? {
                                left: s.rtl ? "" : (f ? 0 : 100 * o / E) + "%",
                                right: s.rtl ? (f ? 0 : 100 * o / E) + "%" : "",
                                width: (f ? 100 : L) + "%"
                            } : {
                                height: this._setRowHeight ? "" : "100%",
                                left: s.rtl ? "" : I + "%",
                                right: s.rtl ? I + "%" : "",
                                top: "0",
                                width: L + "%"
                            } : {
                                width: (M && !u ? L : 100) + "%"
                            },
                            O = qn(b) < p && T > c,
                            Y = qn(T) + D > _;
                        if (k || M && L > 0 || O && Y) return a.set(e.original, !0), {
                            end: x,
                            endDate: T,
                            position: H,
                            start: y,
                            startDate: b
                        }
                    }
                } else if (b < r && (y = "", b = _a(s, r)), T >= l && (x = "", T = _a(s, +l - 1)), g >= l && (g = _a(s, +l - 1)), qn(b) < p && qn(T) + D > _ && T >= b) {
                    var P = function(e, t, n, a, s) {
                        var i = qn(e),
                            r = qn(t);
                        return a > i && (i = a), s < r && (r = s), 100 * (r - i) / n
                    }(b, g, v, _, p);
                    return {
                        cssClass: P < 2 ? " mbsc-schedule-event-small-height" : "",
                        end: x,
                        endDate: T,
                        position: {
                            height: P + "%",
                            top: ko(b, _, v) + "%",
                            width: "100%"
                        },
                        start: y,
                        startDate: b
                    }
                }
            }, t.prototype._getEventData = function(e, t, n, a) {
                var s = this.s,
                    i = yo(s, e, t, !0, s.timeFormat, s.allDayText, "", n, !1, this._isTimeline, a);
                return i.html = this._safeHtml(i.html), e.allDay && s.exclusiveEndDates && +i.endDate == +i.startDate && (i.endDate = na(Ta(i.startDate, 1))), i
            }, t.prototype._getEvents = function(e) {
                for (var t = this, n = this.s, a = this._resources, s = this._slots, i = this._hasSlots, r = this._isTimeline, o = !r, l = {}, c = Mo(e, a, s, !!n.resources, !!n.slots), h = {}, d = this._firstDay, u = this._lastDay, m = function(a) {
                        var m = a.id,
                            p = new Map,
                            v = [],
                            f = 0;
                        l[m] = {};
                        for (var g = function(s) {
                                var g = s.id,
                                    y = c[m][g],
                                    b = Object.keys(y).sort();
                                l[m][g] = {
                                    all: {
                                        allDay: [],
                                        events: []
                                    }
                                }, o && (h[g] = vi(n, y, d, u, -1, _._daysNr, !0, n.startDay, !1, n.eventOrder));
                                for (var x = function(s) {
                                        var c = e[s].date;
                                        if (_._dayIndexMap[s] !== ie && Da(c.getDay(), n.startDay, n.endDay)) {
                                            var d = fi(y[s]) || [],
                                                u = [],
                                                b = {},
                                                x = !i && r ? "all" : s,
                                                T = 0;
                                            (o || i) && (l[m][g][x] = {
                                                allDay: [],
                                                events: []
                                            });
                                            for (var D = 0, C = d; D < C.length; D++) {
                                                var S = C[D];
                                                if (!S.allDay || r) {
                                                    var w = _._getEventData(S, c, a),
                                                        k = _._getEventPos(w, c, s, p);
                                                    k && (w.cssClass = k.cssClass, w.position = k.position, o && (w.showText = !0, So(n, u, w, b, n.eventList)), l[m][g][x].events.push(w), v.push(w), T++)
                                                }
                                            }
                                            if (i && T > f && (f = T), o) {
                                                h[g][s] && h[g][s].data.forEach((function(e) {
                                                    var n = e.event,
                                                        i = e.width;
                                                    if (n) {
                                                        var r = t._getEventData(n, c, a),
                                                            o = t._getEventPos(r, c, s, p);
                                                        r.position = {
                                                            width: o ? o.position.width : i
                                                        }, r.showText = !!o, l[m][g][x].allDay.push(r)
                                                    }
                                                }));
                                                for (var M = function(e) {
                                                        var t = e.length;
                                                        e.forEach((function(e, a) {
                                                            for (var s = 0, i = e; s < i.length; s++) {
                                                                var r = i[s],
                                                                    o = ((b[r.uid] || t) - a) / t * 100;
                                                                r.position.width = o + "%", r.position[n.rtl ? "right" : "left"] = 100 * a / t + "%", r.position[n.rtl ? "left" : "right"] = "auto"
                                                            }
                                                        }))
                                                    }, E = 0, N = u; E < N.length; E++) {
                                                    M(N[E])
                                                }
                                            }
                                        }
                                    }, T = 0, D = b; T < D.length; T++) {
                                    x(D[T])
                                }
                            }, y = 0, b = s; y < b.length; y++) {
                            g(b[y])
                        }
                        if (r && !i) {
                            for (var x = [], T = {}, D = _._setRowHeight, C = 0, S = v; C < S.length; C++) {
                                var w = S[C];
                                So(n, x, w, T, n.eventList)
                            }
                            for (var k = function(e) {
                                    var t = e.length;
                                    D && t > f && (f = t), e.forEach((function(e, n) {
                                        for (var a = 0, s = e; a < s.length; a++) {
                                            var i = s[a],
                                                r = ((T[i.uid] || t) - n) / t * 100;
                                            i.position.height = D ? "" : r + "%", i.position.top = D ? n : 100 * n / t + "%"
                                        }
                                    }))
                                }, M = 0, E = x; M < E.length; M++) {
                                k(E[M])
                            }
                        }
                        _._eventRows[m] = f || 1
                    }, _ = this, p = 0, v = a; p < v.length; p++) {
                    m(v[p])
                }
                return l
            }, t.prototype._getInvalids = function(e) {
                for (var t, n = this.s, a = n.eventList, s = {}, i = Mo(e, this._resources, this._slots, !!n.resources, !!n.slots), r = Object.keys(e || {}).sort(), o = a ? na(new Date(n.minDate)) : new Date(n.minDate), l = a ? na(Ta(new Date(n.maxDate), 1)) : new Date(n.maxDate), c = this._isTimeline, h = 0, d = this._resources; h < d.length; h++) {
                    var u = d[h],
                        m = u.id,
                        _ = new Map;
                    s[m] = {};
                    for (var p = 0, v = this._slots; p < v.length; p++) {
                        var f = v[p].id,
                            g = {
                                invalids: []
                            };
                        s[m][f] = {
                            all: g
                        };
                        for (var y = 0, b = r; y < b.length; y++) {
                            var x = b[y],
                                T = pa(x);
                            if (Da(T.getDay(), n.startDay, n.endDay)) {
                                var D = i[m][f][x] || [],
                                    C = {
                                        invalids: []
                                    },
                                    S = [];
                                s[m][f][x] = C, T < o && D.push({
                                    end: o,
                                    start: new Date(T)
                                }), T >= na(l) && D.push({
                                    end: new Date(this._lastDay),
                                    start: l
                                });
                                for (var w = 0, k = D; w < k.length; w++) {
                                    var M = k[w];
                                    if (me(M) || ha(M)) {
                                        var E = pa(M);
                                        M = {
                                            allDay: !0,
                                            end: new Date(E),
                                            start: E
                                        }
                                    }
                                    var N = this._getEventData(M, T, u, !0);
                                    N.cssClass = "", N.position = ie;
                                    var I = this._getEventPos(N, T, x, _);
                                    if (I && (!c && 0 === qn(I.startDate) && new Date(+I.endDate + 1) >= Ta(T, 1) ? N.allDay = !0 : (N.position = I.position, qn(I.startDate) <= this._startTime && (N.cssClass += " mbsc-schedule-invalid-start"), qn(I.endDate) >= this._endTime && (N.cssClass += " mbsc-schedule-invalid-end")), S.push(N)), C.invalids.push(N), N.allDay) {
                                        c || (N.position = {}), C.allDay = N, C.invalids = [N], S = [N];
                                        break
                                    }
                                }(t = g.invalids).push.apply(t, S)
                            }
                        }
                    }
                }
                return s
            }, t.prototype._getColors = function(e) {
                for (var t = this.s, n = {}, a = Mo(e, this._resources, this._slots, !!t.resources, !!t.slots), s = Object.keys(e || {}).sort(), i = this._hasSlots, r = this._isTimeline, o = 0, l = this._resources; o < l.length; o++) {
                    var c = l[o],
                        h = c.id,
                        d = new Map;
                    n[h] = {};
                    for (var u = 0, m = this._slots; u < m.length; u++) {
                        var _ = m[u].id;
                        n[h][_] = {
                            all: {
                                colors: []
                            }
                        };
                        for (var p = 0, v = s; p < v.length; p++) {
                            var f = v[p],
                                g = pa(f);
                            if (Da(g.getDay(), t.startDay, t.endDay)) {
                                var y = a[h][_][f] || [],
                                    b = !i && r ? "all" : f;
                                r && !i || (n[h][_][b] = {
                                    colors: []
                                });
                                for (var x = n[h][_][b], T = 0, D = y; T < D.length; T++) {
                                    var C = D[T],
                                        S = this._getEventData(C, g, c, !0);
                                    if (S.allDay && !r) x.allDay = S;
                                    else {
                                        var w = this._getEventPos(S, g, f, d);
                                        w && (S.position = w.position, S.cssClass = "", qn(w.startDate) <= this._startTime && (S.cssClass += " mbsc-schedule-color-start"), qn(w.endDate) >= this._endTime && (S.cssClass += " mbsc-schedule-color-end"), x.colors.push(S))
                                    }
                                    S.position.background = C.background, S.position.color = C.textColor ? C.textColor : Wt(C.background)
                                }
                            }
                        }
                    }
                }
                return n
            }, t.prototype._flattenResources = function(e, t, n, a) {
                for (var s = 0, i = e && e.length ? e : [{
                        id: Do
                    }]; s < i.length; s++) {
                    var r = i[s];
                    r.depth = n, t.push(r), r.children && (this._hasHierarchy = !0, r.collapsed && !a || this._flattenResources(r.children, t, n + 1, a))
                }
                return t
            }, t.prototype._render = function(e, t) {
                var n = this,
                    a = this._prevS,
                    s = this._isTimeline,
                    i = new Date(e.selected),
                    r = +e.size,
                    o = wo(e.timeLabelStep),
                    l = wo(e.timeCellStep),
                    c = e.firstDay,
                    h = e.startDay,
                    d = e.endDay,
                    u = e.resources,
                    _ = e.slots,
                    p = e.groupBy !== a.groupBy || u !== a.resources,
                    v = e.rtl !== a.rtl || p,
                    f = this._startTime,
                    g = this._endTime;
                if (e.startTime !== a.startTime || e.endTime !== a.endTime || e.timeLabelStep !== a.timeLabelStep || e.timeCellStep !== a.timeCellStep || e.timeFormat !== a.timeFormat || this._startTime === ie || this._endTime === ie) {
                    var y = pa(e.startTime || "00:00"),
                        b = new Date(+pa(e.endTime || "00:00") - 1);
                    this._startTime = f = qn(y), this._endTime = g = qn(b), this._time = g - f + 1, this._timesBetween = ge(Ce(l / o) - 1), this._times = [], this._timeLabels = {};
                    for (var x = l * An, T = Ce(f / x) * x, D = function(e) {
                            if (C._times.push(e), s) {
                                var t = e === T;
                                C._timeLabels[e] = t || e % (o * An) == 0 ? C._formatTime(t ? f : e) : "", C._timesBetween.forEach((function(t) {
                                    var a = e + (t + 1) * o * An;
                                    n._timeLabels[a] = n._formatTime(a)
                                }))
                            }
                        }, C = this, S = T; S <= g; S += x) D(S);
                    v = !0
                }
                if (p || h !== a.startDay || d !== a.endDay || _ !== a.slots || e.dayNames !== a.dayNames || e.eventList !== a.eventList || e.getDay !== a.getDay || e.refDate !== a.refDate || e.rowHeight !== a.rowHeight || e.selected !== a.selected || e.size !== a.size || e.showDays !== a.showDays || e.type !== a.type || e.weekNumbers !== a.weekNumbers) {
                    var w = "day" === e.type,
                        k = "month" === e.type,
                        M = "year" === e.type,
                        E = void 0,
                        N = void 0,
                        I = void 0,
                        L = void 0;
                    if (r > 1 || M || k) {
                        var H = {
                                eventRange: e.type,
                                eventRangeSize: r,
                                firstDay: c,
                                getDate: e.getDate,
                                getDay: e.getDay,
                                getMonth: e.getMonth,
                                getYear: e.getYear,
                                refDate: e.refDate
                            },
                            O = di(i, H);
                        E = hi(O, H), N = hi(O + 1, H), "week" === e.type && (E = Ta(E, h - c + (h < c ? 7 : 0)), N = Ta(E, 7 * r + d - h + 1 - (d < h ? 0 : 7))), I = E, L = N
                    } else {
                        I = Ta(ra(i, e), h - c + (h < c ? 7 : 0)), L = Ta(I, d - h + 1 + (d < h ? 7 : 0)), E = w ? na(i) : I, N = w ? Ta(E, 1) : L
                    }
                    this._isMulti = r > 1 || M, this._hasHierarchy = !1, this._resources = this._flattenResources(u, [], 0, !0), this._visibleResources = this._flattenResources(u, [], 0), this._hasSlots = s && !!_ && _.length > 0, this._slots = _ && _.length ? _ : [{
                        id: Do
                    }], this._isSingleResource = 1 === this._resources.length, this._groupByResource = "date" !== e.groupBy && !(w && r < 2) || this._isSingleResource, this._firstDay = E, this._lastDay = N, this._firstDayTz = _a(e, E.getFullYear(), E.getMonth(), E.getDate()), this._lastDayTz = _a(e, N.getFullYear(), N.getMonth(), N.getDate()), this._selectedDay = +na(i), this._setRowHeight = e.eventList || "equal" !== e.rowHeight, this._shouldAnimateScroll = a.selected !== ie, this._showTimeIndicator = (!s || s && !k && !M) && !e.eventList && (w && r < 2 ? oa(new Date, i) : E <= new Date && N >= new Date), this._dayIndexMap = {}, this._days = [], this._headerDays = [];
                    var Y = 0,
                        P = -1,
                        F = -1,
                        z = "",
                        V = -1,
                        R = -1,
                        A = "",
                        W = E,
                        U = N,
                        B = w && r < 2,
                        j = e.dateFormat.search(/m/i),
                        K = e.dateFormat.search(/y/i) < j;
                    !s && B && (W = I, U = L);
                    for (S = na(W); S < na(U); S.setDate(S.getDate() + 1))
                        if (Da(S.getDay(), h, d)) {
                            var J = ta(S),
                                X = "",
                                G = "";
                            if (s) {
                                var q = e.getWeekNumber(Ta(S, (7 - c + 1) % 7)),
                                    Z = e.getMonth(S);
                                if (P !== Z) {
                                    F = Y, P = Z;
                                    var $ = e.getYear(S),
                                        Q = e.monthNames[P];
                                    X = z = K ? $ + " " + Q : Q + " " + $, Y > 0 && (this._days[Y - 1].lastOfMonth = !0)
                                }
                                V !== q && (R = Y, V = q, G = A = e.weekText.replace(/{count}/, V), Y > 0 && (this._days[Y - 1].lastOfWeek = !0))
                            }
                            var ee = {
                                date: new Date(S),
                                dateIndex: Y,
                                dateKey: J,
                                dateText: ga(k || this._isMulti ? "D DDD" : e.dateFormatLong, S, e),
                                day: e.getDay(S),
                                label: ga("DDDD, MMMM D, YYYY", S, e),
                                monthIndex: F,
                                monthText: z,
                                monthTitle: X,
                                timestamp: +na(S),
                                weekIndex: R,
                                weekText: A,
                                weekTitle: G
                            };
                            B && this._headerDays.push(ee), B && this._selectedDay !== +S || this._days.push(ee), this._dayIndexMap[J] = Y, Y++
                        }
                    this._daysNr = B ? 1 : Y, v = !0
                }(e.colorsMap !== a.colorsMap || v) && (this._colors = this._getColors(e.colorsMap)), e.eventMap === a.eventMap && !v && this._events || (this._eventRows = {}, this._events = this._getEvents(e.eventMap)), (e.invalidsMap !== a.invalidsMap || v) && (this._invalids = this._getInvalids(e.invalidsMap));
                var te = s && e.eventMap !== a.eventMap;
                if ((e.height !== a.height || e.width !== a.width || te || v) && (this._shouldCheckSize = m && !!e.height && !!e.width), e.scroll !== a.scroll && (this._shouldScroll = !0), this._hasSideSticky = Ht && !e.rtl, this._hasSticky = Ht, this._stepCell = l * An, this._stepLabel = o * An, this._dayNames = t.dayNameWidth > 49 ? e.dayNamesShort : e.dayNamesMin, this._displayTime = o < 1440, this._eventHeight = e.eventList ? (t.eventHeight || 18) + 2 : t.eventHeight || 42, this._headerClass = " mbsc-timeline-header-placeholder mbsc-timeline-header-row-" + (1 + (this._isMulti ? 1 : 0) + (this._displayTime || this._hasSlots ? 1 : 0) + (e.weekNumbers ? 1 : 0)), s) {
                    var ne = [],
                        ae = this._daysBatchNr === ie ? ce(Ce(this._stepCell / (this._time / 30)), 1, 30) : this._daysBatchNr,
                        se = this._dayIndexMap[ta(i)] || 0,
                        re = t.batchIndexX !== ie ? t.batchIndexX : Te(se / ae),
                        oe = Math.min(re * ae, this._daysNr - 1),
                        le = Math.max(0, oe - Ce(3 * ae / 2)),
                        he = Math.min(le + 3 * ae, this._daysNr),
                        de = this._days[le].date,
                        ue = Ta(this._days[he - 1].date, 1);
                    for (Y = le; Y < he; Y++) ne.push(this._days[Y]);
                    this._batchStart = _a(e, de.getFullYear(), de.getMonth(), de.getDate()), this._batchEnd = _a(e, ue.getFullYear(), ue.getMonth(), ue.getDate()), this._daysBatch = ne, this._daysBatchNr = ae, this._placeholderSizeX = t.dayWidth * Te(Math.max(0, oe - 3 * ae / 2)) || 0;
                    var me = (t.scrollContHeight || 0) - (t.headerHeight || 0),
                        _e = t.rowHeight || 52,
                        pe = [],
                        ve = t.batchIndexY || 0,
                        fe = this._visibleResources,
                        ye = [],
                        be = -1,
                        xe = 0;
                    me && fe.forEach((function(e, t) {
                        var a = n._setRowHeight ? Math.max(n._eventRows[e.id] * n._eventHeight + 10, 52) : _e,
                            s = Ce(xe / me);
                        s !== be && (ye.push({
                            startIndex: t,
                            top: xe
                        }), be = s), xe += a
                    }));
                    var De = ye[ve - 1],
                        Se = ye[ve + 2],
                        we = De ? De.startIndex : 0,
                        ke = Se ? Se.startIndex : xe ? fe.length : 30;
                    xe && !t.hasScrollY && (we = 0, ke = fe.length);
                    for (Y = we; Y < ke; Y++) {
                        var Me = fe[Y];
                        Me && pe.push(Me)
                    }
                    this._gridHeight = xe, this._virtualPagesY = ye, this._resourcesBatch = pe, this._rowStartIndex = we, this._placeholderSizeY = De ? De.top : 0
                }
            }, t.prototype._mounted = function() {
                var e, t, n, a = this;
                this._unlisten = Ts(this._el, {
                    onDoubleClick: function(e) {
                        var t = a.s;
                        n && t.clickToCreate && "single" !== t.clickToCreate && (e.click = !0, a._onEventDragStart(e), a._onEventDragEnd(e))
                    },
                    onEnd: function(n) {
                        !e && t && "single" === a.s.clickToCreate && (e = !0, n.click = !0, a._onEventDragStart(n)), e && (n.domEvent.preventDefault(), a._onEventDragEnd(n)), clearTimeout(a._touchTimer), e = !1, t = !1
                    },
                    onMove: function(n) {
                        var s = a.s;
                        e && s.dragToCreate ? (n.domEvent.preventDefault(), a._onEventDragMove(n)) : t && s.dragToCreate && (Math.abs(n.deltaX) > 7 || Math.abs(n.deltaY) > 7) ? (e = !0, a._onEventDragStart(n)) : clearTimeout(a._touchTimer)
                    },
                    onStart: function(s) {
                        var i = a.s;
                        if (s.create = !0, s.click = !1, !e && (i.dragToCreate || i.clickToCreate)) {
                            var r = s.domEvent.target && s.domEvent.target.classList || [];
                            (n = r.contains("mbsc-schedule-item") || r.contains("mbsc-schedule-all-day-item") || r.contains("mbsc-timeline-column")) && (s.isTouch && i.dragToCreate ? a._touchTimer = setTimeout((function() {
                                a._onEventDragStart(s), a._onEventDragModeOn(s), e = !0
                            }), 350) : t = !s.isTouch)
                        }
                    }
                }), this._unsubscribe = mo(this._onExternalDrag)
            }, t.prototype._updated = function() {
                var e = this;
                this._shouldCheckSize && Me(this, (function() {
                    var t, n, a, s, i, r, o = e._resCont,
                        l = o ? o.offsetWidth : 0,
                        c = e._headerCont,
                        h = c.offsetHeight,
                        d = e._scrollCont,
                        u = d.offsetWidth,
                        m = d.offsetHeight,
                        _ = d.clientWidth,
                        p = d.clientHeight,
                        v = u - _,
                        f = m - p,
                        g = u - l,
                        y = m - h,
                        b = d.scrollHeight > p,
                        x = d.scrollWidth > _,
                        T = e.state.eventHeight;
                    if (e._isTimeline) {
                        var D = d.querySelector(".mbsc-timeline-day"),
                            C = d.querySelector(".mbsc-timeline-row");
                        if (a = D ? D.offsetWidth : 64, r = C ? C.offsetHeight : 52, a * e._daysNr < g && (x = !1), e._gridHeight && e._gridHeight < y && (b = !1), a = x ? a : Te(g / e._daysNr), i = x ? a * e._daysNr : g, n = e._stepCell * a / e._time, e._gridWidth = i, e._daysBatchNr = Math.max(1, Math.ceil(g / a)), e._hasSticky || (c.style[e.s.rtl ? "left" : "right"] = v + "px"), !e._hasSideSticky && o && (o.style.bottom = f + "px"), e._setRowHeight) {
                            var S = d.querySelector(".mbsc-schedule-event");
                            S && (T = S.clientHeight)
                        }
                    } else {
                        var w = e._el.querySelector(".mbsc-schedule-column-inner"),
                            k = e._el.querySelector(".mbsc-schedule-header-item");
                        t = e._stepCell * w.offsetHeight / e._time, s = k ? k.offsetWidth : 0
                    }
                    e._onScroll(), e._shouldCheckSize = !1, e.setState({
                        cellHeight: t,
                        cellWidth: n,
                        dayNameWidth: s,
                        dayWidth: a,
                        eventHeight: T,
                        hasScrollX: x,
                        hasScrollY: b,
                        headerHeight: h,
                        rowHeight: r,
                        scrollContHeight: x ? p : m
                    })
                })), !this._shouldScroll || !this.state.dayWidth && this._isTimeline || (Me(this, (function() {
                    e._scrollToTime(e._shouldAnimateScroll)
                })), this._shouldScroll = !1)
            }, t.prototype._destroy = function() {
                this._unlisten(), _o(this._unsubscribe)
            }, t.prototype._getDragDates = function(e, t, n) {
                var a = this.s,
                    i = {},
                    r = new Map,
                    o = e.allDay ? this._firstDay : this._firstDayTz,
                    l = e.startDate,
                    c = e.endDate;
                for (l = (l = na(l)) < o ? o : l, c = ea(a, e.allDay || a.eventList, l, c); l <= c;) {
                    var h = s({}, e),
                        d = ta(l),
                        u = Da(l.getDay(), a.startDay, a.endDay) && this._getEventPos(e, l, d, r);
                    if (u) {
                        var m = this._isTimeline && !this._hasSlots ? "all" : d;
                        h.date = +na(l, !0), h.cssClass = u.cssClass, h.start = u.start, h.end = u.end, h.position = u.position, i[t + "__" + (this._isTimeline ? n + "__" : "") + m] = h
                    }
                    l = Ta(l, 1)
                }
                return i
            }, t.prototype._getGridTime = function(e, t, n, a, s) {
                var i = De(this._isTimeline ? Ce(this._time * (t - a * this._colWidth) / this._colWidth) : Ce(this._time * (n - 8) / (this._colHeight - 16)), s * An),
                    r = new Date(+Rn + this._startTime + i);
                return _a(this.s, e.getFullYear(), e.getMonth(), e.getDate(), r.getHours(), r.getMinutes())
            }, t.prototype._scrollToTime = function(e) {
                var t = this._scrollCont,
                    n = this._gridCont,
                    a = this._isTimeline;
                if (t) {
                    var s = this.s,
                        i = _a(s, s.selected);
                    i.setHours(s.eventList ? 0 : i.getHours(), 0);
                    var r = ko(i, this._startTime, this._time * (a ? this._daysNr : 1)),
                        o = 100 * ia(this._firstDay, i, s.startDay, s.endDay) / this._daysNr,
                        l = (a ? n.offsetWidth : n.scrollWidth) * (o + (a ? r : 0)) / 100,
                        c = void 0;
                    if (!a) c = t.querySelector(".mbsc-schedule-column-inner").offsetHeight * r / 100, this._groupByResource && !this._isSingleResource && (l = ie);
                    Bt(t, l, c, e, s.rtl)
                }
            }, t
        }(Ua),
        Io = {},
        Lo = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return a(t, e), t.prototype._template = function(e) {
                var t = e.event,
                    n = this._isAllDay,
                    a = e.isTimeline,
                    s = this._theme,
                    i = e.resize && !1 !== t.original.editable;
                return Ln("div", {
                    tabIndex: 0,
                    className: this._cssClass,
                    "data-id": t.id,
                    style: this._style,
                    ref: this._setEl,
                    title: t.tooltip,
                    onClick: this._onClick,
                    onContextMenu: this._onRightClick
                }, this._isStart && i && Ln("div", {
                    className: "mbsc-schedule-event-resize mbsc-schedule-event-resize-start" + (a ? " mbsc-timeline-event-resize" : "") + this._rtl + (e.isDrag ? " mbsc-schedule-event-resize-start-touch" : "")
                }), this._isEnd && i && Ln("div", {
                    className: "mbsc-schedule-event-resize mbsc-schedule-event-resize-end" + (a ? " mbsc-timeline-event-resize" : "") + this._rtl + (e.isDrag ? " mbsc-schedule-event-resize-end-touch" : "")
                }), e.render ? this._content ? this._content : Ln("div", {
                    style: {
                        height: "100%"
                    },
                    dangerouslySetInnerHTML: this._html
                }) : Ln(sn, null, !n && !a && Ln("div", {
                    className: "mbsc-schedule-event-bar" + s + this._rtl
                }), Ln("div", {
                    className: "mbsc-schedule-event-background" + (a ? " mbsc-timeline-event-background" : "") + (n ? " mbsc-schedule-event-all-day-background" : "") + s,
                    style: {
                        background: t.style.background
                    }
                }), Ln("div", {
                    "aria-hidden": "true",
                    className: "mbsc-schedule-event-inner" + s + (n ? " mbsc-schedule-event-all-day-inner" : "") + (t.cssClass || ""),
                    style: {
                        color: t.style.color
                    }
                }, Ln("div", {
                    className: "mbsc-schedule-event-title" + (n ? " mbsc-schedule-event-all-day-title" : "") + s,
                    dangerouslySetInnerHTML: this._html
                }, this._content), !n && Ln("div", {
                    className: "mbsc-schedule-event-range" + s
                }, this._rangeText)), t.ariaLabel && Ln("div", {
                    className: "mbsc-hidden-content"
                }, t.ariaLabel)), Ln("div", {
                    dangerouslySetInnerHTML: this.textParam
                }))
            }, t
        }(function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t._onClick = function(e) {
                    t._triggerClick("onClick", e);
                    var n = t.s,
                        a = Io[n.event.uid];
                    a && n.selected && a.next({
                        hasFocus: !1
                    })
                }, t._onRightClick = function(e) {
                    t._triggerClick("onRightClick", e)
                }, t._onDocTouch = function(e) {
                    Yt(t._doc, cs, t._onDocTouch), Yt(t._doc, ts, t._onDocTouch), t._isDrag = !1, t._hook("onDragModeOff", {
                        event: t.s.event.original
                    })
                }, t._updateState = function(e) {
                    t.setState(e)
                }, t
            }
            return a(t, e), t.prototype._render = function(e, t) {
                var n = e.event,
                    a = new Date(n.date),
                    i = n.position,
                    r = n.startDate,
                    o = ea(e, n.allDay, r, n.endDate),
                    l = e.isTimeline,
                    c = e.isListing,
                    h = c || n.allDay,
                    d = !oa(r, o),
                    u = d && oa(r, a),
                    m = d && oa(o, a),
                    _ = h && (!l || c),
                    p = l ? "timeline" : "schedule",
                    v = e.gridStartTime,
                    f = e.gridEndTime,
                    g = qn(r),
                    y = qn(o),
                    b = l && e.slot !== Do,
                    x = e.singleDay ? Ta(a, 1) : new Date(e.lastDay),
                    T = Da(o.getDay(), e.startDay, e.endDay);
                this._isStart = b || !d || u, this._isEnd = b || !d || (h || l ? o < x && T : m), b || h || !(v > g || f < g) || (this._isStart = !1), b || h || !(f < y || v > y) || (this._isEnd = !1), this._html = this._content = ie, this._isDrag = this._isDrag || e.isDrag, this._rangeText = n.start + " - " + n.end, this._isAllDay = _, this._host = p, (n.allDay || !l && d && !u && !m) && (this._rangeText = n.allDayText), this._cssClass = "mbsc-schedule-event" + this._theme + this._rtl + (l ? " mbsc-timeline-event" : "") + (c ? " mbsc-timeline-event-listing" : "") + (this._isStart ? " mbsc-" + p + "-event-start" : "") + (this._isEnd ? " mbsc-" + p + "-event-end" : "") + (_ ? " mbsc-schedule-event-all-day" : "") + (b ? " mbsc-timeline-event-slot" : "") + (t.hasFocus && !e.inactive && !e.selected || e.selected ? " mbsc-schedule-event-active" : "") + (!t.hasHover || e.inactive || this._isDrag ? "" : " mbsc-schedule-event-hover") + (e.isDrag ? " mbsc-schedule-event-dragging" + (l ? " mbsc-timeline-event-dragging" : "") : "") + (e.hidden ? " mbsc-schedule-event-hidden" : "") + (e.inactive ? " mbsc-schedule-event-inactive" : "") + (!1 === n.original.editable ? " mbsc-readonly-event" : ""), this._style = s({}, i, {
                    color: n.color,
                    top: e.eventHeight && i.top !== ie ? i.top * e.eventHeight + "px" : i.top
                });
                var D = e.render || e.renderContent;
                if (D) {
                    var C = D(n);
                    me(C) ? (this._html = this._safeHtml(C), this._shouldEnhance = !0) : this._content = C
                } else e.contentTemplate || (this._html = n.html)
            }, t.prototype._mounted = function() {
                var e, t, n = this,
                    a = this.s.event.uid,
                    i = Io[a];
                i || (i = new h, Io[a] = i), this._unsubscribe = i.subscribe(this._updateState), this._doc = Pt(this._el), this._unlisten = Ts(this._el, {
                    keepFocus: !0,
                    onBlur: function() {
                        i.next({
                            hasFocus: !1
                        })
                    },
                    onDoubleClick: function(e) {
                        e.domEvent.stopPropagation(), n._triggerClick("onDoubleClick", e.domEvent)
                    },
                    onEnd: function(a) {
                        if (n._isDrag) {
                            var i = n.s,
                                r = s({}, a);
                            r.domEvent.preventDefault(), r.event = i.event, r.resource = i.resource, r.slot = i.slot, i.resize && e ? (r.resize = !0, r.direction = e) : i.drag && (r.drag = !0), n._hook("onDragEnd", r), i.isDrag || (n._isDrag = !1), n._el && r.moved && n._el.blur()
                        }
                        clearTimeout(t), e = ie
                    },
                    onFocus: function() {
                        i.next({
                            hasFocus: !0
                        })
                    },
                    onHoverIn: function(e) {
                        i.next({
                            hasHover: !0
                        }), n._triggerClick("onHoverIn", e)
                    },
                    onHoverOut: function(e) {
                        i.next({
                            hasHover: !1
                        }), n._triggerClick("onHoverOut", e)
                    },
                    onKeyDown: function(e) {
                        var t = n.s.event.original;
                        switch (e.keyCode) {
                            case Ys:
                            case Ps:
                                n._el.click(), e.preventDefault();
                                break;
                            case 8:
                            case 46:
                                !1 !== t.editable && n._hook("onDelete", {
                                    domEvent: e,
                                    event: t,
                                    source: n._host
                                })
                        }
                    },
                    onMove: function(a) {
                        var i = n.s,
                            r = s({}, a);
                        if (r.event = i.event, r.resource = i.resource, r.slot = i.slot, e) r.resize = !0, r.direction = e;
                        else {
                            if (!i.drag) return;
                            r.drag = !0
                        }!1 !== i.event.original.editable && (!n._isDrag && r.isTouch || r.domEvent.preventDefault(), n._isDrag ? n._hook("onDragMove", r) : (Math.abs(r.deltaX) > 7 || Math.abs(r.deltaY) > 7) && (clearTimeout(t), r.isTouch || (n._isDrag = !0, n._hook("onDragStart", r))))
                    },
                    onStart: function(a) {
                        var i = n.s,
                            r = s({}, a),
                            o = r.domEvent.target;
                        if (r.event = i.event, r.resource = i.resource, r.slot = i.slot, i.resize && o.classList.contains("mbsc-schedule-event-resize")) e = o.classList.contains("mbsc-schedule-event-resize-start") ? "start" : "end", r.resize = !0, r.direction = e;
                        else {
                            if (!i.drag) return;
                            r.drag = !0
                        }!1 !== i.event.original.editable && (n._isDrag ? (r.domEvent.stopPropagation(), n._hook("onDragStart", r)) : r.isTouch && (t = setTimeout((function() {
                            n._hook("onDragModeOn", r), n._hook("onDragStart", r), n._isDrag = !0
                        }), 350)))
                    }
                }), this._isDrag && (Ot(this._doc, cs, this._onDocTouch), Ot(this._doc, ts, this._onDocTouch))
            }, t.prototype._destroy = function() {
                if (this._el && this._el.blur(), this._unsubscribe) {
                    var e = this.s.event.uid,
                        t = Io[e];
                    t && (t.unsubscribe(this._unsubscribe), t.nr || delete Io[e])
                }
                this._unlisten && this._unlisten(), Yt(this._doc, cs, this._onDocTouch), Yt(this._doc, ts, this._onDocTouch)
            }, t.prototype._triggerClick = function(e, t) {
                var n = this.s;
                this._hook(e, {
                    date: n.event.date,
                    domEvent: t,
                    event: n.event.original,
                    resource: n.resource,
                    slot: n.slot,
                    source: this._host
                })
            }, t
        }(Ua)),
        Ho = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t._onScroll = function() {
                    var e = t._scrollCont;
                    if (e) {
                        var n = e.scrollTop,
                            a = "translateX(" + -e.scrollLeft + "px)",
                            s = t._timeCont,
                            i = t._allDayCont,
                            r = t._headerCont,
                            o = (Nt ? Nt + "T" : "t") + "ransform";
                        i && (i.style[o] = a), s && (s.style.marginTop = -n + "px"), r && (r.style[o] = a), 0 === n ? t.setState({
                            showShadow: !1
                        }) : t.state.showShadow || t.setState({
                            showShadow: !0
                        })
                    }
                }, t
            }
            return a(t, e), t.prototype._render = function(t, n) {
                e.prototype._render.call(this, t, n);
                var a = this._prevS,
                    s = t.timezones,
                    i = this._stepCell / An,
                    r = Ce(this._startTime / An) % i,
                    o = Ce(this._endTime / An) % i + 1;
                if (s !== a.timezones && (this._timeWidth = s ? {
                        width: 4.25 * s.length + "em"
                    } : ie, this._timezones = ie, s)) {
                    for (var l = [], c = 0, h = s; c < h.length; c++) {
                        var d = h[c],
                            u = void 0;
                        if (me(d)) {
                            var m = _a(t, 1970, 0, 1);
                            Bn(m) && m.setTimezone(d);
                            var _ = m.getTimezoneOffset() / 60 * -1;
                            u = {
                                label: "UTC" + (_ > 0 ? "+" : "") + _,
                                timezone: d
                            }
                        } else u = d;
                        l.push(u)
                    }
                    this._timezones = l
                }
                this._largeDayNames = n.dayNameWidth > 99, this._startCellStyle = r % i != 0 ? {
                    height: (n.cellHeight || 50) * ((i - r) % i / i) + "px"
                } : ie, this._endCellStyle = o % i != 0 ? {
                    height: (n.cellHeight || 50) * (o % i) / i + "px"
                } : ie
            }, t
        }(No),
        Oo = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return a(t, e), t.prototype._template = function(e) {
                var t = this,
                    n = e.timezones;
                return Ln("div", {
                    "aria-hidden": "true",
                    className: this._cssClass,
                    style: this._pos
                }, Ln("div", {
                    className: (n ? "mbsc-flex " : "") + "mbsc-schedule-time-indicator-time mbsc-schedule-time-indicator-time-" + e.orientation + this._theme + this._rtl
                }, n ? n.map((function(e, n) {
                    return Ln("div", {
                        key: n,
                        className: "mbsc-schedule-time-indicator-tz" + t._theme + t._rtl
                    }, t._times[n])
                })) : this._time), e.showDayIndicator && Ln("div", {
                    className: "mbsc-schedule-time-indicator-day" + this._theme,
                    style: this._dayPos
                }))
            }, t
        }(function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return a(t, e), t.prototype._mounted = function() {
                var e = this;
                clearInterval(this._timer), this._timer = setInterval((function() {
                    e._zone ? e._zone.runOutsideAngular((function() {
                        e.forceUpdate()
                    })) : e.forceUpdate()
                }), 1e4)
            }, t.prototype._destroy = function() {
                clearInterval(this._timer)
            }, t.prototype._render = function(e) {
                var t = _a(e),
                    n = e.rtl,
                    a = e.displayedDays,
                    s = e.displayedTime,
                    i = e.startTime,
                    r = Ce(qn(t) / An) * An,
                    o = e.timezones,
                    l = {
                        amText: e.amText,
                        pmText: e.pmText
                    };
                if (o && Bn(t)) {
                    this._times = [];
                    for (var c = 0, h = o; c < h.length; c++) {
                        var d = h[c],
                            u = t.clone();
                        u.setTimezone(d.timezone), this._times.push(ga(e.timeFormat, u, l))
                    }
                } else this._time = ga(e.timeFormat, t, l);
                this._cssClass = "mbsc-schedule-time-indicator mbsc-schedule-time-indicator-" + e.orientation + this._theme + this._rtl + " " + (r < i || r > i + s || !Da(t.getDay(), e.startDay, e.endDay) ? " mbsc-hidden" : "");
                var m = ia(e.firstDay, t, e.startDay, e.endDay);
                if ("x" === e.orientation) {
                    var _ = 100 * m / a + "%",
                        p = o && 4.25 * o.length + "em";
                    this._pos = {
                        left: o && !n ? p : ie,
                        right: o && n ? p : ie,
                        top: 100 * (r - i) / s + "%"
                    }, this._dayPos = {
                        left: n ? "" : _,
                        right: n ? _ : "",
                        width: 100 / a + "%"
                    }
                } else {
                    var v = 100 * (m * s + r - i) / (a * s) + "%";
                    this._pos = {
                        left: n ? "" : v,
                        right: n ? v : ""
                    }
                }
            }, t
        }(Ua)),
        Yo = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return a(t, e), t.prototype._template = function(e, t) {
                var n;
                return e.renderDay && (n = e.renderDay(this._data)), e.renderDayContent && (n = e.renderDayContent(this._data)), me(n) && (n = Ln("div", {
                    dangerouslySetInnerHTML: this._safeHtml(n)
                }), this._shouldEnhance = !0), Ln("div", {
                    ref: this._setEl,
                    className: this._cssClass,
                    onClick: this._onClick
                }, e.renderDay ? n : Ln(sn, null, Ln("div", {
                    "aria-hidden": "true",
                    className: "mbsc-schedule-header-dayname" + this._theme + (e.selected ? " mbsc-selected" : "") + (e.isToday ? " mbsc-schedule-header-dayname-curr" : "")
                }, e.dayNames[this._day]), Ln("div", {
                    "aria-hidden": "true",
                    className: "mbsc-schedule-header-day" + this._theme + this._rtl + (e.selected ? " mbsc-selected" : "") + (e.isToday ? " mbsc-schedule-header-day-today" : "") + (t.hasHover ? " mbsc-hover" : "")
                }, e.day), e.label && Ln("div", {
                    className: "mbsc-hidden-content",
                    "aria-pressed": e.selectable ? e.selected ? "true" : "false" : ie,
                    role: e.selectable ? "button" : ie
                }, e.label), e.renderDayContent && n))
            }, t
        }(function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t._onClick = function() {
                    var e = t.s;
                    e.selectable && e.onClick(e.timestamp)
                }, t
            }
            return a(t, e), t.prototype._render = function(e, t) {
                var n = new Date(e.timestamp);
                this._cssClass = "mbsc-schedule-header-item " + this._className + this._theme + this._rtl + this._hb + (e.largeNames ? " mbsc-schedule-header-item-large" : "") + (e.selected ? " mbsc-selected" : "") + (t.hasHover ? " mbsc-hover" : ""), this._data = {
                    date: n,
                    events: e.events,
                    resource: e.resource,
                    selected: e.selected
                }, this._day = n.getDay()
            }, t.prototype._mounted = function() {
                var e = this;
                this._unlisten = Ts(this._el, {
                    onHoverIn: function() {
                        e.s.selectable && e.setState({
                            hasHover: !0
                        })
                    },
                    onHoverOut: function() {
                        e.s.selectable && e.setState({
                            hasHover: !1
                        })
                    }
                })
            }, t.prototype._destroy = function() {
                this._unlisten && this._unlisten()
            }, t
        }(Ua)),
        Po = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t._setCont = function(e) {
                    t._scrollCont = e
                }, t._setTimeCont = function(e) {
                    t._timeCont = e
                }, t._setAllDayCont = function(e) {
                    t._allDayCont = e
                }, t._setGridCont = function(e) {
                    t._gridCont = e
                }, t._setHeaderCont = function(e) {
                    t._headerCont = e
                }, t
            }
            return a(t, e), t.prototype._template = function(e, t) {
                var n = this,
                    a = this._colors,
                    i = t.dragData,
                    r = i && i.draggedEvent && i.draggedEvent.id,
                    o = this._events,
                    l = this._invalids,
                    c = this._hb,
                    h = this._rtl,
                    d = this._times,
                    u = this._startTime,
                    m = this._endTime,
                    _ = this._startCellStyle,
                    p = this._endCellStyle,
                    v = this._stepLabel,
                    f = this._theme,
                    g = this._isSingleResource,
                    y = e.eventMap || {},
                    b = "schedule",
                    x = " mbsc-flex-1-0 mbsc-schedule-resource-group" + f + h,
                    T = this._timezones,
                    D = this._groupByResource,
                    C = this._days,
                    S = this._resources,
                    w = {
                        dayNames: this._dayNames,
                        largeNames: this._largeDayNames,
                        onClick: e.onWeekDayClick,
                        renderDay: e.renderDay,
                        renderDayContent: e.renderDayContent,
                        rtl: e.rtl,
                        theme: e.theme
                    },
                    k = function(t) {
                        var a, s = t.name;
                        return e.renderResource && me(s = e.renderResource(t)) && (a = n._safeHtml(s), n._shouldEnhance = !0), s && Ln("div", {
                            key: t.id,
                            className: "mbsc-schedule-resource" + f + h + c + (!D || "day" === e.type && 1 === e.size ? " mbsc-flex-1-0 mbsc-schedule-col-width" : "")
                        }, Ln("div", {
                            dangerouslySetInnerHTML: a,
                            className: "mbsc-schedule-resource-title"
                        }, s))
                    },
                    M = function(t, a, o, l) {
                        var c = o + "__" + a,
                            h = {
                                displayTimezone: e.displayTimezone,
                                drag: e.dragToMove,
                                endDay: e.endDay,
                                exclusiveEndDates: e.exclusiveEndDates,
                                gridEndTime: m,
                                gridStartTime: u,
                                lastDay: +n._lastDay,
                                render: e.renderEvent,
                                renderContent: e.renderEventContent,
                                resize: e.dragToResize,
                                resource: o,
                                rtl: e.rtl,
                                singleDay: !D,
                                startDay: e.startDay,
                                theme: e.theme,
                                timezonePlugin: e.timezonePlugin
                            };
                        return Ln(sn, null, t.map((function(t) {
                            return t.showText ? Ln(Lo, s({}, h, {
                                event: t,
                                key: t.uid,
                                inactive: r === t.id,
                                selected: e.selectedEventsMap[t.uid] || e.selectedEventsMap[t.id],
                                onClick: e.onEventClick,
                                onDoubleClick: e.onEventDoubleClick,
                                onRightClick: e.onEventRightClick,
                                onDelete: e.onEventDelete,
                                onHoverIn: e.onEventHoverIn,
                                onHoverOut: e.onEventHoverOut,
                                onDragStart: n._onEventDragStart,
                                onDragMove: n._onEventDragMove,
                                onDragEnd: n._onEventDragEnd,
                                onDragModeOn: n._onEventDragModeOn,
                                onDragModeOff: n._onEventDragModeOff
                            })) : Ln("div", {
                                key: t.uid,
                                className: "mbsc-schedule-event mbsc-schedule-event-all-day mbsc-schedule-event-all-day-placeholder"
                            }, Ln("div", {
                                className: "mbsc-schedule-event-all-day-inner" + f
                            }))
                        })), i && i.originDates && i.originDates[c] && !!i.originDates[c].allDay == !!l && Ln(Lo, s({}, h, {
                            event: i.originDates[c],
                            hidden: i && !!i.draggedDates,
                            isDrag: !0,
                            onDragStart: n._onEventDragStart,
                            onDragMove: n._onEventDragMove,
                            onDragEnd: n._onEventDragEnd,
                            onDragModeOff: n._onEventDragModeOff
                        })), i && i.draggedDates && i.draggedDates[c] && !!i.draggedDates[c].allDay == !!l && Ln(Lo, s({}, h, {
                            event: i.draggedDates[c],
                            isDrag: !0
                        })))
                    },
                    E = function(e) {
                        return d.map((function(t, a) {
                            var s = !a,
                                i = a === d.length - 1;
                            return Ln("div", {
                                key: a,
                                className: "mbsc-flex-col mbsc-flex-1-0 mbsc-schedule-time-wrapper" + f + h + (i ? " mbsc-schedule-time-wrapper-end" : "") + (s && _ || i && p ? " mbsc-flex-none" : ""),
                                style: s ? _ : i ? p : {}
                            }, Ln("div", {
                                className: "mbsc-flex-1-1 mbsc-schedule-time" + f + h
                            }, s || t % v == 0 ? n._formatTime(s ? u : t, e) : ""), n._timesBetween.map((function(a, s) {
                                var i = t + (s + 1) * v;
                                return i > u && i < m && Ln("div", {
                                    key: s,
                                    className: "mbsc-flex-1-1 mbsc-schedule-time" + f + h
                                }, n._formatTime(i, e))
                            })), i && Ln("div", {
                                className: "mbsc-schedule-time mbsc-schedule-time-end" + f + h
                            }, n._formatTime(m + 1, e)))
                        }))
                    },
                    N = function(e, t, n, s) {
                        var i = l[e][Do][t] && l[e][Do][t].allDay,
                            r = a[e][Do][t] && a[e][Do][t].allDay,
                            d = o[e][Do][t] && o[e][Do][t].allDay;
                        return Ln("div", {
                            key: n + "-" + s,
                            className: "mbsc-schedule-all-day-item mbsc-schedule-col-width mbsc-flex-1-0" + f + h + c
                        }, M(d || [], t, e, !0), i && Ln("div", {
                            className: "mbsc-schedule-invalid mbsc-schedule-invalid-all-day" + f
                        }, Ln("div", {
                            className: "mbsc-schedule-invalid-text"
                        }, i.title)), r && Ln("div", {
                            className: "mbsc-schedule-color mbsc-schedule-color-all-day" + f,
                            style: r.position
                        }, Ln("div", {
                            className: "mbsc-schedule-color-text"
                        }, r.title)))
                    },
                    I = function(t, n, s, i) {
                        var r = l[t][Do][n] && l[t][Do][n].invalids,
                            u = a[t][Do][n] && a[t][Do][n].colors,
                            m = o[t][Do][n] && o[t][Do][n].events;
                        return Ln("div", {
                            key: s + "-" + i,
                            className: "mbsc-flex-col mbsc-flex-1-0 mbsc-schedule-column mbsc-schedule-col-width" + f + h + c
                        }, Ln("div", {
                            className: "mbsc-flex-col mbsc-flex-1-1 mbsc-schedule-column-inner" + f + h + c
                        }, Ln("div", {
                            className: "mbsc-schedule-events" + h
                        }, M(m || [], n, t)), r && r.map((function(e, t) {
                            return e.position && Ln("div", {
                                key: t,
                                className: "mbsc-schedule-invalid" + e.cssClass + f,
                                style: e.position
                            }, Ln("div", {
                                className: "mbsc-schedule-invalid-text"
                            }, e.allDay ? "" : e.title || ""))
                        })), u && u.map((function(e, t) {
                            return Ln("div", {
                                key: t,
                                className: "mbsc-schedule-color" + e.cssClass + f,
                                style: e.position
                            }, Ln("div", {
                                className: "mbsc-schedule-color-text"
                            }, e.title))
                        })), d.map((function(n, a) {
                            var s = Eo(i, n),
                                r = !a,
                                o = a === d.length - 1;
                            return Ln("div", {
                                key: a,
                                className: "mbsc-schedule-item mbsc-flex-1-0" + f + c + (o ? " mbsc-schedule-item-last" : "") + (r && _ || o && p ? " mbsc-flex-none" : ""),
                                onClick: function(n) {
                                    return e.onCellClick({
                                        date: s,
                                        domEvent: n,
                                        resource: t,
                                        source: b
                                    })
                                },
                                onDoubleClick: function(n) {
                                    return e.onCellDoubleClick({
                                        date: s,
                                        domEvent: n,
                                        resource: t,
                                        source: b
                                    })
                                },
                                onContextMenu: function(n) {
                                    return e.onCellRightClick({
                                        date: s,
                                        domEvent: n,
                                        resource: t,
                                        source: b
                                    })
                                },
                                style: r ? _ : o ? p : {}
                            })
                        }))))
                    };
                return Ln("div", {
                    ref: this._setEl,
                    className: "mbsc-flex-col mbsc-flex-1-1 mbsc-schedule-wrapper" + f + (this._daysNr > 7 ? " mbsc-schedule-wrapper-multi" : "")
                }, Ln("div", {
                    className: "mbsc-schedule-header mbsc-flex mbsc-flex-none" + f + c
                }, Ln("div", {
                    className: "mbsc-schedule-time-col mbsc-schedule-time-col-empty" + f + h + c,
                    style: this._timeWidth
                }), Ln("div", {
                    className: "mbsc-flex-1-1 mbsc-schedule-header-wrapper"
                }, Ln("div", {
                    ref: this._setHeaderCont,
                    className: "mbsc-flex"
                }, "day" === e.type && 1 === e.size ? Ln("div", {
                    className: x
                }, Ln("div", {
                    className: "mbsc-flex"
                }, e.showDays && this._headerDays.map((function(e) {
                    var t = e.timestamp;
                    return Ln(Yo, s({}, w, {
                        key: t,
                        cssClass: "mbsc-flex-1-1",
                        day: e.day,
                        events: y[e.dateKey],
                        isToday: n._isToday(t),
                        label: e.label,
                        selectable: !0,
                        selected: n._selectedDay === t,
                        timestamp: t
                    }))
                }))), e.resources && Ln("div", {
                    className: "mbsc-flex"
                }, S.map(k))) : D ? S.map((function(t, a) {
                    return Ln("div", {
                        key: a,
                        className: x
                    }, k(t), Ln("div", {
                        className: "mbsc-flex"
                    }, e.showDays && C.map((function(e) {
                        var a = e.timestamp;
                        return Ln(Yo, s({}, w, {
                            key: a,
                            cssClass: "mbsc-flex-1-0 mbsc-schedule-col-width",
                            day: e.day,
                            events: y[e.dateKey],
                            isToday: g && n._isToday(a),
                            label: e.label,
                            resource: t.id,
                            selectable: !1,
                            selected: g && n._isToday(a),
                            timestamp: a
                        }))
                    }))))
                })) : C.map((function(t, a) {
                    var i = t.timestamp;
                    return Ln("div", {
                        key: a,
                        className: x
                    }, e.showDays && Ln(Yo, s({}, w, {
                        key: i,
                        day: t.day,
                        events: y[t.dateKey],
                        isToday: g && n._isToday(i),
                        label: t.label,
                        selectable: !1,
                        selected: n._isToday(i),
                        timestamp: i
                    })), e.resources && Ln("div", {
                        className: "mbsc-flex"
                    }, S.map(k)))
                })))), Ln("div", {
                    className: "mbsc-schedule-fake-scroll-y"
                })), Ln("div", {
                    className: "mbsc-schedule-all-day-cont" + (t.showShadow ? " mbsc-schedule-all-day-wrapper-shadow" : "") + f
                }, T && Ln("div", {
                    className: "mbsc-flex mbsc-schedule-timezone-labels",
                    style: this._timeWidth
                }, T.map((function(e, t) {
                    return Ln("div", {
                        key: t,
                        className: "mbsc-flex-1-0-0 mbsc-schedule-timezone-label" + f + h
                    }, e.label)
                }))), e.showAllDay && Ln("div", {
                    className: "mbsc-schedule-all-day-wrapper mbsc-flex-none" + f + c
                }, Ln("div", {
                    className: "mbsc-flex mbsc-schedule-all-day" + f
                }, Ln("div", {
                    className: "mbsc-schedule-time-col" + f + h,
                    style: this._timeWidth
                }, !T && Ln("div", {
                    className: "mbsc-schedule-all-day-text" + f
                }, e.allDayText)), Ln("div", {
                    className: "mbsc-flex-col mbsc-flex-1-1 mbsc-schedule-all-day-group-wrapper"
                }, Ln("div", {
                    ref: this._setAllDayCont,
                    className: "mbsc-flex mbsc-flex-1-1"
                }, D ? S.map((function(e, t) {
                    return Ln("div", {
                        key: t,
                        className: "mbsc-flex" + x
                    }, C.map((function(t, n) {
                        return N(e.id, t.dateKey, n, t.timestamp)
                    })))
                })) : C.map((function(e, t) {
                    return Ln("div", {
                        key: t,
                        className: "mbsc-flex" + x
                    }, S.map((function(t, n) {
                        return N(t.id, e.dateKey, n, e.timestamp)
                    })))
                }))))))), Ln("div", {
                    className: "mbsc-flex mbsc-flex-1-1 mbsc-schedule-grid-wrapper" + f
                }, Ln("div", {
                    dangerouslySetInnerHTML: this.textParam
                }), Ln("div", {
                    "aria-hidden": "true",
                    className: "mbsc-flex-col mbsc-schedule-time-col mbsc-schedule-time-cont" + f + h,
                    style: this._timeWidth,
                    ref: this._setTimeCont
                }, Ln("div", {
                    className: "mbsc-flex mbsc-schedule-time-cont-inner"
                }, Ln("div", {
                    className: "mbsc-flex-col mbsc-flex-1-1"
                }, Ln("div", {
                    className: "mbsc-flex-1-1 mbsc-schedule-time-cont-pos" + f + (T ? " mbsc-flex" : " mbsc-flex-col mbsc-schedule-time-col-last")
                }, T ? T.map((function(e, t) {
                    return Ln("div", {
                        key: t,
                        className: "mbsc-flex-col" + f + (t === T.length - 1 ? " mbsc-schedule-time-col-last" : "")
                    }, E(e.timezone))
                })) : E(), this._showTimeIndicator && Ln(Oo, {
                    amText: e.amText,
                    displayedTime: this._time,
                    displayedDays: this._daysNr,
                    displayTimezone: e.displayTimezone,
                    endDay: e.endDay,
                    firstDay: this._firstDayTz,
                    orientation: "x",
                    pmText: e.pmText,
                    rtl: e.rtl,
                    showDayIndicator: g && !this._isMulti && "week" === e.type,
                    startDay: e.startDay,
                    startTime: u,
                    theme: e.theme,
                    timeFormat: e.timeFormat,
                    timezones: T,
                    timezonePlugin: e.timezonePlugin
                })), t.hasScrollX && Ln("div", {
                    className: "mbsc-schedule-fake-scroll-x"
                })), Ln("div", {
                    className: "mbsc-schedule-fake-scroll-y"
                }))), Ln("div", {
                    ref: this._setCont,
                    className: "mbsc-flex-col mbsc-flex-1-1 mbsc-schedule-grid-scroll" + f,
                    onScroll: this._onScroll
                }, Ln("div", {
                    className: "mbsc-flex mbsc-flex-1-1"
                }, Ln("div", {
                    className: "mbsc-flex mbsc-schedule-grid",
                    ref: this._setGridCont
                }, D ? S.map((function(e, t) {
                    return Ln("div", {
                        key: t,
                        className: "mbsc-flex" + x
                    }, C.map((function(t, n) {
                        return I(e.id, t.dateKey, n, t.timestamp)
                    })))
                })) : C.map((function(e, t) {
                    return Ln("div", {
                        key: t,
                        className: "mbsc-flex" + x
                    }, S.map((function(t, n) {
                        return I(t.id, e.dateKey, n, e.timestamp)
                    })))
                })))))), i && !t.isTouchDrag && Ln("div", {
                    className: "mbsc-calendar-dragging"
                }))
            }, t
        }(Ho),
        Fo = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t._setStickyHeader = function(e) {
                    t._stickyHeader = e
                }, t._setStickyDay = function(e) {
                    t._stickyDate = e
                }, t._setStickyMonth = function(e) {
                    t._stickyMonth = e
                }, t._setStickyWeek = function(e) {
                    t._stickyWeek = e
                }, t._setCont = function(e) {
                    t._scrollCont = e
                }, t._setResCont = function(e) {
                    t._resCont = e
                }, t._setGridCont = function(e) {
                    t._gridCont = e
                }, t._setHeaderCont = function(e) {
                    t._headerCont = e
                }, t
            }
            return a(t, e), t.prototype._template = function(e, t) {
                var n, a, i = this,
                    r = t.dragData,
                    o = r && r.draggedEvent && r.draggedEvent.id,
                    l = this._hasSlots,
                    c = this._hb,
                    h = this._rtl,
                    d = this._times,
                    u = this._theme,
                    m = this._startTime,
                    _ = this._endTime,
                    p = this._stepLabel,
                    v = this._slots,
                    f = "timeline",
                    g = e.resources,
                    y = e.eventList,
                    b = "month" === e.type,
                    x = this._stepCell < Un,
                    T = this._startCellStyle,
                    D = this._endCellStyle,
                    C = this._headerClass,
                    S = this._daysBatch,
                    w = function(e, t, n, a) {
                        for (var s = [], r = 0, o = e[n][Do].all[t]; r < o.length; r++) {
                            var l = o[r];
                            Zn(i._batchStart, i._batchEnd, l.startDate, l.endDate, !0) && s.push(l)
                        }
                        return a(s, "all", n, Do)
                    },
                    k = function(e) {
                        return e.map((function(e, t) {
                            return Ln("div", {
                                key: t,
                                className: "mbsc-schedule-color mbsc-timeline-color" + e.cssClass + u,
                                style: e.position
                            }, Ln("div", {
                                className: "mbsc-schedule-color-text"
                            }, e.title))
                        }))
                    },
                    M = function(e) {
                        return e.map((function(e, t) {
                            return e.position && Ln("div", {
                                key: t,
                                className: "mbsc-schedule-invalid mbsc-timeline-invalid" + e.cssClass + u,
                                style: e.position
                            }, Ln("div", {
                                className: "mbsc-schedule-invalid-text"
                            }, e.title))
                        }))
                    },
                    E = function(t, n, a, l) {
                        var c = a + "__" + l + "__" + n,
                            h = {
                                displayTimezone: e.displayTimezone,
                                drag: e.dragToMove,
                                endDay: e.endDay,
                                eventHeight: i._setRowHeight ? i._eventHeight : ie,
                                exclusiveEndDates: e.exclusiveEndDates,
                                gridEndTime: _,
                                gridStartTime: m,
                                isListing: y,
                                isTimeline: !0,
                                lastDay: +i._lastDay,
                                render: e.renderEvent,
                                renderContent: e.renderEventContent,
                                resize: e.dragToResize,
                                resource: a,
                                rtl: e.rtl,
                                slot: l,
                                startDay: e.startDay,
                                theme: e.theme,
                                timezonePlugin: e.timezonePlugin
                            };
                        return Ln(sn, null, t.map((function(t) {
                            return Ln(Lo, s({}, h, {
                                event: t,
                                inactive: o === t.id,
                                key: t.uid,
                                selected: e.selectedEventsMap[t.uid] || e.selectedEventsMap[t.id],
                                onClick: e.onEventClick,
                                onDoubleClick: e.onEventDoubleClick,
                                onRightClick: e.onEventRightClick,
                                onHoverIn: e.onEventHoverIn,
                                onHoverOut: e.onEventHoverOut,
                                onDelete: e.onEventDelete,
                                onDragStart: i._onEventDragStart,
                                onDragMove: i._onEventDragMove,
                                onDragEnd: i._onEventDragEnd,
                                onDragModeOn: i._onEventDragModeOn,
                                onDragModeOff: i._onEventDragModeOff
                            }))
                        })), r && r.originDates && r.originDates[c] && Ln(Lo, s({}, h, {
                            event: r.originDates[c],
                            hidden: r && !!r.draggedDates,
                            isDrag: !0,
                            onDragStart: i._onEventDragStart,
                            onDragMove: i._onEventDragMove,
                            onDragEnd: i._onEventDragEnd,
                            onDragModeOff: i._onEventDragModeOff
                        })), r && r.draggedDates && r.draggedDates[c] && Ln(Lo, s({}, h, {
                            event: r.draggedDates[c],
                            isDrag: !0
                        })))
                    };
                return Ln("div", {
                    ref: this._setEl,
                    className: "mbsc-timeline mbsc-flex-1-1 mbsc-flex-col" + (t.cellWidth ? "" : " mbsc-hidden") + (g ? "" : " mbsc-timeline-no-resource") + u + h
                }, Ln("div", {
                    dangerouslySetInnerHTML: this.textParam
                }), Ln("div", {
                    ref: this._setStickyHeader,
                    className: "mbsc-timeline-header-sticky mbsc-flex"
                }, g && Ln("div", {
                    className: "mbsc-timeline-resource-empty mbsc-timeline-resource-col" + C + u + h + c
                }, (e.renderResourceHeader && me(n = e.renderResourceHeader()) && (a = i._safeHtml(n), i._shouldEnhance = !0), Ln("div", {
                    className: "mbsc-timeline-resource-header",
                    dangerouslySetInnerHTML: a
                }, n))), Ln("div", {
                    className: "mbsc-flex-1-1"
                }, this._isMulti && Ln("div", {
                    className: "mbsc-timeline-header-month" + u + h + c
                }, Ln("div", {
                    ref: this._setStickyMonth,
                    className: "mbsc-timeline-header-text mbsc-timeline-header-month-text" + u
                })), e.weekNumbers && Ln("div", {
                    className: "mbsc-timeline-header-week" + u + h + c
                }, Ln("div", {
                    ref: this._setStickyWeek,
                    className: "mbsc-timeline-header-text mbsc-timeline-header-week-text" + u
                })), (l || x) && Ln("div", {
                    className: "mbsc-timeline-header-date" + u + h + c
                }, Ln("div", {
                    ref: this._setStickyDay,
                    className: "mbsc-timeline-header-text mbsc-timeline-header-date-text" + u
                }))), t.hasScrollY && Ln("div", {
                    className: "mbsc-schedule-fake-scroll-y"
                })), Ln("div", {
                    ref: this._setCont,
                    className: "mbsc-timeline-grid-scroll mbsc-flex-col mbsc-flex-1-1" + u + h + c,
                    onScroll: this._onScroll
                }, !this._hasSticky && Ln("div", {
                    className: "mbsc-flex-none" + C
                }), Ln("div", {
                    className: "mbsc-timeline-header mbsc-flex" + u + h + c,
                    ref: this._setHeaderCont
                }, g && Ln("div", {
                    className: "mbsc-timeline-resource-empty mbsc-timeline-resource-col" + C + u + h + c
                }), Ln("div", {
                    className: "mbsc-timeline-header-bg mbsc-flex-1-1 mbsc-flex" + u
                }, this._showTimeIndicator && Ln("div", {
                    className: "mbsc-timeline-time-indicator-cont",
                    style: {
                        height: (t.scrollContHeight || 0) - (t.headerHeight || 0),
                        width: t.hasScrollX ? this._gridWidth : ie
                    }
                }, Ln(Oo, {
                    amText: e.amText,
                    displayedTime: this._time,
                    displayedDays: this._daysNr,
                    displayTimezone: e.displayTimezone,
                    endDay: e.endDay,
                    firstDay: this._firstDayTz,
                    orientation: "y",
                    pmText: e.pmText,
                    rtl: e.rtl,
                    startDay: e.startDay,
                    startTime: m,
                    theme: e.theme,
                    timeFormat: e.timeFormat,
                    timezonePlugin: e.timezonePlugin
                })), Ln("div", {
                    className: "mbsc-flex-none",
                    style: {
                        width: this._placeholderSizeX
                    }
                }), Ln("div", {
                    className: t.hasScrollX ? "mbsc-flex-none" : "mbsc-flex-1-1"
                }, this._isMulti && Ln("div", {
                    className: "mbsc-flex"
                }, S.map((function(e) {
                    var t = e.lastOfMonth;
                    return Ln("div", {
                        key: e.timestamp,
                        className: "mbsc-timeline-month mbsc-flex-1-0-0" + u + h + c + (t ? " mbsc-timeline-day mbsc-timeline-day-border" : "")
                    }, Ln("div", {
                        className: "mbsc-timeline-header-month" + u + h + c + (t ? " mbsc-timeline-header-month-last" : "")
                    }, Ln("div", {
                        className: "mbsc-timeline-header-month-text" + (t ? " mbsc-timeline-header-month-text-last" : "")
                    }, e.monthTitle)))
                }))), e.weekNumbers && Ln("div", {
                    className: "mbsc-flex"
                }, S.map((function(e) {
                    var t = e.lastOfWeek;
                    return Ln("div", {
                        key: e.timestamp,
                        className: "mbsc-timeline-month mbsc-flex-1-0-0" + u + h + c + (t && (x || e.lastOfMonth) ? " mbsc-timeline-day mbsc-timeline-day-border" : "")
                    }, Ln("div", {
                        className: "mbsc-timeline-header-week" + u + h + c + (t ? " mbsc-timeline-header-week-last" : "")
                    }, Ln("div", {
                        className: "mbsc-timeline-header-week-text" + (t ? " mbsc-timeline-header-week-text-last" : "")
                    }, e.weekTitle)))
                }))), Ln("div", {
                    className: "mbsc-flex"
                }, S.map((function(t) {
                    return Ln("div", {
                        key: t.timestamp,
                        className: "mbsc-timeline-day mbsc-flex-1-0-0" + u + h + c + (t.dateIndex < i._daysNr - 1 && x || t.lastOfMonth ? " mbsc-timeline-day-border" : "") + (b || i._isMulti ? " mbsc-timeline-day-month" : "")
                    }, Ln("div", {
                        className: "mbsc-timeline-header-date" + u + h + c
                    }, Ln("div", {
                        "aria-hidden": "true",
                        className: "mbsc-timeline-header-date-text"
                    }, t.dateText), t.label && Ln("div", {
                        className: "mbsc-hidden-content"
                    }, t.label)), l && Ln("div", {
                        className: "mbsc-flex mbsc-timeline-slots" + u
                    }, v.map((function(n) {
                        return Ln("div", {
                            key: n.id,
                            className: "mbsc-timeline-slot mbsc-timeline-slot-header" + h + u
                        }, n.name && function(t) {
                            var n, a = t.slot,
                                s = a.name;
                            return e.renderSlot && me(s = e.renderSlot(t)) && (n = i._safeHtml(s), i._shouldEnhance = !0), Ln("div", {
                                key: a.id,
                                className: "mbsc-timeline-slot-title",
                                dangerouslySetInnerHTML: n
                            }, s)
                        }({
                            slot: n,
                            date: t.date
                        }))
                    }))), Ln("div", {
                        "aria-hidden": "true",
                        className: "mbsc-flex"
                    }, d.map((function(e, t) {
                        var n = !t,
                            a = t === d.length - 1;
                        return Ln("div", {
                            key: t,
                            style: n && !a ? T : a && !n ? D : ie,
                            className: "mbsc-flex mbsc-flex-1-1 mbsc-timeline-header-column" + u + h + c + (!i._displayTime || l ? " mbsc-timeline-no-height" : "") + (p > i._stepCell && d[t + 1] % p ? " mbsc-timeline-no-border" : "") + (n && T || a && D ? " mbsc-flex-none" : "")
                        }, Ln("div", {
                            className: "mbsc-timeline-header-time mbsc-flex-1-1 " + u
                        }, i._displayTime ? i._timeLabels[e] : ""), i._timesBetween.map((function(t) {
                            var n = e + (t + 1) * p;
                            return n > m && n < _ && Ln("div", {
                                key: t,
                                className: "mbsc-timeline-header-time mbsc-flex-1-1 " + u
                            }, i._timeLabels[n])
                        })))
                    }))))
                })))))), Ln("div", {
                    className: "mbsc-flex mbsc-flex-1-1"
                }, Ln("div", {
                    className: "mbsc-flex mbsc-flex-1-1"
                }, g && Ln("div", {
                    className: "mbsc-timeline-resources mbsc-timeline-resource-col mbsc-flex-col" + u + h,
                    ref: this._setResCont
                }, !this._hasSideSticky && Ln("div", {
                    className: "mbsc-flex-none" + C
                }), Ln("div", {
                    className: "mbsc-timeline-resource-bg mbsc-flex-1-1" + (this._hasHierarchy || t.hasScrollY ? "" : " mbsc-flex-col") + u
                }, Ln("div", {
                    style: {
                        height: this._placeholderSizeY
                    },
                    className: "mbsc-flex-none"
                }), this._resourcesBatch.map((function(t) {
                    var n, a = t.children,
                        s = i._hasHierarchy ? 1.75 * t.depth + "em" : ie,
                        r = {
                            minHeight: i._setRowHeight ? i._eventRows[t.id] * i._eventHeight + 10 : ie,
                            paddingLeft: e.rtl ? ie : s,
                            paddingRight: e.rtl ? s : ie
                        },
                        o = t.name;
                    return e.renderResource && me(o = e.renderResource(t)) && (n = i._safeHtml(o), i._shouldEnhance = !0), Ln("div", {
                        key: t.id,
                        className: "mbsc-timeline-resource" + u + h + c + (a ? " mbsc-timeline-parent mbsc-flex" : ""),
                        style: r
                    }, a && Ln(Ba, {
                        className: "mbsc-timeline-resource-icon" + h + c,
                        svg: t.collapsed ? e.rtl ? e.nextIconRtl : e.nextIcon : e.downIcon,
                        theme: e.theme,
                        onClick: function() {
                            return i._onParentClick(t)
                        }
                    }), Ln("div", {
                        className: "mbsc-timeline-resource-title" + (a ? " mbsc-flex-1-1" : ""),
                        dangerouslySetInnerHTML: n
                    }, o))
                })))), !this._hasSideSticky && g && Ln("div", {
                    className: "mbsc-timeline-resource-col"
                }), Ln("div", {
                    className: "mbsc-timeline-grid mbsc-flex-1-1" + (this._hasHierarchy || t.hasScrollY ? "" : " mbsc-flex-col"),
                    ref: this._setGridCont,
                    style: {
                        height: t.hasScrollY ? this._gridHeight : ie,
                        width: t.hasScrollX ? this._gridWidth : ie
                    }
                }, Ln("div", {
                    style: {
                        height: this._placeholderSizeY
                    },
                    className: "mbsc-flex-none"
                }), this._resourcesBatch.map((function(n) {
                    var a = n.id;
                    return Ln("div", {
                        key: a,
                        className: "mbsc-flex mbsc-timeline-row" + u + c + (n.children ? " mbsc-timeline-parent" : ""),
                        style: {
                            minHeight: i._setRowHeight ? i._eventRows[a] * i._eventHeight + 10 : ie
                        }
                    }, !l && Ln(sn, null, Ln("div", {
                        className: "mbsc-timeline-events"
                    }, w(i._events, "events", a, E)), w(i._invalids, "invalids", a, M), w(i._colors, "colors", a, k)), Ln("div", {
                        style: {
                            width: i._placeholderSizeX
                        },
                        className: "mbsc-flex-none"
                    }), S.map((function(n, s) {
                        var r = n.timestamp,
                            o = n.dateKey;
                        return Ln("div", {
                            key: r,
                            className: "mbsc-timeline-day mbsc-flex" + u + h + c + (n.dateIndex < i._daysNr - 1 && x || n.lastOfMonth ? " mbsc-timeline-day-border" : "") + (t.hasScrollX ? " mbsc-flex-none" : " mbsc-flex-1-1") + (b || i._isMulti ? " mbsc-timeline-day-month" : "")
                        }, v.map((function(t, n) {
                            var s = t.id,
                                m = i._events[a][s][o],
                                _ = i._colors[a][s][o],
                                p = i._invalids[a][s][o];
                            return Ln("div", {
                                key: s,
                                className: "mbsc-flex mbsc-flex-1-1" + (l ? " mbsc-timeline-slot" : "")
                            }, l && Ln(sn, null, Ln("div", {
                                className: "mbsc-timeline-events"
                            }, E(m ? m.events : [], o, a, s)), p && M(p.invalids), _ && k(_.colors)), d.map((function(t, n) {
                                var i = Eo(r, t),
                                    o = !n,
                                    l = n === d.length - 1;
                                return Ln("div", {
                                    key: n,
                                    className: "mbsc-timeline-column mbsc-flex-1-1" + u + h + c + (o && T || l && D ? " mbsc-flex-none" : ""),
                                    onClick: function(t) {
                                        return e.onCellClick({
                                            date: i,
                                            domEvent: t,
                                            resource: a,
                                            slot: s,
                                            source: f
                                        })
                                    },
                                    onDoubleClick: function(t) {
                                        return e.onCellDoubleClick({
                                            date: i,
                                            domEvent: t,
                                            resource: a,
                                            slot: s,
                                            source: f
                                        })
                                    },
                                    onContextMenu: function(t) {
                                        return e.onCellRightClick({
                                            date: i,
                                            domEvent: t,
                                            resource: a,
                                            slot: s,
                                            source: f
                                        })
                                    },
                                    style: o && !l ? T : l && !o ? D : ie
                                })
                            })))
                        })))
                    })))
                })))))), r && !t.isTouchDrag && Ln("div", {
                    className: "mbsc-calendar-dragging"
                }))
            }, t
        }(function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t._isTimeline = !0, t._onScroll = function() {
                    for (var e = t.s.rtl, n = t.state, a = t._gridWidth, s = t._scrollCont, i = s.scrollTop, r = s.scrollLeft, o = t._resCont, l = t._headerCont, c = t._stickyHeader, h = t._daysNr, d = e ? -1 : 1, u = e ? "marginRight" : "marginLeft", m = Te(r * d * (h / t._daysBatchNr) / a), _ = t._virtualPagesY || [], p = 0, v = 0; v < _.length && _[v].top <= i;) p = v, v++;
                    if (!o || Ht && !e || (o.scrollTop = i), c && Ht) {
                        var f = c.style;
                        f.marginTop = i < 0 ? -i + "px" : "", f[u] = r * d < 0 ? -r * d + "px" : ""
                    }
                    if (l && a) {
                        var g = t._days,
                            y = a / h,
                            b = ce(Ce(r * d / y), 0, h - 1),
                            x = function(e, t) {
                                if (e && y) {
                                    e.textContent = g[b][t + "Text"];
                                    var n = e.offsetWidth,
                                        a = e.style,
                                        s = ce(Ce((r * d + n) / y), 0, h - 1);
                                    g[b][t + "Index"] !== g[s][t + "Index"] ? a[u] = -(r * d + n - g[s][t + "Index"] * y + 1) + "px" : a[u] = ""
                                }
                            };
                        x(t._stickyDate, "date"), x(t._stickyMonth, "month"), x(t._stickyWeek, "week"), Ht || (l.scrollLeft = r)
                    }!a || m === n.batchIndexX && p === n.batchIndexY || t.setState({
                        batchIndexX: m,
                        batchIndexY: p
                    })
                }, t
            }
            return a(t, e), t.prototype._onParentClick = function(e) {
                e.collapsed = !e.collapsed, this._visibleResources = this._flattenResources(this.s.resources, [], 0), this._shouldCheckSize = !0, this.forceUpdate()
            }, t.prototype._render = function(t, n) {
                e.prototype._render.call(this, t, n);
                var a = this._stepCell / An,
                    s = Ce(this._startTime / An) % a,
                    i = Ce(this._endTime / An) % a + 1;
                this._startCellStyle = this._displayTime && s % a != 0 ? {
                    width: (n.cellWidth || 64) * ((a - s) % a / a) + "px"
                } : ie, this._endCellStyle = this._displayTime && i % a != 0 ? {
                    width: (n.cellWidth || 64) * (i % a) / a + "px"
                } : ie
            }, t
        }(No)),
        zo = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t._instanceService = new nr, t._setList = function(e) {
                    t._list = e
                }, t._setPopoverList = function(e) {
                    t._popoverList = e && e._el
                }, t._setEl = function(e) {
                    t._el = e ? e._el || e : null, t._calendarView = e
                }, t
            }
            return a(t, e), t.prototype._eventRenderer = function(e, t, n, a, s) {
                var i, r = this,
                    o = !this._colorEventList,
                    l = s ? "popover" : "agenda",
                    c = !s || this.state.showPopover,
                    h = this._theme,
                    d = a.renderEventContent ? a.renderEventContent(e) : Ln("div", {
                        className: "mbsc-event-text " + h,
                        title: e.tooltip,
                        dangerouslySetInnerHTML: e.html
                    });
                me(d) ? (d = Ln("div", {
                    className: "mbsc-event-content" + h,
                    dangerouslySetInnerHTML: {
                        __html: d
                    }
                }), this._shouldEnhance = c && l) : d = Ln("div", {
                    className: "mbsc-event-content" + h
                }, d);
                var u = a.renderEvent ? a.renderEvent(e) : Ln(sn, null, Ln("div", {
                    className: "mbsc-event-color" + h + this._rtl,
                    style: e.style
                }), d, Ln("div", {
                    className: "mbsc-event-time" + h + this._rtl
                }, e.allDayText && Ln("div", {
                    className: "mbsc-event-all-day" + h
                }, e.allDayText), e.lastDay && Ln("div", {
                    className: "mbsc-event-until" + h
                }, e.lastDay), e.start && Ln("div", {
                    className: "mbsc-event-start" + h
                }, e.start), e.start && e.end && Ln("div", {
                    className: "mbsc-event-sep" + h
                }, "-"), e.end && Ln("div", {
                    className: "mbsc-event-end" + h
                }, e.end)));
                return me(u) && (i = {
                    __html: u
                }, u = ie, this._shouldEnhance = c && l), Ln(co, {
                    className: "mbsc-event" + (o ? "" : " mbsc-colored-event"),
                    key: t,
                    actionable: a.actionableEvents,
                    dangerouslySetInnerHTML: i,
                    data: e.original,
                    drag: s && this._showEventLabels && a.dragToMove,
                    rtl: a.rtl,
                    selected: this._selectedEventsMap[e.uid] || this._selectedEventsMap[e.id],
                    style: o ? ie : e.style,
                    theme: a.theme,
                    themeVariant: a.themeVariant,
                    onClick: function(t) {
                        return r._onEventClick({
                            date: n,
                            domEvent: t.domEvent,
                            event: e.original,
                            source: l
                        })
                    },
                    onDoubleClick: function(t) {
                        return r._onEventDoubleClick({
                            date: n,
                            domEvent: t,
                            event: e.original,
                            source: l
                        })
                    },
                    onContextMenu: function(t) {
                        return r._onEventRightClick({
                            date: n,
                            domEvent: t,
                            event: e.original,
                            source: l
                        })
                    },
                    onHoverIn: function(t) {
                        var a = t.domEvent;
                        return r._onEventHoverIn({
                            date: n,
                            domEvent: a,
                            event: e.original,
                            source: l
                        })
                    },
                    onHoverOut: function(t) {
                        var a = t.domEvent;
                        return r._onEventHoverOut({
                            date: n,
                            domEvent: a,
                            event: e.original,
                            source: l
                        })
                    },
                    onDelete: this._onEventDelete,
                    onDragEnd: this._onLabelUpdateEnd,
                    onDragModeOff: this._onLabelUpdateModeOff,
                    onDragModeOn: this._onLabelUpdateModeOn,
                    onDragMove: this._onLabelUpdateMove,
                    onDragStart: this._onLabelUpdateStart
                }, u)
            }, t.prototype._listRenderer = function() {
                var e = this,
                    t = this.s,
                    n = t.theme,
                    a = this._listDays,
                    s = this.state.eventList;
                return t.renderAgenda ? this._eventListHTML === ie ? t.renderAgenda(s, t, a) : void 0 : Ln(ho, {
                    theme: n,
                    themeVariant: t.themeVariant,
                    rtl: t.rtl
                }, !s.length && Ln("div", {
                    className: "mbsc-event-list-empty" + this._theme
                }, t.noEventsText), s.map((function(s, i) {
                    return Ln("div", {
                        className: "mbsc-event-group" + e._theme,
                        key: i,
                        ref: function(e) {
                            return a[s.timestamp] = e
                        }
                    }, ("day" !== e._eventListType || e._eventListSize > 1) && Ln(lo, {
                        theme: n,
                        themeVariant: t.themeVariant,
                        className: "mbsc-event-day"
                    }, s.date), s.events.map((function(n, a) {
                        return e._eventRenderer(n, a, s.timestamp, t)
                    })))
                })))
            }, t.prototype._template = function(e, t) {
                var n, a = this;
                this._listDays || (this._listDays = {}), this._showEventList && me(n = this._listRenderer()) && (this._eventListHTML = {
                    __html: n
                }, this._shouldLoadDays = !0, this._shouldEnhance = !0, n = ie);
                var i = {
                        amText: e.amText,
                        clickToCreate: e.clickToCreate,
                        dataTimezone: e.dataTimezone,
                        dateFormat: e.dateFormat,
                        dayNames: e.dayNames,
                        dayNamesMin: e.dayNamesMin,
                        dayNamesShort: e.dayNamesShort,
                        displayTimezone: e.displayTimezone,
                        dragToCreate: e.dragToCreate,
                        dragToMove: e.dragToMove,
                        dragToResize: e.dragToResize,
                        eventOrder: e.eventOrder,
                        exclusiveEndDates: e.exclusiveEndDates,
                        firstDay: e.firstDay,
                        fromText: e.fromText,
                        getDate: e.getDate,
                        getDay: e.getDay,
                        getMonth: e.getMonth,
                        getYear: e.getYear,
                        monthNames: e.monthNames,
                        monthNamesShort: e.monthNamesShort,
                        pmText: e.pmText,
                        refDate: this._refDate,
                        rtl: e.rtl,
                        selectedEventsMap: this._selectedEventsMap,
                        showEventTooltip: e.showEventTooltip,
                        theme: e.theme,
                        themeVariant: e.themeVariant,
                        timeFormat: e.timeFormat,
                        timezonePlugin: e.timezonePlugin,
                        toText: e.toText
                    },
                    r = s({}, i, {
                        allDayText: e.allDayText,
                        colorsMap: this._colorsMap,
                        dateFormatLong: e.dateFormatLong,
                        dragTimeStep: e.dragTimeStep,
                        eventDragEnd: this._onEventDragStop,
                        eventMap: this._eventMap,
                        extendDefaultEvent: e.extendDefaultEvent,
                        externalDrop: e.externalDrop,
                        groupBy: e.groupBy,
                        height: t.height,
                        invalidateEvent: e.invalidateEvent,
                        invalidsMap: this._invalidsMap,
                        maxDate: this._maxDate,
                        minDate: this._minDate,
                        newEventText: e.newEventText,
                        onCellClick: this._onCellClick,
                        onCellDoubleClick: this._onCellDoubleClick,
                        onCellRightClick: this._onCellRightClick,
                        onEventClick: this._onEventClick,
                        onEventDelete: this._onEventDelete,
                        onEventDoubleClick: this._onEventDoubleClick,
                        onEventDragEnd: this._onEventDragEnd,
                        onEventDragStart: this._onEventDragStart,
                        onEventHoverIn: this._onEventHoverIn,
                        onEventHoverOut: this._onEventHoverOut,
                        onEventRightClick: this._onEventRightClick,
                        renderEvent: e.renderScheduleEvent,
                        renderEventContent: e.renderScheduleEventContent,
                        renderResource: e.renderResource,
                        resources: e.resources,
                        scroll: this._shouldScrollSchedule,
                        selected: this._selectedDateTime,
                        width: t.width
                    });
                return Ln(tr, s({
                    ref: this._setEl
                }, i, {
                    activeDate: this._active,
                    calendarScroll: this._calendarScroll,
                    calendarType: this._calendarType,
                    colors: e.colors,
                    context: e.context,
                    cssClass: this._cssClass,
                    downIcon: e.downIcon,
                    dragData: t.labelDragData,
                    endDay: this._rangeEndDay,
                    eventRange: this._rangeType,
                    eventRangeSize: this._showSchedule ? this._scheduleSize : this._showTimeline ? this._timelineSize : this._eventListSize,
                    hasContent: this._showEventList || this._showSchedule || this._showTimeline,
                    hasPicker: !0,
                    height: e.height,
                    invalid: e.invalid,
                    instanceService: this._instanceService,
                    labels: e.labels,
                    labelList: this._calendarLabelList,
                    marked: e.marked,
                    max: e.max,
                    min: e.min,
                    mouseSwipe: !e.dragToCreate && "single" !== e.clickToCreate || !this._showEventLabels && !this._showEventCount,
                    mousewheel: e.mousewheel,
                    nextIconH: e.nextIconH,
                    nextIconV: e.nextIconV,
                    nextPageText: e.nextPageText,
                    noOuterChange: !this._showEventList,
                    onActiveChange: this._onActiveChange,
                    onCellHoverIn: this._onCellHoverIn,
                    onCellHoverOut: this._onCellHoverOut,
                    onDayClick: this._onDayClick,
                    onDayDoubleClick: this._onDayDoubleClick,
                    onDayRightClick: this._onDayRightClick,
                    onGestureStart: this._onGestureStart,
                    onLabelClick: this._onLabelClick,
                    onLabelDoubleClick: this._onLabelDoubleClick,
                    onLabelRightClick: this._onLabelRightClick,
                    onLabelHoverIn: this._onLabelHoverIn,
                    onLabelHoverOut: this._onLabelHoverOut,
                    onLabelDelete: this._onEventDelete,
                    onLabelUpdateStart: this._onLabelUpdateStart,
                    onLabelUpdateMove: this._onLabelUpdateMove,
                    onLabelUpdateEnd: this._onLabelUpdateEnd,
                    onLabelUpdateModeOn: this._onLabelUpdateModeOn,
                    onLabelUpdateModeOff: this._onLabelUpdateModeOff,
                    onPageChange: this._onPageChange,
                    onPageLoaded: this._onPageLoaded,
                    onPageLoading: this._onPageLoading,
                    onResize: this._onResize,
                    pageLoad: this._pageLoad,
                    prevIconH: e.prevIconH,
                    prevIconV: e.prevIconV,
                    prevPageText: e.prevPageText,
                    resourcesMap: this._resourcesMap,
                    responsiveStyle: !0,
                    renderHeader: e.renderHeader,
                    renderDay: e.renderDay,
                    renderDayContent: e.renderDayContent,
                    renderLabel: e.renderLabel,
                    renderLabelContent: e.renderLabelContent,
                    selectedDates: this._selectedDates,
                    selectView: ii,
                    showCalendar: this._showCalendar,
                    showControls: e.showControls,
                    showLabelCount: this._showEventCount,
                    showOuterDays: this._showOuterDays,
                    showSchedule: this._showSchedule || this._showTimeline,
                    showToday: e.showToday,
                    showWeekNumbers: this._showWeekNumbers,
                    size: this._calendarSize,
                    startDay: this._rangeStartDay,
                    swipe: !t.isTouchDrag,
                    upIcon: e.upIcon,
                    valid: e.valid,
                    weeks: this._calendarSize,
                    width: e.width,
                    getMaxDayOfMonth: e.getMaxDayOfMonth,
                    getWeekNumber: e.getWeekNumber,
                    eventText: e.eventText,
                    eventsText: e.eventsText,
                    fromText: e.fromText,
                    moreEventsPluralText: e.moreEventsPluralText,
                    moreEventsText: e.moreEventsText,
                    todayText: e.todayText,
                    toText: e.toText,
                    weekText: e.weekText,
                    yearSuffix: e.yearSuffix
                }), this._showDate && Ln("div", {
                    className: "mbsc-schedule-date-header mbsc-flex" + this._theme + this._hb
                }, this._showSchedule && !this._showCalendar && e.resources && Ln("div", {
                    className: "mbsc-schedule-time-col"
                }), Ln("div", {
                    className: "mbsc-schedule-date-header-text mbsc-flex-1-1" + this._theme
                }, this._selectedDateHeader), this._showSchedule && !this._showCalendar && e.resources && Ln("div", {
                    className: "mbsc-schedule-fake-scroll-y"
                })), this._showEventList && Ln("div", {
                    className: "mbsc-event-list" + (t.isListScrollable ? " mbsc-event-list-scroll" : ""),
                    dangerouslySetInnerHTML: this._eventListHTML,
                    onScroll: this._onScroll,
                    ref: this._setList
                }, n), this._showSchedule && Ln(Po, s({}, r, {
                    endDay: this._scheduleEndDay,
                    endTime: this._scheduleEndTime,
                    renderDay: e.renderDay,
                    renderDayContent: e.renderDayContent,
                    showAllDay: this._showScheduleAllDay,
                    showDays: this._showScheduleDays,
                    size: this._scheduleSize,
                    startDay: this._scheduleStartDay,
                    startTime: this._scheduleStartTime,
                    timeCellStep: this._scheduleTimeCellStep,
                    timeLabelStep: this._scheduleTimeLabelStep,
                    timezones: this._scheduleTimezones,
                    type: this._scheduleType,
                    onWeekDayClick: this._onWeekDayClick
                })), this._showTimeline && Ln(Fo, s({}, r, {
                    dragToCreate: !e.slots && e.dragToCreate,
                    dragToResize: !e.slots && e.dragToResize,
                    downIcon: e.chevronIconDown,
                    endDay: this._timelineEndDay,
                    endTime: this._timelineEndTime,
                    eventList: this._timelineListing,
                    getWeekNumber: e.getWeekNumber,
                    nextIcon: e.nextIconH,
                    nextIconRtl: e.prevIconH,
                    renderResourceHeader: e.renderResourceHeader,
                    renderSlot: e.renderSlot,
                    rowHeight: this._timelineRowHeight,
                    weekNumbers: this._showTimelineWeekNumbers,
                    weekText: e.weekText,
                    size: this._timelineSize,
                    slots: e.slots,
                    startDay: this._timelineStartDay,
                    startTime: this._timelineStartTime,
                    timeCellStep: this._timelineTimeCellStep,
                    timeLabelStep: this._timelineTimeLabelStep,
                    type: this._timelineType
                })), Ln(ni, {
                    anchor: this._anchor,
                    closeOnScroll: !0,
                    contentPadding: !1,
                    context: e.context,
                    cssClass: "mbsc-calendar-popup " + this._popoverClass,
                    display: "anchored",
                    isOpen: t.showPopover,
                    locale: e.locale,
                    maxHeight: "24em",
                    onClose: this._onPopoverClose,
                    rtl: e.rtl,
                    scrollLock: !1,
                    showOverlay: !1,
                    theme: e.theme,
                    themeVariant: e.themeVariant
                }, t.popoverList && Ln(ho, {
                    ref: this._setPopoverList,
                    theme: e.theme,
                    themeVariant: e.themeVariant,
                    rtl: e.rtl,
                    className: "mbsc-popover-list"
                }, t.popoverList.map((function(n, s) {
                    return a._eventRenderer(n, s, t.popoverDate, e, !0)
                })))), t.labelDragData && t.labelDragData.draggedEvent && !t.isTouchDrag && Ln("div", {
                    className: "mbsc-calendar-dragging"
                }))
            }, t
        }(To),
        Vo = {
            before: function(e, t) {
                t.selectedDate && (t.defaultSelectedDate = t.selectedDate, delete t.selectedDate)
            }
        },
        Ro = (Si._selector = "[mbsc-calendar-next]", ki),
        Ao = (Ci._selector = "[mbsc-calendar-prev]", Si),
        Wo = (wi._selector = "[mbsc-calendar-today]", Ci),
        Uo = (ki._selector = "[mbsc-calendar-nav]", wi),
        Bo = Qr(Ao),
        jo = Qr(Wo),
        Ko = Qr(Uo),
        Jo = Qr(Ro),
        Xo = {
            before: function(e, t) {
                t.element = e
            }
        },
        Go = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return a(t, e), t._selector = "[mbsc-draggable]", t._renderOpt = Xo, t
        }(function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return a(t, e), t.prototype._template = function(e) {
                return e.children || ""
            }, t
        }(po)),
        qo = Qr(Go, Xo),
        Zo = Qr(zo, Vo),
        $o = {
            before: function(e, t) {
                t.tag = e.nodeName.toLowerCase()
            },
            hasChildren: !0,
            parentClass: "mbsc-button",
            readProps: ["disabled"],
            slots: {
                endIcon: "end-icon",
                icon: "icon",
                startIcon: "start-icon"
            }
        },
        Qo = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return a(t, e), t._selector = "[mbsc-button]", t._renderOpt = $o, t
        }(js),
        el = Qr(Qo, $o),
        tl = {
            hasChildren: !0,
            parentClass: "mbsc-form-control-label",
            readProps: ["disabled"],
            renderToParent: !0,
            before: function(e, t) {
                t.defaultChecked = e.checked
            }
        },
        nl = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return a(t, e), t._selector = "[mbsc-checkbox]", t._renderOpt = tl, t
        }(function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t._setInput = function(e) {
                    t._input = e
                }, t
            }
            return a(t, e), Object.defineProperty(t.prototype, "checked", {
                get: function() {
                    return this._checked
                },
                set: function(e) {
                    this._checked = e, this.setState({
                        checked: e
                    })
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype._template = function(e) {
                var t = this.props,
                    n = t.children;
                t.className, t.color, t.defaultChecked;
                var a = t.description,
                    r = t.hasChildren;
                t.inputStyle;
                var o = t.label;
                t.onChange, t.position, t.rtl, t.theme, t.themeVariant;
                var l = i(t, ["children", "className", "color", "defaultChecked", "description", "hasChildren", "inputStyle", "label", "onChange", "position", "rtl", "theme", "themeVariant"]);
                return Ln("label", {
                    className: this._cssClass
                }, Ln("input", s({
                    type: "checkbox",
                    className: "mbsc-form-control-input mbsc-reset",
                    onChange: this._onChange,
                    disabled: this._disabled,
                    checked: this._checked,
                    ref: this._setInput
                }, l)), Ln("span", {
                    className: this._boxClass
                }), (o || r) && Ln("span", {
                    className: "mbsc-form-control-label" + this._theme + (this._disabled ? " mbsc-disabled" : "")
                }, o), a && Ln("span", {
                    className: "mbsc-description" + this._theme + (this._disabled ? " mbsc-disabled" : "")
                }, a), n)
            }, t
        }(function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t._onChange = function(e) {
                    var n = t.s,
                        a = e.target.checked;
                    n.checked === ie && t.setState({
                        checked: a
                    }), t._change(a), n.onChange && n.onChange(e)
                }, t
            }
            return a(t, e), t.prototype._mounted = function() {
                var e = this;
                this._unlisten = Ts(this._input, {
                    click: !0,
                    onBlur: function() {
                        e.setState({
                            hasFocus: !1
                        })
                    },
                    onFocus: function() {
                        e.setState({
                            hasFocus: !0
                        })
                    },
                    onPress: function() {
                        e.setState({
                            isActive: !0
                        })
                    },
                    onRelease: function() {
                        e.setState({
                            isActive: !1
                        })
                    }
                })
            }, t.prototype._change = function(e) {}, t.prototype._render = function(e, t) {
                var n = e.disabled === ie ? t.disabled : fe(e.disabled),
                    a = "start" === e.position ? e.rtl ? "right" : "left" : e.rtl ? "left" : "right";
                this._disabled = n, this._checked = e.checked !== ie ? fe(e.checked) : t.checked === ie ? fe(e.defaultChecked) : t.checked, this._cssClass = "mbsc-checkbox mbsc-form-control-wrapper mbsc-font " + this._className + this._theme + this._rtl + this._hb + " mbsc-checkbox-" + a + (n ? " mbsc-disabled" : ""), this._boxClass = "mbsc-checkbox-box" + this._theme + " mbsc-checkbox-box-" + a + (t.hasFocus && !n ? " mbsc-focus" : "") + (t.isActive && !n ? " mbsc-active" : "") + (e.color ? " mbsc-checkbox-box-" + e.color : "") + (n ? " mbsc-disabled" : "") + (this._checked ? " mbsc-checked" : "")
            }, t.prototype._destroy = function() {
                this._unlisten()
            }, t.defaults = {
                position: "start"
            }, t._name = "Checkbox", t
        }(Ua))),
        al = Qr(nl, tl),
        sl = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t._tag = "select", t
            }
            return a(t, e), t._name = "Dropdown", t
        }(Ms),
        il = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t._tag = "textarea", t
            }
            return a(t, e), t._name = "Textarea", t
        }(Ms),
        rl = {
            hasChildren: !0,
            parentClass: "mbsc-label",
            readAttrs: ["placeholder", "rows"],
            readProps: ["disabled", "type"],
            renderToParent: !0,
            slots: {
                endIcon: "end-icon",
                label: "label",
                startIcon: "start-icon"
            },
            before: function(e, t, n) {
                var a = e.parentNode,
                    s = pt.createElement("span");
                if (a.insertBefore(s, e), s.appendChild(e), t.inputClass = e.getAttribute("class"), "SELECT" === e.nodeName && delete t.hasChildren, !t.label && t.hasChildren && (t.label = n[0].textContent), t.label) {
                    var i = pt.createElement("span");
                    a.insertBefore(i, s)
                }
            }
        },
        ol = s({}, rl, {
            hasValue: !0,
            parentClass: "mbsc-select",
            useOwnChildren: !0
        }),
        ll = s({}, rl, {
            hasValue: !0
        }),
        cl = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return a(t, e), t._selector = "[mbsc-input]", t._renderOpt = rl, t
        }(Ms),
        hl = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return a(t, e), t._selector = "[mbsc-dropdown]", t._renderOpt = ol, t
        }(sl),
        dl = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return a(t, e), t._selector = "[mbsc-textarea]", t._renderOpt = ll, t
        }(il),
        ul = Qr(cl, rl),
        ml = Qr(hl, ol),
        _l = Qr(dl, rl),
        pl = [],
        vl = [],
        fl = m && !!vt.Promise;

    function gl(e, t, n, a, i) {
        return s({
            closeOnOverlayClick: !1,
            context: t.context,
            cssClass: "mbsc-alert",
            display: t.display || "center",
            onClose: function() {
                e.shift()
            },
            onClosed: function() {
                bl(t, a, i)
            },
            theme: t.theme,
            themeVariant: t.themeVariant
        }, n)
    }

    function yl(e, t, n, a) {
        return gl(vl, e, {
            animation: e.animation || (a ? "pop" : ie),
            buttons: [],
            closeOnOverlayClick: !1,
            contentPadding: a,
            cssClass: "mbsc-" + (a ? "toast" : "snackbar") + " mbsc-" + (e.color ? e.color : "color-none") + " " + (e.cssClass || ""),
            display: e.display || "bottom",
            focusOnClose: !1,
            focusOnOpen: !1,
            focusTrap: !1,
            onOpen: function(t, n) {
                ! function(e, t) {
                    !1 !== e.duration && setTimeout((function() {
                        t.close()
                    }), e.duration || 3e3)
                }(e, n)
            },
            scrollLock: !1,
            showOverlay: !1,
            touchUi: !0
        }, t, n)
    }

    function bl(e, t, n, a) {
        n(a), e.callback && e.callback(a), pl.length ? pl[0].open() : vl.length && vl[0].open(), t()
    }

    function xl(e, t, n) {
        return yl(e, t, n, !0)
    }

    function Tl(e, t, n) {
        return yl(e, t, n, !1)
    }

    function Dl(e, t, n) {
        return gl(pl, e, {
            buttons: ["ok"],
            cssClass: "mbsc-alert " + (e.cssClass || ""),
            okText: e.okText || "OK"
        }, t, n)
    }

    function Cl(e, t, n) {
        var a = !1;
        return gl(pl, e, {
            buttons: ["cancel", "ok"],
            cancelText: e.cancelText || "Cancel",
            cssClass: "mbsc-confirm " + (e.cssClass || ""),
            okText: e.okText || "OK",
            onButtonClick: function(e) {
                "ok" === e.button.name && (a = !0)
            },
            onClosed: function() {
                bl(e, t, n, a)
            }
        }, t, n)
    }

    function Sl(e, t, n, a) {
        var s;
        return gl(pl, e, {
            activeElm: "input",
            buttons: ["cancel", "ok"],
            cancelText: e.cancelText || "Cancel",
            cssClass: "mbsc-prompt " + (e.cssClass || ""),
            okText: e.okText || "OK",
            onButtonClick: function(e) {
                "ok" === e.button.name && (s = !0)
            },
            onClosed: function() {
                bl(e, t, n, s ? a() : null)
            }
        }, t, n)
    }

    function wl(e) {
        pl.length || e.open(), pl.push(e)
    }

    function kl(e) {
        var t = vl[0];
        vl.push(e), pl.length || (t ? t.close() : e.open())
    }

    function Ml(e, t) {
        var n;
        return fl ? n = new Promise((function(n) {
            e(t, n)
        })) : e(t, be), n
    }

    function El(e) {
        return Ln("div", {
            className: "mbsc-alert-content"
        }, e.title && Ln("h2", {
            className: "mbsc-alert-title"
        }, e.title), Ln("p", {
            className: "mbsc-alert-message"
        }, " ", e.message || "", " "))
    }

    function Nl(e, t, n, a, i, r) {
        if (pt) {
            var o, l = pt.createElement("div"),
                c = n(t, (function() {
                    setTimeout((function() {
                        var e;
                        (e = l)._children && kn(null, e)
                    }))
                }), i, r);
            return kn(Ln(ni, s({
                ref: function(e) {
                    o = e
                }
            }, c), e), l), a(o), o
        }
    }

    function Il(e, t) {
        Nl(Ln("div", {
            className: "mbsc-toast-background mbsc-toast-message"
        }, e.message || ""), e, xl, kl, t)
    }

    function Ll(e, t) {
        var n, a = Ln("div", {
            className: "mbsc-toast-background mbsc-snackbar-cont"
        }, Ln("div", {
            className: "mbsc-snackbar-message"
        }, e.message || ""), e.button && Ln(js, {
            className: "mbsc-snackbar-button",
            icon: e.button.icon,
            onClick: function() {
                n && (n.close(), e.button && e.button.action && e.button.action())
            },
            theme: e.theme,
            themeVariant: e.themeVariant,
            variant: "flat"
        }, e.button.text));
        n = Nl(a, e, Tl, kl, t)
    }

    function Hl(e, t) {
        Nl(El(e), e, Dl, wl, t)
    }

    function Ol(e, t) {
        Nl(El(e), e, Cl, wl, t)
    }

    function Yl(e, t) {
        var n = "";
        Nl(Ln("div", {
            className: "mbsc-alert-content"
        }, e.title && Ln("h2", {
            className: "mbsc-alert-title"
        }, e.title), Ln("p", {
            className: "mbsc-alert-message"
        }, " ", e.message || ""), Ln(Ms, {
            className: "mbsc-prompt-input",
            label: e.label,
            onChange: function(e) {
                n = e.target.value
            },
            placeholder: e.placeholder || "",
            type: e.inputType,
            theme: e.theme,
            themeVariant: e.themeVariant
        })), e, Sl, wl, t, (function() {
            return n
        }))
    }
    var Pl = {
            hasChildren: !0,
            parentClass: "mbsc-page",
            before: function(e, t) {
                t.tag = e.nodeName.toLowerCase()
            }
        },
        Fl = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return a(t, e), t._selector = "[mbsc-page]", t._renderOpt = Pl, t
        }(function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return a(t, e), t.prototype._template = function(e) {
                return Ln(e.tag || "div", {
                    className: this._cssClass,
                    ref: this._setEl
                }, e.children)
            }, t
        }(function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return a(t, e), t.prototype._render = function(e) {
                this._cssClass = "mbsc-page mbsc-font " + this._className + this._theme + this._rtl
            }, t.defaults = {}, t._name = "Page", t
        }(Ua))),
        zl = Qr(Fl, Pl),
        Vl = 1,
        Rl = {
            hasChildren: !0,
            parentClass: "mbsc-form-control-label",
            readAttrs: ["value"],
            readProps: ["disabled", "name"],
            renderToParent: !0,
            before: function(e, t) {
                t.defaultChecked = e.checked
            }
        },
        Al = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return a(t, e), t._selector = "[mbsc-radio]", t._renderOpt = Rl, t
        }(function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t._setInput = function(e) {
                    t._input = e
                }, t
            }
            return a(t, e), Object.defineProperty(t.prototype, "checked", {
                get: function() {
                    return this._checked
                },
                set: function(e) {
                    this._checked = e, this._toggle(e)
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype._template = function(e, t) {
                var n = this,
                    a = this.props,
                    r = a.children;
                a.className, a.color, a.defaultChecked;
                var o = a.description,
                    l = a.hasChildren,
                    c = a.label;
                a.onChange, a.position, a.rtl, a.theme, a.themeVariant;
                var h = i(a, ["children", "className", "color", "defaultChecked", "description", "hasChildren", "label", "onChange", "position", "rtl", "theme", "themeVariant"]);
                return Ln(Cr.Consumer, null, (function(e) {
                    return n._groupOptions(e), Ln("label", {
                        className: n._cssClass
                    }, Ln("input", s({
                        checked: n._checked,
                        className: "mbsc-form-control-input mbsc-reset",
                        disabled: n._disabled,
                        name: n._name,
                        onChange: n._onChange,
                        type: "radio",
                        value: n._value,
                        ref: n._setInput
                    }, h)), Ln("span", {
                        className: n._boxClass
                    }), (c || l) && Ln("span", {
                        className: "mbsc-form-control-label" + n._theme + (n._disabled ? " mbsc-disabled" : "")
                    }, c), o && Ln("span", {
                        className: "mbsc-description" + n._theme + (n._disabled ? " mbsc-disabled" : "")
                    }, o), r)
                }))
            }, t
        }(function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t._id = "mbsc-radio-" + Vl++, t._onChange = function(e) {
                    var n = t.s,
                        a = e.target.checked;
                    t._change(a), t._onGroupChange && t._onGroupChange(e, t._value), t._toggle(a), n.onChange && n.onChange(e)
                }, t._onValueChange = function(e) {
                    var n = t.s,
                        a = e === t._value;
                    n.checked === ie && t.setState({
                        checked: a
                    }), t._change(a)
                }, t
            }
            return a(t, e), t.prototype._mounted = function() {
                var e = this;
                this._unlisten = Ts(this._input, {
                    click: !0,
                    onBlur: function() {
                        e.setState({
                            hasFocus: !1
                        })
                    },
                    onFocus: function() {
                        e.setState({
                            hasFocus: !0
                        })
                    },
                    onPress: function() {
                        e.setState({
                            isActive: !0
                        })
                    },
                    onRelease: function() {
                        e.setState({
                            isActive: !1
                        })
                    }
                })
            }, t.prototype._change = function(e) {}, t.prototype._toggle = function(e) {
                this.s.checked === ie && this.setState({
                    checked: e
                }), e && Mr(this._name, this._value)
            }, t.prototype._groupOptions = function(e) {
                var t = e.color,
                    n = e.disabled,
                    a = e.name,
                    s = e.onChange,
                    i = e.position,
                    r = e.rtl,
                    o = e.value,
                    l = this.s,
                    c = this.state,
                    h = r === ie ? l.rtl : r,
                    d = t === ie ? l.color : t,
                    u = "start" === (i === ie ? l.position : i) ? l.rtl ? "right" : "left" : l.rtl ? "left" : "right",
                    m = n === ie ? l.disabled === ie ? c.disabled : fe(l.disabled) : fe(n),
                    _ = l.checked !== ie ? fe(l.checked) : c.checked === ie ? fe(l.defaultChecked) : c.checked;
                this._value = l.value === ie ? this._id : l.value, this._onGroupChange = s, this._name = a === ie ? l.name : a, this._rtl = h ? " mbsc-rtl" : " mbsc-ltr", this._checked = o === ie ? _ : o === this._value, this._disabled = m, this._cssClass = "mbsc-radio mbsc-form-control-wrapper mbsc-font " + this._className + this._theme + this._rtl + this._hb + " mbsc-radio-" + u + (m ? " mbsc-disabled" : ""), this._boxClass = "mbsc-radio-box" + this._theme + " mbsc-radio-box-" + u + (c.hasFocus && !m ? " mbsc-focus" : "") + (c.isActive && !m ? " mbsc-active" : "") + (d ? " mbsc-radio-box-" + d : "") + (m ? " mbsc-disabled" : "") + (this._checked ? " mbsc-checked" : "")
            }, t.prototype._updated = function() {
                this._name && !this._unsubscribe && (this._unsubscribe = wr(this._name, this._onValueChange))
            }, t.prototype._destroy = function() {
                kr(this._name, this._unsubscribe), this._unlisten()
            }, t.defaults = {
                position: "start"
            }, t._name = "Radio", t
        }(Ua))),
        Wl = Qr(Al, Rl),
        Ul = {
            hasChildren: !0,
            parentClass: "mbsc-segmented-button",
            readAttrs: ["value"],
            readProps: ["disabled", "name"],
            renderToParent: !0,
            before: function(e, t) {
                t.select = "checkbox" === e.type ? "multiple" : "single", t.defaultChecked = e.checked, t.inputClass = e.getAttribute("class");
                var n = e.parentNode,
                    a = n.parentNode;
                if (null === a.getAttribute("mbsc-segmented-group")) {
                    var s = pt.createElement("div");
                    s.setAttribute("mbsc-segmented-group", ""), a.insertBefore(s, n), s.appendChild(n), Gt(a.querySelectorAll('input[name="' + e.name + '"]'), (function(e) {
                        s.appendChild(e.parentNode)
                    }))
                }
            }
        },
        Bl = {
            hasChildren: !0,
            parentClass: "mbsc-segmented"
        },
        jl = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return a(t, e), t._selector = "[mbsc-segmented]", t._renderOpt = Ul, t
        }(Hr),
        Kl = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return a(t, e), t._selector = "[mbsc-segmented-group]", t._renderOpt = Bl, t
        }(Ir),
        Jl = Qr(jl, Ul),
        Xl = {
            readProps: ["disabled", "type", "min", "max", "step"],
            renderToParent: !0,
            before: function(e, t) {
                var n = e.parentNode,
                    a = pt.createElement("div");
                n.insertBefore(a, e), a.appendChild(e), t.defaultValue = +e.value, t.inputClass = e.getAttribute("class");
                var s = pt.createElement("div");
                n.insertBefore(s, a)
            }
        },
        Gl = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return a(t, e), t._selector = "[mbsc-stepper]", t._renderOpt = Xl, t
        }(function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t._onLabelClick = function(e) {
                    e.preventDefault()
                }, t._setInput = function(e) {
                    t._input = e
                }, t
            }
            return a(t, e), Object.defineProperty(t.prototype, "value", {
                get: function() {
                    return this._value
                },
                set: function(e) {
                    this._value = e, this.setState({
                        value: e
                    })
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype._template = function(e) {
                var t = this.props;
                t.children, t.className, t.color, t.defaultValue;
                var n = t.description;
                t.inputClass, t.inputPosition;
                var a = t.label;
                t.onChange, t.rtl, t.theme, t.themeVariant, t.value;
                var r = i(t, ["children", "className", "color", "defaultValue", "description", "inputClass", "inputPosition", "label", "onChange", "rtl", "theme", "themeVariant", "value"]),
                    o = this._theme;
                return Ln("label", {
                    className: this._cssClass,
                    onClick: this._onLabelClick
                }, Ln("div", {
                    className: "mbsc-stepper-content"
                }, a && Ln("span", {
                    className: "mbsc-stepper-label" + o + (this._disabled ? " mbsc-disabled" : "")
                }, a), n && Ln("span", {
                    className: "mbsc-description" + o + (this._disabled ? " mbsc-disabled" : "")
                }, n)), Ln("div", {
                    className: "mbsc-stepper-control" + o + this._rtl
                }, Ln(js, {
                    className: "mbsc-stepper-minus mbsc-stepper-button",
                    disabled: this._disabledMinus,
                    onClick: this._onMinusClick,
                    theme: e.theme,
                    themeVariant: e.themeVariant
                }, Ln("span", {
                    className: "mbsc-stepper-inner" + o
                }, "–")), Ln("input", s({
                    className: "mbsc-stepper-input" + (this._disabled ? " mbsc-disabled" : "") + " " + (e.inputClass || "") + o,
                    disabled: this._disabled,
                    max: this._max,
                    min: this._min,
                    ref: this._setInput,
                    step: this._step,
                    type: "number"
                }, r)), Ln(js, {
                    className: "mbsc-stepper-plus mbsc-stepper-button",
                    disabled: this._disabledPlus,
                    onClick: this._onPlusClick,
                    theme: e.theme,
                    themeVariant: e.themeVariant
                }, Ln("span", {
                    className: "mbsc-stepper-inner" + o
                }, "+"))))
            }, t
        }(function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t._onChange = function(e) {
                    var n = t.s,
                        a = t._round(+e.target.value);
                    e.target.value = a + "", n.value === ie && t.setState({
                        value: a
                    }), t._change(a), n.onChange && n.onChange(e)
                }, t._onMinusClick = function() {
                    t._setValue(t._value - t._step)
                }, t._onPlusClick = function() {
                    t._setValue(t._value + t._step)
                }, t
            }
            return a(t, e), t.prototype._change = function(e) {}, t.prototype._mounted = function() {
                Ot(this._input, Ja, this._onChange)
            }, t.prototype._render = function(e, t) {
                this._max = _e(e.max) ? 100 : +e.max, this._min = _e(e.min) ? 0 : +e.min, this._step = _e(e.step) ? 1 : +e.step;
                var n = e.disabled === ie ? t.disabled : fe(e.disabled),
                    a = e.defaultValue !== ie ? e.defaultValue : this._min || 0,
                    s = e.value !== ie ? e.value : t.value !== ie ? t.value : a;
                this._value = this._round(s), this._changed = this._value !== +s, this._disabled = n, this._disabledMinus = this._value === this._min || n, this._disabledPlus = this._value === this._max || n, this._cssClass = "mbsc-stepper mbsc-form-control-wrapper mbsc-font mbsc-" + (e.color || "color-none") + this._theme + this._rtl + this._hb + " mbsc-stepper-" + e.inputPosition + (n ? " mbsc-disabled" : "")
            }, t.prototype._updated = function() {
                this._input.value = this._value + "", this._changed && (Xt(this._input, Ja), this._changed = !1)
            }, t.prototype._destroy = function() {
                Yt(this._input, Ja, this._onChange)
            }, t.prototype._round = function(e) {
                var t = this._step,
                    n = Math.abs(t) < 1 ? (t + "").split(".")[1].length : 0;
                return +Math.min(this._max, Math.max(Math.round(e / t) * t, this._min)).toFixed(n)
            }, t.prototype._setValue = function(e) {
                var t = +this._input.value,
                    n = this._round(e);
                t !== n && (this._input.value = n + "", Xt(this._input, Ja))
            }, t.defaults = {
                inputPosition: "center"
            }, t._name = "Stepper", t
        }(Ua))),
        ql = Qr(Gl, Xl),
        Zl = {
            hasChildren: !0,
            parentClass: "mbsc-form-control-label",
            readProps: ["disabled"],
            renderToParent: !0,
            before: function(e, t) {
                t.defaultChecked = e.checked
            }
        },
        $l = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return a(t, e), t._selector = "[mbsc-switch]", t._renderOpt = Zl, t
        }(function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t._setInput = function(e) {
                    t._input = e
                }, t._setHandleCont = function(e) {
                    t._handleCont = e
                }, t._setHandle = function(e) {
                    t._handle = e
                }, t
            }
            return a(t, e), Object.defineProperty(t.prototype, "checked", {
                get: function() {
                    return this._checked
                },
                set: function(e) {
                    this._checked = e, this.setState({
                        checked: e
                    })
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype._template = function(e) {
                var t = this.props,
                    n = t.children;
                t.className, t.color, t.defaultChecked;
                var a = t.description,
                    r = t.hasChildren;
                t.inputStyle;
                var o = t.label;
                t.onChange, t.position, t.rtl, t.theme, t.themeVariant;
                var l = i(t, ["children", "className", "color", "defaultChecked", "description", "hasChildren", "inputStyle", "label", "onChange", "position", "rtl", "theme", "themeVariant"]);
                return Ln("label", {
                    className: this._cssClass,
                    ref: this._setEl,
                    onClick: this._onLabelClick
                }, Ln("input", s({
                    type: "checkbox",
                    className: "mbsc-form-control-input mbsc-reset",
                    onChange: be,
                    disabled: this._disabled,
                    checked: this._checked,
                    ref: this._setInput
                }, l)), Ln("span", {
                    className: this._handleContClass,
                    ref: this._setHandleCont
                }, Ln("span", {
                    className: this._handleClass,
                    ref: this._setHandle
                })), (o || r) && Ln("span", {
                    className: "mbsc-form-control-label" + this._theme + (this._disabled ? " mbsc-disabled" : "")
                }, o), a && Ln("span", {
                    className: "mbsc-description" + this._theme + (this._disabled ? " mbsc-disabled" : "")
                }, a), n)
            }, t
        }(function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t._onChange = function(e) {
                    var n = t.s,
                        a = e.target.checked;
                    e.stopPropagation(), n.checked === ie && t.setState({
                        checked: a
                    }), t._change(a), n.onChange && n.onChange(e)
                }, t._onLabelClick = function(e) {
                    e.preventDefault()
                }, t
            }
            return a(t, e), t.prototype._change = function(e) {}, t.prototype._setHandleLeft = function(e) {
                this._handle.style.left = e + "%"
            }, t.prototype._mounted = function() {
                var e, t, n, a, s, i = this;
                Ot(this._input, Xa, this._onChange), this._inputUnlisten = Ts(this._input, {
                    onBlur: function() {
                        i.setState({
                            hasFocus: !1
                        })
                    },
                    onFocus: function() {
                        i._disabled || i.setState({
                            hasFocus: !0
                        })
                    }
                }), this._unlisten = Ts(this._el, {
                    click: !1,
                    onEnd: function(e) {
                        if (!i._disabled && !s) {
                            if (a) {
                                var t = Math.abs(e.deltaX) < 3 && Math.abs(e.deltaY) < 3,
                                    r = +new Date - n > 300,
                                    o = t && !r ? !i._checked : i._handleLeft >= 50;
                                o !== i._checked && (i._input.click(), i._change(o)), a = !1
                            }
                            i.setState({
                                dragging: !1,
                                isActive: !1
                            })
                        }
                    },
                    onMove: function(n) {
                        var r = n.domEvent,
                            o = i.state.dragging;
                        if (!i._disabled && !s && a && e && (Math.abs(n.deltaX) > 5 && (o = !0, i.setState({
                                dragging: !0
                            })), o)) {
                            r.cancelable && r.preventDefault();
                            var l = (n.startX - t) / e * 100,
                                c = Math.max(Math.min(l, 100), 0) + n.deltaX / e * 100,
                                h = Math.max(Math.min(c, 100), 0);
                            i._handleLeft = h, i._setHandleLeft(h)
                        }!o && !s && Math.abs(n.deltaY) > 7 && r.type === hs && (s = !0, i.setState({
                            isActive: !1
                        }))
                    },
                    onStart: function(r) {
                        i._disabled || (s = !1, e = i._handleCont.clientWidth, t = jt(i._handleCont).left, n = +new Date, (r.domEvent.target === i._handleCont || i._handleCont.contains(r.domEvent.target)) && (a = !0), i.setState({
                            isActive: !0
                        }))
                    }
                }), this._setHandleLeft(this._handleLeft)
            }, t.prototype._render = function(e, t) {
                var n = e.disabled === ie ? t.disabled : fe(e.disabled),
                    a = "start" === e.position ? e.rtl ? "right" : "left" : e.rtl ? "left" : "right",
                    s = e.color !== ie ? " mbsc-switch-" + e.color : "";
                if (this._disabled = n, this._checked = e.checked !== ie ? fe(e.checked) : t.checked !== ie ? t.checked : fe(e.defaultChecked), this._cssClass = "mbsc-switch mbsc-form-control-wrapper mbsc-font " + this._className + this._theme + this._rtl + this._hb + " mbsc-switch-" + a + (n ? " mbsc-disabled" : ""), !t.dragging) {
                    var i = this._checked ? 100 : 0;
                    i !== this._handleLeft && this._handle && this._setHandleLeft(i), this._handleLeft = i
                }
                this._handleContClass = "mbsc-switch-track mbsc-switch-track-" + a + this._theme + s + (this._checked ? " mbsc-checked" : "") + (n ? " mbsc-disabled" : "") + (t.hasFocus ? " mbsc-focus" : "") + (t.isActive ? " mbsc-active" : ""), this._handleClass = "mbsc-switch-handle" + this._theme + s + (t.dragging ? "" : " mbsc-switch-handle-animate") + (this._checked ? " mbsc-checked" : "") + (this.state.isActive ? " mbsc-active" : "") + (n ? " mbsc-disabled" : "") + (this.state.hasFocus ? " mbsc-focus" : "")
            }, t.prototype._destroy = function() {
                this._unlisten(), this._inputUnlisten(), Yt(this._input, Xa, this._onChange)
            }, t.defaults = {
                position: "end"
            }, t._name = "Switch", t
        }(Ua))),
        Ql = Qr($l, Zl),
        ec = Qr(ni, {
            before: function(e, t) {
                var n, a, s = this;
                t.onOpen && (n = t.onOpen), t.onClosed && (a = t.onClosed);
                var i = Pt(e),
                    r = i && i.createComment("popup");
                r && e.parentNode && e.parentNode.insertBefore(r, e), e.style.display = "none", t.onOpen = function(t, a) {
                    e.style.display = "", t.target.querySelector(".mbsc-popup-content").appendChild(e), n && n.call(s, t, a)
                }, t.onClosed = function(t, n) {
                    e.style.display = "none", r && r.parentNode && r.parentNode.insertBefore(e, r), a && a.call(s, t, n)
                }
            }
        });
    Fn(Qo), Fn(nl), Fn(cl), Fn(hl), Fn(Go), Fn(dl), Fn(Fl), Fn(Al), Fn(jl), Fn(Kl), Fn(Gl), Fn($l), Fn(Ao), Fn(Wo), Fn(Uo), Fn(Ro), t.fw = "javascript", e.Button = Qo, e.CalendarNav = Ro, e.CalendarNext = Ao, e.CalendarPrev = Wo, e.CalendarToday = Uo, e.Checkbox = nl, e.Datepicker = qr, e.Draggable = Go, e.Dropdown = hl, e.Eventcalendar = zo, e.Input = cl, e.Page = Fl, e.Popup = ni, e.Radio = Al, e.Segmented = jl, e.SegmentedGroup = Kl, e.Select = ro, e.Stepper = Gl, e.Switch = $l, e.Textarea = dl, e.alert = function(e) {
        return Ml(Hl, e)
    }, e.autoDetect = D, e.button = el, e.calendarNav = Jo, e.calendarNext = Bo, e.calendarPrev = jo, e.calendarToday = Ko, e.checkbox = al, e.confirm = function(e) {
        return Ml(Ol, e)
    }, e.createCustomTheme = w, e.datepicker = ao, e.draggable = qo, e.dropdown = ml, e.enhance = zn, e.eventcalendar = Zo, e.formSwitch = Ql, e.formatDate = fa, e.getAutoTheme = S, e.getInst = function(e, t) {
        return t ? e.__mbscFormInst : e.__mbscInst
    }, e.getJson = to, e.globalChanges = C, e.hijriCalendar = ut, e.input = ul, e.jalaliCalendar = Pe, e.locale = _t, e.localeAr = q, e.localeBg = Z, e.localeCa = $, e.localeCs = Q, e.localeDa = ee, e.localeDe = te, e.localeEl = ne, e.localeEn = mt, e.localeEnGB = ae, e.localeEs = se, e.localeFa = Fe, e.localeFi = ze, e.localeFr = Ve, e.localeHe = Re, e.localeHi = Ae, e.localeHr = We, e.localeHu = Ue, e.localeIt = Be, e.localeJa = je, e.localeKo = Ke, e.localeLt = Je, e.localeNl = Xe, e.localeNo = Ge, e.localePl = qe, e.localePtBR = $e, e.localePtPT = Ze, e.localeRo = Qe, e.localeRu = et, e.localeRuUA = tt, e.localeSk = nt, e.localeSr = at, e.localeSv = st, e.localeTh = it, e.localeTr = rt, e.localeUa = ot, e.localeVi = lt, e.localeZh = ct, e.luxonTimezone = Vr, e.momentTimezone = Wr, e.options = b, e.page = zl, e.parseDate = ya, e.platform = k, e.popup = ec, e.prompt = function(e) {
        return Ml(Yl, e)
    }, e.radio = Wl, e.registerComponent = Fn, e.remote = t, e.segmented = Jl, e.select = oo, e.setOptions = function(e) {
        for (var t in e) e.hasOwnProperty(t) && (b[t] = e[t]);
        C.next(b)
    }, e.snackbar = function(e) {
        return Ml(Ll, e)
    }, e.stepper = ql, e.textarea = _l, e.themes = T, e.toast = function(e) {
        return Ml(Il, e)
    }, e.updateRecurringEvent = function(e, t, n, a, i) {
        var r = s({}, e),
            o = null,
            l = t && t.start,
            c = n && n.start,
            h = n && n.end,
            d = Wi(e.recurring);
        switch (i) {
            case "following":
                var u = void 0;
                if (a ? (a.recurring && (u = Wi(a.recurring)), delete(o = a).id) : c && l && (u = Ui(d, c, l), o = s({}, n)), d.until = na(pa(l)), d.count) {
                    var m = t && t.nr || 0;
                    u && (u.count = d.count - m), d.count = m
                }
                c && u && (u.from = c), o && u && (o.recurring = u), r.recurring = d;
                break;
            case "all":
                if (a) r = a;
                else if (n && c && h && l) {
                    var _ = e.start,
                        p = e.end,
                        v = e.allDay && !n.allDay;
                    da(_) || !_ && v ? r.start = fa("HH:mm", pa(c)) : _ && (r.start = c), da(p) || !p && v ? r.end = fa("HH:mm", pa(h)) : p && (r.end = h), r.recurring = Ui(d, c, l)
                }
                break;
            default:
                var f = e.recurringException,
                    g = he(f) ? f.slice() : f ? [f] : [];
                l && g.push(l), r.recurringException = g, o = a || n
        }
        return {
            updatedEvent: r,
            newEvent: o
        }
    }, e.util = x, Object.defineProperty(e, "__esModule", {
        value: !0
    })
}));