// This code was generated by the angular-custom-elements-schematic.  Any changes will be overwritten next time it runs.
import { Component, ElementRef, ChangeDetectionStrategy, ChangeDetectorRef, NgZone, Input } from '@angular/core';
import { AppBarProfileButtonComponent as AppBarProfileButtonComponentCustomElement, defineAppBarProfileButtonComponent } from '@tylertech/forge';

/** The web component class behind the `<forge-app-bar-profile-button>` custom element. */
@Component({
  selector: 'forge-app-bar-profile-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class AppBarProfileButtonComponent {


	@Input()
	public set fullName(value: AppBarProfileButtonComponentCustomElement['fullName']) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.fullName = value;
		});
	}

	public get fullName(): AppBarProfileButtonComponentCustomElement['fullName'] {
		return this.elementRef.nativeElement.fullName;
	}


	@Input()
	public set email(value: AppBarProfileButtonComponentCustomElement['email']) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.email = value;
		});
	}

	public get email(): AppBarProfileButtonComponentCustomElement['email'] {
		return this.elementRef.nativeElement.email;
	}


	@Input()
	public set avatarImageUrl(value: AppBarProfileButtonComponentCustomElement['avatarImageUrl']) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.avatarImageUrl = value;
		});
	}

	public get avatarImageUrl(): AppBarProfileButtonComponentCustomElement['avatarImageUrl'] {
		return this.elementRef.nativeElement.avatarImageUrl;
	}


	@Input()
	public set avatarLetterCount(value: AppBarProfileButtonComponentCustomElement['avatarLetterCount'] | string) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.avatarLetterCount = +value;
		});
	}

	public get avatarLetterCount(): AppBarProfileButtonComponentCustomElement['avatarLetterCount'] {
		return this.elementRef.nativeElement.avatarLetterCount;
	}


	@Input()
	public set avatarText(value: AppBarProfileButtonComponentCustomElement['avatarText']) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.avatarText = value;
		});
	}

	public get avatarText(): AppBarProfileButtonComponentCustomElement['avatarText'] {
		return this.elementRef.nativeElement.avatarText;
	}


	@Input()
	public set signOutButton(value: AppBarProfileButtonComponentCustomElement['signOutButton'] | string) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.signOutButton = value != null && `${value}` !== 'false';
		});
	}

	public get signOutButton(): AppBarProfileButtonComponentCustomElement['signOutButton'] {
		return this.elementRef.nativeElement.signOutButton;
	}


	@Input()
	public set profileButton(value: AppBarProfileButtonComponentCustomElement['profileButton'] | string) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.profileButton = value != null && `${value}` !== 'false';
		});
	}

	public get profileButton(): AppBarProfileButtonComponentCustomElement['profileButton'] {
		return this.elementRef.nativeElement.profileButton;
	}


	@Input()
	public set signOutButtonText(value: AppBarProfileButtonComponentCustomElement['signOutButtonText']) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.signOutButtonText = value;
		});
	}

	public get signOutButtonText(): AppBarProfileButtonComponentCustomElement['signOutButtonText'] {
		return this.elementRef.nativeElement.signOutButtonText;
	}


	@Input()
	public set profileButtonText(value: AppBarProfileButtonComponentCustomElement['profileButtonText']) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.profileButtonText = value;
		});
	}

	public get profileButtonText(): AppBarProfileButtonComponentCustomElement['profileButtonText'] {
		return this.elementRef.nativeElement.profileButtonText;
	}


	@Input()
	public set open(value: AppBarProfileButtonComponentCustomElement['open'] | string) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.open = value != null && `${value}` !== 'false';
		});
	}

	public get open(): AppBarProfileButtonComponentCustomElement['open'] {
		return this.elementRef.nativeElement.open;
	}

	/** Sets the profile card builder callback that will be used to add extra content to the profile card. */
	@Input()
	public set profileCardBuilder(value: AppBarProfileButtonComponentCustomElement['profileCardBuilder']) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.profileCardBuilder = value;
		});
	}

	public get profileCardBuilder(): AppBarProfileButtonComponentCustomElement['profileCardBuilder'] {
		return this.elementRef.nativeElement.profileCardBuilder;
	}


	public initializedCallback(...args: Parameters<AppBarProfileButtonComponentCustomElement['initializedCallback']>): ReturnType<AppBarProfileButtonComponentCustomElement['initializedCallback']> {
		return this.zone.runOutsideAngular(() => this.elementRef.nativeElement.initializedCallback(...args));
	}

	constructor(
		changeDetectorRef: ChangeDetectorRef,
		protected elementRef: ElementRef<AppBarProfileButtonComponentCustomElement>,
		protected zone: NgZone
	) {
		defineAppBarProfileButtonComponent();
		changeDetectorRef.detach();
	}
}
