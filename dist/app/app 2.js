(function(){
  window.twx = window.twx || {};
  const inherit = -1; // allows the user to write inherit in Home.js as a value

  var requires = ["ionic","twx.byoc","common-html-widgets-ng","ngJustGage"];
  var twxViewControllersModule = angular.module('twxViewControllers', requires);
  twxViewControllersModule.run(function($templateCache) {
    //Inject an ng-if for preview cases where the web-assembly module needs time to load & compile async.
    //Delays loading model-items until its ready and the model tags are processed.
    
      var viewHTML =  '<ion-view hasGridEvenRows="false" view-type="mobile-2D" twx-view="HomePage" view-title="HomePage" ctrl-name="HomePage_TwxViewController" can-swipe-back="false"><div class="overlay ng-hide" ng-show=""></div><ion-content scroll="true" overflow-scroll="true" ><twx-widget widget-id="view-1" original-widget="twx-view" widget-name="view-1"><twx-widget-property name="widgetName" datatype="string" value="view-1"></twx-widget-property><twx-widget-property name="viewtype" datatype="string" value="mobile-2D"></twx-widget-property><twx-widget-property name="class" datatype="string"></twx-widget-property><twx-widget-content><twx-container-content class="{{me.class}}"><twx-widget widget-id="gridLayout-1" original-widget="twx-gridlayout" widget-name="gridLayout-1"><twx-widget-property name="widgetName" datatype="string" value="gridLayout-1"></twx-widget-property><twx-widget-property name="evenlyspacedrows" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="margin" datatype="string" value=""></twx-widget-property><twx-widget-property name="class" datatype="string"></twx-widget-property><twx-widget-property name="visible" datatype="boolean" value="true"></twx-widget-property><twx-widget-content><div ng-show="app.fn.isTrue(me.visible)" even-rows="false" class="gridLayout {{me.class}}" style="padding:;"><twx-container-content><div class="row choiceHeader" style="height: 20"><twx-widget widget-id="resourceImage-2" original-widget="twx-image2" widget-name="resourceImage-1"><twx-widget-property name="widgetName" datatype="string" value="resourceImage-1"></twx-widget-property><twx-widget-property name="padding" datatype="string" value=""></twx-widget-property><twx-widget-property name="visible" datatype="boolean" value="true"></twx-widget-property><twx-widget-property name="imageAlign" datatype="string" value="flex-start"></twx-widget-property><twx-widget-property name="height" datatype="string" value=""></twx-widget-property><twx-widget-property name="width" datatype="string" value=""></twx-widget-property><twx-widget-property name="backgroundcolor" datatype="string"></twx-widget-property><twx-widget-property name="imgsrc" datatype="resource_url" value="app/resources/Uploaded/logo.svg"></twx-widget-property><twx-widget-property name="class" datatype="string" value="logo"></twx-widget-property><twx-widget-content><div class="imgAlignContainer" style="justify-content: flex-start;"><img class="{{me.class}}" ng-show="app.fn.isTrue(me.visible)" style="background-color: {{me.backgroundcolor}}; width: {{me.width}}; height: {{me.height}};  padding: {{me.padding}}" ng-src="{{me.imgsrc}}" twx-native-events=""></div></twx-widget-content></twx-widget></div><div class="row undefined" style=""><div class="col undefined" style="flex-direction:column;justify-content: flex-start;align-items: stretch;padding: 10px 10px 10px 10px;flex-wrap: wrap;"><twx-widget widget-id="label-1" original-widget="twx-label" widget-name="label-1"><twx-widget-property name="widgetName" datatype="string" value="label-1"></twx-widget-property><twx-widget-property name="wrap" datatype="boolean" value="true"></twx-widget-property><twx-widget-property name="margin" datatype="string" value=""></twx-widget-property><twx-widget-property name="visible" datatype="boolean" value="true"></twx-widget-property><twx-widget-property name="padding" datatype="string"></twx-widget-property><twx-widget-property name="stateFormat" datatype="string"></twx-widget-property><twx-widget-property name="stateFormatValue" datatype="string" value="text"></twx-widget-property><twx-widget-property name="enableStateFormatting" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="class" datatype="string" value="choicelabel"></twx-widget-property><twx-widget-property name="text" datatype="string" value="The CXC&apos;s Digital Thread"></twx-widget-property><twx-widget-content><div ng-show="app.fn.isTrue(me.visible)" tabindex="-1" class="labelWidget {{me.class}} wrapSettingsClass" style="" twx-native-events="">{{me.text}}</div></twx-widget-content></twx-widget></div></div><div class="row undefined" style=""><div class="col undefined" style="flex-direction:column;justify-content: flex-start;align-items: center;padding: 0px;flex-wrap: wrap;"><twx-widget widget-id="button-5" original-widget="twx-button" widget-name="button-5"><twx-widget-property name="widgetName" datatype="string" value="button-5"></twx-widget-property><twx-widget-property name="margin" datatype="string"></twx-widget-property><twx-widget-property name="disabled" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="visible" datatype="boolean" value="true"></twx-widget-property><twx-widget-property name="class" datatype="string" value="horiz"></twx-widget-property><twx-widget-property name="text" datatype="string" value="Conference Room A &amp; B Monitor"></twx-widget-property><twx-widget-content><button style="" ng-show="app.fn.isTrue(me.visible)" ng-disabled="app.fn.isTrue(me.disabled)" class="button {{me.class}}" twx-native-events="">{{me.text}}</button></twx-widget-content><twx-eventbind eventbind-id="eb-1660777927302" source-type="widget" source-label="Button" source-name="button-5" source-event="click" handler-namespace="app" handler-name="fn" handler-service="navigate" handler-path="app-fn-navigate"><twx-event-data data-name="viewname" data-value="CON_AB"></twx-event-data></twx-eventbind></twx-widget></div><div class="col undefined" style="flex-direction:column;justify-content: flex-start;align-items: center;padding: 0px;flex-wrap: wrap;"><twx-widget widget-id="button-6" original-widget="twx-button" widget-name="button-6"><twx-widget-property name="widgetName" datatype="string" value="button-6"></twx-widget-property><twx-widget-property name="margin" datatype="string"></twx-widget-property><twx-widget-property name="disabled" datatype="boolean" value="true"></twx-widget-property><twx-widget-property name="visible" datatype="boolean" value="true"></twx-widget-property><twx-widget-property name="class" datatype="string" value="horiz"></twx-widget-property><twx-widget-property name="text" datatype="string" value="Conference Room C Monitor"></twx-widget-property><twx-widget-content><button style="" ng-show="app.fn.isTrue(me.visible)" ng-disabled="app.fn.isTrue(me.disabled)" class="button {{me.class}}" twx-native-events="">{{me.text}}</button></twx-widget-content><twx-eventbind eventbind-id="eb-1660777936173" source-type="widget" source-label="Button" source-name="button-6" source-event="click" handler-namespace="app" handler-name="fn" handler-service="navigate" handler-path="app-fn-navigate"><twx-event-data data-name="viewname" data-value="CON_C"></twx-event-data></twx-eventbind></twx-widget></div></div><div class="row undefined" style=""><div class="col undefined" style="flex-direction:column;justify-content: flex-start;align-items: center;padding: 0px;flex-wrap: wrap;"><twx-widget widget-id="button-7" original-widget="twx-button" widget-name="button-7"><twx-widget-property name="widgetName" datatype="string" value="button-7"></twx-widget-property><twx-widget-property name="margin" datatype="string"></twx-widget-property><twx-widget-property name="disabled" datatype="boolean" value="true"></twx-widget-property><twx-widget-property name="visible" datatype="boolean" value="true"></twx-widget-property><twx-widget-property name="class" datatype="string" value="horiz"></twx-widget-property><twx-widget-property name="text" datatype="string" value="Conference Room D Monitor"></twx-widget-property><twx-widget-content><button style="" ng-show="app.fn.isTrue(me.visible)" ng-disabled="app.fn.isTrue(me.disabled)" class="button {{me.class}}" twx-native-events="">{{me.text}}</button></twx-widget-content><twx-eventbind eventbind-id="eb-1660777945156" source-type="widget" source-label="Button" source-name="button-7" source-event="click" handler-namespace="app" handler-name="fn" handler-service="navigate" handler-path="app-fn-navigate"><twx-event-data data-name="viewname" data-value="CON_D"></twx-event-data></twx-eventbind></twx-widget></div><div class="col undefined" style="flex-direction:column;justify-content: flex-start;align-items: center;padding: 0px;flex-wrap: wrap;"><twx-widget widget-id="button-4" original-widget="twx-button" widget-name="button-4"><twx-widget-property name="widgetName" datatype="string" value="button-4"></twx-widget-property><twx-widget-property name="margin" datatype="string"></twx-widget-property><twx-widget-property name="disabled" datatype="boolean" value="true"></twx-widget-property><twx-widget-property name="visible" datatype="boolean" value="true"></twx-widget-property><twx-widget-property name="class" datatype="string" value="horiz"></twx-widget-property><twx-widget-property name="text" datatype="string" value="Conference Room E Monitor"></twx-widget-property><twx-widget-content><button style="" ng-show="app.fn.isTrue(me.visible)" ng-disabled="app.fn.isTrue(me.disabled)" class="button {{me.class}}" twx-native-events="">{{me.text}}</button></twx-widget-content><twx-eventbind eventbind-id="eb-1660777952379" source-type="widget" source-label="Button" source-name="button-4" source-event="click" handler-namespace="app" handler-name="fn" handler-service="navigate" handler-path="app-fn-navigate"><twx-event-data data-name="viewname" data-value="CON_E"></twx-event-data></twx-eventbind></twx-widget></div></div><div class="row undefined" style=""><div class="col undefined" style="flex-direction:column;justify-content: flex-start;align-items: center;padding: 0px;flex-wrap: wrap;"><twx-widget widget-id="button-8" original-widget="twx-button" widget-name="button-8"><twx-widget-property name="widgetName" datatype="string" value="button-8"></twx-widget-property><twx-widget-property name="margin" datatype="string"></twx-widget-property><twx-widget-property name="disabled" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="visible" datatype="boolean" value="true"></twx-widget-property><twx-widget-property name="class" datatype="string" value="horiz"></twx-widget-property><twx-widget-property name="text" datatype="string" value="XR Wall Monitor"></twx-widget-property><twx-widget-content><button style="" ng-show="app.fn.isTrue(me.visible)" ng-disabled="app.fn.isTrue(me.disabled)" class="button {{me.class}}" twx-native-events="">{{me.text}}</button></twx-widget-content><twx-eventbind eventbind-id="eb-1660777961999" source-type="widget" source-label="Button" source-name="button-8" source-event="click" handler-namespace="app" handler-name="fn" handler-service="navigate" handler-path="app-fn-navigate"><twx-event-data data-name="viewname" data-value="XR"></twx-event-data></twx-eventbind></twx-widget></div><div class="col undefined" style="flex-direction:column;justify-content: flex-start;align-items: center;padding: 0px;flex-wrap: wrap;"><twx-widget widget-id="button-9" original-widget="twx-button" widget-name="button-9"><twx-widget-property name="widgetName" datatype="string" value="button-9"></twx-widget-property><twx-widget-property name="margin" datatype="string"></twx-widget-property><twx-widget-property name="disabled" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="visible" datatype="boolean" value="true"></twx-widget-property><twx-widget-property name="class" datatype="string" value="horiz"></twx-widget-property><twx-widget-property name="text" datatype="string" value="IDF Server Room Monitor"></twx-widget-property><twx-widget-content><button style="" ng-show="app.fn.isTrue(me.visible)" ng-disabled="app.fn.isTrue(me.disabled)" class="button {{me.class}}" twx-native-events="">{{me.text}}</button></twx-widget-content><twx-eventbind eventbind-id="eb-1660767847991" source-type="widget" source-label="Button" source-name="button-9" source-event="click" handler-namespace="app" handler-name="fn" handler-service="navigate" handler-path="app-fn-navigate"><twx-event-data data-name="viewname" data-value="IDF"></twx-event-data></twx-eventbind></twx-widget></div></div><div class="row undefined" style=""><div class="col undefined" style="flex-direction:column;justify-content: flex-start;align-items: center;padding: 0px;flex-wrap: wrap;"><twx-widget widget-id="button-10" original-widget="twx-button" widget-name="button-10"><twx-widget-property name="widgetName" datatype="string" value="button-10"></twx-widget-property><twx-widget-property name="margin" datatype="string"></twx-widget-property><twx-widget-property name="disabled" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="visible" datatype="boolean" value="true"></twx-widget-property><twx-widget-property name="class" datatype="string" value="horiz"></twx-widget-property><twx-widget-property name="text" datatype="string" value="CXC Team Workspace Monitor"></twx-widget-property><twx-widget-content><button style="" ng-show="app.fn.isTrue(me.visible)" ng-disabled="app.fn.isTrue(me.disabled)" class="button {{me.class}}" twx-native-events="">{{me.text}}</button></twx-widget-content><twx-eventbind eventbind-id="eb-1660777969067" source-type="widget" source-label="Button" source-name="button-10" source-event="click" handler-namespace="app" handler-name="fn" handler-service="navigate" handler-path="app-fn-navigate"><twx-event-data data-name="viewname" data-value="CXC_WS"></twx-event-data></twx-eventbind></twx-widget></div><div class="col undefined" style="flex-direction:column;justify-content: flex-start;align-items: center;padding: 0px;flex-wrap: wrap;"><twx-widget widget-id="hyperlink-1" original-widget="twx-hyperlink" widget-name="hyperlink-1"><twx-widget-property name="widgetName" datatype="string" value="hyperlink-1"></twx-widget-property><twx-widget-property name="margin" datatype="string"></twx-widget-property><twx-widget-property name="visible" datatype="boolean" value="true"></twx-widget-property><twx-widget-property name="class" datatype="string" value="hyperlinked"></twx-widget-property><twx-widget-property name="url" datatype="string" value="https://cxc-monitoring.ptcxc.com/Thingworx/Composer"></twx-widget-property><twx-widget-property name="text" datatype="string" value="ThingWorx Mashup Dashboard Access"></twx-widget-property><twx-widget-content><a twx-link="" class="twxHyperlink {{me.class}}" twx-native-events="" target="_blank" ng-href="{{me.url}}" ng-show="app.fn.isTrue(me.visible)" style="">{{me.text}}</a></twx-widget-content></twx-widget></div></div><div class="row undefined" style=""><div class="col undefined" style="flex-direction:column;justify-content: flex-start;align-items: stretch;padding: 0px;flex-wrap: wrap;"><twx-widget widget-id="label-3" original-widget="twx-label" widget-name="label-3"><twx-widget-property name="widgetName" datatype="string" value="label-3"></twx-widget-property><twx-widget-property name="wrap" datatype="boolean" value="true"></twx-widget-property><twx-widget-property name="margin" datatype="string" value=""></twx-widget-property><twx-widget-property name="visible" datatype="boolean" value="true"></twx-widget-property><twx-widget-property name="padding" datatype="string"></twx-widget-property><twx-widget-property name="stateFormat" datatype="string"></twx-widget-property><twx-widget-property name="stateFormatValue" datatype="string" value="text"></twx-widget-property><twx-widget-property name="enableStateFormatting" datatype="boolean" value="true"></twx-widget-property><twx-widget-property name="class" datatype="string" value="choicelabel2"></twx-widget-property><twx-widget-property name="text" datatype="string" value="Published - 08.22 - Creator - Jack Bergin"></twx-widget-property><twx-widget-content><div ng-show="app.fn.isTrue(me.visible)" tabindex="-1" class="labelWidget basic-state-formatting basic-state-formatting-image {{me.class}} wrapSettingsClass" style="" twx-native-events="">{{me.text}}</div></twx-widget-content></twx-widget></div></div></twx-container-content></div></twx-widget-content></twx-widget></twx-container-content></twx-widget-content><twx-fragment-parameters></twx-fragment-parameters><twx-view-data></twx-view-data></twx-widget></ion-content></ion-view>\n';
      if (twx.app.isPreview() && viewHTML.indexOf('view-type="ar"') > 0) {
        viewHTML = viewHTML.replace(/<twx-dt-modelitem /ig, '<twx-dt-modelitem ng-if="$root.thingViewReady !== false" ');
      }
      $templateCache.put('app/components/HomePage.html', viewHTML);
    
      var viewHTML =  '<ion-view hasGridEvenRows="false" view-type="mobile-2D" twx-view="IDF" view-title="IDF" ctrl-name="IDF_TwxViewController" can-swipe-back="false"><div class="overlay ng-hide" ng-show=""></div><ion-content scroll="true" overflow-scroll="true" ><twx-widget widget-id="view-1" original-widget="twx-view" widget-name="view-2"><twx-widget-property name="widgetName" datatype="string" value="view-2"></twx-widget-property><twx-widget-property name="viewtype" datatype="string" value="mobile-2D"></twx-widget-property><twx-widget-property name="class" datatype="string"></twx-widget-property><twx-widget-content><twx-container-content class="{{me.class}}"><twx-widget widget-id="gridLayout-1" original-widget="twx-gridlayout" widget-name="gridLayout-1"><twx-widget-property name="widgetName" datatype="string" value="gridLayout-1"></twx-widget-property><twx-widget-property name="evenlyspacedrows" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="margin" datatype="string" value=""></twx-widget-property><twx-widget-property name="class" datatype="string"></twx-widget-property><twx-widget-property name="visible" datatype="boolean" value="true"></twx-widget-property><twx-widget-content><div ng-show="app.fn.isTrue(me.visible)" even-rows="false" class="gridLayout {{me.class}}" style="padding:;"><twx-container-content><div class="row choiceHeader" style=""><twx-widget widget-id="image-1" original-widget="twx-image2" widget-name="image-1"><twx-widget-property name="widgetName" datatype="string" value="image-1"></twx-widget-property><twx-widget-property name="padding" datatype="string" value=""></twx-widget-property><twx-widget-property name="visible" datatype="boolean" value="true"></twx-widget-property><twx-widget-property name="imageAlign" datatype="string" value="flex-start"></twx-widget-property><twx-widget-property name="height" datatype="string" value=""></twx-widget-property><twx-widget-property name="width" datatype="string" value=""></twx-widget-property><twx-widget-property name="backgroundcolor" datatype="string"></twx-widget-property><twx-widget-property name="imgsrc" datatype="resource_url" value="app/resources/Uploaded/logo.svg"></twx-widget-property><twx-widget-property name="class" datatype="string" value="logo"></twx-widget-property><twx-widget-content><div class="imgAlignContainer" style="justify-content: flex-start;"><img class="{{me.class}}" ng-show="app.fn.isTrue(me.visible)" style="background-color: {{me.backgroundcolor}}; width: {{me.width}}; height: {{me.height}};  padding: {{me.padding}}" ng-src="{{me.imgsrc}}" twx-native-events=""></div></twx-widget-content></twx-widget><twx-widget widget-id="button-1" original-widget="twx-button" widget-name="button-1"><twx-widget-property name="widgetName" datatype="string" value="button-1"></twx-widget-property><twx-widget-property name="margin" datatype="string"></twx-widget-property><twx-widget-property name="disabled" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="visible" datatype="boolean" value="true"></twx-widget-property><twx-widget-property name="class" datatype="string" value="homeHamburger"></twx-widget-property><twx-widget-property name="text" datatype="string" value=""></twx-widget-property><twx-widget-content><button style="" ng-show="app.fn.isTrue(me.visible)" ng-disabled="app.fn.isTrue(me.disabled)" class="button {{me.class}}" twx-native-events="">{{me.text}}</button></twx-widget-content><twx-eventbind eventbind-id="eb-1660767890750" source-type="widget" source-label="Button" source-name="button-1" source-event="click" handler-namespace="app" handler-name="fn" handler-service="navigate" handler-path="app-fn-navigate"><twx-event-data data-name="viewname" data-value="HomePage"></twx-event-data></twx-eventbind></twx-widget></div><div class="row undefined" style=""><div class="col undefined" style="flex-direction:column;justify-content: flex-start;align-items: center;padding: 15;flex-wrap: wrap;"><twx-widget widget-id="label-8" original-widget="twx-label" widget-name="label-8"><twx-widget-property name="widgetName" datatype="string" value="label-8"></twx-widget-property><twx-widget-property name="wrap" datatype="boolean" value="true"></twx-widget-property><twx-widget-property name="margin" datatype="string" value=""></twx-widget-property><twx-widget-property name="visible" datatype="boolean" value="true"></twx-widget-property><twx-widget-property name="padding" datatype="string"></twx-widget-property><twx-widget-property name="stateFormat" datatype="string"></twx-widget-property><twx-widget-property name="stateFormatValue" datatype="string" value="text"></twx-widget-property><twx-widget-property name="enableStateFormatting" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="class" datatype="string" value="choicelabel3"></twx-widget-property><twx-widget-property name="text" datatype="string" value="CXC - IDF"></twx-widget-property><twx-widget-content><div ng-show="app.fn.isTrue(me.visible)" tabindex="-1" class="labelWidget {{me.class}} wrapSettingsClass" style="" twx-native-events="">{{me.text}}</div></twx-widget-content></twx-widget></div></div><div class="row undefined" style=""><div class="col undefined" style="flex-direction:column;justify-content: center;align-items: stretch;padding: 0px;flex-wrap: no-wrap;"><twx-widget widget-id="gauge-1" original-widget="twx-gauge" widget-name="gauge-1"><twx-widget-service name="updateChart"></twx-widget-service><twx-widget-property name="widgetName" datatype="string" value="gauge-1"></twx-widget-property><twx-widget-property name="visible" datatype="boolean" value="true"></twx-widget-property><twx-widget-property name="height" datatype="string" value="100%"></twx-widget-property><twx-widget-property name="width" datatype="string" value="100%"></twx-widget-property><twx-widget-property name="backgroundcolor" datatype="string" value="#ffffff"></twx-widget-property><twx-widget-property name="valuecolor" datatype="string" value=""></twx-widget-property><twx-widget-property name="valuefontcolor" datatype="string" value="#ffffff"></twx-widget-property><twx-widget-property name="titlefontcolor" datatype="string" value="#ffffff"></twx-widget-property><twx-widget-property name="hideinnershadow" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="donutstartangle" datatype="number" value="0"></twx-widget-property><twx-widget-property name="donut" datatype="number" value="180"></twx-widget-property><twx-widget-property name="titleposition" datatype="string" value="above"></twx-widget-property><twx-widget-property name="title" datatype="string" value="IDF Temperature (&#xB0; F)"></twx-widget-property><twx-widget-property name="humanFriendlyDecimal" datatype="number" value="0"></twx-widget-property><twx-widget-property name="value" datatype="string" value="0"></twx-widget-property><twx-widget-property name="max" datatype="string" value="100"></twx-widget-property><twx-widget-property name="min" datatype="string" value="0"></twx-widget-property><twx-widget-property name="stateFormat" datatype="string"></twx-widget-property><twx-widget-property name="stateFormatValue" datatype="string" value="value"></twx-widget-property><twx-widget-property name="enableStateFormatting" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="class" datatype="string"></twx-widget-property><twx-widget-content><div class="gage-container" style="width: 100%; height: 100%;"><just-gage ng-show="app.fn.isTrue(me.visible)" id="gauge-0d51f2ad-84d6-652a-154e-23395bede794" class="{{me.class}}" donut="me.donut" hideinnershadow="me.hideinnershadow" donutstartangle="me.donutstartangle" titleposition="me.titleposition" valuecolor="me.valuecolor" backgroundcolor="me.backgroundcolor" valuefontcolor="me.valuefontcolor" titlefontcolor="me.titlefontcolor" max="me.max" min="me.min" value="{{me.value}}" title="IDF Temperature (&#xB0; F)" width="100%" height="100%" options="{humanFriendlyDecimal: 0, humanFriendly: undefined}"></just-gage></div></twx-widget-content><twx-databind databind-id="db-1660766497659" source-type="data" source-name="IDF_Temperature" source-item-type="property" source-item-name="Channel1_Device1_Temperature" binding-type="property_field" from-expression="app.mdl[&apos;IDF_Temperature&apos;].properties[&apos;Channel1_Device1_Temperature&apos;]" to-property="value"></twx-databind></twx-widget></div></div><div class="row undefined" style=""><div class="col undefined" style="flex-direction:column;justify-content: flex-start;align-items: stretch;padding: 0px;flex-wrap: wrap;"><twx-widget widget-id="gauge-2" original-widget="twx-gauge" widget-name="gauge-2"><twx-widget-service name="updateChart"></twx-widget-service><twx-widget-property name="widgetName" datatype="string" value="gauge-2"></twx-widget-property><twx-widget-property name="visible" datatype="boolean" value="true"></twx-widget-property><twx-widget-property name="height" datatype="string" value="100%"></twx-widget-property><twx-widget-property name="width" datatype="string" value="100%"></twx-widget-property><twx-widget-property name="backgroundcolor" datatype="string" value="#ffffff"></twx-widget-property><twx-widget-property name="valuecolor" datatype="string" value=""></twx-widget-property><twx-widget-property name="valuefontcolor" datatype="string" value="#ffffff"></twx-widget-property><twx-widget-property name="titlefontcolor" datatype="string" value="#ffffff"></twx-widget-property><twx-widget-property name="hideinnershadow" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="donutstartangle" datatype="number" value="0"></twx-widget-property><twx-widget-property name="donut" datatype="number" value="180"></twx-widget-property><twx-widget-property name="titleposition" datatype="string" value="above"></twx-widget-property><twx-widget-property name="title" datatype="string" value="IDF Humidity (%)"></twx-widget-property><twx-widget-property name="humanFriendlyDecimal" datatype="number" value="0"></twx-widget-property><twx-widget-property name="value" datatype="string" value="0"></twx-widget-property><twx-widget-property name="max" datatype="string" value="100"></twx-widget-property><twx-widget-property name="min" datatype="string" value="0"></twx-widget-property><twx-widget-property name="stateFormat" datatype="string"></twx-widget-property><twx-widget-property name="stateFormatValue" datatype="string" value="value"></twx-widget-property><twx-widget-property name="enableStateFormatting" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="class" datatype="string"></twx-widget-property><twx-widget-content><div class="gage-container" style="width: 100%; height: 100%;"><just-gage ng-show="app.fn.isTrue(me.visible)" id="gauge-05d6bc96-5889-520d-92a0-5b9fa53f32de" class="{{me.class}}" donut="me.donut" hideinnershadow="me.hideinnershadow" donutstartangle="me.donutstartangle" titleposition="me.titleposition" valuecolor="me.valuecolor" backgroundcolor="me.backgroundcolor" valuefontcolor="me.valuefontcolor" titlefontcolor="me.titlefontcolor" max="me.max" min="me.min" value="{{me.value}}" title="IDF Humidity (%)" width="100%" height="100%" options="{humanFriendlyDecimal: 0, humanFriendly: undefined}"></just-gage></div></twx-widget-content><twx-databind databind-id="db-1660766514862" source-type="data" source-name="IDF_Humidity" source-item-type="property" source-item-name="Channel1_Device1_Humidity" binding-type="property_field" from-expression="app.mdl[&apos;IDF_Humidity&apos;].properties[&apos;Channel1_Device1_Humidity&apos;]" to-property="value"></twx-databind></twx-widget></div></div><div class="row undefined" style=""><div class="col undefined" style="flex-direction:column;justify-content: flex-start;align-items: stretch;padding: 0px;flex-wrap: wrap;"><twx-widget widget-id="gauge-3" original-widget="twx-gauge" widget-name="gauge-3"><twx-widget-service name="updateChart"></twx-widget-service><twx-widget-property name="widgetName" datatype="string" value="gauge-3"></twx-widget-property><twx-widget-property name="visible" datatype="boolean" value="true"></twx-widget-property><twx-widget-property name="height" datatype="string" value="100%"></twx-widget-property><twx-widget-property name="width" datatype="string" value="100%"></twx-widget-property><twx-widget-property name="backgroundcolor" datatype="string" value="#ffffff"></twx-widget-property><twx-widget-property name="valuecolor" datatype="string" value=""></twx-widget-property><twx-widget-property name="valuefontcolor" datatype="string" value="#ffffff"></twx-widget-property><twx-widget-property name="titlefontcolor" datatype="string" value="#ffffff"></twx-widget-property><twx-widget-property name="hideinnershadow" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="donutstartangle" datatype="number" value="0"></twx-widget-property><twx-widget-property name="donut" datatype="number" value="180"></twx-widget-property><twx-widget-property name="titleposition" datatype="string" value="above"></twx-widget-property><twx-widget-property name="title" datatype="string" value="IDF Pressure (Pa)"></twx-widget-property><twx-widget-property name="humanFriendlyDecimal" datatype="number" value="0"></twx-widget-property><twx-widget-property name="value" datatype="string" value="0"></twx-widget-property><twx-widget-property name="max" datatype="string" value="2000"></twx-widget-property><twx-widget-property name="min" datatype="string" value="0"></twx-widget-property><twx-widget-property name="stateFormat" datatype="string"></twx-widget-property><twx-widget-property name="stateFormatValue" datatype="string" value="value"></twx-widget-property><twx-widget-property name="enableStateFormatting" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="class" datatype="string"></twx-widget-property><twx-widget-content><div class="gage-container" style="width: 100%; height: 100%;"><just-gage ng-show="app.fn.isTrue(me.visible)" id="gauge-4dc0b8f4-90a7-2cf0-524c-631e1078e9ef" class="{{me.class}}" donut="me.donut" hideinnershadow="me.hideinnershadow" donutstartangle="me.donutstartangle" titleposition="me.titleposition" valuecolor="me.valuecolor" backgroundcolor="me.backgroundcolor" valuefontcolor="me.valuefontcolor" titlefontcolor="me.titlefontcolor" max="me.max" min="me.min" value="{{me.value}}" title="IDF Pressure (Pa)" width="100%" height="100%" options="{humanFriendlyDecimal: 0, humanFriendly: undefined}"></just-gage></div></twx-widget-content><twx-databind databind-id="db-1660766503726" source-type="data" source-name="IDF_Pressure" source-item-type="property" source-item-name="Channel1_Device1_Pressure" binding-type="property_field" from-expression="app.mdl[&apos;IDF_Pressure&apos;].properties[&apos;Channel1_Device1_Pressure&apos;]" to-property="value"></twx-databind></twx-widget></div></div><div class="row undefined" style=""><div class="col undefined" style="flex-direction:column;justify-content: center;align-items: center;padding: 30;flex-wrap: no-wrap;"><twx-widget widget-id="button-2" original-widget="twx-button" widget-name="button-2"><twx-widget-property name="widgetName" datatype="string" value="button-2"></twx-widget-property><twx-widget-property name="margin" datatype="string"></twx-widget-property><twx-widget-property name="disabled" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="visible" datatype="boolean" value="true"></twx-widget-property><twx-widget-property name="class" datatype="string" value="viewSigma"></twx-widget-property><twx-widget-property name="text" datatype="string" value=""></twx-widget-property><twx-widget-content><button style="" ng-show="app.fn.isTrue(me.visible)" ng-disabled="app.fn.isTrue(me.disabled)" class="button {{me.class}}" twx-native-events="">{{me.text}}</button></twx-widget-content><twx-eventbind eventbind-id="eb-1661370123897" source-type="widget" source-label="Button" source-name="button-2" source-event="click" handler-namespace="app" handler-name="fn" handler-service="navigate" handler-path="app-fn-navigate"><twx-event-data data-name="viewname" data-value="3D_IDF"></twx-event-data></twx-eventbind></twx-widget></div></div></twx-container-content></div></twx-widget-content></twx-widget></twx-container-content></twx-widget-content><twx-fragment-parameters></twx-fragment-parameters><twx-view-data></twx-view-data></twx-widget></ion-content></ion-view>\n';
      if (twx.app.isPreview() && viewHTML.indexOf('view-type="ar"') > 0) {
        viewHTML = viewHTML.replace(/<twx-dt-modelitem /ig, '<twx-dt-modelitem ng-if="$root.thingViewReady !== false" ');
      }
      $templateCache.put('app/components/IDF.html', viewHTML);
    
      var viewHTML =  '<ion-view hasGridEvenRows="false" view-type="mobile-2D" twx-view="CON_AB" view-title="CON_AB" ctrl-name="CON_AB_TwxViewController" can-swipe-back="false"><div class="overlay ng-hide" ng-show=""></div><ion-content scroll="true" overflow-scroll="true" ><twx-widget widget-id="view-1" original-widget="twx-view" widget-name="view-1"><twx-widget-property name="widgetName" datatype="string" value="view-1"></twx-widget-property><twx-widget-property name="viewtype" datatype="string" value="mobile-2D"></twx-widget-property><twx-widget-property name="class" datatype="string"></twx-widget-property><twx-widget-content><twx-container-content class="{{me.class}}"><twx-widget widget-id="gridLayout-1" original-widget="twx-gridlayout" widget-name="gridLayout-1"><twx-widget-property name="widgetName" datatype="string" value="gridLayout-1"></twx-widget-property><twx-widget-property name="evenlyspacedrows" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="margin" datatype="string" value=""></twx-widget-property><twx-widget-property name="class" datatype="string"></twx-widget-property><twx-widget-property name="visible" datatype="boolean" value="true"></twx-widget-property><twx-widget-content><div ng-show="app.fn.isTrue(me.visible)" even-rows="false" class="gridLayout {{me.class}}" style="padding:;"><twx-container-content><div class="row choiceHeader" style=""><twx-widget widget-id="image-2" original-widget="twx-image2" widget-name="image-2"><twx-widget-property name="widgetName" datatype="string" value="image-2"></twx-widget-property><twx-widget-property name="padding" datatype="string" value=""></twx-widget-property><twx-widget-property name="visible" datatype="boolean" value="true"></twx-widget-property><twx-widget-property name="imageAlign" datatype="string" value="flex-start"></twx-widget-property><twx-widget-property name="height" datatype="string" value=""></twx-widget-property><twx-widget-property name="width" datatype="string" value=""></twx-widget-property><twx-widget-property name="backgroundcolor" datatype="string"></twx-widget-property><twx-widget-property name="imgsrc" datatype="resource_url" value="app/resources/Uploaded/logo.svg"></twx-widget-property><twx-widget-property name="class" datatype="string" value="logo"></twx-widget-property><twx-widget-content><div class="imgAlignContainer" style="justify-content: flex-start;"><img class="{{me.class}}" ng-show="app.fn.isTrue(me.visible)" style="background-color: {{me.backgroundcolor}}; width: {{me.width}}; height: {{me.height}};  padding: {{me.padding}}" ng-src="{{me.imgsrc}}" twx-native-events=""></div></twx-widget-content></twx-widget><twx-widget widget-id="button-1" original-widget="twx-button" widget-name="button-1"><twx-widget-property name="widgetName" datatype="string" value="button-1"></twx-widget-property><twx-widget-property name="margin" datatype="string"></twx-widget-property><twx-widget-property name="disabled" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="visible" datatype="boolean" value="true"></twx-widget-property><twx-widget-property name="class" datatype="string" value="homeHamburger"></twx-widget-property><twx-widget-property name="text" datatype="string" value=""></twx-widget-property><twx-widget-content><button style="" ng-show="app.fn.isTrue(me.visible)" ng-disabled="app.fn.isTrue(me.disabled)" class="button {{me.class}}" twx-native-events="">{{me.text}}</button></twx-widget-content><twx-eventbind eventbind-id="eb-1660778012656" source-type="widget" source-label="Button" source-name="button-1" source-event="click" handler-namespace="app" handler-name="fn" handler-service="navigate" handler-path="app-fn-navigate"><twx-event-data data-name="viewname" data-value="HomePage"></twx-event-data></twx-eventbind></twx-widget></div><div class="row undefined" style=""><div class="col undefined" style="flex-direction:column;justify-content: flex-start;align-items: stretch;padding: 0px;flex-wrap: wrap;"><twx-widget widget-id="label-1" original-widget="twx-label" widget-name="label-1"><twx-widget-property name="widgetName" datatype="string" value="label-1"></twx-widget-property><twx-widget-property name="wrap" datatype="boolean" value="true"></twx-widget-property><twx-widget-property name="margin" datatype="string" value=""></twx-widget-property><twx-widget-property name="visible" datatype="boolean" value="true"></twx-widget-property><twx-widget-property name="padding" datatype="string"></twx-widget-property><twx-widget-property name="stateFormat" datatype="string"></twx-widget-property><twx-widget-property name="stateFormatValue" datatype="string" value="text"></twx-widget-property><twx-widget-property name="enableStateFormatting" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="class" datatype="string" value="choicelabel3"></twx-widget-property><twx-widget-property name="text" datatype="string" value="CXC - Room A &amp; B"></twx-widget-property><twx-widget-content><div ng-show="app.fn.isTrue(me.visible)" tabindex="-1" class="labelWidget {{me.class}} wrapSettingsClass" style="" twx-native-events="">{{me.text}}</div></twx-widget-content></twx-widget></div></div><div class="row undefined" style=""><div class="col undefined" style="flex-direction:column;justify-content: flex-start;align-items: stretch;padding: 0px;flex-wrap: wrap;"><twx-widget widget-id="gauge-2" original-widget="twx-gauge" widget-name="gauge-2"><twx-widget-service name="updateChart"></twx-widget-service><twx-widget-property name="widgetName" datatype="string" value="gauge-2"></twx-widget-property><twx-widget-property name="visible" datatype="boolean" value="true"></twx-widget-property><twx-widget-property name="height" datatype="string" value="100%"></twx-widget-property><twx-widget-property name="width" datatype="string" value="100%"></twx-widget-property><twx-widget-property name="backgroundcolor" datatype="string" value="#ffffff"></twx-widget-property><twx-widget-property name="valuecolor" datatype="string" value=""></twx-widget-property><twx-widget-property name="valuefontcolor" datatype="string" value="#ffffff"></twx-widget-property><twx-widget-property name="titlefontcolor" datatype="string" value="#ffffff"></twx-widget-property><twx-widget-property name="hideinnershadow" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="donutstartangle" datatype="number" value="0"></twx-widget-property><twx-widget-property name="donut" datatype="number" value="180"></twx-widget-property><twx-widget-property name="titleposition" datatype="string" value="above"></twx-widget-property><twx-widget-property name="title" datatype="string" value="A&amp;B Temperature (&#xB0; F)"></twx-widget-property><twx-widget-property name="humanFriendlyDecimal" datatype="number" value="0"></twx-widget-property><twx-widget-property name="value" datatype="string" value="0"></twx-widget-property><twx-widget-property name="max" datatype="string" value="100"></twx-widget-property><twx-widget-property name="min" datatype="string" value="0"></twx-widget-property><twx-widget-property name="stateFormat" datatype="string"></twx-widget-property><twx-widget-property name="stateFormatValue" datatype="string" value="value"></twx-widget-property><twx-widget-property name="enableStateFormatting" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="class" datatype="string"></twx-widget-property><twx-widget-content><div class="gage-container" style="width: 100%; height: 100%;"><just-gage ng-show="app.fn.isTrue(me.visible)" id="gauge-f29c7c01-195d-6ff7-0e8e-33ca7ab3bada" class="{{me.class}}" donut="me.donut" hideinnershadow="me.hideinnershadow" donutstartangle="me.donutstartangle" titleposition="me.titleposition" valuecolor="me.valuecolor" backgroundcolor="me.backgroundcolor" valuefontcolor="me.valuefontcolor" titlefontcolor="me.titlefontcolor" max="me.max" min="me.min" value="{{me.value}}" title="A&amp;B Temperature (&#xB0; F)" width="100%" height="100%" options="{humanFriendlyDecimal: 0, humanFriendly: undefined}"></just-gage></div></twx-widget-content><twx-databind databind-id="db-1661212434801" source-type="data" source-name="CON_AB_Temperature" source-item-type="property" source-item-name="Channel4_Device4_Temperature" binding-type="property_field" from-expression="app.mdl[&apos;CON_AB_Temperature&apos;].properties[&apos;Channel4_Device4_Temperature&apos;]" to-property="value"></twx-databind></twx-widget></div></div><div class="row undefined" style=""><div class="col undefined" style="flex-direction:column;justify-content: flex-start;align-items: stretch;padding: 0px;flex-wrap: wrap;"><twx-widget widget-id="gauge-3" original-widget="twx-gauge" widget-name="gauge-3"><twx-widget-service name="updateChart"></twx-widget-service><twx-widget-property name="widgetName" datatype="string" value="gauge-3"></twx-widget-property><twx-widget-property name="visible" datatype="boolean" value="true"></twx-widget-property><twx-widget-property name="height" datatype="string" value="100%"></twx-widget-property><twx-widget-property name="width" datatype="string" value="100%"></twx-widget-property><twx-widget-property name="backgroundcolor" datatype="string" value="#ffffff"></twx-widget-property><twx-widget-property name="valuecolor" datatype="string" value=""></twx-widget-property><twx-widget-property name="valuefontcolor" datatype="string" value="#ffffff"></twx-widget-property><twx-widget-property name="titlefontcolor" datatype="string" value="#ffffff"></twx-widget-property><twx-widget-property name="hideinnershadow" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="donutstartangle" datatype="number" value="0"></twx-widget-property><twx-widget-property name="donut" datatype="number" value="180"></twx-widget-property><twx-widget-property name="titleposition" datatype="string" value="above"></twx-widget-property><twx-widget-property name="title" datatype="string" value="A&amp;B Humidity (%)"></twx-widget-property><twx-widget-property name="humanFriendlyDecimal" datatype="number" value="0"></twx-widget-property><twx-widget-property name="value" datatype="string" value="0"></twx-widget-property><twx-widget-property name="max" datatype="string" value="100"></twx-widget-property><twx-widget-property name="min" datatype="string" value="0"></twx-widget-property><twx-widget-property name="stateFormat" datatype="string"></twx-widget-property><twx-widget-property name="stateFormatValue" datatype="string" value="value"></twx-widget-property><twx-widget-property name="enableStateFormatting" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="class" datatype="string"></twx-widget-property><twx-widget-content><div class="gage-container" style="width: 100%; height: 100%;"><just-gage ng-show="app.fn.isTrue(me.visible)" id="gauge-3f237896-a452-4bc3-a04d-a67614290c20" class="{{me.class}}" donut="me.donut" hideinnershadow="me.hideinnershadow" donutstartangle="me.donutstartangle" titleposition="me.titleposition" valuecolor="me.valuecolor" backgroundcolor="me.backgroundcolor" valuefontcolor="me.valuefontcolor" titlefontcolor="me.titlefontcolor" max="me.max" min="me.min" value="{{me.value}}" title="A&amp;B Humidity (%)" width="100%" height="100%" options="{humanFriendlyDecimal: 0, humanFriendly: undefined}"></just-gage></div></twx-widget-content><twx-databind databind-id="db-1661212420817" source-type="data" source-name="CON_AB_Humidity" source-item-type="property" source-item-name="Channel4_Device4_Humidity" binding-type="property_field" from-expression="app.mdl[&apos;CON_AB_Humidity&apos;].properties[&apos;Channel4_Device4_Humidity&apos;]" to-property="value"></twx-databind></twx-widget></div></div><div class="row undefined" style=""><div class="col undefined" style="flex-direction:column;justify-content: flex-start;align-items: stretch;padding: 0px;flex-wrap: wrap;"><twx-widget widget-id="gauge-4" original-widget="twx-gauge" widget-name="gauge-4"><twx-widget-service name="updateChart"></twx-widget-service><twx-widget-property name="widgetName" datatype="string" value="gauge-4"></twx-widget-property><twx-widget-property name="visible" datatype="boolean" value="true"></twx-widget-property><twx-widget-property name="height" datatype="string" value="100%"></twx-widget-property><twx-widget-property name="width" datatype="string" value="100%"></twx-widget-property><twx-widget-property name="backgroundcolor" datatype="string" value="#ffffff"></twx-widget-property><twx-widget-property name="valuecolor" datatype="string" value=""></twx-widget-property><twx-widget-property name="valuefontcolor" datatype="string" value="#ffffff"></twx-widget-property><twx-widget-property name="titlefontcolor" datatype="string" value="#ffffff"></twx-widget-property><twx-widget-property name="hideinnershadow" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="donutstartangle" datatype="number" value="0"></twx-widget-property><twx-widget-property name="donut" datatype="number" value="180"></twx-widget-property><twx-widget-property name="titleposition" datatype="string" value="above"></twx-widget-property><twx-widget-property name="title" datatype="string" value="A&amp;B Pressure (Pa)"></twx-widget-property><twx-widget-property name="humanFriendlyDecimal" datatype="number" value="0"></twx-widget-property><twx-widget-property name="value" datatype="string" value="0"></twx-widget-property><twx-widget-property name="max" datatype="string" value="2000"></twx-widget-property><twx-widget-property name="min" datatype="string" value="0"></twx-widget-property><twx-widget-property name="stateFormat" datatype="string"></twx-widget-property><twx-widget-property name="stateFormatValue" datatype="string" value="value"></twx-widget-property><twx-widget-property name="enableStateFormatting" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="class" datatype="string"></twx-widget-property><twx-widget-content><div class="gage-container" style="width: 100%; height: 100%;"><just-gage ng-show="app.fn.isTrue(me.visible)" id="gauge-ea1e32bc-0b36-89ea-d17a-a06070fc9555" class="{{me.class}}" donut="me.donut" hideinnershadow="me.hideinnershadow" donutstartangle="me.donutstartangle" titleposition="me.titleposition" valuecolor="me.valuecolor" backgroundcolor="me.backgroundcolor" valuefontcolor="me.valuefontcolor" titlefontcolor="me.titlefontcolor" max="me.max" min="me.min" value="{{me.value}}" title="A&amp;B Pressure (Pa)" width="100%" height="100%" options="{humanFriendlyDecimal: 0, humanFriendly: undefined}"></just-gage></div></twx-widget-content><twx-databind databind-id="db-1661212428649" source-type="data" source-name="CON_AB_Pressure" source-item-type="property" source-item-name="Channel4_Device4_Pressure" binding-type="property_field" from-expression="app.mdl[&apos;CON_AB_Pressure&apos;].properties[&apos;Channel4_Device4_Pressure&apos;]" to-property="value"></twx-databind></twx-widget></div></div><div class="row undefined" style=""><div class="col " style="flex-direction:column;justify-content: center;align-items: center;padding: 0px;flex-wrap: no-wrap;"><twx-widget widget-id="button-2" original-widget="twx-button" widget-name="button-2"><twx-widget-property name="widgetName" datatype="string" value="button-2"></twx-widget-property><twx-widget-property name="margin" datatype="string"></twx-widget-property><twx-widget-property name="disabled" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="visible" datatype="boolean" value="true"></twx-widget-property><twx-widget-property name="class" datatype="string" value="viewSigma"></twx-widget-property><twx-widget-property name="text" datatype="string" value=""></twx-widget-property><twx-widget-content><button style="" ng-show="app.fn.isTrue(me.visible)" ng-disabled="app.fn.isTrue(me.disabled)" class="button {{me.class}}" twx-native-events="">{{me.text}}</button></twx-widget-content><twx-eventbind eventbind-id="eb-1661370099247" source-type="widget" source-label="Button" source-name="button-2" source-event="click" handler-namespace="app" handler-name="fn" handler-service="navigate" handler-path="app-fn-navigate"><twx-event-data data-name="viewname" data-value="3D_CON_AB"></twx-event-data></twx-eventbind></twx-widget></div></div></twx-container-content></div></twx-widget-content></twx-widget></twx-container-content></twx-widget-content><twx-fragment-parameters></twx-fragment-parameters><twx-view-data></twx-view-data></twx-widget></ion-content></ion-view>\n';
      if (twx.app.isPreview() && viewHTML.indexOf('view-type="ar"') > 0) {
        viewHTML = viewHTML.replace(/<twx-dt-modelitem /ig, '<twx-dt-modelitem ng-if="$root.thingViewReady !== false" ');
      }
      $templateCache.put('app/components/CON_AB.html', viewHTML);
    
      var viewHTML =  '<ion-view hasGridEvenRows="false" view-type="mobile-2D" twx-view="CON_C" view-title="CON_C" ctrl-name="CON_C_TwxViewController" can-swipe-back="false"><div class="overlay ng-hide" ng-show=""></div><ion-content scroll="true" overflow-scroll="true" ><twx-widget widget-id="view-1" original-widget="twx-view" widget-name="view-1"><twx-widget-property name="widgetName" datatype="string" value="view-1"></twx-widget-property><twx-widget-property name="viewtype" datatype="string" value="mobile-2D"></twx-widget-property><twx-widget-property name="class" datatype="string"></twx-widget-property><twx-widget-content><twx-container-content class="{{me.class}}"><twx-widget widget-id="gridLayout-1" original-widget="twx-gridlayout" widget-name="gridLayout-1"><twx-widget-property name="widgetName" datatype="string" value="gridLayout-1"></twx-widget-property><twx-widget-property name="evenlyspacedrows" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="margin" datatype="string" value=""></twx-widget-property><twx-widget-property name="class" datatype="string"></twx-widget-property><twx-widget-property name="visible" datatype="boolean" value="true"></twx-widget-property><twx-widget-content><div ng-show="app.fn.isTrue(me.visible)" even-rows="false" class="gridLayout {{me.class}}" style="padding:;"><twx-container-content><div class="row choiceHeader" style=""><twx-widget widget-id="image-1" original-widget="twx-image2" widget-name="image-1"><twx-widget-property name="widgetName" datatype="string" value="image-1"></twx-widget-property><twx-widget-property name="padding" datatype="string" value=""></twx-widget-property><twx-widget-property name="visible" datatype="boolean" value="true"></twx-widget-property><twx-widget-property name="imageAlign" datatype="string" value="flex-start"></twx-widget-property><twx-widget-property name="height" datatype="string" value=""></twx-widget-property><twx-widget-property name="width" datatype="string" value=""></twx-widget-property><twx-widget-property name="backgroundcolor" datatype="string"></twx-widget-property><twx-widget-property name="imgsrc" datatype="resource_url" value="app/resources/Uploaded/logo.svg"></twx-widget-property><twx-widget-property name="class" datatype="string" value="logo"></twx-widget-property><twx-widget-content><div class="imgAlignContainer" style="justify-content: flex-start;"><img class="{{me.class}}" ng-show="app.fn.isTrue(me.visible)" style="background-color: {{me.backgroundcolor}}; width: {{me.width}}; height: {{me.height}};  padding: {{me.padding}}" ng-src="{{me.imgsrc}}" twx-native-events=""></div></twx-widget-content></twx-widget><twx-widget widget-id="button-1" original-widget="twx-button" widget-name="button-1"><twx-widget-property name="widgetName" datatype="string" value="button-1"></twx-widget-property><twx-widget-property name="margin" datatype="string"></twx-widget-property><twx-widget-property name="disabled" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="visible" datatype="boolean" value="true"></twx-widget-property><twx-widget-property name="class" datatype="string" value="homeHamburger"></twx-widget-property><twx-widget-property name="text" datatype="string" value=""></twx-widget-property><twx-widget-content><button style="" ng-show="app.fn.isTrue(me.visible)" ng-disabled="app.fn.isTrue(me.disabled)" class="button {{me.class}}" twx-native-events="">{{me.text}}</button></twx-widget-content><twx-eventbind eventbind-id="eb-1660777733085" source-type="widget" source-label="Button" source-name="button-1" source-event="click" handler-namespace="app" handler-name="fn" handler-service="navigate" handler-path="app-fn-navigate"><twx-event-data data-name="viewname" data-value="HomePage"></twx-event-data></twx-eventbind></twx-widget></div><div class="row undefined" style=""><div class="col undefined" style="flex-direction:column;justify-content: flex-start;align-items: stretch;padding: 0px;flex-wrap: wrap;"><twx-widget widget-id="label-1" original-widget="twx-label" widget-name="label-1"><twx-widget-property name="widgetName" datatype="string" value="label-1"></twx-widget-property><twx-widget-property name="wrap" datatype="boolean" value="true"></twx-widget-property><twx-widget-property name="margin" datatype="string" value=""></twx-widget-property><twx-widget-property name="visible" datatype="boolean" value="true"></twx-widget-property><twx-widget-property name="padding" datatype="string"></twx-widget-property><twx-widget-property name="stateFormat" datatype="string"></twx-widget-property><twx-widget-property name="stateFormatValue" datatype="string" value="text"></twx-widget-property><twx-widget-property name="enableStateFormatting" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="class" datatype="string" value="choicelabel3"></twx-widget-property><twx-widget-property name="text" datatype="string" value="CXC - Room C"></twx-widget-property><twx-widget-content><div ng-show="app.fn.isTrue(me.visible)" tabindex="-1" class="labelWidget {{me.class}} wrapSettingsClass" style="" twx-native-events="">{{me.text}}</div></twx-widget-content></twx-widget></div></div><div class="row undefined" style=""><div class="col undefined" style="flex-direction:column;justify-content: flex-start;align-items: stretch;padding: 0px;flex-wrap: wrap;"><twx-widget widget-id="gauge-1" original-widget="twx-gauge" widget-name="gauge-1"><twx-widget-service name="updateChart"></twx-widget-service><twx-widget-property name="widgetName" datatype="string" value="gauge-1"></twx-widget-property><twx-widget-property name="visible" datatype="boolean" value="true"></twx-widget-property><twx-widget-property name="height" datatype="string" value="100%"></twx-widget-property><twx-widget-property name="width" datatype="string" value="100%"></twx-widget-property><twx-widget-property name="backgroundcolor" datatype="string" value="#ffffff"></twx-widget-property><twx-widget-property name="valuecolor" datatype="string" value=""></twx-widget-property><twx-widget-property name="valuefontcolor" datatype="string" value="#ffffff"></twx-widget-property><twx-widget-property name="titlefontcolor" datatype="string" value="#ffffff"></twx-widget-property><twx-widget-property name="hideinnershadow" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="donutstartangle" datatype="number" value="0"></twx-widget-property><twx-widget-property name="donut" datatype="number" value="180"></twx-widget-property><twx-widget-property name="titleposition" datatype="string" value="above"></twx-widget-property><twx-widget-property name="title" datatype="string" value="Room C Temperature (&#xB0; F)"></twx-widget-property><twx-widget-property name="humanFriendlyDecimal" datatype="number" value="0"></twx-widget-property><twx-widget-property name="value" datatype="string" value="0"></twx-widget-property><twx-widget-property name="max" datatype="string" value="100"></twx-widget-property><twx-widget-property name="min" datatype="string" value="0"></twx-widget-property><twx-widget-property name="stateFormat" datatype="string"></twx-widget-property><twx-widget-property name="stateFormatValue" datatype="string" value="value"></twx-widget-property><twx-widget-property name="enableStateFormatting" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="class" datatype="string"></twx-widget-property><twx-widget-content><div class="gage-container" style="width: 100%; height: 100%;"><just-gage ng-show="app.fn.isTrue(me.visible)" id="gauge-6e00f79f-9793-db12-2fc0-57acb890cc01" class="{{me.class}}" donut="me.donut" hideinnershadow="me.hideinnershadow" donutstartangle="me.donutstartangle" titleposition="me.titleposition" valuecolor="me.valuecolor" backgroundcolor="me.backgroundcolor" valuefontcolor="me.valuefontcolor" titlefontcolor="me.titlefontcolor" max="me.max" min="me.min" value="{{me.value}}" title="Room C Temperature (&#xB0; F)" width="100%" height="100%" options="{humanFriendlyDecimal: 0, humanFriendly: undefined}"></just-gage></div></twx-widget-content></twx-widget></div></div><div class="row undefined" style=""><div class="col undefined" style="flex-direction:column;justify-content: flex-start;align-items: stretch;padding: 0px;flex-wrap: wrap;"><twx-widget widget-id="gauge-2" original-widget="twx-gauge" widget-name="gauge-2"><twx-widget-service name="updateChart"></twx-widget-service><twx-widget-property name="widgetName" datatype="string" value="gauge-2"></twx-widget-property><twx-widget-property name="visible" datatype="boolean" value="true"></twx-widget-property><twx-widget-property name="height" datatype="string" value="100%"></twx-widget-property><twx-widget-property name="width" datatype="string" value="100%"></twx-widget-property><twx-widget-property name="backgroundcolor" datatype="string" value="#ffffff"></twx-widget-property><twx-widget-property name="valuecolor" datatype="string" value=""></twx-widget-property><twx-widget-property name="valuefontcolor" datatype="string" value="#ffffff"></twx-widget-property><twx-widget-property name="titlefontcolor" datatype="string" value="#ffffff"></twx-widget-property><twx-widget-property name="hideinnershadow" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="donutstartangle" datatype="number" value="0"></twx-widget-property><twx-widget-property name="donut" datatype="number" value="180"></twx-widget-property><twx-widget-property name="titleposition" datatype="string" value="above"></twx-widget-property><twx-widget-property name="title" datatype="string" value="Room C Humidity (%)"></twx-widget-property><twx-widget-property name="humanFriendlyDecimal" datatype="number" value="0"></twx-widget-property><twx-widget-property name="value" datatype="string" value="0"></twx-widget-property><twx-widget-property name="max" datatype="string" value="100"></twx-widget-property><twx-widget-property name="min" datatype="string" value="0"></twx-widget-property><twx-widget-property name="stateFormat" datatype="string"></twx-widget-property><twx-widget-property name="stateFormatValue" datatype="string" value="value"></twx-widget-property><twx-widget-property name="enableStateFormatting" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="class" datatype="string"></twx-widget-property><twx-widget-content><div class="gage-container" style="width: 100%; height: 100%;"><just-gage ng-show="app.fn.isTrue(me.visible)" id="gauge-87135820-360e-0413-5720-afccd8dcbd73" class="{{me.class}}" donut="me.donut" hideinnershadow="me.hideinnershadow" donutstartangle="me.donutstartangle" titleposition="me.titleposition" valuecolor="me.valuecolor" backgroundcolor="me.backgroundcolor" valuefontcolor="me.valuefontcolor" titlefontcolor="me.titlefontcolor" max="me.max" min="me.min" value="{{me.value}}" title="Room C Humidity (%)" width="100%" height="100%" options="{humanFriendlyDecimal: 0, humanFriendly: undefined}"></just-gage></div></twx-widget-content></twx-widget></div></div><div class="row undefined" style=""><div class="col undefined" style="flex-direction:column;justify-content: flex-start;align-items: stretch;padding: 0px;flex-wrap: wrap;"><twx-widget widget-id="gauge-3" original-widget="twx-gauge" widget-name="gauge-3"><twx-widget-service name="updateChart"></twx-widget-service><twx-widget-property name="widgetName" datatype="string" value="gauge-3"></twx-widget-property><twx-widget-property name="visible" datatype="boolean" value="true"></twx-widget-property><twx-widget-property name="height" datatype="string" value="100%"></twx-widget-property><twx-widget-property name="width" datatype="string" value="100%"></twx-widget-property><twx-widget-property name="backgroundcolor" datatype="string" value="#ffffff"></twx-widget-property><twx-widget-property name="valuecolor" datatype="string" value=""></twx-widget-property><twx-widget-property name="valuefontcolor" datatype="string" value="#ffffff"></twx-widget-property><twx-widget-property name="titlefontcolor" datatype="string" value="#ffffff"></twx-widget-property><twx-widget-property name="hideinnershadow" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="donutstartangle" datatype="number" value="0"></twx-widget-property><twx-widget-property name="donut" datatype="number" value="180"></twx-widget-property><twx-widget-property name="titleposition" datatype="string" value="above"></twx-widget-property><twx-widget-property name="title" datatype="string" value="Room C Pressure (Pa)"></twx-widget-property><twx-widget-property name="humanFriendlyDecimal" datatype="number" value="0"></twx-widget-property><twx-widget-property name="value" datatype="string" value="0"></twx-widget-property><twx-widget-property name="max" datatype="string" value="2000"></twx-widget-property><twx-widget-property name="min" datatype="string" value="0"></twx-widget-property><twx-widget-property name="stateFormat" datatype="string"></twx-widget-property><twx-widget-property name="stateFormatValue" datatype="string" value="value"></twx-widget-property><twx-widget-property name="enableStateFormatting" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="class" datatype="string"></twx-widget-property><twx-widget-content><div class="gage-container" style="width: 100%; height: 100%;"><just-gage ng-show="app.fn.isTrue(me.visible)" id="gauge-ba21126b-fa62-4f31-976d-b3ae2ba1ec8d" class="{{me.class}}" donut="me.donut" hideinnershadow="me.hideinnershadow" donutstartangle="me.donutstartangle" titleposition="me.titleposition" valuecolor="me.valuecolor" backgroundcolor="me.backgroundcolor" valuefontcolor="me.valuefontcolor" titlefontcolor="me.titlefontcolor" max="me.max" min="me.min" value="{{me.value}}" title="Room C Pressure (Pa)" width="100%" height="100%" options="{humanFriendlyDecimal: 0, humanFriendly: undefined}"></just-gage></div></twx-widget-content></twx-widget></div></div><div class="row undefined" style=""><div class="col undefined" style="flex-direction:column;justify-content: center;align-items: center;padding: 0px;flex-wrap: no-wrap;"><twx-widget widget-id="button-2" original-widget="twx-button" widget-name="button-2"><twx-widget-property name="widgetName" datatype="string" value="button-2"></twx-widget-property><twx-widget-property name="margin" datatype="string"></twx-widget-property><twx-widget-property name="disabled" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="visible" datatype="boolean" value="true"></twx-widget-property><twx-widget-property name="class" datatype="string" value="viewSigma"></twx-widget-property><twx-widget-property name="text" datatype="string" value=""></twx-widget-property><twx-widget-content><button style="" ng-show="app.fn.isTrue(me.visible)" ng-disabled="app.fn.isTrue(me.disabled)" class="button {{me.class}}" twx-native-events="">{{me.text}}</button></twx-widget-content><twx-eventbind eventbind-id="eb-1660779128048" source-type="widget" source-label="Button" source-name="button-2" source-event="click" handler-namespace="app" handler-name="fn" handler-service="navigate" handler-path="app-fn-navigate"><twx-event-data data-name="viewname" data-value="3D_Sigma_Tile"></twx-event-data></twx-eventbind></twx-widget></div></div></twx-container-content></div></twx-widget-content></twx-widget></twx-container-content></twx-widget-content><twx-fragment-parameters></twx-fragment-parameters><twx-view-data></twx-view-data></twx-widget></ion-content></ion-view>\n';
      if (twx.app.isPreview() && viewHTML.indexOf('view-type="ar"') > 0) {
        viewHTML = viewHTML.replace(/<twx-dt-modelitem /ig, '<twx-dt-modelitem ng-if="$root.thingViewReady !== false" ');
      }
      $templateCache.put('app/components/CON_C.html', viewHTML);
    
      var viewHTML =  '<ion-view hasGridEvenRows="false" view-type="mobile-2D" twx-view="CON_D" view-title="CON_D" ctrl-name="CON_D_TwxViewController" can-swipe-back="false"><div class="overlay ng-hide" ng-show=""></div><ion-content scroll="true" overflow-scroll="true" ><twx-widget widget-id="view-1" original-widget="twx-view" widget-name="view-1"><twx-widget-property name="widgetName" datatype="string" value="view-1"></twx-widget-property><twx-widget-property name="viewtype" datatype="string" value="mobile-2D"></twx-widget-property><twx-widget-property name="class" datatype="string"></twx-widget-property><twx-widget-content><twx-container-content class="{{me.class}}"><twx-widget widget-id="gridLayout-1" original-widget="twx-gridlayout" widget-name="gridLayout-1"><twx-widget-property name="widgetName" datatype="string" value="gridLayout-1"></twx-widget-property><twx-widget-property name="evenlyspacedrows" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="margin" datatype="string" value=""></twx-widget-property><twx-widget-property name="class" datatype="string"></twx-widget-property><twx-widget-property name="visible" datatype="boolean" value="true"></twx-widget-property><twx-widget-content><div ng-show="app.fn.isTrue(me.visible)" even-rows="false" class="gridLayout {{me.class}}" style="padding:;"><twx-container-content><div class="row choiceHeader" style=""><twx-widget widget-id="image-1" original-widget="twx-image2" widget-name="image-1"><twx-widget-property name="widgetName" datatype="string" value="image-1"></twx-widget-property><twx-widget-property name="padding" datatype="string" value=""></twx-widget-property><twx-widget-property name="visible" datatype="boolean" value="true"></twx-widget-property><twx-widget-property name="imageAlign" datatype="string" value="flex-start"></twx-widget-property><twx-widget-property name="height" datatype="string" value=""></twx-widget-property><twx-widget-property name="width" datatype="string" value=""></twx-widget-property><twx-widget-property name="backgroundcolor" datatype="string"></twx-widget-property><twx-widget-property name="imgsrc" datatype="resource_url" value="app/resources/Uploaded/logo.svg"></twx-widget-property><twx-widget-property name="class" datatype="string" value="logo"></twx-widget-property><twx-widget-content><div class="imgAlignContainer" style="justify-content: flex-start;"><img class="{{me.class}}" ng-show="app.fn.isTrue(me.visible)" style="background-color: {{me.backgroundcolor}}; width: {{me.width}}; height: {{me.height}};  padding: {{me.padding}}" ng-src="{{me.imgsrc}}" twx-native-events=""></div></twx-widget-content></twx-widget><twx-widget widget-id="button-1" original-widget="twx-button" widget-name="button-1"><twx-widget-property name="widgetName" datatype="string" value="button-1"></twx-widget-property><twx-widget-property name="margin" datatype="string"></twx-widget-property><twx-widget-property name="disabled" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="visible" datatype="boolean" value="true"></twx-widget-property><twx-widget-property name="class" datatype="string" value="homeHamburger"></twx-widget-property><twx-widget-property name="text" datatype="string" value=""></twx-widget-property><twx-widget-content><button style="" ng-show="app.fn.isTrue(me.visible)" ng-disabled="app.fn.isTrue(me.disabled)" class="button {{me.class}}" twx-native-events="">{{me.text}}</button></twx-widget-content><twx-eventbind eventbind-id="eb-1660777909404" source-type="widget" source-label="Button" source-name="button-1" source-event="click" handler-namespace="app" handler-name="fn" handler-service="navigate" handler-path="app-fn-navigate"><twx-event-data data-name="viewname" data-value="HomePage"></twx-event-data></twx-eventbind></twx-widget></div><div class="row undefined" style=""><div class="col undefined" style="flex-direction:column;justify-content: flex-start;align-items: stretch;padding: 0px;flex-wrap: wrap;"><twx-widget widget-id="label-1" original-widget="twx-label" widget-name="label-1"><twx-widget-property name="widgetName" datatype="string" value="label-1"></twx-widget-property><twx-widget-property name="wrap" datatype="boolean" value="true"></twx-widget-property><twx-widget-property name="margin" datatype="string" value=""></twx-widget-property><twx-widget-property name="visible" datatype="boolean" value="true"></twx-widget-property><twx-widget-property name="padding" datatype="string"></twx-widget-property><twx-widget-property name="stateFormat" datatype="string"></twx-widget-property><twx-widget-property name="stateFormatValue" datatype="string" value="text"></twx-widget-property><twx-widget-property name="enableStateFormatting" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="class" datatype="string" value="choicelabel3"></twx-widget-property><twx-widget-property name="text" datatype="string" value="CXC - Room D"></twx-widget-property><twx-widget-content><div ng-show="app.fn.isTrue(me.visible)" tabindex="-1" class="labelWidget {{me.class}} wrapSettingsClass" style="" twx-native-events="">{{me.text}}</div></twx-widget-content></twx-widget></div></div><div class="row undefined" style=""><div class="col undefined" style="flex-direction:column;justify-content: flex-start;align-items: stretch;padding: 0px;flex-wrap: wrap;"><twx-widget widget-id="gauge-1" original-widget="twx-gauge" widget-name="gauge-1"><twx-widget-service name="updateChart"></twx-widget-service><twx-widget-property name="widgetName" datatype="string" value="gauge-1"></twx-widget-property><twx-widget-property name="visible" datatype="boolean" value="true"></twx-widget-property><twx-widget-property name="height" datatype="string" value="100%"></twx-widget-property><twx-widget-property name="width" datatype="string" value="100%"></twx-widget-property><twx-widget-property name="backgroundcolor" datatype="string" value="#ffffff"></twx-widget-property><twx-widget-property name="valuecolor" datatype="string" value=""></twx-widget-property><twx-widget-property name="valuefontcolor" datatype="string" value="#ffffff"></twx-widget-property><twx-widget-property name="titlefontcolor" datatype="string" value="#ffffff"></twx-widget-property><twx-widget-property name="hideinnershadow" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="donutstartangle" datatype="number" value="0"></twx-widget-property><twx-widget-property name="donut" datatype="number" value="180"></twx-widget-property><twx-widget-property name="titleposition" datatype="string" value="above"></twx-widget-property><twx-widget-property name="title" datatype="string" value="Room D Temperature (&#xB0; F)"></twx-widget-property><twx-widget-property name="humanFriendlyDecimal" datatype="number" value="0"></twx-widget-property><twx-widget-property name="value" datatype="string" value="0"></twx-widget-property><twx-widget-property name="max" datatype="string" value="100"></twx-widget-property><twx-widget-property name="min" datatype="string" value="0"></twx-widget-property><twx-widget-property name="stateFormat" datatype="string"></twx-widget-property><twx-widget-property name="stateFormatValue" datatype="string" value="value"></twx-widget-property><twx-widget-property name="enableStateFormatting" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="class" datatype="string"></twx-widget-property><twx-widget-content><div class="gage-container" style="width: 100%; height: 100%;"><just-gage ng-show="app.fn.isTrue(me.visible)" id="gauge-0333877f-a8c1-0100-a804-2007d40dbba9" class="{{me.class}}" donut="me.donut" hideinnershadow="me.hideinnershadow" donutstartangle="me.donutstartangle" titleposition="me.titleposition" valuecolor="me.valuecolor" backgroundcolor="me.backgroundcolor" valuefontcolor="me.valuefontcolor" titlefontcolor="me.titlefontcolor" max="me.max" min="me.min" value="{{me.value}}" title="Room D Temperature (&#xB0; F)" width="100%" height="100%" options="{humanFriendlyDecimal: 0, humanFriendly: undefined}"></just-gage></div></twx-widget-content></twx-widget></div></div><div class="row undefined" style=""><div class="col undefined" style="flex-direction:column;justify-content: flex-start;align-items: stretch;padding: 0px;flex-wrap: wrap;"><twx-widget widget-id="gauge-2" original-widget="twx-gauge" widget-name="gauge-2"><twx-widget-service name="updateChart"></twx-widget-service><twx-widget-property name="widgetName" datatype="string" value="gauge-2"></twx-widget-property><twx-widget-property name="visible" datatype="boolean" value="true"></twx-widget-property><twx-widget-property name="height" datatype="string" value="100%"></twx-widget-property><twx-widget-property name="width" datatype="string" value="100%"></twx-widget-property><twx-widget-property name="backgroundcolor" datatype="string" value="#ffffff"></twx-widget-property><twx-widget-property name="valuecolor" datatype="string" value=""></twx-widget-property><twx-widget-property name="valuefontcolor" datatype="string" value="#ffffff"></twx-widget-property><twx-widget-property name="titlefontcolor" datatype="string" value="#ffffff"></twx-widget-property><twx-widget-property name="hideinnershadow" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="donutstartangle" datatype="number" value="0"></twx-widget-property><twx-widget-property name="donut" datatype="number" value="180"></twx-widget-property><twx-widget-property name="titleposition" datatype="string" value="above"></twx-widget-property><twx-widget-property name="title" datatype="string" value="Room D Humidity (%)"></twx-widget-property><twx-widget-property name="humanFriendlyDecimal" datatype="number" value="0"></twx-widget-property><twx-widget-property name="value" datatype="string" value="0"></twx-widget-property><twx-widget-property name="max" datatype="string" value="100"></twx-widget-property><twx-widget-property name="min" datatype="string" value="0"></twx-widget-property><twx-widget-property name="stateFormat" datatype="string"></twx-widget-property><twx-widget-property name="stateFormatValue" datatype="string" value="value"></twx-widget-property><twx-widget-property name="enableStateFormatting" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="class" datatype="string"></twx-widget-property><twx-widget-content><div class="gage-container" style="width: 100%; height: 100%;"><just-gage ng-show="app.fn.isTrue(me.visible)" id="gauge-5a3b5c4c-a168-d25e-caf7-066359a07664" class="{{me.class}}" donut="me.donut" hideinnershadow="me.hideinnershadow" donutstartangle="me.donutstartangle" titleposition="me.titleposition" valuecolor="me.valuecolor" backgroundcolor="me.backgroundcolor" valuefontcolor="me.valuefontcolor" titlefontcolor="me.titlefontcolor" max="me.max" min="me.min" value="{{me.value}}" title="Room D Humidity (%)" width="100%" height="100%" options="{humanFriendlyDecimal: 0, humanFriendly: undefined}"></just-gage></div></twx-widget-content></twx-widget></div></div><div class="row undefined" style=""><div class="col undefined" style="flex-direction:column;justify-content: flex-start;align-items: stretch;padding: 0px;flex-wrap: wrap;"><twx-widget widget-id="gauge-3" original-widget="twx-gauge" widget-name="gauge-3"><twx-widget-service name="updateChart"></twx-widget-service><twx-widget-property name="widgetName" datatype="string" value="gauge-3"></twx-widget-property><twx-widget-property name="visible" datatype="boolean" value="true"></twx-widget-property><twx-widget-property name="height" datatype="string" value="100%"></twx-widget-property><twx-widget-property name="width" datatype="string" value="100%"></twx-widget-property><twx-widget-property name="backgroundcolor" datatype="string" value="#ffffff"></twx-widget-property><twx-widget-property name="valuecolor" datatype="string" value=""></twx-widget-property><twx-widget-property name="valuefontcolor" datatype="string" value="#ffffff"></twx-widget-property><twx-widget-property name="titlefontcolor" datatype="string" value="#ffffff"></twx-widget-property><twx-widget-property name="hideinnershadow" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="donutstartangle" datatype="number" value="0"></twx-widget-property><twx-widget-property name="donut" datatype="number" value="180"></twx-widget-property><twx-widget-property name="titleposition" datatype="string" value="above"></twx-widget-property><twx-widget-property name="title" datatype="string" value="Room D Pressure (Pa)"></twx-widget-property><twx-widget-property name="humanFriendlyDecimal" datatype="number" value="0"></twx-widget-property><twx-widget-property name="value" datatype="string" value="0"></twx-widget-property><twx-widget-property name="max" datatype="string" value="2000"></twx-widget-property><twx-widget-property name="min" datatype="string" value="0"></twx-widget-property><twx-widget-property name="stateFormat" datatype="string"></twx-widget-property><twx-widget-property name="stateFormatValue" datatype="string" value="value"></twx-widget-property><twx-widget-property name="enableStateFormatting" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="class" datatype="string"></twx-widget-property><twx-widget-content><div class="gage-container" style="width: 100%; height: 100%;"><just-gage ng-show="app.fn.isTrue(me.visible)" id="gauge-5a4b7b92-dc10-33bf-0ec1-bd11977ea88b" class="{{me.class}}" donut="me.donut" hideinnershadow="me.hideinnershadow" donutstartangle="me.donutstartangle" titleposition="me.titleposition" valuecolor="me.valuecolor" backgroundcolor="me.backgroundcolor" valuefontcolor="me.valuefontcolor" titlefontcolor="me.titlefontcolor" max="me.max" min="me.min" value="{{me.value}}" title="Room D Pressure (Pa)" width="100%" height="100%" options="{humanFriendlyDecimal: 0, humanFriendly: undefined}"></just-gage></div></twx-widget-content></twx-widget></div></div><div class="row undefined" style=""><div class="col undefined" style="flex-direction:column;justify-content: center;align-items: center;padding: 0px;flex-wrap: no-wrap;"><twx-widget widget-id="button-2" original-widget="twx-button" widget-name="button-2"><twx-widget-property name="widgetName" datatype="string" value="button-2"></twx-widget-property><twx-widget-property name="margin" datatype="string"></twx-widget-property><twx-widget-property name="disabled" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="visible" datatype="boolean" value="true"></twx-widget-property><twx-widget-property name="class" datatype="string" value="viewSigma"></twx-widget-property><twx-widget-property name="text" datatype="string" value=""></twx-widget-property><twx-widget-content><button style="" ng-show="app.fn.isTrue(me.visible)" ng-disabled="app.fn.isTrue(me.disabled)" class="button {{me.class}}" twx-native-events="">{{me.text}}</button></twx-widget-content><twx-eventbind eventbind-id="eb-1660779117172" source-type="widget" source-label="Button" source-name="button-2" source-event="click" handler-namespace="app" handler-name="fn" handler-service="navigate" handler-path="app-fn-navigate"><twx-event-data data-name="viewname" data-value="3D_Sigma_Tile"></twx-event-data></twx-eventbind></twx-widget></div></div></twx-container-content></div></twx-widget-content></twx-widget></twx-container-content></twx-widget-content><twx-fragment-parameters></twx-fragment-parameters><twx-view-data></twx-view-data></twx-widget></ion-content></ion-view>\n';
      if (twx.app.isPreview() && viewHTML.indexOf('view-type="ar"') > 0) {
        viewHTML = viewHTML.replace(/<twx-dt-modelitem /ig, '<twx-dt-modelitem ng-if="$root.thingViewReady !== false" ');
      }
      $templateCache.put('app/components/CON_D.html', viewHTML);
    
      var viewHTML =  '<ion-view hasGridEvenRows="false" view-type="mobile-2D" twx-view="CON_E" view-title="CON_E" ctrl-name="CON_E_TwxViewController" can-swipe-back="false"><div class="overlay ng-hide" ng-show=""></div><ion-content scroll="true" overflow-scroll="true" ><twx-widget widget-id="view-1" original-widget="twx-view" widget-name="view-1"><twx-widget-property name="widgetName" datatype="string" value="view-1"></twx-widget-property><twx-widget-property name="viewtype" datatype="string" value="mobile-2D"></twx-widget-property><twx-widget-property name="class" datatype="string"></twx-widget-property><twx-widget-content><twx-container-content class="{{me.class}}"><twx-widget widget-id="gridLayout-1" original-widget="twx-gridlayout" widget-name="gridLayout-1"><twx-widget-property name="widgetName" datatype="string" value="gridLayout-1"></twx-widget-property><twx-widget-property name="evenlyspacedrows" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="margin" datatype="string" value=""></twx-widget-property><twx-widget-property name="class" datatype="string"></twx-widget-property><twx-widget-property name="visible" datatype="boolean" value="true"></twx-widget-property><twx-widget-content><div ng-show="app.fn.isTrue(me.visible)" even-rows="false" class="gridLayout {{me.class}}" style="padding:;"><twx-container-content><div class="row choiceHeader" style=""><twx-widget widget-id="image-1" original-widget="twx-image2" widget-name="image-1"><twx-widget-property name="widgetName" datatype="string" value="image-1"></twx-widget-property><twx-widget-property name="padding" datatype="string" value=""></twx-widget-property><twx-widget-property name="visible" datatype="boolean" value="true"></twx-widget-property><twx-widget-property name="imageAlign" datatype="string" value="flex-start"></twx-widget-property><twx-widget-property name="height" datatype="string" value=""></twx-widget-property><twx-widget-property name="width" datatype="string" value=""></twx-widget-property><twx-widget-property name="backgroundcolor" datatype="string"></twx-widget-property><twx-widget-property name="imgsrc" datatype="resource_url" value="app/resources/Uploaded/logo.svg"></twx-widget-property><twx-widget-property name="class" datatype="string" value="logo"></twx-widget-property><twx-widget-content><div class="imgAlignContainer" style="justify-content: flex-start;"><img class="{{me.class}}" ng-show="app.fn.isTrue(me.visible)" style="background-color: {{me.backgroundcolor}}; width: {{me.width}}; height: {{me.height}};  padding: {{me.padding}}" ng-src="{{me.imgsrc}}" twx-native-events=""></div></twx-widget-content></twx-widget><twx-widget widget-id="button-1" original-widget="twx-button" widget-name="button-1"><twx-widget-property name="widgetName" datatype="string" value="button-1"></twx-widget-property><twx-widget-property name="margin" datatype="string"></twx-widget-property><twx-widget-property name="disabled" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="visible" datatype="boolean" value="true"></twx-widget-property><twx-widget-property name="class" datatype="string" value="homeHamburger"></twx-widget-property><twx-widget-property name="text" datatype="string" value=""></twx-widget-property><twx-widget-content><button style="" ng-show="app.fn.isTrue(me.visible)" ng-disabled="app.fn.isTrue(me.disabled)" class="button {{me.class}}" twx-native-events="">{{me.text}}</button></twx-widget-content><twx-eventbind eventbind-id="eb-1660778115427" source-type="widget" source-label="Button" source-name="button-1" source-event="click" handler-namespace="app" handler-name="fn" handler-service="navigate" handler-path="app-fn-navigate"><twx-event-data data-name="viewname" data-value="HomePage"></twx-event-data></twx-eventbind></twx-widget></div><div class="row undefined" style=""><div class="col undefined" style="flex-direction:column;justify-content: flex-start;align-items: stretch;padding: 0px;flex-wrap: wrap;"><twx-widget widget-id="label-1" original-widget="twx-label" widget-name="label-1"><twx-widget-property name="widgetName" datatype="string" value="label-1"></twx-widget-property><twx-widget-property name="wrap" datatype="boolean" value="true"></twx-widget-property><twx-widget-property name="margin" datatype="string" value=""></twx-widget-property><twx-widget-property name="visible" datatype="boolean" value="true"></twx-widget-property><twx-widget-property name="padding" datatype="string"></twx-widget-property><twx-widget-property name="stateFormat" datatype="string"></twx-widget-property><twx-widget-property name="stateFormatValue" datatype="string" value="text"></twx-widget-property><twx-widget-property name="enableStateFormatting" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="class" datatype="string" value="choicelabel3"></twx-widget-property><twx-widget-property name="text" datatype="string" value="CXC - Room E"></twx-widget-property><twx-widget-content><div ng-show="app.fn.isTrue(me.visible)" tabindex="-1" class="labelWidget {{me.class}} wrapSettingsClass" style="" twx-native-events="">{{me.text}}</div></twx-widget-content></twx-widget></div></div><div class="row undefined" style=""><div class="col undefined" style="flex-direction:column;justify-content: flex-start;align-items: stretch;padding: 0px;flex-wrap: wrap;"><twx-widget widget-id="gauge-2" original-widget="twx-gauge" widget-name="gauge-2"><twx-widget-service name="updateChart"></twx-widget-service><twx-widget-property name="widgetName" datatype="string" value="gauge-2"></twx-widget-property><twx-widget-property name="visible" datatype="boolean" value="true"></twx-widget-property><twx-widget-property name="height" datatype="string" value="100%"></twx-widget-property><twx-widget-property name="width" datatype="string" value="100%"></twx-widget-property><twx-widget-property name="backgroundcolor" datatype="string" value="#ffffff"></twx-widget-property><twx-widget-property name="valuecolor" datatype="string" value=""></twx-widget-property><twx-widget-property name="valuefontcolor" datatype="string" value="#ffffff"></twx-widget-property><twx-widget-property name="titlefontcolor" datatype="string" value="#ffffff"></twx-widget-property><twx-widget-property name="hideinnershadow" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="donutstartangle" datatype="number" value="0"></twx-widget-property><twx-widget-property name="donut" datatype="number" value="180"></twx-widget-property><twx-widget-property name="titleposition" datatype="string" value="above"></twx-widget-property><twx-widget-property name="title" datatype="string" value="Room E Temperature (&#xB0; F)"></twx-widget-property><twx-widget-property name="humanFriendlyDecimal" datatype="number" value="0"></twx-widget-property><twx-widget-property name="value" datatype="string" value="0"></twx-widget-property><twx-widget-property name="max" datatype="string" value="100"></twx-widget-property><twx-widget-property name="min" datatype="string" value="0"></twx-widget-property><twx-widget-property name="stateFormat" datatype="string"></twx-widget-property><twx-widget-property name="stateFormatValue" datatype="string" value="value"></twx-widget-property><twx-widget-property name="enableStateFormatting" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="class" datatype="string"></twx-widget-property><twx-widget-content><div class="gage-container" style="width: 100%; height: 100%;"><just-gage ng-show="app.fn.isTrue(me.visible)" id="gauge-1649ed1f-196c-8130-9597-253503825b1e" class="{{me.class}}" donut="me.donut" hideinnershadow="me.hideinnershadow" donutstartangle="me.donutstartangle" titleposition="me.titleposition" valuecolor="me.valuecolor" backgroundcolor="me.backgroundcolor" valuefontcolor="me.valuefontcolor" titlefontcolor="me.titlefontcolor" max="me.max" min="me.min" value="{{me.value}}" title="Room E Temperature (&#xB0; F)" width="100%" height="100%" options="{humanFriendlyDecimal: 0, humanFriendly: undefined}"></just-gage></div></twx-widget-content></twx-widget></div></div><div class="row undefined" style=""><div class="col undefined" style="flex-direction:column;justify-content: flex-start;align-items: stretch;padding: 0px;flex-wrap: wrap;"><twx-widget widget-id="gauge-3" original-widget="twx-gauge" widget-name="gauge-3"><twx-widget-service name="updateChart"></twx-widget-service><twx-widget-property name="widgetName" datatype="string" value="gauge-3"></twx-widget-property><twx-widget-property name="visible" datatype="boolean" value="true"></twx-widget-property><twx-widget-property name="height" datatype="string" value="100%"></twx-widget-property><twx-widget-property name="width" datatype="string" value="100%"></twx-widget-property><twx-widget-property name="backgroundcolor" datatype="string" value="#ffffff"></twx-widget-property><twx-widget-property name="valuecolor" datatype="string" value=""></twx-widget-property><twx-widget-property name="valuefontcolor" datatype="string" value="#ffffff"></twx-widget-property><twx-widget-property name="titlefontcolor" datatype="string" value="#ffffff"></twx-widget-property><twx-widget-property name="hideinnershadow" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="donutstartangle" datatype="number" value="0"></twx-widget-property><twx-widget-property name="donut" datatype="number" value="180"></twx-widget-property><twx-widget-property name="titleposition" datatype="string" value="above"></twx-widget-property><twx-widget-property name="title" datatype="string" value="Room E Humidity (%)"></twx-widget-property><twx-widget-property name="humanFriendlyDecimal" datatype="number" value="0"></twx-widget-property><twx-widget-property name="value" datatype="string" value="0"></twx-widget-property><twx-widget-property name="max" datatype="string" value="100"></twx-widget-property><twx-widget-property name="min" datatype="string" value="0"></twx-widget-property><twx-widget-property name="stateFormat" datatype="string"></twx-widget-property><twx-widget-property name="stateFormatValue" datatype="string" value="value"></twx-widget-property><twx-widget-property name="enableStateFormatting" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="class" datatype="string"></twx-widget-property><twx-widget-content><div class="gage-container" style="width: 100%; height: 100%;"><just-gage ng-show="app.fn.isTrue(me.visible)" id="gauge-6c03c1f4-0263-54db-57f2-8273375368c5" class="{{me.class}}" donut="me.donut" hideinnershadow="me.hideinnershadow" donutstartangle="me.donutstartangle" titleposition="me.titleposition" valuecolor="me.valuecolor" backgroundcolor="me.backgroundcolor" valuefontcolor="me.valuefontcolor" titlefontcolor="me.titlefontcolor" max="me.max" min="me.min" value="{{me.value}}" title="Room E Humidity (%)" width="100%" height="100%" options="{humanFriendlyDecimal: 0, humanFriendly: undefined}"></just-gage></div></twx-widget-content></twx-widget></div></div><div class="row undefined" style=""><div class="col undefined" style="flex-direction:column;justify-content: flex-start;align-items: stretch;padding: 0px;flex-wrap: wrap;"><twx-widget widget-id="gauge-4" original-widget="twx-gauge" widget-name="gauge-4"><twx-widget-service name="updateChart"></twx-widget-service><twx-widget-property name="widgetName" datatype="string" value="gauge-4"></twx-widget-property><twx-widget-property name="visible" datatype="boolean" value="true"></twx-widget-property><twx-widget-property name="height" datatype="string" value="100%"></twx-widget-property><twx-widget-property name="width" datatype="string" value="100%"></twx-widget-property><twx-widget-property name="backgroundcolor" datatype="string" value="#ffffff"></twx-widget-property><twx-widget-property name="valuecolor" datatype="string" value=""></twx-widget-property><twx-widget-property name="valuefontcolor" datatype="string" value="#ffffff"></twx-widget-property><twx-widget-property name="titlefontcolor" datatype="string" value="#ffffff"></twx-widget-property><twx-widget-property name="hideinnershadow" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="donutstartangle" datatype="number" value="0"></twx-widget-property><twx-widget-property name="donut" datatype="number" value="180"></twx-widget-property><twx-widget-property name="titleposition" datatype="string" value="above"></twx-widget-property><twx-widget-property name="title" datatype="string" value="Room E Pressure (Pa)"></twx-widget-property><twx-widget-property name="humanFriendlyDecimal" datatype="number" value="0"></twx-widget-property><twx-widget-property name="value" datatype="string" value="0"></twx-widget-property><twx-widget-property name="max" datatype="string" value="2000"></twx-widget-property><twx-widget-property name="min" datatype="string" value="0"></twx-widget-property><twx-widget-property name="stateFormat" datatype="string"></twx-widget-property><twx-widget-property name="stateFormatValue" datatype="string" value="value"></twx-widget-property><twx-widget-property name="enableStateFormatting" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="class" datatype="string"></twx-widget-property><twx-widget-content><div class="gage-container" style="width: 100%; height: 100%;"><just-gage ng-show="app.fn.isTrue(me.visible)" id="gauge-841cf9c9-e016-82a6-3d08-e4b2a45016f2" class="{{me.class}}" donut="me.donut" hideinnershadow="me.hideinnershadow" donutstartangle="me.donutstartangle" titleposition="me.titleposition" valuecolor="me.valuecolor" backgroundcolor="me.backgroundcolor" valuefontcolor="me.valuefontcolor" titlefontcolor="me.titlefontcolor" max="me.max" min="me.min" value="{{me.value}}" title="Room E Pressure (Pa)" width="100%" height="100%" options="{humanFriendlyDecimal: 0, humanFriendly: undefined}"></just-gage></div></twx-widget-content></twx-widget></div></div><div class="row undefined" style=""><div class="col undefined" style="flex-direction:column;justify-content: center;align-items: center;padding: 0px;flex-wrap: wrap;"><twx-widget widget-id="button-2" original-widget="twx-button" widget-name="button-2"><twx-widget-property name="widgetName" datatype="string" value="button-2"></twx-widget-property><twx-widget-property name="margin" datatype="string"></twx-widget-property><twx-widget-property name="disabled" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="visible" datatype="boolean" value="true"></twx-widget-property><twx-widget-property name="class" datatype="string" value="viewSigma"></twx-widget-property><twx-widget-property name="text" datatype="string" value=""></twx-widget-property><twx-widget-content><button style="" ng-show="app.fn.isTrue(me.visible)" ng-disabled="app.fn.isTrue(me.disabled)" class="button {{me.class}}" twx-native-events="">{{me.text}}</button></twx-widget-content><twx-eventbind eventbind-id="eb-1660779108155" source-type="widget" source-label="Button" source-name="button-2" source-event="click" handler-namespace="app" handler-name="fn" handler-service="navigate" handler-path="app-fn-navigate"><twx-event-data data-name="viewname" data-value="3D_Sigma_Tile"></twx-event-data></twx-eventbind></twx-widget></div></div></twx-container-content></div></twx-widget-content></twx-widget></twx-container-content></twx-widget-content><twx-fragment-parameters></twx-fragment-parameters><twx-view-data></twx-view-data></twx-widget></ion-content></ion-view>\n';
      if (twx.app.isPreview() && viewHTML.indexOf('view-type="ar"') > 0) {
        viewHTML = viewHTML.replace(/<twx-dt-modelitem /ig, '<twx-dt-modelitem ng-if="$root.thingViewReady !== false" ');
      }
      $templateCache.put('app/components/CON_E.html', viewHTML);
    
      var viewHTML =  '<ion-view hasGridEvenRows="false" view-type="mobile-2D" twx-view="CXC_WS" view-title="CXC_WS" ctrl-name="CXC_WS_TwxViewController" can-swipe-back="false"><div class="overlay ng-hide" ng-show=""></div><ion-content scroll="true" overflow-scroll="true" ><twx-widget widget-id="view-1" original-widget="twx-view" widget-name="view-1"><twx-widget-property name="widgetName" datatype="string" value="view-1"></twx-widget-property><twx-widget-property name="viewtype" datatype="string" value="mobile-2D"></twx-widget-property><twx-widget-property name="class" datatype="string"></twx-widget-property><twx-widget-content><twx-container-content class="{{me.class}}"><twx-widget widget-id="gridLayout-1" original-widget="twx-gridlayout" widget-name="gridLayout-1"><twx-widget-property name="widgetName" datatype="string" value="gridLayout-1"></twx-widget-property><twx-widget-property name="evenlyspacedrows" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="margin" datatype="string" value=""></twx-widget-property><twx-widget-property name="class" datatype="string"></twx-widget-property><twx-widget-property name="visible" datatype="boolean" value="true"></twx-widget-property><twx-widget-content><div ng-show="app.fn.isTrue(me.visible)" even-rows="false" class="gridLayout {{me.class}}" style="padding:;"><twx-container-content><div class="row undefined" style=""></div><div class="row undefined" style=""><div class="col choiceHeader" style="flex-direction:column;justify-content: flex-start;align-items: stretch;padding: 0px;flex-wrap: wrap;"><twx-widget widget-id="image-1" original-widget="twx-image2" widget-name="image-1"><twx-widget-property name="widgetName" datatype="string" value="image-1"></twx-widget-property><twx-widget-property name="padding" datatype="string" value=""></twx-widget-property><twx-widget-property name="visible" datatype="boolean" value="true"></twx-widget-property><twx-widget-property name="imageAlign" datatype="string" value="flex-start"></twx-widget-property><twx-widget-property name="height" datatype="string" value=""></twx-widget-property><twx-widget-property name="width" datatype="string" value=""></twx-widget-property><twx-widget-property name="backgroundcolor" datatype="string"></twx-widget-property><twx-widget-property name="imgsrc" datatype="resource_url" value="app/resources/Uploaded/logo.svg"></twx-widget-property><twx-widget-property name="class" datatype="string" value="logo"></twx-widget-property><twx-widget-content><div class="imgAlignContainer" style="justify-content: flex-start;"><img class="{{me.class}}" ng-show="app.fn.isTrue(me.visible)" style="background-color: {{me.backgroundcolor}}; width: {{me.width}}; height: {{me.height}};  padding: {{me.padding}}" ng-src="{{me.imgsrc}}" twx-native-events=""></div></twx-widget-content></twx-widget><twx-widget widget-id="button-1" original-widget="twx-button" widget-name="button-1"><twx-widget-property name="widgetName" datatype="string" value="button-1"></twx-widget-property><twx-widget-property name="margin" datatype="string"></twx-widget-property><twx-widget-property name="disabled" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="visible" datatype="boolean" value="true"></twx-widget-property><twx-widget-property name="class" datatype="string" value="homeHamburger"></twx-widget-property><twx-widget-property name="text" datatype="string" value=""></twx-widget-property><twx-widget-content><button style="" ng-show="app.fn.isTrue(me.visible)" ng-disabled="app.fn.isTrue(me.disabled)" class="button {{me.class}}" twx-native-events="">{{me.text}}</button></twx-widget-content><twx-eventbind eventbind-id="eb-1660778283243" source-type="widget" source-label="Button" source-name="button-1" source-event="click" handler-namespace="app" handler-name="fn" handler-service="navigate" handler-path="app-fn-navigate"><twx-event-data data-name="viewname" data-value="HomePage"></twx-event-data></twx-eventbind></twx-widget></div></div><div class="row undefined" style=""><div class="col undefined" style="flex-direction:column;justify-content: flex-start;align-items: stretch;padding: 0px;flex-wrap: wrap;"><twx-widget widget-id="label-1" original-widget="twx-label" widget-name="label-1"><twx-widget-property name="widgetName" datatype="string" value="label-1"></twx-widget-property><twx-widget-property name="wrap" datatype="boolean" value="true"></twx-widget-property><twx-widget-property name="margin" datatype="string" value=""></twx-widget-property><twx-widget-property name="visible" datatype="boolean" value="true"></twx-widget-property><twx-widget-property name="padding" datatype="string"></twx-widget-property><twx-widget-property name="stateFormat" datatype="string"></twx-widget-property><twx-widget-property name="stateFormatValue" datatype="string" value="text"></twx-widget-property><twx-widget-property name="enableStateFormatting" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="class" datatype="string" value="choicelabel3"></twx-widget-property><twx-widget-property name="text" datatype="string" value="CXC - Team Workspace"></twx-widget-property><twx-widget-content><div ng-show="app.fn.isTrue(me.visible)" tabindex="-1" class="labelWidget {{me.class}} wrapSettingsClass" style="" twx-native-events="">{{me.text}}</div></twx-widget-content></twx-widget></div></div><div class="row undefined" style=""><div class="col undefined" style="flex-direction:column;justify-content: flex-start;align-items: stretch;padding: 0px;flex-wrap: wrap;"><twx-widget widget-id="gauge-3" original-widget="twx-gauge" widget-name="gauge-3"><twx-widget-service name="updateChart"></twx-widget-service><twx-widget-property name="widgetName" datatype="string" value="gauge-3"></twx-widget-property><twx-widget-property name="visible" datatype="boolean" value="true"></twx-widget-property><twx-widget-property name="height" datatype="string" value="100%"></twx-widget-property><twx-widget-property name="width" datatype="string" value="100%"></twx-widget-property><twx-widget-property name="backgroundcolor" datatype="string" value="#ffffff"></twx-widget-property><twx-widget-property name="valuecolor" datatype="string" value=""></twx-widget-property><twx-widget-property name="valuefontcolor" datatype="string" value="#ffffff"></twx-widget-property><twx-widget-property name="titlefontcolor" datatype="string" value="#ffffff"></twx-widget-property><twx-widget-property name="hideinnershadow" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="donutstartangle" datatype="number" value="0"></twx-widget-property><twx-widget-property name="donut" datatype="number" value="180"></twx-widget-property><twx-widget-property name="titleposition" datatype="string" value="above"></twx-widget-property><twx-widget-property name="title" datatype="string" value="WS Temperature (&#xB0; F)"></twx-widget-property><twx-widget-property name="humanFriendlyDecimal" datatype="number" value="0"></twx-widget-property><twx-widget-property name="value" datatype="string" value="0"></twx-widget-property><twx-widget-property name="max" datatype="string" value="100"></twx-widget-property><twx-widget-property name="min" datatype="string" value="0"></twx-widget-property><twx-widget-property name="stateFormat" datatype="string"></twx-widget-property><twx-widget-property name="stateFormatValue" datatype="string" value="value"></twx-widget-property><twx-widget-property name="enableStateFormatting" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="class" datatype="string"></twx-widget-property><twx-widget-content><div class="gage-container" style="width: 100%; height: 100%;"><just-gage ng-show="app.fn.isTrue(me.visible)" id="gauge-ed98fee9-63dd-3c54-2527-3356be57d1f1" class="{{me.class}}" donut="me.donut" hideinnershadow="me.hideinnershadow" donutstartangle="me.donutstartangle" titleposition="me.titleposition" valuecolor="me.valuecolor" backgroundcolor="me.backgroundcolor" valuefontcolor="me.valuefontcolor" titlefontcolor="me.titlefontcolor" max="me.max" min="me.min" value="{{me.value}}" title="WS Temperature (&#xB0; F)" width="100%" height="100%" options="{humanFriendlyDecimal: 0, humanFriendly: undefined}"></just-gage></div></twx-widget-content><twx-databind databind-id="db-1661212358619" source-type="data" source-name="WS_Temperature" source-item-type="property" source-item-name="Channel3_Device3_Temperature" binding-type="property_field" from-expression="app.mdl[&apos;WS_Temperature&apos;].properties[&apos;Channel3_Device3_Temperature&apos;]" to-property="value"></twx-databind></twx-widget></div></div><div class="row undefined" style=""><div class="col undefined" style="flex-direction:column;justify-content: flex-start;align-items: stretch;padding: 0px;flex-wrap: wrap;"><twx-widget widget-id="gauge-2" original-widget="twx-gauge" widget-name="gauge-2"><twx-widget-service name="updateChart"></twx-widget-service><twx-widget-property name="widgetName" datatype="string" value="gauge-2"></twx-widget-property><twx-widget-property name="visible" datatype="boolean" value="true"></twx-widget-property><twx-widget-property name="height" datatype="string" value="100%"></twx-widget-property><twx-widget-property name="width" datatype="string" value="100%"></twx-widget-property><twx-widget-property name="backgroundcolor" datatype="string" value="#ffffff"></twx-widget-property><twx-widget-property name="valuecolor" datatype="string" value=""></twx-widget-property><twx-widget-property name="valuefontcolor" datatype="string" value="#ffffff"></twx-widget-property><twx-widget-property name="titlefontcolor" datatype="string" value="#ffffff"></twx-widget-property><twx-widget-property name="hideinnershadow" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="donutstartangle" datatype="number" value="0"></twx-widget-property><twx-widget-property name="donut" datatype="number" value="180"></twx-widget-property><twx-widget-property name="titleposition" datatype="string" value="above"></twx-widget-property><twx-widget-property name="title" datatype="string" value="WS Humidity (%)"></twx-widget-property><twx-widget-property name="humanFriendlyDecimal" datatype="number" value="0"></twx-widget-property><twx-widget-property name="value" datatype="string" value="0"></twx-widget-property><twx-widget-property name="max" datatype="string" value="100"></twx-widget-property><twx-widget-property name="min" datatype="string" value="0"></twx-widget-property><twx-widget-property name="stateFormat" datatype="string"></twx-widget-property><twx-widget-property name="stateFormatValue" datatype="string" value="value"></twx-widget-property><twx-widget-property name="enableStateFormatting" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="class" datatype="string"></twx-widget-property><twx-widget-content><div class="gage-container" style="width: 100%; height: 100%;"><just-gage ng-show="app.fn.isTrue(me.visible)" id="gauge-bc8c924f-a028-6f45-3e4d-b2454f66c7a2" class="{{me.class}}" donut="me.donut" hideinnershadow="me.hideinnershadow" donutstartangle="me.donutstartangle" titleposition="me.titleposition" valuecolor="me.valuecolor" backgroundcolor="me.backgroundcolor" valuefontcolor="me.valuefontcolor" titlefontcolor="me.titlefontcolor" max="me.max" min="me.min" value="{{me.value}}" title="WS Humidity (%)" width="100%" height="100%" options="{humanFriendlyDecimal: 0, humanFriendly: undefined}"></just-gage></div></twx-widget-content><twx-databind databind-id="db-1661212368132" source-type="data" source-name="XR_Humidity" source-item-type="property" source-item-name="Channel2_Device2_Humidity" binding-type="property_field" from-expression="app.mdl[&apos;XR_Humidity&apos;].properties[&apos;Channel2_Device2_Humidity&apos;]" to-property="value"></twx-databind></twx-widget></div></div><div class="row undefined" style=""><div class="col undefined" style="flex-direction:column;justify-content: flex-start;align-items: stretch;padding: 0px;flex-wrap: wrap;"><twx-widget widget-id="gauge-1" original-widget="twx-gauge" widget-name="gauge-1"><twx-widget-service name="updateChart"></twx-widget-service><twx-widget-property name="widgetName" datatype="string" value="gauge-1"></twx-widget-property><twx-widget-property name="visible" datatype="boolean" value="true"></twx-widget-property><twx-widget-property name="height" datatype="string" value="100%"></twx-widget-property><twx-widget-property name="width" datatype="string" value="100%"></twx-widget-property><twx-widget-property name="backgroundcolor" datatype="string" value="#ffffff"></twx-widget-property><twx-widget-property name="valuecolor" datatype="string" value=""></twx-widget-property><twx-widget-property name="valuefontcolor" datatype="string" value="#ffffff"></twx-widget-property><twx-widget-property name="titlefontcolor" datatype="string" value="#ffffff"></twx-widget-property><twx-widget-property name="hideinnershadow" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="donutstartangle" datatype="number" value="0"></twx-widget-property><twx-widget-property name="donut" datatype="number" value="180"></twx-widget-property><twx-widget-property name="titleposition" datatype="string" value="above"></twx-widget-property><twx-widget-property name="title" datatype="string" value="WS Pressure (Pa)"></twx-widget-property><twx-widget-property name="humanFriendlyDecimal" datatype="number" value="0"></twx-widget-property><twx-widget-property name="value" datatype="string" value="0"></twx-widget-property><twx-widget-property name="max" datatype="string" value="2000"></twx-widget-property><twx-widget-property name="min" datatype="string" value="0"></twx-widget-property><twx-widget-property name="stateFormat" datatype="string"></twx-widget-property><twx-widget-property name="stateFormatValue" datatype="string" value="value"></twx-widget-property><twx-widget-property name="enableStateFormatting" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="class" datatype="string"></twx-widget-property><twx-widget-content><div class="gage-container" style="width: 100%; height: 100%;"><just-gage ng-show="app.fn.isTrue(me.visible)" id="gauge-dbd01955-d09d-3088-d573-29bc5ae062be" class="{{me.class}}" donut="me.donut" hideinnershadow="me.hideinnershadow" donutstartangle="me.donutstartangle" titleposition="me.titleposition" valuecolor="me.valuecolor" backgroundcolor="me.backgroundcolor" valuefontcolor="me.valuefontcolor" titlefontcolor="me.titlefontcolor" max="me.max" min="me.min" value="{{me.value}}" title="WS Pressure (Pa)" width="100%" height="100%" options="{humanFriendlyDecimal: 0, humanFriendly: undefined}"></just-gage></div></twx-widget-content><twx-databind databind-id="db-1661212375518" source-type="data" source-name="WS_Pressure" source-item-type="property" source-item-name="Channel3_Device3_Pressure" binding-type="property_field" from-expression="app.mdl[&apos;WS_Pressure&apos;].properties[&apos;Channel3_Device3_Pressure&apos;]" to-property="value"></twx-databind></twx-widget></div></div><div class="row undefined" style=""><div class="col undefined" style="flex-direction:column;justify-content: center;align-items: center;padding: 0px;flex-wrap: no-wrap;"><twx-widget widget-id="button-3" original-widget="twx-button" widget-name="button-3"><twx-widget-property name="widgetName" datatype="string" value="button-3"></twx-widget-property><twx-widget-property name="margin" datatype="string"></twx-widget-property><twx-widget-property name="disabled" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="visible" datatype="boolean" value="true"></twx-widget-property><twx-widget-property name="class" datatype="string" value="viewSigma"></twx-widget-property><twx-widget-property name="text" datatype="string" value=""></twx-widget-property><twx-widget-content><button style="" ng-show="app.fn.isTrue(me.visible)" ng-disabled="app.fn.isTrue(me.disabled)" class="button {{me.class}}" twx-native-events="">{{me.text}}</button></twx-widget-content><twx-eventbind eventbind-id="eb-1661212662963" source-type="widget" source-label="Button" source-name="button-3" source-event="click" handler-namespace="app" handler-name="fn" handler-service="navigate" handler-path="app-fn-navigate"><twx-event-data data-name="viewname" data-value="3D_CXC_WS"></twx-event-data></twx-eventbind></twx-widget></div></div></twx-container-content></div></twx-widget-content></twx-widget></twx-container-content></twx-widget-content><twx-fragment-parameters></twx-fragment-parameters><twx-view-data></twx-view-data></twx-widget></ion-content></ion-view>\n';
      if (twx.app.isPreview() && viewHTML.indexOf('view-type="ar"') > 0) {
        viewHTML = viewHTML.replace(/<twx-dt-modelitem /ig, '<twx-dt-modelitem ng-if="$root.thingViewReady !== false" ');
      }
      $templateCache.put('app/components/CXC_WS.html', viewHTML);
    
      var viewHTML =  '<ion-view hasGridEvenRows="false" view-type="mobile-2D" twx-view="XR" view-title="XR" ctrl-name="XR_TwxViewController" can-swipe-back="false"><div class="overlay ng-hide" ng-show=""></div><ion-content scroll="true" overflow-scroll="true" ><twx-widget widget-id="view-1" original-widget="twx-view" widget-name="view-1"><twx-widget-property name="widgetName" datatype="string" value="view-1"></twx-widget-property><twx-widget-property name="viewtype" datatype="string" value="mobile-2D"></twx-widget-property><twx-widget-property name="class" datatype="string"></twx-widget-property><twx-widget-content><twx-container-content class="{{me.class}}"><twx-widget widget-id="gridLayout-1" original-widget="twx-gridlayout" widget-name="gridLayout-1"><twx-widget-property name="widgetName" datatype="string" value="gridLayout-1"></twx-widget-property><twx-widget-property name="evenlyspacedrows" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="margin" datatype="string" value=""></twx-widget-property><twx-widget-property name="class" datatype="string"></twx-widget-property><twx-widget-property name="visible" datatype="boolean" value="true"></twx-widget-property><twx-widget-content><div ng-show="app.fn.isTrue(me.visible)" even-rows="false" class="gridLayout {{me.class}}" style="padding:;"><twx-container-content><div class="row choiceHeader" style=""><twx-widget widget-id="image-1" original-widget="twx-image2" widget-name="image-1"><twx-widget-property name="widgetName" datatype="string" value="image-1"></twx-widget-property><twx-widget-property name="padding" datatype="string" value=""></twx-widget-property><twx-widget-property name="visible" datatype="boolean" value="true"></twx-widget-property><twx-widget-property name="imageAlign" datatype="string" value="flex-start"></twx-widget-property><twx-widget-property name="height" datatype="string" value=""></twx-widget-property><twx-widget-property name="width" datatype="string" value=""></twx-widget-property><twx-widget-property name="backgroundcolor" datatype="string"></twx-widget-property><twx-widget-property name="imgsrc" datatype="resource_url" value="app/resources/Uploaded/logo.svg"></twx-widget-property><twx-widget-property name="class" datatype="string"></twx-widget-property><twx-widget-content><div class="imgAlignContainer" style="justify-content: flex-start;"><img class="{{me.class}}" ng-show="app.fn.isTrue(me.visible)" style="background-color: {{me.backgroundcolor}}; width: {{me.width}}; height: {{me.height}};  padding: {{me.padding}}" ng-src="{{me.imgsrc}}" twx-native-events=""></div></twx-widget-content></twx-widget><twx-widget widget-id="image-2" original-widget="twx-image2" widget-name="image-2"><twx-widget-property name="widgetName" datatype="string" value="image-2"></twx-widget-property><twx-widget-property name="padding" datatype="string" value=""></twx-widget-property><twx-widget-property name="visible" datatype="boolean" value="true"></twx-widget-property><twx-widget-property name="imageAlign" datatype="string" value="flex-start"></twx-widget-property><twx-widget-property name="height" datatype="string" value=""></twx-widget-property><twx-widget-property name="width" datatype="string" value=""></twx-widget-property><twx-widget-property name="backgroundcolor" datatype="string"></twx-widget-property><twx-widget-property name="imgsrc" datatype="resource_url" value="app/resources/Uploaded/logo.svg"></twx-widget-property><twx-widget-property name="class" datatype="string" value="logo"></twx-widget-property><twx-widget-content><div class="imgAlignContainer" style="justify-content: flex-start;"><img class="{{me.class}}" ng-show="app.fn.isTrue(me.visible)" style="background-color: {{me.backgroundcolor}}; width: {{me.width}}; height: {{me.height}};  padding: {{me.padding}}" ng-src="{{me.imgsrc}}" twx-native-events=""></div></twx-widget-content></twx-widget><twx-widget widget-id="button-1" original-widget="twx-button" widget-name="button-1"><twx-widget-property name="widgetName" datatype="string" value="button-1"></twx-widget-property><twx-widget-property name="margin" datatype="string"></twx-widget-property><twx-widget-property name="disabled" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="visible" datatype="boolean" value="true"></twx-widget-property><twx-widget-property name="class" datatype="string" value="homeHamburger"></twx-widget-property><twx-widget-property name="text" datatype="string" value=""></twx-widget-property><twx-widget-content><button style="" ng-show="app.fn.isTrue(me.visible)" ng-disabled="app.fn.isTrue(me.disabled)" class="button {{me.class}}" twx-native-events="">{{me.text}}</button></twx-widget-content><twx-eventbind eventbind-id="eb-1660778329135" source-type="widget" source-label="Button" source-name="button-1" source-event="click" handler-namespace="app" handler-name="fn" handler-service="navigate" handler-path="app-fn-navigate"><twx-event-data data-name="viewname" data-value="HomePage"></twx-event-data></twx-eventbind></twx-widget></div><div class="row undefined" style=""><div class="col undefined" style="flex-direction:column;justify-content: flex-start;align-items: stretch;padding: 0px;flex-wrap: wrap;"><twx-widget widget-id="label-1" original-widget="twx-label" widget-name="label-1"><twx-widget-property name="widgetName" datatype="string" value="label-1"></twx-widget-property><twx-widget-property name="wrap" datatype="boolean" value="true"></twx-widget-property><twx-widget-property name="margin" datatype="string" value=""></twx-widget-property><twx-widget-property name="visible" datatype="boolean" value="true"></twx-widget-property><twx-widget-property name="padding" datatype="string"></twx-widget-property><twx-widget-property name="stateFormat" datatype="string"></twx-widget-property><twx-widget-property name="stateFormatValue" datatype="string" value="text"></twx-widget-property><twx-widget-property name="enableStateFormatting" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="class" datatype="string" value="choicelabel3"></twx-widget-property><twx-widget-property name="text" datatype="string" value="CXC - XR Wall"></twx-widget-property><twx-widget-content><div ng-show="app.fn.isTrue(me.visible)" tabindex="-1" class="labelWidget {{me.class}} wrapSettingsClass" style="" twx-native-events="">{{me.text}}</div></twx-widget-content></twx-widget></div></div><div class="row undefined" style=""><div class="col undefined" style="flex-direction:column;justify-content: flex-start;align-items: stretch;padding: 0px;flex-wrap: wrap;"><twx-widget widget-id="gauge-1" original-widget="twx-gauge" widget-name="gauge-1"><twx-widget-service name="updateChart"></twx-widget-service><twx-widget-property name="widgetName" datatype="string" value="gauge-1"></twx-widget-property><twx-widget-property name="visible" datatype="boolean" value="true"></twx-widget-property><twx-widget-property name="height" datatype="string" value="100%"></twx-widget-property><twx-widget-property name="width" datatype="string" value="100%"></twx-widget-property><twx-widget-property name="backgroundcolor" datatype="string" value="#ffffff"></twx-widget-property><twx-widget-property name="valuecolor" datatype="string" value=""></twx-widget-property><twx-widget-property name="valuefontcolor" datatype="string" value="#ffffff"></twx-widget-property><twx-widget-property name="titlefontcolor" datatype="string" value="#ffffff"></twx-widget-property><twx-widget-property name="hideinnershadow" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="donutstartangle" datatype="number" value="0"></twx-widget-property><twx-widget-property name="donut" datatype="number" value="180"></twx-widget-property><twx-widget-property name="titleposition" datatype="string" value="above"></twx-widget-property><twx-widget-property name="title" datatype="string" value="XR Wall Temperature (&#xB0; F)"></twx-widget-property><twx-widget-property name="humanFriendlyDecimal" datatype="number" value="0"></twx-widget-property><twx-widget-property name="value" datatype="string" value="0"></twx-widget-property><twx-widget-property name="max" datatype="string" value="100"></twx-widget-property><twx-widget-property name="min" datatype="string" value="0"></twx-widget-property><twx-widget-property name="stateFormat" datatype="string"></twx-widget-property><twx-widget-property name="stateFormatValue" datatype="string" value="value"></twx-widget-property><twx-widget-property name="enableStateFormatting" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="class" datatype="string"></twx-widget-property><twx-widget-content><div class="gage-container" style="width: 100%; height: 100%;"><just-gage ng-show="app.fn.isTrue(me.visible)" id="gauge-3c894b66-a8a4-759d-2b74-637e56aa5f4b" class="{{me.class}}" donut="me.donut" hideinnershadow="me.hideinnershadow" donutstartangle="me.donutstartangle" titleposition="me.titleposition" valuecolor="me.valuecolor" backgroundcolor="me.backgroundcolor" valuefontcolor="me.valuefontcolor" titlefontcolor="me.titlefontcolor" max="me.max" min="me.min" value="{{me.value}}" title="XR Wall Temperature (&#xB0; F)" width="100%" height="100%" options="{humanFriendlyDecimal: 0, humanFriendly: undefined}"></just-gage></div></twx-widget-content><twx-databind databind-id="db-1660780708991" source-type="data" source-name="XR_Temperature" source-item-type="property" source-item-name="Channel2_Device2_Temperature" binding-type="property_field" from-expression="app.mdl[&apos;XR_Temperature&apos;].properties[&apos;Channel2_Device2_Temperature&apos;]" to-property="value"></twx-databind></twx-widget></div></div><div class="row undefined" style=""><div class="col undefined" style="flex-direction:column;justify-content: flex-start;align-items: stretch;padding: 0px;flex-wrap: wrap;"><twx-widget widget-id="gauge-2" original-widget="twx-gauge" widget-name="gauge-2"><twx-widget-service name="updateChart"></twx-widget-service><twx-widget-property name="widgetName" datatype="string" value="gauge-2"></twx-widget-property><twx-widget-property name="visible" datatype="boolean" value="true"></twx-widget-property><twx-widget-property name="height" datatype="string" value="100%"></twx-widget-property><twx-widget-property name="width" datatype="string" value="100%"></twx-widget-property><twx-widget-property name="backgroundcolor" datatype="string" value="#ffffff"></twx-widget-property><twx-widget-property name="valuecolor" datatype="string" value=""></twx-widget-property><twx-widget-property name="valuefontcolor" datatype="string" value="#ffffff"></twx-widget-property><twx-widget-property name="titlefontcolor" datatype="string" value="#ffffff"></twx-widget-property><twx-widget-property name="hideinnershadow" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="donutstartangle" datatype="number" value="0"></twx-widget-property><twx-widget-property name="donut" datatype="number" value="180"></twx-widget-property><twx-widget-property name="titleposition" datatype="string" value="above"></twx-widget-property><twx-widget-property name="title" datatype="string" value="XR Wall Humidity (%)"></twx-widget-property><twx-widget-property name="humanFriendlyDecimal" datatype="number" value="0"></twx-widget-property><twx-widget-property name="value" datatype="string" value="0"></twx-widget-property><twx-widget-property name="max" datatype="string" value="100"></twx-widget-property><twx-widget-property name="min" datatype="string" value="0"></twx-widget-property><twx-widget-property name="stateFormat" datatype="string"></twx-widget-property><twx-widget-property name="stateFormatValue" datatype="string" value="value"></twx-widget-property><twx-widget-property name="enableStateFormatting" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="class" datatype="string"></twx-widget-property><twx-widget-content><div class="gage-container" style="width: 100%; height: 100%;"><just-gage ng-show="app.fn.isTrue(me.visible)" id="gauge-4a074b5a-3551-be53-5ad4-5e4b881d5fcf" class="{{me.class}}" donut="me.donut" hideinnershadow="me.hideinnershadow" donutstartangle="me.donutstartangle" titleposition="me.titleposition" valuecolor="me.valuecolor" backgroundcolor="me.backgroundcolor" valuefontcolor="me.valuefontcolor" titlefontcolor="me.titlefontcolor" max="me.max" min="me.min" value="{{me.value}}" title="XR Wall Humidity (%)" width="100%" height="100%" options="{humanFriendlyDecimal: 0, humanFriendly: undefined}"></just-gage></div></twx-widget-content><twx-databind databind-id="db-1660780717698" source-type="data" source-name="XR_Humidity" source-item-type="property" source-item-name="Channel2_Device2_Humidity" binding-type="property_field" from-expression="app.mdl[&apos;XR_Humidity&apos;].properties[&apos;Channel2_Device2_Humidity&apos;]" to-property="value"></twx-databind></twx-widget></div></div><div class="row undefined" style=""><div class="col undefined" style="flex-direction:column;justify-content: flex-start;align-items: stretch;padding: 0px;flex-wrap: wrap;"><twx-widget widget-id="gauge-3" original-widget="twx-gauge" widget-name="gauge-3"><twx-widget-service name="updateChart"></twx-widget-service><twx-widget-property name="widgetName" datatype="string" value="gauge-3"></twx-widget-property><twx-widget-property name="visible" datatype="boolean" value="true"></twx-widget-property><twx-widget-property name="height" datatype="string" value="100%"></twx-widget-property><twx-widget-property name="width" datatype="string" value="100%"></twx-widget-property><twx-widget-property name="backgroundcolor" datatype="string" value="#ffffff"></twx-widget-property><twx-widget-property name="valuecolor" datatype="string" value=""></twx-widget-property><twx-widget-property name="valuefontcolor" datatype="string" value="#ffffff"></twx-widget-property><twx-widget-property name="titlefontcolor" datatype="string" value="#ffffff"></twx-widget-property><twx-widget-property name="hideinnershadow" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="donutstartangle" datatype="number" value="0"></twx-widget-property><twx-widget-property name="donut" datatype="number" value="180"></twx-widget-property><twx-widget-property name="titleposition" datatype="string" value="above"></twx-widget-property><twx-widget-property name="title" datatype="string" value="XR Wall Pressure (Pa)"></twx-widget-property><twx-widget-property name="humanFriendlyDecimal" datatype="number" value="0"></twx-widget-property><twx-widget-property name="value" datatype="string" value="0"></twx-widget-property><twx-widget-property name="max" datatype="string" value="2000"></twx-widget-property><twx-widget-property name="min" datatype="string" value="0"></twx-widget-property><twx-widget-property name="stateFormat" datatype="string"></twx-widget-property><twx-widget-property name="stateFormatValue" datatype="string" value="value"></twx-widget-property><twx-widget-property name="enableStateFormatting" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="class" datatype="string"></twx-widget-property><twx-widget-content><div class="gage-container" style="width: 100%; height: 100%;"><just-gage ng-show="app.fn.isTrue(me.visible)" id="gauge-6c16ef7d-16ee-fbe5-7443-b01d026a00c1" class="{{me.class}}" donut="me.donut" hideinnershadow="me.hideinnershadow" donutstartangle="me.donutstartangle" titleposition="me.titleposition" valuecolor="me.valuecolor" backgroundcolor="me.backgroundcolor" valuefontcolor="me.valuefontcolor" titlefontcolor="me.titlefontcolor" max="me.max" min="me.min" value="{{me.value}}" title="XR Wall Pressure (Pa)" width="100%" height="100%" options="{humanFriendlyDecimal: 0, humanFriendly: undefined}"></just-gage></div></twx-widget-content><twx-databind databind-id="db-1660780703236" source-type="data" source-name="XR_Pressure" source-item-type="property" source-item-name="Channel2_Device2_Pressure" binding-type="property_field" from-expression="app.mdl[&apos;XR_Pressure&apos;].properties[&apos;Channel2_Device2_Pressure&apos;]" to-property="value"></twx-databind></twx-widget></div></div><div class="row undefined" style=""><div class="col undefined" style="flex-direction:column;justify-content: center;align-items: center;padding: 0px;flex-wrap: no-wrap;"><twx-widget widget-id="button-2" original-widget="twx-button" widget-name="button-2"><twx-widget-property name="widgetName" datatype="string" value="button-2"></twx-widget-property><twx-widget-property name="margin" datatype="string"></twx-widget-property><twx-widget-property name="disabled" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="visible" datatype="boolean" value="true"></twx-widget-property><twx-widget-property name="class" datatype="string" value="viewSigma"></twx-widget-property><twx-widget-property name="text" datatype="string" value=""></twx-widget-property><twx-widget-content><button style="" ng-show="app.fn.isTrue(me.visible)" ng-disabled="app.fn.isTrue(me.disabled)" class="button {{me.class}}" twx-native-events="">{{me.text}}</button></twx-widget-content><twx-eventbind eventbind-id="eb-1661370079380" source-type="widget" source-label="Button" source-name="button-2" source-event="click" handler-namespace="app" handler-name="fn" handler-service="navigate" handler-path="app-fn-navigate"><twx-event-data data-name="viewname" data-value="3D_XR"></twx-event-data></twx-eventbind></twx-widget></div></div></twx-container-content></div></twx-widget-content></twx-widget></twx-container-content></twx-widget-content><twx-fragment-parameters></twx-fragment-parameters><twx-view-data></twx-view-data></twx-widget></ion-content></ion-view>\n';
      if (twx.app.isPreview() && viewHTML.indexOf('view-type="ar"') > 0) {
        viewHTML = viewHTML.replace(/<twx-dt-modelitem /ig, '<twx-dt-modelitem ng-if="$root.thingViewReady !== false" ');
      }
      $templateCache.put('app/components/XR.html', viewHTML);
    
      var viewHTML =  '<ion-view hasGridEvenRows="false" view-type="ar" twx-view="3D_CON_AB" view-title="3D_CON_AB" ctrl-name="3D_CON_AB_TwxViewController" can-swipe-back="false"><div class="overlay ng-hide" ng-show=""></div><ion-content scroll="false" overflow-scroll="true" ><twx-widget widget-id="view-1" original-widget="twx-view" widget-name="view-1"><twx-widget-property name="widgetName" datatype="string" value="view-1"></twx-widget-property><twx-widget-property name="viewtype" datatype="string" value="ar"></twx-widget-property><twx-widget-property name="class" datatype="string"></twx-widget-property><twx-widget-content><twx-container-content class="{{me.class}}"><twx-widget widget-id="3DContainer-1" original-widget="twx-dt-view" widget-name="3D Container"><twx-widget-service name="unlockCameraAndOrientation"></twx-widget-service><twx-widget-service name="lockCameraAndOrientation"></twx-widget-service><twx-widget-property name="widgetName" datatype="string" value="3D Container"></twx-widget-property><twx-widget-property name="far" datatype="number" value="200"></twx-widget-property><twx-widget-property name="near" datatype="number" value="0.01"></twx-widget-property><twx-widget-property name="dropshadow" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="enabletrackingevents" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="camera" datatype="json" value="{}"></twx-widget-property><twx-widget-property name="persistmap" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="src" datatype="string" value="TW-VuMark.xml"></twx-widget-property><twx-widget-property name="extendedtracking" datatype="boolean" value="true"></twx-widget-property><twx-widget-property name="visible" datatype="boolean" value="true"></twx-widget-property><twx-widget-content><twx-dt-view near="0.01" far="200" extendedtracking="true" persistmap="false" dropshadow="{{me.dropshadow}}">\n'+
'     <twx-dt-tracker id="tracker1" enabletrackingevents="false">\n'+
'        <twx-container-content>\n'+
'           <div class="targetGuide" ng-class="targetGuideClass" ng-hide="hideTargetGuide">\n'+
'               <div class="bracket-top-left"></div>\n'+
'               <div class="bracket-top-right"></div>\n'+
'               <div class="bracket-bottom-right"></div>\n'+
'               <div class="bracket-bottom-left"></div>\n'+
'               <div class="targetGuideText hint" ng-hide="hideTargetGuide">{{targetGuideHint}}</div>\n'+
'           </div>\n'+
'        <twx-widget widget-id="thingMark-1" original-widget="twx-dt-target" widget-name="thingMark-1"><twx-widget-property name="widgetName" datatype="string" value="thingMark-1"></twx-widget-property><twx-widget-property name="decal" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="stationary" datatype="boolean" value="true"></twx-widget-property><twx-widget-property name="trackingIndicator" datatype="boolean" value="true"></twx-widget-property><twx-widget-property name="istracked" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="placeholder_img" datatype="" value="/extensions/images/placeholder_thingmark.png"></twx-widget-property><twx-widget-property name="rz" datatype="number" value="0"></twx-widget-property><twx-widget-property name="ry" datatype="number" value="0"></twx-widget-property><twx-widget-property name="rx" datatype="number" value="-90"></twx-widget-property><twx-widget-property name="z" datatype="number" value="0"></twx-widget-property><twx-widget-property name="y" datatype="number" value="0"></twx-widget-property><twx-widget-property name="x" datatype="number" value="0"></twx-widget-property><twx-widget-property name="width" datatype="number" value="0.0254"></twx-widget-property><twx-widget-property name="markerId" datatype="string" value=""></twx-widget-property><twx-widget-content><twx-dt-target id="thingMark-1" src="{{&apos;vuforia-vumark:///vumark?id=&apos; + me.markerId}}" guide-src="app/resources/Default/thing_code_phantom.png" size="{{me.width}}" x="{{me.x}}" y="{{me.y}}" z="{{me.z}}" rx="{{me.rx}}" ry="{{me.ry}}" rz="{{me.rz}}" istracked="{{me.istracked}}" trackingindicator="{{me.trackingIndicator}}" stationary="{{me.stationary}}"><twx-dt-image id="thingMark-1-image" sx="{{me.width*4.51}}" sy="{{me.width*4.51}}" sz="{{me.width*4.51}}" x="{{me.x}}" y="{{me.y}}" z="{{me.z}}" rx="{{me.rx}}" ry="{{me.ry}}" rz="{{me.rz}}" hidden="{{!me.trackingIndicator}}" billboard="{{me.billboard}}" occlude="{{me.occlude}}" decal="{{me.decal}}" shader="recogniser;active f {{pulse}}" src="img/recognised.png?name=sampler0 img/recognised2.png?name=sampler1" trackingindicator="{{me.trackingIndicator}}" stationary="{{me.stationary}}"></twx-dt-image></twx-dt-target></twx-widget-content><twx-databind databind-id="db-1661369652266" source-type="data" source-name="vumark" source-item-type="value" source-item-name="vumark" binding-type="custom_field" from-expression="app.params[&apos;vumark&apos;]" to-property="markerId"></twx-databind></twx-widget><twx-widget widget-id="model-1" original-widget="twx-dt-model" widget-name="model-1"><twx-widget-service name="stop"></twx-widget-service><twx-widget-service name="rewind"></twx-widget-service><twx-widget-service name="reset"></twx-widget-service><twx-widget-service name="playAll"></twx-widget-service><twx-widget-service name="play"></twx-widget-service><twx-widget-service name="forward"></twx-widget-service><twx-widget-property name="widgetName" datatype="string" value="model-1"></twx-widget-property><twx-widget-property name="sequencePartIds" datatype="string"></twx-widget-property><twx-widget-property name="playing" datatype="boolean"></twx-widget-property><twx-widget-property name="stepDescription" datatype="string"></twx-widget-property><twx-widget-property name="stepName" datatype="string"></twx-widget-property><twx-widget-property name="currentStep" datatype="number"></twx-widget-property><twx-widget-property name="steps" datatype="number"></twx-widget-property><twx-widget-property name="showSequenceInCanvas" datatype="boolean" value="true"></twx-widget-property><twx-widget-property name="sequence" datatype="resource_url" value=""></twx-widget-property><twx-widget-property name="sequenceList" datatype="infotable"></twx-widget-property><twx-widget-property name="shader" datatype="string" value=""></twx-widget-property><twx-widget-property name="translucent" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="opacity" datatype="number" value="1"></twx-widget-property><twx-widget-property name="decal" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="occlude" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="forceHidden" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="visible" datatype="boolean" value="true"></twx-widget-property><twx-widget-property name="rz" datatype="number" value="0.00"></twx-widget-property><twx-widget-property name="ry" datatype="number" value="0.00"></twx-widget-property><twx-widget-property name="rx" datatype="number" value="-90.00"></twx-widget-property><twx-widget-property name="z" datatype="number" value="-0.1060"></twx-widget-property><twx-widget-property name="y" datatype="number" value="-0.0390"></twx-widget-property><twx-widget-property name="x" datatype="number" value="-0.0650"></twx-widget-property><twx-widget-property name="scale" datatype="string" value="1.0000"></twx-widget-property><twx-widget-property name="src" datatype="resource_url" value="app/resources/Uploaded/Vuforia_Assembly.pvz"></twx-widget-property><twx-widget-content><twx-dt-model id="model-1" ng-src="{{me.src | trustUrl}}" src="app/resources/Uploaded/Vuforia_Assembly.pvz" sx="{{me.scale.split(&apos; &apos;)[0] || me.scale}}" sy="{{me.scale.split(&apos; &apos;)[1] || me.scale}}" sz="{{me.scale.split(&apos; &apos;)[2] || me.scale}}" x="{{me.x}}" y="{{me.y}}" z="{{me.z}}" rx="{{me.rx}}" ry="{{me.ry}}" rz="{{me.rz}}" hidden="{{app.fn.getThreeStateBoolInv(me.visible)}}" force-hidden="{{me.forceHidden}}" occlude="{{me.occlude}}" decal="{{me.decal}}" opacity="{{me.opacity}}" phantom="{{!me.translucent}}" shader="{{me.shader}}" sequencelist="{{me.sequenceList}}" sequence="{{me.sequence}}" showsequenceincanvas="{{me.showSequenceInCanvas}}" steps="{{me.steps}}" currentstep="{{me.currentStep}}" stepname="{{me.stepName}}" stepdescription="{{me.stepDescription}}" playing="{{me.playing}}" sequencepartids="{{me.sequencePartIds}}"><twx-container-content></twx-container-content></twx-dt-model></twx-widget-content></twx-widget></twx-container-content>\n'+
'     </twx-dt-tracker>\n'+
'</twx-dt-view></twx-widget-content></twx-widget><twx-widget widget-id="2DOverlay-1" original-widget="twx-overlay" widget-name="2D Overlay"><twx-widget-property name="widgetName" datatype="string" value="2D Overlay"></twx-widget-property><twx-widget-property name="class" datatype="string"></twx-widget-property><twx-widget-property name="visible" datatype="boolean" value="true"></twx-widget-property><twx-widget-content><div class="twx-2d-overlay {{me.class}}" ng-show="app.fn.isTrue(me.visible)"><twx-container-content><div class="panel undefined top" style=" "><twx-widget widget-id="image-1" original-widget="twx-image2" widget-name="image-1"><twx-widget-property name="widgetName" datatype="string" value="image-1"></twx-widget-property><twx-widget-property name="padding" datatype="string" value=""></twx-widget-property><twx-widget-property name="visible" datatype="boolean" value="true"></twx-widget-property><twx-widget-property name="imageAlign" datatype="string" value="flex-start"></twx-widget-property><twx-widget-property name="height" datatype="string" value=""></twx-widget-property><twx-widget-property name="width" datatype="string" value=""></twx-widget-property><twx-widget-property name="backgroundcolor" datatype="string"></twx-widget-property><twx-widget-property name="imgsrc" datatype="resource_url" value="app/resources/Uploaded/studio-logo.png"></twx-widget-property><twx-widget-property name="class" datatype="string" value="watermark scaled-logo rounded-corners"></twx-widget-property><twx-widget-content><div class="imgAlignContainer" style="justify-content: flex-start;"><img class="{{me.class}}" ng-show="app.fn.isTrue(me.visible)" style="background-color: {{me.backgroundcolor}}; width: {{me.width}}; height: {{me.height}};  padding: {{me.padding}}" ng-src="{{me.imgsrc}}" twx-native-events=""></div></twx-widget-content></twx-widget></div><div class="panel body undefined"><div class="panel undefined left" style=" "><twx-widget widget-id="gridLayout-1" original-widget="twx-gridlayout" widget-name="gridLayout-1"><twx-widget-property name="widgetName" datatype="string" value="gridLayout-1"></twx-widget-property><twx-widget-property name="evenlyspacedrows" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="margin" datatype="string" value=""></twx-widget-property><twx-widget-property name="class" datatype="string"></twx-widget-property><twx-widget-property name="visible" datatype="boolean" value="true"></twx-widget-property><twx-widget-content><div ng-show="app.fn.isTrue(me.visible)" even-rows="false" class="gridLayout {{me.class}}" style="padding:;"><twx-container-content><div class="row undefined" style=""><div class="col undefined" style="flex-direction:column;justify-content: flex-start;align-items: stretch;padding: 0px;flex-wrap: wrap;"><twx-widget widget-id="button-1" original-widget="twx-button" widget-name="button-1"><twx-widget-property name="widgetName" datatype="string" value="button-1"></twx-widget-property><twx-widget-property name="margin" datatype="string"></twx-widget-property><twx-widget-property name="disabled" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="visible" datatype="boolean" value="true"></twx-widget-property><twx-widget-property name="class" datatype="string" value="homeHamburger2"></twx-widget-property><twx-widget-property name="text" datatype="string" value=""></twx-widget-property><twx-widget-content><button style="" ng-show="app.fn.isTrue(me.visible)" ng-disabled="app.fn.isTrue(me.disabled)" class="button {{me.class}}" twx-native-events="">{{me.text}}</button></twx-widget-content><twx-eventbind eventbind-id="eb-1661369772516" source-type="widget" source-label="Button" source-name="button-1" source-event="click" handler-namespace="app" handler-name="fn" handler-service="navigate" handler-path="app-fn-navigate"><twx-event-data data-name="viewname" data-value="HomePage"></twx-event-data></twx-eventbind></twx-widget></div></div></twx-container-content></div></twx-widget-content></twx-widget><twx-widget widget-id="gridLayout-2" original-widget="twx-gridlayout" widget-name="gridLayout-2"><twx-widget-property name="widgetName" datatype="string" value="gridLayout-2"></twx-widget-property><twx-widget-property name="evenlyspacedrows" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="margin" datatype="string" value=""></twx-widget-property><twx-widget-property name="class" datatype="string"></twx-widget-property><twx-widget-property name="visible" datatype="boolean" value="true"></twx-widget-property><twx-widget-content><div ng-show="app.fn.isTrue(me.visible)" even-rows="false" class="gridLayout {{me.class}}" style="padding:;"><twx-container-content><div class="row undefined" style=""><div class="col undefined" style="flex-direction:column;justify-content: flex-start;align-items: stretch;padding: 0px;flex-wrap: wrap;"><twx-widget widget-id="button-2" original-widget="twx-button" widget-name="button-2"><twx-widget-property name="widgetName" datatype="string" value="button-2"></twx-widget-property><twx-widget-property name="margin" datatype="string"></twx-widget-property><twx-widget-property name="disabled" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="visible" datatype="boolean" value="true"></twx-widget-property><twx-widget-property name="class" datatype="string" value="backArrow"></twx-widget-property><twx-widget-property name="text" datatype="string" value=""></twx-widget-property><twx-widget-content><button style="" ng-show="app.fn.isTrue(me.visible)" ng-disabled="app.fn.isTrue(me.disabled)" class="button {{me.class}}" twx-native-events="">{{me.text}}</button></twx-widget-content><twx-eventbind eventbind-id="eb-1661369782150" source-type="widget" source-label="Button" source-name="button-2" source-event="click" handler-namespace="app" handler-name="fn" handler-service="navigate" handler-path="app-fn-navigate"><twx-event-data data-name="viewname" data-value="CON_AB"></twx-event-data></twx-eventbind></twx-widget></div></div></twx-container-content></div></twx-widget-content></twx-widget></div><div class="panel undefined center" style=" "></div><div class="panel undefined right" style=" "></div></div><div class="panel undefined bottom" style=" "></div></twx-container-content></div></twx-widget-content></twx-widget></twx-container-content></twx-widget-content><twx-fragment-parameters></twx-fragment-parameters><twx-view-data></twx-view-data></twx-widget></ion-content></ion-view>\n';
      if (twx.app.isPreview() && viewHTML.indexOf('view-type="ar"') > 0) {
        viewHTML = viewHTML.replace(/<twx-dt-modelitem /ig, '<twx-dt-modelitem ng-if="$root.thingViewReady !== false" ');
      }
      $templateCache.put('app/components/3D_CON_AB.html', viewHTML);
    
      var viewHTML =  '<ion-view hasGridEvenRows="false" view-type="ar" twx-view="3D_IDF" view-title="3D_IDF" ctrl-name="3D_IDF_TwxViewController" can-swipe-back="false"><div class="overlay ng-hide" ng-show=""></div><ion-content scroll="false" overflow-scroll="true" ><twx-widget widget-id="view-1" original-widget="twx-view" widget-name="view-1"><twx-widget-property name="widgetName" datatype="string" value="view-1"></twx-widget-property><twx-widget-property name="viewtype" datatype="string" value="ar"></twx-widget-property><twx-widget-property name="class" datatype="string"></twx-widget-property><twx-widget-content><twx-container-content class="{{me.class}}"><twx-widget widget-id="3DContainer-1" original-widget="twx-dt-view" widget-name="3D Container"><twx-widget-service name="unlockCameraAndOrientation"></twx-widget-service><twx-widget-service name="lockCameraAndOrientation"></twx-widget-service><twx-widget-property name="widgetName" datatype="string" value="3D Container"></twx-widget-property><twx-widget-property name="far" datatype="number" value="200"></twx-widget-property><twx-widget-property name="near" datatype="number" value="0.01"></twx-widget-property><twx-widget-property name="dropshadow" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="enabletrackingevents" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="camera" datatype="json" value="{}"></twx-widget-property><twx-widget-property name="persistmap" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="src" datatype="string" value="TW-VuMark.xml"></twx-widget-property><twx-widget-property name="extendedtracking" datatype="boolean" value="true"></twx-widget-property><twx-widget-property name="visible" datatype="boolean" value="true"></twx-widget-property><twx-widget-content><twx-dt-view near="0.01" far="200" extendedtracking="true" persistmap="false" dropshadow="{{me.dropshadow}}">\n'+
'     <twx-dt-tracker id="tracker1" enabletrackingevents="false">\n'+
'        <twx-container-content>\n'+
'           <div class="targetGuide" ng-class="targetGuideClass" ng-hide="hideTargetGuide">\n'+
'               <div class="bracket-top-left"></div>\n'+
'               <div class="bracket-top-right"></div>\n'+
'               <div class="bracket-bottom-right"></div>\n'+
'               <div class="bracket-bottom-left"></div>\n'+
'               <div class="targetGuideText hint" ng-hide="hideTargetGuide">{{targetGuideHint}}</div>\n'+
'           </div>\n'+
'        <twx-widget widget-id="thingMark-1" original-widget="twx-dt-target" widget-name="thingMark-1"><twx-widget-property name="widgetName" datatype="string" value="thingMark-1"></twx-widget-property><twx-widget-property name="decal" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="stationary" datatype="boolean" value="true"></twx-widget-property><twx-widget-property name="trackingIndicator" datatype="boolean" value="true"></twx-widget-property><twx-widget-property name="istracked" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="placeholder_img" datatype="" value="/extensions/images/placeholder_thingmark.png"></twx-widget-property><twx-widget-property name="rz" datatype="number" value="0"></twx-widget-property><twx-widget-property name="ry" datatype="number" value="0"></twx-widget-property><twx-widget-property name="rx" datatype="number" value="-90"></twx-widget-property><twx-widget-property name="z" datatype="number" value="0"></twx-widget-property><twx-widget-property name="y" datatype="number" value="0"></twx-widget-property><twx-widget-property name="x" datatype="number" value="0"></twx-widget-property><twx-widget-property name="width" datatype="number" value="0.0254"></twx-widget-property><twx-widget-property name="markerId" datatype="string" value=""></twx-widget-property><twx-widget-content><twx-dt-target id="thingMark-1" src="{{&apos;vuforia-vumark:///vumark?id=&apos; + me.markerId}}" guide-src="app/resources/Default/thing_code_phantom.png" size="{{me.width}}" x="{{me.x}}" y="{{me.y}}" z="{{me.z}}" rx="{{me.rx}}" ry="{{me.ry}}" rz="{{me.rz}}" istracked="{{me.istracked}}" trackingindicator="{{me.trackingIndicator}}" stationary="{{me.stationary}}"><twx-dt-image id="thingMark-1-image" sx="{{me.width*4.51}}" sy="{{me.width*4.51}}" sz="{{me.width*4.51}}" x="{{me.x}}" y="{{me.y}}" z="{{me.z}}" rx="{{me.rx}}" ry="{{me.ry}}" rz="{{me.rz}}" hidden="{{!me.trackingIndicator}}" billboard="{{me.billboard}}" occlude="{{me.occlude}}" decal="{{me.decal}}" shader="recogniser;active f {{pulse}}" src="img/recognised.png?name=sampler0 img/recognised2.png?name=sampler1" trackingindicator="{{me.trackingIndicator}}" stationary="{{me.stationary}}"></twx-dt-image></twx-dt-target></twx-widget-content><twx-databind databind-id="db-1661369587285" source-type="data" source-name="vumark" source-item-type="value" source-item-name="vumark" binding-type="custom_field" from-expression="app.params[&apos;vumark&apos;]" to-property="markerId"></twx-databind></twx-widget><twx-widget widget-id="model-1" original-widget="twx-dt-model" widget-name="model-1"><twx-widget-service name="stop"></twx-widget-service><twx-widget-service name="rewind"></twx-widget-service><twx-widget-service name="reset"></twx-widget-service><twx-widget-service name="playAll"></twx-widget-service><twx-widget-service name="play"></twx-widget-service><twx-widget-service name="forward"></twx-widget-service><twx-widget-property name="widgetName" datatype="string" value="model-1"></twx-widget-property><twx-widget-property name="sequencePartIds" datatype="string"></twx-widget-property><twx-widget-property name="playing" datatype="boolean"></twx-widget-property><twx-widget-property name="stepDescription" datatype="string"></twx-widget-property><twx-widget-property name="stepName" datatype="string"></twx-widget-property><twx-widget-property name="currentStep" datatype="number"></twx-widget-property><twx-widget-property name="steps" datatype="number"></twx-widget-property><twx-widget-property name="showSequenceInCanvas" datatype="boolean" value="true"></twx-widget-property><twx-widget-property name="sequence" datatype="resource_url" value=""></twx-widget-property><twx-widget-property name="sequenceList" datatype="infotable"></twx-widget-property><twx-widget-property name="shader" datatype="string" value=""></twx-widget-property><twx-widget-property name="translucent" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="opacity" datatype="number" value="1"></twx-widget-property><twx-widget-property name="decal" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="occlude" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="forceHidden" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="visible" datatype="boolean" value="true"></twx-widget-property><twx-widget-property name="rz" datatype="number" value="0"></twx-widget-property><twx-widget-property name="ry" datatype="number" value="0"></twx-widget-property><twx-widget-property name="rx" datatype="number" value="-90"></twx-widget-property><twx-widget-property name="z" datatype="number" value="-0.106"></twx-widget-property><twx-widget-property name="y" datatype="number" value="-0.039"></twx-widget-property><twx-widget-property name="x" datatype="number" value="-0.065"></twx-widget-property><twx-widget-property name="scale" datatype="string" value="1.0"></twx-widget-property><twx-widget-property name="src" datatype="resource_url" value="app/resources/Uploaded/Vuforia_Assembly.pvz"></twx-widget-property><twx-widget-content><twx-dt-model id="model-1" ng-src="{{me.src | trustUrl}}" src="app/resources/Uploaded/Vuforia_Assembly.pvz" sx="{{me.scale.split(&apos; &apos;)[0] || me.scale}}" sy="{{me.scale.split(&apos; &apos;)[1] || me.scale}}" sz="{{me.scale.split(&apos; &apos;)[2] || me.scale}}" x="{{me.x}}" y="{{me.y}}" z="{{me.z}}" rx="{{me.rx}}" ry="{{me.ry}}" rz="{{me.rz}}" hidden="{{app.fn.getThreeStateBoolInv(me.visible)}}" force-hidden="{{me.forceHidden}}" occlude="{{me.occlude}}" decal="{{me.decal}}" opacity="{{me.opacity}}" phantom="{{!me.translucent}}" shader="{{me.shader}}" sequencelist="{{me.sequenceList}}" sequence="{{me.sequence}}" showsequenceincanvas="{{me.showSequenceInCanvas}}" steps="{{me.steps}}" currentstep="{{me.currentStep}}" stepname="{{me.stepName}}" stepdescription="{{me.stepDescription}}" playing="{{me.playing}}" sequencepartids="{{me.sequencePartIds}}"><twx-container-content></twx-container-content></twx-dt-model></twx-widget-content></twx-widget></twx-container-content>\n'+
'     </twx-dt-tracker>\n'+
'</twx-dt-view></twx-widget-content></twx-widget><twx-widget widget-id="2DOverlay-1" original-widget="twx-overlay" widget-name="2D Overlay"><twx-widget-property name="widgetName" datatype="string" value="2D Overlay"></twx-widget-property><twx-widget-property name="class" datatype="string"></twx-widget-property><twx-widget-property name="visible" datatype="boolean" value="true"></twx-widget-property><twx-widget-content><div class="twx-2d-overlay {{me.class}}" ng-show="app.fn.isTrue(me.visible)"><twx-container-content><div class="panel undefined top" style=" "><twx-widget widget-id="image-1" original-widget="twx-image2" widget-name="image-1"><twx-widget-property name="widgetName" datatype="string" value="image-1"></twx-widget-property><twx-widget-property name="padding" datatype="string" value=""></twx-widget-property><twx-widget-property name="visible" datatype="boolean" value="true"></twx-widget-property><twx-widget-property name="imageAlign" datatype="string" value="flex-start"></twx-widget-property><twx-widget-property name="height" datatype="string" value=""></twx-widget-property><twx-widget-property name="width" datatype="string" value=""></twx-widget-property><twx-widget-property name="backgroundcolor" datatype="string"></twx-widget-property><twx-widget-property name="imgsrc" datatype="resource_url" value="app/resources/Uploaded/studio-logo.png"></twx-widget-property><twx-widget-property name="class" datatype="string" value="watermark scaled-logo rounded-corners"></twx-widget-property><twx-widget-content><div class="imgAlignContainer" style="justify-content: flex-start;"><img class="{{me.class}}" ng-show="app.fn.isTrue(me.visible)" style="background-color: {{me.backgroundcolor}}; width: {{me.width}}; height: {{me.height}};  padding: {{me.padding}}" ng-src="{{me.imgsrc}}" twx-native-events=""></div></twx-widget-content></twx-widget></div><div class="panel body undefined"><div class="panel undefined left" style=" "><twx-widget widget-id="gridLayout-1" original-widget="twx-gridlayout" widget-name="gridLayout-1"><twx-widget-property name="widgetName" datatype="string" value="gridLayout-1"></twx-widget-property><twx-widget-property name="evenlyspacedrows" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="margin" datatype="string" value=""></twx-widget-property><twx-widget-property name="class" datatype="string"></twx-widget-property><twx-widget-property name="visible" datatype="boolean" value="true"></twx-widget-property><twx-widget-content><div ng-show="app.fn.isTrue(me.visible)" even-rows="false" class="gridLayout {{me.class}}" style="padding:;"><twx-container-content><div class="row undefined" style=""><div class="col undefined" style="flex-direction:column;justify-content: flex-start;align-items: stretch;padding: 0px;flex-wrap: wrap;"><twx-widget widget-id="button-1" original-widget="twx-button" widget-name="button-1"><twx-widget-property name="widgetName" datatype="string" value="button-1"></twx-widget-property><twx-widget-property name="margin" datatype="string"></twx-widget-property><twx-widget-property name="disabled" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="visible" datatype="boolean" value="true"></twx-widget-property><twx-widget-property name="class" datatype="string" value="homeHamburger2"></twx-widget-property><twx-widget-property name="text" datatype="string" value=""></twx-widget-property><twx-widget-content><button style="" ng-show="app.fn.isTrue(me.visible)" ng-disabled="app.fn.isTrue(me.disabled)" class="button {{me.class}}" twx-native-events="">{{me.text}}</button></twx-widget-content><twx-eventbind eventbind-id="eb-1661369816116" source-type="widget" source-label="Button" source-name="button-1" source-event="click" handler-namespace="app" handler-name="fn" handler-service="navigate" handler-path="app-fn-navigate"><twx-event-data data-name="viewname" data-value="HomePage"></twx-event-data></twx-eventbind></twx-widget></div></div></twx-container-content></div></twx-widget-content></twx-widget><twx-widget widget-id="gridLayout-2" original-widget="twx-gridlayout" widget-name="gridLayout-2"><twx-widget-property name="widgetName" datatype="string" value="gridLayout-2"></twx-widget-property><twx-widget-property name="evenlyspacedrows" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="margin" datatype="string" value=""></twx-widget-property><twx-widget-property name="class" datatype="string"></twx-widget-property><twx-widget-property name="visible" datatype="boolean" value="true"></twx-widget-property><twx-widget-content><div ng-show="app.fn.isTrue(me.visible)" even-rows="false" class="gridLayout {{me.class}}" style="padding:;"><twx-container-content><div class="row undefined" style=""><div class="col undefined" style="flex-direction:column;justify-content: flex-start;align-items: stretch;padding: 0px;flex-wrap: wrap;"><twx-widget widget-id="button-2" original-widget="twx-button" widget-name="button-2"><twx-widget-property name="widgetName" datatype="string" value="button-2"></twx-widget-property><twx-widget-property name="margin" datatype="string"></twx-widget-property><twx-widget-property name="disabled" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="visible" datatype="boolean" value="true"></twx-widget-property><twx-widget-property name="class" datatype="string" value="backArrow"></twx-widget-property><twx-widget-property name="text" datatype="string" value=""></twx-widget-property><twx-widget-content><button style="" ng-show="app.fn.isTrue(me.visible)" ng-disabled="app.fn.isTrue(me.disabled)" class="button {{me.class}}" twx-native-events="">{{me.text}}</button></twx-widget-content><twx-eventbind eventbind-id="eb-1661369825969" source-type="widget" source-label="Button" source-name="button-2" source-event="click" handler-namespace="app" handler-name="fn" handler-service="navigate" handler-path="app-fn-navigate"><twx-event-data data-name="viewname" data-value="IDF"></twx-event-data></twx-eventbind></twx-widget></div></div></twx-container-content></div></twx-widget-content></twx-widget></div><div class="panel undefined center" style=" "></div><div class="panel undefined right" style=" "></div></div><div class="panel undefined bottom" style=" "></div></twx-container-content></div></twx-widget-content></twx-widget></twx-container-content></twx-widget-content><twx-fragment-parameters></twx-fragment-parameters><twx-view-data></twx-view-data></twx-widget></ion-content></ion-view>\n';
      if (twx.app.isPreview() && viewHTML.indexOf('view-type="ar"') > 0) {
        viewHTML = viewHTML.replace(/<twx-dt-modelitem /ig, '<twx-dt-modelitem ng-if="$root.thingViewReady !== false" ');
      }
      $templateCache.put('app/components/3D_IDF.html', viewHTML);
    
      var viewHTML =  '<ion-view hasGridEvenRows="false" view-type="ar" twx-view="3D_XR" view-title="3D_XR" ctrl-name="3D_XR_TwxViewController" can-swipe-back="false"><div class="overlay ng-hide" ng-show=""></div><ion-content scroll="false" overflow-scroll="true" ><twx-widget widget-id="view-1" original-widget="twx-view" widget-name="view-1"><twx-widget-property name="widgetName" datatype="string" value="view-1"></twx-widget-property><twx-widget-property name="viewtype" datatype="string" value="ar"></twx-widget-property><twx-widget-property name="class" datatype="string"></twx-widget-property><twx-widget-content><twx-container-content class="{{me.class}}"><twx-widget widget-id="3DContainer-1" original-widget="twx-dt-view" widget-name="3D Container"><twx-widget-service name="unlockCameraAndOrientation"></twx-widget-service><twx-widget-service name="lockCameraAndOrientation"></twx-widget-service><twx-widget-property name="widgetName" datatype="string" value="3D Container"></twx-widget-property><twx-widget-property name="far" datatype="number" value="200"></twx-widget-property><twx-widget-property name="near" datatype="number" value="0.01"></twx-widget-property><twx-widget-property name="dropshadow" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="enabletrackingevents" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="camera" datatype="json" value="{}"></twx-widget-property><twx-widget-property name="persistmap" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="src" datatype="string" value="TW-VuMark.xml"></twx-widget-property><twx-widget-property name="extendedtracking" datatype="boolean" value="true"></twx-widget-property><twx-widget-property name="visible" datatype="boolean" value="true"></twx-widget-property><twx-widget-content><twx-dt-view near="0.01" far="200" extendedtracking="true" persistmap="false" dropshadow="{{me.dropshadow}}">\n'+
'     <twx-dt-tracker id="tracker1" enabletrackingevents="false">\n'+
'        <twx-container-content>\n'+
'           <div class="targetGuide" ng-class="targetGuideClass" ng-hide="hideTargetGuide">\n'+
'               <div class="bracket-top-left"></div>\n'+
'               <div class="bracket-top-right"></div>\n'+
'               <div class="bracket-bottom-right"></div>\n'+
'               <div class="bracket-bottom-left"></div>\n'+
'               <div class="targetGuideText hint" ng-hide="hideTargetGuide">{{targetGuideHint}}</div>\n'+
'           </div>\n'+
'        <twx-widget widget-id="thingMark-1" original-widget="twx-dt-target" widget-name="thingMark-1"><twx-widget-property name="widgetName" datatype="string" value="thingMark-1"></twx-widget-property><twx-widget-property name="decal" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="stationary" datatype="boolean" value="true"></twx-widget-property><twx-widget-property name="trackingIndicator" datatype="boolean" value="true"></twx-widget-property><twx-widget-property name="istracked" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="placeholder_img" datatype="" value="/extensions/images/placeholder_thingmark.png"></twx-widget-property><twx-widget-property name="rz" datatype="number" value="0"></twx-widget-property><twx-widget-property name="ry" datatype="number" value="0"></twx-widget-property><twx-widget-property name="rx" datatype="number" value="-90"></twx-widget-property><twx-widget-property name="z" datatype="number" value="0"></twx-widget-property><twx-widget-property name="y" datatype="number" value="0"></twx-widget-property><twx-widget-property name="x" datatype="number" value="0"></twx-widget-property><twx-widget-property name="width" datatype="number" value="0.0254"></twx-widget-property><twx-widget-property name="markerId" datatype="string" value=""></twx-widget-property><twx-widget-content><twx-dt-target id="thingMark-1" src="{{&apos;vuforia-vumark:///vumark?id=&apos; + me.markerId}}" guide-src="app/resources/Default/thing_code_phantom.png" size="{{me.width}}" x="{{me.x}}" y="{{me.y}}" z="{{me.z}}" rx="{{me.rx}}" ry="{{me.ry}}" rz="{{me.rz}}" istracked="{{me.istracked}}" trackingindicator="{{me.trackingIndicator}}" stationary="{{me.stationary}}"><twx-dt-image id="thingMark-1-image" sx="{{me.width*4.51}}" sy="{{me.width*4.51}}" sz="{{me.width*4.51}}" x="{{me.x}}" y="{{me.y}}" z="{{me.z}}" rx="{{me.rx}}" ry="{{me.ry}}" rz="{{me.rz}}" hidden="{{!me.trackingIndicator}}" billboard="{{me.billboard}}" occlude="{{me.occlude}}" decal="{{me.decal}}" shader="recogniser;active f {{pulse}}" src="img/recognised.png?name=sampler0 img/recognised2.png?name=sampler1" trackingindicator="{{me.trackingIndicator}}" stationary="{{me.stationary}}"></twx-dt-image></twx-dt-target></twx-widget-content><twx-databind databind-id="db-1661369481626" source-type="data" source-name="vumark" source-item-type="value" source-item-name="vumark" binding-type="custom_field" from-expression="app.params[&apos;vumark&apos;]" to-property="markerId"></twx-databind></twx-widget><twx-widget widget-id="model-1" original-widget="twx-dt-model" widget-name="model-1"><twx-widget-service name="stop"></twx-widget-service><twx-widget-service name="rewind"></twx-widget-service><twx-widget-service name="reset"></twx-widget-service><twx-widget-service name="playAll"></twx-widget-service><twx-widget-service name="play"></twx-widget-service><twx-widget-service name="forward"></twx-widget-service><twx-widget-property name="widgetName" datatype="string" value="model-1"></twx-widget-property><twx-widget-property name="sequencePartIds" datatype="string"></twx-widget-property><twx-widget-property name="playing" datatype="boolean"></twx-widget-property><twx-widget-property name="stepDescription" datatype="string"></twx-widget-property><twx-widget-property name="stepName" datatype="string"></twx-widget-property><twx-widget-property name="currentStep" datatype="number"></twx-widget-property><twx-widget-property name="steps" datatype="number"></twx-widget-property><twx-widget-property name="showSequenceInCanvas" datatype="boolean" value="true"></twx-widget-property><twx-widget-property name="sequence" datatype="resource_url" value=""></twx-widget-property><twx-widget-property name="sequenceList" datatype="infotable"></twx-widget-property><twx-widget-property name="shader" datatype="string" value=""></twx-widget-property><twx-widget-property name="translucent" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="opacity" datatype="number" value="1"></twx-widget-property><twx-widget-property name="decal" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="occlude" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="forceHidden" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="visible" datatype="boolean" value="true"></twx-widget-property><twx-widget-property name="rz" datatype="number" value="0"></twx-widget-property><twx-widget-property name="ry" datatype="number" value="0"></twx-widget-property><twx-widget-property name="rx" datatype="number" value="-90"></twx-widget-property><twx-widget-property name="z" datatype="number" value="-0.106"></twx-widget-property><twx-widget-property name="y" datatype="number" value="-0.039"></twx-widget-property><twx-widget-property name="x" datatype="number" value="-0.065"></twx-widget-property><twx-widget-property name="scale" datatype="string" value="1.0"></twx-widget-property><twx-widget-property name="src" datatype="resource_url" value="app/resources/Uploaded/Vuforia_Assembly.pvz"></twx-widget-property><twx-widget-content><twx-dt-model id="model-1" ng-src="{{me.src | trustUrl}}" src="app/resources/Uploaded/Vuforia_Assembly.pvz" sx="{{me.scale.split(&apos; &apos;)[0] || me.scale}}" sy="{{me.scale.split(&apos; &apos;)[1] || me.scale}}" sz="{{me.scale.split(&apos; &apos;)[2] || me.scale}}" x="{{me.x}}" y="{{me.y}}" z="{{me.z}}" rx="{{me.rx}}" ry="{{me.ry}}" rz="{{me.rz}}" hidden="{{app.fn.getThreeStateBoolInv(me.visible)}}" force-hidden="{{me.forceHidden}}" occlude="{{me.occlude}}" decal="{{me.decal}}" opacity="{{me.opacity}}" phantom="{{!me.translucent}}" shader="{{me.shader}}" sequencelist="{{me.sequenceList}}" sequence="{{me.sequence}}" showsequenceincanvas="{{me.showSequenceInCanvas}}" steps="{{me.steps}}" currentstep="{{me.currentStep}}" stepname="{{me.stepName}}" stepdescription="{{me.stepDescription}}" playing="{{me.playing}}" sequencepartids="{{me.sequencePartIds}}"><twx-container-content></twx-container-content></twx-dt-model></twx-widget-content></twx-widget></twx-container-content>\n'+
'     </twx-dt-tracker>\n'+
'</twx-dt-view></twx-widget-content></twx-widget><twx-widget widget-id="2DOverlay-1" original-widget="twx-overlay" widget-name="2D Overlay"><twx-widget-property name="widgetName" datatype="string" value="2D Overlay"></twx-widget-property><twx-widget-property name="class" datatype="string"></twx-widget-property><twx-widget-property name="visible" datatype="boolean" value="true"></twx-widget-property><twx-widget-content><div class="twx-2d-overlay {{me.class}}" ng-show="app.fn.isTrue(me.visible)"><twx-container-content><div class="panel undefined top" style=" "><twx-widget widget-id="image-1" original-widget="twx-image2" widget-name="image-1"><twx-widget-property name="widgetName" datatype="string" value="image-1"></twx-widget-property><twx-widget-property name="padding" datatype="string" value=""></twx-widget-property><twx-widget-property name="visible" datatype="boolean" value="true"></twx-widget-property><twx-widget-property name="imageAlign" datatype="string" value="flex-start"></twx-widget-property><twx-widget-property name="height" datatype="string" value=""></twx-widget-property><twx-widget-property name="width" datatype="string" value=""></twx-widget-property><twx-widget-property name="backgroundcolor" datatype="string"></twx-widget-property><twx-widget-property name="imgsrc" datatype="resource_url" value="app/resources/Uploaded/studio-logo.png"></twx-widget-property><twx-widget-property name="class" datatype="string" value="watermark scaled-logo rounded-corners"></twx-widget-property><twx-widget-content><div class="imgAlignContainer" style="justify-content: flex-start;"><img class="{{me.class}}" ng-show="app.fn.isTrue(me.visible)" style="background-color: {{me.backgroundcolor}}; width: {{me.width}}; height: {{me.height}};  padding: {{me.padding}}" ng-src="{{me.imgsrc}}" twx-native-events=""></div></twx-widget-content></twx-widget></div><div class="panel body undefined"><div class="panel undefined left" style=" "><twx-widget widget-id="gridLayout-1" original-widget="twx-gridlayout" widget-name="gridLayout-1"><twx-widget-property name="widgetName" datatype="string" value="gridLayout-1"></twx-widget-property><twx-widget-property name="evenlyspacedrows" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="margin" datatype="string" value=""></twx-widget-property><twx-widget-property name="class" datatype="string"></twx-widget-property><twx-widget-property name="visible" datatype="boolean" value="true"></twx-widget-property><twx-widget-content><div ng-show="app.fn.isTrue(me.visible)" even-rows="false" class="gridLayout {{me.class}}" style="padding:;"><twx-container-content><div class="row undefined" style=""><div class="col undefined" style="flex-direction:column;justify-content: flex-start;align-items: stretch;padding: 0px;flex-wrap: wrap;"><twx-widget widget-id="button-1" original-widget="twx-button" widget-name="button-1"><twx-widget-property name="widgetName" datatype="string" value="button-1"></twx-widget-property><twx-widget-property name="margin" datatype="string"></twx-widget-property><twx-widget-property name="disabled" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="visible" datatype="boolean" value="true"></twx-widget-property><twx-widget-property name="class" datatype="string" value="homeHamburger2"></twx-widget-property><twx-widget-property name="text" datatype="string" value=""></twx-widget-property><twx-widget-content><button style="" ng-show="app.fn.isTrue(me.visible)" ng-disabled="app.fn.isTrue(me.disabled)" class="button {{me.class}}" twx-native-events="">{{me.text}}</button></twx-widget-content><twx-eventbind eventbind-id="eb-1661369857783" source-type="widget" source-label="Button" source-name="button-1" source-event="click" handler-namespace="app" handler-name="fn" handler-service="navigate" handler-path="app-fn-navigate"><twx-event-data data-name="viewname" data-value="HomePage"></twx-event-data></twx-eventbind></twx-widget></div></div></twx-container-content></div></twx-widget-content></twx-widget><twx-widget widget-id="gridLayout-2" original-widget="twx-gridlayout" widget-name="gridLayout-2"><twx-widget-property name="widgetName" datatype="string" value="gridLayout-2"></twx-widget-property><twx-widget-property name="evenlyspacedrows" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="margin" datatype="string" value=""></twx-widget-property><twx-widget-property name="class" datatype="string"></twx-widget-property><twx-widget-property name="visible" datatype="boolean" value="true"></twx-widget-property><twx-widget-content><div ng-show="app.fn.isTrue(me.visible)" even-rows="false" class="gridLayout {{me.class}}" style="padding:;"><twx-container-content><div class="row undefined" style=""><div class="col undefined" style="flex-direction:column;justify-content: flex-start;align-items: stretch;padding: 0px;flex-wrap: wrap;"><twx-widget widget-id="button-2" original-widget="twx-button" widget-name="button-2"><twx-widget-property name="widgetName" datatype="string" value="button-2"></twx-widget-property><twx-widget-property name="margin" datatype="string"></twx-widget-property><twx-widget-property name="disabled" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="visible" datatype="boolean" value="true"></twx-widget-property><twx-widget-property name="class" datatype="string" value="backArrow"></twx-widget-property><twx-widget-property name="text" datatype="string" value=""></twx-widget-property><twx-widget-content><button style="" ng-show="app.fn.isTrue(me.visible)" ng-disabled="app.fn.isTrue(me.disabled)" class="button {{me.class}}" twx-native-events="">{{me.text}}</button></twx-widget-content><twx-eventbind eventbind-id="eb-1661369866986" source-type="widget" source-label="Button" source-name="button-2" source-event="click" handler-namespace="app" handler-name="fn" handler-service="navigate" handler-path="app-fn-navigate"><twx-event-data data-name="viewname" data-value="XR"></twx-event-data></twx-eventbind></twx-widget></div></div></twx-container-content></div></twx-widget-content></twx-widget></div><div class="panel undefined center" style=" "></div><div class="panel undefined right" style=" "></div></div><div class="panel undefined bottom" style=" "></div></twx-container-content></div></twx-widget-content></twx-widget></twx-container-content></twx-widget-content><twx-fragment-parameters></twx-fragment-parameters><twx-view-data></twx-view-data></twx-widget></ion-content></ion-view>\n';
      if (twx.app.isPreview() && viewHTML.indexOf('view-type="ar"') > 0) {
        viewHTML = viewHTML.replace(/<twx-dt-modelitem /ig, '<twx-dt-modelitem ng-if="$root.thingViewReady !== false" ');
      }
      $templateCache.put('app/components/3D_XR.html', viewHTML);
    
      var viewHTML =  '<ion-view hasGridEvenRows="false" view-type="ar" twx-view="3D_CXC_WS" view-title="3D_CXC_WS" ctrl-name="3D_CXC_WS_TwxViewController" can-swipe-back="false"><div class="overlay ng-hide" ng-show=""></div><ion-content scroll="false" overflow-scroll="true" ><twx-widget widget-id="view-1" original-widget="twx-view" widget-name="view-1"><twx-widget-property name="widgetName" datatype="string" value="view-1"></twx-widget-property><twx-widget-property name="viewtype" datatype="string" value="ar"></twx-widget-property><twx-widget-property name="class" datatype="string"></twx-widget-property><twx-widget-content><twx-container-content class="{{me.class}}"><twx-widget widget-id="3DContainer-1" original-widget="twx-dt-view" widget-name="3D Container"><twx-widget-service name="unlockCameraAndOrientation"></twx-widget-service><twx-widget-service name="lockCameraAndOrientation"></twx-widget-service><twx-widget-property name="widgetName" datatype="string" value="3D Container"></twx-widget-property><twx-widget-property name="far" datatype="number" value="200"></twx-widget-property><twx-widget-property name="near" datatype="number" value="0.01"></twx-widget-property><twx-widget-property name="dropshadow" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="enabletrackingevents" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="camera" datatype="json" value="{}"></twx-widget-property><twx-widget-property name="persistmap" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="src" datatype="string" value="TW-VuMark.xml"></twx-widget-property><twx-widget-property name="extendedtracking" datatype="boolean" value="true"></twx-widget-property><twx-widget-property name="visible" datatype="boolean" value="true"></twx-widget-property><twx-widget-content><twx-dt-view near="0.01" far="200" extendedtracking="true" persistmap="false" dropshadow="{{me.dropshadow}}">\n'+
'     <twx-dt-tracker id="tracker1" enabletrackingevents="false">\n'+
'        <twx-container-content>\n'+
'           <div class="targetGuide" ng-class="targetGuideClass" ng-hide="hideTargetGuide">\n'+
'               <div class="bracket-top-left"></div>\n'+
'               <div class="bracket-top-right"></div>\n'+
'               <div class="bracket-bottom-right"></div>\n'+
'               <div class="bracket-bottom-left"></div>\n'+
'               <div class="targetGuideText hint" ng-hide="hideTargetGuide">{{targetGuideHint}}</div>\n'+
'           </div>\n'+
'        <twx-widget widget-id="thingMark-1" original-widget="twx-dt-target" widget-name="thingMark-1"><twx-widget-property name="widgetName" datatype="string" value="thingMark-1"></twx-widget-property><twx-widget-property name="decal" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="stationary" datatype="boolean" value="true"></twx-widget-property><twx-widget-property name="trackingIndicator" datatype="boolean" value="true"></twx-widget-property><twx-widget-property name="istracked" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="placeholder_img" datatype="" value="/extensions/images/placeholder_thingmark.png"></twx-widget-property><twx-widget-property name="rz" datatype="number" value="0"></twx-widget-property><twx-widget-property name="ry" datatype="number" value="0"></twx-widget-property><twx-widget-property name="rx" datatype="number" value="-90"></twx-widget-property><twx-widget-property name="z" datatype="number" value="0"></twx-widget-property><twx-widget-property name="y" datatype="number" value="0"></twx-widget-property><twx-widget-property name="x" datatype="number" value="0"></twx-widget-property><twx-widget-property name="width" datatype="number" value="0.0254"></twx-widget-property><twx-widget-property name="markerId" datatype="string" value=""></twx-widget-property><twx-widget-content><twx-dt-target id="thingMark-1" src="{{&apos;vuforia-vumark:///vumark?id=&apos; + me.markerId}}" guide-src="app/resources/Default/thing_code_phantom.png" size="{{me.width}}" x="{{me.x}}" y="{{me.y}}" z="{{me.z}}" rx="{{me.rx}}" ry="{{me.ry}}" rz="{{me.rz}}" istracked="{{me.istracked}}" trackingindicator="{{me.trackingIndicator}}" stationary="{{me.stationary}}"><twx-dt-image id="thingMark-1-image" sx="{{me.width*4.51}}" sy="{{me.width*4.51}}" sz="{{me.width*4.51}}" x="{{me.x}}" y="{{me.y}}" z="{{me.z}}" rx="{{me.rx}}" ry="{{me.ry}}" rz="{{me.rz}}" hidden="{{!me.trackingIndicator}}" billboard="{{me.billboard}}" occlude="{{me.occlude}}" decal="{{me.decal}}" shader="recogniser;active f {{pulse}}" src="img/recognised.png?name=sampler0 img/recognised2.png?name=sampler1" trackingindicator="{{me.trackingIndicator}}" stationary="{{me.stationary}}"></twx-dt-image></twx-dt-target></twx-widget-content><twx-databind databind-id="db-1661212006690" source-type="data" source-name="vumark" source-item-type="value" source-item-name="vumark" binding-type="custom_field" from-expression="app.params[&apos;vumark&apos;]" to-property="markerId"></twx-databind></twx-widget><twx-widget widget-id="model-1" original-widget="twx-dt-model" widget-name="model-1"><twx-widget-service name="stop"></twx-widget-service><twx-widget-service name="rewind"></twx-widget-service><twx-widget-service name="reset"></twx-widget-service><twx-widget-service name="playAll"></twx-widget-service><twx-widget-service name="play"></twx-widget-service><twx-widget-service name="forward"></twx-widget-service><twx-widget-property name="widgetName" datatype="string" value="model-1"></twx-widget-property><twx-widget-property name="sequencePartIds" datatype="string"></twx-widget-property><twx-widget-property name="playing" datatype="boolean"></twx-widget-property><twx-widget-property name="stepDescription" datatype="string"></twx-widget-property><twx-widget-property name="stepName" datatype="string"></twx-widget-property><twx-widget-property name="currentStep" datatype="number"></twx-widget-property><twx-widget-property name="steps" datatype="number"></twx-widget-property><twx-widget-property name="showSequenceInCanvas" datatype="boolean" value="true"></twx-widget-property><twx-widget-property name="sequence" datatype="resource_url" value=""></twx-widget-property><twx-widget-property name="sequenceList" datatype="infotable"></twx-widget-property><twx-widget-property name="shader" datatype="string" value=""></twx-widget-property><twx-widget-property name="translucent" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="opacity" datatype="number" value="1"></twx-widget-property><twx-widget-property name="decal" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="occlude" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="forceHidden" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="visible" datatype="boolean" value="true"></twx-widget-property><twx-widget-property name="rz" datatype="number" value="0.00"></twx-widget-property><twx-widget-property name="ry" datatype="number" value="0.00"></twx-widget-property><twx-widget-property name="rx" datatype="number" value="-90.00"></twx-widget-property><twx-widget-property name="z" datatype="number" value="-0.1062"></twx-widget-property><twx-widget-property name="y" datatype="number" value="-0.0390"></twx-widget-property><twx-widget-property name="x" datatype="number" value="-0.0647"></twx-widget-property><twx-widget-property name="scale" datatype="string" value="1.0000"></twx-widget-property><twx-widget-property name="src" datatype="resource_url" value="app/resources/Uploaded/Vuforia_Assembly.pvz"></twx-widget-property><twx-widget-content><twx-dt-model id="model-1" ng-src="{{me.src | trustUrl}}" src="app/resources/Uploaded/Vuforia_Assembly.pvz" sx="{{me.scale.split(&apos; &apos;)[0] || me.scale}}" sy="{{me.scale.split(&apos; &apos;)[1] || me.scale}}" sz="{{me.scale.split(&apos; &apos;)[2] || me.scale}}" x="{{me.x}}" y="{{me.y}}" z="{{me.z}}" rx="{{me.rx}}" ry="{{me.ry}}" rz="{{me.rz}}" hidden="{{app.fn.getThreeStateBoolInv(me.visible)}}" force-hidden="{{me.forceHidden}}" occlude="{{me.occlude}}" decal="{{me.decal}}" opacity="{{me.opacity}}" phantom="{{!me.translucent}}" shader="{{me.shader}}" sequencelist="{{me.sequenceList}}" sequence="{{me.sequence}}" showsequenceincanvas="{{me.showSequenceInCanvas}}" steps="{{me.steps}}" currentstep="{{me.currentStep}}" stepname="{{me.stepName}}" stepdescription="{{me.stepDescription}}" playing="{{me.playing}}" sequencepartids="{{me.sequencePartIds}}"><twx-container-content></twx-container-content></twx-dt-model></twx-widget-content></twx-widget><twx-widget widget-id="3DGauge-1" original-widget="twx-dt-sensor" widget-name="3DGauge-1"><twx-widget-property name="widgetName" datatype="string" value="3DGauge-1"></twx-widget-property><twx-widget-property name="placeholder_img" datatype="" value="/extensions/images/placeholder_img.svg"></twx-widget-property><twx-widget-property name="width" datatype="number" value=""></twx-widget-property><twx-widget-property name="height" datatype="number" value=""></twx-widget-property><twx-widget-property name="shader" datatype="string" value=""></twx-widget-property><twx-widget-property name="pivot" datatype="select" value="5"></twx-widget-property><twx-widget-property name="opacity" datatype="number" value="1"></twx-widget-property><twx-widget-property name="experimentalOneSided" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="decal" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="occlude" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="billboard" datatype="boolean" value="true"></twx-widget-property><twx-widget-property name="visible" datatype="boolean" value="true"></twx-widget-property><twx-widget-property name="canvaswidth" datatype="number" value="128"></twx-widget-property><twx-widget-property name="canvasheight" datatype="number" value="128"></twx-widget-property><twx-widget-property name="canvasgrowthoverride" datatype="string" value="image+text"></twx-widget-property><twx-widget-property name="imagey" datatype="number" value="0"></twx-widget-property><twx-widget-property name="imagex" datatype="number" value="0"></twx-widget-property><twx-widget-property name="rz" datatype="number" value="0.00"></twx-widget-property><twx-widget-property name="ry" datatype="number" value="0.00"></twx-widget-property><twx-widget-property name="rx" datatype="number" value="1.90"></twx-widget-property><twx-widget-property name="z" datatype="number" value="0.0005"></twx-widget-property><twx-widget-property name="y" datatype="number" value="0.1050"></twx-widget-property><twx-widget-property name="x" datatype="number" value="0.0104"></twx-widget-property><twx-widget-property name="scale" datatype="string" value="0.7500"></twx-widget-property><twx-widget-property name="imageattrs" datatype="string" value=""></twx-widget-property><twx-widget-property name="texty" datatype="number" value="94"></twx-widget-property><twx-widget-property name="textx" datatype="number" value="64"></twx-widget-property><twx-widget-property name="stateFormat" datatype="string"></twx-widget-property><twx-widget-property name="stateFormatValue" datatype="string" value="text"></twx-widget-property><twx-widget-property name="enableStateFormatting" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="textattrs" datatype="string" value="fill:rgba(255, 255, 255, 1);textbaseline:middle;textalign:center"></twx-widget-property><twx-widget-property name="fontsize" datatype="string" value="37px"></twx-widget-property><twx-widget-property name="font" datatype="string" value="Arial"></twx-widget-property><twx-widget-property name="src" datatype="resource_url" value="app/resources/Default/vu_gauge1.svg"></twx-widget-property><twx-widget-property name="text" datatype="string" value=""></twx-widget-property><twx-widget-content><twx-dt-sensor id="3DGauge-1" x="{{me.x}}" y="{{me.y}}" z="{{me.z}}" rx="{{me.rx}}" ry="{{me.ry}}" rz="{{me.rz}}" sx="{{me.scale.split(&apos; &apos;)[0] || me.scale}}" sy="{{me.scale.split(&apos; &apos;)[1] || me.scale}}" sz="{{me.scale.split(&apos; &apos;)[2] || me.scale}}" billboard="{{me.billboard}}" occlude="{{me.occlude}}" opacity="{{me.opacity}}" pivot="{{me.pivot}}" decal="{{me.decal}}" canvasheight="{{me.canvasheight}}" canvaswidth="{{me.canvaswidth}}" height="{{me.height}}" width="{{me.width}}" imageattrs="{{app.fn.buildImageAttrs(me.imagex,me.imagey,me.imageattrs)}}" textattrs="{{app.fn.buildTextAttrs(me.textx,me.texty,me.font,me.fontsize,me.textattrs)}}" canvasgrowthoverride="{{me.canvasgrowthoverride}}" textx="{{me.textx}}" texty="{{me.texty}}" imagex="{{me.imagex}}" imagey="{{me.imagey}}" text="{{me.text}}" ng-src="{{me.src | trustUrl}}" src="app/resources/Default/vu_gauge1.svg" shader="{{me.shader}}" hidden="{{app.fn.getThreeStateBoolInv(me.visible)}}" experimental-one-sided="{{me.experimentalOneSided}}"></twx-dt-sensor></twx-widget-content><twx-databind databind-id="db-1661365670186" source-type="data" source-name="WS_Temperature" source-item-type="property" source-item-name="Channel3_Device3_Temperature" binding-type="property_field" from-expression="app.mdl[&apos;WS_Temperature&apos;].properties[&apos;Channel3_Device3_Temperature&apos;]" to-property="text"><twx-data-filter filter-id="df-1661365738335" filter-body="return Math.round(value *100)/100" filter-name="RoundTemp"></twx-data-filter></twx-databind></twx-widget><twx-widget widget-id="3DGauge-2" original-widget="twx-dt-sensor" widget-name="3DGauge-2"><twx-widget-property name="widgetName" datatype="string" value="3DGauge-2"></twx-widget-property><twx-widget-property name="placeholder_img" datatype="" value="/extensions/images/placeholder_img.svg"></twx-widget-property><twx-widget-property name="width" datatype="number" value=""></twx-widget-property><twx-widget-property name="height" datatype="number" value=""></twx-widget-property><twx-widget-property name="shader" datatype="string" value=""></twx-widget-property><twx-widget-property name="pivot" datatype="select" value="5"></twx-widget-property><twx-widget-property name="opacity" datatype="number" value="1"></twx-widget-property><twx-widget-property name="experimentalOneSided" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="decal" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="occlude" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="billboard" datatype="boolean" value="true"></twx-widget-property><twx-widget-property name="visible" datatype="boolean" value="true"></twx-widget-property><twx-widget-property name="canvaswidth" datatype="number" value="128"></twx-widget-property><twx-widget-property name="canvasheight" datatype="number" value="128"></twx-widget-property><twx-widget-property name="canvasgrowthoverride" datatype="string" value="image+text"></twx-widget-property><twx-widget-property name="imagey" datatype="number" value="0"></twx-widget-property><twx-widget-property name="imagex" datatype="number" value="0"></twx-widget-property><twx-widget-property name="rz" datatype="number" value="0.00"></twx-widget-property><twx-widget-property name="ry" datatype="number" value="0.00"></twx-widget-property><twx-widget-property name="rx" datatype="number" value="0.00"></twx-widget-property><twx-widget-property name="z" datatype="number" value="0.0000"></twx-widget-property><twx-widget-property name="y" datatype="number" value="0.0467"></twx-widget-property><twx-widget-property name="x" datatype="number" value="-0.1047"></twx-widget-property><twx-widget-property name="scale" datatype="string" value="0.7000"></twx-widget-property><twx-widget-property name="imageattrs" datatype="string" value=""></twx-widget-property><twx-widget-property name="texty" datatype="number" value="94"></twx-widget-property><twx-widget-property name="textx" datatype="number" value="64"></twx-widget-property><twx-widget-property name="stateFormat" datatype="string"></twx-widget-property><twx-widget-property name="stateFormatValue" datatype="string" value="text"></twx-widget-property><twx-widget-property name="enableStateFormatting" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="textattrs" datatype="string" value="fill:rgba(255, 255, 255, 1);textbaseline:middle;textalign:center"></twx-widget-property><twx-widget-property name="fontsize" datatype="string" value="35px"></twx-widget-property><twx-widget-property name="font" datatype="string" value="Arial"></twx-widget-property><twx-widget-property name="src" datatype="resource_url" value="app/resources/Default/vu_gauge1.svg"></twx-widget-property><twx-widget-property name="text" datatype="string" value=""></twx-widget-property><twx-widget-content><twx-dt-sensor id="3DGauge-2" x="{{me.x}}" y="{{me.y}}" z="{{me.z}}" rx="{{me.rx}}" ry="{{me.ry}}" rz="{{me.rz}}" sx="{{me.scale.split(&apos; &apos;)[0] || me.scale}}" sy="{{me.scale.split(&apos; &apos;)[1] || me.scale}}" sz="{{me.scale.split(&apos; &apos;)[2] || me.scale}}" billboard="{{me.billboard}}" occlude="{{me.occlude}}" opacity="{{me.opacity}}" pivot="{{me.pivot}}" decal="{{me.decal}}" canvasheight="{{me.canvasheight}}" canvaswidth="{{me.canvaswidth}}" height="{{me.height}}" width="{{me.width}}" imageattrs="{{app.fn.buildImageAttrs(me.imagex,me.imagey,me.imageattrs)}}" textattrs="{{app.fn.buildTextAttrs(me.textx,me.texty,me.font,me.fontsize,me.textattrs)}}" canvasgrowthoverride="{{me.canvasgrowthoverride}}" textx="{{me.textx}}" texty="{{me.texty}}" imagex="{{me.imagex}}" imagey="{{me.imagey}}" text="{{me.text}}" ng-src="{{me.src | trustUrl}}" src="app/resources/Default/vu_gauge1.svg" shader="{{me.shader}}" hidden="{{app.fn.getThreeStateBoolInv(me.visible)}}" experimental-one-sided="{{me.experimentalOneSided}}"></twx-dt-sensor></twx-widget-content><twx-databind databind-id="db-1661365697229" source-type="data" source-name="WS_Humidity" source-item-type="property" source-item-name="Channel3_Device3_Humidity" binding-type="property_field" from-expression="app.mdl[&apos;WS_Humidity&apos;].properties[&apos;Channel3_Device3_Humidity&apos;]" to-property="text"><twx-data-filter filter-id="df-1661365773034" filter-name="RoundHumidity" filter-body="return Math.round(value *100)/100"></twx-data-filter></twx-databind></twx-widget><twx-widget widget-id="3DGauge-3" original-widget="twx-dt-sensor" widget-name="3DGauge-3"><twx-widget-property name="widgetName" datatype="string" value="3DGauge-3"></twx-widget-property><twx-widget-property name="placeholder_img" datatype="" value="/extensions/images/placeholder_img.svg"></twx-widget-property><twx-widget-property name="width" datatype="number" value=""></twx-widget-property><twx-widget-property name="height" datatype="number" value=""></twx-widget-property><twx-widget-property name="shader" datatype="string" value=""></twx-widget-property><twx-widget-property name="pivot" datatype="select" value="5"></twx-widget-property><twx-widget-property name="opacity" datatype="number" value="1"></twx-widget-property><twx-widget-property name="experimentalOneSided" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="decal" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="occlude" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="billboard" datatype="boolean" value="true"></twx-widget-property><twx-widget-property name="visible" datatype="boolean" value="true"></twx-widget-property><twx-widget-property name="canvaswidth" datatype="number" value="128"></twx-widget-property><twx-widget-property name="canvasheight" datatype="number" value="128"></twx-widget-property><twx-widget-property name="canvasgrowthoverride" datatype="string" value="image+text"></twx-widget-property><twx-widget-property name="imagey" datatype="number" value="0"></twx-widget-property><twx-widget-property name="imagex" datatype="number" value="0"></twx-widget-property><twx-widget-property name="rz" datatype="number" value="0.00"></twx-widget-property><twx-widget-property name="ry" datatype="number" value="0.00"></twx-widget-property><twx-widget-property name="rx" datatype="number" value="0.00"></twx-widget-property><twx-widget-property name="z" datatype="number" value="0.0000"></twx-widget-property><twx-widget-property name="y" datatype="number" value="0.0459"></twx-widget-property><twx-widget-property name="x" datatype="number" value="0.1114"></twx-widget-property><twx-widget-property name="scale" datatype="string" value="0.7000"></twx-widget-property><twx-widget-property name="imageattrs" datatype="string" value=""></twx-widget-property><twx-widget-property name="texty" datatype="number" value="94"></twx-widget-property><twx-widget-property name="textx" datatype="number" value="64"></twx-widget-property><twx-widget-property name="stateFormat" datatype="string"></twx-widget-property><twx-widget-property name="stateFormatValue" datatype="string" value="text"></twx-widget-property><twx-widget-property name="enableStateFormatting" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="textattrs" datatype="string" value="fill:rgba(255, 255, 255, 1);textbaseline:middle;textalign:center"></twx-widget-property><twx-widget-property name="fontsize" datatype="string" value="30px"></twx-widget-property><twx-widget-property name="font" datatype="string" value="Arial"></twx-widget-property><twx-widget-property name="src" datatype="resource_url" value="app/resources/Default/vu_gauge1.svg"></twx-widget-property><twx-widget-property name="text" datatype="string" value=""></twx-widget-property><twx-widget-content><twx-dt-sensor id="3DGauge-3" x="{{me.x}}" y="{{me.y}}" z="{{me.z}}" rx="{{me.rx}}" ry="{{me.ry}}" rz="{{me.rz}}" sx="{{me.scale.split(&apos; &apos;)[0] || me.scale}}" sy="{{me.scale.split(&apos; &apos;)[1] || me.scale}}" sz="{{me.scale.split(&apos; &apos;)[2] || me.scale}}" billboard="{{me.billboard}}" occlude="{{me.occlude}}" opacity="{{me.opacity}}" pivot="{{me.pivot}}" decal="{{me.decal}}" canvasheight="{{me.canvasheight}}" canvaswidth="{{me.canvaswidth}}" height="{{me.height}}" width="{{me.width}}" imageattrs="{{app.fn.buildImageAttrs(me.imagex,me.imagey,me.imageattrs)}}" textattrs="{{app.fn.buildTextAttrs(me.textx,me.texty,me.font,me.fontsize,me.textattrs)}}" canvasgrowthoverride="{{me.canvasgrowthoverride}}" textx="{{me.textx}}" texty="{{me.texty}}" imagex="{{me.imagex}}" imagey="{{me.imagey}}" text="{{me.text}}" ng-src="{{me.src | trustUrl}}" src="app/resources/Default/vu_gauge1.svg" shader="{{me.shader}}" hidden="{{app.fn.getThreeStateBoolInv(me.visible)}}" experimental-one-sided="{{me.experimentalOneSided}}"></twx-dt-sensor></twx-widget-content><twx-databind databind-id="db-1661365681065" source-type="data" source-name="WS_Pressure" source-item-type="property" source-item-name="Channel3_Device3_Pressure" binding-type="property_field" from-expression="app.mdl[&apos;WS_Pressure&apos;].properties[&apos;Channel3_Device3_Pressure&apos;]" to-property="text"><twx-data-filter filter-id="df-1661365759694" filter-name="RoundPressure" filter-body="return Math.round(value *100)/100"></twx-data-filter></twx-databind></twx-widget><twx-widget widget-id="3DLabel-1" original-widget="twx-dt-label" widget-name="3DLabel-1"><twx-widget-property name="widgetName" datatype="string" value="3DLabel-1"></twx-widget-property><twx-widget-property name="shader" datatype="string" value=""></twx-widget-property><twx-widget-property name="pivot" datatype="select" value="5"></twx-widget-property><twx-widget-property name="opacity" datatype="number" value="1"></twx-widget-property><twx-widget-property name="experimentalOneSided" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="decal" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="occlude" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="billboard" datatype="boolean" value="true"></twx-widget-property><twx-widget-property name="visible" datatype="boolean" value="true"></twx-widget-property><twx-widget-property name="rz" datatype="number" value="0.00"></twx-widget-property><twx-widget-property name="ry" datatype="number" value="0.00"></twx-widget-property><twx-widget-property name="rx" datatype="number" value="0.00"></twx-widget-property><twx-widget-property name="z" datatype="number" value="0.0000"></twx-widget-property><twx-widget-property name="y" datatype="number" value="0.1116"></twx-widget-property><twx-widget-property name="x" datatype="number" value="-0.1020"></twx-widget-property><twx-widget-property name="scale" datatype="string" value="0.5"></twx-widget-property><twx-widget-property name="fontOutlineColor" datatype="string"></twx-widget-property><twx-widget-property name="fontColor" datatype="string"></twx-widget-property><twx-widget-property name="textprops" datatype="string" value=""></twx-widget-property><twx-widget-property name="fontFamily" datatype="string"></twx-widget-property><twx-widget-property name="stateFormat" datatype="string"></twx-widget-property><twx-widget-property name="stateFormatValue" datatype="string" value="text"></twx-widget-property><twx-widget-property name="enableStateFormatting" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="class" datatype="string"></twx-widget-property><twx-widget-property name="width" datatype="number" value=""></twx-widget-property><twx-widget-property name="height" datatype="number" value=""></twx-widget-property><twx-widget-property name="text" datatype="string" value="Humidiy"></twx-widget-property><twx-widget-content><twx-dt-label id="3DLabel-1" text="{{me.text}}" height="{{me.height}}" width="{{me.width}}" class="basic-3d-state-formatting {{me.class}}" enablestateformatting="{{me.enableStateFormatting}}" stateformatvalue="{{me.stateFormatValue}}" stateformat="{{me.stateFormat}}" fontfamily="{{me.fontFamily}}" textattrs="{{me.textprops}}" fontcolor="{{me.fontColor}}" fontoutlinecolor="{{me.fontOutlineColor}}" sx="{{me.scale.split(&apos; &apos;)[0] || me.scale}}" sy="{{me.scale.split(&apos; &apos;)[1] || me.scale}}" sz="{{me.scale.split(&apos; &apos;)[2] || me.scale}}" x="{{me.x}}" y="{{me.y}}" z="{{me.z}}" rx="{{me.rx}}" ry="{{me.ry}}" rz="{{me.rz}}" hidden="{{app.fn.getThreeStateBoolInv(me.visible)}}" billboard="{{me.billboard}}" occlude="{{me.occlude}}" decal="{{me.decal}}" experimental-one-sided="{{me.experimentalOneSided}}" opacity="{{me.opacity}}" pivot="{{me.pivot}}" shader="{{me.shader}}"></twx-dt-label></twx-widget-content></twx-widget><twx-widget widget-id="3DLabel-2" original-widget="twx-dt-label" widget-name="3DLabel-2"><twx-widget-property name="widgetName" datatype="string" value="3DLabel-2"></twx-widget-property><twx-widget-property name="shader" datatype="string" value=""></twx-widget-property><twx-widget-property name="pivot" datatype="select" value="5"></twx-widget-property><twx-widget-property name="opacity" datatype="number" value="1"></twx-widget-property><twx-widget-property name="experimentalOneSided" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="decal" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="occlude" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="billboard" datatype="boolean" value="true"></twx-widget-property><twx-widget-property name="visible" datatype="boolean" value="true"></twx-widget-property><twx-widget-property name="rz" datatype="number" value="0.00"></twx-widget-property><twx-widget-property name="ry" datatype="number" value="0.00"></twx-widget-property><twx-widget-property name="rx" datatype="number" value="0.00"></twx-widget-property><twx-widget-property name="z" datatype="number" value="0.0000"></twx-widget-property><twx-widget-property name="y" datatype="number" value="0.1763"></twx-widget-property><twx-widget-property name="x" datatype="number" value="0.0010"></twx-widget-property><twx-widget-property name="scale" datatype="string" value="0.5000"></twx-widget-property><twx-widget-property name="fontOutlineColor" datatype="string"></twx-widget-property><twx-widget-property name="fontColor" datatype="string"></twx-widget-property><twx-widget-property name="textprops" datatype="string" value=""></twx-widget-property><twx-widget-property name="fontFamily" datatype="string"></twx-widget-property><twx-widget-property name="stateFormat" datatype="string"></twx-widget-property><twx-widget-property name="stateFormatValue" datatype="string" value="text"></twx-widget-property><twx-widget-property name="enableStateFormatting" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="class" datatype="string"></twx-widget-property><twx-widget-property name="width" datatype="number" value=""></twx-widget-property><twx-widget-property name="height" datatype="number" value=""></twx-widget-property><twx-widget-property name="text" datatype="string" value="Temperature"></twx-widget-property><twx-widget-content><twx-dt-label id="3DLabel-2" text="{{me.text}}" height="{{me.height}}" width="{{me.width}}" class="basic-3d-state-formatting {{me.class}}" enablestateformatting="{{me.enableStateFormatting}}" stateformatvalue="{{me.stateFormatValue}}" stateformat="{{me.stateFormat}}" fontfamily="{{me.fontFamily}}" textattrs="{{me.textprops}}" fontcolor="{{me.fontColor}}" fontoutlinecolor="{{me.fontOutlineColor}}" sx="{{me.scale.split(&apos; &apos;)[0] || me.scale}}" sy="{{me.scale.split(&apos; &apos;)[1] || me.scale}}" sz="{{me.scale.split(&apos; &apos;)[2] || me.scale}}" x="{{me.x}}" y="{{me.y}}" z="{{me.z}}" rx="{{me.rx}}" ry="{{me.ry}}" rz="{{me.rz}}" hidden="{{app.fn.getThreeStateBoolInv(me.visible)}}" billboard="{{me.billboard}}" occlude="{{me.occlude}}" decal="{{me.decal}}" experimental-one-sided="{{me.experimentalOneSided}}" opacity="{{me.opacity}}" pivot="{{me.pivot}}" shader="{{me.shader}}"></twx-dt-label></twx-widget-content></twx-widget><twx-widget widget-id="3DLabel-3" original-widget="twx-dt-label" widget-name="3DLabel-3"><twx-widget-property name="widgetName" datatype="string" value="3DLabel-3"></twx-widget-property><twx-widget-property name="shader" datatype="string" value=""></twx-widget-property><twx-widget-property name="pivot" datatype="select" value="5"></twx-widget-property><twx-widget-property name="opacity" datatype="number" value="1"></twx-widget-property><twx-widget-property name="experimentalOneSided" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="decal" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="occlude" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="billboard" datatype="boolean" value="true"></twx-widget-property><twx-widget-property name="visible" datatype="boolean" value="true"></twx-widget-property><twx-widget-property name="rz" datatype="number" value="0.00"></twx-widget-property><twx-widget-property name="ry" datatype="number" value="0.00"></twx-widget-property><twx-widget-property name="rx" datatype="number" value="0.00"></twx-widget-property><twx-widget-property name="z" datatype="number" value="0.0000"></twx-widget-property><twx-widget-property name="y" datatype="number" value="0.1116"></twx-widget-property><twx-widget-property name="x" datatype="number" value="0.1127"></twx-widget-property><twx-widget-property name="scale" datatype="string" value="0.5000"></twx-widget-property><twx-widget-property name="fontOutlineColor" datatype="string"></twx-widget-property><twx-widget-property name="fontColor" datatype="string"></twx-widget-property><twx-widget-property name="textprops" datatype="string" value=""></twx-widget-property><twx-widget-property name="fontFamily" datatype="string"></twx-widget-property><twx-widget-property name="stateFormat" datatype="string"></twx-widget-property><twx-widget-property name="stateFormatValue" datatype="string" value="text"></twx-widget-property><twx-widget-property name="enableStateFormatting" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="class" datatype="string"></twx-widget-property><twx-widget-property name="width" datatype="number" value=""></twx-widget-property><twx-widget-property name="height" datatype="number" value=""></twx-widget-property><twx-widget-property name="text" datatype="string" value="Pressure"></twx-widget-property><twx-widget-content><twx-dt-label id="3DLabel-3" text="{{me.text}}" height="{{me.height}}" width="{{me.width}}" class="basic-3d-state-formatting {{me.class}}" enablestateformatting="{{me.enableStateFormatting}}" stateformatvalue="{{me.stateFormatValue}}" stateformat="{{me.stateFormat}}" fontfamily="{{me.fontFamily}}" textattrs="{{me.textprops}}" fontcolor="{{me.fontColor}}" fontoutlinecolor="{{me.fontOutlineColor}}" sx="{{me.scale.split(&apos; &apos;)[0] || me.scale}}" sy="{{me.scale.split(&apos; &apos;)[1] || me.scale}}" sz="{{me.scale.split(&apos; &apos;)[2] || me.scale}}" x="{{me.x}}" y="{{me.y}}" z="{{me.z}}" rx="{{me.rx}}" ry="{{me.ry}}" rz="{{me.rz}}" hidden="{{app.fn.getThreeStateBoolInv(me.visible)}}" billboard="{{me.billboard}}" occlude="{{me.occlude}}" decal="{{me.decal}}" experimental-one-sided="{{me.experimentalOneSided}}" opacity="{{me.opacity}}" pivot="{{me.pivot}}" shader="{{me.shader}}"></twx-dt-label></twx-widget-content></twx-widget></twx-container-content>\n'+
'     </twx-dt-tracker>\n'+
'</twx-dt-view></twx-widget-content></twx-widget><twx-widget widget-id="2DOverlay-1" original-widget="twx-overlay" widget-name="2D Overlay"><twx-widget-property name="widgetName" datatype="string" value="2D Overlay"></twx-widget-property><twx-widget-property name="class" datatype="string"></twx-widget-property><twx-widget-property name="visible" datatype="boolean" value="true"></twx-widget-property><twx-widget-content><div class="twx-2d-overlay {{me.class}}" ng-show="app.fn.isTrue(me.visible)"><twx-container-content><div class="panel undefined top" style=" "><twx-widget widget-id="image-1" original-widget="twx-image2" widget-name="image-1"><twx-widget-property name="widgetName" datatype="string" value="image-1"></twx-widget-property><twx-widget-property name="padding" datatype="string" value=""></twx-widget-property><twx-widget-property name="visible" datatype="boolean" value="true"></twx-widget-property><twx-widget-property name="imageAlign" datatype="string" value="flex-start"></twx-widget-property><twx-widget-property name="height" datatype="string" value=""></twx-widget-property><twx-widget-property name="width" datatype="string" value=""></twx-widget-property><twx-widget-property name="backgroundcolor" datatype="string"></twx-widget-property><twx-widget-property name="imgsrc" datatype="resource_url" value="app/resources/Uploaded/studio-logo.png"></twx-widget-property><twx-widget-property name="class" datatype="string" value="watermark scaled-logo rounded-corners"></twx-widget-property><twx-widget-content><div class="imgAlignContainer" style="justify-content: flex-start;"><img class="{{me.class}}" ng-show="app.fn.isTrue(me.visible)" style="background-color: {{me.backgroundcolor}}; width: {{me.width}}; height: {{me.height}};  padding: {{me.padding}}" ng-src="{{me.imgsrc}}" twx-native-events=""></div></twx-widget-content></twx-widget></div><div class="panel body undefined"><div class="panel undefined left" style=" "><twx-widget widget-id="gridLayout-2" original-widget="twx-gridlayout" widget-name="gridLayout-2"><twx-widget-property name="widgetName" datatype="string" value="gridLayout-2"></twx-widget-property><twx-widget-property name="evenlyspacedrows" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="margin" datatype="string" value=""></twx-widget-property><twx-widget-property name="class" datatype="string"></twx-widget-property><twx-widget-property name="visible" datatype="boolean" value="true"></twx-widget-property><twx-widget-content><div ng-show="app.fn.isTrue(me.visible)" even-rows="false" class="gridLayout {{me.class}}" style="padding:;"><twx-container-content><div class="row undefined" style=""><div class="col undefined" style="flex-direction:column;justify-content: flex-start;align-items: stretch;padding: 0px;flex-wrap: wrap;"><twx-widget widget-id="button-2" original-widget="twx-button" widget-name="button-2"><twx-widget-property name="widgetName" datatype="string" value="button-2"></twx-widget-property><twx-widget-property name="margin" datatype="string"></twx-widget-property><twx-widget-property name="disabled" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="visible" datatype="boolean" value="true"></twx-widget-property><twx-widget-property name="class" datatype="string" value="homeHamburger2"></twx-widget-property><twx-widget-property name="text" datatype="string" value=""></twx-widget-property><twx-widget-content><button style="" ng-show="app.fn.isTrue(me.visible)" ng-disabled="app.fn.isTrue(me.disabled)" class="button {{me.class}}" twx-native-events="">{{me.text}}</button></twx-widget-content><twx-eventbind eventbind-id="eb-1661367338918" source-type="widget" source-label="Button" source-name="button-2" source-event="click" handler-namespace="app" handler-name="fn" handler-service="navigate" handler-path="app-fn-navigate"><twx-event-data data-name="viewname" data-value="HomePage"></twx-event-data></twx-eventbind></twx-widget></div></div><div class="row undefined" style=""><div class="col undefined" style="flex-direction:column;justify-content: flex-start;align-items: stretch;padding: 0px;flex-wrap: wrap;"><twx-widget widget-id="button-3" original-widget="twx-button" widget-name="button-3"><twx-widget-property name="widgetName" datatype="string" value="button-3"></twx-widget-property><twx-widget-property name="margin" datatype="string"></twx-widget-property><twx-widget-property name="disabled" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="visible" datatype="boolean" value="true"></twx-widget-property><twx-widget-property name="class" datatype="string" value="backArrow"></twx-widget-property><twx-widget-property name="text" datatype="string" value=""></twx-widget-property><twx-widget-content><button style="" ng-show="app.fn.isTrue(me.visible)" ng-disabled="app.fn.isTrue(me.disabled)" class="button {{me.class}}" twx-native-events="">{{me.text}}</button></twx-widget-content><twx-eventbind eventbind-id="eb-1661367650566" source-type="widget" source-label="Button" source-name="button-3" source-event="click" handler-namespace="app" handler-name="fn" handler-service="navigate" handler-path="app-fn-navigate"><twx-event-data data-name="viewname" data-value="CXC_WS"></twx-event-data></twx-eventbind></twx-widget></div></div></twx-container-content></div></twx-widget-content></twx-widget></div><div class="panel undefined center" style=" "></div><div class="panel undefined right" style=" "><twx-widget widget-id="gridLayout-1" original-widget="twx-gridlayout" widget-name="gridLayout-1"><twx-widget-property name="widgetName" datatype="string" value="gridLayout-1"></twx-widget-property><twx-widget-property name="evenlyspacedrows" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="margin" datatype="string" value=""></twx-widget-property><twx-widget-property name="class" datatype="string"></twx-widget-property><twx-widget-property name="visible" datatype="boolean" value="true"></twx-widget-property><twx-widget-content><div ng-show="app.fn.isTrue(me.visible)" even-rows="false" class="gridLayout {{me.class}}" style="padding:;"><twx-container-content><div class="row undefined" style=""><div class="col undefined" style="flex-direction:column;justify-content: flex-start;align-items: stretch;padding: 0px;flex-wrap: wrap;"></div></div></twx-container-content></div></twx-widget-content></twx-widget></div></div><div class="panel undefined bottom" style=" "></div></twx-container-content></div></twx-widget-content></twx-widget></twx-container-content></twx-widget-content><twx-fragment-parameters></twx-fragment-parameters><twx-view-data></twx-view-data></twx-widget></ion-content></ion-view>\n';
      if (twx.app.isPreview() && viewHTML.indexOf('view-type="ar"') > 0) {
        viewHTML = viewHTML.replace(/<twx-dt-modelitem /ig, '<twx-dt-modelitem ng-if="$root.thingViewReady !== false" ');
      }
      $templateCache.put('app/components/3D_CXC_WS.html', viewHTML);
    

    
  });

  

  twxViewControllersModule.controller('HomePage_TwxViewController',
      function ($scope, $element, $attrs, $timeout, $interval, $http, $ionicPopup, $ionicPopover, $stateParams, $location, $rootScope, tml3dRenderer, $injector, $sce) {
    $scope.app = twx.appScope;
    $scope.device = twx.device;
    $scope.view = {
        mdl: {
            custom: {}
        },
        wdg: {},
        fn: {},
        evt: {},
        prm: {},
        view: {}
    };

    var myWidgets = '';
    var activeWidgetEvents = {};
    var customWidgetEventListeners = [];

    if( $attrs['twxView'] !== undefined && $attrs['twxView'].length > 0 ) {
        $scope.app.view = $scope.app.view || {};
        $scope.app.view[$attrs['twxView']] = $scope.view;
    }

    this.setProperty = function(widgetProperty,value) {
        $scope.view.wdg[$attrs.widgetId][widgetProperty] = value;

    };

    this.addWidget = function(widgetScope,widgetElem,widgetAttrs) {
        var widgetId = widgetAttrs['widgetId'] || widgetAttrs['model'];
        var x = $scope;
        $scope.view.wdg = $scope.view.wdg || {};
        $scope.view.wdg[widgetId] = widgetScope[widgetId];
        myWidgets += '|' + widgetId;
        widgetScope['_widgetId'] = widgetId;
        //console.log('twxView --- adding widget "' + widgetId + '" to view - total widgets: ' + myWidgets);
    };

    $scope.getWidgetScope = function(widgetId){
      return $scope.view.wdg[widgetId];
    };

    $scope.getWidgetProp = function (widgetId, prop) {
      return $scope.view.wdg[widgetId] ? $scope.view.wdg[widgetId][prop] : undefined;
    };

    $scope.setWidgetProp = function (widgetId, prop, val) {
      if ($scope.view.wdg[widgetId]) {
        $scope.view.wdg[widgetId][prop] = val;
      }
    };

    $scope.addWidgetEventListener = function (widgetId, widgetEvent, callback) {
      customWidgetEventListeners.push({
        widgetId: widgetId,
        widgetEvent: widgetEvent,
        callback: callback
      });
      if (!activeWidgetEvents[widgetEvent]) {
        activeWidgetEvents[widgetEvent] = true;
        $scope.$on(widgetEvent, function (event, args) {
          _.each(customWidgetEventListeners, function (listenerInfo) {
            if (listenerInfo.widgetId == event.targetScope.widgetId && listenerInfo.widgetEvent == event.name) {
              listenerInfo.callback();
            }
          });
        });
      }
    };

    $scope.pulse = 1.0;

    $scope.tracerWidth = 0.0;
    $scope.tracerHeight = 0.0;
    $scope.tracerDimensions = { minX: 0, maxX: 1, minY: 0, maxY: 1 };
    $scope.loadingPromise = null;
    $scope.modelLoaded = $element.find('twx-dt-model').length === 0;
    var modelCount = $element.find('twx-dt-model').length;
    var modelLoadedCount = 0;
    var targets = $element.find('twx-dt-target');

    // hide the target guide initially until the actual image to use is known.
    $scope.hideTargetGuide = true;

    function setImageTrackerTracerDimensions(src) {
      let image = new Image();
      image.onload = () => {
        $scope.tracerWidth = image.width;
        $scope.tracerHeight = image.height;
        $scope.$apply();
      };

      image.src = src;
    }

    var setGuideImageData = function() {
      if (targets[0]) { // assume one target only
        var src = targets[0].getAttribute("src");

        if (src.startsWith("vuforia-vumark://")) {
          var isVumark = targets[0].getAttribute("isVuMark");
          $scope.hideTargetGuide = false;
          if (isVumark) {
            $scope.targetGuideClass = "vumark";
            $scope.targetGuideHint = "Point camera at VuMark";
          } else {
            $scope.targetGuideClass = "thingmark";
            $scope.targetGuideHint = "Point camera at ThingMark";
          }
        } else if (src.startsWith('vuforia-image://')) {
          $scope.hideTargetGuide = false;
          $scope.targetGuideClass = "imageTarget";
          $scope.targetGuideHint = 'Point camera at image';
          setImageTrackerTracerDimensions(targets[0].getAttribute("guide-src"));
        } else if (src.startsWith("vuforia-area://")) {
          $scope.hideTargetGuide = false;
          $scope.targetGuideClass = "areaTarget";
          var targetGuideDiv = $element[0].querySelector("div.targetGuide");
          var guideSrc = targets[0].getAttribute("guide-src");
          if (targetGuideDiv && guideSrc) {
            targetGuideDiv.style.backgroundImage = "url('" + guideSrc + "')";
          }
          if(guideSrc.endsWith('extensions/images/area-target-guide.png')) {
            //checking for a mobile project, mobile projects are using the clean guide image. is there a better way to check?
            $scope.targetGuideHint = targets[0].getAttribute("guide-text");
          }
        } else if (!src.startsWith("spatial://")) {
          $scope.hideTargetGuide = false;
          var targetGuideDiv = $element[0].querySelector("div.targetGuide");
          var guideSrc = targets[0].getAttribute("guide-src");
          if (targetGuideDiv && guideSrc) {
            $scope.targetGuideClass = "imagemark";
            targetGuideDiv.style.backgroundImage = "url('" + guideSrc + "')";
          }
        }
      }
    };

    $scope.$applyAsync(function() {
      // This has to be invoked asynchronously now to give angular time to digest and interpolate the value of
      // guide-src="{{ ... }}" to the real value.
      setGuideImageData();
    });

    $scope.$on('trackingacquired', function (evt, arg) {
      tml3dRenderer.getTracked(function(trackedObjects) {
        $scope.startLoadingIndicatorIfNeeded(trackedObjects);
        $scope.applyTargetGuideIfNeeded(trackedObjects);
      });
    });

    $scope.$on('trackinglost', function (evt, arg) {
      tml3dRenderer.getTracked(function(trackedObjects) {
        $scope.applyTargetGuideIfNeeded(trackedObjects);
      });
    });

    $scope.$on('modelLoaded', function (evt, arg) {
      modelLoadedCount++;
      $scope.modelLoaded = true;

      tml3dRenderer.getTracked(function(trackedObjects) {
        $scope.applyTargetGuideIfNeeded(trackedObjects);
      });
    });

    // starts the 'spinner' animation around the thing code while the model is loading
    $scope.startLoadingIndicatorIfNeeded = function (trackedObjects) {
      if (!twx.app.fn.isCompatibleObjectsTracked(trackedObjects, targets)) {
        return;
      }

      // Start animation if this is first successful call to startLoadingIndicatorIfNeeded.
      var spinnerInterval = 0.03;
      if ($scope.pulse === 1.0 && $scope.loadingPromise === null) {
        $scope.loadingPromise = $interval(function () {
          // stop the animation after it makes one complete loop around
          if($scope.pulse <= 0) {
            // stop the animation
            $interval.cancel($scope.loadingPromise);
            $scope.loadingPromise = null;
            $scope.pulse = 0;
          }
          $scope.pulse -= spinnerInterval;
        }, 100);
      }
    };

    /**
     * @param trackedObjects [Elements]
     */
    $scope.applyTargetGuideIfNeeded = function(trackedObjects) {
      var hideTargetGuide = twx.app.fn.computeHideTargetGuide(trackedObjects, targets, modelLoadedCount, modelCount);

      $scope.$apply(function () {
        $scope.hideTargetGuide = hideTargetGuide;
      });
    };

    (function($scope, $element, $attrs, $timeout){

      // $scope, $element, $attrs, $injector, $sce, $timeout, $http, $ionicPopup, and $ionicPopover services are available

    }($scope, $element, $attrs, $timeout))

  });

  

  twxViewControllersModule.controller('IDF_TwxViewController',
      function ($scope, $element, $attrs, $timeout, $interval, $http, $ionicPopup, $ionicPopover, $stateParams, $location, $rootScope, tml3dRenderer, $injector, $sce) {
    $scope.app = twx.appScope;
    $scope.device = twx.device;
    $scope.view = {
        mdl: {
            custom: {}
        },
        wdg: {},
        fn: {},
        evt: {},
        prm: {},
        view: {}
    };

    var myWidgets = '';
    var activeWidgetEvents = {};
    var customWidgetEventListeners = [];

    if( $attrs['twxView'] !== undefined && $attrs['twxView'].length > 0 ) {
        $scope.app.view = $scope.app.view || {};
        $scope.app.view[$attrs['twxView']] = $scope.view;
    }

    this.setProperty = function(widgetProperty,value) {
        $scope.view.wdg[$attrs.widgetId][widgetProperty] = value;

    };

    this.addWidget = function(widgetScope,widgetElem,widgetAttrs) {
        var widgetId = widgetAttrs['widgetId'] || widgetAttrs['model'];
        var x = $scope;
        $scope.view.wdg = $scope.view.wdg || {};
        $scope.view.wdg[widgetId] = widgetScope[widgetId];
        myWidgets += '|' + widgetId;
        widgetScope['_widgetId'] = widgetId;
        //console.log('twxView --- adding widget "' + widgetId + '" to view - total widgets: ' + myWidgets);
    };

    $scope.getWidgetScope = function(widgetId){
      return $scope.view.wdg[widgetId];
    };

    $scope.getWidgetProp = function (widgetId, prop) {
      return $scope.view.wdg[widgetId] ? $scope.view.wdg[widgetId][prop] : undefined;
    };

    $scope.setWidgetProp = function (widgetId, prop, val) {
      if ($scope.view.wdg[widgetId]) {
        $scope.view.wdg[widgetId][prop] = val;
      }
    };

    $scope.addWidgetEventListener = function (widgetId, widgetEvent, callback) {
      customWidgetEventListeners.push({
        widgetId: widgetId,
        widgetEvent: widgetEvent,
        callback: callback
      });
      if (!activeWidgetEvents[widgetEvent]) {
        activeWidgetEvents[widgetEvent] = true;
        $scope.$on(widgetEvent, function (event, args) {
          _.each(customWidgetEventListeners, function (listenerInfo) {
            if (listenerInfo.widgetId == event.targetScope.widgetId && listenerInfo.widgetEvent == event.name) {
              listenerInfo.callback();
            }
          });
        });
      }
    };

    $scope.pulse = 1.0;

    $scope.tracerWidth = 0.0;
    $scope.tracerHeight = 0.0;
    $scope.tracerDimensions = { minX: 0, maxX: 1, minY: 0, maxY: 1 };
    $scope.loadingPromise = null;
    $scope.modelLoaded = $element.find('twx-dt-model').length === 0;
    var modelCount = $element.find('twx-dt-model').length;
    var modelLoadedCount = 0;
    var targets = $element.find('twx-dt-target');

    // hide the target guide initially until the actual image to use is known.
    $scope.hideTargetGuide = true;

    function setImageTrackerTracerDimensions(src) {
      let image = new Image();
      image.onload = () => {
        $scope.tracerWidth = image.width;
        $scope.tracerHeight = image.height;
        $scope.$apply();
      };

      image.src = src;
    }

    var setGuideImageData = function() {
      if (targets[0]) { // assume one target only
        var src = targets[0].getAttribute("src");

        if (src.startsWith("vuforia-vumark://")) {
          var isVumark = targets[0].getAttribute("isVuMark");
          $scope.hideTargetGuide = false;
          if (isVumark) {
            $scope.targetGuideClass = "vumark";
            $scope.targetGuideHint = "Point camera at VuMark";
          } else {
            $scope.targetGuideClass = "thingmark";
            $scope.targetGuideHint = "Point camera at ThingMark";
          }
        } else if (src.startsWith('vuforia-image://')) {
          $scope.hideTargetGuide = false;
          $scope.targetGuideClass = "imageTarget";
          $scope.targetGuideHint = 'Point camera at image';
          setImageTrackerTracerDimensions(targets[0].getAttribute("guide-src"));
        } else if (src.startsWith("vuforia-area://")) {
          $scope.hideTargetGuide = false;
          $scope.targetGuideClass = "areaTarget";
          var targetGuideDiv = $element[0].querySelector("div.targetGuide");
          var guideSrc = targets[0].getAttribute("guide-src");
          if (targetGuideDiv && guideSrc) {
            targetGuideDiv.style.backgroundImage = "url('" + guideSrc + "')";
          }
          if(guideSrc.endsWith('extensions/images/area-target-guide.png')) {
            //checking for a mobile project, mobile projects are using the clean guide image. is there a better way to check?
            $scope.targetGuideHint = targets[0].getAttribute("guide-text");
          }
        } else if (!src.startsWith("spatial://")) {
          $scope.hideTargetGuide = false;
          var targetGuideDiv = $element[0].querySelector("div.targetGuide");
          var guideSrc = targets[0].getAttribute("guide-src");
          if (targetGuideDiv && guideSrc) {
            $scope.targetGuideClass = "imagemark";
            targetGuideDiv.style.backgroundImage = "url('" + guideSrc + "')";
          }
        }
      }
    };

    $scope.$applyAsync(function() {
      // This has to be invoked asynchronously now to give angular time to digest and interpolate the value of
      // guide-src="{{ ... }}" to the real value.
      setGuideImageData();
    });

    $scope.$on('trackingacquired', function (evt, arg) {
      tml3dRenderer.getTracked(function(trackedObjects) {
        $scope.startLoadingIndicatorIfNeeded(trackedObjects);
        $scope.applyTargetGuideIfNeeded(trackedObjects);
      });
    });

    $scope.$on('trackinglost', function (evt, arg) {
      tml3dRenderer.getTracked(function(trackedObjects) {
        $scope.applyTargetGuideIfNeeded(trackedObjects);
      });
    });

    $scope.$on('modelLoaded', function (evt, arg) {
      modelLoadedCount++;
      $scope.modelLoaded = true;

      tml3dRenderer.getTracked(function(trackedObjects) {
        $scope.applyTargetGuideIfNeeded(trackedObjects);
      });
    });

    // starts the 'spinner' animation around the thing code while the model is loading
    $scope.startLoadingIndicatorIfNeeded = function (trackedObjects) {
      if (!twx.app.fn.isCompatibleObjectsTracked(trackedObjects, targets)) {
        return;
      }

      // Start animation if this is first successful call to startLoadingIndicatorIfNeeded.
      var spinnerInterval = 0.03;
      if ($scope.pulse === 1.0 && $scope.loadingPromise === null) {
        $scope.loadingPromise = $interval(function () {
          // stop the animation after it makes one complete loop around
          if($scope.pulse <= 0) {
            // stop the animation
            $interval.cancel($scope.loadingPromise);
            $scope.loadingPromise = null;
            $scope.pulse = 0;
          }
          $scope.pulse -= spinnerInterval;
        }, 100);
      }
    };

    /**
     * @param trackedObjects [Elements]
     */
    $scope.applyTargetGuideIfNeeded = function(trackedObjects) {
      var hideTargetGuide = twx.app.fn.computeHideTargetGuide(trackedObjects, targets, modelLoadedCount, modelCount);

      $scope.$apply(function () {
        $scope.hideTargetGuide = hideTargetGuide;
      });
    };

    (function($scope, $element, $attrs, $timeout){

      // $scope, $element, $attrs, $injector, $sce, $timeout, $http, $ionicPopup, and $ionicPopover services are available




    }($scope, $element, $attrs, $timeout))

  });

  

  twxViewControllersModule.controller('CON_AB_TwxViewController',
      function ($scope, $element, $attrs, $timeout, $interval, $http, $ionicPopup, $ionicPopover, $stateParams, $location, $rootScope, tml3dRenderer, $injector, $sce) {
    $scope.app = twx.appScope;
    $scope.device = twx.device;
    $scope.view = {
        mdl: {
            custom: {}
        },
        wdg: {},
        fn: {},
        evt: {},
        prm: {},
        view: {}
    };

    var myWidgets = '';
    var activeWidgetEvents = {};
    var customWidgetEventListeners = [];

    if( $attrs['twxView'] !== undefined && $attrs['twxView'].length > 0 ) {
        $scope.app.view = $scope.app.view || {};
        $scope.app.view[$attrs['twxView']] = $scope.view;
    }

    this.setProperty = function(widgetProperty,value) {
        $scope.view.wdg[$attrs.widgetId][widgetProperty] = value;

    };

    this.addWidget = function(widgetScope,widgetElem,widgetAttrs) {
        var widgetId = widgetAttrs['widgetId'] || widgetAttrs['model'];
        var x = $scope;
        $scope.view.wdg = $scope.view.wdg || {};
        $scope.view.wdg[widgetId] = widgetScope[widgetId];
        myWidgets += '|' + widgetId;
        widgetScope['_widgetId'] = widgetId;
        //console.log('twxView --- adding widget "' + widgetId + '" to view - total widgets: ' + myWidgets);
    };

    $scope.getWidgetScope = function(widgetId){
      return $scope.view.wdg[widgetId];
    };

    $scope.getWidgetProp = function (widgetId, prop) {
      return $scope.view.wdg[widgetId] ? $scope.view.wdg[widgetId][prop] : undefined;
    };

    $scope.setWidgetProp = function (widgetId, prop, val) {
      if ($scope.view.wdg[widgetId]) {
        $scope.view.wdg[widgetId][prop] = val;
      }
    };

    $scope.addWidgetEventListener = function (widgetId, widgetEvent, callback) {
      customWidgetEventListeners.push({
        widgetId: widgetId,
        widgetEvent: widgetEvent,
        callback: callback
      });
      if (!activeWidgetEvents[widgetEvent]) {
        activeWidgetEvents[widgetEvent] = true;
        $scope.$on(widgetEvent, function (event, args) {
          _.each(customWidgetEventListeners, function (listenerInfo) {
            if (listenerInfo.widgetId == event.targetScope.widgetId && listenerInfo.widgetEvent == event.name) {
              listenerInfo.callback();
            }
          });
        });
      }
    };

    $scope.pulse = 1.0;

    $scope.tracerWidth = 0.0;
    $scope.tracerHeight = 0.0;
    $scope.tracerDimensions = { minX: 0, maxX: 1, minY: 0, maxY: 1 };
    $scope.loadingPromise = null;
    $scope.modelLoaded = $element.find('twx-dt-model').length === 0;
    var modelCount = $element.find('twx-dt-model').length;
    var modelLoadedCount = 0;
    var targets = $element.find('twx-dt-target');

    // hide the target guide initially until the actual image to use is known.
    $scope.hideTargetGuide = true;

    function setImageTrackerTracerDimensions(src) {
      let image = new Image();
      image.onload = () => {
        $scope.tracerWidth = image.width;
        $scope.tracerHeight = image.height;
        $scope.$apply();
      };

      image.src = src;
    }

    var setGuideImageData = function() {
      if (targets[0]) { // assume one target only
        var src = targets[0].getAttribute("src");

        if (src.startsWith("vuforia-vumark://")) {
          var isVumark = targets[0].getAttribute("isVuMark");
          $scope.hideTargetGuide = false;
          if (isVumark) {
            $scope.targetGuideClass = "vumark";
            $scope.targetGuideHint = "Point camera at VuMark";
          } else {
            $scope.targetGuideClass = "thingmark";
            $scope.targetGuideHint = "Point camera at ThingMark";
          }
        } else if (src.startsWith('vuforia-image://')) {
          $scope.hideTargetGuide = false;
          $scope.targetGuideClass = "imageTarget";
          $scope.targetGuideHint = 'Point camera at image';
          setImageTrackerTracerDimensions(targets[0].getAttribute("guide-src"));
        } else if (src.startsWith("vuforia-area://")) {
          $scope.hideTargetGuide = false;
          $scope.targetGuideClass = "areaTarget";
          var targetGuideDiv = $element[0].querySelector("div.targetGuide");
          var guideSrc = targets[0].getAttribute("guide-src");
          if (targetGuideDiv && guideSrc) {
            targetGuideDiv.style.backgroundImage = "url('" + guideSrc + "')";
          }
          if(guideSrc.endsWith('extensions/images/area-target-guide.png')) {
            //checking for a mobile project, mobile projects are using the clean guide image. is there a better way to check?
            $scope.targetGuideHint = targets[0].getAttribute("guide-text");
          }
        } else if (!src.startsWith("spatial://")) {
          $scope.hideTargetGuide = false;
          var targetGuideDiv = $element[0].querySelector("div.targetGuide");
          var guideSrc = targets[0].getAttribute("guide-src");
          if (targetGuideDiv && guideSrc) {
            $scope.targetGuideClass = "imagemark";
            targetGuideDiv.style.backgroundImage = "url('" + guideSrc + "')";
          }
        }
      }
    };

    $scope.$applyAsync(function() {
      // This has to be invoked asynchronously now to give angular time to digest and interpolate the value of
      // guide-src="{{ ... }}" to the real value.
      setGuideImageData();
    });

    $scope.$on('trackingacquired', function (evt, arg) {
      tml3dRenderer.getTracked(function(trackedObjects) {
        $scope.startLoadingIndicatorIfNeeded(trackedObjects);
        $scope.applyTargetGuideIfNeeded(trackedObjects);
      });
    });

    $scope.$on('trackinglost', function (evt, arg) {
      tml3dRenderer.getTracked(function(trackedObjects) {
        $scope.applyTargetGuideIfNeeded(trackedObjects);
      });
    });

    $scope.$on('modelLoaded', function (evt, arg) {
      modelLoadedCount++;
      $scope.modelLoaded = true;

      tml3dRenderer.getTracked(function(trackedObjects) {
        $scope.applyTargetGuideIfNeeded(trackedObjects);
      });
    });

    // starts the 'spinner' animation around the thing code while the model is loading
    $scope.startLoadingIndicatorIfNeeded = function (trackedObjects) {
      if (!twx.app.fn.isCompatibleObjectsTracked(trackedObjects, targets)) {
        return;
      }

      // Start animation if this is first successful call to startLoadingIndicatorIfNeeded.
      var spinnerInterval = 0.03;
      if ($scope.pulse === 1.0 && $scope.loadingPromise === null) {
        $scope.loadingPromise = $interval(function () {
          // stop the animation after it makes one complete loop around
          if($scope.pulse <= 0) {
            // stop the animation
            $interval.cancel($scope.loadingPromise);
            $scope.loadingPromise = null;
            $scope.pulse = 0;
          }
          $scope.pulse -= spinnerInterval;
        }, 100);
      }
    };

    /**
     * @param trackedObjects [Elements]
     */
    $scope.applyTargetGuideIfNeeded = function(trackedObjects) {
      var hideTargetGuide = twx.app.fn.computeHideTargetGuide(trackedObjects, targets, modelLoadedCount, modelCount);

      $scope.$apply(function () {
        $scope.hideTargetGuide = hideTargetGuide;
      });
    };

    (function($scope, $element, $attrs, $timeout){

      // $scope, $element, $attrs, $injector, $sce, $timeout, $http, $ionicPopup, and $ionicPopover services are available




    }($scope, $element, $attrs, $timeout))

  });

  

  twxViewControllersModule.controller('CON_C_TwxViewController',
      function ($scope, $element, $attrs, $timeout, $interval, $http, $ionicPopup, $ionicPopover, $stateParams, $location, $rootScope, tml3dRenderer, $injector, $sce) {
    $scope.app = twx.appScope;
    $scope.device = twx.device;
    $scope.view = {
        mdl: {
            custom: {}
        },
        wdg: {},
        fn: {},
        evt: {},
        prm: {},
        view: {}
    };

    var myWidgets = '';
    var activeWidgetEvents = {};
    var customWidgetEventListeners = [];

    if( $attrs['twxView'] !== undefined && $attrs['twxView'].length > 0 ) {
        $scope.app.view = $scope.app.view || {};
        $scope.app.view[$attrs['twxView']] = $scope.view;
    }

    this.setProperty = function(widgetProperty,value) {
        $scope.view.wdg[$attrs.widgetId][widgetProperty] = value;

    };

    this.addWidget = function(widgetScope,widgetElem,widgetAttrs) {
        var widgetId = widgetAttrs['widgetId'] || widgetAttrs['model'];
        var x = $scope;
        $scope.view.wdg = $scope.view.wdg || {};
        $scope.view.wdg[widgetId] = widgetScope[widgetId];
        myWidgets += '|' + widgetId;
        widgetScope['_widgetId'] = widgetId;
        //console.log('twxView --- adding widget "' + widgetId + '" to view - total widgets: ' + myWidgets);
    };

    $scope.getWidgetScope = function(widgetId){
      return $scope.view.wdg[widgetId];
    };

    $scope.getWidgetProp = function (widgetId, prop) {
      return $scope.view.wdg[widgetId] ? $scope.view.wdg[widgetId][prop] : undefined;
    };

    $scope.setWidgetProp = function (widgetId, prop, val) {
      if ($scope.view.wdg[widgetId]) {
        $scope.view.wdg[widgetId][prop] = val;
      }
    };

    $scope.addWidgetEventListener = function (widgetId, widgetEvent, callback) {
      customWidgetEventListeners.push({
        widgetId: widgetId,
        widgetEvent: widgetEvent,
        callback: callback
      });
      if (!activeWidgetEvents[widgetEvent]) {
        activeWidgetEvents[widgetEvent] = true;
        $scope.$on(widgetEvent, function (event, args) {
          _.each(customWidgetEventListeners, function (listenerInfo) {
            if (listenerInfo.widgetId == event.targetScope.widgetId && listenerInfo.widgetEvent == event.name) {
              listenerInfo.callback();
            }
          });
        });
      }
    };

    $scope.pulse = 1.0;

    $scope.tracerWidth = 0.0;
    $scope.tracerHeight = 0.0;
    $scope.tracerDimensions = { minX: 0, maxX: 1, minY: 0, maxY: 1 };
    $scope.loadingPromise = null;
    $scope.modelLoaded = $element.find('twx-dt-model').length === 0;
    var modelCount = $element.find('twx-dt-model').length;
    var modelLoadedCount = 0;
    var targets = $element.find('twx-dt-target');

    // hide the target guide initially until the actual image to use is known.
    $scope.hideTargetGuide = true;

    function setImageTrackerTracerDimensions(src) {
      let image = new Image();
      image.onload = () => {
        $scope.tracerWidth = image.width;
        $scope.tracerHeight = image.height;
        $scope.$apply();
      };

      image.src = src;
    }

    var setGuideImageData = function() {
      if (targets[0]) { // assume one target only
        var src = targets[0].getAttribute("src");

        if (src.startsWith("vuforia-vumark://")) {
          var isVumark = targets[0].getAttribute("isVuMark");
          $scope.hideTargetGuide = false;
          if (isVumark) {
            $scope.targetGuideClass = "vumark";
            $scope.targetGuideHint = "Point camera at VuMark";
          } else {
            $scope.targetGuideClass = "thingmark";
            $scope.targetGuideHint = "Point camera at ThingMark";
          }
        } else if (src.startsWith('vuforia-image://')) {
          $scope.hideTargetGuide = false;
          $scope.targetGuideClass = "imageTarget";
          $scope.targetGuideHint = 'Point camera at image';
          setImageTrackerTracerDimensions(targets[0].getAttribute("guide-src"));
        } else if (src.startsWith("vuforia-area://")) {
          $scope.hideTargetGuide = false;
          $scope.targetGuideClass = "areaTarget";
          var targetGuideDiv = $element[0].querySelector("div.targetGuide");
          var guideSrc = targets[0].getAttribute("guide-src");
          if (targetGuideDiv && guideSrc) {
            targetGuideDiv.style.backgroundImage = "url('" + guideSrc + "')";
          }
          if(guideSrc.endsWith('extensions/images/area-target-guide.png')) {
            //checking for a mobile project, mobile projects are using the clean guide image. is there a better way to check?
            $scope.targetGuideHint = targets[0].getAttribute("guide-text");
          }
        } else if (!src.startsWith("spatial://")) {
          $scope.hideTargetGuide = false;
          var targetGuideDiv = $element[0].querySelector("div.targetGuide");
          var guideSrc = targets[0].getAttribute("guide-src");
          if (targetGuideDiv && guideSrc) {
            $scope.targetGuideClass = "imagemark";
            targetGuideDiv.style.backgroundImage = "url('" + guideSrc + "')";
          }
        }
      }
    };

    $scope.$applyAsync(function() {
      // This has to be invoked asynchronously now to give angular time to digest and interpolate the value of
      // guide-src="{{ ... }}" to the real value.
      setGuideImageData();
    });

    $scope.$on('trackingacquired', function (evt, arg) {
      tml3dRenderer.getTracked(function(trackedObjects) {
        $scope.startLoadingIndicatorIfNeeded(trackedObjects);
        $scope.applyTargetGuideIfNeeded(trackedObjects);
      });
    });

    $scope.$on('trackinglost', function (evt, arg) {
      tml3dRenderer.getTracked(function(trackedObjects) {
        $scope.applyTargetGuideIfNeeded(trackedObjects);
      });
    });

    $scope.$on('modelLoaded', function (evt, arg) {
      modelLoadedCount++;
      $scope.modelLoaded = true;

      tml3dRenderer.getTracked(function(trackedObjects) {
        $scope.applyTargetGuideIfNeeded(trackedObjects);
      });
    });

    // starts the 'spinner' animation around the thing code while the model is loading
    $scope.startLoadingIndicatorIfNeeded = function (trackedObjects) {
      if (!twx.app.fn.isCompatibleObjectsTracked(trackedObjects, targets)) {
        return;
      }

      // Start animation if this is first successful call to startLoadingIndicatorIfNeeded.
      var spinnerInterval = 0.03;
      if ($scope.pulse === 1.0 && $scope.loadingPromise === null) {
        $scope.loadingPromise = $interval(function () {
          // stop the animation after it makes one complete loop around
          if($scope.pulse <= 0) {
            // stop the animation
            $interval.cancel($scope.loadingPromise);
            $scope.loadingPromise = null;
            $scope.pulse = 0;
          }
          $scope.pulse -= spinnerInterval;
        }, 100);
      }
    };

    /**
     * @param trackedObjects [Elements]
     */
    $scope.applyTargetGuideIfNeeded = function(trackedObjects) {
      var hideTargetGuide = twx.app.fn.computeHideTargetGuide(trackedObjects, targets, modelLoadedCount, modelCount);

      $scope.$apply(function () {
        $scope.hideTargetGuide = hideTargetGuide;
      });
    };

    (function($scope, $element, $attrs, $timeout){

      // $scope, $element, $attrs, $injector, $sce, $timeout, $http, $ionicPopup, and $ionicPopover services are available




    }($scope, $element, $attrs, $timeout))

  });

  

  twxViewControllersModule.controller('CON_D_TwxViewController',
      function ($scope, $element, $attrs, $timeout, $interval, $http, $ionicPopup, $ionicPopover, $stateParams, $location, $rootScope, tml3dRenderer, $injector, $sce) {
    $scope.app = twx.appScope;
    $scope.device = twx.device;
    $scope.view = {
        mdl: {
            custom: {}
        },
        wdg: {},
        fn: {},
        evt: {},
        prm: {},
        view: {}
    };

    var myWidgets = '';
    var activeWidgetEvents = {};
    var customWidgetEventListeners = [];

    if( $attrs['twxView'] !== undefined && $attrs['twxView'].length > 0 ) {
        $scope.app.view = $scope.app.view || {};
        $scope.app.view[$attrs['twxView']] = $scope.view;
    }

    this.setProperty = function(widgetProperty,value) {
        $scope.view.wdg[$attrs.widgetId][widgetProperty] = value;

    };

    this.addWidget = function(widgetScope,widgetElem,widgetAttrs) {
        var widgetId = widgetAttrs['widgetId'] || widgetAttrs['model'];
        var x = $scope;
        $scope.view.wdg = $scope.view.wdg || {};
        $scope.view.wdg[widgetId] = widgetScope[widgetId];
        myWidgets += '|' + widgetId;
        widgetScope['_widgetId'] = widgetId;
        //console.log('twxView --- adding widget "' + widgetId + '" to view - total widgets: ' + myWidgets);
    };

    $scope.getWidgetScope = function(widgetId){
      return $scope.view.wdg[widgetId];
    };

    $scope.getWidgetProp = function (widgetId, prop) {
      return $scope.view.wdg[widgetId] ? $scope.view.wdg[widgetId][prop] : undefined;
    };

    $scope.setWidgetProp = function (widgetId, prop, val) {
      if ($scope.view.wdg[widgetId]) {
        $scope.view.wdg[widgetId][prop] = val;
      }
    };

    $scope.addWidgetEventListener = function (widgetId, widgetEvent, callback) {
      customWidgetEventListeners.push({
        widgetId: widgetId,
        widgetEvent: widgetEvent,
        callback: callback
      });
      if (!activeWidgetEvents[widgetEvent]) {
        activeWidgetEvents[widgetEvent] = true;
        $scope.$on(widgetEvent, function (event, args) {
          _.each(customWidgetEventListeners, function (listenerInfo) {
            if (listenerInfo.widgetId == event.targetScope.widgetId && listenerInfo.widgetEvent == event.name) {
              listenerInfo.callback();
            }
          });
        });
      }
    };

    $scope.pulse = 1.0;

    $scope.tracerWidth = 0.0;
    $scope.tracerHeight = 0.0;
    $scope.tracerDimensions = { minX: 0, maxX: 1, minY: 0, maxY: 1 };
    $scope.loadingPromise = null;
    $scope.modelLoaded = $element.find('twx-dt-model').length === 0;
    var modelCount = $element.find('twx-dt-model').length;
    var modelLoadedCount = 0;
    var targets = $element.find('twx-dt-target');

    // hide the target guide initially until the actual image to use is known.
    $scope.hideTargetGuide = true;

    function setImageTrackerTracerDimensions(src) {
      let image = new Image();
      image.onload = () => {
        $scope.tracerWidth = image.width;
        $scope.tracerHeight = image.height;
        $scope.$apply();
      };

      image.src = src;
    }

    var setGuideImageData = function() {
      if (targets[0]) { // assume one target only
        var src = targets[0].getAttribute("src");

        if (src.startsWith("vuforia-vumark://")) {
          var isVumark = targets[0].getAttribute("isVuMark");
          $scope.hideTargetGuide = false;
          if (isVumark) {
            $scope.targetGuideClass = "vumark";
            $scope.targetGuideHint = "Point camera at VuMark";
          } else {
            $scope.targetGuideClass = "thingmark";
            $scope.targetGuideHint = "Point camera at ThingMark";
          }
        } else if (src.startsWith('vuforia-image://')) {
          $scope.hideTargetGuide = false;
          $scope.targetGuideClass = "imageTarget";
          $scope.targetGuideHint = 'Point camera at image';
          setImageTrackerTracerDimensions(targets[0].getAttribute("guide-src"));
        } else if (src.startsWith("vuforia-area://")) {
          $scope.hideTargetGuide = false;
          $scope.targetGuideClass = "areaTarget";
          var targetGuideDiv = $element[0].querySelector("div.targetGuide");
          var guideSrc = targets[0].getAttribute("guide-src");
          if (targetGuideDiv && guideSrc) {
            targetGuideDiv.style.backgroundImage = "url('" + guideSrc + "')";
          }
          if(guideSrc.endsWith('extensions/images/area-target-guide.png')) {
            //checking for a mobile project, mobile projects are using the clean guide image. is there a better way to check?
            $scope.targetGuideHint = targets[0].getAttribute("guide-text");
          }
        } else if (!src.startsWith("spatial://")) {
          $scope.hideTargetGuide = false;
          var targetGuideDiv = $element[0].querySelector("div.targetGuide");
          var guideSrc = targets[0].getAttribute("guide-src");
          if (targetGuideDiv && guideSrc) {
            $scope.targetGuideClass = "imagemark";
            targetGuideDiv.style.backgroundImage = "url('" + guideSrc + "')";
          }
        }
      }
    };

    $scope.$applyAsync(function() {
      // This has to be invoked asynchronously now to give angular time to digest and interpolate the value of
      // guide-src="{{ ... }}" to the real value.
      setGuideImageData();
    });

    $scope.$on('trackingacquired', function (evt, arg) {
      tml3dRenderer.getTracked(function(trackedObjects) {
        $scope.startLoadingIndicatorIfNeeded(trackedObjects);
        $scope.applyTargetGuideIfNeeded(trackedObjects);
      });
    });

    $scope.$on('trackinglost', function (evt, arg) {
      tml3dRenderer.getTracked(function(trackedObjects) {
        $scope.applyTargetGuideIfNeeded(trackedObjects);
      });
    });

    $scope.$on('modelLoaded', function (evt, arg) {
      modelLoadedCount++;
      $scope.modelLoaded = true;

      tml3dRenderer.getTracked(function(trackedObjects) {
        $scope.applyTargetGuideIfNeeded(trackedObjects);
      });
    });

    // starts the 'spinner' animation around the thing code while the model is loading
    $scope.startLoadingIndicatorIfNeeded = function (trackedObjects) {
      if (!twx.app.fn.isCompatibleObjectsTracked(trackedObjects, targets)) {
        return;
      }

      // Start animation if this is first successful call to startLoadingIndicatorIfNeeded.
      var spinnerInterval = 0.03;
      if ($scope.pulse === 1.0 && $scope.loadingPromise === null) {
        $scope.loadingPromise = $interval(function () {
          // stop the animation after it makes one complete loop around
          if($scope.pulse <= 0) {
            // stop the animation
            $interval.cancel($scope.loadingPromise);
            $scope.loadingPromise = null;
            $scope.pulse = 0;
          }
          $scope.pulse -= spinnerInterval;
        }, 100);
      }
    };

    /**
     * @param trackedObjects [Elements]
     */
    $scope.applyTargetGuideIfNeeded = function(trackedObjects) {
      var hideTargetGuide = twx.app.fn.computeHideTargetGuide(trackedObjects, targets, modelLoadedCount, modelCount);

      $scope.$apply(function () {
        $scope.hideTargetGuide = hideTargetGuide;
      });
    };

    (function($scope, $element, $attrs, $timeout){

      // $scope, $element, $attrs, $injector, $sce, $timeout, $http, $ionicPopup, and $ionicPopover services are available




    }($scope, $element, $attrs, $timeout))

  });

  

  twxViewControllersModule.controller('CON_E_TwxViewController',
      function ($scope, $element, $attrs, $timeout, $interval, $http, $ionicPopup, $ionicPopover, $stateParams, $location, $rootScope, tml3dRenderer, $injector, $sce) {
    $scope.app = twx.appScope;
    $scope.device = twx.device;
    $scope.view = {
        mdl: {
            custom: {}
        },
        wdg: {},
        fn: {},
        evt: {},
        prm: {},
        view: {}
    };

    var myWidgets = '';
    var activeWidgetEvents = {};
    var customWidgetEventListeners = [];

    if( $attrs['twxView'] !== undefined && $attrs['twxView'].length > 0 ) {
        $scope.app.view = $scope.app.view || {};
        $scope.app.view[$attrs['twxView']] = $scope.view;
    }

    this.setProperty = function(widgetProperty,value) {
        $scope.view.wdg[$attrs.widgetId][widgetProperty] = value;

    };

    this.addWidget = function(widgetScope,widgetElem,widgetAttrs) {
        var widgetId = widgetAttrs['widgetId'] || widgetAttrs['model'];
        var x = $scope;
        $scope.view.wdg = $scope.view.wdg || {};
        $scope.view.wdg[widgetId] = widgetScope[widgetId];
        myWidgets += '|' + widgetId;
        widgetScope['_widgetId'] = widgetId;
        //console.log('twxView --- adding widget "' + widgetId + '" to view - total widgets: ' + myWidgets);
    };

    $scope.getWidgetScope = function(widgetId){
      return $scope.view.wdg[widgetId];
    };

    $scope.getWidgetProp = function (widgetId, prop) {
      return $scope.view.wdg[widgetId] ? $scope.view.wdg[widgetId][prop] : undefined;
    };

    $scope.setWidgetProp = function (widgetId, prop, val) {
      if ($scope.view.wdg[widgetId]) {
        $scope.view.wdg[widgetId][prop] = val;
      }
    };

    $scope.addWidgetEventListener = function (widgetId, widgetEvent, callback) {
      customWidgetEventListeners.push({
        widgetId: widgetId,
        widgetEvent: widgetEvent,
        callback: callback
      });
      if (!activeWidgetEvents[widgetEvent]) {
        activeWidgetEvents[widgetEvent] = true;
        $scope.$on(widgetEvent, function (event, args) {
          _.each(customWidgetEventListeners, function (listenerInfo) {
            if (listenerInfo.widgetId == event.targetScope.widgetId && listenerInfo.widgetEvent == event.name) {
              listenerInfo.callback();
            }
          });
        });
      }
    };

    $scope.pulse = 1.0;

    $scope.tracerWidth = 0.0;
    $scope.tracerHeight = 0.0;
    $scope.tracerDimensions = { minX: 0, maxX: 1, minY: 0, maxY: 1 };
    $scope.loadingPromise = null;
    $scope.modelLoaded = $element.find('twx-dt-model').length === 0;
    var modelCount = $element.find('twx-dt-model').length;
    var modelLoadedCount = 0;
    var targets = $element.find('twx-dt-target');

    // hide the target guide initially until the actual image to use is known.
    $scope.hideTargetGuide = true;

    function setImageTrackerTracerDimensions(src) {
      let image = new Image();
      image.onload = () => {
        $scope.tracerWidth = image.width;
        $scope.tracerHeight = image.height;
        $scope.$apply();
      };

      image.src = src;
    }

    var setGuideImageData = function() {
      if (targets[0]) { // assume one target only
        var src = targets[0].getAttribute("src");

        if (src.startsWith("vuforia-vumark://")) {
          var isVumark = targets[0].getAttribute("isVuMark");
          $scope.hideTargetGuide = false;
          if (isVumark) {
            $scope.targetGuideClass = "vumark";
            $scope.targetGuideHint = "Point camera at VuMark";
          } else {
            $scope.targetGuideClass = "thingmark";
            $scope.targetGuideHint = "Point camera at ThingMark";
          }
        } else if (src.startsWith('vuforia-image://')) {
          $scope.hideTargetGuide = false;
          $scope.targetGuideClass = "imageTarget";
          $scope.targetGuideHint = 'Point camera at image';
          setImageTrackerTracerDimensions(targets[0].getAttribute("guide-src"));
        } else if (src.startsWith("vuforia-area://")) {
          $scope.hideTargetGuide = false;
          $scope.targetGuideClass = "areaTarget";
          var targetGuideDiv = $element[0].querySelector("div.targetGuide");
          var guideSrc = targets[0].getAttribute("guide-src");
          if (targetGuideDiv && guideSrc) {
            targetGuideDiv.style.backgroundImage = "url('" + guideSrc + "')";
          }
          if(guideSrc.endsWith('extensions/images/area-target-guide.png')) {
            //checking for a mobile project, mobile projects are using the clean guide image. is there a better way to check?
            $scope.targetGuideHint = targets[0].getAttribute("guide-text");
          }
        } else if (!src.startsWith("spatial://")) {
          $scope.hideTargetGuide = false;
          var targetGuideDiv = $element[0].querySelector("div.targetGuide");
          var guideSrc = targets[0].getAttribute("guide-src");
          if (targetGuideDiv && guideSrc) {
            $scope.targetGuideClass = "imagemark";
            targetGuideDiv.style.backgroundImage = "url('" + guideSrc + "')";
          }
        }
      }
    };

    $scope.$applyAsync(function() {
      // This has to be invoked asynchronously now to give angular time to digest and interpolate the value of
      // guide-src="{{ ... }}" to the real value.
      setGuideImageData();
    });

    $scope.$on('trackingacquired', function (evt, arg) {
      tml3dRenderer.getTracked(function(trackedObjects) {
        $scope.startLoadingIndicatorIfNeeded(trackedObjects);
        $scope.applyTargetGuideIfNeeded(trackedObjects);
      });
    });

    $scope.$on('trackinglost', function (evt, arg) {
      tml3dRenderer.getTracked(function(trackedObjects) {
        $scope.applyTargetGuideIfNeeded(trackedObjects);
      });
    });

    $scope.$on('modelLoaded', function (evt, arg) {
      modelLoadedCount++;
      $scope.modelLoaded = true;

      tml3dRenderer.getTracked(function(trackedObjects) {
        $scope.applyTargetGuideIfNeeded(trackedObjects);
      });
    });

    // starts the 'spinner' animation around the thing code while the model is loading
    $scope.startLoadingIndicatorIfNeeded = function (trackedObjects) {
      if (!twx.app.fn.isCompatibleObjectsTracked(trackedObjects, targets)) {
        return;
      }

      // Start animation if this is first successful call to startLoadingIndicatorIfNeeded.
      var spinnerInterval = 0.03;
      if ($scope.pulse === 1.0 && $scope.loadingPromise === null) {
        $scope.loadingPromise = $interval(function () {
          // stop the animation after it makes one complete loop around
          if($scope.pulse <= 0) {
            // stop the animation
            $interval.cancel($scope.loadingPromise);
            $scope.loadingPromise = null;
            $scope.pulse = 0;
          }
          $scope.pulse -= spinnerInterval;
        }, 100);
      }
    };

    /**
     * @param trackedObjects [Elements]
     */
    $scope.applyTargetGuideIfNeeded = function(trackedObjects) {
      var hideTargetGuide = twx.app.fn.computeHideTargetGuide(trackedObjects, targets, modelLoadedCount, modelCount);

      $scope.$apply(function () {
        $scope.hideTargetGuide = hideTargetGuide;
      });
    };

    (function($scope, $element, $attrs, $timeout){

      // $scope, $element, $attrs, $injector, $sce, $timeout, $http, $ionicPopup, and $ionicPopover services are available




    }($scope, $element, $attrs, $timeout))

  });

  

  twxViewControllersModule.controller('CXC_WS_TwxViewController',
      function ($scope, $element, $attrs, $timeout, $interval, $http, $ionicPopup, $ionicPopover, $stateParams, $location, $rootScope, tml3dRenderer, $injector, $sce) {
    $scope.app = twx.appScope;
    $scope.device = twx.device;
    $scope.view = {
        mdl: {
            custom: {}
        },
        wdg: {},
        fn: {},
        evt: {},
        prm: {},
        view: {}
    };

    var myWidgets = '';
    var activeWidgetEvents = {};
    var customWidgetEventListeners = [];

    if( $attrs['twxView'] !== undefined && $attrs['twxView'].length > 0 ) {
        $scope.app.view = $scope.app.view || {};
        $scope.app.view[$attrs['twxView']] = $scope.view;
    }

    this.setProperty = function(widgetProperty,value) {
        $scope.view.wdg[$attrs.widgetId][widgetProperty] = value;

    };

    this.addWidget = function(widgetScope,widgetElem,widgetAttrs) {
        var widgetId = widgetAttrs['widgetId'] || widgetAttrs['model'];
        var x = $scope;
        $scope.view.wdg = $scope.view.wdg || {};
        $scope.view.wdg[widgetId] = widgetScope[widgetId];
        myWidgets += '|' + widgetId;
        widgetScope['_widgetId'] = widgetId;
        //console.log('twxView --- adding widget "' + widgetId + '" to view - total widgets: ' + myWidgets);
    };

    $scope.getWidgetScope = function(widgetId){
      return $scope.view.wdg[widgetId];
    };

    $scope.getWidgetProp = function (widgetId, prop) {
      return $scope.view.wdg[widgetId] ? $scope.view.wdg[widgetId][prop] : undefined;
    };

    $scope.setWidgetProp = function (widgetId, prop, val) {
      if ($scope.view.wdg[widgetId]) {
        $scope.view.wdg[widgetId][prop] = val;
      }
    };

    $scope.addWidgetEventListener = function (widgetId, widgetEvent, callback) {
      customWidgetEventListeners.push({
        widgetId: widgetId,
        widgetEvent: widgetEvent,
        callback: callback
      });
      if (!activeWidgetEvents[widgetEvent]) {
        activeWidgetEvents[widgetEvent] = true;
        $scope.$on(widgetEvent, function (event, args) {
          _.each(customWidgetEventListeners, function (listenerInfo) {
            if (listenerInfo.widgetId == event.targetScope.widgetId && listenerInfo.widgetEvent == event.name) {
              listenerInfo.callback();
            }
          });
        });
      }
    };

    $scope.pulse = 1.0;

    $scope.tracerWidth = 0.0;
    $scope.tracerHeight = 0.0;
    $scope.tracerDimensions = { minX: 0, maxX: 1, minY: 0, maxY: 1 };
    $scope.loadingPromise = null;
    $scope.modelLoaded = $element.find('twx-dt-model').length === 0;
    var modelCount = $element.find('twx-dt-model').length;
    var modelLoadedCount = 0;
    var targets = $element.find('twx-dt-target');

    // hide the target guide initially until the actual image to use is known.
    $scope.hideTargetGuide = true;

    function setImageTrackerTracerDimensions(src) {
      let image = new Image();
      image.onload = () => {
        $scope.tracerWidth = image.width;
        $scope.tracerHeight = image.height;
        $scope.$apply();
      };

      image.src = src;
    }

    var setGuideImageData = function() {
      if (targets[0]) { // assume one target only
        var src = targets[0].getAttribute("src");

        if (src.startsWith("vuforia-vumark://")) {
          var isVumark = targets[0].getAttribute("isVuMark");
          $scope.hideTargetGuide = false;
          if (isVumark) {
            $scope.targetGuideClass = "vumark";
            $scope.targetGuideHint = "Point camera at VuMark";
          } else {
            $scope.targetGuideClass = "thingmark";
            $scope.targetGuideHint = "Point camera at ThingMark";
          }
        } else if (src.startsWith('vuforia-image://')) {
          $scope.hideTargetGuide = false;
          $scope.targetGuideClass = "imageTarget";
          $scope.targetGuideHint = 'Point camera at image';
          setImageTrackerTracerDimensions(targets[0].getAttribute("guide-src"));
        } else if (src.startsWith("vuforia-area://")) {
          $scope.hideTargetGuide = false;
          $scope.targetGuideClass = "areaTarget";
          var targetGuideDiv = $element[0].querySelector("div.targetGuide");
          var guideSrc = targets[0].getAttribute("guide-src");
          if (targetGuideDiv && guideSrc) {
            targetGuideDiv.style.backgroundImage = "url('" + guideSrc + "')";
          }
          if(guideSrc.endsWith('extensions/images/area-target-guide.png')) {
            //checking for a mobile project, mobile projects are using the clean guide image. is there a better way to check?
            $scope.targetGuideHint = targets[0].getAttribute("guide-text");
          }
        } else if (!src.startsWith("spatial://")) {
          $scope.hideTargetGuide = false;
          var targetGuideDiv = $element[0].querySelector("div.targetGuide");
          var guideSrc = targets[0].getAttribute("guide-src");
          if (targetGuideDiv && guideSrc) {
            $scope.targetGuideClass = "imagemark";
            targetGuideDiv.style.backgroundImage = "url('" + guideSrc + "')";
          }
        }
      }
    };

    $scope.$applyAsync(function() {
      // This has to be invoked asynchronously now to give angular time to digest and interpolate the value of
      // guide-src="{{ ... }}" to the real value.
      setGuideImageData();
    });

    $scope.$on('trackingacquired', function (evt, arg) {
      tml3dRenderer.getTracked(function(trackedObjects) {
        $scope.startLoadingIndicatorIfNeeded(trackedObjects);
        $scope.applyTargetGuideIfNeeded(trackedObjects);
      });
    });

    $scope.$on('trackinglost', function (evt, arg) {
      tml3dRenderer.getTracked(function(trackedObjects) {
        $scope.applyTargetGuideIfNeeded(trackedObjects);
      });
    });

    $scope.$on('modelLoaded', function (evt, arg) {
      modelLoadedCount++;
      $scope.modelLoaded = true;

      tml3dRenderer.getTracked(function(trackedObjects) {
        $scope.applyTargetGuideIfNeeded(trackedObjects);
      });
    });

    // starts the 'spinner' animation around the thing code while the model is loading
    $scope.startLoadingIndicatorIfNeeded = function (trackedObjects) {
      if (!twx.app.fn.isCompatibleObjectsTracked(trackedObjects, targets)) {
        return;
      }

      // Start animation if this is first successful call to startLoadingIndicatorIfNeeded.
      var spinnerInterval = 0.03;
      if ($scope.pulse === 1.0 && $scope.loadingPromise === null) {
        $scope.loadingPromise = $interval(function () {
          // stop the animation after it makes one complete loop around
          if($scope.pulse <= 0) {
            // stop the animation
            $interval.cancel($scope.loadingPromise);
            $scope.loadingPromise = null;
            $scope.pulse = 0;
          }
          $scope.pulse -= spinnerInterval;
        }, 100);
      }
    };

    /**
     * @param trackedObjects [Elements]
     */
    $scope.applyTargetGuideIfNeeded = function(trackedObjects) {
      var hideTargetGuide = twx.app.fn.computeHideTargetGuide(trackedObjects, targets, modelLoadedCount, modelCount);

      $scope.$apply(function () {
        $scope.hideTargetGuide = hideTargetGuide;
      });
    };

    (function($scope, $element, $attrs, $timeout){

      // $scope, $element, $attrs, $injector, $sce, $timeout, $http, $ionicPopup, and $ionicPopover services are available




    }($scope, $element, $attrs, $timeout))

  });

  

  twxViewControllersModule.controller('XR_TwxViewController',
      function ($scope, $element, $attrs, $timeout, $interval, $http, $ionicPopup, $ionicPopover, $stateParams, $location, $rootScope, tml3dRenderer, $injector, $sce) {
    $scope.app = twx.appScope;
    $scope.device = twx.device;
    $scope.view = {
        mdl: {
            custom: {}
        },
        wdg: {},
        fn: {},
        evt: {},
        prm: {},
        view: {}
    };

    var myWidgets = '';
    var activeWidgetEvents = {};
    var customWidgetEventListeners = [];

    if( $attrs['twxView'] !== undefined && $attrs['twxView'].length > 0 ) {
        $scope.app.view = $scope.app.view || {};
        $scope.app.view[$attrs['twxView']] = $scope.view;
    }

    this.setProperty = function(widgetProperty,value) {
        $scope.view.wdg[$attrs.widgetId][widgetProperty] = value;

    };

    this.addWidget = function(widgetScope,widgetElem,widgetAttrs) {
        var widgetId = widgetAttrs['widgetId'] || widgetAttrs['model'];
        var x = $scope;
        $scope.view.wdg = $scope.view.wdg || {};
        $scope.view.wdg[widgetId] = widgetScope[widgetId];
        myWidgets += '|' + widgetId;
        widgetScope['_widgetId'] = widgetId;
        //console.log('twxView --- adding widget "' + widgetId + '" to view - total widgets: ' + myWidgets);
    };

    $scope.getWidgetScope = function(widgetId){
      return $scope.view.wdg[widgetId];
    };

    $scope.getWidgetProp = function (widgetId, prop) {
      return $scope.view.wdg[widgetId] ? $scope.view.wdg[widgetId][prop] : undefined;
    };

    $scope.setWidgetProp = function (widgetId, prop, val) {
      if ($scope.view.wdg[widgetId]) {
        $scope.view.wdg[widgetId][prop] = val;
      }
    };

    $scope.addWidgetEventListener = function (widgetId, widgetEvent, callback) {
      customWidgetEventListeners.push({
        widgetId: widgetId,
        widgetEvent: widgetEvent,
        callback: callback
      });
      if (!activeWidgetEvents[widgetEvent]) {
        activeWidgetEvents[widgetEvent] = true;
        $scope.$on(widgetEvent, function (event, args) {
          _.each(customWidgetEventListeners, function (listenerInfo) {
            if (listenerInfo.widgetId == event.targetScope.widgetId && listenerInfo.widgetEvent == event.name) {
              listenerInfo.callback();
            }
          });
        });
      }
    };

    $scope.pulse = 1.0;

    $scope.tracerWidth = 0.0;
    $scope.tracerHeight = 0.0;
    $scope.tracerDimensions = { minX: 0, maxX: 1, minY: 0, maxY: 1 };
    $scope.loadingPromise = null;
    $scope.modelLoaded = $element.find('twx-dt-model').length === 0;
    var modelCount = $element.find('twx-dt-model').length;
    var modelLoadedCount = 0;
    var targets = $element.find('twx-dt-target');

    // hide the target guide initially until the actual image to use is known.
    $scope.hideTargetGuide = true;

    function setImageTrackerTracerDimensions(src) {
      let image = new Image();
      image.onload = () => {
        $scope.tracerWidth = image.width;
        $scope.tracerHeight = image.height;
        $scope.$apply();
      };

      image.src = src;
    }

    var setGuideImageData = function() {
      if (targets[0]) { // assume one target only
        var src = targets[0].getAttribute("src");

        if (src.startsWith("vuforia-vumark://")) {
          var isVumark = targets[0].getAttribute("isVuMark");
          $scope.hideTargetGuide = false;
          if (isVumark) {
            $scope.targetGuideClass = "vumark";
            $scope.targetGuideHint = "Point camera at VuMark";
          } else {
            $scope.targetGuideClass = "thingmark";
            $scope.targetGuideHint = "Point camera at ThingMark";
          }
        } else if (src.startsWith('vuforia-image://')) {
          $scope.hideTargetGuide = false;
          $scope.targetGuideClass = "imageTarget";
          $scope.targetGuideHint = 'Point camera at image';
          setImageTrackerTracerDimensions(targets[0].getAttribute("guide-src"));
        } else if (src.startsWith("vuforia-area://")) {
          $scope.hideTargetGuide = false;
          $scope.targetGuideClass = "areaTarget";
          var targetGuideDiv = $element[0].querySelector("div.targetGuide");
          var guideSrc = targets[0].getAttribute("guide-src");
          if (targetGuideDiv && guideSrc) {
            targetGuideDiv.style.backgroundImage = "url('" + guideSrc + "')";
          }
          if(guideSrc.endsWith('extensions/images/area-target-guide.png')) {
            //checking for a mobile project, mobile projects are using the clean guide image. is there a better way to check?
            $scope.targetGuideHint = targets[0].getAttribute("guide-text");
          }
        } else if (!src.startsWith("spatial://")) {
          $scope.hideTargetGuide = false;
          var targetGuideDiv = $element[0].querySelector("div.targetGuide");
          var guideSrc = targets[0].getAttribute("guide-src");
          if (targetGuideDiv && guideSrc) {
            $scope.targetGuideClass = "imagemark";
            targetGuideDiv.style.backgroundImage = "url('" + guideSrc + "')";
          }
        }
      }
    };

    $scope.$applyAsync(function() {
      // This has to be invoked asynchronously now to give angular time to digest and interpolate the value of
      // guide-src="{{ ... }}" to the real value.
      setGuideImageData();
    });

    $scope.$on('trackingacquired', function (evt, arg) {
      tml3dRenderer.getTracked(function(trackedObjects) {
        $scope.startLoadingIndicatorIfNeeded(trackedObjects);
        $scope.applyTargetGuideIfNeeded(trackedObjects);
      });
    });

    $scope.$on('trackinglost', function (evt, arg) {
      tml3dRenderer.getTracked(function(trackedObjects) {
        $scope.applyTargetGuideIfNeeded(trackedObjects);
      });
    });

    $scope.$on('modelLoaded', function (evt, arg) {
      modelLoadedCount++;
      $scope.modelLoaded = true;

      tml3dRenderer.getTracked(function(trackedObjects) {
        $scope.applyTargetGuideIfNeeded(trackedObjects);
      });
    });

    // starts the 'spinner' animation around the thing code while the model is loading
    $scope.startLoadingIndicatorIfNeeded = function (trackedObjects) {
      if (!twx.app.fn.isCompatibleObjectsTracked(trackedObjects, targets)) {
        return;
      }

      // Start animation if this is first successful call to startLoadingIndicatorIfNeeded.
      var spinnerInterval = 0.03;
      if ($scope.pulse === 1.0 && $scope.loadingPromise === null) {
        $scope.loadingPromise = $interval(function () {
          // stop the animation after it makes one complete loop around
          if($scope.pulse <= 0) {
            // stop the animation
            $interval.cancel($scope.loadingPromise);
            $scope.loadingPromise = null;
            $scope.pulse = 0;
          }
          $scope.pulse -= spinnerInterval;
        }, 100);
      }
    };

    /**
     * @param trackedObjects [Elements]
     */
    $scope.applyTargetGuideIfNeeded = function(trackedObjects) {
      var hideTargetGuide = twx.app.fn.computeHideTargetGuide(trackedObjects, targets, modelLoadedCount, modelCount);

      $scope.$apply(function () {
        $scope.hideTargetGuide = hideTargetGuide;
      });
    };

    (function($scope, $element, $attrs, $timeout){

      // $scope, $element, $attrs, $injector, $sce, $timeout, $http, $ionicPopup, and $ionicPopover services are available




    }($scope, $element, $attrs, $timeout))

  });

  

  twxViewControllersModule.controller('3D_CON_AB_TwxViewController',
      function ($scope, $element, $attrs, $timeout, $interval, $http, $ionicPopup, $ionicPopover, $stateParams, $location, $rootScope, tml3dRenderer, $injector, $sce) {
    $scope.app = twx.appScope;
    $scope.device = twx.device;
    $scope.view = {
        mdl: {
            custom: {}
        },
        wdg: {},
        fn: {},
        evt: {},
        prm: {},
        view: {}
    };

    var myWidgets = '';
    var activeWidgetEvents = {};
    var customWidgetEventListeners = [];

    if( $attrs['twxView'] !== undefined && $attrs['twxView'].length > 0 ) {
        $scope.app.view = $scope.app.view || {};
        $scope.app.view[$attrs['twxView']] = $scope.view;
    }

    this.setProperty = function(widgetProperty,value) {
        $scope.view.wdg[$attrs.widgetId][widgetProperty] = value;

    };

    this.addWidget = function(widgetScope,widgetElem,widgetAttrs) {
        var widgetId = widgetAttrs['widgetId'] || widgetAttrs['model'];
        var x = $scope;
        $scope.view.wdg = $scope.view.wdg || {};
        $scope.view.wdg[widgetId] = widgetScope[widgetId];
        myWidgets += '|' + widgetId;
        widgetScope['_widgetId'] = widgetId;
        //console.log('twxView --- adding widget "' + widgetId + '" to view - total widgets: ' + myWidgets);
    };

    $scope.getWidgetScope = function(widgetId){
      return $scope.view.wdg[widgetId];
    };

    $scope.getWidgetProp = function (widgetId, prop) {
      return $scope.view.wdg[widgetId] ? $scope.view.wdg[widgetId][prop] : undefined;
    };

    $scope.setWidgetProp = function (widgetId, prop, val) {
      if ($scope.view.wdg[widgetId]) {
        $scope.view.wdg[widgetId][prop] = val;
      }
    };

    $scope.addWidgetEventListener = function (widgetId, widgetEvent, callback) {
      customWidgetEventListeners.push({
        widgetId: widgetId,
        widgetEvent: widgetEvent,
        callback: callback
      });
      if (!activeWidgetEvents[widgetEvent]) {
        activeWidgetEvents[widgetEvent] = true;
        $scope.$on(widgetEvent, function (event, args) {
          _.each(customWidgetEventListeners, function (listenerInfo) {
            if (listenerInfo.widgetId == event.targetScope.widgetId && listenerInfo.widgetEvent == event.name) {
              listenerInfo.callback();
            }
          });
        });
      }
    };

    $scope.pulse = 1.0;

    $scope.tracerWidth = 0.0;
    $scope.tracerHeight = 0.0;
    $scope.tracerDimensions = { minX: 0, maxX: 1, minY: 0, maxY: 1 };
    $scope.loadingPromise = null;
    $scope.modelLoaded = $element.find('twx-dt-model').length === 0;
    var modelCount = $element.find('twx-dt-model').length;
    var modelLoadedCount = 0;
    var targets = $element.find('twx-dt-target');

    // hide the target guide initially until the actual image to use is known.
    $scope.hideTargetGuide = true;

    function setImageTrackerTracerDimensions(src) {
      let image = new Image();
      image.onload = () => {
        $scope.tracerWidth = image.width;
        $scope.tracerHeight = image.height;
        $scope.$apply();
      };

      image.src = src;
    }

    var setGuideImageData = function() {
      if (targets[0]) { // assume one target only
        var src = targets[0].getAttribute("src");

        if (src.startsWith("vuforia-vumark://")) {
          var isVumark = targets[0].getAttribute("isVuMark");
          $scope.hideTargetGuide = false;
          if (isVumark) {
            $scope.targetGuideClass = "vumark";
            $scope.targetGuideHint = "Point camera at VuMark";
          } else {
            $scope.targetGuideClass = "thingmark";
            $scope.targetGuideHint = "Point camera at ThingMark";
          }
        } else if (src.startsWith('vuforia-image://')) {
          $scope.hideTargetGuide = false;
          $scope.targetGuideClass = "imageTarget";
          $scope.targetGuideHint = 'Point camera at image';
          setImageTrackerTracerDimensions(targets[0].getAttribute("guide-src"));
        } else if (src.startsWith("vuforia-area://")) {
          $scope.hideTargetGuide = false;
          $scope.targetGuideClass = "areaTarget";
          var targetGuideDiv = $element[0].querySelector("div.targetGuide");
          var guideSrc = targets[0].getAttribute("guide-src");
          if (targetGuideDiv && guideSrc) {
            targetGuideDiv.style.backgroundImage = "url('" + guideSrc + "')";
          }
          if(guideSrc.endsWith('extensions/images/area-target-guide.png')) {
            //checking for a mobile project, mobile projects are using the clean guide image. is there a better way to check?
            $scope.targetGuideHint = targets[0].getAttribute("guide-text");
          }
        } else if (!src.startsWith("spatial://")) {
          $scope.hideTargetGuide = false;
          var targetGuideDiv = $element[0].querySelector("div.targetGuide");
          var guideSrc = targets[0].getAttribute("guide-src");
          if (targetGuideDiv && guideSrc) {
            $scope.targetGuideClass = "imagemark";
            targetGuideDiv.style.backgroundImage = "url('" + guideSrc + "')";
          }
        }
      }
    };

    $scope.$applyAsync(function() {
      // This has to be invoked asynchronously now to give angular time to digest and interpolate the value of
      // guide-src="{{ ... }}" to the real value.
      setGuideImageData();
    });

    $scope.$on('trackingacquired', function (evt, arg) {
      tml3dRenderer.getTracked(function(trackedObjects) {
        $scope.startLoadingIndicatorIfNeeded(trackedObjects);
        $scope.applyTargetGuideIfNeeded(trackedObjects);
      });
    });

    $scope.$on('trackinglost', function (evt, arg) {
      tml3dRenderer.getTracked(function(trackedObjects) {
        $scope.applyTargetGuideIfNeeded(trackedObjects);
      });
    });

    $scope.$on('modelLoaded', function (evt, arg) {
      modelLoadedCount++;
      $scope.modelLoaded = true;

      tml3dRenderer.getTracked(function(trackedObjects) {
        $scope.applyTargetGuideIfNeeded(trackedObjects);
      });
    });

    // starts the 'spinner' animation around the thing code while the model is loading
    $scope.startLoadingIndicatorIfNeeded = function (trackedObjects) {
      if (!twx.app.fn.isCompatibleObjectsTracked(trackedObjects, targets)) {
        return;
      }

      // Start animation if this is first successful call to startLoadingIndicatorIfNeeded.
      var spinnerInterval = 0.03;
      if ($scope.pulse === 1.0 && $scope.loadingPromise === null) {
        $scope.loadingPromise = $interval(function () {
          // stop the animation after it makes one complete loop around
          if($scope.pulse <= 0) {
            // stop the animation
            $interval.cancel($scope.loadingPromise);
            $scope.loadingPromise = null;
            $scope.pulse = 0;
          }
          $scope.pulse -= spinnerInterval;
        }, 100);
      }
    };

    /**
     * @param trackedObjects [Elements]
     */
    $scope.applyTargetGuideIfNeeded = function(trackedObjects) {
      var hideTargetGuide = twx.app.fn.computeHideTargetGuide(trackedObjects, targets, modelLoadedCount, modelCount);

      $scope.$apply(function () {
        $scope.hideTargetGuide = hideTargetGuide;
      });
    };

    (function($scope, $element, $attrs, $timeout){

      // $scope, $element, $attrs, $injector, $sce, $timeout, $http, $ionicPopup, and $ionicPopover services are available




    }($scope, $element, $attrs, $timeout))

  });

  

  twxViewControllersModule.controller('3D_IDF_TwxViewController',
      function ($scope, $element, $attrs, $timeout, $interval, $http, $ionicPopup, $ionicPopover, $stateParams, $location, $rootScope, tml3dRenderer, $injector, $sce) {
    $scope.app = twx.appScope;
    $scope.device = twx.device;
    $scope.view = {
        mdl: {
            custom: {}
        },
        wdg: {},
        fn: {},
        evt: {},
        prm: {},
        view: {}
    };

    var myWidgets = '';
    var activeWidgetEvents = {};
    var customWidgetEventListeners = [];

    if( $attrs['twxView'] !== undefined && $attrs['twxView'].length > 0 ) {
        $scope.app.view = $scope.app.view || {};
        $scope.app.view[$attrs['twxView']] = $scope.view;
    }

    this.setProperty = function(widgetProperty,value) {
        $scope.view.wdg[$attrs.widgetId][widgetProperty] = value;

    };

    this.addWidget = function(widgetScope,widgetElem,widgetAttrs) {
        var widgetId = widgetAttrs['widgetId'] || widgetAttrs['model'];
        var x = $scope;
        $scope.view.wdg = $scope.view.wdg || {};
        $scope.view.wdg[widgetId] = widgetScope[widgetId];
        myWidgets += '|' + widgetId;
        widgetScope['_widgetId'] = widgetId;
        //console.log('twxView --- adding widget "' + widgetId + '" to view - total widgets: ' + myWidgets);
    };

    $scope.getWidgetScope = function(widgetId){
      return $scope.view.wdg[widgetId];
    };

    $scope.getWidgetProp = function (widgetId, prop) {
      return $scope.view.wdg[widgetId] ? $scope.view.wdg[widgetId][prop] : undefined;
    };

    $scope.setWidgetProp = function (widgetId, prop, val) {
      if ($scope.view.wdg[widgetId]) {
        $scope.view.wdg[widgetId][prop] = val;
      }
    };

    $scope.addWidgetEventListener = function (widgetId, widgetEvent, callback) {
      customWidgetEventListeners.push({
        widgetId: widgetId,
        widgetEvent: widgetEvent,
        callback: callback
      });
      if (!activeWidgetEvents[widgetEvent]) {
        activeWidgetEvents[widgetEvent] = true;
        $scope.$on(widgetEvent, function (event, args) {
          _.each(customWidgetEventListeners, function (listenerInfo) {
            if (listenerInfo.widgetId == event.targetScope.widgetId && listenerInfo.widgetEvent == event.name) {
              listenerInfo.callback();
            }
          });
        });
      }
    };

    $scope.pulse = 1.0;

    $scope.tracerWidth = 0.0;
    $scope.tracerHeight = 0.0;
    $scope.tracerDimensions = { minX: 0, maxX: 1, minY: 0, maxY: 1 };
    $scope.loadingPromise = null;
    $scope.modelLoaded = $element.find('twx-dt-model').length === 0;
    var modelCount = $element.find('twx-dt-model').length;
    var modelLoadedCount = 0;
    var targets = $element.find('twx-dt-target');

    // hide the target guide initially until the actual image to use is known.
    $scope.hideTargetGuide = true;

    function setImageTrackerTracerDimensions(src) {
      let image = new Image();
      image.onload = () => {
        $scope.tracerWidth = image.width;
        $scope.tracerHeight = image.height;
        $scope.$apply();
      };

      image.src = src;
    }

    var setGuideImageData = function() {
      if (targets[0]) { // assume one target only
        var src = targets[0].getAttribute("src");

        if (src.startsWith("vuforia-vumark://")) {
          var isVumark = targets[0].getAttribute("isVuMark");
          $scope.hideTargetGuide = false;
          if (isVumark) {
            $scope.targetGuideClass = "vumark";
            $scope.targetGuideHint = "Point camera at VuMark";
          } else {
            $scope.targetGuideClass = "thingmark";
            $scope.targetGuideHint = "Point camera at ThingMark";
          }
        } else if (src.startsWith('vuforia-image://')) {
          $scope.hideTargetGuide = false;
          $scope.targetGuideClass = "imageTarget";
          $scope.targetGuideHint = 'Point camera at image';
          setImageTrackerTracerDimensions(targets[0].getAttribute("guide-src"));
        } else if (src.startsWith("vuforia-area://")) {
          $scope.hideTargetGuide = false;
          $scope.targetGuideClass = "areaTarget";
          var targetGuideDiv = $element[0].querySelector("div.targetGuide");
          var guideSrc = targets[0].getAttribute("guide-src");
          if (targetGuideDiv && guideSrc) {
            targetGuideDiv.style.backgroundImage = "url('" + guideSrc + "')";
          }
          if(guideSrc.endsWith('extensions/images/area-target-guide.png')) {
            //checking for a mobile project, mobile projects are using the clean guide image. is there a better way to check?
            $scope.targetGuideHint = targets[0].getAttribute("guide-text");
          }
        } else if (!src.startsWith("spatial://")) {
          $scope.hideTargetGuide = false;
          var targetGuideDiv = $element[0].querySelector("div.targetGuide");
          var guideSrc = targets[0].getAttribute("guide-src");
          if (targetGuideDiv && guideSrc) {
            $scope.targetGuideClass = "imagemark";
            targetGuideDiv.style.backgroundImage = "url('" + guideSrc + "')";
          }
        }
      }
    };

    $scope.$applyAsync(function() {
      // This has to be invoked asynchronously now to give angular time to digest and interpolate the value of
      // guide-src="{{ ... }}" to the real value.
      setGuideImageData();
    });

    $scope.$on('trackingacquired', function (evt, arg) {
      tml3dRenderer.getTracked(function(trackedObjects) {
        $scope.startLoadingIndicatorIfNeeded(trackedObjects);
        $scope.applyTargetGuideIfNeeded(trackedObjects);
      });
    });

    $scope.$on('trackinglost', function (evt, arg) {
      tml3dRenderer.getTracked(function(trackedObjects) {
        $scope.applyTargetGuideIfNeeded(trackedObjects);
      });
    });

    $scope.$on('modelLoaded', function (evt, arg) {
      modelLoadedCount++;
      $scope.modelLoaded = true;

      tml3dRenderer.getTracked(function(trackedObjects) {
        $scope.applyTargetGuideIfNeeded(trackedObjects);
      });
    });

    // starts the 'spinner' animation around the thing code while the model is loading
    $scope.startLoadingIndicatorIfNeeded = function (trackedObjects) {
      if (!twx.app.fn.isCompatibleObjectsTracked(trackedObjects, targets)) {
        return;
      }

      // Start animation if this is first successful call to startLoadingIndicatorIfNeeded.
      var spinnerInterval = 0.03;
      if ($scope.pulse === 1.0 && $scope.loadingPromise === null) {
        $scope.loadingPromise = $interval(function () {
          // stop the animation after it makes one complete loop around
          if($scope.pulse <= 0) {
            // stop the animation
            $interval.cancel($scope.loadingPromise);
            $scope.loadingPromise = null;
            $scope.pulse = 0;
          }
          $scope.pulse -= spinnerInterval;
        }, 100);
      }
    };

    /**
     * @param trackedObjects [Elements]
     */
    $scope.applyTargetGuideIfNeeded = function(trackedObjects) {
      var hideTargetGuide = twx.app.fn.computeHideTargetGuide(trackedObjects, targets, modelLoadedCount, modelCount);

      $scope.$apply(function () {
        $scope.hideTargetGuide = hideTargetGuide;
      });
    };

    (function($scope, $element, $attrs, $timeout){

      // $scope, $element, $attrs, $injector, $sce, $timeout, $http, $ionicPopup, and $ionicPopover services are available




    }($scope, $element, $attrs, $timeout))

  });

  

  twxViewControllersModule.controller('3D_XR_TwxViewController',
      function ($scope, $element, $attrs, $timeout, $interval, $http, $ionicPopup, $ionicPopover, $stateParams, $location, $rootScope, tml3dRenderer, $injector, $sce) {
    $scope.app = twx.appScope;
    $scope.device = twx.device;
    $scope.view = {
        mdl: {
            custom: {}
        },
        wdg: {},
        fn: {},
        evt: {},
        prm: {},
        view: {}
    };

    var myWidgets = '';
    var activeWidgetEvents = {};
    var customWidgetEventListeners = [];

    if( $attrs['twxView'] !== undefined && $attrs['twxView'].length > 0 ) {
        $scope.app.view = $scope.app.view || {};
        $scope.app.view[$attrs['twxView']] = $scope.view;
    }

    this.setProperty = function(widgetProperty,value) {
        $scope.view.wdg[$attrs.widgetId][widgetProperty] = value;

    };

    this.addWidget = function(widgetScope,widgetElem,widgetAttrs) {
        var widgetId = widgetAttrs['widgetId'] || widgetAttrs['model'];
        var x = $scope;
        $scope.view.wdg = $scope.view.wdg || {};
        $scope.view.wdg[widgetId] = widgetScope[widgetId];
        myWidgets += '|' + widgetId;
        widgetScope['_widgetId'] = widgetId;
        //console.log('twxView --- adding widget "' + widgetId + '" to view - total widgets: ' + myWidgets);
    };

    $scope.getWidgetScope = function(widgetId){
      return $scope.view.wdg[widgetId];
    };

    $scope.getWidgetProp = function (widgetId, prop) {
      return $scope.view.wdg[widgetId] ? $scope.view.wdg[widgetId][prop] : undefined;
    };

    $scope.setWidgetProp = function (widgetId, prop, val) {
      if ($scope.view.wdg[widgetId]) {
        $scope.view.wdg[widgetId][prop] = val;
      }
    };

    $scope.addWidgetEventListener = function (widgetId, widgetEvent, callback) {
      customWidgetEventListeners.push({
        widgetId: widgetId,
        widgetEvent: widgetEvent,
        callback: callback
      });
      if (!activeWidgetEvents[widgetEvent]) {
        activeWidgetEvents[widgetEvent] = true;
        $scope.$on(widgetEvent, function (event, args) {
          _.each(customWidgetEventListeners, function (listenerInfo) {
            if (listenerInfo.widgetId == event.targetScope.widgetId && listenerInfo.widgetEvent == event.name) {
              listenerInfo.callback();
            }
          });
        });
      }
    };

    $scope.pulse = 1.0;

    $scope.tracerWidth = 0.0;
    $scope.tracerHeight = 0.0;
    $scope.tracerDimensions = { minX: 0, maxX: 1, minY: 0, maxY: 1 };
    $scope.loadingPromise = null;
    $scope.modelLoaded = $element.find('twx-dt-model').length === 0;
    var modelCount = $element.find('twx-dt-model').length;
    var modelLoadedCount = 0;
    var targets = $element.find('twx-dt-target');

    // hide the target guide initially until the actual image to use is known.
    $scope.hideTargetGuide = true;

    function setImageTrackerTracerDimensions(src) {
      let image = new Image();
      image.onload = () => {
        $scope.tracerWidth = image.width;
        $scope.tracerHeight = image.height;
        $scope.$apply();
      };

      image.src = src;
    }

    var setGuideImageData = function() {
      if (targets[0]) { // assume one target only
        var src = targets[0].getAttribute("src");

        if (src.startsWith("vuforia-vumark://")) {
          var isVumark = targets[0].getAttribute("isVuMark");
          $scope.hideTargetGuide = false;
          if (isVumark) {
            $scope.targetGuideClass = "vumark";
            $scope.targetGuideHint = "Point camera at VuMark";
          } else {
            $scope.targetGuideClass = "thingmark";
            $scope.targetGuideHint = "Point camera at ThingMark";
          }
        } else if (src.startsWith('vuforia-image://')) {
          $scope.hideTargetGuide = false;
          $scope.targetGuideClass = "imageTarget";
          $scope.targetGuideHint = 'Point camera at image';
          setImageTrackerTracerDimensions(targets[0].getAttribute("guide-src"));
        } else if (src.startsWith("vuforia-area://")) {
          $scope.hideTargetGuide = false;
          $scope.targetGuideClass = "areaTarget";
          var targetGuideDiv = $element[0].querySelector("div.targetGuide");
          var guideSrc = targets[0].getAttribute("guide-src");
          if (targetGuideDiv && guideSrc) {
            targetGuideDiv.style.backgroundImage = "url('" + guideSrc + "')";
          }
          if(guideSrc.endsWith('extensions/images/area-target-guide.png')) {
            //checking for a mobile project, mobile projects are using the clean guide image. is there a better way to check?
            $scope.targetGuideHint = targets[0].getAttribute("guide-text");
          }
        } else if (!src.startsWith("spatial://")) {
          $scope.hideTargetGuide = false;
          var targetGuideDiv = $element[0].querySelector("div.targetGuide");
          var guideSrc = targets[0].getAttribute("guide-src");
          if (targetGuideDiv && guideSrc) {
            $scope.targetGuideClass = "imagemark";
            targetGuideDiv.style.backgroundImage = "url('" + guideSrc + "')";
          }
        }
      }
    };

    $scope.$applyAsync(function() {
      // This has to be invoked asynchronously now to give angular time to digest and interpolate the value of
      // guide-src="{{ ... }}" to the real value.
      setGuideImageData();
    });

    $scope.$on('trackingacquired', function (evt, arg) {
      tml3dRenderer.getTracked(function(trackedObjects) {
        $scope.startLoadingIndicatorIfNeeded(trackedObjects);
        $scope.applyTargetGuideIfNeeded(trackedObjects);
      });
    });

    $scope.$on('trackinglost', function (evt, arg) {
      tml3dRenderer.getTracked(function(trackedObjects) {
        $scope.applyTargetGuideIfNeeded(trackedObjects);
      });
    });

    $scope.$on('modelLoaded', function (evt, arg) {
      modelLoadedCount++;
      $scope.modelLoaded = true;

      tml3dRenderer.getTracked(function(trackedObjects) {
        $scope.applyTargetGuideIfNeeded(trackedObjects);
      });
    });

    // starts the 'spinner' animation around the thing code while the model is loading
    $scope.startLoadingIndicatorIfNeeded = function (trackedObjects) {
      if (!twx.app.fn.isCompatibleObjectsTracked(trackedObjects, targets)) {
        return;
      }

      // Start animation if this is first successful call to startLoadingIndicatorIfNeeded.
      var spinnerInterval = 0.03;
      if ($scope.pulse === 1.0 && $scope.loadingPromise === null) {
        $scope.loadingPromise = $interval(function () {
          // stop the animation after it makes one complete loop around
          if($scope.pulse <= 0) {
            // stop the animation
            $interval.cancel($scope.loadingPromise);
            $scope.loadingPromise = null;
            $scope.pulse = 0;
          }
          $scope.pulse -= spinnerInterval;
        }, 100);
      }
    };

    /**
     * @param trackedObjects [Elements]
     */
    $scope.applyTargetGuideIfNeeded = function(trackedObjects) {
      var hideTargetGuide = twx.app.fn.computeHideTargetGuide(trackedObjects, targets, modelLoadedCount, modelCount);

      $scope.$apply(function () {
        $scope.hideTargetGuide = hideTargetGuide;
      });
    };

    (function($scope, $element, $attrs, $timeout){

      // $scope, $element, $attrs, $injector, $sce, $timeout, $http, $ionicPopup, and $ionicPopover services are available




    }($scope, $element, $attrs, $timeout))

  });

  

  twxViewControllersModule.controller('3D_CXC_WS_TwxViewController',
      function ($scope, $element, $attrs, $timeout, $interval, $http, $ionicPopup, $ionicPopover, $stateParams, $location, $rootScope, tml3dRenderer, $injector, $sce) {
    $scope.app = twx.appScope;
    $scope.device = twx.device;
    $scope.view = {
        mdl: {
            custom: {}
        },
        wdg: {},
        fn: {},
        evt: {},
        prm: {},
        view: {}
    };

    var myWidgets = '';
    var activeWidgetEvents = {};
    var customWidgetEventListeners = [];

    if( $attrs['twxView'] !== undefined && $attrs['twxView'].length > 0 ) {
        $scope.app.view = $scope.app.view || {};
        $scope.app.view[$attrs['twxView']] = $scope.view;
    }

    this.setProperty = function(widgetProperty,value) {
        $scope.view.wdg[$attrs.widgetId][widgetProperty] = value;

    };

    this.addWidget = function(widgetScope,widgetElem,widgetAttrs) {
        var widgetId = widgetAttrs['widgetId'] || widgetAttrs['model'];
        var x = $scope;
        $scope.view.wdg = $scope.view.wdg || {};
        $scope.view.wdg[widgetId] = widgetScope[widgetId];
        myWidgets += '|' + widgetId;
        widgetScope['_widgetId'] = widgetId;
        //console.log('twxView --- adding widget "' + widgetId + '" to view - total widgets: ' + myWidgets);
    };

    $scope.getWidgetScope = function(widgetId){
      return $scope.view.wdg[widgetId];
    };

    $scope.getWidgetProp = function (widgetId, prop) {
      return $scope.view.wdg[widgetId] ? $scope.view.wdg[widgetId][prop] : undefined;
    };

    $scope.setWidgetProp = function (widgetId, prop, val) {
      if ($scope.view.wdg[widgetId]) {
        $scope.view.wdg[widgetId][prop] = val;
      }
    };

    $scope.addWidgetEventListener = function (widgetId, widgetEvent, callback) {
      customWidgetEventListeners.push({
        widgetId: widgetId,
        widgetEvent: widgetEvent,
        callback: callback
      });
      if (!activeWidgetEvents[widgetEvent]) {
        activeWidgetEvents[widgetEvent] = true;
        $scope.$on(widgetEvent, function (event, args) {
          _.each(customWidgetEventListeners, function (listenerInfo) {
            if (listenerInfo.widgetId == event.targetScope.widgetId && listenerInfo.widgetEvent == event.name) {
              listenerInfo.callback();
            }
          });
        });
      }
    };

    $scope.pulse = 1.0;

    $scope.tracerWidth = 0.0;
    $scope.tracerHeight = 0.0;
    $scope.tracerDimensions = { minX: 0, maxX: 1, minY: 0, maxY: 1 };
    $scope.loadingPromise = null;
    $scope.modelLoaded = $element.find('twx-dt-model').length === 0;
    var modelCount = $element.find('twx-dt-model').length;
    var modelLoadedCount = 0;
    var targets = $element.find('twx-dt-target');

    // hide the target guide initially until the actual image to use is known.
    $scope.hideTargetGuide = true;

    function setImageTrackerTracerDimensions(src) {
      let image = new Image();
      image.onload = () => {
        $scope.tracerWidth = image.width;
        $scope.tracerHeight = image.height;
        $scope.$apply();
      };

      image.src = src;
    }

    var setGuideImageData = function() {
      if (targets[0]) { // assume one target only
        var src = targets[0].getAttribute("src");

        if (src.startsWith("vuforia-vumark://")) {
          var isVumark = targets[0].getAttribute("isVuMark");
          $scope.hideTargetGuide = false;
          if (isVumark) {
            $scope.targetGuideClass = "vumark";
            $scope.targetGuideHint = "Point camera at VuMark";
          } else {
            $scope.targetGuideClass = "thingmark";
            $scope.targetGuideHint = "Point camera at ThingMark";
          }
        } else if (src.startsWith('vuforia-image://')) {
          $scope.hideTargetGuide = false;
          $scope.targetGuideClass = "imageTarget";
          $scope.targetGuideHint = 'Point camera at image';
          setImageTrackerTracerDimensions(targets[0].getAttribute("guide-src"));
        } else if (src.startsWith("vuforia-area://")) {
          $scope.hideTargetGuide = false;
          $scope.targetGuideClass = "areaTarget";
          var targetGuideDiv = $element[0].querySelector("div.targetGuide");
          var guideSrc = targets[0].getAttribute("guide-src");
          if (targetGuideDiv && guideSrc) {
            targetGuideDiv.style.backgroundImage = "url('" + guideSrc + "')";
          }
          if(guideSrc.endsWith('extensions/images/area-target-guide.png')) {
            //checking for a mobile project, mobile projects are using the clean guide image. is there a better way to check?
            $scope.targetGuideHint = targets[0].getAttribute("guide-text");
          }
        } else if (!src.startsWith("spatial://")) {
          $scope.hideTargetGuide = false;
          var targetGuideDiv = $element[0].querySelector("div.targetGuide");
          var guideSrc = targets[0].getAttribute("guide-src");
          if (targetGuideDiv && guideSrc) {
            $scope.targetGuideClass = "imagemark";
            targetGuideDiv.style.backgroundImage = "url('" + guideSrc + "')";
          }
        }
      }
    };

    $scope.$applyAsync(function() {
      // This has to be invoked asynchronously now to give angular time to digest and interpolate the value of
      // guide-src="{{ ... }}" to the real value.
      setGuideImageData();
    });

    $scope.$on('trackingacquired', function (evt, arg) {
      tml3dRenderer.getTracked(function(trackedObjects) {
        $scope.startLoadingIndicatorIfNeeded(trackedObjects);
        $scope.applyTargetGuideIfNeeded(trackedObjects);
      });
    });

    $scope.$on('trackinglost', function (evt, arg) {
      tml3dRenderer.getTracked(function(trackedObjects) {
        $scope.applyTargetGuideIfNeeded(trackedObjects);
      });
    });

    $scope.$on('modelLoaded', function (evt, arg) {
      modelLoadedCount++;
      $scope.modelLoaded = true;

      tml3dRenderer.getTracked(function(trackedObjects) {
        $scope.applyTargetGuideIfNeeded(trackedObjects);
      });
    });

    // starts the 'spinner' animation around the thing code while the model is loading
    $scope.startLoadingIndicatorIfNeeded = function (trackedObjects) {
      if (!twx.app.fn.isCompatibleObjectsTracked(trackedObjects, targets)) {
        return;
      }

      // Start animation if this is first successful call to startLoadingIndicatorIfNeeded.
      var spinnerInterval = 0.03;
      if ($scope.pulse === 1.0 && $scope.loadingPromise === null) {
        $scope.loadingPromise = $interval(function () {
          // stop the animation after it makes one complete loop around
          if($scope.pulse <= 0) {
            // stop the animation
            $interval.cancel($scope.loadingPromise);
            $scope.loadingPromise = null;
            $scope.pulse = 0;
          }
          $scope.pulse -= spinnerInterval;
        }, 100);
      }
    };

    /**
     * @param trackedObjects [Elements]
     */
    $scope.applyTargetGuideIfNeeded = function(trackedObjects) {
      var hideTargetGuide = twx.app.fn.computeHideTargetGuide(trackedObjects, targets, modelLoadedCount, modelCount);

      $scope.$apply(function () {
        $scope.hideTargetGuide = hideTargetGuide;
      });
    };

    (function($scope, $element, $attrs, $timeout){

      // $scope, $element, $attrs, $injector, $sce, $timeout, $http, $ionicPopup, and $ionicPopover services are available




    }($scope, $element, $attrs, $timeout))

  });

  

  var moduleDependencies = ['ionic', 'ngCordova', 'vuforia-angular', 'com.thingworx.services', 'twxRuntime'];
  var app = angular.module('app', moduleDependencies);
    twx = twx || {};
    twx.appXXX = app;

  app.config(function(DataConnectorConfigProvider, $ionicConfigProvider) {
    //Configured TWX server
    app.twxRoot = "/Thingworx";

    // Get this from application config later
    DataConnectorConfigProvider.addDataProvider({
        name: 'ThingworxConnector',
        urlRoot: app.twxRoot
    });

    $ionicConfigProvider.views.swipeBackEnabled(false);
  });

  // filter to allow remote resources (images, models, etc.) to be loaded
  app.filter('trustUrl', function($sce) {
      return function(url) {
          return $sce.trustAsResourceUrl(url);
      };
  });

  app.controller('AppCtrl', function ($scope, $rootScope, $state, $stateParams, $ionicModal, $location, $http, $injector, $templateCache) {
      var appScope = this;
      twx.appScope = this;
      var locationParams = {};
      // replace any occurrences of unreplaced URL params (i.e. {{foo:bar}}) with an empty string - DT-18867
      for(var entry of (new URLSearchParams(location.search.replace(/{{[a-zA-Z]*:[a-zA-Z]*}}/g, ''))).entries()) {
        locationParams[entry[0]] = entry[1];
      }
      twx.app.params = angular.extend(twx.app.params, $stateParams, locationParams);
      $scope.app.params = angular.extend({}, twx.app.params);
      appScope.params = twx.app.params;
      appScope.fn = twx.app.fn;
      appScope.mdl = twx.app.mdl;
      appScope.evt = twx.app.evt;

      twx.device.mdl['CurrentDevice'] = {
            svc: {
              'getCameraPictureURL': {}
            }
          };

      appScope.camera = {};
      appScope.camera.lastPictureData = "";
      appScope.camera.getPictureData = function(){
        var options = {
          destinationType: Camera.DestinationType.DATA_URL,
          sourceType: Camera.PictureSourceType.CAMERA
        };
        var $cordovaCamera = $injector.get('$cordovaCamera');
        $cordovaCamera.getPicture(options).then(function (imageData) {
          appScope.camera.lastPictureData = imageData;
        }, function (err) {
          console.error('Error getting camera.', err);
        });
      };

      appScope.camera.getPictureURL = function(){
        var options = {
          destinationType: Camera.DestinationType.FILE_URI,
          sourceType: Camera.PictureSourceType.CAMERA
        };
        var $cordovaCamera = $injector.get('$cordovaCamera');
        $cordovaCamera.getPicture(options).then(function (imageURI) {
          appScope.camera.lastPictureURL = imageURI;
          twx.device.mdl['CurrentDevice'].svc['getCameraPictureURL'].data = imageURI;
        }, function (err) {
          console.error('Error getting camera picture.', err);
        });
      };

      $scope.$on('device.mdl.CurrentDevice.svc.getCameraPictureURL', function () {
            appScope.camera.getPictureURL();
        });

      $scope.$on('app-fn-navigate',function(e,data) {
        twx.app.fn.navigate(data['viewname']);
      });

      if($rootScope.enableVoiceCommands && twx.app.isPreview()) {
        $rootScope.$on('$ionicView.afterEnter', function(event, toState, toParams, fromState, fromParams) {
          // get the app events each time the view changes to ensure we're displaying the "triggerable" app events for the current view
          $scope.appEvents = twx.app.getAppEventsWithHandlers();
        });
       }

      $scope.showModal = function(view){

        var modalContents = '';
        var modalUrl = 'app/components/' + view + '.html';
        $http.get(modalUrl).then(function(response) {
          modalContents = response.data;
          var modalTransformedContents = modalContents.replace('ion-view','ion-modal-view');
          $scope.modal = $ionicModal.fromTemplate(modalTransformedContents, {
            scope: $scope,
            animation: 'slide-in-up'
          });
          $scope.modal.show();
          $scope.$broadcast('show-modal');
        });

      };

      $scope.hideModal = function(){
        $scope.modal.hide();
        $scope.modal.remove();
      };

      $scope.$on('app-fn-show-modal',function(e,data) {
        // DT-18461 modalIsActive helps us to add particular listener in twxWidget controller (in runtime)
        $scope.modalIsActive = true;
        $scope.showModal(data['viewname']);
      });

      $scope.$on('app-fn-hide-modal',function(e,data) {
        delete $scope.modalIsActive;
        $scope.hideModal();
      });

      appScope.acceleration = {};
      appScope.location = {};
      appScope.location.getCurrentLocation = function(){
        var posOptions = {timeout: 10000, enableHighAccuracy: false};
        var $cordovaGeolocation = $injector.get('$cordovaGeolocation');
        $cordovaGeolocation
          .getCurrentPosition(posOptions)
          .then(function (position) {
            var lat  = position.coords.latitude;
            var long = position.coords.longitude;
            appScope.location.lastLocation = { latitude: lat, longitude: long };
          }, function(err) {
            console.error("Error getting current position", err);
          });
      };
      appScope.location.lastLocation = {
        latitude: 40.056545,
        longitude: -99.672037
      };

      if($rootScope.enableVoiceCommands) {
        // add the speech service to the app scope when there are voice alias'd app events
        appScope.speech = $injector.get('appSpeechService');
        if(twx.app.isPreview()) {
            // in preview for eyewear projects, we'll wrap the calls to app.speech.synthesizeSpeech so we can display the text in the snackbar
            appScope.speech.synthesizeSpeech = _.wrap(appScope.speech.synthesizeSpeech, function(func, info) {
              twx.app.fn.addSnackbarMessage(info.text, 'voice-response');
              return func(info);
            });
        }
      }

      twx.device.camera = appScope.camera;
      twx.device.location = appScope.location;
      twx.device.acceleration = appScope.acceleration;
      appScope.listCanSwipe = true;
    });

  app.controller('AppsMenuCtrl', function ($scope, $timeout, $http, $ionicSideMenuDelegate, $location, $ionicHistory) {
      $scope.isCordovaApp = window.cordova === undefined ? false : true;
      if( !($scope.isCordovaApp) ) {
        $scope.hasBackView = function () {
           return ($ionicHistory.backView() != null);
        };
      }
      else {
        //DT-12925: Disable swipe gesture to show the menu when the spatial target is in view
        $scope.$on('$ionicView.afterEnter', function() {
          $timeout(function() {
            $ionicSideMenuDelegate.canDragContent(document.querySelectorAll('[original-widget="twx-dt-target-spatial"]').length === 0);
          }, 10); //Just after other listeners still removing the old view widgets
        });
      }

      $scope.toggleLeftMenu = function () {
        $ionicSideMenuDelegate.toggleLeft();
      };

      $scope.navigateFromLeftMenu = function (path) {
        $location.path(path);
        $ionicSideMenuDelegate.toggleLeft();
      };

      $scope.$watch(function(){
          return $ionicSideMenuDelegate.getOpenRatio();
      }, function(newValue, oldValue) {
          $scope.hideLeftMenu = !$ionicSideMenuDelegate.isOpenLeft();
      });
    });

  app.controller('BaseCtrl', function ($scope, $parse, $location, $state, $ionicPopup, $timeout, $injector) {
    $scope['twInvokeAction'] = function(name){
      if (this['twActions'] && this['twActions'][name]){
        var action = this['twActions'][name];
        var fn = $parse(action.do, /* interceptorFn */ null, /* expensiveChecks */ true);
        fn(action.scope);
      } else {
        console.log('Action "' + name + '" not found');
      }
    };

    $scope._setCurrentAndNavigate = function(items, item, target){
      items.Current = item;
      $scope.navigate(target);
    };

    $scope.showConfirmPopup = function (title, subtitle, confirmEventId, confirmView) {
      var confirmPopup = $ionicPopup.confirm({
        title: title,
        template: subtitle
      });
      confirmPopup.then(function (res) {
        if (res) {
          $scope.$emit(confirmEventId);
          if (confirmView !== '') {
            $scope.navigateOnTimeout(confirmView);
          }
        }
      });
    };

    $scope.navigateOnTimeout = function(target){
      $timeout(function () {
        $scope.navigate(target);
      }, 300);
    };

    $scope.$on('$stateChangeStart',function() {
      try {
        var vuforiaCleanup = $injector.get('vuforiaCleanup');
        if (vuforiaCleanup) {
          vuforiaCleanup.requestCleanupAndPause();
        }
      } catch(e) {console.log(e);}
    });

    $scope.navigate = function(target){
      $state.go(target);
    };
  });

}(window, document, angular));

/**
 * Adds a description meta tag for each supported language.  If the meta tag already exists, it will update the contents.
 */
function appendDescriptionMetaData(descriptionObj) {
  descriptionObj = descriptionObj || {};
  var head = document.querySelector('head');

  // append a 'description' meta tag for each supported language
  Object.keys(descriptionObj).forEach(function(lang) {
    var meta = document.querySelector('meta[name="description"][lang="' + lang + '"]');
    if(!meta) {
      meta = document.createElement('meta');
      meta.name = "description";
      meta.lang = lang;
      meta.content = descriptionObj[lang];

      // add the meta tag to the document's head element
      head.appendChild(meta);
    } else {
      // update the meta tag value
      meta.content = descriptionObj[lang];
    }
  });
};

/**
 *  initialize the mobile app/experience title and populate the params in the window.twx.app.params object.
 */
function updateTitleWithExpTitle() {
  var defaultParams = {"vumark":{"id":"vumark","isbound":"false","isdeletable":"false","name":"ThingMark","value":""},"template":{"id":"template","isbound":"false","isdeletable":"false","name":"Thing Template","value":""},"thing":{"id":"thing","isbound":"false","isdeletable":"false","name":"Thing","value":""},"ry":{"id":"ry","name":"ry","value":""},"tiltX":{"id":"tiltX","name":"tiltX","value":""},"tiltZ":{"id":"tiltZ","name":"tiltZ","value":""},"xpos":{"id":"xpos","name":"xpos","value":""},"ypos":{"id":"ypos","name":"ypos","value":""},"zpos":{"id":"zpos","name":"zpos","value":""},"markerRotation":{"id":"markerRotation","name":"markerRotation"}};

  Object.keys(defaultParams).forEach(function(key) {
    if (defaultParams[key].value) {
      window.twx.app.params[key] = defaultParams[key].value;
    }
  });

  // get the index of the experience being loaded, default to the first view if the 'expIndex' is not passed on the URL

  var urlParams = new URLSearchParams(location.search);
  var title = '';
  var descriptionObj = {};
  if (urlParams.has('expIndex')) {
    //Old bookmarks will come through here, may not be correct if experiences have been redone in a different order
    var expIdx = parseInt(twx.app.fn.getParameterByName('expIndex', location.href) || '0', 10);
    title = experienceInfo.getTitleByIndex(expIdx);
    descriptionObj = experienceInfo.getDescription(expIdx);
  }
  else if (urlParams.has('expId')) {
    //expId could still be old/stale if experiences have been all deleted and redone
    var exp = experienceInfo.findExperienceById(parseFloat(urlParams.get('expId')));
    title = experienceInfo.getTitle(exp);
    descriptionObj = exp.description;
  }
  else {
    title = experienceInfo.getTitleByIndex(0);
    descriptionObj = experienceInfo.getDescription(0);
    if (!title) {
      title = urlParams.get('project');
    }
  }

  // set the page title as the name of the loaded experience
  document.title = title;

  appendDescriptionMetaData(descriptionObj);
}

var experienceInfo = new twx.app.ExperienceInfo({"experiences":[{"index-keys":[],"title":{"en":"CXC Sigma TIle Analysis"},"description":{"en":"","en-US":""},"requires":["AR-tracking"],"tags":[],"icon":"","viewName":"HomePage","url-template":"index.html?expId=1","thumbnail":"public/Uploaded/thumbnail.png","experienceType":"vumark","id":1,"entryPoint":"index.html?expId=1","vumark":"","thingTemplateName":""}],"requires":["w320dp"],"accessType":"private","widgetsUsage":[{"timestamp":"2022-08-17T20:33:12.514Z","action":"PUBLISH","usage":{"twx-view":3,"twx-dt-view":1,"twx-dt-target":1,"twx-dt-model":1,"twx-overlay":1,"twx-overlay-container":5,"twx-image2":4,"twx-overlay-body":1,"twx-gridlayout":5,"twx-row":19,"twx-col":24,"twx-toggle-button":8,"twx-button":9,"twx-label":4,"twx-gauge":3}},{"timestamp":"2022-08-24T19:43:54.941Z","action":"LATEST_SAVE","usage":{"twx-view":12,"twx-gridlayout":16,"twx-row":59,"twx-image2":13,"twx-col":55,"twx-label":9,"twx-button":29,"twx-hyperlink":1,"twx-gauge":21,"twx-dt-view":4,"twx-dt-target":4,"twx-dt-model":4,"twx-overlay":4,"twx-overlay-container":20,"twx-overlay-body":4,"twx-dt-sensor":3,"twx-dt-label":3}}],"designedfor":[],"lastExpId":2});
