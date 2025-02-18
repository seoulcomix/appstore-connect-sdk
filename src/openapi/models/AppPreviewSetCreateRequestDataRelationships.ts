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

import { exists, mapValues } from '../runtime';
import type { AppPreviewSetRelationshipsAppCustomProductPageLocalization } from './AppPreviewSetRelationshipsAppCustomProductPageLocalization';
import {
    AppPreviewSetRelationshipsAppCustomProductPageLocalizationFromJSON,
    AppPreviewSetRelationshipsAppCustomProductPageLocalizationFromJSONTyped,
    AppPreviewSetRelationshipsAppCustomProductPageLocalizationToJSON,
} from './AppPreviewSetRelationshipsAppCustomProductPageLocalization';
import type { AppPreviewSetRelationshipsAppStoreVersionExperimentTreatmentLocalization } from './AppPreviewSetRelationshipsAppStoreVersionExperimentTreatmentLocalization';
import {
    AppPreviewSetRelationshipsAppStoreVersionExperimentTreatmentLocalizationFromJSON,
    AppPreviewSetRelationshipsAppStoreVersionExperimentTreatmentLocalizationFromJSONTyped,
    AppPreviewSetRelationshipsAppStoreVersionExperimentTreatmentLocalizationToJSON,
} from './AppPreviewSetRelationshipsAppStoreVersionExperimentTreatmentLocalization';
import type { AppPreviewSetRelationshipsAppStoreVersionLocalization } from './AppPreviewSetRelationshipsAppStoreVersionLocalization';
import {
    AppPreviewSetRelationshipsAppStoreVersionLocalizationFromJSON,
    AppPreviewSetRelationshipsAppStoreVersionLocalizationFromJSONTyped,
    AppPreviewSetRelationshipsAppStoreVersionLocalizationToJSON,
} from './AppPreviewSetRelationshipsAppStoreVersionLocalization';

/**
 * 
 * @export
 * @interface AppPreviewSetCreateRequestDataRelationships
 */
export interface AppPreviewSetCreateRequestDataRelationships {
    /**
     * 
     * @type {AppPreviewSetRelationshipsAppStoreVersionLocalization}
     * @memberof AppPreviewSetCreateRequestDataRelationships
     */
    appStoreVersionLocalization?: AppPreviewSetRelationshipsAppStoreVersionLocalization;
    /**
     * 
     * @type {AppPreviewSetRelationshipsAppCustomProductPageLocalization}
     * @memberof AppPreviewSetCreateRequestDataRelationships
     */
    appCustomProductPageLocalization?: AppPreviewSetRelationshipsAppCustomProductPageLocalization;
    /**
     * 
     * @type {AppPreviewSetRelationshipsAppStoreVersionExperimentTreatmentLocalization}
     * @memberof AppPreviewSetCreateRequestDataRelationships
     */
    appStoreVersionExperimentTreatmentLocalization?: AppPreviewSetRelationshipsAppStoreVersionExperimentTreatmentLocalization;
}

/**
 * Check if a given object implements the AppPreviewSetCreateRequestDataRelationships interface.
 */
export function instanceOfAppPreviewSetCreateRequestDataRelationships(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AppPreviewSetCreateRequestDataRelationshipsFromJSON(json: any): AppPreviewSetCreateRequestDataRelationships {
    return AppPreviewSetCreateRequestDataRelationshipsFromJSONTyped(json, false);
}

export function AppPreviewSetCreateRequestDataRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppPreviewSetCreateRequestDataRelationships {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'appStoreVersionLocalization': !exists(json, 'appStoreVersionLocalization') ? undefined : AppPreviewSetRelationshipsAppStoreVersionLocalizationFromJSON(json['appStoreVersionLocalization']),
        'appCustomProductPageLocalization': !exists(json, 'appCustomProductPageLocalization') ? undefined : AppPreviewSetRelationshipsAppCustomProductPageLocalizationFromJSON(json['appCustomProductPageLocalization']),
        'appStoreVersionExperimentTreatmentLocalization': !exists(json, 'appStoreVersionExperimentTreatmentLocalization') ? undefined : AppPreviewSetRelationshipsAppStoreVersionExperimentTreatmentLocalizationFromJSON(json['appStoreVersionExperimentTreatmentLocalization']),
    };
}

export function AppPreviewSetCreateRequestDataRelationshipsToJSON(value?: AppPreviewSetCreateRequestDataRelationships | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'appStoreVersionLocalization': AppPreviewSetRelationshipsAppStoreVersionLocalizationToJSON(value.appStoreVersionLocalization),
        'appCustomProductPageLocalization': AppPreviewSetRelationshipsAppCustomProductPageLocalizationToJSON(value.appCustomProductPageLocalization),
        'appStoreVersionExperimentTreatmentLocalization': AppPreviewSetRelationshipsAppStoreVersionExperimentTreatmentLocalizationToJSON(value.appStoreVersionExperimentTreatmentLocalization),
    };
}

