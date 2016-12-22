(function (template) {
    'use strict';

    class ByuTopBar extends HTMLElement {

        constructor() {
            super();
            let shadowRoot = this.attachShadow({mode: 'open'});
            shadowRoot.innerHTML = template;
        }

    }

    window.customElements.define('byu-top-bar', ByuTopBar);
    window.ByuTopBar = ByuTopBar;

})(`<style>
    /*Variables*/
.byu-header {
  font-family: "Vitesee Book";
  font-size: 18px; }
  .byu-header > div > * {
    margin-right: 16px; }
  .byu-header button {
    background-color: #767676;
    color: #ffffff;
    border: none;
    display: inline-block;
    cursor: pointer; }
  .byu-header .byu-header-primary {
    background-color: #002e5d;
    color: #ffffff;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    padding-left: 16px;
    flex: 1;
    height: 55px; }
    .byu-header .byu-header-primary .byu-header-title {
      white-space: nowrap;
      overflow: hidden;
      -ms-text-overflow: ellipsis;
      text-overflow: ellipsis;
      flex: 1;
      font-family: "Vitesse A", "Vitesse B", Georgia, serif;
      font-size: 22px; }
  .byu-header .byu-header-user button {
    background-color: transparent;
    position: relative; }
    .byu-header .byu-header-user button .icon {
      width: 20px;
      height: 20px;
      font-size: 20px;
      vertical-align: middle; }
    .byu-header .byu-header-user button .label {
      font-family: "Gotham A", "Gotham B", Helvetica, sans-serif;
      font-weight: 400;
      font-size: 13px;
      text-transform: uppercase; }
  .byu-header .byu-header-search #search-input {
    font-family: "Gotham A", "Gotham B", Helvetica, sans-serif;
    font-weight: 400;
    font-size: 13px;
    color: #002e5d; }
    .byu-header .byu-header-search #search-input::-webkit-input-placeholder {
      color: #c5c5c5;
      opacity: 1; }
    .byu-header .byu-header-search #search-input::-ms-input-placeholder {
      color: #c5c5c5;
      opacity: 1; }
    .byu-header .byu-header-search #search-input::-moz-placeholder {
      color: #c5c5c5;
      opacity: 1; }
  .byu-header .byu-logo {
    background-image: url(data:image/jpeg;base64,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IDxkYzp0aXRsZT4KICAgPHJkZjpBbHQ+CiAgICA8cmRmOmxpIHhtbDpsYW5nPSd4LWRlZmF1bHQnPngtZGVmYXVsdDwvcmRmOmxpPgogICA8L3JkZjpBbHQ+CiAgPC9kYzp0aXRsZT4KIDwvcmRmOkRlc2NyaXB0aW9uPgoKIDxyZGY6RGVzY3JpcHRpb24geG1sbnM6eG1wPSdodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvJz4KICA8eG1wOk1ldGFkYXRhRGF0ZT4yMDE2LTAzLTAzVDEyOjU3OjIwLTA3OjAwPC94bXA6TWV0YWRhdGFEYXRlPgogIDx4bXA6TW9kaWZ5RGF0ZT4yMDE2LTAzLTAzVDEyOjU3OjIwLTA3OjAwPC94bXA6TW9kaWZ5RGF0ZT4KICA8eG1wOkNyZWF0ZURhdGU+MjAxNS0wMi0xMlQxNToyOToxMy0wNzowMDwveG1wOkNyZWF0ZURhdGU+CiAgPHhtcDpDcmVhdG9yVG9vbD5BZG9iZSBQaG90b3Nob3AgQ0MgMjAxNCAoTWFjaW50b3NoKTwveG1wOkNyZWF0b3JUb29sPgogPC9yZGY6RGVzY3JpcHRpb24+CgogPHJkZjpEZXNjcmlwdGlvbiB4bWxuczp4bXBNTT0naHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyc+CiAgPHhtcE1NOkluc3RhbmNlSUQ+eG1wLmlpZDphNzE0OTU2Yi1hNDJkLTRmMzMtODNmNC03YjAwOTQwMDEzODU8L3htcE1NOkluc3RhbmNlSUQ+CiAgPHhtcE1NOkRvY3VtZW50SUQgcmRmOnJlc291cmNlPSd4bXAuZGlkOjUxNmJmZmQ2LTljMjctNGJjOC04MDExLTk1N2EzM2MwMWZhZicgLz4KICA8eG1wTU06T3JpZ2luYWxEb2N1bWVudElEPnV1aWQ6NUQyMDg5MjQ5M0JGREIxMTkxNEE4NTkwRDMxNTA4Qzg8L3htcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD4KICA8eG1wTU06UmVuZGl0aW9uQ2xhc3M+cHJvb2Y6cGRmPC94bXBNTTpSZW5kaXRpb25DbGFzcz4KICA8eG1wTU06RGVyaXZlZEZyb20gcmRmOnBhcnNlVHlwZT0nUmVzb3VyY2UnPgogIDwveG1wTU06RGVyaXZlZEZyb20+CiAgPHhtcE1NOkhpc3Rvcnk+CiAgIDxyZGY6U2VxPgogICA8L3JkZjpTZXE+CiAgPC94bXBNTTpIaXN0b3J5PgogPC9yZGY6RGVzY3JpcHRpb24+CgogPHJkZjpEZXNjcmlwdGlvbiB4bWxuczppbGx1c3RyYXRvcj0naHR0cDovL25zLmFkb2JlLmNvbS9pbGx1c3RyYXRvci8xLjAvJz4KICA8aWxsdXN0cmF0b3I6U3RhcnR1cFByb2ZpbGU+UHJpbnQ8L2lsbHVzdHJhdG9yOlN0YXJ0dXBQcm9maWxlPgogPC9yZGY6RGVzY3JpcHRpb24+CgogPHJkZjpEZXNjcmlwdGlvbiB4bWxuczp4bXBUUGc9J2h0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC90L3BnLyc+CiAgPHhtcFRQZzpIYXNWaXNpYmxlT3ZlcnByaW50PkZhbHNlPC94bXBUUGc6SGFzVmlzaWJsZU92ZXJwcmludD4KICA8eG1wVFBnOkhhc1Zpc2libGVUcmFuc3BhcmVuY3k+RmFsc2U8L3htcFRQZzpIYXNWaXNpYmxlVHJhbnNwYXJlbmN5PgogIDx4bXBUUGc6TlBhZ2VzPjE8L3htcFRQZzpOUGFnZXM+CiAgPHhtcFRQZzpNYXhQYWdlU2l6ZSByZGY6cGFyc2VUeXBlPSdSZXNvdXJjZSc+CiAgPC94bXBUUGc6TWF4UGFnZVNpemU+CiAgPHhtcFRQZzpQbGF0ZU5hbWVzPgogICA8cmRmOkJhZz4KICAgIDxyZGY6bGk+UEFOVE9ORSA2NDggQzwvcmRmOmxpPgogICA8L3JkZjpCYWc+CiAgPC94bXBUUGc6UGxhdGVOYW1lcz4KIDwvcmRmOkRlc2NyaXB0aW9uPgoKIDxyZGY6RGVzY3JpcHRpb24geG1sbnM6eG1wRz0naHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL2cvJz4KIDwvcmRmOkRlc2NyaXB0aW9uPgoKIDxyZGY6RGVzY3JpcHRpb24geG1sbnM6cGRmPSdodHRwOi8vbnMuYWRvYmUuY29tL3BkZi8xLjMvJz4KICA8cGRmOlByb2R1Y2VyPkFkb2JlIFBERiBsaWJyYXJ5IDExLjAwPC9wZGY6UHJvZHVjZXI+CiA8L3JkZjpEZXNjcmlwdGlvbj4KCiA8cmRmOkRlc2NyaXB0aW9uIHhtbG5zOnBob3Rvc2hvcD0naHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyc+CiAgPHBob3Rvc2hvcDpMZWdhY3lJUFRDRGlnZXN0PjZEMzBEQzAyMDkxNUFCN0Q1RUI5RDNBQkI5M0M3NTY4PC9waG90b3Nob3A6TGVnYWN5SVBUQ0RpZ2VzdD4KICA8cGhvdG9zaG9wOkNvbG9yTW9kZT4zPC9waG90b3Nob3A6Q29sb3JNb2RlPgogIDxwaG90b3Nob3A6SUNDUHJvZmlsZT5zUkdCIElFQzYxOTY2LTIuMTwvcGhvdG9zaG9wOklDQ1Byb2ZpbGU+CiA8L3JkZjpEZXNjcmlwdGlvbj4KCiA8cmRmOkRlc2NyaXB0aW9uIHhtbG5zOmV4aWY9J2h0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvJz4KICA8ZXhpZjpJbWFnZVdpZHRoPjMwMDA8L2V4aWY6SW1hZ2VXaWR0aD4KICA8ZXhpZjpJbWFnZUxlbmd0aD4xMjAwPC9leGlmOkltYWdlTGVuZ3RoPgogIDxleGlmOkJpdHNQZXJTYW1wbGU+OCwgOCwgODwvZXhpZjpCaXRzUGVyU2FtcGxlPgogIDxleGlmOlBob3RvbWV0cmljSW50ZXJwcmV0YXRpb24+UkdCPC9leGlmOlBob3RvbWV0cmljSW50ZXJwcmV0YXRpb24+CiAgPGV4aWY6T3JpZW50YXRpb24+VG9wLWxlZnQ8L2V4aWY6T3JpZW50YXRpb24+CiAgPGV4aWY6U2FtcGxlc1BlclBpeGVsPjM8L2V4aWY6U2FtcGxlc1BlclBpeGVsPgogIDxleGlmOlhSZXNvbHV0aW9uPjMwMC4wMDAwPC9leGlmOlhSZXNvbHV0aW9uPgogIDxleGlmOllSZXNvbHV0aW9uPjMwMC4wMDAwPC9leGlmOllSZXNvbHV0aW9uPgogIDxleGlmOlJlc29sdXRpb25Vbml0PkluY2g8L2V4aWY6UmVzb2x1dGlvblVuaXQ+CiAgPGV4aWY6U29mdHdhcmU+QWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCk8L2V4aWY6U29mdHdhcmU+CiAgPGV4aWY6RGF0ZVRpbWU+MjAxNjowMzowMyAxMjo1NzoyMDwvZXhpZjpEYXRlVGltZT4KICA8ZXhpZjpDb21wcmVzc2lvbj5KUEVHIGNvbXByZXNzaW9uPC9leGlmOkNvbXByZXNzaW9uPgogIDxleGlmOlhSZXNvbHV0aW9uPjcyPC9leGlmOlhSZXNvbHV0aW9uPgogIDxleGlmOllSZXNvbHV0aW9uPjcyPC9leGlmOllSZXNvbHV0aW9uPgogIDxleGlmOlJlc29sdXRpb25Vbml0PkluY2g8L2V4aWY6UmVzb2x1dGlvblVuaXQ+CiAgPGV4aWY6RXhpZlZlcnNpb24+RXhpZiBWZXJzaW9uIDIuMjE8L2V4aWY6RXhpZlZlcnNpb24+CiAgPGV4aWY6Rmxhc2hQaXhWZXJzaW9uPkZsYXNoUGl4IFZlcnNpb24gMS4wPC9leGlmOkZsYXNoUGl4VmVyc2lvbj4KICA8ZXhpZjpDb2xvclNwYWNlPnNSR0I8L2V4aWY6Q29sb3JTcGFjZT4KICA8ZXhpZjpQaXhlbFhEaW1lbnNpb24+MzAwMDwvZXhpZjpQaXhlbFhEaW1lbnNpb24+CiAgPGV4aWY6UGl4ZWxZRGltZW5zaW9uPjEyMDA8L2V4aWY6UGl4ZWxZRGltZW5zaW9uPgogPC9yZGY6RGVzY3JpcHRpb24+Cgo8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSdyJz8+Cv/iDFhJQ0NfUFJPRklMRQABAQAADEhMaW5vAhAAAG1udHJSR0IgWFlaIAfOAAIACQAGADEAAGFjc3BNU0ZUAAAAAElFQyBzUkdCAAAAAAAAAAAAAAABAAD21gABAAAAANMtSFAgIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEWNwcnQAAAFQAAAAM2Rlc2MAAAGEAAAAbHd0cHQAAAHwAAAAFGJrcHQAAAIEAAAAFHJYWVoAAAIYAAAAFGdYWVoAAAIsAAAAFGJYWVoAAAJAAAAAFGRtbmQAAAJUAAAAcGRtZGQAAALEAAAAiHZ1ZWQAAANMAAAAhnZpZXcAAAPUAAAAJGx1bWkAAAP4AAAAFG1lYXMAAAQMAAAAJHRlY2gAAAQwAAAA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);
    background-repeat: no-repeat;
    height: 48px;
    width: 92px; }

/* FULL SIZE */
@media (min-width: 1024px) {
  .byu-header {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center; }
    .byu-header.no-nav {
      height: 48px; }
    .byu-header .byu-header-secondary {
      background-color: #002e5d;
      color: #ffffff;
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: space-between;
      align-items: center;
      height: 55px; }
      .byu-header .byu-header-secondary .byu-header-search {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-between;
        align-items: center; }
        .byu-header .byu-header-secondary .byu-header-search input {
          border: 1px solid #002e5d;
          border-right: none;
          height: 20px;
          padding: 4px 6px;
          flex: 1;
          width: 217px; }
        .byu-header .byu-header-secondary .byu-header-search button {
          height: 28px;
          width: 30px;
          text-align: center; }
      .byu-header .byu-header-secondary .byu-header-menu-button {
        display: none; } }

/* TABLET SIZE */
@media (max-width: 1023px) {
  .byu-header button {
    height: 100%;
    width: 140px; }
  .byu-header .byu-header-secondary {
    background-color: #767676;
    color: #ffffff;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center; }
    .byu-header .byu-header-secondary > div {
      margin-right: 0;
      height: 32px; }
    .byu-header .byu-header-secondary button {
      border-left: 1px solid #ffffff; }
    .byu-header .byu-header-secondary .byu-header-search {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: space-between;
      align-items: center;
      flex: 1; }
      .byu-header .byu-header-secondary .byu-header-search input {
        flex: 1;
        height: 26px;
        padding-left: 16px; }
      .byu-header .byu-header-secondary .byu-header-search button {
        border-left: none; }
    .byu-header .byu-header-secondary .byu-header-user .label {
      display: none; }
    .byu-header .byu-header-secondary .byu-header-user .icon {
      top: 50%;
      left: 50%;
      margin-top: -13px;
      margin-left: -13px; } }

/* PHONE SIZE */
@media (max-width: 639px) {
  .byu-header button {
    width: 100%; }
  .byu-header .byu-header-secondary > * {
    flex: 1; }
  .byu-header .byu-header-secondary .byu-header-search {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    flex: 1; }
  .byu-header .byu-header-secondary .byu-header-search input {
    display: none; } }

</style>

<link rel="stylesheet" href="../../bower_components/font-awesome/css/font-awesome.min.css">

<div id="header" class="byu-header">

    <div class="byu-header-primary">
        <div class="byu-logo"></div>
        <div class="byu-header-title">
            <slot name="title"></slot>
        </div>
    </div>

    <div id="secondary" class="byu-header-secondary">

        <div class="byu-header-user">
            <button type="button">
                <span class="icon">
                    <span class="fa fa-user-circle-o"></span>
                </span>
                <span class="label">Sign in</span>
           </button>
        </div>

        <div class="byu-header-search">
            <label for="search-input"></label>
            <input type="text" id="search-input" placeholder="search">
            <button type="button" aria-label="Run search">
                <span class="fa fa-search"></span>
            </button>
        </div>

        <div id="menuTemplate" class="byu-header-menu-button">
            <button type="button" aria-label="Open or close menu" onclick="this.parentElement.parentElement.parentElement.querySelector('#navbarMenu').assignedNodes()[0].collapsed = !this.parentElement.parentElement.parentElement.querySelector('#navbarMenu').assignedNodes()[0].collapsed"
                <span class="fa fa-bars"></span>
            </button>
        </div>

    </div>

    <slot id="navbarMenu" name="nav">

    </slot>


</div>`);