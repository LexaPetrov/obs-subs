const darkstyle = `
        html {
            background-color: #181a1b !important;
        }
        html, body, input, textarea, select, button {
            background-color: #181a1b;
        }
        html, body, input, textarea, select, button {
            border-color: #736b5e;
            color: #e8e6e3;
        }
        a {
            color: #3391ff;
        }
        table {
            border-color: #545b5e;
        }
        ::placeholder {
            color: #b2aba1;
        }
        input:-webkit-autofill,
        textarea:-webkit-autofill,
        select:-webkit-autofill {
            background-color: #555b00 !important;
            color: #e8e6e3 !important;
        }
        ::selection {
            background-color: #004daa !important;
            color: #e8e6e3 !important;
        }
        ::-moz-selection {
            background-color: #004daa !important;
            color: #e8e6e3 !important;
        }

        /* Invert Style */
        .jfk-bubble.gtx-bubble, embed[type="application/pdf"] {
            filter: invert(100%) hue-rotate(180deg) contrast(90%) !important;
        }

        /* Override Style */
        .vimvixen-hint {
            background-color: #7b5300 !important;
            border-color: #d8b013 !important;
            color: #f3e8c8 !important;
        }
        ::placeholder {
            opacity: 0.5 !important;
        }

        /* Variables Style */
        :root {
        --darkreader-neutral-background: #181a1b;
        --darkreader-neutral-text: #e8e6e3;
        --darkreader-selection-background: #004daa;
        --darkreader-selection-text: #e8e6e3;
        }

        /* Modified CSS */
        a,
        a:visited {
            color: rgb(73, 159, 255); 
        }
        input[type="text"] {
            outline-color: initial;
            border-color: rgb(0, 53, 190); 
        }
        input[type="number"] {
            outline-color: initial;
            border-color: rgb(0, 53, 190);
        }
        .go {
            background-image: initial;
            background-color: rgb(31, 111, 4);
            outline-color: initial;
            border-color: rgb(5, 129, 5);
        }
        .themeItem img {
            box-shadow: rgb(53, 57, 59) 0px 0px 3px; 
        }
        input[type="radio"]:checked + img {
            box-shadow: rgb(0, 49, 174) 0px 0px 0px 2px;
        }
        .link_theme1 {
            color: rgb(149, 66, 253);
            text-shadow: rgb(24, 26, 27) 1px 1px 0px;
        }
        .link_theme1::before {
            background-image: url("http://localhost:3000/static/media/youtube-2.e2106d66.png");
            background-color: initial;
        }
        .link_theme2::before {
            background-image: url("data:image/png;base64,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");
            background-color: initial;
        }
        .link_theme2 {
            color: rgb(255, 213, 26);
            text-shadow: rgb(153, 25, 0) 1px 1px 0px;
        }
        .link_theme3 {
            color: rgb(217, 214, 209);
            text-shadow: rgb(204, 0, 0) 1px 1px 0px;
        }
        .link_theme3::before {
            background-image: url("http://localhost:3000/static/media/youtube-3.43bdd206.png");
            background-color: initial;
        }
        .link_themene_creator {
            color: rgb(30, 193, 255);
            text-shadow: rgb(53, 57, 59) 1px 1px 0px;
        }
        .link_themene_creator::before {
            background-image: url("http://localhost:3000/static/media/ne_creator_logo.3331f5de.png");
            background-color: initial;
        }
        .flag_icon::before {
            background-image: url("data:image/png;base64,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");
        }
        .downloads__link__windows::before {
            background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAADPUExURQAAAACv/wC0/wCw/wCx/wCw/wCw/wCw/wCw/wCw/wCx/wCt/wCv/wCw/wCw/wCw/wCx/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wC//wCZ/wCw/wCw/wCx/wCq/wCw/wCv/wCw/wCv/wCw/wCv/wCw/wC//wCw/wCw/wCw/wCw/wC2/wCw/wCw/wCy/wCx/wCw/wCx/wCv/wCx/wCv/wCw/wCw/wCw/wCw/wCw/wCw/wCx/wCw/wCw/wCw/wCw/wCw/wCv/wCw/wCx/wCy/wCw/3LSyN0AAABEdFJOUwAzEUTd/f787vlVImbMd6qZu4j6+/fv1QQF8sQaBvawkW1NIGoIXkrrrAeXhE8n1IlzPkbk8+PL8aJo34rP8KeAYYxCbov0XQAAASpJREFUaN7tmdlSwkAQRYEsgyYBwyKyCaKiqGyCC6AoOP//TRBSJZQJBLDbUNY9L3lJ31M1nYfcmkgEAAB+EoseJ07sZ67k4qlcIKiTB9ZYriKokj+T1qv0Qfw2uZ5KWgW5nn0Fl8pwWsllZSC7Cs6M3pXzlNsitk9WzPlpnM9niAV5N3nlNKgEbnIu45khEDS79/ZIWzdDINg8A8FfCHQIggQaBKELBAShCzIQBAnSEIQuOIKAuoAAenyWnI5/47wR96eveuD+inQIIIAAggMQaBBAAAEE+wreKu0sq8BzzcD4++5elKg6dz+4MxSzaquCu4CUWzcXVaIdbObL7DTen9grlM+CWDratVFzPIK7BJaXlyS8LbO08BTYa2zpcfLw8XKLQgrA/2IG/Fxnu0ZD+twAAAAASUVORK5CYII=");
        }
        .downloads__link__macos::before {
            background-image: url("data:image/png;base64,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");
        }
        .downloads__link__linux::before {
            background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAALiUExURQAAAACw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/wCw/6AUfDIAAAD1dFJOUwD8HwsB7QRuAlwD/hQh+iP2CbUW+bb73v1M+HhmEbQoODM/G9vrkxAwvoHu8AeeDTHhm/RFeZwgh3BHcizNQaClBQwTxOpnRNaD5SZK0nFr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");
        }
        .footer__label1::after {
            background-image: url("data:image/png;base64,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");
        }
        .toggle {
            border-color: rgb(0, 53, 190);
            background-image: initial;
            background-color: rgb(47, 51, 53);
        }
        .active-bg {
            background-image: initial;
            background-color: rgb(0, 49, 174);
        }
        .indicator {
            background-image: initial;
            background-color: rgb(24, 26, 27);
        }
        .checkmark {
            background-color: rgb(34, 36, 38);
        }
        .container:hover input ~ .checkmark {
            background-color: rgb(53, 57, 59);
        }
        .container input:checked ~ .checkmark {
            background-color: rgb(0, 49, 174);
        }
        .container .checkmark::after {
            background-image: initial;
            background-color: rgb(24, 26, 27);
        }
        ._3emE9--dark-theme .-S-tR--ff-downloader {
            background-image: initial;
            background-color: rgba(23, 24, 25, 0.93);
            border-color: rgba(113, 105, 93, 0.54);
            box-shadow: rgba(23, 24, 25, 0.55) 0px 4px 7px;
            color: rgb(232, 230, 227);
        }
        ._3emE9--dark-theme .-S-tR--ff-downloader ._6_Mtt--header ._2VdJW--minimize-btn {
            background-image: initial;
            background-color: rgb(49, 60, 66);
        }
        ._3emE9--dark-theme .-S-tR--ff-downloader ._6_Mtt--header ._2VdJW--minimize-btn:hover {
            background-image: initial;
            background-color: rgb(15, 16, 17);
        }
        ._3emE9--dark-theme .-S-tR--ff-downloader ._10vpG--footer {
            background-image: initial;
            background-color: rgba(23, 24, 25, 0.93);
        }
        ._2mDEx--white-theme .-S-tR--ff-downloader {
            background-image: initial;
            background-color: rgb(24, 26, 27);
            border-color: rgba(113, 105, 93, 0.54);
            box-shadow: rgba(23, 24, 25, 0.55) 0px 4px 7px;
            color: rgb(149, 181, 211);
        }
        ._2mDEx--white-theme .-S-tR--ff-downloader ._2dFLA--container ._2bWNS--notice {
            border-color: initial;
            color: rgba(232, 230, 227, 0.88);
        }
        ._2mDEx--white-theme .-S-tR--ff-downloader ._10vpG--footer {
            background-image: initial;
            background-color: rgb(24, 26, 27);
        }
        .-S-tR--ff-downloader {
            background-image: initial;
            background-color: rgba(23, 24, 25, 0.93);
            color: rgb(232, 230, 227);
            border-color: rgba(113, 105, 93, 0.54);
            box-shadow: rgba(23, 24, 25, 0.55) 0px 4px 7px;
        }
        .-S-tR--ff-downloader ._6_Mtt--header ._2VdJW--minimize-btn {
            background-image: initial;
            background-color: rgb(41, 30, 30);
        }
        .-S-tR--ff-downloader ._6_Mtt--header ._2VdJW--minimize-btn:hover {
            background-image: initial;
            background-color: rgb(42, 45, 47);
        }
        .-S-tR--ff-downloader ._13XQ2--error {
            color: rgb(255, 26, 26);
        }
        .-S-tR--ff-downloader ._10vpG--footer ._2V73d--loader {
            border-color: rgb(10, 1, 131) rgb(48, 52, 54) rgb(48, 52, 54);
        }
        .-S-tR--ff-downloader ._10vpG--footer ._24wjw--loading-bar {
            background-image: initial;
            background-color: rgb(34, 45, 49);
        }
        .-S-tR--ff-downloader ._10vpG--footer ._24wjw--loading-bar ._1FVu9--progress-bar {
            background-image: initial;
            background-color: rgb(113, 147, 49);
        }
`

export default darkstyle