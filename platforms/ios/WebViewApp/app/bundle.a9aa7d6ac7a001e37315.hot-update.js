webpackHotUpdate("bundle",{

/***/ "./app/Webviewer/Webviewer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebviewerComponent", function() { return WebviewerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");

var WebviewerComponent = /** @class */ (function () {
    function WebviewerComponent() {
        this.navigateUrl = null;
    }
    WebviewerComponent.prototype.ngOnInit = function () {
        this.navigateUrl = "https://devapp02.publicmutualbhd.local/WebviewTest1";
    };
    WebviewerComponent.prototype.onWebViewLoaded = function (args) {
        alert("Webview loaded");
    };
    WebviewerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "Test-Webviewer",
            template: __webpack_require__("./app/Webviewer/Webviewer.html"),
            styles: [__webpack_require__("./app/Webviewer/Webviewer.css")]
        })
    ], WebviewerComponent);
    return WebviewerComponent;
}());



/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvV2Vidmlld2VyL1dlYnZpZXdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBa0Q7QUFTbEQ7SUFOQTtRQU9XLGdCQUFXLEdBQVcsSUFBSSxDQUFDO0lBU3RDLENBQUM7SUFQRyxxQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLFdBQVcsR0FBRyxxREFBcUQsQ0FBQztJQUM3RSxDQUFDO0lBRUQsNENBQWUsR0FBZixVQUFnQixJQUFlO1FBQzNCLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFUUSxrQkFBa0I7UUFOOUIsK0RBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxnQkFBZ0I7WUFFMUIsK0RBQStCOztTQUVsQyxDQUFDO09BQ1csa0JBQWtCLENBVTlCO0lBQUQseUJBQUM7Q0FBQTtBQVY4QiIsImZpbGUiOiJidW5kbGUuYTlhYTdkNmFjN2EwMDFlMzczMTUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEV2ZW50RGF0YSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiVGVzdC1XZWJ2aWV3ZXJcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vV2Vidmlld2VyLmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcIi4vV2Vidmlld2VyLmNzc1wiXSxcbn0pXG5leHBvcnQgY2xhc3MgV2Vidmlld2VyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBwdWJsaWMgbmF2aWdhdGVVcmw6IHN0cmluZyA9IG51bGw7XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5uYXZpZ2F0ZVVybCA9IFwiaHR0cHM6Ly9kZXZhcHAwMi5wdWJsaWNtdXR1YWxiaGQubG9jYWwvV2Vidmlld1Rlc3QxXCI7XG4gICAgfVxuXG4gICAgb25XZWJWaWV3TG9hZGVkKGFyZ3M6IEV2ZW50RGF0YSk6IGFueSB7XG4gICAgICAgIGFsZXJ0KFwiV2VidmlldyBsb2FkZWRcIik7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==