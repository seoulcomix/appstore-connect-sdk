/* tslint:disable */
/* eslint-disable */
/**
 * App Store Connect API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 3.8.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import {
    AppCustomProductPageLocalization,
    instanceOfAppCustomProductPageLocalization,
    AppCustomProductPageLocalizationFromJSON,
    AppCustomProductPageLocalizationFromJSONTyped,
    AppCustomProductPageLocalizationToJSON,
} from './AppCustomProductPageLocalization';
import {
    AppPreview,
    instanceOfAppPreview,
    AppPreviewFromJSON,
    AppPreviewFromJSONTyped,
    AppPreviewToJSON,
} from './AppPreview';
import {
    AppStoreVersionExperimentTreatmentLocalization,
    instanceOfAppStoreVersionExperimentTreatmentLocalization,
    AppStoreVersionExperimentTreatmentLocalizationFromJSON,
    AppStoreVersionExperimentTreatmentLocalizationFromJSONTyped,
    AppStoreVersionExperimentTreatmentLocalizationToJSON,
} from './AppStoreVersionExperimentTreatmentLocalization';
import {
    AppStoreVersionLocalization,
    instanceOfAppStoreVersionLocalization,
    AppStoreVersionLocalizationFromJSON,
    AppStoreVersionLocalizationFromJSONTyped,
    AppStoreVersionLocalizationToJSON,
} from './AppStoreVersionLocalization';

/**
 * @type AppPreviewSetsResponseIncludedInner
 * 
 * @export
 */
export type AppPreviewSetsResponseIncludedInner = AppCustomProductPageLocalization | AppPreview | AppStoreVersionExperimentTreatmentLocalization | AppStoreVersionLocalization;

export function AppPreviewSetsResponseIncludedInnerFromJSON(json: any): AppPreviewSetsResponseIncludedInner {
    return AppPreviewSetsResponseIncludedInnerFromJSONTyped(json, false);
}

export function AppPreviewSetsResponseIncludedInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppPreviewSetsResponseIncludedInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return { ...AppCustomProductPageLocalizationFromJSONTyped(json, true), ...AppPreviewFromJSONTyped(json, true), ...AppStoreVersionExperimentTreatmentLocalizationFromJSONTyped(json, true), ...AppStoreVersionLocalizationFromJSONTyped(json, true) };
}

export function AppPreviewSetsResponseIncludedInnerToJSON(value?: AppPreviewSetsResponseIncludedInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }

    if (instanceOfAppCustomProductPageLocalization(value)) {
        return AppCustomProductPageLocalizationToJSON(value as AppCustomProductPageLocalization);
    }
    if (instanceOfAppPreview(value)) {
        return AppPreviewToJSON(value as AppPreview);
    }
    if (instanceOfAppStoreVersionExperimentTreatmentLocalization(value)) {
        return AppStoreVersionExperimentTreatmentLocalizationToJSON(value as AppStoreVersionExperimentTreatmentLocalization);
    }
    if (instanceOfAppStoreVersionLocalization(value)) {
        return AppStoreVersionLocalizationToJSON(value as AppStoreVersionLocalization);
    }

    return {};
}

