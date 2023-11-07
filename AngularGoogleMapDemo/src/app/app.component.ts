import { Component, ElementRef, NgModuleRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { AgmMap, MapsAPILoader, AgmInfoWindow, AgmMarker, MarkerManager } from '@agm/core';
import { CountryStateCityService } from './services/country-state-city.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  //@ViewChild(AgmMap, { static: true }) public agmMap: AgmMap;
  @ViewChild('search')
  public searchElementRef: ElementRef<HTMLInputElement> = {} as ElementRef;

  title = 'My first AGM project';
  lat = 0;
  long = 0;
  bounds?: any;
  geoLoc: any;
  markerLabel: google.maps.MarkerLabel = {} as google.maps.MarkerLabel;
  markerTitle = "Title of Marker";
  //markerAnimation: google.maps.Animation.BOUNCE = google.maps.Animation.BOUNCE;
  markerIconURL: google.maps.SymbolPath.CIRCLE = {} as google.maps.SymbolPath.CIRCLE;
  selectedMarker = { "lat": null, "long": null };

  @ViewChild(AgmMap, { static: false })
  agmMap: AgmMap = {} as AgmMap;

  @ViewChild(AgmInfoWindow, { static: false })
  agmInfoWindow: AgmInfoWindow = {} as AgmInfoWindow;

  geoCoder: any;
  backgroundColor: string = 'green';
  disableDefaultUI = false;
  disableDoubleClickZoom = false;
  fitBounds = false;
  mapTypeId: keyof typeof google.maps.MapTypeId = 'SATELLITE';
  gestureHandling: google.maps.GestureHandlingOptions = 'greedy';
  scrollwheel = true;
  showDefaultInfoWindow = false;
  tilt = 45;
  usePanning = false;
  restriction: google.maps.MapRestriction = {} as google.maps.MapRestriction;


  zoom = 12
  center: google.maps.LatLngLiteral = { lat: 0.0, lng: 0.0 };
  options: google.maps.MapOptions = {
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    mapTypeId: 'hybrid',
    maxZoom: 15,
    minZoom: 8,
  }
  markers: any[] = [];
  infoContent = '';

  constructor(private mapsAPILoader: MapsAPILoader,
    private cscSvc: CountryStateCityService, private ngZone: NgZone) {
    // this.mapsAPILoader.load().then(() => {
    //   this.bounds = new google.maps.LatLngBounds(
    //     new google.maps.LatLng(51.130739, -0.868052), // SW
    //     new google.maps.LatLng(51.891257, 0.559417) // NE
    //   );
    //   console.log(this.bounds);
    // });
  }



  ngOnInit3(): void {

    const _loder = this.mapsAPILoader.load().then(() => {
      this.setCurrentLocation();
      console.log(this.mapTypeId)
    });

  }

  // Get Current Location Coordinates
  private setCurrentLocation() {
    if (navigator.geolocation) {
      this.geoLoc = navigator.geolocation;
      console.log(this.geoLoc);
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position);
        this.lat = position.coords.latitude;
        this.long = position.coords.longitude;
        this.zoom = 10;
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        }
      },
        (positionErrorCallbackData) => {
          console.log(positionErrorCallbackData.message);
        }
      );
    }
  }


  logCenter() {
    console.log(JSON.stringify(this.agmMap));
  }

  addMarker() {
    this.markers.push({
      position: {
        lat: this.center.lat + ((Math.random() - 0.5) * 2) / 10,
        lng: this.center.lng + ((Math.random() - 0.5) * 2) / 10,
      },
      label: {
        color: 'red',
        text: 'Marker label ' + (this.markers.length + 1),
      },
      title: 'Marker title ' + (this.markers.length + 1),
      info: 'Marker info ' + (this.markers.length + 1),
      options: {
        animation: google.maps.Animation.BOUNCE,
      },
    })
  }

  dragMarker(event: google.maps.MouseEvent) {
    alert("Marker Draggin is in progress..");
  }

  markerClick(event: AgmMarker) {
    alert(`Label is: ${event.label}, iconURL is: ${event.iconUrl}, lat: ${event.latitude},
     lng: ${event.longitude}, anitmation: ${event.animation}`);
  }

  mrkrRightClick() {
    alert("Marker Right Clicked...");
  }

  mouseOut(event: google.maps.MouseEvent) {
    alert(`Mouse Out from marker... Lat-Lng is: ${event.latLng}`);
  }

  mouseOver(event: google.maps.MouseEvent) {
    alert(`Mouse over on marker... Lat-Lng is: ${event.latLng}`);
  }

  openInfo(marker: HTMLElement) {
    //this.infoContent = content
    this.agmInfoWindow.open()
  }

  zoomIn() {
    if (this.zoom < this.options.maxZoom!)
      this.zoom++;
  }

  zoomOut() {
    if (this.zoom > this.options.minZoom!)
      this.zoom--;
  }
  boundsChange(event: google.maps.LatLngBounds) {
    alert(`Bound changes ${event.getCenter()}`)
  }

  centerChange(event: google.maps.LatLngLiteral) {
    alert(`Map center changes ${event.lat} and ${event.lng}`)
  }

  idle() {
    alert(`Map is in Idle state`)
  }


  ngOnInit2() {
    this.cscSvc.getCity().subscribe((data) => {
      console.log(data);
    })
  }

  ngOnInit() {
    //load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      this.setCurrentLocation();
      this.geoCoder = new google.maps.Geocoder;


      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement);
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();

          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          //set latitude, longitude and zoom
          this.lat = place.geometry.location.lat();
          this.long = place.geometry.location.lng();
          console.log(place.geometry.location.lat);
          this.zoom = 12;
        });
      });
    });
  }
  public mapReadyHandler(map: google.maps.Map): void {
    let _map: google.maps.Map = map;
    let mapClickListener: google.maps.MapsEventListener;
    mapClickListener = _map.addListener('click', (e: google.maps.MouseEvent) => {
      this.ngZone.run(() => {
        // Here we can get correct event
        console.log(e.latLng.lat(), e.latLng.lng());
      });
    });
  }

  public mapClicked(map: google.maps.Map): void {
    map.addListener("click", () => {
      alert("mapClickedEvent called");
    });
  }

  addAnimation(): void {
    google.maps.event.addListener(AgmMarker, 'onmouseover', () => {
      // var that = this;
      // this.setAnimation(google.maps.Animation.BOUNCE);
      // window.setTimeout(function () { that.setAnimation(null); }, 10);
      alert("addAnimation: OnMouseOver event called")
    });
  }

  mapClick(event: google.maps.MouseEvent) {
     alert(`Map (not Marker or Info Window) clicked ${event.latLng}`)
  }
  zoomChange(event: number){
    alert(`Map zoomed to: ${event}`)
  
  }

  // public ngOnDestroy(): void {
  //   if (this.mapClickListener) {
  //     this.mapClickListener.remove();
  //   }
  // }


  // markerDragEnd($event: any) {
  //   console.log($event);
  //   this.lat = $event.coords.lat;
  //   this.long = $event.coords.lng;
  //   this.getAddress(this.lat, this.long);
  // }

  // getAddress(latitude: number, longitude: number) {
  //   this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, (results, status) => {
  //     console.log(results);
  //     console.log(status);
  //     if (status === 'OK') {
  //       if (results[0]) {
  //         // this.zoom = 12;
  //         this.address = results[0].formatted_address;
  //       } else {
  //         window.alert('No results found');
  //       }
  //     } else {
  //       window.alert('Geocoder failed due to: ' + status);
  //     }

  //   });
  // }

}
