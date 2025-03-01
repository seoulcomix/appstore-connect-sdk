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
/**
 * 
 * @export
 * @interface AppPreviewSetRelationshipsAppStoreVersionExperimentTreatmentLocalizationData
 */
export interface AppPreviewSetRelationshipsAppStoreVersionExperimentTreatmentLocalizationData {
    /**
     * 
     * @type {string}
     * @memberof AppPreviewSetRelationshipsAppStoreVersionExperimentTreatmentLocalizationData
     */
    type: AppPreviewSetRelationshipsAppStoreVersionExperimentTreatmentLocalizationDataTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof AppPreviewSetRelationshipsAppStoreVersionExperimentTreatmentLocalizationData
     */
    id: string;
}


/**
 * @export
 */
export const AppPreviewSetRelationshipsAppStoreVersionExperimentTreatmentLocalizationDataTypeEnum = {
    AppStoreVersionExperimentTreatmentLocalizations: 'appStoreVersionExperimentTreatmentLocalizations'
} as const;
export type AppPreviewSetRelationshipsAppStoreVersionExperimentTreatmentLocalizationDataTypeEnum = typeof AppPreviewSetRelationshipsAppStoreVersionExperimentTreatmentLocalizationDataTypeEnum[keyof typeof AppPreviewSetRelationshipsAppStoreVersionExperimentTreatmentLocalizationDataTypeEnum];


/**
 * Check if a given object implements the AppPreviewSetRelationshipsAppStoreVersionExperimentTreatmentLocalizationData interface.
 */
export function instanceOfAppPreviewSetRelationshipsAppStoreVersionExperimentTreatmentLocalizationData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function AppPreviewSetRelationshipsAppStoreVersionExperimentTreatmentLocalizationDataFromJSON(json: any): AppPreviewSetRelationshipsAppStoreVersionExperimentTreatmentLocalizationData {
    return AppPreviewSetRelationshipsAppStoreVersionExperimentTreatmentLocalizationDataFromJSONTyped(json, false);
}

export function AppPreviewSetRelationshipsAppStoreVersionExperimentTreatmentLocalizationDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppPreviewSetRelationshipsAppStoreVersionExperimentTreatmentLocalizationData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
    };
}

export function AppPreviewSetRelationshipsAppStoreVersionExperimentTreatmentLocalizationDataToJSON(value?: AppPreviewSetRelationshipsAppStoreVersionExperimentTreatmentLocalizationData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
    };
}

