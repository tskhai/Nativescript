import { Component, OnInit } from "@angular/core";
import { EventData } from "tns-core-modules/ui/page";

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
    }
}
