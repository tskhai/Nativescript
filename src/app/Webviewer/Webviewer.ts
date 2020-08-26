import { Component, OnInit } from "@angular/core";
import { EventData } from "tns-core-modules/ui/page";

import { WebView } from "tns-core-modules/ui/web-view";
import { WebViewUtils } from "nativescript-webview-utils";

@Component({
    selector: "Test-Webviewer",
    moduleId: module.id,
    templateUrl: "./Webviewer.html",
    styleUrls: ["./Webviewer.css"],
})
export class WebviewerComponent implements OnInit {
    public navigateUrl: string = null;

    ngOnInit(): void {
        this.navigateUrl = "https://devapp02.publicmutualbhd.local/WebviewTest1";
    }

    onWebViewLoaded(args: EventData): any {
        alert("Webview loaded");

        const webView: WebView = <WebView>args.object;

        const headers: Map<string, string> = new Map();
        headers.set("User-Agent", "My Awesome User-Agent!");
        headers.set("Custom-Header", "Another header");

        WebViewUtils.addHeaders(webView, headers);

    }
}
