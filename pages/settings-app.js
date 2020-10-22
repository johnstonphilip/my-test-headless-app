import Head from 'next/head'
import React from "react";
import dynamic from "next/dynamic";

//const Settings = dynamic(() => import('./myfile.js').then(x => x.Settings), { ssr: false } );
const Settings = dynamic(() => import('genesis-settings-app').then(x => x.Settings), { ssr: false } );

export default function SettingsApp() {
  
  return (
    <div className="genesis-common-settings-page">
      <Head>
        <style>
          {`
          /**
           * Settings page admin styling.
           */
          
          /* Admin Page
          ---------------------------------------------------------------------------- */
          
          /* Page
          --------------------------------------------- */
          
          .toplevel_page_genesis-common-settings #wpcontent {
            padding-left: 0;
          }
          
          .toplevel_page_genesis-common-settings #update-nag {
            display: none;
          }
          
          .genesis-common-settings-page {
            background-color: #fff;
            margin: 0;
            overflow: hidden;
            padding-bottom: 4%;
          }
          
          /* Header
          --------------------------------------------- */
          
          .genesis-common-settings-page .intro-wrap {
            background-color: #06c;
            background-image: linear-gradient(90deg, #06c 0%, #4eb0d3 100%);
            padding: 2% 0 0 0;
          }
          
          .genesis-common-settings-page .intro {
            box-sizing: border-box;
            display: inline-block;
            margin-bottom: 2.5%;
            padding: 0 4%;
            vertical-align: top;
            width: 100%;
          }
          
          .genesis-common-settings-page .intro h1,
          .genesis-common-settings-page .intro h3 {
            color: #fff;
            display: inline-block;
            font-weight: 300;
            font-size: 32px;
            line-height: 1.2;
            margin: 0;
          }
          
          /* Buttons & Links
          ---------------------------------------------------------------------------- */
          
          /* Base Button Styles
          --------------------------------------------- */
          
          .genesis-common-settings-page .components-button {
            border-radius: 3px;
            border-width: 0;
            font-size: 16px;
            height: auto;
            padding: 10px 15px;
            text-shadow: none;
            transition: all 0.25s ease-in-out;
          }
          
          .genesis-common-settings-sections + .is-primary.genesis-common-settings-save {
            margin: 0 4%;
          }
          
          /* Links & Text Buttons
          --------------------------------------------- */
          
          .genesis-common-settings-page a,
          .genesis-common-settings-page .components-button.is-link {
            color: #06c;
          }
          
          .genesis-common-settings-page a:active,
          .genesis-common-settings-page a:focus,
          .genesis-common-settings-page a:hover,
          .components-button.is-link:active:not(:disabled),
          .components-button.is-link:focus:not(:disabled),
          .components-button.is-link:hover:not(:disabled) {
            color: #06c;
            text-decoration: none;
          }
          
          /* Disabled Buttons
          --------------------------------------------- */
          
          .genesis-common-settings-page.wrap .components-button.is-primary:disabled,
          .genesis-common-settings-page.wrap .components-button.is-primary[aria-disabled="true"],
          .genesis-common-settings-page.wrap .components-button.is-primary[aria-disabled="true"]:focus,
          .genesis-common-settings-page.wrap .components-button.is-primary[aria-disabled="true"]:hover,
          .genesis-common-settings-page.wrap .components-button.is-secondary.is-busy,
          .genesis-common-settings-page.wrap .components-button.is-secondary:disabled,
          .genesis-common-settings-page.wrap .components-button.is-secondary[aria-disabled="true"],
          .genesis-common-settings-page.wrap .components-button.is-secondary[aria-disabled="true"]:focus,
          .genesis-common-settings-page.wrap .components-button.is-secondary[aria-disabled="true"]:hover {
            background-color: #eee;
            border-color: #ddd;
            box-shadow: inset 0 0 0 1px #ddd;
            color: #a1afbd;
          }
          
          .genesis-common-settings-page.wrap .components-button.is-primary.is-busy,
          .genesis-common-settings-page.wrap .components-button.is-primary.is-busy:disabled,
          .genesis-common-settings-page.wrap .components-button.is-primary.is-busy[aria-disabled="true"] {
            background-image: linear-gradient(-45deg, #23282d 28%, #39414a 0, #39414a 72%, #23282d 0);
            background-size: 100px 100%;
            border-color: #ddd;
            box-shadow: inset 0 0 0 1px #a1afbd;
            color: #a1afbd;
          }
          
          /* Primary Buttons
          --------------------------------------------- */
          
          .genesis-common-settings-page.wrap .components-button.is-primary:not(:disabled) {
            background-color: #06c;
            box-shadow: none;
            color: #fff;
          }
          
          .genesis-common-settings-page.wrap .components-button.is-primary:active:not(:disabled),
          .genesis-common-settings-page.wrap .components-button.is-primary:focus:not(:disabled),
          .genesis-common-settings-page.wrap .components-button.is-primary:hover:not(:disabled):not([aria-disabled="true"]) {
            background-color: #23282d;
            box-shadow: 0 1px 15px 0 rgba(0, 0, 0, 0.12);
          }
          
          /* Secondary Buttons
          --------------------------------------------- */
          
          .genesis-common-settings-page.wrap .components-button.is-secondary:not(:disabled) {
            background-color: #f3f5f6;
            border-color: #06c;
            box-shadow: inset 0 0 0 1px #06c;
            color: #06c;
            outline: none;
          }
          
          .genesis-common-settings-page.wrap .components-button.is-secondary:active:not(:disabled),
          .genesis-common-settings-page.wrap .components-button.is-secondary:focus:not(:disabled),
          .genesis-common-settings-page.wrap .components-button.is-secondary:hover:not(:disabled):not([aria-disabled="true"]) {
            background-color: #fff;
            border-color: #23282d;
            box-shadow: inset 0 0 0 1px #23282d;
            color: #23282d;
          }
          
          /* Destructive Buttons
          --------------------------------------------- */
          
          .genesis-common-settings-page.wrap .components-button.is-destructive:not(:disabled),
          .genesis-common-settings-page.wrap .components-button.is-destructive:active:not(:disabled),
          .genesis-common-settings-page.wrap .components-button.is-destructive:focus:not(:disabled),
          .genesis-common-settings-page.wrap .components-button.is-destructive:hover:not(:disabled) {
            box-shadow: none;
            color: #d94f4f;
            outline: none;
          }
          
          
          /* Setting Tabs
          ---------------------------------------------------------------------------- */
          
          /* Tab Buttons
          --------------------------------------------- */
          
          .genesis-common-settings-page .genesis-common-settings-sections .components-tab-panel__tabs {
            background-color: #06c;
            background-image: linear-gradient(90deg, #06c 0%, #4eb0d3 100%);
            padding: 0 4%;
          }
          
          .genesis-common-settings-page .genesis-common-settings-sections .components-tab-panel__tabs .components-button,
          .genesis-common-settings-page .genesis-common-settings-sections .components-tab-panel__tabs .components-button:focus:not(:disabled),
          .genesis-common-settings-page .genesis-common-settings-sections .components-tab-panel__tabs .components-button:hover:not(:disabled) {
            color: #fff;
            border-radius: 3px 3px 0 0;
            box-shadow: none !important;
            font-size: 18px;
            height: auto;
            padding: 25px 30px;
            outline: none;
            text-decoration: none;
          }
          
          .genesis-common-settings-page .genesis-common-settings-sections .components-tab-panel__tabs .components-button:hover:not(:disabled):not(.is-active) {
            background-color: rgba(255, 255, 255, 0.15) !important;
            color: #fff !important;
          }
          
          .genesis-common-settings-page .genesis-common-settings-sections .components-tab-panel__tabs .components-button.is-active,
          .genesis-common-settings-page .genesis-common-settings-sections .components-tab-panel__tabs .components-button.is-active:hover:not(:disabled) {
            background: #fff;
            border: none;
            box-shadow: none;
            color: #06c;
            text-decoration: none;
          }
          
          .genesis-common-settings-page .genesis-common-settings-sections .components-tab-panel__tabs .components-button:focus:not(.is-active):not(:disabled) {
            background-color: transparent;
          }
          
          .genesis-common-settings-page .genesis-common-settings-sections .components-tab-panel__tabs .components-button.is-active:focus:not(:disabled) {
            color: #23282d !important;
          }
          
          /* Tab Panels
          --------------------------------------------- */
          
          .genesis-common-settings-sections .components-tab-panel__tab-content {
            background-color: #fff;
            box-sizing: border-box;
            display: inline-block;
            font-size: 16px;
            padding: 4%;
            transition: all 0.25s ease-in-out;
            width: 100%;
          }
          
          .genesis-common-settings-sections .components-tab-panel__tab-content hr {
            border-width: 0;
            border-top: 2px solid #e6eaed;
            height: 1px;
            margin: 2em 0;
          }
          
          .genesis-common-settings-sections .components-tab-panel__tab-content p {
            font-size: 19px;
            line-height: 1.7;
          }
          
          .genesis-common-settings-sections .components-base-control,
          .genesis-common-settings-sections .genesis-common-settings-image {
            padding: 0 2em;
            margin-bottom: 2em;
          }
          
          .genesis-common-settings-sections .components-base-control + .components-base-control {
            border-top: 1px dotted #e6eaed;
            padding-top: 2em;
          }
          
          .genesis-common-section-heading.components-base-control {
            background-color: #f1f4f7;
            border-radius: 5px;
            padding: 0.5em 2em 1.5em;
          }
          
          .genesis-common-settings-sections h2 {
            font-size: 24px;
          }
          
          .genesis-common-settings-sections p.components-base-control__help {
            color: #666;
            font-size: 16px;
            font-style: italic;
            margin: 5px 0;
          }
          
          /* Form Elements
          ---------------------------------------------------------------------------- */
          
          .genesis-common-settings-sections .components-select-control__input,
          .genesis-common-settings-sections .components-text-control__input,
          .genesis-common-settings-sections .components-textarea-control__input {
            border-radius: 5px;
            font-size: 18px;
            height: auto;
            padding: 12px;
          }
          
          .genesis-common-settings-sections .components-text-control__input:focus,
          .genesis-common-settings-sections .components-textarea-control__input:focus,
          .genesis-common-settings-sections .components-radio-control__input:focus,
          .genesis-common-settings-sections .components-select-control__input:focus {
            border-color: #06c;
            box-shadow: 0 0 0 1px #06c;
          }
          
          .genesis-common-settings-sections .components-select-control__input:focus {
            color: #06c;
          }
          
          .genesis-common-settings-sections .components-checkbox-control__input[type="checkbox"]:focus {
            border-color: #06c;
          }
          
          .genesis-common-settings-sections .components-checkbox-control__input[type="checkbox"]:checked {
            background-color: #06c;
            border-color: #06c;
          }
          
          .genesis-common-settings-sections label {
            font-size: 18px;
          }
          
          .genesis-common-settings-sections .components-base-control__label {
            display: block;
            font-weight: 600;
            margin-bottom: 15px;
          }
          
          .genesis-common-settings-page.wrap .components-button.is-secondary.genesis-common-settings-image__preview {
            background-color: transparent;
            border: 1px solid #7e8993;
            border-radius: 0;
            box-shadow: none;
            display: block;
            min-width: 150px;
            margin-bottom: 15px;
            padding: 0;
          }
          
          .genesis-common-settings-page.wrap .components-button.is-secondary.genesis-common-settings-image__preview:hover,
          .genesis-common-settings-page.wrap .components-button.is-secondary.genesis-common-settings-image__preview:focus {
            border-color: #06c;
          }
          
          /* Notices
          ---------------------------------------------------------------------------- */
          
          .genesis-common-save-notice {
            font-size: 15px;
            font-weight: 700;
          }
          
          .genesis-common-save-notice.success {
            color: #008000;
          }
          
          .genesis-common-save-notice.fail {
            color: #d94f4f;
          }
          
          .genesis-common-settings-sections + .is-primary.genesis-common-settings-save.has-notices {
            margin: 0 2% 0 4%;
          }
          
          /* Media Queries
          ---------------------------------------------------------------------------- */
          
          @media (prefers-reduced-motion: reduce) {
          
            .genesis-common-settings-page .components-button {
              transition-duration: 0s;
            }
          
          }
          
          @media only screen and (max-width: 1140px) {
          
            .genesis-common-settings-page .genesis-common-settings-sections .components-tab-panel__tabs .components-button,
            .genesis-common-settings-page .genesis-common-settings-sections .components-tab-panel__tabs .components-button:focus:not(:disabled),
            .genesis-common-settings-page .genesis-common-settings-sections .components-tab-panel__tabs .components-button:hover:not(:disabled) {
              font-size: 16px;
              padding: 15px 20px;
            }
          
          }
          
          @media only screen and (max-width: 782px) {
          
            .genesis-common-settings-page .genesis-common-settings-sections .components-tab-panel__tabs {
              display: block;
              padding-bottom: 2.5%;
            }
          
            .genesis-common-settings-page .genesis-common-settings-sections .components-tab-panel__tabs .components-button,
            .genesis-common-settings-page .genesis-common-settings-sections .components-tab-panel__tabs .components-button:focus:not(:disabled),
            .genesis-common-settings-page .genesis-common-settings-sections .components-tab-panel__tabs .components-button:hover:not(:disabled) {
              background-color: rgba(255, 255, 255, 0.2);
              border-radius: 3px;
              margin: 0 10px 10px 0;
            }
          
            .genesis-common-settings-page .genesis-common-settings-sections .components-tab-panel__tabs .components-button:hover:not(:disabled) {
              background-color: rgba(255, 255, 255, 0.9);
              color: #06c;
            }
          
            .genesis-common-settings-page .genesis-common-settings-sections .components-tab-panel__tabs .components-button:focus:not(:disabled) {
              background-color: #fff;
              color: #23282d;
            }
          
          }
          
          `}
        </style>
      </Head>
      <Settings 
  			onChange={ (updatedSettings) => console.log( updatedSettings ) }
  			sections={{
  				my_tab_slug: {
  					name: 'my_tab_slug',
  					title: 'Tab One',
  					fields:[
  						{
  							id: 'setting_slug',
  							label: 'Field One',
  							type: 'text',
  							default: 'I am the default for the first field',
  						},
  						{
  							id: 'another_setting_slug',
  							label: 'Field Two',
  							type: 'textarea',
  							default: 'I am the default for the second field',
  						},
  					],
  				}
  			}}
  		/>
    </div>
  )

}
